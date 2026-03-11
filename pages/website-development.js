import Head from 'next/head';
import Link from 'next/link';

const packages = [
  {
    icon: '🌱',
    name: 'Starter',
    pages: '3–6 pages',
    price: 'From $2,500',
    desc: 'A clean, professional website for a solo practitioner or new clinic. Everything you need to establish credibility and capture bookings online.',
    includes: [
      'Up to 6 pages (Home, About, Services, Contact + 2 more)',
      'Mobile-responsive design',
      'Online booking integration (Cliniko, Nookal, HotDoc)',
      'Contact form with email notifications',
      'Google Maps integration',
      'Basic SEO setup (titles, descriptions, sitemap)',
      'Google Analytics + Search Console setup',
      '2 rounds of revisions',
      '30-day post-launch support',
    ],
    highlight: false,
  },
  {
    icon: '🚀',
    name: 'Growth',
    pages: '6–10 pages',
    price: 'From $4,500',
    desc: 'For established clinics with multiple services or practitioners. Built to rank on Google and convert visitors into booked appointments.',
    includes: [
      'Up to 10 pages including individual service pages',
      'Custom design aligned to your brand',
      'Mobile-responsive design',
      'Online booking integration',
      'Individual practitioner profiles',
      'Condition/service landing pages (great for SEO)',
      'Blog setup for content marketing',
      'Advanced SEO setup (schema markup, local SEO)',
      'Google Analytics + Search Console + conversion tracking',
      'Speed optimisation',
      '3 rounds of revisions',
      '60-day post-launch support',
    ],
    highlight: true,
  },
  {
    icon: '⚡',
    name: 'Authority',
    pages: '10+ pages',
    price: 'From $7,500',
    desc: 'Multi-location clinics, group practices, or any practice that wants to be the dominant online presence in their market.',
    includes: [
      '10+ pages — full sitemap planning included',
      'Multi-location architecture',
      'Custom design system',
      'Individual location pages (for local SEO)',
      'Individual practitioner profiles',
      'Service and condition landing pages',
      'Patient resources / education section',
      'Blog and content hub setup',
      'Full technical SEO implementation',
      'Advanced conversion tracking',
      'Booking system integration + CRM connection',
      'Speed and Core Web Vitals optimisation',
      'Unlimited revisions during build phase',
      '90-day post-launch support',
    ],
    highlight: false,
  },
];

const features = [
  { icon: '📱', title: 'Mobile-first', desc: 'Over 70% of health searches happen on mobile. Every site we build is designed for mobile first, desktop second.' },
  { icon: '⚡', title: 'Fast loading', desc: 'Slow sites lose patients. We build on modern frameworks with image optimisation and CDN delivery as standard.' },
  { icon: '🔍', title: 'Built to rank', desc: 'SEO isn\'t an afterthought — it\'s built into the structure, copy, and technical setup from day one.' },
  { icon: '📅', title: 'Booking-focused', desc: 'Every page is designed with a single goal: convert visitors into booked appointments.' },
  { icon: '🏥', title: 'Health sector copy', desc: 'We write the copy. No lorem ipsum placeholders — your site launches with real, AHPRA-compliant content.' },
  { icon: '🔗', title: 'Integrations', desc: 'Cliniko, Nookal, HotDoc, PowerDiary — we integrate with the booking systems allied health practices actually use.' },
];

const process = [
  { num: '01', title: 'Discovery', desc: 'We review your existing site, competitors, and goals. You fill in a brief. We map out the site structure.' },
  { num: '02', title: 'Design', desc: 'We produce a design concept for your approval before building anything. No surprises at the end.' },
  { num: '03', title: 'Build', desc: 'Full build including copy, images, integrations, and SEO setup. You review at key milestones.' },
  { num: '04', title: 'Review & Revise', desc: 'You give feedback, we refine. This loops until you\'re happy — within the agreed revision rounds.' },
  { num: '05', title: 'Launch', desc: 'We handle the technical side of going live — DNS, SSL, redirects from your old site, and a final QA check.' },
  { num: '06', title: 'Post-launch Support', desc: 'Questions, tweaks, and minor updates are covered in your support window. We don\'t disappear after launch.' },
];

