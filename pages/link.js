import Head from 'next/head';
import Link from 'next/link';

export default function LinkInBio() {
  const links = [
    {
      href: '/website-development',
      label: 'Website Development',
      sub: 'From $1,500 — opening special',
      badge: 'NEW',
      badgeColor: '#ffb400',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      highlight: true,
    },
    {
      href: '/marketing-hub',
      label: 'Marketing Hub',
      sub: 'Email automation, clinician portal & more',
      badge: null,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      highlight: false,
    },
    {
      href: '/pricing',
      label: 'View Packages & Pricing',
      sub: 'Google Ads, Facebook, websites & platform',
      badge: null,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      highlight: false,
    },
    {
      href: '/contact',
      label: 'Book a Free Strategy Session',
      sub: 'No obligation — 30 minutes',
      badge: 'FREE',
      badgeColor: '#22c55e',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
      highlight: false,
    },
  ];

  return (
    <>
      <Head>
        <title>MoveX Media — Links</title>
        <meta name="description" content="Digital marketing for physiotherapy and allied health practices. Perth, WA." />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html, body {
            background: #060d1a;
            font-family: 'Poppins', system-ui, -apple-system, sans-serif;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
        `}</style>
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #060d1a 0%, #0a1628 50%, #060d1a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '48px 20px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Background glow */}
        <div style={{
          position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(91,196,245,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '420px' }}>

          {/* Profile section */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>

            {/* Logo mark */}
            <div style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: '#0d1f35',
              border: '2.5px solid rgba(91,196,245,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 0 30px rgba(91,196,245,0.15)',
              position: 'relative',
            }}>
              {/* Orbit dot */}
              <div style={{
                position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)',
                width: '10px', height: '10px',
                borderRadius: '50%',
                background: '#5bc4f5',
              }} />
              {/* MX text */}
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: '22px',
                letterSpacing: '-1px',
                color: 'white',
              }}>
                M<span style={{ color: '#5bc4f5' }}>X</span>
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '22px',
              color: 'white',
              letterSpacing: '-0.5px',
              marginBottom: '4px',
            }}>
              MOVE<span style={{ color: '#5bc4f5' }}>X</span> MEDIA
            </h1>

            {/* Tagline */}
            <p style={{
              fontWeight: 300,
              fontSize: '14px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.5,
              marginBottom: '8px',
            }}>
              Digital marketing for physiotherapy
              <br />& allied health clinics — Perth, WA
            </p>

            {/* Website link */}
            <a href="https://movex.media" style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#5bc4f5',
              textDecoration: 'none',
              opacity: 0.8,
            }}>
              movex.media
            </a>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: item.highlight
                    ? 'linear-gradient(135deg, rgba(91,196,245,0.14), rgba(91,196,245,0.06))'
                    : 'rgba(255,255,255,0.04)',
                  border: `1.5px solid ${item.highlight ? 'rgba(91,196,245,0.45)' : 'rgba(255,255,255,0.08)'}`,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: item.highlight ? '0 4px 24px rgba(91,196,245,0.1)' : 'none',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '10px',
                  background: item.highlight ? 'rgba(91,196,245,0.15)' : 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  color: item.highlight ? '#5bc4f5' : 'rgba(255,255,255,0.6)',
                }}>
                  {item.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                    <span style={{
                      fontWeight: 700,
                      fontSize: '15px',
                      color: 'white',
                      lineHeight: 1.3,
                    }}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        color: item.badgeColor,
                        border: `1px solid ${item.badgeColor}`,
                        borderRadius: '4px',
                        padding: '1px 6px',
                        opacity: 0.9,
                        letterSpacing: '0.5px',
                        flexShrink: 0,
                      }}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span style={{
                    fontSize: '12.5px',
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: 300,
                    lineHeight: 1.4,
                  }}>
                    {item.sub}
                  </span>
                </div>

                {/* Arrow */}
                <div style={{
                  color: item.highlight ? '#5bc4f5' : 'rgba(255,255,255,0.2)',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Social row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '36px',
          }}>
            {[
              {
                label: 'Instagram',
                href: 'https://instagram.com/movex.media_au',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                ),
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=61568932381291',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Footer */}
          <p style={{
            textAlign: 'center',
            marginTop: '28px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            fontWeight: 300,
          }}>
            © 2026 MoveX Media · Perth, WA
          </p>

        </div>
      </div>

      <style>{`
        a:hover > div:last-child {
          color: #5bc4f5 !important;
        }
      `}</style>
    </>
  );
}
