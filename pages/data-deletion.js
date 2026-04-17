import Head from 'next/head';
import Link from 'next/link';

export default function DataDeletion() {
  return (
    <>
      <Head>
        <title>Data Deletion Instructions — MoveX Media</title>
        <meta name="description" content="Instructions for requesting deletion of your data from MoveX Media and associated apps." />
        <meta name="robots" content="noindex" />
      </Head>

      <section style={{ padding: '10rem 2rem 6rem', minHeight: '80vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div className="section-label" style={{ color: '#5bc4f5', marginBottom: '1rem' }}>Data Deletion</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Data Deletion Instructions
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontWeight: 300, marginBottom: '3rem' }}>
            Last updated: April 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div className="card">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#5bc4f5', marginBottom: '1rem' }}>
                What data do we collect via Facebook?
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300 }}>
                The MoveX Marketing Hub connects to the Facebook Marketing API to display advertising statistics for your clinic's Facebook and Instagram ad campaigns. We access your ad account data, including campaign performance metrics (impressions, reach, spend, results) via your authorised Facebook Business account.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300, marginTop: '0.75rem' }}>
                We do not collect, store, or process personal data belonging to your patients or Facebook users. We only access aggregate advertising performance data associated with your business ad account.
              </p>
            </div>

            <div className="card">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#5bc4f5', marginBottom: '1rem' }}>
                How to request data deletion
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300, marginBottom: '1rem' }}>
                To request deletion of any data associated with your account or Facebook integration, please contact us directly:
              </p>
              <div style={{ background: 'rgba(91,196,245,0.08)', border: '1px solid rgba(91,196,245,0.2)', borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '1rem' }}>
                <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 400, margin: 0 }}>
                  📧 <strong>Email:</strong> <a href="mailto:admin@movex.media" style={{ color: '#5bc4f5', textDecoration: 'none' }}>admin@movex.media</a>
                </p>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300 }}>
                Please include your business name and the email address associated with your MoveX account. We will process your deletion request within <strong style={{ color: 'white' }}>30 days</strong> and confirm once complete.
              </p>
            </div>

            <div className="card">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#5bc4f5', marginBottom: '1rem' }}>
                Revoking Facebook permissions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300, marginBottom: '1rem' }}>
                You can also revoke the MoveX Marketing Hub app's access to your Facebook account at any time directly through Facebook:
              </p>
              <ol style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '2', fontWeight: 300, paddingLeft: '1.25rem', margin: 0 }}>
                <li>Log in to your Facebook account</li>
                <li>Go to <strong style={{ color: 'white' }}>Settings &amp; Privacy → Settings</strong></li>
                <li>Select <strong style={{ color: 'white' }}>Security and Login → Apps and Websites</strong></li>
                <li>Find <strong style={{ color: 'white' }}>MoveX Marketing Hub</strong> and click <strong style={{ color: 'white' }}>Remove</strong></li>
              </ol>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300, marginTop: '1rem' }}>
                Removing the app from Facebook will immediately revoke our access to your ad account data. Please also contact us at the email above so we can delete any stored data from our systems.
              </p>
            </div>

            <div className="card">
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#5bc4f5', marginBottom: '1rem' }}>
                Questions
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: 300 }}>
                For any questions about this policy or how we handle your data, please review our{' '}
                <Link href="/privacy" style={{ color: '#5bc4f5', textDecoration: 'none' }}>Privacy Policy</Link>{' '}
                or contact us at{' '}
                <a href="mailto:admin@movex.media" style={{ color: '#5bc4f5', textDecoration: 'none' }}>admin@movex.media</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
