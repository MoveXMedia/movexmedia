import Head from 'next/head';
import Link from 'next/link';

const features = [
  { icon: '🔄', title: 'Re-engagement Campaigns', desc: 'Automatically reach patients who haven\'t booked in 3, 6, or 12 months — bringing lapsed patients back without a single manual email.' },
  { icon: '📬', title: 'Referral Nurture Sequences', desc: 'Structured email journeys for GP and specialist referrals — keeping your practice top of mind with the people who send you patients.' },
  { icon: '🗓️', title: 'Appointment Reminders', desc: 'Automated pre-appointment emails that reduce no-shows and prepare patients for their visit.' },
  { icon: '📰', title: 'Monthly Newsletter', desc: 'A health-focused newsletter that educates your patient base, highlights services, and keeps your clinic in their inbox.' },
  { icon: '⭐', title: 'Review Generation', desc: 'Post-appointment sequences that prompt satisfied patients to leave Google reviews — compliantly and without pressure.' },
  { icon: '📈', title: 'List Growth Strategy', desc: 'Tactics to grow your email list through your website, front desk, and social channels — building an asset you own permanently.' },
];

const campaignExamples = [
  {
    type: 'Re-engagement',
    subject: 'It\'s been a while — is your [condition] still under control?',
    preview: 'We noticed you haven\'t been in for a while. If you\'ve been managing on your own, that\'s great. But if things have flared up...',
    tags: ['Automated', 'Triggered at 90 days'],
  },
  {
    type: 'Post-appointment',
    subject: 'How did your appointment go, [First Name]?',
    preview: 'Thanks for coming in this week. We hope [Practitioner] was able to help with your [condition]. Here\'s what to keep in mind over the next few days...',
    tags: ['Automated', 'Sent 24hrs post-visit'],
  },
  {
    type: 'Monthly Newsletter',
    subject: 'March: Shoulder injuries, new appointment slots + a tip for desk workers',
    preview: 'This month we\'re covering why shoulder injuries are so commonly mismanaged, what\'s new at the clinic, and one stretch that takes 90 seconds...',
    tags: ['Manual', 'Monthly send'],
  },
  {
    type: 'Review Request',
    subject: 'Would you mind leaving us a quick review?',
    preview: 'We really value your feedback. If you\'ve had a good experience with us, it would mean a lot if you could share it...',
    tags: ['Automated', 'Triggered post-visit'],
  },
];

const faqs = [
  { q: 'What platform do you use?', a: 'We work with Mailchimp, Klaviyo, or integrate with your existing booking system (Cliniko, Nookal, etc.) depending on your setup and patient list size.' },
  { q: 'Do we need a big email list to start?', a: 'No. Even 200 patients in your list is enough to generate meaningful re-bookings. List building is part of the service.' },
  { q: 'Is email marketing AHPRA compliant?', a: 'Yes, when done correctly. We don\'t use testimonials or outcome claims that breach standards. Every campaign is reviewed before sending.' },
  { q: 'How often will we email patients?', a: 'Automated sequences fire based on patient behaviour (lapsed, post-appointment, etc.). Newsletters are monthly. We never spam — frequency is always considered against patient experience.' },
];

export default function EmailMarketing() {
  return (
    <>
      <Head>
        <title>Email Marketing for Allied Health — MoveX Media</title>
        <meta name="description" content="Email marketing automation for physiotherapy and allied health practices. Re-engage lapsed patients, reduce no-shows, and grow your review count — all on autopilot." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/email-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Email Marketing for Allied Health — MoveX Media" />
        <meta property="og:description" content="Email marketing automation for physiotherapy and allied health practices. Re-engage lapsed patients, reduce no-shows, and grow your review count." />
        <meta property="og:url" content="https://movex.media/email-marketing" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Email Marketing for Allied Health — MoveX Media" />
        <meta name="twitter:description" content="Email marketing automation for physiotherapy and allied health practices. Re-engage lapsed patients, reduce no-shows, and grow your review count." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* HERO */}
      <section style={{ padding: '8rem 2rem 5rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1.2rem' }}>Email Marketing</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
            Your patient list is<br />
            <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              your most underused asset
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px', marginBottom: '2.5rem', fontWeight: 300 }}>
            Most clinics have hundreds of past patients sitting in their booking system who haven&apos;t been contacted since their last visit. Email marketing turns that dormant list into a consistent source of re-bookings — automatically.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book a Free Session →</span></Link>
            <Link href="/pricing"><span style={{ display: 'inline-block', padding: '0.9rem 1.8rem', border: '1px solid rgba(91,196,245,0.3)', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', cursor: 'pointer' }}>View Packages</span></Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>What We Do</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '3rem' }}>
            Automation that works while you treat patients
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {features.map(f => (
              <div key={f.title} className="card-light">
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(91,196,245,0.1)', border: '1px solid rgba(91,196,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0d1f35', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.7', fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN EXAMPLES */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>Campaign Examples</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            What your patients actually <span style={{ color: '#5bc4f5' }}>receive</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: '1.75', maxWidth: '560px', marginBottom: '3rem', fontWeight: 300 }}>
            Every campaign is written in plain language, personalised where possible, and designed to feel like it came from your clinic — not a marketing agency.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {campaignExamples.map(c => (
              <div key={c.type} className="card" style={{ padding: '0' }}>
                {/* Email chrome */}
                <div style={{ background: 'rgba(15,37,64,0.6)', padding: '1rem 1.6rem', borderBottom: '1px solid rgba(91,196,245,0.1)', display: 'flex', alignItems: 'center', gap: '0.8rem', borderRadius: '8px 8px 0 0' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', opacity: 0.7 }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', opacity: 0.7 }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', opacity: 0.7 }} />
                  <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{c.type}</span>
                </div>
                <div style={{ padding: '1.6rem 2rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {c.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', padding: '0.25rem 0.65rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '20px', color: '#60a5fa', fontFamily: 'Poppins, sans-serif' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.1em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Subject line</div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: 'white', marginBottom: '0.8rem' }}>{c.subject}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.1em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>Preview text</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: '1.65', fontWeight: 300 }}>{c.preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '2.5rem', textAlign: 'center' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map(f => (
              <div key={f.q} className="card-light" style={{ padding: '1.6rem 2rem' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0d1f35', marginBottom: '0.7rem' }}>{f.q}</h3>
                <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.75', fontWeight: 300 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Start recovering lost patients
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session and we&apos;ll audit your current patient list and show you the re-booking opportunity you&apos;re sitting on.
          </p>
          <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book Free Strategy Session →</span></Link>
        </div>
      </section>
    </>
  );
}
