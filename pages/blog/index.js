import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    slug: 'why-boosted-posts-dont-work',
    title: "Why Your Receptionist Boosting Posts Isn't a Marketing Strategy",
    excerpt: "Boosted posts feel like marketing. But for most allied health practices, they quietly drain budget with little to show. Here's why — and what actually works.",
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    imageAlt: 'Person using smartphone with social media',
  },
];

const comingSoon = [
  {
    title: 'Google Ads vs Facebook Ads: Which One Should Your Clinic Run First?',
    category: 'Paid Advertising',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    imageAlt: 'Analytics dashboard on laptop',
  },
  {
    title: 'How to Write Google Ad Copy That Converts for Allied Health',
    category: 'Google Ads',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    imageAlt: 'Person typing on laptop',
  },
  {
    title: 'The Real Cost of an Empty Appointment Slot',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    imageAlt: 'Medical appointment calendar',
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Insights — MoveX Media</title>
        <meta name="description" content="Digital marketing insights for health and allied health practices. Strategy, tips, and honest takes on what actually works." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Blog & Insights — MoveX Media" />
        <meta property="og:description" content="Digital marketing insights for health and allied health practices." />
        <meta property="og:url" content="https://movex.media/blog" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Insights</div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '1.5rem' }}>
            Marketing that <span style={{ color: '#5bc4f5' }}>actually works</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '560px', margin: '0 auto', fontWeight: 300 }}>
            Honest takes on digital marketing for health and allied health practices — no fluff, no jargon.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Featured post */}
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{ display: 'block', marginBottom: '3rem' }}>
              <div
                style={{
                  background: 'white', borderRadius: '14px', overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)', cursor: 'pointer',
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'}
                className="blog-featured"
              >
                <div style={{ overflow: 'hidden', minHeight: '320px' }}>
                  <img src={post.image} alt={post.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '3rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(91,196,245,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>{post.category}</span>
                    <span style={{ fontSize: '0.78rem', color: '#6b849a', fontWeight: 300 }}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: '#0d1f35', marginBottom: '1rem', lineHeight: 1.25 }}>{post.title}</h2>
                  <p style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: '1.75', fontWeight: 300, marginBottom: '1.75rem' }}>{post.excerpt}</p>
                  <span style={{ color: '#5bc4f5', fontSize: '0.85rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Read article →</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming soon tiles */}
          <div>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b849a', marginBottom: '1.5rem' }}>Coming soon</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="blog-grid">
              {comingSoon.map((post, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', opacity: 0.75 }}>
                  <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                    <img src={post.image} alt={post.imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }} />
                    <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(8,15,26,0.75)', borderRadius: '4px', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Coming Soon</div>
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.65rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{post.category}</span>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0d1f35', marginTop: '0.5rem', lineHeight: 1.4 }}>{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .blog-featured { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
