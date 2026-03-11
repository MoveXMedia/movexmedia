import Head from 'next/head';
import Link from 'next/link';

const sections = [
  {
    title: '1. Who We Are',
    content: `MoveX Media ("we", "us", "our") is a digital marketing agency based in Perth, Western Australia. We provide Google Ads management, Facebook and Instagram advertising, social media management, email marketing, and website development services to health and allied health businesses.

Contact: admin@movex.media`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect information you provide directly to us, including:

• Name, email address, and phone number submitted via our contact form
• Your business name and the services you are enquiring about
• Any additional information you include in your message

We also collect information automatically when you visit our website, including your IP address, browser type, pages visited, and time spent on the site (via Google Analytics).`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information we collect to:

• Respond to your enquiry or request
• Provide and manage the marketing services you engage us for
• Send you updates about your campaigns and performance reports
• Improve our website and services
• Comply with our legal obligations

We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: '4. Google Ads and Meta Advertising',
    content: `If you engage us to manage Google Ads or Meta (Facebook/Instagram) advertising on your behalf, we will access your ad accounts to build, manage, and optimise campaigns. We handle this data in accordance with Google's and Meta's respective platform policies.

We use remarketing and audience features as part of campaign management. Visitors to your website may be shown ads on Google and Meta platforms. These features use cookies and similar tracking technologies.`,
  },
  {
    title: '5. Cookies and Tracking',
    content: `Our website uses cookies and similar technologies to:

• Analyse website traffic via Google Analytics
• Remember your preferences
• Improve your browsing experience

You can control cookies through your browser settings. Disabling cookies may affect some functionality of the site.`,
  },
  {
    title: '6. Third-Party Services',
    content: `We use the following third-party services that may process your data:

• Google Analytics — website analytics
• Google Ads — advertising platform
• Meta (Facebook/Instagram) — advertising platform
• Formspree — contact form submissions
• Vercel — website hosting

Each of these services operates under their own privacy policies.`,
  },
  {
    title: '7. Data Storage and Security',
    content: `Your personal information is stored securely. We take reasonable steps to protect your information from unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure.

We retain your information for as long as necessary to provide our services and comply with legal obligations.`,
  },
  {
    title: '8. Your Rights (Australian Privacy Act)',
    content: `Under the Australian Privacy Act 1988, you have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete information
• Complain about how we handle your personal information

To exercise any of these rights, contact us at admin@movex.media. We will respond within 30 days.`,
  },
  {
    title: '9. Links to Other Websites',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:

Email: admin@movex.media
Location: Perth, Western Australia`,
  },
];

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — MoveX Media</title>
        <meta name="description" content="Privacy Policy for MoveX Media. How we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
      </Head>

      {/* Hero */}
      <section style={{ padding: '8rem 2rem 4rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1rem' }}>Legal</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 300 }}>
            Effective date: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: '1.8', marginBottom: '3rem', fontWeight: 300 }}>
            MoveX Media is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sections.map(s => (
              <div key={s.title} style={{ background: 'white', borderRadius: '10px', padding: '2rem 2.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#0d1f35', marginBottom: '1rem' }}>{s.title}</h2>
                {s.content.split('\n').map((line, i) => (
                  line.trim() === '' ? null :
                  <p key={i} style={{ color: '#6b849a', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '0.5rem', fontWeight: 300 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section style={{ padding: '3rem 2rem', background: '#f4f7fb', textAlign: 'center' }}>
        <Link href="/"><span style={{ color: '#5bc4f5', fontSize: '0.9rem', cursor: 'pointer' }}>← Back to Home</span></Link>
      </section>
    </>
  );
}
