/**
 * Cloudflare Worker: Formspree → ConvertKit Bridge
 * Receives a webhook POST from Formspree and subscribes
 * the submitter to a ConvertKit form.
 */

export default {
  async fetch(request, env) {
    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // Allow CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response('Invalid JSON', { status: 400 });
    }

    const email = body?.data?.email || body?.email;
    const firstName = body?.data?.firstName || body?.data?.first_name || body?.firstName || '';

    if (!email) {
      return new Response('Missing email', { status: 400 });
    }

    const apiKey = env.CONVERTKIT_API_KEY;
    const formId = env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      return new Response('Worker secrets not configured', { status: 500 });
    }

    // Subscribe to ConvertKit form
    const ckResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          first_name: firstName,
        }),
      }
    );

    const ckData = await ckResponse.json();

    if (!ckResponse.ok) {
      return new Response(
        JSON.stringify({ error: 'ConvertKit error', details: ckData }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, subscriber: ckData.subscription?.subscriber?.email }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  },
};
