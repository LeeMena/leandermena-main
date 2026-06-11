# leandermena-contact-form Worker

Cloudflare Worker that handles the `/contact` form on `leandermena.com`.  
Replaces Formspree. Sends email via **Cloudflare Email Routing** — zero third-party dependency.

## Features
- Honeypot bot trap (hidden `website` field — bots fill it, humans don't)
- Per-IP rate limiting via KV (5 submissions / hour)
- Input validation (name ≥ 2 chars, valid email regex, message 10–5000 chars)
- CORS locked to `https://www.leandermena.com`
- Accepts both `application/json` and `multipart/form-data`
- Graceful fallback error message with direct email on failure

## Setup

### 1. Prerequisites
- Cloudflare account with `leandermena.com` zone
- Cloudflare Email Routing enabled (Dashboard → Email → Email Routing)
- `noreply@leandermena.com` added as a **sender** address and verified
- `leander@leandermena.com` added as a **destination** address and verified

### 2. Create KV namespace
```bash
npx wrangler kv:namespace create RATE_LIMIT_KV
```
Copy the returned `id` and paste it into `wrangler.toml` → `kv_namespaces[0].id`.

### 3. Set secrets
```bash
npx wrangler secret put RECIPIENT_EMAIL
# enter: leander@leandermena.com

npx wrangler secret put SENDER_EMAIL
# enter: noreply@leandermena.com
```

### 4. Deploy
```bash
npx wrangler deploy
```

### 5. Add custom domain
In the Cloudflare Workers dashboard → your Worker → Settings → Domains & Routes  
Add custom domain: `contact.leandermena.com`

### 6. Update Contact.tsx
Change the fetch URL from:
```
https://formspree.io/f/xpwzgkqp
```
To:
```
https://contact.leandermena.com/submit
```
This is already done in `src/pages/Contact.tsx` and `public/contact/index.html`.

## Endpoint
```
POST https://contact.leandermena.com/submit
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "message": "I'd like to discuss a pre-opening engagement.",
  "website": ""  // honeypot — must be empty string or absent
}
```

### Success response
```json
{ "status": "success", "message": "Thank you. Leander will respond within 24 hours." }
```

### Error responses
| Status | Meaning |
|--------|---------|
| 400 | Invalid request body |
| 405 | Wrong HTTP method |
| 422 | Validation failure (see `error` field) |
| 429 | Rate limited |
| 502 | Email send failed |
