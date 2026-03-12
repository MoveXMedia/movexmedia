import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    slug: 'why-boosted-posts-dont-work',
    title: 'Why Your Receptionist Boosting Posts Isn\'t a Marketing Strategy',
    excerpt: 'Boosted posts feel like marketing. They look like marketing. But for most allied health practices, they\'re quietly draining budget with little to show for it. Here\'s why — and what actually works.',
    date: 'March 2026',
    readTime: '5 min read',
    category: 'Strategy',
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
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="card-light" style={{ cursor: 'pointer', padding: '2.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(91,196,245,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>{post.category}</span>
                    <span style={{ fontSize: '0.8rem', color: '#6b849a', fontWeight: 300 }}>{post.date} · {post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#0d1f35', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: '1.75', fontWeight: 300, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                  <span style={{ color: '#5bc4f5', fontSize: '0.85rem', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
