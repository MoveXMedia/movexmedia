import Head from 'next/head';
import Link from 'next/link';

const services = [
  { icon: '📡', title: 'Google Ads', desc: 'Precision-targeted campaigns that put your business at the top of search results when customers are actively looking for what you offer.', href: '/google-ads' },
  { icon: '📘', title: 'Facebook Marketing', desc: 'Hyper-targeted social ads that reach your ideal customers in the communities where they spend their time.', href: '/facebook-marketing' },
  { icon: '📱', title: 'Social Media', desc: 'Strategic content that builds trust, educates your audience, and converts followers into paying customers.', href: '/social-media' },
  { icon: '✉️', title: 'Email Marketing', desc: 'Automated campaigns that re-engage past customers, nurture leads, and keep your business top of mind.', href: '/email-marketing' },
  { icon: '🌐', title: 'Website Development', desc: 'Fast, conversion-focused websites built to rank on Google and turn visitors into customers.', href: '/website-development' },
];

const whyItems = [
  { title: 'Built for small business', desc: 'We work with local service businesses — not enterprise. Our strategies are scaled to your budget and built to grow with you.' },
  { title: 'Intent-based targeting', desc: 'We target by search intent, behaviour, and location — so your ads reach people actively looking for what you offer.' },
  { title: 'Founder-run, not account managed', desc: 'You deal directly with Daniel — not a junior account manager. Strategy, execution, and results, without the agency overhead.' },
  { title: 'Cost-effective from day one', desc: 'No bloated retainers. Every dollar is tracked and accountable from the first campaign — with transparent reporting.' },
];

