import Head from 'next/head';
import Link from 'next/link';

const automations = [
  {
    icon: '👋',
    title: 'Welcome Email',
    trigger: 'On new patient',
    desc: 'Sent automatically when a new patient first appears in Cliniko. Sets expectations, introduces your team, and builds confidence before their first appointment.',
  },
  {
    icon: '✅',
    title: 'Marketing Opt-In',
    trigger: 'After first appointment',
    desc: 'Invites new patients to join your mailing list with a referral offer. Grows your subscriber base without any manual effort.',
  },
  {
    icon: '🎂',
    title: 'Birthday Voucher',
    trigger: 'On patient birthday',
    desc: 'Automatically sends a personalised birthday message with an offer. One of the highest open-rate emails in the health sector.',
  },
  {
    icon: '⭐',
    title: 'Review Request',
    trigger: 'After appointment milestone',
    desc: 'Requests a Google review from patients who have completed a set number of appointments — targeting your most satisfied patients for the best results.',
  },
  {
    icon: '🔁',
    title: 'Reactivation',
    trigger: 'After 90 days inactive',
    desc: 'Automatically follows up with patients who haven\'t booked in 90 days. Re-engages lapsed patients and brings them back to the books.',
  },
  {
    icon: '📢',
    title: 'Campaign Broadcasts',
    trigger: 'Manual or scheduled',
    desc: 'Send targeted campaigns to all subscribers, specific locations, or filtered segments. Full send history and open/click tracking included.',
  },
];

const features = [
  { label: 'Cliniko integration', desc: 'Pulls patient data, appointment history, and DOB directly from Cliniko — no manual imports.' },
  { label: 'Subscriber management', desc: 'Full database with location filters, preference categories, opt-in/out tracking, and SPAM Act compliance built in.' },
  { label: 'Email activity dashboard', desc: 'See requests, delivery rates, open rates, clicks, bounces, and spam reports across all sends in real time.' },
  { label: 'Subscriber growth chart', desc: 'Track new subscribers vs unsubscribes over time. Understand what\'s driving list growth.' },
  { label: 'New patient tracking', desc: 'Monitor new patients week by week alongside your subscriber numbers.' },
];

const comparisonRows = [
  { feature: 'Email automation', movex: true, mailchimp: true, cliniqapps: true },
  { feature: 'Cliniko integration', movex: true, mailchimp: false, cliniqapps: true },
  { feature: 'Built for physiotherapy', movex: true, mailchimp: false, cliniqapps: true },
  { feature: 'Subscriber growth analytics', movex: true, mailchimp: true, cliniqapps: false },
  { feature: 'Google Ads dashboard', movex: true, mailchimp: false, cliniqapps: false },
  { feature: 'Clinician portal add-on', movex: true, mailchimp: false, cliniqapps: false },
  { feature: 'Flat monthly fee', movex: true, mailchimp: false, cliniqapps: false },
  { feature: 'Per-clinician pricing', movex: false, mailchimp: false, cliniqapps: true },
  { feature: 'Per-contact pricing', movex: false, mailchimp: true, cliniqapps: false },
];

