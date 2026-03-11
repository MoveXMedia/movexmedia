import Head from 'next/head';
import Link from 'next/link';

const packages = [
  {
    name: 'Beginner',
    tag: 'Getting Started',
    icon: '🌱',
    adSpend: '$1,000',
    management: '$200',
    setup: '$200',
    monthly: '$200',
    highlight: false,
    desc: 'Perfect for practices new to digital marketing or looking to test the water with a focused, low-risk campaign.',
    includes: [
      'Google Ads or Facebook Ads (1 platform)',
      'Campaign setup & keyword research',
      'Monthly performance report',
      'Conversion tracking setup',
      'AHPRA-compliant ad copy',
      'Email support',
    ],
  },
  {
    name: 'Intermediate',
    tag: 'Most Popular',
    icon: '🚀',
    adSpend: '$5,000',
    management: '$500',
    setup: '$500',
    monthly: '$500',
    highlight: true,
    desc: 'For established practices ready to scale. Multi-platform campaigns with deeper optimisation and broader reach.',
    includes: [
      'Google Ads + Facebook/Instagram Ads',
      'Full campaign setup across both platforms',
      'Audience building & retargeting',
      'A/B ad creative testing',
      'Bi-weekly performance reviews',
      'Conversion tracking (calls + bookings)',
      'Priority email & phone support',
      'Landing page recommendations',
    ],
  },
  {
    name: 'Expert',
    tag: 'Maximum Growth',
    icon: '⚡',
    adSpend: '$10,000',
    management: '$1,000',
    setup: '$500',
    monthly: '$1,000',
    highlight: false,
    desc: 'Full-scale digital marketing for high-growth practices or multi-location clinics serious about market dominance.',
    includes: [
      'All platforms — Google, Facebook, Instagram',
      'Full funnel strategy & campaign architecture',
      'Custom audience & lookalike targeting',
      'Dedicated account management',
      'Weekly performance reviews',
      'Advanced conversion tracking',
      'Competitor analysis & market positioning',
      'Landing page creation included',
      'Monthly strategy session',
    ],
  },
];

