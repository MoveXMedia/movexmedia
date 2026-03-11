import Head from 'next/head';
import Link from 'next/link';

const services = [
  { icon: '📡', title: 'Google Ads', desc: 'Precision-targeted campaigns that put your practice at the top of search results when patients are actively looking.', href: '/google-ads' },
  { icon: '📘', title: 'Facebook Marketing', desc: 'Hyper-targeted social ads that reach your ideal patients in the communities where they spend their time.', href: '/facebook-marketing' },
  { icon: '📱', title: 'Social Media', desc: 'Strategic content that builds trust, educates your audience, and converts followers into booked appointments.', href: '/services' },
  { icon: '✉️', title: 'Email Marketing', desc: 'Automated campaigns that re-engage past patients, nurture referrals, and keep your clinic top of mind.', href: '/services' },
  { icon: '🌐', title: 'Website Development', desc: 'Fast, conversion-focused websites built to rank on Google and turn visitors into patients.', href: '/services' },
];

const whyItems = [
  { title: 'Health-literate copy', desc: 'We write ads and content that accurately represent your services and build genuine clinical credibility.' },
  { title: 'Condition-based targeting', desc: 'We target by pain point, condition, and intent — so your ads reach people actively seeking what you offer.' },
  { title: 'Referral-aware strategy', desc: "We understand allied health growth isn't just digital — your strategy accounts for GP and specialist referrals too." },
  { title: 'AHPRA compliant', desc: 'Every campaign is reviewed against AHPRA advertising guidelines as a matter of course — no second-guessing.' },
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
        <title>MoveX Media — Digital Marketing for Health & Allied Health</title>
        <meta name="description" content="Perth-based digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for health and allied health practices." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="MoveX Media — Digital Marketing for Health & Allied Health" />
        <meta property="og:description" content="Perth-based digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for health and allied health practices." />
        <meta property="og:url" content="https://movex.media/" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MoveX Media — Digital Marketing for Health & Allied Health" />
        <meta name="twitter:description" content="Perth-based digital marketing agency specialising in Google Ads, Facebook, social media, email marketing, and websites for health and allied health practices." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* ── HERO (dark, keeps space theme) ── */}
      <section style={{
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
              <div className="section-label">Digital Marketing Agency — Perth, WA</div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.15', marginBottom: '1.5rem', fontWeight: 900 }}>
                Launch Your<br />Practice<br />
                <span style={{ color: '#5bc4f5', textShadow: '0 0 40px rgba(91,196,245,0.4)' }}>Into Orbit</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '480px', fontWeight: 300 }}>
                MoveX Media specialises in digital marketing for health and allied health businesses. We help physiotherapy, chiropractic, and allied health practices fill their books and grow sustainably.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Free Session →</Link>
                <Link href="/services" className="btn-outline">View Services</Link>
              </div>
              <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(26,58,92,0.5)', flexWrap: 'wrap' }}>
                {[['5×', 'Average ROI for clients'], ['100%', 'Health industry focused'], ['48hr', 'Campaign launch time']].map(([val, label]) => (
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
          .hero-rocket { transform-origin: center; }
          @media (max-width: 900px) { .hero-rocket { display: none !important; } }
        `}</style>
      </section>

      {/* ── TRUST BAR (mid-dark) ── */}
      <div style={{ background: '#0d1f35', padding: '1.4rem 2rem', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {[['✅', 'AHPRA compliant by default'], ['🏥', 'Allied health specialists only'], ['📍', 'Perth-based team'], ['📞', 'Real people, no account managers'], ['🔒', 'No lock-in contracts']].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.83rem' }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES (light) ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label" style={{ color: '#5bc4f5' }}>What We Do</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1rem', color: '#0d1f35', fontWeight: 800 }}>
              Full-service marketing<br />for <span style={{ color: '#5bc4f5' }}>health practices</span>
            </h2>
            <p style={{ color: '#6b849a', fontSize: '1.05rem', lineHeight: '1.75', maxWidth: '560px', fontWeight: 300 }}>
              Every service is designed specifically for health and allied health businesses — no generalist fluff, just strategies that fill appointment books.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem' }}>
            {services.map(s => (
              <Link href={s.href} key={s.title}>
                <div className="card-light" style={{ height: '100%', cursor: 'pointer' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.2rem' }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.6rem', color: '#0d1f35' }}>{s.title}</h3>
                  <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.65', fontWeight: 300 }}>{s.desc}</p>
                  <div style={{ marginTop: '1.2rem', color: '#5bc4f5', fontSize: '0.8rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Learn more →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US (white) ── */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div className="section-label" style={{ color: '#5bc4f5' }}>Our Niche</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.2, color: '#0d1f35', marginBottom: '1rem' }}>
                We speak <span style={{ color: '#5bc4f5' }}>health</span>
              </h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #5bc4f5, transparent)', borderRadius: '2px', marginBottom: '1.5rem' }} />
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '1.25rem', fontWeight: 300, fontSize: '0.98rem' }}>
                Most marketing agencies treat a physio clinic the same as any other small business. We don&apos;t. We understand patient journeys, referral networks, clinical credibility, and the compliance nuances that come with marketing health services.
              </p>
              <p style={{ color: '#6b849a', lineHeight: '1.85', marginBottom: '2rem', fontWeight: 300, fontSize: '0.98rem' }}>
                Our campaigns use the right language to attract the right patients — and we know which conditions, services, and trust signals actually convert browsers into booked appointments.
              </p>
              <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.8rem', border: '1.5px solid #1a3a5c', borderRadius: '8px', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#0d1f35', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'border-color 0.2s' }}>
                About MoveX →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {whyItems.map(item => (
                <div key={item.title} style={{ padding: '1.25rem 1.5rem', border: '1px solid #e2eaf4', borderLeft: '3px solid #5bc4f5', borderRadius: '0 10px 10px 0', background: '#f9fbff' }}>
                  <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.82rem', color: '#0d1f35', marginBottom: '0.4rem', letterSpacing: '0.03em' }}>{item.title}</h4>
                  <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.65', fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (dark, space feel) ── */}
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
            Book a free strategy session. We&apos;ll audit your current marketing, identify the gaps, and show you exactly how we'd grow your practice — no obligation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Strategy Session →
          </Link>
        </div>
      </section>
    </>
  );
}
