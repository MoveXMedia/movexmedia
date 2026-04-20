import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CLICKFUNNELS_URL = 'https://your-clickfunnels-link.com'; // REPLACE WITH ACTUAL LINK
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'; // REPLACE with Formspree form ID

export default function WebsitePromo() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleEmailCapture(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ name, email, source: 'website-offer-page' }),
      });
    } catch (_) {}
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <>
      <Head>
        <title>Physio Websites — Opening Special | MoveX Media</title>
        <meta name="description" content="Limited spots: professional physiotherapy websites from $1,500. Work directly with Daniel — founder, physio, and builder of Move Physiotherapy." />
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #060d18; font-family: 'Poppins', sans-serif; color: white; }
          .lp-btn {
            display: inline-block;
            background: linear-gradient(135deg, #5bc4f5 0%, #2a9fd8 100%);
            color: #040c18;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: 1rem;
            padding: 1.1rem 2.8rem;
            border-radius: 6px;
            text-decoration: none;
            letter-spacing: 0.02em;
            transition: transform 0.15s, box-shadow 0.15s;
            box-shadow: 0 4px 32px rgba(91,196,245,0.35);
            cursor: pointer;
            border: none;
          }
          .lp-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(91,196,245,0.5); }
          .lp-btn-lg { font-size: 1.15rem; padding: 1.35rem 3.5rem; border-radius: 8px; }
          .pulse { animation: pulse 2.5s infinite; }
          @keyframes pulse {
            0%, 100% { box-shadow: 0 4px 32px rgba(91,196,245,0.35); }
            50% { box-shadow: 0 4px 60px rgba(91,196,245,0.65); }
          }
          .tag { display: inline-block; background: rgba(91,196,245,0.12); border: 1px solid rgba(91,196,245,0.3); color: #5bc4f5; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: 20px; }
          .feature-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 1.75rem; transition: border-color 0.2s, background 0.2s; }
          .feature-card:hover { border-color: rgba(91,196,245,0.35); background: rgba(91,196,245,0.04); }
          .divider { width: 48px; height: 3px; background: linear-gradient(90deg, #5bc4f5, transparent); border-radius: 2px; margin: 1rem auto 0; }
          .lp-input {
            width: 100%;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 8px;
            padding: 0.9rem 1.25rem;
            color: white;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95rem;
            font-weight: 300;
            outline: none;
            transition: border-color 0.2s;
          }
          .lp-input:focus { border-color: rgba(91,196,245,0.5); }
          .lp-input::placeholder { color: rgba(255,255,255,0.3); }
        `}</style>
      </Head>

      {/* ─── SCARCITY BAR — position sticky + zIndex above nav (100) ─── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 101, background: '#1c1000', borderBottom: '1px solid rgba(255,180,0,0.5)', padding: '0.72rem 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#ffb400', letterSpacing: '0.02em' }}>
          🔒 Opening special — only <strong>1–2 websites built at a time.</strong> First in, first served. Spots fill fast.
        </p>
      </div>

      {/* ─── HERO ─── */}
      <section style={{ position: 'relative', padding: '9rem 1.5rem 6rem', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #060d18 0%, #0d1f35 60%, #060d18 100%)' }}>
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(91,196,245,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="tag">Opening Special — Limited Spots</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            Your Physio Practice Deserves<br />
            <span style={{ background: 'linear-gradient(90deg, #5bc4f5, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              A Website That Actually Works
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
            Fast. SEO-optimised. Built to convert visitors into booked patients — and designed to make you look like the best clinic in your area.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { pages: '3 pages', price: '$1,500', label: 'Starter' },
              { pages: '6–10 pages', price: '$2,500', label: 'Growth', highlight: true },
            ].map(pkg => (
              <div key={pkg.label} style={{ background: pkg.highlight ? 'linear-gradient(135deg, rgba(91,196,245,0.15), rgba(91,196,245,0.05))' : 'rgba(255,255,255,0.04)', border: `1px solid ${pkg.highlight ? 'rgba(91,196,245,0.5)' : 'rgba(255,255,255,0.1)'}`, borderRadius: '12px', padding: '1.25rem 2rem', minWidth: '200px' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: pkg.highlight ? '#5bc4f5' : 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{pkg.label}</div>
                <div style={{ fontWeight: 900, fontSize: '2rem', lineHeight: 1, color: pkg.highlight ? '#5bc4f5' : 'white' }}>{pkg.price}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 300 }}>{pkg.pages}</div>
              </div>
            ))}
          </div>
          <a href={CLICKFUNNELS_URL} className="lp-btn lp-btn-lg pulse">Claim Your Spot →</a>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', marginTop: '1rem', fontWeight: 300 }}>Limited availability · No lock-in contracts</p>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STRIP ─── */}
      <div style={{ background: 'rgba(91,196,245,0.06)', borderTop: '1px solid rgba(91,196,245,0.12)', borderBottom: '1px solid rgba(91,196,245,0.12)', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          {[{ num: '100', label: 'PageSpeed Score' }, { num: '#1', label: 'Google Rankings' }, { num: '4.7×', label: 'Avg. Client LTV' }, { num: '2–4wk', label: 'Launch Timeline' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '1.6rem', color: '#5bc4f5', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300, marginTop: '0.2rem', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PORTFOLIO ─── */}
      <section style={{ padding: '6rem 1.5rem', background: '#08111e' }}><div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="tag">Our Work</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginTop: '1rem', marginBottom: '0.75rem' }}>Real Sites. Real Clinics.</h2>
          <div className="divider" />
        </div>
        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(91,196,245,0.2)', marginBottom: '1.5rem', background: '#0a1628' }}>
          <Image src="/work-move-physio.png" alt="Move Physiotherapy Website" width={1200} height={680} style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,13,24,0.95), transparent)', padding: '2.5rem 2rem 1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Featured Work</div>
                <div style={{ fontWeight: 800, fontSize: '1.3rem' }}>Move Physiotherapy</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 300 }}>High-performance physio site · Full SEO · Cliniko integration</div>
              </div>
              <a href="https://movephysio.com.au" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.4)', color: '#5bc4f5', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.78rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>View Live Site →</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="portfolio-grid-2">
          {[{ src: '/work-hexa-1.png', alt: 'Hexa Health Hub website', title: 'Hexa Health Hub', desc: 'Premium allied health brand' }, { src: '/work-hexa-2.png', alt: 'Hexa Health Hub interior page', title: 'Hexa — Service Pages', desc: 'Condition-specific landing pages' }].map(item => (
            <div key={item.title} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: '#0a1628' }}>
              <Image src={item.src} alt={item.alt} width={600} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 640px) { .portfolio-grid-2 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── DANIEL — WORK DIRECTLY WITH ME ─── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #0d1f35 0%, #0f2840 100%)', borderTop: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '360px 1fr', gap: '5rem', alignItems: 'center' }} className="daniel-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(91,196,245,0.35)', boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(91,196,245,0.08)' }}>
              <Image src="/daniel-ryan.jpg" alt="Daniel Ryan — Founder, MoveX Media" width={420} height={520} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.97) 40%, transparent)', padding: '2rem 1.5rem 1.5rem', marginTop: '-80px', position: 'relative' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Daniel Ryan</div>
                <div style={{ color: '#5bc4f5', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.05em' }}>Founder & Head IT · MoveX Media</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 300, marginTop: '0.2rem' }}>Principal Physio · Move Physiotherapy & Fitness</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-16px', right: '-16px', background: 'linear-gradient(135deg, #5bc4f5, #2a9fd8)', borderRadius: '12px', padding: '0.75rem 1.1rem', boxShadow: '0 8px 24px rgba(91,196,245,0.4)' }}>
              <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#040c18', lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#040c18', letterSpacing: '0.06em', marginTop: '2px' }}>YRS DIGITAL</div>
            </div>
          </div>
          <div>
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Who You're Working With</span>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              You speak directly with me.<br />
              <span style={{ color: '#5bc4f5' }}>Not an account manager.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.25rem' }}>
              I'm Daniel — a practicing physiotherapist who built Move Physiotherapy from a single room to a three-location Perth practice. I ran the marketing in-house for years before the results started outperforming what agencies delivered. That's why MoveX exists.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
              When you work with MoveX, you're not handed off to a designer you've never spoken to. You get a <strong style={{ color: 'white', fontWeight: 600 }}>live strategy session with me</strong> — where we map out exactly what your site needs to rank, convert, and represent your clinic properly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
              {[
                { step: '01', title: 'Book a free call with me', body: 'We talk through your clinic, your goals, and your ideal patient. No templates, no assumptions.' },
                { step: '02', title: 'Live design session — together', body: 'We build your site structure on a video call. You see it take shape in real time and approve every decision.' },
                { step: '03', title: 'Launch in 2–4 weeks', body: 'I build it. You review it. We go live. I hand you the keys and show you how to run it yourself.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 900, fontSize: '0.7rem', color: '#5bc4f5', letterSpacing: '0.1em', minWidth: '28px', marginTop: '3px', opacity: 0.7 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={CLICKFUNNELS_URL} className="lp-btn">Book Your Free Call with Daniel →</a>
          </div>
        </div>
        <style>{`@media (max-width: 820px) { .daniel-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* ─── PAGE SPEED ─── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #030b10 0%, #061510 100%)', borderTop: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="tag">Performance</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: '1rem 0 0.75rem' }}>
            Perfect PageSpeed Scores.<br /><span style={{ color: '#5bc4f5' }}>Not Just Good — 100.</span>
          </h2>
          <div className="divider" />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px', margin: '1.5rem auto 3rem', fontWeight: 300 }}>Most physio websites score below 50. We build on modern frameworks with CDN delivery, image optimisation, and Core Web Vitals compliance baked in from day one.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {['Performance', 'Accessibility', 'Best Practices', 'SEO'].map(label => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '2rem 1rem' }}>
                <svg viewBox="0 0 80 80" style={{ width: '80px', height: '80px', display: 'block', margin: '0 auto 1rem' }}>
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#22c55e" strokeWidth="7" strokeDasharray="213.6" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 40 40)" />
                  <text x="40" y="45" textAnchor="middle" fontSize="18" fontWeight="800" fill="#22c55e" fontFamily="Poppins, sans-serif">100</text>
                </svg>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '12px', padding: '1.25rem 1.75rem', display: 'inline-block' }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: 300, margin: 0 }}>⚡ <strong style={{ color: 'white' }}>Fast sites rank higher</strong> — Google rewards speed with better positions. Slow sites lose patients <em>and</em> rankings.</p>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section style={{ padding: '6rem 1.5rem', background: '#0a1628' }}><div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="tag">What You Get</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: '1rem 0 0.75rem' }}>Every Site Includes</h2>
          <div className="divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '⚡', title: 'PageSpeed 100 Score', desc: 'Built on Next.js with image optimisation, CDN delivery, and Core Web Vitals compliance. Loads in under 1 second on mobile.' },
            { icon: '🔍', title: 'SEO Built In', desc: 'Schema markup, local SEO, sitemap, Google Search Console setup, and optimised page titles — so you rank from day one.' },
            { icon: '📱', title: 'Mobile-First Design', desc: 'Over 70% of health searches happen on mobile. Your site looks perfect on every screen.' },
            { icon: '📅', title: 'Online Booking Integration', desc: 'Connected to Cliniko, Nookal, HotDoc, or PowerDiary so patients can book from every page.' },
            { icon: '✏️', title: 'Edit It Yourself', desc: 'A simple content editor so you can update text, images, and blog posts without touching any code.' },
            { icon: '📝', title: 'Copy Written For You', desc: 'We write all your website copy. AHPRA-compliant and conversion-focused out of the box.' },
            { icon: '🎨', title: 'Custom Brand Design', desc: 'Not a template — a proper custom design aligned to your clinic colours, logo, and personality.' },
            { icon: '🏥', title: 'Service & Condition Pages', desc: 'Individual pages for each service that target patients searching for exactly what you offer.' },
            { icon: '📊', title: 'Analytics + Tracking', desc: 'Full conversion tracking from day one — see visits, sources, and how many people book.' },
          ].map(f => (
            <div key={f.title} className="feature-card">
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'white' }}>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── EDIT YOURSELF ─── */}
      <section style={{ padding: '5rem 1.5rem', background: 'linear-gradient(160deg, #0d1f35 0%, #102540 100%)', borderTop: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="edit-grid">
          <div>
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>After Launch</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2, marginBottom: '1.25rem' }}>You own it.<br /><span style={{ color: '#5bc4f5' }}>Edit it yourself.</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>Every site comes with a simple editing system so you can update content without needing us. Change your hours, add a service, post a blog — point-and-click.</p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>We also provide a walkthrough video so your reception team can handle day-to-day updates with confidence.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Update text and images — no code', 'Add new blog posts yourself', 'Change business hours and contact info', 'Add or edit service descriptions', 'Walkthrough video included', 'Ongoing support available'].map(item => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.65rem', color: '#5bc4f5' }}>✓</div>
                <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 760px) { .edit-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
      </section>

      {/* ─── MARKETING HUB BONUS ─── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #060d18 0%, #08111e 100%)', borderTop: '1px solid rgba(91,196,245,0.1)' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'linear-gradient(135deg, rgba(255,180,0,0.15), rgba(255,180,0,0.05))', border: '1px solid rgba(255,180,0,0.4)', borderRadius: '30px', padding: '0.4rem 1.2rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#ffb400', letterSpacing: '0.1em', textTransform: 'uppercase' }}>🎁 Bonus — Included Free</span>
              <span style={{ background: '#ffb400', color: '#040c18', fontSize: '0.65rem', fontWeight: 900, padding: '0.15rem 0.6rem', borderRadius: '10px', letterSpacing: '0.05em' }}>$600 VALUE</span>
            </div>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              3 months of the<br />
              <span style={{ background: 'linear-gradient(90deg, #5bc4f5, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>MoveX Marketing Hub</span>
            </h2>
            <div className="divider" />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '620px', margin: '1.5rem auto 0', fontWeight: 300 }}>
              From experience building Move Physiotherapy to three locations — this hub contains everything you will ever need to market an allied health business. Included with your website at no extra cost.
            </p>
          </div>

          {/* Screenshot + feature list */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem', alignItems: 'center' }} className="hub-grid">

            {/* Screenshot */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(91,196,245,0.25)', boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(91,196,245,0.06)' }}>
                <Image
                  src="/hub-screenshot-1.png"
                  alt="MoveX Marketing Hub dashboard"
                  width={900}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              {/* Floating stat */}
              <div style={{ position: 'absolute', bottom: '-18px', right: '-18px', background: 'linear-gradient(135deg, #5bc4f5, #2a9fd8)', borderRadius: '12px', padding: '0.85rem 1.2rem', boxShadow: '0 8px 24px rgba(91,196,245,0.4)', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', color: '#040c18', lineHeight: 1 }}>6,450</div>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#040c18', letterSpacing: '0.06em', marginTop: '2px' }}>ACTIVE SUBSCRIBERS</div>
              </div>
            </div>

            {/* What's included */}
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>What's inside</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem' }}>
                {[
                  { icon: '🎯', title: 'Google Ads Dashboard', body: 'Live campaign performance, spend tracking, and patient acquisition metrics in one place.' },
                  { icon: '📘', title: 'Facebook & Instagram Ads', body: 'Ad management, audience targeting, and creative performance all connected.' },
                  { icon: '✉️', title: 'Email Marketing', body: 'Campaigns, newsletters, and subscriber management built for allied health.' },
                  { icon: '⚡', title: 'Automations', body: 'Birthday emails, reactivation sequences, new patient welcome flows — set and forget.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.2rem', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem', color: 'white' }}>{item.title}</div>
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.55 }}>{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Value callout */}
              <div style={{ background: 'rgba(255,180,0,0.07)', border: '1px solid rgba(255,180,0,0.25)', borderRadius: '12px', padding: '1.1rem 1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'white', marginBottom: '0.15rem' }}>3 months free with every website</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300 }}>Then $200/month — cancel any time</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 900, fontSize: '1.3rem', color: '#ffb400', lineHeight: 1 }}>$600</div>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>included free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .hub-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* ─── PACKAGES ─── */}
      <section style={{ padding: '6rem 1.5rem', background: '#040b15', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="tag">Pricing</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: '1rem 0 0.75rem' }}>Simple, Fixed Pricing</h2>
          <div className="divider" />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 300, marginTop: '1rem' }}>One-off cost. No monthly fees. No hidden charges.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="pkg-grid">
          {[
            { name: 'Starter', price: '$1,500', pages: '3 pages', desc: 'A clean, professional online presence for a solo practitioner or new clinic.', includes: ['Home, About & Contact pages', 'Online booking integration', 'Mobile-responsive design', 'Basic SEO setup', 'Google Analytics', '30-day support', '🎁 3 months Marketing Hub — free ($600)'], highlight: false },
            { name: 'Growth', price: '$2,500', pages: '6–10 pages', desc: "Built to rank on Google and convert more of the visitors you're already getting.", includes: ['Up to 10 pages incl. service pages', 'Custom brand-aligned design', 'Advanced SEO + schema markup', 'Condition/service landing pages', 'Blog setup', 'Conversion tracking', '60-day support', '🎁 3 months Marketing Hub — free ($600)'], highlight: true },
          ].map(pkg => (
            <div key={pkg.name} style={{ background: pkg.highlight ? 'linear-gradient(160deg, rgba(15,37,64,0.9), rgba(20,50,80,0.7))' : 'rgba(255,255,255,0.03)', border: `1px solid ${pkg.highlight ? 'rgba(91,196,245,0.45)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '20px', padding: '2.5rem 2rem', position: 'relative', transform: pkg.highlight ? 'scale(1.02)' : 'scale(1)', boxShadow: pkg.highlight ? '0 0 60px rgba(91,196,245,0.1)' : 'none' }}>
              {pkg.highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #5bc4f5, #2a9fd8)', color: '#060d18', fontSize: '0.65rem', fontWeight: 800, padding: '0.3rem 1.2rem', borderRadius: '20px', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
              <div style={{ fontSize: '0.68rem', fontWeight: 700, color: pkg.highlight ? '#5bc4f5' : 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{pkg.name} · {pkg.pages}</div>
              <div style={{ fontWeight: 900, fontSize: '2.8rem', color: pkg.highlight ? '#5bc4f5' : 'white', lineHeight: 1, marginBottom: '0.5rem' }}>{pkg.price}</div>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.75rem' }}>{pkg.desc}</p>
              {pkg.includes.map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <span style={{ color: '#5bc4f5', fontSize: '0.65rem', marginTop: '3px', flexShrink: 0 }}>◆</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
              <a href={CLICKFUNNELS_URL} className="lp-btn" style={{ display: 'block', textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', padding: '0.9rem 1.5rem', background: pkg.highlight ? undefined : 'transparent', border: pkg.highlight ? undefined : '1px solid rgba(91,196,245,0.4)', color: pkg.highlight ? undefined : '#5bc4f5', boxShadow: pkg.highlight ? undefined : 'none' }}>Get Started →</a>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 620px) { .pkg-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── EMAIL CAPTURE ─── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #0d1f35 0%, #0f2840 50%, #0d1f35 100%)', borderTop: '1px solid rgba(91,196,245,0.1)', borderBottom: '1px solid rgba(91,196,245,0.1)' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.25)', borderRadius: '10px', padding: '0.9rem 1.5rem', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.82rem', color: '#ffb400', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              ⚠️ <strong>This page is not publicly advertised.</strong> It's a private offer from our social media. You probably won't see it again.
            </p>
          </div>
          <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Not Ready Yet?</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Save this offer.<br /><span style={{ color: '#5bc4f5' }}>We'll hold a spot for you.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            This is a heavily marketed space and you probably won't find this page again. Drop your details and Daniel will personally reach out when a build slot opens up.
          </p>
          {submitted ? (
            <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '16px', padding: '2.5rem 2rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#22c55e' }}>You're on the list.</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.6 }}>Daniel will be in touch personally. If a spot is open right now — grab it below.</p>
              <a href={CLICKFUNNELS_URL} className="lp-btn" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '0.9rem' }}>Claim a Spot Now →</a>
            </div>
          ) : (
            <form onSubmit={handleEmailCapture} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input className="lp-input" type="text" placeholder="Your first name" value={name} onChange={e => setName(e.target.value)} required />
              <input className="lp-input" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required />
              <button type="submit" className="lp-btn" disabled={submitting} style={{ width: '100%', textAlign: 'center', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                {submitting ? 'Saving...' : 'Send Me the Offer →'}
              </button>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem', fontWeight: 300 }}>No spam. One email with the offer details. Unsubscribe any time.</p>
            </form>
          )}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{ padding: '6rem 1.5rem 7rem', textAlign: 'center', background: 'linear-gradient(160deg, #040b15 0%, #081525 50%, #040b15 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(91,196,245,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.8)' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', fontWeight: 300 }}>1 spot remaining this month</span>
          </div>
          <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>First In, First Served</span>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            I only build 1–2 sites<br />at a time.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '0.75rem' }}>
            Every site gets my full attention — which means I deliberately cap how many I take on each month. When the spots are gone, they're gone until the next build slot opens.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            If you're serious about your clinic's online presence — now is the right time.
          </p>
          <a href={CLICKFUNNELS_URL} className="lp-btn lp-btn-lg pulse">Book My Free Call with Daniel →</a>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {['No lock-in contract', 'Launch in 2–4 weeks', 'Fixed price — no surprises'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', fontWeight: 300 }}>
                <span style={{ color: '#5bc4f5', fontSize: '0.7rem' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', fontWeight: 300 }}>
          © 2026 MoveX Media · Perth, Western Australia ·{' '}
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</Link>
        </p>
      </div>
    </>
  );
}
