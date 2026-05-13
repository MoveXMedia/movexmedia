import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BOOKING_URL = 'https://movex.media/contact';

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>New Website from $499 — MoveX Media</title>
        <meta name="description" content="Professional 3-page website for $499. Fast, SEO-optimised, mobile-first. Live in 7 days. $20 USD/month hosting. Work directly with Daniel." />
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #060d18; font-family: 'Poppins', sans-serif; color: white; }
          .btn {
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
          .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(91,196,245,0.5); }
          .btn-lg { font-size: 1.15rem; padding: 1.35rem 3.5rem; }
          .pulse { animation: pulse 2.5s infinite; }
          @keyframes pulse {
            0%,100% { box-shadow: 0 4px 32px rgba(91,196,245,0.35); }
            50% { box-shadow: 0 4px 60px rgba(91,196,245,0.65); }
          }
          .tag { display: inline-block; background: rgba(91,196,245,0.12); border: 1px solid rgba(91,196,245,0.3); color: #5bc4f5; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: 20px; }
          .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 1.75rem; }
          .input { width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 0.9rem 1.25rem; color: white; font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 300; outline: none; }
          .input:focus { border-color: rgba(91,196,245,0.5); }
          .input::placeholder { color: rgba(255,255,255,0.3); }
        `}</style>
      </Head>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem 5rem', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(160deg, #060d18 0%, #0a1628 60%, #060d18 100%)' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(91,196,245,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="tag">3-page website · Live in 7 days</span>
          </div>
          <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            A professional website<br />
            <span style={{ background: 'linear-gradient(90deg, #5bc4f5, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              for $499. Live in 7 days.
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
            3-page website. Fast, SEO-ready, mobile-first, and built to convert visitors into customers. $20 USD/month hosting billed monthly — no hidden costs.
          </p>

          {/* Price card */}
          <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <div style={{ background: 'linear-gradient(135deg, rgba(91,196,245,0.15), rgba(91,196,245,0.05))', border: '1px solid rgba(91,196,245,0.5)', borderRadius: '16px', padding: '1.5rem 2.5rem', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>One-off</div>
              <div style={{ fontWeight: 900, fontSize: '3rem', lineHeight: 1, color: '#5bc4f5' }}>$499</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 300 }}>3-page website</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem 2.5rem', textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Monthly</div>
              <div style={{ fontWeight: 900, fontSize: '3rem', lineHeight: 1, color: 'white' }}>$20</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', marginTop: '0.3rem', fontWeight: 300 }}>Hosting only</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={BOOKING_URL} className="btn btn-lg pulse">Book a Free Call with Daniel →</a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', marginTop: '1rem', fontWeight: 300 }}>
            All prices in USD · 2-year minimum hosting term
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#080f1a' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Why It Matters</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2, marginBottom: '1rem' }}>
              A slow website is losing you<br /><span style={{ color: '#5bc4f5' }}>customers every single day</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }} className="stats-grid-lp">
            {[
              { stat: '53%', label: 'of mobile visitors leave', desc: 'if a site takes more than 3 seconds to load. Most business websites take 6–8 seconds.', colour: '#e05555' },
              { stat: '7%', label: 'conversion drop per second', desc: 'Every 1-second delay reduces conversions by 7%. A 4-second site cuts your leads in half.', colour: '#f59e0b' },
              { stat: '70%+', label: 'of searches are on mobile', desc: 'If your site isn\'t built mobile-first, you\'re failing more than half your visitors before they read a word.', colour: '#5bc4f5' },
            ].map(({ stat, label, desc, colour }) => (
              <div key={stat} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', color: colour, lineHeight: 1, marginBottom: '0.5rem' }}>{stat}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'white', marginBottom: '0.75rem' }}>{label}</div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.65, fontWeight: 300 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* WordPress callout */}
          <div style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.03))', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '16px', padding: '2rem 2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '2rem', flexShrink: 0 }}>⚠️</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: 'white' }}>Still on WordPress? It's holding you back.</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300 }}>
                WordPress sites average a PageSpeed score of 40–60 — well below Google's recommended 90+. They're slow, plugin-dependent, and require constant security updates. Modern frameworks like Next.js load in under 1 second, score 100/100, and don't need a developer to maintain. Moving off WordPress isn't a luxury — it's table stakes in 2025.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 700px) { .stats-grid-lp { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ── DANIEL — WORK DIRECTLY WITH ME ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #0a1628 0%, #0d1f35 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '5rem', alignItems: 'center' }} className="daniel-grid-lp">

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(91,196,245,0.4)', boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(91,196,245,0.08)' }}>
              <Image src="/daniel-ryan.jpg" alt="Daniel Ryan — Founder, MoveX Media" width={420} height={500} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ background: 'linear-gradient(to top, rgba(6,13,24,0.97) 40%, transparent)', padding: '2rem 1.5rem 1.5rem', marginTop: '-80px', position: 'relative' }}>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.2rem' }}>Daniel Ryan</div>
                <div style={{ color: '#5bc4f5', fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.05em' }}>Founder & Head IT · MoveX Media</div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-14px', right: '-14px', background: 'linear-gradient(135deg, #5bc4f5, #2a9fd8)', borderRadius: '10px', padding: '0.6rem 0.9rem', boxShadow: '0 8px 24px rgba(91,196,245,0.4)', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: '#040c18', lineHeight: 1 }}>7</div>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, color: '#040c18', letterSpacing: '0.06em', marginTop: '2px' }}>DAY LAUNCH</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="tag" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>Who You're Working With</span>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              You work directly with me.<br />
              <span style={{ color: '#5bc4f5' }}>Not a developer you'll never meet.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.25rem' }}>
              I'm Daniel — I built Move Physiotherapy from a single room into a three-location Perth business, then took the digital marketing that drove that growth and turned it into MoveX Media. Since then I've helped businesses across trades, hospitality, health, and marketing get online properly.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem' }}>
              When you sign up, you speak to me directly. We have a <strong style={{ color: 'white' }}>free 15-minute call</strong>, I understand your business, and I build your site — usually live within 7 days.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                { step: '01', title: 'Free 15-min call', body: 'We discuss your business, your goals, and what the 3 pages need to cover.' },
                { step: '02', title: 'I build it — fast', body: 'You receive a live preview within 5–7 days. Review it, request any changes.' },
                { step: '03', title: 'Go live', body: 'Site launches on your domain. $20 USD/month keeps it hosted, fast, and maintained.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 900, fontSize: '0.68rem', color: '#5bc4f5', letterSpacing: '0.1em', minWidth: '26px', marginTop: '3px', opacity: 0.7 }}>{item.step}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={BOOKING_URL} className="btn">Book My Free Call →</a>
          </div>
        </div>
        <style>{`@media (max-width: 820px) { .daniel-grid-lp { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* ── PAGESPEED ── */}
      <section style={{ padding: '6rem 1.5rem', background: 'linear-gradient(160deg, #030b10 0%, #061510 100%)', borderTop: '1px solid rgba(34,197,94,0.1)', borderBottom: '1px solid rgba(34,197,94,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Performance</span>
          <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, margin: '0 0 0.75rem' }}>
            PageSpeed 100.<br /><span style={{ color: '#22c55e' }}>Every site we build.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 3rem', fontWeight: 300 }}>
            Google ranks fast sites. We build on Next.js — one of the fastest frameworks available — with image optimisation, CDN delivery, and Core Web Vitals compliance built in from day one.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }} className="scores-grid-lp">
            {['Performance', 'Accessibility', 'Best Practices', 'SEO'].map(label => (
              <div key={label} className="card" style={{ padding: '2rem 1rem', borderColor: 'rgba(34,197,94,0.15)' }}>
                <svg viewBox="0 0 80 80" style={{ width: '72px', height: '72px', display: 'block', margin: '0 auto 0.75rem' }}>
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(34,197,94,0.1)" strokeWidth="7" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#22c55e" strokeWidth="7" strokeDasharray="213.6" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 40 40)" />
                  <text x="40" y="45" textAnchor="middle" fontSize="17" fontWeight="800" fill="#22c55e" fontFamily="Poppins, sans-serif">100</text>
                </svg>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{label}</div>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 600px) { .scores-grid-lp { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#0a1628' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>What You Get</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2 }}>
              Everything in the $499 package
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '⚡', title: 'PageSpeed 100 score', desc: 'Loads under 1 second on mobile. Built on Next.js — the same framework used by Fortune 500 companies.' },
              { icon: '🔍', title: 'SEO built in from day one', desc: 'Meta tags, schema markup, sitemap, Google Search Console connection, and local SEO structure.' },
              { icon: '📱', title: 'Mobile-first design', desc: 'Designed for mobile first, desktop second — because that\'s how your customers actually browse.' },
              { icon: '✏️', title: 'Copy written for you', desc: 'You don\'t need to write a word. I write your website copy — conversion-focused and tailored to your business.' },
              { icon: '📊', title: 'Google Analytics', desc: 'Full tracking setup so you can see how many people visit, where they come from, and what they do.' },
              { icon: '🎨', title: 'Custom design', desc: 'Not a template. Designed around your brand, colours, and business — looks like you, not everyone else.' },
            ].map(f => (
              <div key={f.title} className="card" style={{ transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem', color: 'white' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Hosting callout */}
          <div style={{ marginTop: '2rem', background: 'rgba(91,196,245,0.06)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '12px', padding: '1.5rem 2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.5rem' }}>🌐</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>Hosting — $20 USD/month</div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.6 }}>
                Includes hosting, CDN delivery, and SSL certificate. Minimum 2-year hosting term at $20 USD/month. You own the site.
              </p>
            </div>
            <div style={{ fontWeight: 900, fontSize: '1.5rem', color: '#5bc4f5', whiteSpace: 'nowrap' }}>$20 USD/mo</div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#06111e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>Our Work</span>
            <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2 }}>Real sites. Real businesses.</h2>
          </div>

          {/* Move Physio */}
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(91,196,245,0.2)', marginBottom: '1.5rem', background: '#0a1628' }}>
            <Image src="/work-move-physio.png" alt="Move Physiotherapy Website" width={1200} height={680} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,13,24,0.95), transparent)', padding: '2.5rem 2rem 1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Featured Work</div>
                  <div style={{ fontWeight: 800, fontSize: '1.2rem' }}>Move Physiotherapy</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 300 }}>PageSpeed 100 · #1 Google ranking · 3 locations</div>
                </div>
                <a href="https://movephysio.com.au" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.4)', color: '#5bc4f5', padding: '0.55rem 1.2rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.78rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  View Live →
                </a>
              </div>
            </div>
          </div>

          <style>{`@media (max-width: 640px) { .portfolio-grid-lp { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '6rem 1.5rem 7rem', textAlign: 'center', background: 'linear-gradient(160deg, #080f1a 0%, #0d1f35 50%, #080f1a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(91,196,245,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
          <span className="tag" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>Ready to go?</span>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            $499. Live in 7 days.<br />
            <span style={{ color: '#5bc4f5' }}>Let's get you online properly.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Book a free 15-minute call with Daniel. No obligation — just a quick chat about your business and what your site needs to do.
          </p>
          <a href={BOOKING_URL} className="btn btn-lg pulse">Book My Free Call with Daniel →</a>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            {['$499 USD one-off', 'Live in 7 days', '$20 USD/mo · 2yr min', 'You own the site'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', fontWeight: 300 }}>
                <span style={{ color: '#5bc4f5', fontSize: '0.7rem' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.75rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', fontWeight: 300 }}>
          © 2026 MoveX Media · movex.media
        </p>
      </div>
    </>
  );
}
