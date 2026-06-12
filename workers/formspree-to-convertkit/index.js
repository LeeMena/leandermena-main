/**
 * Cloudflare Worker: Formspree → ConvertKit Bridge
 * Free tier: 100,000 requests/day
 *
 * Deploy: npx wrangler deploy workers/formspree-to-convertkit/index.js --name blueprint-lead-capture
 *
 * Required Worker Secrets (set via Cloudflare dashboard → Workers → Settings → Variables):
 *   CONVERTKIT_API_KEY  - Your ConvertKit API v3 key
 *   CONVERTKIT_FORM_ID  - Your ConvertKit form ID for the 90-Day Blueprint sequence
 */

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(),
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const url = new URL(request.url);

    // Route: /subscribe  → Blueprint lead magnet capture
    if (url.pathname === '/subscribe') {
      return handleSubscribe(request, env);
    }

    return new Response('Not Found', { status: 404 });
  },
};

async function handleSubscribe(request, env) {
  let body;
  const contentType = request.headers.get('content-type') || '';

  try {
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = Object.fromEntries(formData);
    }
  } catch (e) {
    return jsonResponse({ error: 'Invalid request body' }, 400);
  }

  const email = (body.email || '').trim().toLowerCase();
  const firstName = (body.first_name || body.name || '').trim().split(' ')[0];

  if (!email || !email.includes('@')) {
    return jsonResponse({ error: 'Valid email required' }, 400);
  }

  // Push to ConvertKit
  const ckPayload = {
    api_key: env.CONVERTKIT_API_KEY,
    email,
    first_name: firstName || undefined,
    tags: ['blueprint-download', 'website-lead'],
  };

  const ckResponse = await fetch(
    `https://api.convertkit.com/v3/forms/${env.CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ckPayload),
    }
  );

  if (!ckResponse.ok) {
    const err = await ckResponse.text();
    console.error('ConvertKit error:', err);
    return jsonResponse({ error: 'Subscription failed. Please try again.' }, 500);
  }

  return jsonResponse(
    {
      success: true,
      message: 'You are subscribed! Check your email for the 90-Day Blueprint.',
    },
    200
  );
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'https://www.leandermena.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
    },
  });
}
