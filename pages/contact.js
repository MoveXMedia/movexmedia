import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/xbdzolkv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: '#ffffff',
    border: '1px solid #d1dce8',
    borderRadius: '8px',
    padding: '0.85rem 1rem',
    color: '#0d1f35',
    fontSize: '0.95rem',
    fontFamily: 'Exo 2, sans-serif',
    fontWeight: 400,
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.68rem',
    letterSpacing: '0.12em',
    color: '#6b849a',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    fontWeight: 600,
  };

  return (
    <>
      <Head>
        <title>Contact — MoveX Media</title>
        <meta name="description" content="Book a free strategy session with MoveX Media. Digital marketing for health and allied health practices in Perth." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Contact — MoveX Media" />
        <meta property="og:description" content="Book a free strategy session with MoveX Media. Digital marketing for health and allied health practices in Perth." />
        <meta property="og:url" content="https://movex.media/contact" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact — MoveX Media" />
        <meta name="twitter:description" content="Book a free strategy session with MoveX Media. Digital marketing for health and allied health practices in Perth." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      <section className="page-hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Mission Control</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Let's <span style={{ color: '#5bc4f5' }}>Launch</span><br />Your Growth
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.05rem',
            lineHeight: '1.8',
            maxWidth: '500px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            Book a free strategy session. No obligation — just an honest conversation about where your practice is and how we'd grow it.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 2rem 6rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center', boxShadow: '0 4px 24px rgba(13,31,53,0.06)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.2rem', marginBottom: '1rem', color: '#5bc4f5' }}>Message Received</h2>
                  <p style={{ color: '#6b849a', fontWeight: 300, lineHeight: '1.7' }}>
                    We&apos;ll be in touch within 1 business day to book your strategy session. Get ready for liftoff.
                  </p>
                </div>
              ) : (
                <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(13,31,53,0.06)' }}>
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.25rem', color: '#0d1f35', marginBottom: '0.4rem' }}>Send us a message</h2>
                  <p style={{ color: '#6b849a', fontSize: '0.88rem', fontWeight: 300, marginBottom: '2rem', lineHeight: 1.6 }}>We&apos;ll get back to you within 1 business day.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={labelStyle}>Your Name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} placeholder="Jane Smith" />
                      </div>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="jane@clinic.com.au" />
                      </div>
                    </div>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <div>
                        <label style={labelStyle}>Phone</label>
                        <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="0400 000 000" />
                      </div>
                      <div>
                        <label style={labelStyle}>Practice Name</label>
                        <input name="practice" value={form.practice} onChange={handleChange} style={inputStyle} placeholder="Your Clinic" />
                      </div>
                    </div>
                    <div style={{ marginBottom: '1.25rem' }}>
                      <label style={labelStyle}>I&apos;m interested in</label>
                      <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select a service...</option>
                        <option value="google-ads">Google Ads</option>
                        <option value="facebook">Facebook &amp; Instagram Ads</option>
                        <option value="social">Social Media Management</option>
                        <option value="email">Email Marketing</option>
                        <option value="website">Website Development</option>
                        <option value="hub">MoveX Marketing Hub</option>
                        <option value="all">Full-service marketing</option>
                        <option value="audit">Just the free audit</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                      <label style={labelStyle}>Tell us about your practice</label>
                      <textarea name="message" value={form.message} onChange={handleChange} style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }} placeholder="Where are you based, what type of practice, what's your main marketing challenge?" />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ fontSize: '0.8rem', padding: '1rem 2rem', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                    {error && (
                      <p style={{ color: '#e05555', marginTop: '1rem', fontSize: '0.85rem' }}>
                        Something went wrong — please email us directly at admin@movex.media
                      </p>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(13,31,53,0.05)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>📍</div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#0d1f35', marginBottom: '0.4rem' }}>Location</h3>
                  <p style={{ color: '#6b849a', fontWeight: 300, lineHeight: '1.7', fontSize: '0.88rem', margin: 0 }}>Perth, Western Australia — Available nationally</p>
                </div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(13,31,53,0.05)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>✉️</div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#0d1f35', marginBottom: '0.4rem' }}>Email</h3>
                  <p style={{ color: '#6b849a', fontWeight: 300, lineHeight: '1.7', fontSize: '0.88rem', margin: 0 }}>admin@movex.media</p>
                </div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', boxShadow: '0 2px 12px rgba(13,31,53,0.05)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>⏱️</div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#0d1f35', marginBottom: '0.4rem' }}>Response Time</h3>
                  <p style={{ color: '#6b849a', fontWeight: 300, lineHeight: '1.7', fontSize: '0.88rem', margin: 0 }}>We respond to all enquiries within 1 business day. Strategy sessions are available Monday to Saturday.</p>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)', border: '1px solid rgba(91,196,245,0.25)', borderRadius: '14px', padding: '1.75rem', boxShadow: '0 4px 24px rgba(13,31,53,0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>🎯</span>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#5bc4f5', margin: 0 }}>Free Strategy Session</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: '1.75', fontSize: '0.88rem', margin: 0 }}>
                  Every new client starts with a free, no-obligation strategy session. We&apos;ll review your current marketing, identify your biggest growth opportunities, and tell you honestly what we&apos;d do and what it would cost.
                </p>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          input::placeholder, textarea::placeholder { color: #a0b3c6; }
          input:focus, textarea:focus, select:focus { border-color: #5bc4f5 !important; box-shadow: 0 0 0 3px rgba(91,196,245,0.1); }
          select option { background: #ffffff; color: #0d1f35; }
        `}</style>
      </section>
    </>
  );
}
