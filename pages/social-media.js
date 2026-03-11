import Head from 'next/head';
import Link from 'next/link';

const deliverables = [
  { icon: '📸', title: 'Content Creation', desc: 'Professional graphics, carousels, and reels tailored to your clinic brand — designed to educate, build trust, and drive bookings.' },
  { icon: '📅', title: 'Monthly Content Calendar', desc: 'Every post planned and scheduled in advance. No last-minute scramble — you approve, we publish.' },
  { icon: '🎯', title: 'Platform Strategy', desc: 'Instagram and Facebook managed as separate channels with platform-specific content strategies, not copy-paste.' },
  { icon: '💬', title: 'Community Management', desc: 'Comments, DMs, and enquiries responded to promptly and professionally in your clinic voice.' },
  { icon: '📊', title: 'Monthly Reporting', desc: 'Clear metrics — reach, engagement, follower growth, and how social is contributing to your booking funnel.' },
  { icon: '🏥', title: 'Health-literate Copy', desc: 'Every caption is written by people who understand allied health — accurate, AHPRA-compliant, and genuinely useful to patients.' },
];

const contentTypes = [
  { label: 'Educational posts', example: 'What to expect from your first physio session' },
  { label: 'Condition spotlights', example: 'Understanding rotator cuff injuries' },
  { label: 'Team introductions', example: 'Meet the practitioner behind the treatment' },
  { label: 'Patient tips', example: 'Three desk stretches for office workers' },
  { label: 'Practice updates', example: 'New service, new location, seasonal hours' },
  { label: 'Social proof', example: 'Review highlights and patient outcomes' },
  { label: 'Health awareness', example: 'Posture Month, Back Care Week, etc.' },
  { label: 'Behind the scenes', example: 'Clinic culture, team moments, day-in-the-life' },
];

const faqs = [
  { q: 'How many posts per month?', a: 'Typically 12–16 posts per month across Instagram and Facebook — 3–4 per week. Volume is adjusted based on your package.' },
  { q: 'Do I need to provide content or photos?', a: 'We can work with what you have, but better results come from real clinic photos. We can advise on a simple phone-based content capture process your team can do in 20 minutes a week.' },
  { q: 'Will posts go out without my approval?', a: 'You review and approve the monthly content calendar before anything is published. You have final say on every post.' },
  { q: 'Is social media management included in the ad packages?', a: 'No — organic social media management is separate from paid advertising. They can work together or be managed independently.' },
  { q: 'Which platforms do you manage?', a: 'Instagram and Facebook as standard. LinkedIn is available on request for practices targeting corporate or GP referral audiences.' },
];

export default function SocialMedia() {
  return (
    <>
      <Head>
        <title>Social Media Management for Allied Health — MoveX Media</title>
        <meta name="description" content="Strategic social media management for physiotherapy and allied health practices. AHPRA-compliant content that builds trust and fills appointment books." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/social-media" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Social Media Management for Allied Health — MoveX Media" />
        <meta property="og:description" content="Strategic social media management for physiotherapy and allied health practices. AHPRA-compliant content that builds trust and fills appointment books." />
        <meta property="og:url" content="https://movex.media/social-media" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Management for Allied Health — MoveX Media" />
        <meta name="twitter:description" content="Strategic social media management for physiotherapy and allied health practices. AHPRA-compliant content that builds trust and fills appointment books." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* HERO */}
      <section style={{ padding: '8rem 2rem 5rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1.2rem' }}>Social Media Management</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
            A consistent social presence<br />
            <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              without the time investment
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px', marginBottom: '2.5rem', fontWeight: 300 }}>
            Most allied health practitioners know they should be posting — but between patients, admin, and actually running a clinic, it never happens. We handle it: strategy, content, scheduling, and reporting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book a Free Session →</span></Link>
            <Link href="/pricing"><span style={{ display: 'inline-block', padding: '0.9rem 1.8rem', border: '1px solid rgba(91,196,245,0.3)', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', cursor: 'pointer' }}>View Packages</span></Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>What&apos;s Included</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '3rem' }}>
            Everything, done for you
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {deliverables.map(d => (
              <div key={d.title} className="card-light">
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '1rem' }}>{d.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0d1f35', marginBottom: '0.5rem' }}>{d.title}</h3>
                <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.7', fontWeight: 300 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>Content Mix</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Content that actually <span style={{ color: '#5bc4f5' }}>works</span> in allied health
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: '1.75', maxWidth: '560px', marginBottom: '3rem', fontWeight: 300 }}>
            Generic lifestyle content doesn&apos;t build patient trust. We create a mix that positions your practitioners as credible experts and gives potential patients a reason to book.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {contentTypes.map(c => (
              <div key={c.label} className="card" style={{ padding: '1.4rem 1.6rem' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#5bc4f5', marginBottom: '0.4rem' }}>{c.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontStyle: 'italic', fontWeight: 300 }}>&ldquo;{c.example}&rdquo;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AHPRA NOTE */}
      <section style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>✅</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '1rem' }}>
            AHPRA-compliant by default
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', fontWeight: 300 }}>
            Every piece of content we produce is reviewed against AHPRA advertising guidelines before it goes out. No testimonials that breach standards, no before-and-after claims, no therapeutic goods advertising violations. You get social media that builds your reputation — not one that puts your registration at risk.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '2.5rem', textAlign: 'center' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(f => (
              <div key={f.q} className="card" style={{ padding: '1.6rem 2rem' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#5bc4f5', marginBottom: '0.7rem' }}>{f.q}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: '1.75', fontWeight: 300 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '1rem' }}>
            Ready to hand it over?
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and we&apos;ll show you exactly what a social content plan looks like for your practice.
          </p>
          <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book Free Strategy Session →</span></Link>
        </div>
      </section>
    </>
  );
}
