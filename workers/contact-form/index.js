/**
 * Cloudflare Worker: Contact Form Handler
 * Route:  POST https://contact.leandermena.com/submit
 *         (or Pages Function at /api/contact)
 *
 * Secrets required (set via: npx wrangler secret put SECRET_NAME):
 *   RECIPIENT_EMAIL   — leander@leandermena.com
 *   SENDER_EMAIL      — noreply@leandermena.com  (must be verified in CF Email Routing)
 *   RATE_LIMIT_SECRET — any random string, used to namespace KV keys
 *
 * KV Binding required:
 *   RATE_LIMIT_KV     — bound in wrangler.toml, used for per-IP rate limiting
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://www.leandermena.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email).trim().toLowerCase());
}

async function checkRateLimit(env, ip) {
  if (!env.RATE_LIMIT_KV) return false; // KV not bound — skip limiting
  const key = `rl:${ip}`;
  const raw = await env.RATE_LIMIT_KV.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= 5) return true; // blocked: 5 submissions per hour per IP
  await env.RATE_LIMIT_KV.put(key, String(count + 1), { expirationTtl: 3600 });
  return false;
}

async function sendEmail(env, { name, email, message }) {
  // Cloudflare Email Routing via send_email binding
  // Binding name: SEND_EMAIL (set in wrangler.toml)
  const emailContent = [
    `From: Contact Form <${env.SENDER_EMAIL}>`,
    `To: ${env.RECIPIENT_EMAIL}`,
    `Reply-To: ${email}`,
    `Subject: New Contact Form Submission — ${name}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    ``,
    `Message:`,
    message,
    ``,
    `---`,
    `Submitted via leandermena.com/contact`,
  ].join('\r\n');

  const message_obj = new EmailMessage(
    env.SENDER_EMAIL,
    env.RECIPIENT_EMAIL,
    emailContent
  );

  await env.SEND_EMAIL.send(message_obj);
}

export default {
  async fetch(request, env, ctx) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    // --- Rate limit by IP ---
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const limited = await checkRateLimit(env, ip);
    if (limited) {
      return json({ error: 'Too many requests. Please try again later.' }, 429);
    }

    // --- Parse body ---
    let body;
    try {
      const ct = request.headers.get('Content-Type') || '';
      if (ct.includes('application/json')) {
        body = await request.json();
      } else {
        const fd = await request.formData();
        body = Object.fromEntries(fd.entries());
      }
    } catch {
      return json({ error: 'Invalid request body.' }, 400);
    }

    // --- Honeypot check (bot trap) ---
    // Field named "website" must be empty. Bots fill all fields.
    if (body.website && String(body.website).trim() !== '') {
      // Silently accept but do not process — bots see success
      return json({ status: 'success', message: 'Thank you. Leander will respond within 24 hours.' });
    }

    // --- Field validation ---
    const name    = String(body.name    || '').trim();
    const email   = String(body.email   || '').trim();
    const message = String(body.message || '').trim();

    if (!name || name.length < 2) {
      return json({ error: 'Please enter your name.' }, 422);
    }
    if (!email || !isValidEmail(email)) {
      return json({ error: 'Please enter a valid email address.' }, 422);
    }
    if (!message || message.length < 10) {
      return json({ error: 'Message must be at least 10 characters.' }, 422);
    }
    if (message.length > 5000) {
      return json({ error: 'Message is too long (max 5000 characters).' }, 422);
    }

    // --- Send email ---
    try {
      await sendEmail(env, { name, email, message });
    } catch (err) {
      console.error('Email send failed:', err);
      return json({ error: 'Failed to send message. Please email leander@leandermena.com directly.' }, 502);
    }

    return json({
      status: 'success',
      message: 'Thank you. Leander will respond within 24 hours.',
    });
  },
};
