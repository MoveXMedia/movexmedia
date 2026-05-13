import Head from 'next/head';
import Link from 'next/link';

const packages = [
  {
    name: 'Beginner',
    tag: 'Getting Started',
    icon: '🌱',
    adSpend: '$1,000',
    management: '$200',
    setup: '$400',
    monthly: '$200',
    highlight: false,
    desc: 'Perfect for small businesses new to digital marketing or looking to test the water with a focused, low-risk campaign.',
    includes: [
      'Google Ads or Facebook Ads (1 platform)',
      'Campaign setup & keyword research',
      'Monthly performance report',
      'Conversion tracking setup',
      'Copy written for your business',
      'Email support',
    ],
  },
  {
    name: 'Intermediate',
    tag: 'Most Popular',
    icon: '🚀',
    adSpend: '$5,000',
    management: '$750',
    setup: '$750',
    monthly: '$750',
    highlight: true,
    hubIncluded: true,
    desc: 'For established businesses ready to scale. Multi-platform campaigns with deeper optimisation and broader reach.',
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
    management: '$1,500',
    setup: '$1,000',
    monthly: '$1,500',
    highlight: false,
    hubIncluded: true,
    desc: 'Full-scale digital marketing for high-growth businesses or multi-location operators serious about market dominance.',
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
    q: 'What is the MoveX Marketing Hub and what does it include?',
    a: 'The MoveX Marketing Hub is our purpose-built platform for health and allied health businesses. It includes email automation (welcome emails, reactivation, birthday vouchers, review requests), a clinician performance portal with KPI tracking and insurance/EPC monitoring, social post publishing to Instagram, Facebook, and Google My Business, Facebook Ads statistics, and a practice password file. It\'s included at no added cost with Intermediate and Expert packages — a $199/month value.',
  },
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
    a: 'All packages have a 6-month minimum term. Campaigns need time to gather data and optimise — results improve significantly from month 2–3 onwards.',
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
    a: 'After your minimum term you move to a rolling monthly arrangement. You can continue, upgrade, or exit with 30 days notice.',
  },
];

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Packages — MoveX Media</title>
        <meta name="description" content="Transparent, fixed-price digital marketing packages for local service businesses. Google Ads, Facebook, Instagram — all included." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Packages — MoveX Media" />
        <meta property="og:description" content="Transparent, fixed-price digital marketing packages for local service businesses. Google Ads, Facebook, Instagram — all included." />
        <meta property="og:url" content="https://movex.media/pricing" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Packages — MoveX Media" />
        <meta name="twitter:description" content="Transparent, fixed-price digital marketing packages for local service businesses. Google Ads, Facebook, Instagram — all included." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
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
            Packages are structured around your ad spend and platform complexity. All packages include dedicated campaign management, reporting, and ongoing optimisation.
          </p>
        </div>
      </section>

      {/* Website Design Pricing */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Website Development</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#0d1f35', lineHeight: 1.2, marginBottom: '1rem' }}>
              Website Design &amp; Build
            </h2>
            <p style={{ color: '#6b849a', fontSize: '0.98rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '580px', margin: '0 auto' }}>
              One-off builds. Fast, conversion-focused websites for local service businesses — built to rank on Google and turn visitors into customers. All websites include hosting at $20/month, billed monthly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {[
              {
                icon: '🌱',
                name: 'Starter',
                price: 'From $2,500',
                desc: 'A clean, professional site for a solo operator or new business. Includes hosting at $20/month.',
                pages: '3–6 pages',
                features: ['Mobile-responsive design', 'Online booking integration', 'Basic SEO setup', 'Google Analytics setup', '30-day post-launch support'],
                accent: '#6b849a',
              },
              {
                icon: '🚀',
                name: 'Growth',
                price: 'From $4,500',
                desc: 'For established businesses ready to rank on Google and convert more visitors. Includes hosting at $20/month.',
                pages: '6–10 pages',
                features: ['Custom brand-aligned design', 'Individual service pages', 'Advanced SEO + schema markup', 'Conversion tracking setup', 'Blog setup', '60-day support'],
                accent: '#5bc4f5',
                highlight: true,
              },
              {
                icon: '⚡',
                name: 'Authority',
                price: 'From $7,500',
                desc: 'Multi-location businesses or operators that want to own their market online. Includes hosting at $20/month.',
                pages: '10+ pages',
                features: ['Multi-location architecture', 'Individual location pages', 'Full technical SEO', 'Patient resources section', 'Booking system + CRM integration', '90-day support'],
                accent: '#1656A0',
              },
            ].map(pkg => (
              <div key={pkg.name} style={{ background: pkg.highlight ? 'white' : 'white', border: `1px solid ${pkg.highlight ? '#5bc4f5' : '#e2eaf4'}`, borderTop: `3px solid ${pkg.accent}`, borderRadius: '0 0 16px 16px', padding: '2rem', boxShadow: pkg.highlight ? '0 8px 40px rgba(91,196,245,0.12)' : '0 2px 12px rgba(0,0,0,0.04)', transform: pkg.highlight ? 'scale(1.02)' : 'scale(1)' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{pkg.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0d1f35', marginBottom: '0.25rem' }}>{pkg.name}</h3>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', fontWeight: 700, color: pkg.accent, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{pkg.pages}</div>
                <p style={{ color: '#6b849a', fontSize: '0.85rem', lineHeight: '1.65', fontWeight: 300, marginBottom: '1.25rem' }}>{pkg.desc}</p>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 900, color: '#0d1f35', lineHeight: 1, marginBottom: '1.25rem' }}>{pkg.price}</div>
                {pkg.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ color: pkg.accent, fontSize: '0.65rem', marginTop: '3px', flexShrink: 0 }}>◆</span>
                    <span style={{ color: '#6b849a', fontSize: '0.82rem', fontWeight: 300, lineHeight: '1.5' }}>{f}</span>
                  </div>
                ))}
                <Link href="/website-development" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', padding: '0.8rem 1.5rem', background: pkg.highlight ? '#5bc4f5' : 'transparent', border: `1px solid ${pkg.highlight ? '#5bc4f5' : '#d1dce8'}`, borderRadius: '4px', color: pkg.highlight ? 'white' : '#0d1f35', fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', textDecoration: 'none', cursor: 'pointer' }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#6b849a', fontSize: '0.82rem', fontWeight: 300 }}>
            Website builds are one-off projects — separate from ongoing ad management fees. <Link href="/website-development" style={{ color: '#5bc4f5', textDecoration: 'none', fontWeight: 600 }}>See full details →</Link>
          </p>
        </div>
      </section>


      {/* Ads Management Label */}
      <div style={{ background: 'rgba(15,37,64,0.3)', borderBottom: '1px solid rgba(26,58,92,0.4)', padding: '6rem 2rem 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.5rem', justifyContent: 'center' }}>Google &amp; Facebook Ads Management</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'white', lineHeight: 1.2, marginBottom: '0.5rem' }}>
            Paid Advertising Packages
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', fontWeight: 300, maxWidth: '560px', margin: '0 auto' }}>
            Fixed monthly management fees. Ad spend is separate and billed directly by Google or Meta.
          </p>
        </div>
      </div>
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
                    6-month minimum term
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
                  {/* CTA */}
                  <Link href="/contact" className="btn-primary" style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', fontSize: '0.78rem' }}>
                    Get Started →
                  </Link>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 6rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Pricing <span>Questions</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(faq => (
              <div key={faq.q} className="card">
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', letterSpacing: '0.05em', marginBottom: '0.75rem', color: '#5bc4f5' }}>{faq.q}</h4>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 8rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Not sure which<br /><span>package is right?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and we'll recommend the right package based on your business size, goals, and current marketing.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Session →
          </Link>
        </div>
      </section>
    </>
  );
}