const faqs = [
  {
    q: 'Is the ad spend included in the management fee?',
    a: 'No — ad spend and management fee are separate. The ad spend goes directly to Google or Meta and is billed by them. The management fee is paid to MoveX Media for strategy, setup, and ongoing optimisation.',
  },
  {
    q: 'What does the setup fee cover?',
    a: 'The one-time setup fee covers campaign architecture, keyword research, ad copywriting, audience building, conversion tracking installation, and initial launch. It\'s a one-off cost paid at the start of your engagement.',
  },
  {
    q: 'What is the minimum term?',
    a: 'All packages have a 6-month minimum term. Campaigns need time to gather data and optimise — results improve significantly from month 2–3 onwards. You can downgrade to a lower package at any time within your term.',
  },
  {
    q: 'Can I upgrade my package?',
    a: 'Yes, you can upgrade at any time. Many clients start on Beginner to get comfortable and move to Intermediate once they see results. There\'s no penalty for upgrading.',
  },
  {
    q: 'Does the ad spend cover both Google and Facebook?',
    a: 'Yes — the ad spend limit applies across all platforms combined. On the Intermediate and Expert packages, budget is allocated across Google Ads and Meta (Facebook/Instagram) based on where your audience is most active.',
  },
  {
    q: 'What happens after 6 months?',
    a: 'After your minimum term you move to a rolling monthly arrangement. You can continue, upgrade, downgrade, or exit with 30 days notice.',
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Packages — MoveX Media</title>
        <meta name="description" content="Transparent, fixed-price digital marketing packages for health and allied health practices. Google Ads, Facebook, Instagram — all included." />
      </Head>

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Packages</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Simple. <span style={{ color: '#5bc4f5' }}>Fixed.</span><br />No Surprises.
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '560px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            Three packages built around your ad spend. Every package includes full campaign management across Google and Meta platforms.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '2rem 2rem 6rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{
                background: pkg.highlight
                  ? 'linear-gradient(160deg, rgba(15,37,64,0.95), rgba(20,50,80,0.7))'
                  : 'linear-gradient(135deg, rgba(15,37,64,0.8), rgba(13,31,53,0.6))',
                border: pkg.highlight ? '1px solid rgba(91,196,245,0.5)' : '1px solid #1a3a5c',
                borderRadius: '4px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '14px',
                transform: pkg.highlight ? 'scale(1.02)' : 'scale(1)',
                boxShadow: pkg.highlight ? '0 0 60px rgba(91,196,245,0.12)' : 'none',
              }}>
                {/* Top accent line */}
                {pkg.highlight && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #5bc4f5, transparent)',
                  }} />
                )}

                {/* Header */}
                <div style={{ padding: '2rem 2rem 1.5rem', borderBottom: '1px solid rgba(26,58,92,0.5)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '2rem' }}>{pkg.icon}</div>
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.58rem',
                      letterSpacing: '0.04em',
                      color: pkg.highlight ? '#5bc4f5' : 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.8rem',
                      border: `1px solid ${pkg.highlight ? 'rgba(91,196,245,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      borderRadius: '2px',
                    }}>
                      {pkg.tag}
                    </span>
                  </div>
                  <h2 style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                    color: pkg.highlight ? '#5bc4f5' : 'white',
                  }}>{pkg.name}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: '1.6', fontWeight: 300 }}>
                    {pkg.desc}
                  </p>
                </div>

                {/* Pricing breakdown */}
                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(26,58,92,0.5)' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '0.6rem',
                      letterSpacing: '0.04em',
                      color: 'rgba(255,255,255,0.35)',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '1rem',
                    }}>Monthly Investment</span>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.8rem',
                          fontWeight: 900,
                          color: 'white',
                          lineHeight: 1,
                        }}>{pkg.management}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.3rem', fontWeight: 300 }}>
                          management fee / mo
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>+</div>
                      <div>
                        <div style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '1.8rem',
                          fontWeight: 900,
                          color: '#5bc4f5',
                          lineHeight: 1,
                        }}>up to {pkg.adSpend}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.3rem', fontWeight: 300 }}>
                          ad spend / mo
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{
                    marginTop: '1.25rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(26,58,92,0.6)',
                    borderRadius: '2px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>One-time setup fee</span>
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
                      {pkg.setup}
                    </span>
                  </div>
                  <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)',
                    fontWeight: 300,
                    textAlign: 'center',
                  }}>
                    6-month minimum term · Downgrade anytime
                  </div>
                </div>

                {/* Includes */}
                <div style={{ padding: '1.5rem 2rem 2rem' }}>
                  <div style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.35)',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}>What's included</div>
                  {pkg.includes.map(item => (
                    <div key={item} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.6rem',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 300,
                      lineHeight: '1.4',
                    }}>
                      <span style={{ color: '#5bc4f5', fontSize: '0.7rem', marginTop: '2px', flexShrink: 0 }}>◆</span>
                      {item}
                    </div>
                  ))}

                  <Link href="/contact" className={pkg.highlight ? 'btn-primary' : 'btn-outline'} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.75rem',
                    fontSize: '0.72rem',
                    padding: '0.85rem 1.5rem',
                  }}>
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison note */}
          <p style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.85rem',
            marginTop: '2.5rem',
            fontWeight: 300,
          }}>
            All packages include Google Ads, Facebook & Instagram Ads, and any Meta platform variations. Ad spend is billed directly by Google / Meta — separate to the management fee.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ padding: '2rem 2rem 6rem', background: 'rgba(15,37,64,0.3)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Side by Side</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Package <span>Comparison</span></h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'inherit' }}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, textAlign: 'left', width: '30%' }}></th>
                  {packages.map(pkg => (
                    <th key={pkg.name} style={{
                      ...thStyle,
                      color: pkg.highlight ? '#5bc4f5' : 'white',
                      borderBottom: pkg.highlight ? '2px solid #5bc4f5' : '1px solid #1a3a5c',
                    }}>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                        {pkg.icon} {pkg.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Management Fee', values: ['$200 / mo', '$500 / mo', '$1,000 / mo'] },
                  { label: 'Max Ad Spend', values: ['$1,000 / mo', '$5,000 / mo', '$10,000 / mo'] },
                  { label: 'Setup Fee', values: ['$200', '$500', '$500'] },
                  { label: 'Minimum Term', values: ['6 months', '6 months', '6 months'] },
                  { label: 'Google Ads', values: ['✓', '✓', '✓'] },
                  { label: 'Facebook & Instagram', values: ['—', '✓', '✓'] },
                  { label: 'Retargeting Campaigns', values: ['—', '✓', '✓'] },
                  { label: 'A/B Ad Testing', values: ['—', '✓', '✓'] },
                  { label: 'Landing Page Creation', values: ['—', '—', '✓'] },
                  { label: 'Dedicated Account Manager', values: ['—', '—', '✓'] },
                  { label: 'Weekly Reviews', values: ['—', '—', '✓'] },
                  { label: 'Monthly Strategy Session', values: ['—', '—', '✓'] },
                  { label: 'Downgrade Anytime', values: ['✓', '✓', '✓'] },
                ].map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(15,37,64,0.2)' }}>
                    <td style={tdLabelStyle}>{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} style={{
                        ...tdStyle,
                        color: val === '✓' ? '#5bc4f5' : val === '—' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.75)',
                        fontFamily: (val === '✓' || val === '—') ? 'inherit' : 'Poppins, sans-serif',
                        fontSize: (val === '✓' || val === '—') ? '1rem' : '0.8rem',
                        fontWeight: packages[j].highlight ? 600 : 400,
                      }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Pricing <span>Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(faq => (
              <div key={faq.q} className="card">
                <h4 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.78rem',
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
      <section style={{ padding: '4rem 2rem 8rem', textAlign: 'center', }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Not sure which<br /><span>package is right?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and we'll recommend the right package based on your practice size, goals, and current marketing.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Session →
          </Link>
        </div>
      </section>
    </>
  );
}

const thStyle = {
  padding: '1rem 1.25rem',
  textAlign: 'center',
  borderBottom: '1px solid #1a3a5c',
  fontWeight: 600,
  color: 'white',
};

const tdStyle = {
  padding: '0.85rem 1.25rem',
  textAlign: 'center',
  borderBottom: '1px solid rgba(26,58,92,0.3)',
  fontSize: '0.85rem',
  fontWeight: 300,
};

const tdLabelStyle = {
  padding: '0.85rem 1.25rem',
  textAlign: 'left',
  borderBottom: '1px solid rgba(26,58,92,0.3)',
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.5)',
  fontWeight: 300,
};
