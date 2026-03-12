import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [router.pathname]);

  const serviceLinks = [
    { href: '/services', label: 'All Services' },
    { href: '/google-ads', label: 'Google Ads' },
    { href: '/facebook-marketing', label: 'Facebook & Instagram Ads' },
    { href: '/social-media', label: 'Social Media Management' },
    { href: '/email-marketing', label: 'Email Marketing' },
    { href: '/website-development', label: 'Website Development' },
  ];

  const topLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/marketing-budget', label: 'Budget Calculator' },
    { href: '/pricing', label: 'Packages' },
    { href: '/contact', label: 'Contact' },
  ];

  const isServicesActive = ['/services', '/google-ads', '/facebook-marketing', '/social-media', '/email-marketing', '/website-development'].includes(router.pathname);

  const linkStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.82rem',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
    position: 'relative',
    cursor: 'pointer',
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '1.2rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8,15,26,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(91,196,245,0.15)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.svg" alt="MoveX Media" style={{ height: "44px", width: 'auto' }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">

          {[topLinks[0], topLinks[1], topLinks[2]].map(link => (
            <Link key={link.href} href={link.href} style={{
              ...linkStyle,
              color: router.pathname === link.href ? '#5bc4f5' : 'rgba(255,255,255,0.7)',
            }}>
              {link.label}
              {router.pathname === link.href && (
                <span style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '1px', background: '#5bc4f5', boxShadow: '0 0 8px #5bc4f5',
                }} />
              )}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span style={{
              ...linkStyle,
              color: isServicesActive ? '#5bc4f5' : 'rgba(255,255,255,0.7)',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
            }}>
              Services
              <span style={{
                fontSize: '0.62rem', opacity: 0.6,
                transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s ease',
                display: 'inline-block',
              }}>▼</span>
              {isServicesActive && (
                <span style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '1px', background: '#5bc4f5', boxShadow: '0 0 8px #5bc4f5',
                }} />
              )}
            </span>

            {/* Invisible bridge fills the gap so mouse doesn't leave hover zone */}
            {servicesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                right: '-20px',
                height: '16px',
              }} />
            )}

            {servicesOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 16px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(8,15,26,0.97)',
                border: '1px solid rgba(91,196,245,0.2)',
                borderRadius: '6px',
                padding: '0.5rem 0',
                minWidth: '210px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(20px)',
              }}>
                <div style={{
                  position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)',
                  width: '8px', height: '8px',
                  background: 'rgba(8,15,26,0.97)',
                  border: '1px solid rgba(91,196,245,0.2)',
                  borderRight: 'none', borderBottom: 'none',
                }} />
                {serviceLinks.map((link, i) => (
                  <Link key={link.href} href={link.href} style={{
                    display: 'block',
                    padding: '0.65rem 1.25rem',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '0.02em',
                    color: router.pathname === link.href ? '#5bc4f5' : 'rgba(255,255,255,0.7)',
                    borderBottom: i < serviceLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    transition: 'color 0.15s',
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[topLinks[3], topLinks[4], topLinks[5]].map(link => (
            <Link key={link.href} href={link.href} style={{
              ...linkStyle,
              color: router.pathname === link.href ? '#5bc4f5' : 'rgba(255,255,255,0.7)',
            }}>
              {link.label}
              {router.pathname === link.href && (
                <span style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '1px', background: '#5bc4f5', boxShadow: '0 0 8px #5bc4f5',
                }} />
              )}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary" style={{ fontSize: '0.82rem', padding: '0.65rem 1.3rem' }}>
            Get Started
          </Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
          background: 'none', border: '1px solid rgba(91,196,245,0.3)',
          color: 'white', padding: '0.5rem 0.75rem',
          cursor: 'pointer', fontFamily: 'monospace', fontSize: '1rem',
        }}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, bottom: 0,
          background: 'rgba(8,15,26,0.98)', zIndex: 99,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '1.75rem',
          backdropFilter: 'blur(20px)',
        }}>
          {[topLinks[0], topLinks[1], topLinks[2]].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '1rem',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: router.pathname === link.href ? '#5bc4f5' : 'white',
            }}>{link.label}</Link>
          ))}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '1rem',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: isServicesActive ? '#5bc4f5' : 'white', marginBottom: '0.75rem',
            }}>Services</div>
            {serviceLinks.map(link => (
              <Link key={link.href} href={link.href} style={{
                display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem',
                color: router.pathname === link.href ? '#5bc4f5' : 'rgba(255,255,255,0.5)',
                marginBottom: '0.5rem',
              }}>{link.label}</Link>
            ))}
          </div>
          {[topLinks[3], topLinks[4], topLinks[5]].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '1rem',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              color: router.pathname === link.href ? '#5bc4f5' : 'white',
            }}>{link.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        .hamburger { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block; }
        }
      `}</style>
    </>
  );
}
