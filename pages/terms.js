import Head from 'next/head';
import Link from 'next/link';

const sections = [
  {
    title: '1. Services',
    content: `MoveX Media ("we", "us", "our") provides digital marketing services including Google Ads management, Facebook and Instagram advertising, social media management, email marketing, and website development to health and allied health businesses.

Specific services, deliverables, fees, and timelines are outlined in the individual service agreement or proposal agreed between MoveX Media and the client prior to commencement.`,
  },
  {
    title: '2. Payment Terms',
    content: `Management fees are billed monthly in advance. Setup fees are due prior to campaign launch. Invoices are payable within 7 days of issue unless otherwise agreed in writing.

Late payments may result in suspension of services. MoveX Media reserves the right to charge interest on overdue amounts at 2% per month.`,
  },
  {
    title: '3. Minimum Term',
    content: `Service agreements have a minimum term as specified in your package (typically 6 months). After the minimum term, agreements continue on a month-to-month basis and may be cancelled with 30 days written notice.

Early termination within the minimum term does not entitle the client to a refund of fees paid.`,
  },
  {
    title: '4. Ad Spend',
    content: `Ad spend (budget paid directly to Google, Meta, or other advertising platforms) is separate from management fees. Clients are responsible for funding their own ad accounts directly with the relevant platform.

MoveX Media is not responsible for platform billing errors, account suspensions imposed by advertising platforms, or changes to platform policies that affect campaign performance.`,
  },
  {
    title: '5. Client Responsibilities',
    content: `Clients are responsible for:

• Providing accurate information about their business, services, and target audience
• Ensuring all content and claims comply with applicable laws and regulations, including AHPRA advertising guidelines
• Promptly reviewing and approving materials submitted for sign-off
• Maintaining sufficient ad spend budget to fund active campaigns
• Notifying MoveX Media of any changes to their business that may affect campaigns`,
  },
  {
    title: '6. Intellectual Property',
    content: `Content, ad creative, and campaign assets created by MoveX Media remain the property of MoveX Media until all outstanding invoices are paid in full. Upon full payment, ownership of bespoke creative assets transfers to the client.

MoveX Media retains the right to use campaign results and anonymised performance data for portfolio and marketing purposes, unless the client requests otherwise in writing.`,
  },
  {
    title: '7. Confidentiality',
    content: `Both parties agree to keep confidential any proprietary or sensitive business information shared during the engagement. This obligation survives termination of the agreement.`,
  },
  {
    title: '8. Results and Performance',
    content: `Digital marketing performance is subject to many variables outside MoveX Media's control, including market conditions, competition, platform algorithm changes, and client-side factors such as website quality and pricing.

MoveX Media does not guarantee specific results, revenue outcomes, or return on ad spend. We commit to applying best practices, industry expertise, and diligent campaign management to maximise performance.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by law, MoveX Media's total liability for any claim arising from our services is limited to the fees paid by the client in the 3 months preceding the claim.

MoveX Media is not liable for any indirect, consequential, or incidental loss including lost revenue or lost profits.`,
  },
  {
    title: '10. Termination',
    content: `Either party may terminate the agreement with 30 days written notice after the minimum term has been served. MoveX Media may terminate immediately if a client breaches these terms, fails to pay outstanding invoices, or engages in conduct that is unlawful or harmful.

Upon termination, MoveX Media will provide reasonable assistance to transition campaign access back to the client.`,
  },
  {
    title: '11. Governing Law',
    content: `These terms are governed by the laws of Western Australia, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Western Australia.`,
  },
  {
    title: '12. Changes to These Terms',
    content: `MoveX Media may update these terms from time to time. Clients will be notified of material changes. Continued use of our services after notification constitutes acceptance of the updated terms.`,
  },
  {
    title: '13. Contact',
    content: `For questions about these terms, contact us at admin@movex.media.`,
  },
];

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service — MoveX Media</title>
        <meta name="description" content="Terms of Service for MoveX Media digital marketing services." />
        <meta name="robots" content="noindex" />
      </Head>

      {/* Hero */}
      <section style={{ padding: '8rem 2rem 4rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1rem' }}>Legal</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>
            Terms of Service
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
            These Terms of Service govern the relationship between MoveX Media and clients who engage our digital marketing services. By engaging our services, you agree to these terms. Please read them carefully.
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
