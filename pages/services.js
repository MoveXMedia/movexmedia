import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    icon: '📡',
    title: 'Google Ads',
    tag: 'Search & Display',
    href: '/google-ads',
    desc: 'Get in front of patients the moment they search for your services. We build, manage, and optimise Google Ads campaigns that generate real bookings — not just clicks.',
    features: [
      'Search campaign setup & management',
      'Condition and service-specific ad groups',
      'Conversion tracking (calls + bookings)',
      'Monthly reporting & optimisation',
      'Negative keyword management',
      'Landing page recommendations',
    ],
    highlight: true,
  },
  {
    icon: '📘',
    title: 'Facebook & Instagram Marketing',
    tag: 'Social Ads',
    href: '/facebook-marketing',
    desc: 'Build awareness in your local community and re-engage past patients with precision-targeted social media advertising across Meta platforms.',
    features: [
      'Facebook & Instagram campaign management',
      'Audience building & lookalike targeting',
      'Ad creative design & copywriting',
      'Retargeting campaigns',
      'Lead generation forms',
      'Monthly performance reporting',
    ],
    highlight: true,
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    tag: 'Organic Social',
    href: '/social-media',
    desc: 'Consistent, professional content that builds trust, educates your community, and keeps your clinic visible between patient visits.',
    features: [
      'Content calendar planning',
      'Condition and education posts',
      'Staff spotlights & clinic culture',
      'Story and reel creation',
      'Community engagement',
      'Monthly analytics',
    ],
    highlight: true,
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    tag: 'Retention & Nurture',
    href: '/email-marketing',
    desc: 'Turn your patient database into a reliable re-booking engine. Automated campaigns that keep past patients connected and coming back.',
    features: [
      'Email platform setup (Birdeye, Mailchimp etc.)',
      'Re-engagement campaigns',
      'Monthly newsletter',
      'Automation sequences',
      'List segmentation',
      'Performance tracking',
    ],
    highlight: true,
  },
  {
    icon: '🌐',
    title: 'Website Development',
    tag: 'Web & SEO',
    href: '/website-development',
    desc: 'Fast, mobile-first websites built to convert visitors into patients and rank on Google. Every site includes on-page SEO as standard.',
    features: [
      'Custom Next.js or WordPress sites',
      'Mobile-first design',
      'On-page SEO foundation',
      'Online booking integration',
      'Page speed optimisation',
      'Google Analytics setup',
    ],
    highlight: true,
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — MoveX Media</title>
        <meta name="description" content="Digital marketing services for health and allied health practices. Google Ads, Facebook, social media, email marketing, and website development." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Services — MoveX Media" />
        <meta property="og:description" content="Digital marketing services for health and allied health practices. Google Ads, Facebook, social media, email marketing, and website development." />
        <meta property="og:url" content="https://movex.media/services" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services — MoveX Media" />
        <meta name="twitter:description" content="Digital marketing services for health and allied health practices. Google Ads, Facebook, social media, email marketing, and website development." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Offer</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Full-Stack <span style={{ color: '#5bc4f5' }}>Marketing</span><br />for Health Practices
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            maxWidth: '600px',
            margin: '0 auto',
            fontWeight: 300,
          }}>
            Every service is designed around one outcome: more booked appointments for your practice.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem 8rem', background: 'rgba(15,37,64,0.2)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {services.map((s) => (
            <div key={s.title} className="card" style={{
              padding: '2.5rem',
              borderColor: s.highlight ? 'rgba(91,196,245,0.3)' : undefined,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                    <div className="icon-wrap" style={{ marginBottom: 0, width: '50px', height: '50px', fontSize: '1.3rem' }}>
                      {s.icon}
                    </div>
                    <div>
                      <h2 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.08em',
                        marginBottom: '0.2rem',
                      }}>{s.title}</h2>
                      <span style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '0.6rem',
                        letterSpacing: '0.2em',
                        color: '#5bc4f5',
                        textTransform: 'uppercase',
                      }}>{s.tag}</span>
                    </div>
                  </div>

                  <p style={{
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    maxWidth: '600px',
                    fontWeight: 300,
                    fontSize: '0.95rem',
                  }}>{s.desc}</p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '0.5rem',
                  }}>
                    {s.features.map(f => (
                      <div key={f} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.55)',
                        fontWeight: 300,
                      }}>
                        <span style={{ color: '#5bc4f5', fontSize: '0.7rem' }}>◆</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {s.href && s.highlight && (
                  <Link href={s.href} className="btn-outline" style={{ whiteSpace: 'nowrap' }}>
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem 8rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Not sure what<br />you <span>need?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free strategy session. We&apos;ll audit your current marketing and tell you honestly what will move the needle for your practice.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Audit →
          </Link>
        </div>
      </section>
    </>
  );
}
