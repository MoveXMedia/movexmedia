import Head from 'next/head';
import Link from 'next/link';

const values = [
  {
    icon: '🎯',
    title: 'Niche First',
    desc: 'We only work with health and allied health businesses. Deep specialisation means better results — every strategy, every campaign is built on industry-specific knowledge.',
  },
  {
    icon: '📊',
    title: 'Results Driven',
    desc: 'We measure what matters: booked appointments, not vanity metrics. Every dollar you spend is tracked against real business outcomes.',
  },
  {
    icon: '🤝',
    title: 'Transparent Partnership',
    desc: 'No jargon, no black boxes. You see exactly what\'s running, what it\'s costing, and what it\'s returning — always.',
  },
  {
    icon: '🔬',
    title: 'Evidence Based',
    desc: 'Like the allied health philosophy we market for, our strategies are evidence-based, tested, and continually refined.',
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — MoveX Media</title>
        <meta name="description" content="MoveX Media is a Perth-based digital marketing agency built exclusively for health and allied health businesses." />
      </Head>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>About MoveX Media</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Built for <span style={{ color: '#5bc4f5' }}>Health</span>.<br />
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
            MoveX Media was born out of hands-on experience running a real allied health business. We know what it takes to fill an appointment book — because we've done it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">
                Marketing From the <span>Inside</span>
              </h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: 300 }}>
                MoveX Media was founded with one conviction: that health practices deserve marketing partners who actually understand their world. Not agencies that have read a few blog posts about physiotherapy, but people who've sat in the clinic, built the patient base, and know the pressure of an empty schedule.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', marginBottom: '1.5rem', fontWeight: 300 }}>
                We grew out of Move Physiotherapy — a multi-clinic allied health practice in Perth — where we built and executed our own digital marketing from the ground up. Everything we offer is battle-tested in a real health business environment.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.9', fontWeight: 300 }}>
                That background gives us an edge that generalist agencies simply can't replicate. We know your patients, your referrers, your compliance obligations, and your growth levers. We don't have a learning curve when we start working with you.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Profile card */}
              <div className="card">
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #4a9eda, #5bc4f5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    flexShrink: 0,
                    borderRadius: '10px',
                  }}>
                    🚀
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1rem',
                      marginBottom: '0.5rem',
                    }}>Perth-Based. Health-Focused.</h3>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                      Locally grounded, digitally advanced. We work with health practices across Perth and nationally, with deep roots in the Western Australian health sector.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}>
                {[
                  { val: '100%', label: 'Health clients only' },
                  { val: '48hr', label: 'Campaign launch' },
                  { val: 'AHPRA', label: 'Compliant by default' },
                  { val: 'Local', label: 'Perth-based team' },
                ].map(s => (
                  <div key={s.label} className="card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                    <div style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#5bc4f5',
                      marginBottom: '0.4rem',
                    }}>{s.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 300 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '4rem 2rem 8rem', background: 'rgba(15,37,64,0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Our <span>Values</span>
            </h2>
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {values.map(v => (
              <div className="card" key={v.title}>
                <div className="icon-wrap">{v.icon}</div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                }}>{v.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', fontWeight: 300, fontSize: '0.95rem' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Ready to Work<br /><span>Together?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and let's talk about where you want your practice to go.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Free Session →
          </Link>
        </div>
      </section>
    </>
  );
}
