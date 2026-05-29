import { useState } from 'react';
import Layout from '../components/Layout';

export default function Book() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', business: '', interest: '', details: '', website: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, business: form.business, interest: form.interest, details: form.details }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout seo={{
      title: 'Book a Discovery Call | Leander Mena Miami',
      description: 'Start a conversation about fractional F&B leadership, pre-opening support, or operations recovery in Miami.',
    }}>
      <section className="pt-40 pb-24 bg-luxury-black">
        <div className="container-luxury max-w-2xl">
          <span className="eyebrow">Contact</span>
          <h1 className="font-display text-5xl md:text-6xl text-luxury-text mb-6">
            Let's Talk About Your Operation
          </h1>
          <p className="text-luxury-muted mb-12">
            Share some details below. Leander will respond within 24 hours to schedule a direct conversation.
          </p>

          {status === 'success' ? (
            <div className="border border-gold/40 p-8 text-center">
              <p className="font-serif text-2xl text-gold mb-3">Message Received</p>
              <p className="text-luxury-muted">Leander will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input name="website" type="text" value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} style={{ display: 'none' }} tabIndex={-1} aria-hidden />

              <div className="grid md:grid-cols-2 gap-6">
                {[{ name: 'name', label: 'Your Name', type: 'text', required: true }, { name: 'email', label: 'Email Address', type: 'email', required: true }].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">{f.label}</label>
                    <input type={f.type} required={f.required}
                      value={form[f.name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [f.name]: e.target.value })}
                      className="w-full bg-luxury-dark border border-luxury-border px-4 py-3 text-luxury-text text-sm focus:border-gold/60 focus:outline-none transition-colors" />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Business / Property Name</label>
                <input type="text" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })}
                  className="w-full bg-luxury-dark border border-luxury-border px-4 py-3 text-luxury-text text-sm focus:border-gold/60 focus:outline-none transition-colors" />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Area of Interest</label>
                <select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-luxury-dark border border-luxury-border px-4 py-3 text-luxury-muted text-sm focus:border-gold/60 focus:outline-none transition-colors">
                  <option value="">Select one</option>
                  <option>Fractional GM / Ongoing Operations Support</option>
                  <option>Pre-Opening Leadership</option>
                  <option>Operations Recovery</option>
                  <option>Strategic Advisory</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">Tell Me About Your Situation</label>
                <textarea rows={5} value={form.details} onChange={e => setForm({ ...form, details: e.target.value })}
                  className="w-full bg-luxury-dark border border-luxury-border px-4 py-3 text-luxury-text text-sm focus:border-gold/60 focus:outline-none transition-colors resize-none" />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please email consulting@leandermena.com directly.</p>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
