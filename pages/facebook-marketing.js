import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const adTypes = [
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
  const [totalBudget, setTotalBudget] = useState(3000);
  const [googleSplit, setGoogleSplit] = useState(60);
  const [convRate, setConvRate] = useState(5);
  const [apptValue, setApptValue] = useState(95);

  const fbSplit = 100 - googleSplit;
  const googleSpend = Math.round(totalBudget * googleSplit / 100);
  const fbSpend = totalBudget - googleSpend;
  const googleClicks = Math.round(googleSpend / 5);
  const fbClicks = Math.round(fbSpend / 1.5);
  const totalClicks = googleClicks + fbClicks;
  const totalBookings = Math.round(totalClicks * convRate / 100);
  const totalRevenue = totalBookings * apptValue;
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

      {/* COMBINED BUDGET CALCULATOR */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Combined Budget Calculator</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: '#0d1f35', lineHeight: 1.2, marginBottom: '1rem' }}>
              Google + Facebook.<br /><span style={{ color: '#5bc4f5' }}>What does your combined budget return?</span>
            </h2>
            <p style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '560px', margin: '0 auto' }}>
              The most effective approach combines Google Ads (capturing patients actively searching) with Facebook & Instagram (reaching patients before they start looking). Split your budget across both and see what each platform delivers.
            </p>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '20px', padding: '3rem', boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>

            {/* Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Total monthly budget', value: totalBudget, setter: setTotalBudget, prefix: '$', suffix: '', min: 500, max: 20000, step: 250 },
                { label: 'Booking conversion rate', value: convRate, setter: setConvRate, prefix: '', suffix: '%', min: 1, max: 20, step: 0.5 },
                { label: 'Appointment value', value: apptValue, setter: setApptValue, prefix: '$', suffix: '', min: 50, max: 300, step: 5 },
              ].map(({ label, value, setter, prefix, suffix, min, max, step }) => (
                <div key={label}>
                  <label style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b849a', display: 'block', marginBottom: '0.6rem' }}>{label}</label>
                  <div style={{ position: 'relative' }}>
                    {prefix && <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#0d1f35', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '1rem', zIndex: 1 }}>{prefix}</span>}
                    <input type="number" value={value} min={min} max={max} step={step}
                      onChange={e => setter(parseFloat(e.target.value) || 0)}
                      style={{ width: '100%', padding: `0.75rem ${suffix ? '2.5rem' : '0.75rem'} 0.75rem ${prefix ? '1.75rem' : '0.75rem'}`, border: '2px solid #e2eaf4', borderRadius: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#0d1f35', background: '#f9fbff', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = '#5bc4f5'}
                      onBlur={e => e.target.style.borderColor = '#e2eaf4'}
                    />
                    {suffix && <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#6b849a', fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem' }}>{suffix}</span>}
                  </div>
                  <input type="range" min={min} max={max} step={step} value={value}
                    onChange={e => setter(parseFloat(e.target.value))}
                    style={{ width: '100%', marginTop: '0.5rem', accentColor: '#5bc4f5', cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>

            {/* Budget split slider */}
            <div style={{ background: '#f9fbff', border: '1px solid #e2eaf4', borderRadius: '12px', padding: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <label style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b849a' }}>Budget split</label>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#1656A0' }}>📡 Google {googleSplit}% — ${googleSpend.toLocaleString()}</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', fontWeight: 700, color: '#4267B2' }}>📘 Meta {fbSplit}% — ${fbSpend.toLocaleString()}</span>
                </div>
              </div>
              {/* Visual split bar */}
              <div style={{ height: '10px', borderRadius: '5px', overflow: 'hidden', display: 'flex', marginBottom: '0.75rem' }}>
                <div style={{ width: `${googleSplit}%`, background: '#5bc4f5', transition: 'width 0.2s' }} />
                <div style={{ flex: 1, background: '#4267B2' }} />
              </div>
              <input type="range" min={20} max={80} step={5} value={googleSplit}
                onChange={e => setGoogleSplit(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#5bc4f5', cursor: 'pointer' }}
              />
              <p style={{ color: '#6b849a', fontSize: '0.75rem', fontWeight: 300, margin: '0.5rem 0 0', textAlign: 'center' }}>
                Recommended: 60% Google / 40% Meta — Google captures active searchers, Meta builds awareness and retargets.
              </p>
            </div>

            {/* Results */}
            <div style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)', borderRadius: '16px', padding: '2.5rem' }}>
              {/* Per-platform breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="calc-split-grid">
                {[
                  { platform: 'Google Ads', spend: googleSpend, clicks: googleClicks, icon: '📡', note: 'Avg. $5 CPC — active search intent' },
                  { platform: 'Facebook & Instagram', spend: fbSpend, clicks: fbClicks, icon: '📘', note: 'Avg. $1.50 CPC — awareness & retargeting' },
                ].map(p => (
                  <div key={p.platform} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>{p.icon}</span>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: 'white' }}>{p.platform}</span>
                    </div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 900, color: '#5bc4f5', lineHeight: 1 }}>${p.spend.toLocaleString()}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginTop: '0.2rem', marginBottom: '0.5rem', fontWeight: 300 }}>budget</div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'white' }}>{p.clicks.toLocaleString()} clicks</div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', marginTop: '0.15rem', fontWeight: 300 }}>{p.note}</div>
                  </div>
                ))}
              </div>
              {/* Combined totals */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }} className="calc-totals-grid">
                {[
                  { label: 'Total clicks', value: totalClicks.toLocaleString() },
                  { label: 'Est. bookings / mo', value: totalBookings.toLocaleString() },
                  { label: 'Est. monthly revenue', value: `$${totalRevenue.toLocaleString()}` },
                ].map(item => (
                  <div key={item.label} style={{ textAlign: 'center', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '10px', padding: '1rem 0.5rem' }}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(91,196,245,0.7)', marginBottom: '0.4rem' }}>{item.label}</div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 900, color: '#5bc4f5', lineHeight: 1 }}>{item.value}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.73rem', fontWeight: 300, textAlign: 'center', margin: '0 0 1.5rem' }}>
                Google CPC ~$5, Meta CPC ~$1.50 (health sector averages). Estimates only — actual results vary by market and creative quality.
              </p>
              <div style={{ textAlign: 'center' }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: '0.82rem' }}>Book a Free Strategy Session →</Link>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .calc-split-grid { grid-template-columns: 1fr !important; }
            .calc-totals-grid { grid-template-columns: 1fr !important; }
          }
          input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { opacity: 1; }
        `}</style>
      </section>

      {/* CTA */}
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
