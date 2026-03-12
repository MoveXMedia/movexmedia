import Head from 'next/head';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Why Your Receptionist Boosting Posts Isn't a Marketing Strategy — MoveX Media</title>
        <meta name="description" content="Boosted posts feel like marketing but for most allied health practices they quietly drain budget. Here's why boosting doesn't work and what actually does." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://movex.media/blog/why-boosted-posts-dont-work" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="MoveX Media" />
        <meta property="og:title" content="Why Your Receptionist Boosting Posts Isn't a Marketing Strategy" />
        <meta property="og:description" content="Boosted posts feel like marketing but quietly drain budget with little to show. Here's why — and what actually works." />
        <meta property="og:url" content="https://movex.media/blog/why-boosted-posts-dont-work" />
        <meta property="og:image" content="https://movex.media/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://movex.media/og-image.png" />
      </Head>

      {/* Hero */}
      <section style={{ padding: '8rem 2rem 5rem', background: 'linear-gradient(135deg, #020c1b 0%, #061220 60%, #0a1628 100%)', borderBottom: '1px solid rgba(91,196,245,0.08)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(91,196,245,0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>Strategy</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>March 2026 · 5 min read</span>
          </div>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Why Your Receptionist Boosting Posts Isn't a Marketing Strategy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', lineHeight: '1.8', fontWeight: 300 }}>
            Boosted posts feel like marketing. They look like marketing. But for most allied health practices, they're quietly draining budget with little to show for it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 2rem', background: '#f4f7fb' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>

            {[
              {
                heading: null,
                body: `It usually starts with good intentions. Someone at the front desk notices the clinic's Facebook post is getting a few likes, and there's a little blue "Boost Post" button sitting right there. $20. Maybe $50. It feels like doing something. It looks like marketing. And at the end of the week, Facebook tells you the post "reached 1,400 people."

But your appointment book didn't move.

This is one of the most common patterns we see in allied health practices — and it's worth understanding why it happens, because the problem isn't effort. It's structure.`,
              },
              {
                heading: 'What Boosting Actually Does',
                body: `When you boost a post, you're paying Facebook to show that post to more people. That's it. There's no campaign objective beyond reach or engagement. No conversion tracking. No optimisation toward bookings. No control over when or how people see it.

Facebook will happily spend your $50 showing your post to people who are broadly in your area and somewhat match a demographic. Some of them might be interested in physiotherapy. Most won't be. And even those who are interested have no clear path to booking — they see the post, maybe tap like, and scroll on.

You've paid for impressions, not patients.`,
              },
              {
                heading: 'The In-House Receptionist Problem',
                body: `There's nothing wrong with your receptionist. The problem is that running paid social media advertising well requires a specific skill set that most practice staff simply haven't been trained in — and shouldn't be expected to have.

Effective Meta advertising involves:

• Choosing the right campaign objective (not reach — conversions or lead generation)
• Building structured audiences based on demographics, interests, behaviours, and lookalikes
• Writing ad copy that speaks to specific patient pain points
• Designing creative that stops the scroll
• Setting up conversion tracking so you actually know what's working
• Running A/B tests and iterating based on data
• Managing budget pacing and frequency caps

This is a full discipline. Asking your front desk to handle it between phone calls is like asking your physio to also manage your MYOB. Technically possible. Practically a problem.`,
              },
              {
                heading: 'What Actually Works for Allied Health',
                body: `The practices we work with that see real results from social advertising share a few things in common.

They run proper campaign structures — typically awareness campaigns at the top, retargeting campaigns below, and conversion campaigns for high-intent audiences. Each campaign has a specific objective, a defined audience, and a clear path to action (usually a booking link or contact form).

They write copy that talks to specific conditions and problems, not generic "we offer physio" messaging. "Struggling with lower back pain after long days at a desk?" performs dramatically better than "Book your appointment today."

They track conversions. If you can't see how many bookings or enquiries came from your ads, you have no idea what's working.

And critically — they treat it as an ongoing process, not a set-and-forget task. The practices that grow are the ones that test, review data, and adjust every few weeks.`,
              },
              {
                heading: 'The Honest Test',
                body: `Here's a simple question to ask yourself: in the last 3 months, how many new patients can you directly attribute to your social media spend?

If the answer is "I'm not sure" or "I think a few," that's the problem in plain sight. Every dollar of ad spend should be traceable to a result — or at least a strong signal. If you can't measure it, you can't improve it.

Boosted posts don't give you that visibility. Properly structured campaigns do.`,
              },
              {
                heading: 'What to Do Instead',
                body: `If you're currently spending $200–$500 a month on boosted posts and not seeing results, you have two options.

Stop entirely and redirect that budget to a channel where you can measure results more clearly (Google Ads, for instance, where intent is explicit).

Or invest it properly — which means either learning Meta Ads Manager properly (there are good courses), hiring someone who knows what they're doing, or working with an agency that specialises in health.

The $50 boost button isn't going anywhere. But neither is the empty appointment slot it didn't fill.`,
              },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: '2.5rem' }}>
                {section.heading && (
                  <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#0d1f35', marginBottom: '1rem' }}>{section.heading}</h2>
                )}
                {section.body.split('\n\n').map((para, j) => (
                  para.includes('\n•') || para.startsWith('•') ? (
                    <ul key={j} style={{ margin: '1rem 0', padding: '0 0 0 1rem' }}>
                      {para.split('\n').filter(l => l.trim()).map((line, k) => (
                        <li key={k} style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: '1.8', fontWeight: 300, marginBottom: '0.4rem', listStyle: 'none', paddingLeft: '1rem', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#5bc4f5' }}>•</span>
                          {line.replace('• ', '')}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j} style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: '1.85', fontWeight: 300, marginBottom: '1rem' }}>{para}</p>
                  )
                ))}
              </div>
            ))}

            {/* Author */}
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e2eaf4', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <img
                src="https://movephysiotherapy.com.au/wp-content/uploads/2025/07/26-Jun-2025-Move-Physiotherapy-Headshots-_0094-scaled.webp"
                alt="Daniel Ryan"
                style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0d1f35' }}>Daniel Ryan</div>
                <div style={{ fontSize: '0.8rem', color: '#6b849a', fontWeight: 300 }}>Founder, MoveX Media</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #0d1f35, #061220)', borderRadius: '12px', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(91,196,245,0.15)' }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'white', marginBottom: '0.75rem' }}>
              Want to know what your ad spend is actually returning?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '1.5rem', fontWeight: 300 }}>
              Book a free strategy session. We'll audit your current setup and show you where the gaps are.
            </p>
            <Link href="/contact"><span className="btn-primary" style={{ cursor: 'pointer' }}>Book Free Strategy Session →</span></Link>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/blog"><span style={{ color: '#5bc4f5', fontSize: '0.9rem', cursor: 'pointer' }}>← Back to Blog</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
