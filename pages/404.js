import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found — MoveX Media</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Stars */}
        {[
          [10,15],[20,70],[35,30],[50,85],[65,20],[80,60],[90,35],[15,50],[75,80],[45,10]
        ].map(([x, y], i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${x}%`, top: `${y}%`,
            width: i % 3 === 0 ? '2px' : '1px',
            height: i % 3 === 0 ? '2px' : '1px',
            borderRadius: '50%',
            background: 'white',
            opacity: 0.4 + (i % 3) * 0.15,
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Rocket */}
          <div style={{ fontSize: '5rem', marginBottom: '1.5rem', display: 'block' }}>🚀</div>

          {/* 404 */}
          <div style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            lineHeight: 1,
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}>
            404
          </div>

          <h1 style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1rem',
          }}>
            This page got lost in orbit
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem',
            lineHeight: '1.75',
            maxWidth: '420px',
            margin: '0 auto 2.5rem',
            fontWeight: 300,
          }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/"><span className="btn-primary" style={{ cursor: 'pointer' }}>Back to Home</span></Link>
            <Link href="/contact"><span style={{
              display: 'inline-block',
              padding: '0.9rem 1.8rem',
              border: '1px solid rgba(91,196,245,0.3)',
              borderRadius: '4px',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}>Contact Us</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