const faqs = [
  { q: 'How long does a build take?', a: 'Starter sites typically take 3–4 weeks. Growth sites 5–7 weeks. Authority sites 8–12 weeks. Timelines depend heavily on how quickly you provide content and feedback.' },
  { q: 'Do you write the copy for us?', a: 'Yes. Copywriting is included in all packages. We research your services, practitioners, and market, and write content that converts — saving you the most time-consuming part of a website project.' },
  { q: 'What platform do you build on?', a: 'We build on Next.js (React) as standard — it\'s fast, flexible, and great for SEO. For clients who want to manage content themselves, we can integrate a headless CMS like Sanity or use WordPress as an alternative.' },
  { q: 'Can we update the site ourselves after launch?', a: 'Yes — we can build in a content management layer so your team can update text, photos, and blog posts without touching code. This is standard on Growth and Authority packages.' },
  { q: 'Do you offer hosting?', a: 'We can manage hosting for you on Vercel or a similar provider. Hosting costs are separate from build fees and are typically $20–80/month depending on traffic.' },
  { q: 'What if we already have a site we like?', a: 'We can redesign specific pages, add new service pages, or rebuild sections without starting from scratch. Get in touch and we\'ll assess what makes sense.' },
];

export default function WebsiteDevelopment() {
  return (
    <>
      <Head>
        <title>Website Development for Allied Health — MoveX Media</title>
        <meta name="description" content="Fast, conversion-focused websites for physiotherapy and allied health practices. Built to rank on Google and turn visitors into booked appointments." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/website-development" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Website Development for Allied Health — MoveX Media" />
        <meta property="og:description" content="Fast, conversion-focused websites for physiotherapy and allied health practices. Built to rank on Google and turn visitors into booked appointments." />
        <meta property="og:url" content="https://movex.media/website-development" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Development for Allied Health — MoveX Media" />
        <meta name="twitter:description" content="Fast, conversion-focused websites for physiotherapy and allied health practices. Built to rank on Google and turn visitors into booked appointments." />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* HERO */}
      <section style={{ padding: '8rem 2rem 5rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1.2rem' }}>Website Development</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', color: 'white' }}>
            A website that actually<br />
            <span style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              converts visitors into patients
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px', marginBottom: '2.5rem', fontWeight: 300 }}>
            Most allied health websites are digital brochures — they exist, but they don&apos;t work. We build sites that rank on Google, load fast on mobile, and make it easy for patients to book.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book a Free Session →</span></Link>
            <a href="#packages"><span style={{ display: 'inline-block', padding: '0.9rem 1.8rem', border: '1px solid rgba(91,196,245,0.3)', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', cursor: 'pointer' }}>See Packages</span></a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>How We Build</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '3rem' }}>
            Every site includes these by default
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
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

      {/* PACKAGES */}
      <section id="packages" style={{ padding: '6rem 2rem', background: 'rgba(15,37,64,0.15)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>Packages</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: 'white', marginBottom: '3rem' }}>
            Choose your <span style={{ color: '#5bc4f5' }}>build size</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {packages.map(p => (
              <div key={p.name} className="card" style={{ border: p.highlight ? '1px solid rgba(91,196,245,0.4)' : '1px solid rgba(26,58,92,0.6)', position: 'relative' }}>
                {p.highlight && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', borderRadius: '20px', padding: '0.2rem 1rem', fontSize: '0.7rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'white', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>MOST POPULAR</div>
                )}
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#5bc4f5', marginBottom: '0.4rem', textTransform: 'uppercase' }}>{p.pages}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'white', marginBottom: '0.3rem' }}>{p.name}</h3>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#5bc4f5', marginBottom: '1rem' }}>{p.price}</div>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: '1.65', marginBottom: '1.5rem', fontWeight: 300 }}>{p.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {p.includes.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>
                      <span style={{ color: '#5bc4f5', flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"><span className={p.highlight ? 'btn-primary' : ''} style={p.highlight ? { cursor: 'pointer', display: 'block', textAlign: 'center', fontSize: '0.82rem' } : { display: 'block', textAlign: 'center', padding: '0.85rem 1.5rem', border: '1px solid rgba(91,196,245,0.3)', borderRadius: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', cursor: 'pointer' }}>Get a Quote →</span></Link>
              </div>
            ))}
          </div>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', textAlign: 'center', marginTop: '2rem', fontWeight: 300 }}>All prices are AUD + GST. Final quote based on your specific requirements.</p>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '6rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '0.8rem' }}>Our Process</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#0d1f35', marginBottom: '3rem' }}>
            From brief to live in 6 steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {process.map(p => (
              <div key={p.num} className="card-light">
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'rgba(91,196,245,0.25)', marginBottom: '0.6rem', lineHeight: 1 }}>{p.num}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#0d1f35', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: '1.7', fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
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
            Ready for a site that works?
          </h2>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem', fontWeight: 300 }}>
            Book a free session and we&apos;ll review your current site, identify what&apos;s costing you patients, and quote you on the right package.
          </p>
          <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book Free Strategy Session →</span></Link>
        </div>
      </section>
    </>
  );
}