export default function MarketingHub() {
  return (
    <>
      <Head>
        <title>MoveX Marketing Hub — Email Automation for Physiotherapy Clinics</title>
        <meta name="description" content="Purpose-built email automation for physiotherapy clinics. Integrates with Cliniko. Welcome emails, reactivation, birthday vouchers, review requests — all automated. $199/month flat." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/marketing-hub" />
        <meta property="og:title" content="MoveX Marketing Hub — Email Automation for Physiotherapy Clinics" />
        <meta property="og:description" content="Purpose-built email automation for physiotherapy clinics. Integrates with Cliniko. $199/month flat fee." />
        <meta property="og:url" content="https://movex.media/marketing-hub" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '9rem 2rem 5rem',
        background: 'var(--navy-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', height: '350px',
          background: 'radial-gradient(ellipse at bottom, rgba(74,158,218,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} className="hub-hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.25)', borderRadius: '20px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5bc4f5', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5bc4f5' }}>MoveX Product</span>
              </div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 900 }}>
                Email automation<br />that actually<br />
                <span style={{ color: '#5bc4f5', textShadow: '0 0 40px rgba(91,196,245,0.3)' }}>fills your books</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: '1.85', marginBottom: '2.5rem', maxWidth: '480px', fontWeight: 300 }}>
                The MoveX Marketing Hub is purpose-built for physiotherapy clinics. It connects directly to Cliniko, runs automated email sequences in the background, and gives you a live view of your subscriber base and campaign performance — all for a single flat monthly fee.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Demo →</Link>
                <Link href="#pricing" className="btn-outline">See Pricing</Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,58,92,0.5)', flexWrap: 'wrap' }}>
                {[['$199', '/month flat'], ['6,400+', 'Subscribers managed'], ['6', 'Automation flows']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#5bc4f5' }}>{val}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem', fontWeight: 300 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5)', border: '1px solid rgba(91,196,245,0.15)' }}>
                <img src="/hub-screenshot-1.png" alt="MoveX Marketing Hub — Dashboard" style={{ width: '100%', display: 'block' }} />
              </div>
              <div className="hub-hero-overlay" style={{
                position: 'absolute', bottom: '-30px', right: '-15px',
                borderRadius: '10px', overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(91,196,245,0.2)',
                width: '60%',
              }}>
                <img src="/hub-screenshot-2.png" alt="MoveX Marketing Hub — Automations" style={{ width: '100%', display: 'block' }} />
              </div>
              <div className="hub-hero-spacer" style={{ height: '70px' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .hub-hero-grid { grid-template-columns: 1fr !important; }
            .hub-hero-overlay { display: none !important; }
            .hub-hero-spacer { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── WHY AUTOMATE ── */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>The opportunity</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0d1f35', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Your patient database is<br />a <span style={{ color: '#5bc4f5' }}>revenue engine you're not using</span>
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
            The average physiotherapy practice has thousands of patients in their database who have been seen at least once but haven't returned. Each one represents unbooked revenue. A well-timed, automated email — triggered by inactivity, a birthday, or a discharge — can bring a significant percentage of those patients back.
          </p>
          <p style={{ color: '#6b849a', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
            Email remains the highest-ROI digital marketing channel in healthcare. Open rates of 30–45% are typical in allied health — compared to 1–3% organic reach on social media. The problem is that most generic email platforms aren't built for physiotherapy workflows, require manual setup, and charge you more as your list grows.
          </p>
          <p style={{ color: '#6b849a', fontSize: '1.05rem', lineHeight: '1.85', fontWeight: 300 }}>
            The MoveX Marketing Hub solves that. Set it up once. Let it run. Every new patient gets a welcome. Every birthday gets a voucher. Every lapsed patient gets a nudge. Every satisfied patient gets asked for a review. All automatically.
          </p>
        </div>
      </section>

      {/* ── AUTOMATIONS ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>What runs automatically</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0d1f35', lineHeight: 1.2 }}>
              Six automations, zero ongoing work
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {automations.map(a => (
              <div key={a.title} className="card-light" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{a.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#0d1f35', margin: 0 }}>{a.title}</h3>
                    <span style={{ background: 'rgba(91,196,245,0.12)', color: '#1a6496', border: '1px solid rgba(91,196,245,0.25)', borderRadius: '12px', padding: '0.15rem 0.6rem', fontSize: '0.7rem', fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>{a.trigger}</span>
                  </div>
                  <p style={{ color: '#6b849a', fontSize: '0.87rem', lineHeight: '1.65', fontWeight: 300, margin: 0 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD SCREENSHOT ── */}
      <section style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The dashboard</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', lineHeight: 1.2 }}>
              Everything you need to see,<br /><span style={{ color: '#5bc4f5' }}>in one place</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="screenshot-grid">
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(91,196,245,0.15)', marginBottom: '1rem' }}>
                <img src="/hub-screenshot-1.png" alt="Subscriber dashboard" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.65', textAlign: 'center', fontWeight: 300 }}>Live subscriber counts, email activity, and delivery stats across all your sends</p>
            </div>
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(91,196,245,0.15)', marginBottom: '1rem' }}>
                <img src="/hub-screenshot-2.png" alt="Automations panel" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.65', textAlign: 'center', fontWeight: 300 }}>Automation controls, subscriber growth tracking, and opt-in conversion rate</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
            {features.map(f => (
              <div key={f.label} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ color: '#5bc4f5', fontSize: '1rem', marginBottom: '0.5rem' }}>✓</div>
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'white', marginBottom: '0.4rem' }}>{f.label}</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: '1.65', fontWeight: 300, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .screenshot-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── PRICING COMPARISON ── */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Pricing</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0d1f35', lineHeight: 1.2, marginBottom: '1rem' }}>
              Stop paying for tools<br />that weren't built for you
            </h2>
            <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
              A typical multi-clinician practice using separate tools is paying over $300/month for functionality that's split across platforms. The MoveX Marketing Hub replaces it all at a fraction of the cost.
            </p>
          </div>

          {/* Cost comparison cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }} className="pricing-grid">
            {/* Mailchimp */}
            <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✉️</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0d1f35', marginBottom: '0.5rem' }}>Mailchimp</h3>
              <p style={{ color: '#6b849a', fontSize: '0.82rem', marginBottom: '0.5rem', lineHeight: 1.5, fontWeight: 300 }}>Standard plan, 10,000 contacts</p>
              <div style={{ background: '#fff8f0', border: '1px solid #f5c066', borderRadius: '8px', padding: '0.5rem 0.75rem', marginBottom: '1rem' }}>
                <p style={{ color: '#a0620a', fontSize: '0.72rem', lineHeight: 1.5, fontWeight: 400, margin: 0 }}>
                  ⚠️ Mailchimp bills for <strong>all contacts</strong> — including unsubscribed. A list of 5,000 active patients can easily hit 10,000+ total contacts over time.
                </p>
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#e05555' }}>~$270</div>
              <div style={{ color: '#6b849a', fontSize: '0.78rem', marginTop: '0.25rem', marginBottom: '1.25rem' }}>AUD / month</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                {['Generic — not health-specific', 'No Cliniko integration', 'Bills unsubscribed contacts too', 'Cost grows as your list grows'].map(item => (
                  <li key={item} style={{ color: '#6b849a', fontSize: '0.8rem', lineHeight: '1.65', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', fontWeight: 300 }}>
                    <span style={{ color: '#e05555', flexShrink: 0 }}>✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CliniqApps */}
            <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏥</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0d1f35', marginBottom: '0.5rem' }}>CliniqApps</h3>
              <p style={{ color: '#6b849a', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: 1.5, fontWeight: 300 }}>Up to 12 practitioners</p>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#e05555' }}>$195</div>
              <div style={{ color: '#6b849a', fontSize: '0.78rem', marginTop: '0.25rem', marginBottom: '1.25rem' }}>AUD / month</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                {['Per-clinician pricing scales up', 'No Google Ads dashboard', 'No performance portal', 'Limited analytics'].map(item => (
                  <li key={item} style={{ color: '#6b849a', fontSize: '0.8rem', lineHeight: '1.65', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', fontWeight: 300 }}>
                    <span style={{ color: '#e05555', flexShrink: 0 }}>✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* MoveX Hub — highlighted */}
            <div style={{ background: '#0d1f35', border: '2px solid #5bc4f5', borderRadius: '14px', padding: '2rem', textAlign: 'center', position: 'relative', boxShadow: '0 20px 60px rgba(91,196,245,0.15)' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#5bc4f5', color: '#0d1f35', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: '12px', whiteSpace: 'nowrap' }}>Best Value</div>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: '0.5rem' }}>MoveX Marketing Hub</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', marginBottom: '1.25rem', lineHeight: 1.5, fontWeight: 300 }}>Unlimited clinicians, unlimited contacts</p>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.2rem', fontWeight: 900, color: '#5bc4f5' }}>$199</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', marginTop: '0.25rem', marginBottom: '1.25rem' }}>AUD / month</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                {['Built for physiotherapy', 'Native Cliniko integration', 'Flat fee — no per-seat costs', '6 automation flows included', 'Clinician performance portal included', 'Google Ads dashboard included', 'Full email analytics'].map(item => (
                  <li key={item} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', lineHeight: '1.65', padding: '0.3rem 0', display: 'flex', gap: '0.5rem', fontWeight: 300 }}>
                    <span style={{ color: '#5bc4f5', flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Savings callout */}
          <div style={{ background: 'linear-gradient(135deg, #0d1f35 0%, #1a3a5c 100%)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(91,196,245,0.6)', marginBottom: '0.75rem' }}>The numbers</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.4rem', fontWeight: 900, color: '#e05555' }}>$465</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300 }}>Mailchimp + CliniqApps / mo</div>
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', color: 'rgba(255,255,255,0.2)', fontWeight: 300 }}>vs</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.4rem', fontWeight: 900, color: '#5bc4f5' }}>$199</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300 }}>MoveX Marketing Hub / mo</div>
              </div>
              <div style={{ textAlign: 'center', background: 'rgba(91,196,245,0.08)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '10px', padding: '1rem 1.5rem' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2.4rem', fontWeight: 900, color: '#5bc4f5' }}>$3,192</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 300 }}>saved per year</div>
              </div>
            </div>
          </div>

          {/* Feature comparison table */}
          <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#0d1f35', padding: '1rem 1.5rem' }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Feature</div>
              {['MoveX Hub', 'Mailchimp', 'CliniqApps'].map(h => (
                <div key={h} style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.78rem', color: h === 'MoveX Hub' ? '#5bc4f5' : 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', textAlign: 'center' }}>{h}</div>
              ))}
            </div>
            {comparisonRows.map((row, i) => (
              <div key={row.feature} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '0.85rem 1.5rem', borderBottom: i < comparisonRows.length - 1 ? '1px solid #e2eaf4' : 'none', background: i % 2 === 0 ? '#fff' : '#f9fbff' }}>
                <div style={{ color: '#0d1f35', fontSize: '0.88rem', fontWeight: 400 }}>{row.feature}</div>
                <div style={{ textAlign: 'center', fontSize: '1rem' }}>{row.movex ? <span style={{ color: '#22c55e' }}>✓</span> : <span style={{ color: '#e05555' }}>✕</span>}</div>
                <div style={{ textAlign: 'center', fontSize: '1rem' }}>{row.mailchimp ? <span style={{ color: '#22c55e' }}>✓</span> : <span style={{ color: '#e05555' }}>✕</span>}</div>
                <div style={{ textAlign: 'center', fontSize: '1rem' }}>{row.cliniqapps ? <span style={{ color: '#22c55e' }}>✓</span> : <span style={{ color: '#e05555' }}>✕</span>}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#a0b3c6', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', fontWeight: 300 }}>
            Mailchimp Standard plan ~$270 AUD/month at 10,000 total contacts (Mailchimp bills all contacts including unsubscribed). CliniqApps $195 AUD/month for up to 12 practitioners.
          </p>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .pricing-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', background: '#080f1a', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
            Ready to automate<br /><span style={{ color: '#5bc4f5' }}>your patient emails?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
            Book a demo and we'll show you the Hub running on a live Cliniko database. Setup takes less than 24 hours.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1.1rem 2.5rem' }}>
            Book a Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
