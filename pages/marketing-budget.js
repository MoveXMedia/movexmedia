import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const phases = [
  {
    key: 'startup',
    label: 'Start-up',
    rate: 0.10,
    icon: '🌱',
    desc: 'You\'re building awareness from scratch. Higher spend is needed to establish your presence and fill your books quickly.',
    detail: 'New practice, new location, or a major expansion. You\'re unknown in your market and need to generate momentum fast.',
  },
  {
    key: 'intermediate',
    label: 'Intermediate',
    rate: 0.07,
    icon: '📈',
    desc: 'You\'re growing but not yet at capacity. Marketing investment drives consistent new patient acquisition.',
    detail: 'Established 1–3 years, some word-of-mouth, but not consistently full. You want predictable growth month to month.',
  },
  {
    key: 'maintenance',
    label: 'Maintenance',
    rate: 0.04,
    icon: '⚙️',
    desc: 'You\'re at or near capacity. Spend focuses on retention, reputation, and replacing natural attrition.',
    detail: 'Consistently full books. Marketing keeps you visible, protects market share, and supports any expansion plans.',
  },
];

function formatCurrency(val) {
  if (!val || isNaN(val)) return '$0';
  return '$' + Math.round(val).toLocaleString('en-AU');
}

export default function MarketingBudget() {
  const [practitioners, setPractitioners] = useState(1);
  const [revenuePerPractitioner, setRevenuePerPractitioner] = useState('');
  const [phase, setPhase] = useState('startup');

  const selectedPhase = phases.find(p => p.key === phase);
  const revenue = parseFloat(revenuePerPractitioner) || 0;
  const totalRevenue = revenue * practitioners;
  const budgetPerPractitioner = revenue * selectedPhase.rate;
  const totalBudget = totalRevenue * selectedPhase.rate;

  const hasValues = revenue > 0;

  return (
    <>
      <Head>
        <title>Marketing Budget Calculator for Allied Health — MoveX Media</title>
        <meta name="description" content="Work out how much your allied health practice should be spending on marketing. Free calculator based on your revenue goals and growth phase." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/marketing-budget" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Marketing Budget Calculator for Allied Health — MoveX Media" />
        <meta property="og:description" content="Work out how much your allied health practice should be spending on marketing. Free calculator based on your revenue goals and growth phase." />
        <meta property="og:url" content="https://movex.media/marketing-budget" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Marketing Budget Calculator for Allied Health — MoveX Media" />
        <meta name="twitter:description" content="Work out how much your allied health practice should be spending on marketing. Free calculator based on your revenue goals and growth phase." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* HERO */}
      <section style={{ padding: '8rem 2rem 5rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1.2rem' }}>Free Calculator</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
            How much should your practice<br />
            <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              be spending on marketing?
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '640px', margin: '0 auto 1.5rem', fontWeight: 300 }}>
            Most allied health practices either spend too little to see results, or waste money without a clear strategy. Use this calculator to find the right range for your goals and growth stage.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Phase selector */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#5bc4f5', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Step 1 — Where is your practice right now?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {phases.map(p => (
                <button
                  key={p.key}
                  onClick={() => setPhase(p.key)}
                  style={{
                    textAlign: 'left',
                    padding: '1.4rem 1.6rem',
                    borderRadius: '8px',
                    border: phase === p.key ? '2px solid #5bc4f5' : '2px solid rgba(13,31,53,0.15)',
                    background: phase === p.key ? 'rgba(91,196,245,0.06)' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: phase === p.key ? '0 0 0 3px rgba(91,196,245,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{p.icon}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0d1f35', marginBottom: '0.3rem' }}>{p.label}</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#5bc4f5', marginBottom: '0.6rem' }}>{Math.round(p.rate * 100)}% of revenue</div>
                  <div style={{ fontSize: '0.8rem', color: '#6b849a', lineHeight: '1.55', fontWeight: 300 }}>{p.desc}</div>
                </button>
              ))}
            </div>
            {/* Phase detail */}
            <div style={{ marginTop: '1rem', padding: '1rem 1.4rem', background: 'rgba(91,196,245,0.06)', border: '1px solid rgba(91,196,245,0.15)', borderRadius: '8px' }}>
              <p style={{ color: '#0d1f35', fontSize: '0.85rem', lineHeight: '1.65', margin: 0, fontWeight: 300 }}>
                <strong style={{ fontWeight: 600 }}>{selectedPhase.label}:</strong> {selectedPhase.detail}
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#5bc4f5', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Step 2 — Goal revenue per practitioner / month
              </label>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6b849a', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem' }}>$</span>
                <input
                  type="number"
                  min="0"
                  value={revenuePerPractitioner}
                  onChange={e => setRevenuePerPractitioner(e.target.value)}
                  placeholder="e.g. 20000"
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 2.2rem',
                    borderRadius: '8px',
                    border: '2px solid rgba(13,31,53,0.15)',
                    background: 'white',
                    fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#0d1f35',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = '#5bc4f5'}
                  onBlur={e => e.target.style.borderColor = 'rgba(13,31,53,0.15)'}
                />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b849a', marginTop: '0.4rem', fontWeight: 300 }}>Enter the monthly revenue you are targeting per practitioner</div>
            </div>

            <div>
              <label style={{ display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: '#5bc4f5', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                Step 3 — Number of practitioners
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  onClick={() => setPractitioners(Math.max(1, practitioners - 1))}
                  style={{ width: '46px', height: '52px', borderRadius: '8px', border: '2px solid rgba(13,31,53,0.15)', background: 'white', fontSize: '1.4rem', cursor: 'pointer', color: '#0d1f35', flexShrink: 0 }}
                >−</button>
                <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.8rem', color: '#0d1f35', padding: '0.6rem', background: 'white', borderRadius: '8px', border: '2px solid rgba(13,31,53,0.15)' }}>{practitioners}</div>
                <button
                  onClick={() => setPractitioners(practitioners + 1)}
                  style={{ width: '46px', height: '52px', borderRadius: '8px', border: '2px solid rgba(13,31,53,0.15)', background: 'white', fontSize: '1.4rem', cursor: 'pointer', color: '#0d1f35', flexShrink: 0 }}
                >+</button>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b849a', marginTop: '0.4rem', fontWeight: 300 }}>FTE or part-time practitioners in your practice</div>
            </div>
          </div>

          {/* Results */}
          <div style={{ background: hasValues ? 'linear-gradient(135deg, #0d1f35, #061220)' : 'rgba(13,31,53,0.06)', borderRadius: '12px', padding: '2.5rem', border: hasValues ? '1px solid rgba(91,196,245,0.2)' : '2px dashed rgba(13,31,53,0.12)', transition: 'all 0.3s' }}>
            {!hasValues ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>👆</div>
                <p style={{ color: '#6b849a', fontSize: '0.95rem', fontWeight: 300 }}>Enter your revenue goal above to see your recommended budget</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>{selectedPhase.icon}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', color: '#5bc4f5', textTransform: 'uppercase' }}>{selectedPhase.label} Phase · {Math.round(selectedPhase.rate * 100)}% of revenue</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: practitioners > 1 ? '1fr 1fr' : '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  {practitioners > 1 && (
                    <div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Per practitioner / month</div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2.2rem', color: 'white' }}>{formatCurrency(budgetPerPractitioner)}</div>
                    </div>
                  )}
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      {practitioners > 1 ? 'Total practice / month' : 'Recommended / month'}
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: practitioners > 1 ? '2.2rem' : '3rem', color: '#5bc4f5' }}>{formatCurrency(totalBudget)}</div>
                  </div>
                </div>

                {/* Breakdown bar */}
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '1.2rem 1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>How to split it</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[
                      { label: 'Paid advertising (Google/Meta ad spend)', pct: 0.6 },
                      { label: 'Management & strategy (agency fee)', pct: 0.25 },
                      { label: 'Content & other channels', pct: 0.15 },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ flex: 1, fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>{item.label}</div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'white', minWidth: '70px', textAlign: 'right' }}>{formatCurrency(totalBudget * item.pct)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', lineHeight: '1.6', fontWeight: 300, margin: 0 }}>
                  Based on industry benchmarks: Start-up 10%, Intermediate 7%, Maintenance 4% of target revenue. The split above is a guide — optimal allocation depends on your specific services, market, and growth goals.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CONTEXT SECTION */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>The Thinking Behind It</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', marginBottom: '3rem' }}>
            Why marketing spend is tied to <span style={{ color: '#5bc4f5' }}>phase, not instinct</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {phases.map(p => (
              <div key={p.key} className="card" style={{ padding: '1.8rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{p.icon}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.2rem' }}>{p.label} Phase</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#5bc4f5', marginBottom: '0.8rem' }}>{Math.round(p.rate * 100)}% of revenue</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: '1.7', fontWeight: 300 }}>{p.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', padding: '1.8rem 2rem', background: 'rgba(91,196,245,0.05)', border: '1px solid rgba(91,196,245,0.15)', borderRadius: '10px' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', margin: 0, fontWeight: 300 }}>
              <strong style={{ color: 'white', fontWeight: 600 }}>A note on underspending:</strong> The most common mistake in allied health marketing is spending too little to generate momentum and then concluding &ldquo;marketing doesn&apos;t work.&rdquo; A $300/month Google Ads budget in a competitive market will not move the needle — it will just drain slowly. The figures above are minimums for a market like Perth, not maximums.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '1rem' }}>
            Know your budget — now spend it well
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session. We&apos;ll show you where your budget will generate the best return for your specific practice.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book Free Strategy Session →</span></Link>
            <Link href="/pricing"><span style={{ display: 'inline-block', padding: '0.9rem 1.8rem', border: '1px solid rgba(13,31,53,0.2)', borderRadius: '4px', color: '#6b849a', fontSize: '0.85rem', cursor: 'pointer' }}>View Packages</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
