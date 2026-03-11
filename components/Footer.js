import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(26,58,92,0.5)',
      padding: '4rem 2rem 2rem',
      marginTop: '6rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img src="/logo.svg" alt="MoveX Media" style={{ height: '38px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
              Digital marketing built for health and allied health businesses. We launch your practice into orbit.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.04em',
              color: '#5bc4f5',
              marginBottom: '1.2rem',
            }}>SERVICES</h4>
            {[
              { href: '/google-ads', label: 'Google Ads' },
              { href: '/facebook-marketing', label: 'Facebook & Instagram' },
              { href: '/social-media', label: 'Social Media' },
              { href: '/email-marketing', label: 'Email Marketing' },
              { href: '/website-development', label: 'Website Development' },
            ].map(s => (
              <div key={s.href} style={{ marginBottom: '0.6rem' }}>
                <Link href={s.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 300 }}>
                  {s.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.04em',
              color: '#5bc4f5',
              marginBottom: '1.2rem',
            }}>NAVIGATION</h4>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/pricing', label: 'Packages' },
              { href: '/marketing-budget', label: 'Budget Calculator' },
              { href: '/contact', label: 'Contact' },
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Service' },
            ].map(link => (
              <div key={link.href} style={{ marginBottom: '0.6rem' }}>
                <Link href={link.href} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 300 }}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.04em',
              color: '#5bc4f5',
              marginBottom: '1.2rem',
            }}>MISSION CONTROL</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.7', fontWeight: 300 }}>
              Perth, Western Australia<br />
              admin@movex.media
            </p>
            <Link href="/contact" className="btn-primary" style={{
              display: 'inline-flex',
              marginTop: '1.5rem',
              fontSize: '0.65rem',
              padding: '0.6rem 1.2rem',
            }}>
              Launch Your Growth →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(26,58,92,0.4)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 300 }}>
            © {new Date().getFullYear()} MoveX Media. All rights reserved.
          </span>
          <span style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.8rem',
            fontWeight: 300,
            fontFamily: 'Poppins, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.02em',
          }}>
            BUILT FOR HEALTH. MADE TO MOVE.
          </span>
        </div>
      </div>
    </footer>
  );
}
