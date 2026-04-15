import Head from 'next/head';
import Link from 'next/link';

const problems = [
  {
    icon: '💸',
    title: 'Unbilled insurance appointments',
    desc: 'MVA and WorkCover clients with appointments that haven\'t been billed leave money sitting on the table. One missed invoice at $200+ per session adds up fast.',
  },
  {
    icon: '📋',
    title: 'Unbilled EPC appointments',
    desc: 'Medicare EPC patients require careful tracking of allocated sessions, correspondence, and billing. Without a single view, sessions can be missed or underbilled.',
  },
  {
    icon: '📬',
    title: 'Unanswered EPC letters',
    desc: 'GP referral letters and discharge summaries that don\'t receive timely responses damage referral relationships and can jeopardise future EPC business.',
  },
  {
    icon: '📉',
    title: 'Invisible clinician performance',
    desc: 'Without data, you can\'t tell which clinicians are retaining patients, which are over-referring, or who\'s cancellation rate is quietly draining revenue.',
  },
  {
    icon: '🔁',
    title: 'Low client visit average',
    desc: 'Industry average CVA is around 5. The best-performing clinicians run 10–15. Tracking this number — and understanding what drives it — changes behaviour.',
  },
  {
    icon: '🆕',
    title: 'New patient blind spots',
    desc: 'Where are your new patients coming from? Which clinicians are generating their own referrals? Without data, these questions go unanswered.',
  },
];

const kpiCards = [
  { label: 'New Patients', desc: 'First-ever appointments this period vs clinic average', icon: '👤' },
  { label: 'Reactivated Clients', desc: 'Existing patients returning after 90+ day gap', icon: '🔄' },
  { label: 'New vs Returning %', desc: 'Balance between new intake and retention', icon: '📊' },
  { label: 'Client Visit Average', desc: 'Rolling 12-month average visits per patient', icon: '📈' },
  { label: 'Cancellation & DNA Rate', desc: 'Cancellations + did-not-arrive as % of scheduled', icon: '❌' },
  { label: 'Insurance Clients', desc: 'Active MVA / WorkCover clients with billing status', icon: '🏥' },
  { label: 'EPC Clients', desc: 'Active Medicare EPC clients with session tracking', icon: '📋' },
  { label: 'No Upcoming Appointments', desc: 'Patients with no future bookings for timely follow-up', icon: '⚠️' },
];

