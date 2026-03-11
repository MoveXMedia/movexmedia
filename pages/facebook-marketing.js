import Head from 'next/head';
import Link from 'next/link';

const adTypes = [
  {
    icon: '🎯',
    title: 'Local Awareness Ads',
    desc: 'Reach people within a set radius of your clinic. Build brand recognition in your local area so your name is the first that comes to mind when someone needs a physio.',
  },
  {
    icon: '🔁',
    title: 'Retargeting Campaigns',
    desc: 'Re-engage people who visited your website but didn\'t book. Retargeting typically delivers the highest ROI of any ad type because you\'re reaching warm, already-interested audiences.',
  },
  {
    icon: '📋',
    title: 'Lead Generation Ads',
    desc: 'Capture enquiries directly on Facebook without sending people to your website. Perfect for new patient offers, free consultations, and specific service promotions.',
  },
  {
    icon: '👥',
    title: 'Lookalike Audiences',
    desc: 'We build audiences that mirror your best existing patients — Facebook finds new people who share the same characteristics and behaviours.',
  },
  {
    icon: '📸',
    title: 'Story & Reel Ads',
    desc: 'Short-form video ads that play in stories and reels — the highest-engagement placements on Meta platforms, with strong results for brand awareness.',
  },
  {
    icon: '🔄',
    title: 'Seasonal Campaigns',
    desc: 'Targeted pushes for specific periods — New Year injury prevention, school sports season, winter fitness — timed to patient behaviour patterns.',
  },
];

export default function FacebookMarketing() {
  return (
    <>
      <Head>
        <title>Facebook & Instagram Marketing for Allied Health — MoveX Media</title>
        <meta name="description" content="Facebook and Instagram advertising for physiotherapy and allied health practices. Build your local presence and fill your books with precision-targeted social ads." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/facebook-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Facebook & Instagram Marketing for Allied Health — MoveX Media" />
        <meta property="og:description" content="Facebook and Instagram advertising for physiotherapy and allied health practices. Build your local presence and fill your books with precision-targeted social ads." />
        <meta property="og:url" content="https://movex.media/facebook-marketing" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facebook & Instagram Marketing for Allied Health — MoveX Media" />
        <meta name="twitter:description" content="Facebook and Instagram advertising for physiotherapy and allied health practices. Build your local presence and fill your books with precision-targeted social ads." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* Hero */}
      <section style={{
        padding: '12rem 2rem 6rem',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid-2">
            <div>
              <div className="section-label">Facebook & Instagram Ads</div>
              <h1 style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                lineHeight: '1.2',
                marginBottom: '1.5rem',
              }}>
                Reach Your Community<br />Where They <span style={{ color: '#5bc4f5' }}>Scroll</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300, fontSize: '1.05rem' }}>
                Facebook and Instagram advertising lets you build awareness in your local community, retarget website visitors, and put specific services in front of exactly the right people — before they even start searching.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Launch a Campaign →</Link>
                <Link href="/contact" className="btn-outline">Get a Free Audit</Link>
              </div>
            </div>

            {/* Visual: simulated ad unit */}
            <div style={{
              background: 'rgba(15,37,64,0.5)',
              border: '1px solid rgba(26,58,92,0.6)',
              padding: '1.25rem',
              borderRadius: '8px',
              maxWidth: '360px',
              marginLeft: 'auto',
            }}>
              <div style={{
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '1rem',
                letterSpacing: '0.1em',
              }}>// META AD PREVIEW</div>

              {/* Fake post header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #4a9eda, #5bc4f5)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}>🏥</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>Move Physiotherapy</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>Sponsored · 📍 Fremantle, WA</div>
                </div>
              </div>

              {/* Ad copy */}
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', marginBottom: '0.75rem', fontWeight: 300 }}>
                Struggling with back pain that won&apos;t go away? Our exercise-based approach gets to the root cause — not just the symptoms. 📅 Book online today.
              </p>

              {/* Fake image area */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(74,158,218,0.15), rgba(91,196,245,0.08))',
                border: '1px solid rgba(91,196,245,0.15)',
                height: '160px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
                fontSize: '3rem',
              }}>
                🏃
              </div>

              {/* CTA button */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
                    movephysiotherapy.com.au
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>Book Your Appointment</div>
                </div>
                <div style={{
                  padding: '0.4rem 0.9rem',
                  background: '#4a9eda',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'white',
                  cursor: 'pointer',
                }}>Book Now</div>
              </div>

              {/* Metrics */}
              <div style={{
                marginTop: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(26,58,92,0.5)',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.7rem',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'Poppins, sans-serif',
              }}>
                <span>REACH: 4,820</span>
                <span>CTR: 2.8%</span>
                <span style={{ color: '#5bc4f5' }}>● ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad types */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label">Campaign Types</div>
            <h2 className="section-title">The Right Ad for <span>Every Goal</span></h2>
            <p className="section-subtitle">
              Different business goals need different campaign types. We match the right strategy to your current priorities.
            </p>
          </div>
          <div className="grid-3">
            {adTypes.map(ad => (
              <div className="card" key={ad.title}>
                <div className="icon-wrap">{ad.icon}</div>
                <h3 style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '0.82rem',
                  letterSpacing: '0.06em',
                  marginBottom: '0.75rem',
                }}>{ad.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
                  {ad.desc}
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
              <div className="section-label">Management Includes</div>
              <h2 className="section-title">Full-Service <span>Management</span></h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontWeight: 300, marginBottom: '2rem' }}>
                We handle everything from strategy and creative to targeting, optimisation, and reporting. You don&apos;t need any knowledge of Ads Manager — we run the mission control.
              </p>
              <Link href="/contact" className="btn-primary">Start a Campaign →</Link>
            </div>
            <div>
              {[
                'Meta Business Manager setup and access',
                'Campaign strategy and audience planning',
                'Ad creative design and copywriting',
                'Audience targeting (interests, location, demographics)',
                'Lookalike audience creation',
                'Retargeting pixel setup and campaigns',
                'A/B testing of creative and copy',
                'Weekly monitoring and budget management',
                'Monthly performance report',
                'AHPRA-conscious creative and messaging',
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

      {/* CTA */}
      <section style={{ padding: '6rem 2rem 8rem', textAlign: 'center', }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Ready to Build Your<br /><span>Local Presence?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy call. We&apos;ll look at your current marketing, your local market, and build a Facebook advertising plan around your specific goals.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </>
  );
}
