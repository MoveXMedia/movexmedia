import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const BOOKING_URL = 'https://movex.media/contact';
export default function SideHustle() {
  return (
    <>
      <Head>
        <title>Your Side Hustle Deserves a Real Website — MoveX Media</title>
        <meta name="description" content="Stop slaving over Wix. Get a professional website for your side hustle — fast, cheap, and built by a real person. Plus: get Daniel's honest tips for actually making it work." />
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #060d18; font-family: 'Poppins', sans-serif; color: white; }

          .btn {
            display: inline-block;
            background: linear-gradient(135deg, #5bc4f5, #2a9fd8);
            color: #040c18;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: 1rem;
            padding: 1.1rem 2.6rem;
            border-radius: 6px;
            text-decoration: none;
            cursor: pointer;
            border: none;
            transition: transform 0.15s, box-shadow 0.15s;
            box-shadow: 0 4px 28px rgba(91,196,245,0.35);
          }
          .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(91,196,245,0.5); }
          .btn-lg { font-size: 1.1rem; padding: 1.25rem 3rem; }
          .btn-outline {
            display: inline-block;
            background: transparent;
            color: #5bc4f5;
            border: 2px solid rgba(91,196,245,0.5);
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 0.85rem 2rem;
            border-radius: 6px;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.15s;
          }
          .btn-outline:hover { background: rgba(91,196,245,0.1); border-color: #5bc4f5; }

          .pulse { animation: pulse 2.5s infinite; }
          @keyframes pulse {
            0%,100% { box-shadow: 0 4px 28px rgba(91,196,245,0.35); }
            50% { box-shadow: 0 4px 60px rgba(91,196,245,0.65); }
          }

          .frank-card {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            padding: 2rem;
          }
          .frank-card:hover {
            border-color: rgba(91,196,245,0.3);
            background: rgba(91,196,245,0.04);
          }

          .lp-input {
            width: 100%;
            background: rgba(255,255,255,0.06);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 8px;
            padding: 0.9rem 1.25rem;
            color: white;
            font-family: 'Poppins', sans-serif;
            font-size: 0.95rem;
            font-weight: 300;
            outline: none;
            transition: border-color 0.2s;
          }
          .lp-input:focus { border-color: rgba(91,196,245,0.6); }
          .lp-input::placeholder { color: rgba(255,255,255,0.3); }

          .strike { text-decoration: line-through; opacity: 0.5; }
          .highlight { color: #5bc4f5; }
          .amber { color: #ffb400; }
        `}</style>
      </Head>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Photo background */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src="/hero-handcraft.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(6,13,26,0.92) 0%, rgba(6,13,26,0.75) 50%, rgba(6,13,26,0.3) 100%)' }} />
        </div>

        {/* Hero text */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 1.5rem', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '580px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(91,196,245,0.12)', border: '1px solid rgba(91,196,245,0.4)', borderRadius: '8px', padding: '0.5rem 1.1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#5bc4f5' }}>Honest talk for people building something on the side 👇</span>
            </div>

            <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', lineHeight: 1.05, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'white' }}>
              Your Side Hustle<br />
              <span style={{ color: '#5bc4f5' }}>CAN Work.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.85, maxWidth: '520px', marginBottom: '1.25rem', fontWeight: 300 }}>
              The businesses that make it aren't the most talented. They're the ones doing small, daily, high-value actions — consistently. Not trying to do everything at once.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.85, maxWidth: '520px', marginBottom: '2.5rem', fontWeight: 300 }}>
              A website is one of those actions. Get it done — properly — and stop thinking about it.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <a href={BOOKING_URL} className="btn btn-lg pulse">Get My Website Done →</a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', fontWeight: 300 }}>
              $499 USD one-off · $20 USD/month hosting · 2-yr min · Live in 7 days
            </p>
          </div>
        </div>
      </section>

      {/* ── DANIEL + TIPS ── */}
      <section id="tips" style={{ padding: '6rem 1.5rem', background: '#ffffff', borderTop: '1px solid #e2eaf4' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem', alignItems: 'start' }} className="daniel-tips-grid">

          {/* Daniel photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid #5bc4f5', boxShadow: '0 24px 80px rgba(91,196,245,0.2)' }}>
              <Image src="/daniel-ryan.jpg" alt="Daniel Ryan" width={400} height={500} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ background: 'linear-gradient(to top, rgba(6,13,26,0.97) 40%, transparent)', padding: '1.75rem 1.5rem 1.5rem', marginTop: '-80px', position: 'relative' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'white' }}>Daniel Ryan</div>
                <div style={{ color: '#5bc4f5', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em' }}>Founder · MoveX Media</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5bc4f5', marginBottom: '0.75rem' }}>The honest take</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em', color: '#060d18' }}>
              What actually makes a<br />
              <span style={{ color: '#5bc4f5' }}>side hustle work</span>
            </h2>

            <p style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
              I built Move Physiotherapy from a single room into a three-location business. Before MoveX. While running a clinic. I know what it feels like to be building something on the side with limited time, limited money, and a long list of things to figure out.
            </p>
            <p style={{ color: '#6b849a', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '2.5rem' }}>
              The businesses that make it aren't the ones who launch perfectly. They're the ones who pick the right daily actions and actually do them.
            </p>

            {/* Tips list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { num: '01', tip: 'Don\'t do everything at once', detail: 'Pick one channel. One audience. One offer. Master it before you expand.' },
                { num: '02', tip: 'Daily beats weekly beats monthly', detail: 'A small thing done every day compounds into something big. An hour every Sunday doesn\'t.' },
                { num: '03', tip: 'Remove the low-value tasks first', detail: 'If it can be done better by someone else for a reasonable price — pay it. Your time is worth more than you think.' },
                { num: '04', tip: 'Your website is infrastructure, not marketing', detail: 'Get it done once. Properly. Then forget about it and go market your business.' },
              ].map(t => (
                <div key={t.num} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem', background: '#f4f7fb', borderRadius: '12px', border: '1px solid #e2eaf4' }}>
                  <div style={{ fontWeight: 900, fontSize: '0.7rem', color: '#5bc4f5', letterSpacing: '0.1em', minWidth: '28px', marginTop: '3px', opacity: 0.8 }}>{t.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.3rem', color: '#060d18' }}>{t.tip}</div>
                    <div style={{ color: '#6b849a', fontSize: '0.84rem', fontWeight: 300, lineHeight: 1.6 }}>{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={BOOKING_URL} className="btn">Book a Free Call →</a>
          </div>
        </div>
        <style>{`@media (max-width: 820px) { .daniel-tips-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* ── FRANK TRUTH SECTION ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#f4f7fb', borderTop: '1px solid #e2eaf4' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5bc4f5', marginBottom: '0.75rem' }}>Let's be honest</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#060d18' }}>
              You have two bad options.<br />
              <span style={{ color: '#5bc4f5' }}>And one good one.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="options-grid">

            {/* Bad option 1 */}
            <div style={{ background: 'white', border: '1px solid #fde8e0', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>😩</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#060d18' }}>Do it yourself on Wix</div>
              <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                10 hours of your weekend. A site that looks like a template. Loads slowly. Ranks nowhere. And you're back tweaking it every month instead of building your actual business.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#c0392b', fontWeight: 600 }}>
                ~$5/hr value of your time × 10+ hours = already cost you more than our rate
              </div>
            </div>

            {/* Bad option 2 */}
            <div style={{ background: 'white', border: '1px solid #fde8e0', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>💸</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#060d18' }}>Pay a big agency</div>
              <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                $5,000–$15,000 for a side project that's making $0 right now. You'll get handed to a junior designer you've never spoken to, in an office overseas. Then charged again to change a typo.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#c0392b', fontWeight: 600 }}>
                Way too much risk for a business that hasn't proven itself yet
              </div>
            </div>

            {/* Good option */}
            <div style={{ background: 'white', border: '2px solid #5bc4f5', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #5bc4f5, #2a9fd8)', color: 'white', fontSize: '0.65rem', fontWeight: 900, padding: '0.3rem 1.1rem', borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>THIS ONE</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#060d18' }}>MoveX — built for side hustles</div>
              <p style={{ color: '#6b849a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                $499 USD. Done in 7 days. You speak directly with Daniel — not a tech farm. Fast, SEO-ready, mobile-first. Cheap enough that you don't need to stress about it.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#5bc4f5', fontWeight: 600 }}>
                Spend your energy building the business, not the website
              </div>
            </div>

          </div>
          <style>{`@media (max-width: 700px) { .options-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* ── CTA 1 ── */}
      <div style={{ background: 'linear-gradient(135deg, #0d1f35, #1a3a5c)', padding: '3rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(91,196,245,0.15)', borderBottom: '1px solid rgba(91,196,245,0.15)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', marginBottom: '1rem', lineHeight: 1.3 }}>
            Stop procrastinating on the website.<br />
            <span style={{ color: '#5bc4f5' }}>It's the easiest thing on your list.</span>
          </p>
          <a href={BOOKING_URL} className="btn">Book a Free 15-Min Call →</a>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', marginTop: '0.75rem', fontWeight: 300 }}>No obligation. Just a chat.</p>
        </div>
      </div>

      {/* ── WHAT YOU GET ── */}
      <section style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5bc4f5', marginBottom: '0.75rem' }}>What you get</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#060d18' }}>
              A proper website.<br /><span style={{ color: '#5bc4f5' }}>Not a template.</span>
            </h2>
            <p style={{ color: '#6b849a', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '560px', marginTop: '1rem' }}>
              Better than Wix. Better than WordPress. Faster than both. Built by someone who's actually done this for a real business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { icon: '⚡', title: 'PageSpeed 100', desc: 'Loads in under 1 second. Google notices. Your visitors notice.' },
              { icon: '📱', title: 'Mobile-first', desc: 'Most of your customers will find you on their phone. It\'ll look perfect.' },
              { icon: '🔍', title: 'SEO built in', desc: 'Local SEO structure, schema, sitemap. You\'ll start showing up.' },
              { icon: '✏️', title: 'Copy written for you', desc: 'You don\'t need to write a word. I write it, you review it.' },
              { icon: '🎨', title: 'Custom design', desc: 'Not a template. Designed for your brand, your business.' },
              { icon: '📊', title: 'Analytics hooked up', desc: 'Know who\'s visiting, where they came from, and what they do.' },
            ].map(f => (
              <div key={f.title} style={{ background: '#f4f7fb', border: '1px solid #e2eaf4', borderRadius: '14px', padding: '1.75rem', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', color: '#060d18' }}>{f.title}</div>
                <p style={{ color: '#6b849a', fontSize: '0.85rem', lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div style={{ background: 'linear-gradient(135deg, #0a1628, #0d1f35)', borderRadius: '16px', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>3-page website · Live in 7 days</div>
              <div style={{ fontWeight: 900, fontSize: '3rem', lineHeight: 1, color: '#5bc4f5' }}>$499 <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>USD</span></div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.4rem', fontWeight: 300 }}>+ $20 USD/month hosting · 2-year minimum hosting commitment</div>
            </div>
            <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#5bc4f5', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1rem', padding: '1rem 2.2rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(91,196,245,0.4)' }}>Start Today →</a>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ padding: '4rem 1.5rem 6rem', background: '#f4f7fb', borderTop: '1px solid #e2eaf4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5bc4f5', marginBottom: '0.75rem' }}>Real work</p>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.02em', color: '#060d18' }}>
            This is what $499 gets you.
          </h2>

          {/* Move Physio - hero */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2eaf4', marginBottom: '1.5rem' }}>
            <Image src="/work-move-physio.png" alt="Move Physiotherapy Website" width={1200} height={680} style={{ width: '100%', height: 'auto', display: 'block' }} />

          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '6rem 1.5rem 7rem', textAlign: 'center', background: 'linear-gradient(135deg, #060d18 0%, #0a1628 50%, #060d18 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(91,196,245,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '660px', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.03em', color: 'white' }}>
            You've been meaning to start.<br />
            <span style={{ color: '#5bc4f5' }}>This is the day.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Book a free 15-minute call. I'll ask what your business does, and get you a website that works for it — in a week. That's it.
          </p>
          <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#5bc4f5', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', padding: '1.25rem 3rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 32px rgba(91,196,245,0.45)', marginBottom: '1rem' }}>
            Book My Free Call with Daniel →
          </a>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['$499 USD one-off', 'Live in 7 days', '$20/mo · 2yr min', '30-day money back'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 300 }}>
                <span style={{ color: '#5bc4f5', fontSize: '0.7rem' }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#100805', padding: '1.75rem 1.5rem', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', fontWeight: 300 }}>
          © 2026 MoveX Media · movex.media
        </p>
      </div>
    </>
  );
}
