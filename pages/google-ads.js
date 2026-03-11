import Head from 'next/head';
import Link from 'next/link';

const process = [
  { step: '01', title: 'Audit & Strategy', desc: 'We analyse your market, competitors, and current setup to build a campaign strategy around the services that will deliver the best return.' },
  { step: '02', title: 'Campaign Build', desc: 'We structure your campaigns by service line — physio, dry needling, sports rehab etc. — with dedicated ad groups and highly relevant keywords.' },
  { step: '03', title: 'Ad Creation', desc: 'We write responsive search ads with up to 15 headlines and 4 descriptions, optimised for click-through rate and patient intent.' },
  { step: '04', title: 'Conversion Tracking', desc: 'We set up full conversion tracking — phone calls, online bookings, and form submissions — so every dollar is accountable.' },
  { step: '05', title: 'Launch & Monitor', desc: 'Campaigns go live within 48 hours. We monitor daily for the first two weeks and optimise aggressively in the early period.' },
  { step: '06', title: 'Monthly Optimisation', desc: 'Each month you get a clear report showing spend, conversions, cost per booking, and what we\'re adjusting to improve results.' },
];

const faqs = [
  {
    q: 'How much budget do I need?',
    a: 'For most Perth allied health practices, we recommend a minimum ad spend of $1,000–$1,500/month to generate meaningful data and results. Our management fee is separate to your ad spend.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most clients see initial conversions within the first 1–2 weeks. Campaigns typically reach full optimisation by month 2–3 as we accumulate conversion data.',
  },
  {
    q: 'Do you manage Google Ads for any type of health business?',
    a: 'We focus on physiotherapy, chiropractic, remedial massage, sports medicine, occupational therapy, and similar allied health services.',
  },
  {
    q: 'Will my ads comply with AHPRA guidelines?',
    a: 'Yes. Every ad we write is reviewed against AHPRA advertising guidelines. We never include prohibited testimonials, misleading claims, or discouraged language.',
  },
  {
    q: 'Can I keep my existing Google Ads account?',
    a: 'Absolutely. We can take over management of your existing account or build from scratch — whichever suits you.',
  },
];

export default function GoogleAds() {
  return (
    <>
      <Head>
        <title>Google Ads for Physiotherapy & Allied Health — MoveX Media</title>
        <meta name="description" content="Google Ads management built for physiotherapy and allied health practices in Perth. AHPRA-compliant campaigns that generate real bookings." />
      </Head>

      {/* Hero */}
      <section style={{
        padding: '12rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(74,158,218,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2">
            <div>
              <div className="section-label">Google Ads Management</div>
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                lineHeight: '1.2',
                marginBottom: '1.5rem',
              }}>
                Be First When<br />Patients <span style={{ color: '#5bc4f5' }}>Search</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300, fontSize: '1.05rem' }}>
                Google Ads is the most powerful tool for capturing patients who are actively searching for treatment right now. We build and manage campaigns specifically for allied health — with full conversion tracking and AHPRA-compliant copy.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Start a Campaign →</Link>
                <Link href="/contact" className="btn-outline">Get a Free Audit</Link>
              </div>
            </div>

            {/* Simulated ad preview */}
            <div style={{
              background: 'rgba(15,37,64,0.5)',
              border: '1px solid rgba(26,58,92,0.6)',
              padding: '1.5rem',
              borderRadius: '4px',
              position: 'relative',
            }}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1rem',
                letterSpacing: '0.1em',
              }}>// LIVE SEARCH PREVIEW</div>

              {/* Fake Google search bar */}
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                padding: '0.6rem 1.2rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>🔍</span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
                  physiotherapist near me
                </span>
              </div>

              {/* Sponsored ad mock */}
              <div style={{
                border: '1px solid rgba(91,196,245,0.3)',
                padding: '1rem',
                borderRadius: '4px',
                background: 'rgba(91,196,245,0.05)',
              }}>
                <div style={{
                  fontSize: '0.65rem',
                  color: '#5bc4f5',
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}>SPONSORED</div>
                <div style={{
                  color: '#89c4e1',
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginBottom: '0.25rem',
                }}>Expert Physiotherapy Perth | Book Online Today</div>
                <div style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.75rem',
                  marginBottom: '0.5rem',
                }}>movephysiotherapy.com.au</div>
                <div style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                  fontWeight: 300,
                }}>
                  5-Star Rated Perth Physio Clinic. Same-Week Appointments Available. New Patients Welcome.
                </div>
              </div>

              {/* Conversion indicator */}
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.35)',
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.08em',
              }}>
                <span>CONVERSIONS ↑ 34%</span>
                <span style={{ color: '#5bc4f5' }}>● LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Our Campaign <span>Process</span></h2>
          </div>
          <div className="grid-3">
            {process.map(p => (
              <div key={p.step} className="card">
                <div style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(91,196,245,0.15)',
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}>{p.step}</div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  marginBottom: '0.75rem',
                  color: '#5bc4f5',
                }}>{p.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.3)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2">
            <div>
              <div className="section-label">What's Included</div>
              <h2 className="section-title">Everything You <span>Need</span></h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontWeight: 300, marginBottom: '2rem' }}>
                Our Google Ads management is fully managed — no account access needed, no technical knowledge required. You focus on treating patients, we fill your schedule.
              </p>
              <Link href="/contact" className="btn-primary">Get Started →</Link>
            </div>
            <div>
              {[
                'Campaign setup from scratch or account takeover',
                'Keyword research (condition and service-based)',
                'Responsive search ad copywriting',
                'Ad extensions (callouts, sitelinks, call)',
                'Negative keyword strategy',
                'Conversion tracking (calls + online bookings)',
                'Landing page review and recommendations',
                'Weekly monitoring and bid adjustments',
                'Monthly performance report',
                'AHPRA-compliant ad copy as standard',
              ].map(item => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(26,58,92,0.3)',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 300,
                }}>
                  <span style={{ color: '#5bc4f5', fontSize: '0.8rem', flexShrink: 0 }}>◆</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 2rem 8rem', background: 'rgba(15,37,64,0.3)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Common <span>Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(faq => (
              <div key={faq.q} className="card">
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  marginBottom: '0.75rem',
                  color: '#5bc4f5',
                }}>{faq.q}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                  {faq.a}
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
            Ready to Fill Your <span>Schedule?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free Google Ads audit. We'll review your current setup (or build a strategy from scratch) and show you exactly how we'd approach your campaigns.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