export default function ClinicianPortal() {
  return (
    <>
      <Head>
        <title>MoveX Clinician Portal — Performance & KPI Tracking for Physio Clinics</title>
        <meta name="description" content="Track clinician performance, catch unbilled insurance and EPC appointments, and manage patient follow-ups — all in one portal. $20/practitioner/month." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/clinician-portal" />
        <meta property="og:title" content="MoveX Clinician Portal — Performance & KPI Tracking for Physio Clinics" />
        <meta property="og:description" content="Stop losing money through unbilled insurance and EPC appointments. Track clinician performance across your whole team. $20/practitioner/month." />
        <meta property="og:url" content="https://movex.media/clinician-portal" />
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }} className="portal-hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.25)', borderRadius: '20px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5bc4f5', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5bc4f5' }}>MoveX Product</span>
              </div>
              <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem', fontWeight: 900 }}>
                Are you losing money because of<br />
                <span style={{ color: '#5bc4f5', textShadow: '0 0 40px rgba(91,196,245,0.3)' }}>untracked clinician performance?</span>
              </h1>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: '1.85', marginBottom: '2.5rem', maxWidth: '480px', fontWeight: 300 }}>
                <p style={{ margin: '0 0 0.5rem' }}>Insurance report monitoring &nbsp;·&nbsp; EPC claim monitoring</p>
                <p style={{ margin: '0 0 0.5rem' }}>Clients without upcoming appointments &nbsp;·&nbsp; Client visit average</p>
                <p style={{ margin: 0 }}>Clinic intranet &nbsp;·&nbsp; All your information in one place.</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Demo →</Link>
                <Link href="#pricing" className="btn-outline">See Pricing</Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(26,58,92,0.5)', flexWrap: 'wrap' }}>
                {[['$20', '/practitioner/mo'], ['8', 'KPI modules'], ['Daily', 'Cliniko sync']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#5bc4f5' }}>{val}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.2rem', fontWeight: 300 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.5)', border: '1px solid rgba(91,196,245,0.15)' }}>
                <img src="/portal-screenshot-1.png" alt="MoveX Clinician Portal — Performance Statistics" style={{ width: '100%', display: 'block' }} />
              </div>
              <div className="portal-hero-overlay" style={{
                position: 'absolute', bottom: '-30px', right: '-15px',
                borderRadius: '10px', overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                border: '1px solid rgba(91,196,245,0.2)',
                width: '60%',
              }}>
                <img src="/portal-screenshot-2.png" alt="MoveX Clinician Portal — Clinic KPIs" style={{ width: '100%', display: 'block' }} />
              </div>
              <div className="portal-hero-spacer" style={{ height: '70px' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .portal-hero-grid { grid-template-columns: 1fr !important; }
            .portal-hero-overlay { display: none !important; }
            .portal-hero-spacer { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section style={{ padding: '6rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>The problem</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#0d1f35', lineHeight: 1.2 }}>
              What you can't see<br /><span style={{ color: '#5bc4f5' }}>is costing you</span>
            </h2>
            <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300, maxWidth: '600px', margin: '1.5rem auto 0' }}>
              Most practice management software gives you data — but not insight. These are the common revenue leaks in physiotherapy practices that the portal helps you find and fix.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {problems.map(p => (
              <div key={p.title} className="card-light" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', borderLeft: '3px solid #5bc4f5', borderRadius: '0 12px 12px 0' }}>
                <div style={{ fontSize: '1.6rem', flexShrink: 0, lineHeight: 1 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.92rem', color: '#0d1f35', marginBottom: '0.4rem' }}>{p.title}</h3>
                  <p style={{ color: '#6b849a', fontSize: '0.87rem', lineHeight: '1.65', fontWeight: 300, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '400px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The portal</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', lineHeight: 1.2 }}>
              All your information<br /><span style={{ color: '#5bc4f5' }}>in one place</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }} className="portal-screenshot-grid">
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(91,196,245,0.15)', marginBottom: '1rem' }}>
                <img src="/portal-screenshot-1.png" alt="Performance Statistics — KPIs vs clinic average" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.65', textAlign: 'center', fontWeight: 300 }}>Individual performance stats benchmarked against the clinic average — new patients, reactivations, CVA, and cancellation rates</p>
            </div>
            <div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', border: '1px solid rgba(91,196,245,0.15)', marginBottom: '1rem' }}>
                <img src="/portal-screenshot-2.png" alt="Clinic KPIs — Insurance and EPC tracking" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.65', textAlign: 'center', fontWeight: 300 }}>Clinic KPIs panel with active Insurance Client and EPC Client tracking, new patient lists, and automated billing prompts</p>
            </div>
          </div>

          {/* KPI module grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {kpiCards.map(k => (
              <div key={k.label} className="card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{k.icon}</div>
                <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'white', marginBottom: '0.4rem' }}>{k.label}</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', lineHeight: '1.65', fontWeight: 300, margin: 0 }}>{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .portal-screenshot-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── TWO AUDIENCES ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Who it's for</div>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0d1f35', lineHeight: 1.2 }}>
              Built for the whole clinic
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="audience-grid">
            <div style={{ background: '#ffffff', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '2.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>👤</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#0d1f35', marginBottom: '0.75rem' }}>Individual Practitioners</h3>
              <p style={{ color: '#6b849a', fontSize: '0.92rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                See your own KPIs in real time. Track your new patient numbers, CVA, cancellation rate, and patients due for follow-up — without asking the front desk to pull a report.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['My performance vs clinic average', 'My insurance & EPC clients', 'Patients with no upcoming appt', 'Onboarding checklist'].map(item => (
                  <li key={item} style={{ color: '#6b849a', fontSize: '0.85rem', lineHeight: '1.65', padding: '0.3rem 0', display: 'flex', gap: '0.6rem', fontWeight: 300 }}>
                    <span style={{ color: '#5bc4f5', flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#0d1f35', border: '2px solid #5bc4f5', borderRadius: '14px', padding: '2.5rem', boxShadow: '0 20px 60px rgba(91,196,245,0.1)' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.25rem' }}>🏢</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'white', marginBottom: '0.75rem' }}>Clinic Owners</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.5rem' }}>
                Get a bird's-eye view across your whole team. Compare clinician performance, identify who needs support, and ensure billing compliance across every insurance and EPC case.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['All clinician KPIs in one view', 'Team CVA benchmarking', 'Clinic-wide insurance & EPC pipeline', 'Identify billing gaps before month end', 'Track new patient intake trends'].map(item => (
                  <li key={item} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.65', padding: '0.3rem 0', display: 'flex', gap: '0.6rem', fontWeight: 300 }}>
                    <span style={{ color: '#5bc4f5', flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .audience-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── CUSTOM KPIS ── */}
      <section style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="kpi-custom-grid">
            <div>
              <div className="section-label">Track Your Clinic Custom KPIs</div>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'white', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                Your metrics.<br /><span style={{ color: '#5bc4f5' }}>Your dashboard.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.98rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1.25rem' }}>
                Every clinic is different. The MoveX Portal isn't locked to a fixed set of KPIs — it's built to track the metrics that matter to <em>your</em> practice model. Whether you're a high-volume clinic optimising throughput, or a boutique practice focused on long-term outcomes, your dashboard reflects your priorities.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.98rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '2rem' }}>
                Work with us to define what you want to measure — we configure the portal to surface it automatically.
              </p>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '0.82rem' }}>Discuss Your KPIs →</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '🔁', label: 'Rebooks per initial appointment', desc: 'What percentage of new patients book a follow-up? Track this by clinician and identify who\'s converting intake into ongoing care.' },
                { icon: '📦', label: 'Block booking percentage', desc: 'How many patients are being set up on a treatment block vs. single bookings? A key driver of forward diary revenue.' },
                { icon: '🏋️', label: 'VALD / AxIT booking rate', desc: 'What percentage of relevant patients are being assessed with your in-clinic technology? Track uptake by clinician.' },
                { icon: '📊', label: 'Any metric from Cliniko', desc: 'If it\'s in your Cliniko data, we can surface it. Custom KPIs are configured to your exact practice model during onboarding.' },
              ].map(item => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(91,196,245,0.12)', borderLeft: '3px solid rgba(91,196,245,0.4)', borderRadius: '0 10px 10px 0', padding: '1.1rem 1.4rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.3rem', flexShrink: 0, lineHeight: 1.2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: 'white', marginBottom: '0.3rem' }}>{item.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: '1.6', fontWeight: 300 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .kpi-custom-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: '6rem 2rem', background: '#080f1a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(74,158,218,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
            Simple per-practitioner pricing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300, marginBottom: '3.5rem' }}>
            Pay only for active practitioners. No setup fees, no lock-in contracts. Add or remove seats any time.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '2px solid rgba(91,196,245,0.25)', borderRadius: '20px', padding: '3.5rem 3rem', marginBottom: '2.5rem' }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '5rem', fontWeight: 900, color: '#5bc4f5', lineHeight: 1 }}>$20</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', marginTop: '0.5rem', marginBottom: '2.5rem', fontWeight: 300 }}>AUD per practitioner / month</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 2rem', maxWidth: '520px', margin: '0 auto 2.5rem', textAlign: 'left' }}>
              {[
                'Individual performance dashboard',
                'KPI benchmarking vs clinic avg',
                'Insurance client tracking (MVA/WorkCover)',
                'EPC client & session tracking',
                'No upcoming appointment alerts',
                'Onboarding checklist',
                'Clinic owner admin view',
                'Daily Cliniko sync',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#5bc4f5', flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 300, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Example pricing */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {[['3 practitioners', '$60/mo'], ['6 practitioners', '$120/mo'], ['10 practitioners', '$200/mo']].map(([size, price]) => (
                <div key={size} style={{ background: 'rgba(91,196,245,0.07)', border: '1px solid rgba(91,196,245,0.15)', borderRadius: '8px', padding: '0.75rem 1.25rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#5bc4f5' }}>{price}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.2rem', fontWeight: 300 }}>{size}</div>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '1rem 2.5rem' }}>
              Book a Demo →
            </Link>
          </div>

          <div style={{ background: 'rgba(91,196,245,0.06)', border: '1px solid rgba(91,196,245,0.15)', borderRadius: '12px', padding: '1.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: '1.7', fontWeight: 300, margin: 0 }}>
              💡 <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Bundle with the Marketing Hub</strong> — add the MoveX Marketing Hub for just $99/month and get email automation, subscriber management, and campaign broadcasts alongside your performance portal. Two tools built to work together.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', color: '#5bc4f5' }}>Ready to get visibility?</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0d1f35', marginBottom: '1rem', lineHeight: 1.2 }}>
            Stop guessing.<br /><span style={{ color: '#5bc4f5' }}>Start knowing.</span>
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: 300 }}>
            Book a 20-minute demo and we'll show you the portal running on a live Cliniko database. You'll see exactly what your KPIs look like today.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.85rem', padding: '1.1rem 2.5rem' }}>
            Book a Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