const steps = [
  { num: '01', title: 'Free strategy session', desc: "We review your current marketing, identify what's working and what isn't, and show you what we'd do differently." },
  { num: '02', title: 'Campaign setup', desc: 'Full setup — keywords, audiences, ad creative, conversion tracking — ready to launch within 48 hours.' },
  { num: '03', title: 'Launch & optimise', desc: 'Campaigns go live. We monitor closely and optimise based on real data, not guesswork.' },
  { num: '04', title: 'Report & grow', desc: 'Monthly reports with clear numbers. Scale what works, cut what doesn\'t, keep growing.' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>MoveX Media — Digital Marketing for Local Businesses</title>
        <meta name="description" content="Digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for local service businesses." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="MoveX Media — Digital Marketing for Local Businesses" />
        <meta property="og:description" content="Digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for local service businesses." />
        <meta property="og:url" content="https://movex.media/" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MoveX Media — Digital Marketing for Local Businesses" />
        <meta name="twitter:description" content="Digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for local service businesses." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* ── HERO (dark, keeps space theme) ── */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--navy-deep)',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', height: '300px',
          background: 'radial-gradient(ellipse at bottom, rgba(74,158,218,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
            <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
              <div className="section-label">Digital Marketing Agency — Worldwide</div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.15', marginBottom: '1.5rem', fontWeight: 900 }}>
                Launch Your<br />Business<br />
                <span style={{ color: '#5bc4f5', textShadow: '0 0 40px rgba(91,196,245,0.4)' }}>Into Orbit</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '480px', fontWeight: 300 }}>
                MoveX Media is a digital marketing agency for local service businesses. Google Ads, Facebook, email automation, and websites — all under one roof, at a price that scales with you.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Free Session →</Link>
                <Link href="/services" className="btn-outline">View Services</Link>
              </div>
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(26,58,92,0.5)', flexWrap: 'wrap' }}>
                {[['$10k → $M+', 'Founder-proven business growth'], ['Any Industry', 'Trades, hospitality & more'], ['48hr', 'Campaign launch time']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#5bc4f5' }}>{val}</div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem', fontWeight: 300 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rocket */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }} className="hero-rocket">
              <div style={{ position: 'absolute', width: '420px', height: '420px', border: '1px solid rgba(91,196,245,0.1)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', width: '300px', height: '300px', border: '1px solid rgba(91,196,245,0.15)', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', width: '180px', height: '180px', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '50%', animation: 'pulse-glow 3s ease-in-out infinite' }} />
              <div style={{ fontSize: '8rem', animation: 'float 4s ease-in-out infinite', filter: 'drop-shadow(0 0 30px rgba(91,196,245,0.4))', position: 'relative', zIndex: 2 }}>🚀</div>
              <div style={{ position: 'absolute', width: '8px', height: '8px', background: '#5bc4f5', borderRadius: '50%', top: '50%', left: '50%', boxShadow: '0 0 15px #5bc4f5', animation: 'orbit 6s linear infinite' }} />
            </div>
          </div>
        </div>
        <style>{`
          @keyframes orbit { from { transform: rotate(0deg) translateX(150px) rotate(0deg); } to { transform: rotate(360deg) translateX(150px) rotate(-360deg); } }
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-rocket { display: none !important; }
          }
        `}</style>
      </section>


      {/* ── ABOUT US (light, friendly) ── */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{
                position: 'absolute', top: '-12px', left: '-12px',
                width: '100%', height: '100%',
                border: '2px solid rgba(91,196,245,0.2)',
                borderRadius: '14px',
                zIndex: 0,
              }} />
              <img
                src="/daniel-ryan.jpg"
                alt="Daniel Ryan — Founder, MoveX Media"
                style={{
                  width: '100%',
                  borderRadius: '10px',
                  display: 'block',
                  objectFit: 'cover',
                  aspectRatio: '3/4',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                }}
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 2,
                background: 'rgba(8,15,26,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(91,196,245,0.2)',
                borderRadius: '8px',
                padding: '0.6rem 1rem',
              }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: 'white' }}>Daniel Ryan</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.1rem' }}>Founder & Head IT</div>
              </div>
            </div>

            <div>
              <div className="section-label" style={{ color: '#5bc4f5' }}>About Us</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.2, color: '#0d1f35', marginBottom: '1rem' }}>
                Built from experience.<br />Designed for <span style={{ color: '#5bc4f5' }}>growth</span>.
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #5bc4f5, transparent)', borderRadius: '2px', marginBottom: '1.5rem' }} />
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '1.25rem', fontWeight: 300, fontSize: '0.98rem' }}>
                MoveX Media was founded by Daniel Ryan — who built Move Physiotherapy & Fitness from a single room into a three-location Perth practice, running all the digital marketing in-house. The results consistently outperformed agencies. So he turned the system into a service.
              </p>
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '2rem', fontWeight: 300, fontSize: '0.98rem' }}>
                Since Move Physiotherapy, Daniel has worked with multiple industries including trades, hospitality, marketing and more — strategising and implementing business growth strategies that actually move the needle.
              </p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.8rem', background: '#5bc4f5', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#0d1f35', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Read More →
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ── WEBSITE STATS (light) ── */}
      {/* ── WEBSITE (combined) ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Top — copy left, stats right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginBottom: '4rem' }} className="website-top-grid">

            {/* Copy */}
            <div>
              <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1.25rem' }}>Website Development</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.2, color: '#0d1f35', marginBottom: '1rem' }}>
                Your website comes first.<br /><span style={{ color: '#5bc4f5' }}>Everything else builds on it.</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #5bc4f5, transparent)', borderRadius: '2px', marginBottom: '1.5rem' }} />
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '1.25rem', fontWeight: 300, fontSize: '0.98rem' }}>
                Before you spend a dollar on Google Ads or Facebook, your website needs to convert the traffic you send to it. A slow, outdated site quietly kills your ROI — no matter how good the campaign.
              </p>
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '2rem', fontWeight: 300, fontSize: '0.98rem' }}>
                We build fast, conversion-focused websites for local service businesses — with local SEO structure and copy written to convert. Built to rank, built to grow.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {['Next.js — faster than WordPress, better Core Web Vitals', 'Local SEO structure from page one', 'Online booking integration built in', 'Copy written for your business included', 'Mobile-first, conversion-optimised layouts'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#5bc4f5', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    <span style={{ color: '#6b849a', fontSize: '0.88rem', fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/get-started" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.8rem', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.4)', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#5bc4f5', textDecoration: 'none' }}>
                🌟 View our special offer →
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { stat: '53%', label: 'of mobile visitors leave', desc: 'if a site takes more than 3 seconds to load. Most business websites take 6–8 seconds on mobile.', colour: '#e05555' },
                { stat: '7%', label: 'conversion drop per second', desc: 'Every 1-second delay reduces conversions by 7%. A 4-second site could be cutting your leads in half.', colour: '#f59e0b' },
                { stat: '70%+', label: 'of searches are on mobile', desc: 'A desktop-first website fails more than half your traffic before they read a single word.', colour: '#5bc4f5' },
              ].map(({ stat, label, desc, colour }) => (
                <div key={stat} style={{ background: 'white', borderRadius: '14px', padding: '1.5rem 2rem', boxShadow: '0 4px 20px rgba(13,31,53,0.07)', border: '1px solid #e2eaf4', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.4rem', fontWeight: 900, color: colour, lineHeight: 1, flexShrink: 0 }}>{stat}</div>
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.88rem', color: '#0d1f35', marginBottom: '0.3rem' }}>{label}</div>
                    <p style={{ color: '#6b849a', fontSize: '0.82rem', lineHeight: '1.6', fontWeight: 300, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)', borderRadius: '14px', padding: '1.5rem 2rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.75', fontWeight: 300, margin: 0 }}>
                  Fix it once — and every ad you run, every search you rank for, and every referral you receive converts at a dramatically higher rate. Without spending another dollar on traffic.
                </p>
              </div>
            </div>

          </div>

          {/* Dark CTA bar above portfolio */}
          <div style={{ background: '#0d1f35', borderRadius: '14px', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.3rem' }}>
                3-page website · Live in 7 days · $20 USD/month hosting · 2-year minimum term
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'white', lineHeight: 1.1 }}>
                🌟 Limited time — <span style={{ color: '#5bc4f5' }}>$499 USD special offer</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/website-development" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.7rem 1.4rem', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.4)', borderRadius: '7px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#5bc4f5', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                View Packages →
              </Link>
              <Link href="/get-started" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.7rem 1.4rem', background: '#5bc4f5', borderRadius: '7px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#0d1f35', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                Get Started →
              </Link>
            </div>
          </div>

          {/* Portfolio — equal size, clickable, opens in new tab */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'start' }} className="portfolio-grid-home">
            <a href="https://movephysio.com.au" target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(13,31,53,0.12)', border: '1px solid #e2eaf4', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }} className="portfolio-link">
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src="/work-move-physio.png" alt="Move Physiotherapy website" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.75rem 1rem', background: '#f9fbff', borderTop: '1px solid #e2eaf4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#0d1f35' }}>Move Physiotherapy & Fitness</span>
                <span style={{ fontSize: '0.72rem', color: '#5bc4f5', fontWeight: 600 }}>Visit site ↗</span>
              </div>
            </a>
            <a href="https://hexahealthhub.com.au" target="_blank" rel="noopener noreferrer" style={{ display: 'block', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 16px 48px rgba(13,31,53,0.1)', border: '1px solid #e2eaf4', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s' }} className="portfolio-link">
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src="/work-hexa-1.png" alt="Hexa Health Hub website" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '0.75rem 1rem', background: '#f9fbff', borderTop: '1px solid #e2eaf4', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#0d1f35' }}>Hexa Health Hub</span>
                <span style={{ fontSize: '0.72rem', color: '#5bc4f5', fontWeight: 600 }}>Visit site ↗</span>
              </div>
            </a>
          </div>

        </div>
        <style>{`
          @media (max-width: 900px) { .website-top-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          @media (max-width: 700px) { .portfolio-grid-home { grid-template-columns: 1fr !important; } }
          .portfolio-link:hover { transform: translateY(-3px); box-shadow: 0 24px 60px rgba(13,31,53,0.18) !important; }
        `}</style>
      </section>

      {/* ── SERVICES (dark) ── */}
      <section style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label">What We Do</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'white', fontWeight: 800 }}>
              Full-service marketing<br />for <span style={{ color: '#5bc4f5' }}>local businesses</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '560px', fontWeight: 300 }}>
              Every service is built to drive real, measurable growth — not vanity metrics. Leads, sales, and customers. The numbers that actually matter.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem' }}>
            {services.map(s => (
              <Link href={s.href} key={s.title} className="service-card-link">
                <div className="service-card" style={{ height: '100%', cursor: 'pointer', padding: '1.75rem', borderRadius: '12px', border: '1px solid rgba(91,196,245,0.12)', background: 'rgba(255,255,255,0.03)', transition: 'all 0.25s ease' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.2rem' }}>{s.icon}</div>
                  <h3 className="service-card-title" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.6rem', color: 'white', transition: 'color 0.25s ease' }}>{s.title}</h3>
                  <p className="service-card-desc" style={{ fontSize: '0.88rem', lineHeight: '1.65', fontWeight: 300, color: 'rgba(255,255,255,0.5)', transition: 'color 0.25s ease' }}>{s.desc}</p>
                  <div style={{ marginTop: '1.2rem', color: '#5bc4f5', fontSize: '0.8rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card:hover { background: #ffffff !important; border-color: #ffffff !important; box-shadow: 0 16px 48px rgba(0,0,0,0.3); transform: translateY(-3px); }
          .service-card:hover .service-card-title { color: #0d1f35 !important; }
          .service-card:hover .service-card-desc { color: #6b849a !important; }
        `}</style>
      </section>
      <section style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '300px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The Process</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white' }}>
              Up and running in <span style={{ color: '#5bc4f5' }}>4 steps</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2rem' }}>
            {steps.map(s => (
              <div key={s.num} className="card">
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.8rem', fontWeight: 900, color: 'rgba(91,196,245,0.15)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.6rem' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: '1.65', fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (light) ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Ready to grow?</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0d1f35', marginBottom: '1rem', lineHeight: 1.2 }}>
            Let's build your<br /><span style={{ color: '#5bc4f5' }}>growth engine</span>
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
            Book a free strategy session. We'll audit your current marketing, identify the gaps, and show you exactly how we'd grow your business — no obligation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Strategy Session →
          </Link>
        </div>
      </section>
    </>
  );
}
