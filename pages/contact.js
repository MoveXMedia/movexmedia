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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to your form handler / CRM
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(15,37,64,0.5)',
    border: '1px solid rgba(26,58,92,0.8)',
    borderRadius: '2px',
    padding: '0.85rem 1rem',
    color: 'white',
    fontSize: '0.95rem',
    fontFamily: 'Exo 2, sans-serif',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
  };

  return (
    <>
      <Head>
        <title>Contact — MoveX Media</title>
        <meta name="description" content="Book a free strategy session with MoveX Media. Digital marketing for health and allied health practices in Perth." />
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

      <section style={{ padding: '3rem 2rem 8rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="grid-2" style={{ gap: '4rem' }}>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                  <h2 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: '#5bc4f5',
                  }}>Message Received</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 300, lineHeight: '1.7' }}>
                    We&apos;ll be in touch within 1 business day to book your strategy session. Get ready for liftoff.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="jane@clinic.com.au"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Practice Name</label>
                      <input
                        name="practice"
                        value={form.practice}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Clinic"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>I'm interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select a service...</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="facebook">Facebook & Instagram Ads</option>
                      <option value="social">Social Media Management</option>
                      <option value="email">Email Marketing</option>
                      <option value="website">Website Development</option>
                      <option value="all">Full-service marketing</option>
                      <option value="audit">Just the free audit</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={labelStyle}>Tell us about your practice</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }}
                      placeholder="Where are you based, what type of practice, what's your main marketing challenge?"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ fontSize: '0.8rem', padding: '1rem 2rem', border: 'none', cursor: 'pointer' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <div className="icon-wrap">📍</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Location
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: '1.7' }}>
                  Perth, Western Australia<br />
                  Available nationally
                </p>
              </div>

              <div className="card">
                <div className="icon-wrap">✉️</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Email
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                  admin@movex.media
                </p>
              </div>

              <div className="card">
                <div className="icon-wrap">⏱️</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Response Time
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: '1.7' }}>
                  We respond to all enquiries within 1 business day. Strategy sessions are available Monday to Saturday.
                </p>
              </div>

              <div className="card" style={{ borderColor: 'rgba(91,196,245,0.3)' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', marginBottom: '0.75rem', color: '#5bc4f5' }}>
                  Free Strategy Session
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: '1.7', fontSize: '0.9rem' }}>
                  Every new client starts with a free, no-obligation strategy session. We&apos;ll review your current marketing, identify your biggest growth opportunities, and tell you honestly what we'd do and what it would cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
