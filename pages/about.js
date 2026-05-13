import Head from 'next/head';
import Link from 'next/link';

const values = [
  {
    icon: '🎯',
    title: 'Small Business First',
    desc: 'We work with local service businesses — not enterprise. Every strategy is scaled to your budget and built to grow with you, not overwhelm you.',
  },
  {
    icon: '📊',
    title: 'Results Driven',
    desc: 'We measure what matters: leads, sales, and customers — not vanity metrics. Every dollar you spend is tracked against real business outcomes.',
  },
  {
    icon: '🤝',
    title: 'Transparent Partnership',
    desc: "No jargon, no black boxes. You see exactly what's running, what it's costing, and what it's returning — always.",
  },
  {
    icon: '🔬',
    title: 'Evidence Based',
    desc: 'Our strategies are tested inside real businesses with real budgets — not borrowed from case studies. We refine based on what the data actually shows.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — MoveX Media</title>
        <meta name="description" content="MoveX Media is a digital marketing agency for local service businesses — built by a founder who grew a multi-million dollar practice using the same strategies we offer." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="About — MoveX Media" />
        <meta property="og:description" content="MoveX Media is a digital marketing agency for local service businesses — built by a founder who grew a multi-million dollar practice using the same strategies we offer." />
        <meta property="og:url" content="https://movex.media/about" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About — MoveX Media" />
        <meta name="twitter:description" content="MoveX Media is a digital marketing agency for local service businesses — built by a founder who grew a multi-million dollar practice using the same strategies we offer." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>About MoveX Media</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Built to <span style={{ color: '#5bc4f5' }}>Convert</span>.
            Made to <span style={{ color: '#5bc4f5' }}>Move</span>.
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            MoveX Media was born out of hands-on experience running a real business. We know what it takes to grow a customer base — because we&apos;ve done it.
          </p>
        </div>
      </section>

      {/* ── DANIEL RYAN (light) ── */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '5rem', alignItems: 'start' }} className="founder-grid">

            {/* Photo */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '100%', height: '100%', border: '2px solid rgba(91,196,245,0.2)', borderRadius: '14px', zIndex: 0 }} />
              <img
                src="/daniel-ryan.jpg"
                alt="Daniel Ryan — Founder, MoveX Media"
                style={{ width: '100%', borderRadius: '10px', display: 'block', objectFit: 'cover', aspectRatio: '3/4', position: 'relative', zIndex: 1, boxShadow: '0 12px 40px rgba(13,31,53,0.12)' }}
              />
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', zIndex: 2, background: 'rgba(8,15,26,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '8px', padding: '0.6rem 1rem' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: 'white' }}>Daniel Ryan</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.1rem' }}>Founder & Head IT</div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <div className="section-label" style={{ color: '#5bc4f5' }}>Founder</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.2, color: '#0d1f35', marginBottom: '1rem' }}>
                Daniel Ryan
              </h2>
              <p style={{ color: '#5bc4f5', fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Founder — Move Physiotherapy & Fitness<br />
                Founder — MoveX Media
              </p>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, #5bc4f5, transparent)', borderRadius: '2px', marginBottom: '1.75rem' }} />
              <p style={{ color: '#6b849a', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.1rem', fontSize: '0.98rem' }}>
                Daniel&apos;s background in digital marketing started over 15 years ago during his studies, building websites before most small businesses had one. When he founded Move Physiotherapy &amp; Fitness — now a multi-location business across Perth — he did what most business owners do: wore every marketing hat himself.
              </p>
              <p style={{ color: '#6b849a', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.1rem', fontSize: '0.98rem' }}>
                Social media, Google Ads, email campaigns, website management — he ran it all in-house. When he eventually engaged external agencies, the results didn&apos;t stack up. So he went deeper, upskilling across paid search, Meta advertising, and conversion strategy until his own campaigns were consistently outperforming what agencies had delivered.
              </p>
              <p style={{ color: '#6b849a', lineHeight: '1.85', fontWeight: 300, marginBottom: '2rem', fontSize: '0.98rem' }}>
                That track record — built inside a real business, with real budgets and real accountability — is what MoveX Media was founded on. Starting from a single room with a $10k budget, Move Physiotherapy has grown into a multi-million dollar, three-location practice. Every strategy MoveX offers is battle-tested in that environment.
              </p>

              {/* Credential pills */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Multi-industry Experience', 'Google Ads Certified', 'Meta Advertising', 'Move Physio Founder', '15+ yrs Digital Marketing'].map(tag => (
                  <span key={tag} style={{ background: '#f4f7fb', border: '1px solid #e2eaf4', borderRadius: '20px', padding: '0.35rem 0.85rem', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', fontWeight: 600, color: '#1a3a5c' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .founder-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </section>

      {/* ── STORY — Marketing From the Inside ── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">
                Marketing From the <span>Inside</span>
              </h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: 300 }}>
                MoveX Media was founded with one conviction: that local service businesses deserve marketing partners who actually understand growth. Not agencies running templated campaigns, but people who've built a customer base from scratch and know the pressure of a quiet month.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: 300 }}>
                We grew out of a successful multi-location service business in Perth — where we built and executed our own digital marketing from the ground up. Everything we offer is battle-tested in a real business environment with real money on the line.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', fontWeight: 300 }}>
                That background gives us an edge that generalist agencies simply can&apos;t replicate. We understand your growth levers, your cost per acquisition, and what actually moves the needle for a local service business. We don&apos;t have a learning curve when we start working with you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '70px', height: '70px', background: 'linear-gradient(135deg, #4a9eda, #5bc4f5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0, borderRadius: '10px' }}>🚀</div>
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', marginBottom: '0.5rem' }}>Perth-Based. Worldwide Reach.</h3>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                      Nationwide reach, local focus. We work with service businesses across Australia and internationally — from solo operators to multi-location businesses.
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { val: 'Any Industry', label: 'All business types welcome' },
                  { val: '48hr', label: 'Campaign launch' },
                  { val: '7 days', label: 'Website launch time' },
                  { val: 'Local', label: 'Perth-based team' },
                ].map(s => (
                  <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: '#5bc4f5', marginBottom: '0.4rem' }}>{s.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 300 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Our <span>Values</span>
            </h2>
          </div>
          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {values.map(v => (
              <div key={v.title} style={{ background: 'white', border: '1px solid #e2eaf4', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(13,31,53,0.06)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', color: '#0d1f35' }}>{v.title}</h3>
                <p style={{ color: '#6b849a', lineHeight: '1.7', fontWeight: 300, fontSize: '0.9rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Ready to Work<br /><span>Together?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and let&apos;s talk about where you want your business to go.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Session →
          </Link>
        </div>
      </section>
    </>
  );
}
