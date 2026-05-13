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
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #1a0e08 0%, #2a1505 40%, #1a0e08 100%)' }}>

        {/* Pottery illustration — right side */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', overflow: 'hidden' }} className="hero-pottery">
          <svg viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            {/* Warm background wash */}
            <rect width="600" height="700" fill="url(#bg_grad)"/>
            <defs>
              <radialGradient id="bg_grad" cx="40%" cy="60%" r="70%">
                <stop offset="0%" stopColor="#3d1f08" stopOpacity="1"/>
                <stop offset="100%" stopColor="#150a02" stopOpacity="1"/>
              </radialGradient>
              <radialGradient id="clay_light" cx="35%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#e8a876" stopOpacity="0.9"/>
                <stop offset="60%" stopColor="#c4714a" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#7a3a1e" stopOpacity="0.6"/>
              </radialGradient>
              <radialGradient id="bowl_inner" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#d4855a" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#5a2810" stopOpacity="0.9"/>
              </radialGradient>
              <filter id="soft_blur">
                <feGaussianBlur stdDeviation="2"/>
              </filter>
            </defs>

            {/* Wooden table surface */}
            <ellipse cx="300" cy="580" rx="320" ry="60" fill="#2a1408" opacity="0.8"/>
            <rect x="0" y="560" width="600" height="140" fill="#1a0c04" opacity="0.9"/>
            {/* Wood grain lines */}
            <line x1="0" y1="565" x2="600" y2="568" stroke="#2e1508" strokeWidth="1.5" opacity="0.6"/>
            <line x1="0" y1="575" x2="600" y2="572" stroke="#2e1508" strokeWidth="1" opacity="0.4"/>
            <line x1="0" y1="590" x2="600" y2="588" stroke="#2e1508" strokeWidth="1" opacity="0.3"/>

            {/* Large vase — centre */}
            <path d="M220 540 C200 540 175 480 170 420 C165 360 175 300 190 265 C205 230 220 220 240 218 C250 217 260 216 300 216 C340 216 350 217 360 218 C380 220 395 230 410 265 C425 300 435 360 430 420 C425 480 400 540 380 540 Z"
              fill="url(#clay_light)" />
            {/* Vase neck */}
            <path d="M245 218 C245 205 248 190 260 180 C272 170 288 166 300 166 C312 166 328 170 340 180 C352 190 355 205 355 218"
              fill="#c4714a" opacity="0.85"/>
            {/* Vase rim */}
            <ellipse cx="300" cy="166" rx="55" ry="14" fill="#d4855a" opacity="0.9"/>
            <ellipse cx="300" cy="162" rx="52" ry="10" fill="#e8a876" opacity="0.5"/>
            {/* Vase highlight */}
            <path d="M195 370 C195 340 198 310 205 285" stroke="#f0c090" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
            {/* Vase texture lines */}
            <path d="M190 380 Q300 375 410 382" stroke="#7a3a1e" strokeWidth="1" opacity="0.4" fill="none"/>
            <path d="M175 430 Q300 424 425 432" stroke="#7a3a1e" strokeWidth="1" opacity="0.3" fill="none"/>
            <path d="M180 460 Q300 454 420 462" stroke="#7a3a1e" strokeWidth="1" opacity="0.25" fill="none"/>
            {/* Shadow under vase */}
            <ellipse cx="300" cy="543" rx="90" ry="12" fill="#0a0400" opacity="0.5" filter="url(#soft_blur)"/>

            {/* Small bowl — left foreground */}
            <path d="M80 520 C75 510 70 490 72 478 C74 466 82 460 100 458 C118 456 135 462 140 474 C145 486 142 508 138 520 Z"
              fill="#b5623e" opacity="0.9"/>
            <ellipse cx="109" cy="458" rx="32" ry="8" fill="#c97a52" opacity="0.8"/>
            <ellipse cx="109" cy="455" rx="28" ry="5" fill="#d99068" opacity="0.5"/>
            {/* Bowl inner shadow */}
            <ellipse cx="109" cy="460" rx="24" ry="6" fill="#7a3015" opacity="0.4"/>
            <ellipse cx="100" cy="522" rx="32" ry="6" fill="#0a0400" opacity="0.4" filter="url(#soft_blur)"/>

            {/* Tall thin vase — right */}
            <path d="M460 530 C452 530 442 500 440 465 C438 430 442 390 448 368 C454 346 462 340 470 338 C478 336 490 338 496 360 C502 382 504 424 502 462 C500 500 490 530 480 530 Z"
              fill="#a85a36" opacity="0.85"/>
            <ellipse cx="472" cy="338" rx="26" ry="8" fill="#c07248" opacity="0.8"/>
            <ellipse cx="472" cy="335" rx="22" ry="5" fill="#d08858" opacity="0.4"/>
            {/* Tall vase highlight */}
            <path d="M448 420 C448 400 449 382 452 368" stroke="#e0a070" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
            <ellipse cx="472" cy="532" rx="26" ry="6" fill="#0a0400" opacity="0.4" filter="url(#soft_blur)"/>

            {/* Clay smear / hands texture overlay */}
            <ellipse cx="280" cy="350" rx="18" ry="6" fill="#f0c090" opacity="0.08" transform="rotate(-15 280 350)"/>
            <ellipse cx="320" cy="290" rx="12" ry="4" fill="#f0c090" opacity="0.06" transform="rotate(10 320 290)"/>

            {/* Warm ambient glow from left */}
            <ellipse cx="-50" cy="350" rx="300" ry="300" fill="#ff8040" opacity="0.04"/>

            {/* Dust particles */}
            <circle cx="150" cy="200" r="1.5" fill="#d4855a" opacity="0.3"/>
            <circle cx="420" cy="180" r="1" fill="#d4855a" opacity="0.2"/>
            <circle cx="100" cy="350" r="1" fill="#c4714a" opacity="0.25"/>
            <circle cx="500" cy="300" r="1.5" fill="#d4855a" opacity="0.2"/>
          </svg>
          {/* Gradient fade left */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '60%', height: '100%', background: 'linear-gradient(to right, #1a0e08 0%, transparent 100%)' }} />
        </div>

        {/* Hero text */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 1.5rem', position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '560px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(212,133,90,0.15)', border: '1px solid rgba(212,133,90,0.4)', borderRadius: '8px', padding: '0.5rem 1.1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#d4855a' }}>Honest talk for people building something on the side 👇</span>
            </div>

            <h1 style={{ fontWeight: 900, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'white' }}>
              Your side hustle<br />
              <span style={{ color: '#d4855a' }}>will probably work.</span><br />
              <span style={{ fontSize: '0.6em', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0' }}>If you do the right things.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.85, maxWidth: '520px', marginBottom: '1.25rem', fontWeight: 300 }}>
              The businesses that make it aren't the most talented. They're the ones doing small, daily, high-value actions — consistently. Not trying to do everything at once.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.85, maxWidth: '520px', marginBottom: '2.5rem', fontWeight: 300 }}>
              A website is one of those actions. Get it done — properly — and stop thinking about it.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#d4855a', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1rem', padding: '1.1rem 2.4rem', borderRadius: '6px', textDecoration: 'none', boxShadow: '0 4px 24px rgba(212,133,90,0.4)', transition: 'transform 0.15s' }}>
                Get My Website Done →
              </a>
              <a href="#tips" style={{ display: 'inline-block', background: 'transparent', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.25)', fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '1rem 1.8rem', borderRadius: '6px', textDecoration: 'none' }}>
                Daniel's Tips ↓
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem', fontWeight: 300 }}>
              $499 USD one-off · $20 USD/month hosting · 2-yr min · Live in 7 days
            </p>
          </div>
        </div>
        <style>{`@media (max-width: 800px) { .hero-pottery { display: none; } }`}</style>
      </section>

      {/* ── DANIEL + TIPS ── */}
      <section id="tips" style={{ padding: '6rem 1.5rem', background: '#ffffff', borderTop: '1px solid #f0e8e0' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem', alignItems: 'start' }} className="daniel-tips-grid">

          {/* Daniel photo */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '2px solid #d4855a', boxShadow: '0 24px 80px rgba(212,133,90,0.2)' }}>
              <Image src="/daniel-ryan.jpg" alt="Daniel Ryan" width={400} height={500} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              <div style={{ background: 'linear-gradient(to top, rgba(26,14,8,0.97) 40%, transparent)', padding: '1.75rem 1.5rem 1.5rem', marginTop: '-80px', position: 'relative' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'white' }}>Daniel Ryan</div>
                <div style={{ color: '#d4855a', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.04em' }}>Founder · MoveX Media</div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4855a', marginBottom: '0.75rem' }}>From Daniel</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em', color: '#1a0e08' }}>
              The honest truth about<br />
              <span style={{ color: '#d4855a' }}>side hustles that actually work</span>
            </h2>

            <p style={{ color: '#6b4f3a', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.5rem' }}>
              I built Move Physiotherapy from a single room into a three-location business. Before MoveX. While running a clinic. I know what it feels like to be building something on the side with limited time, limited money, and a long list of things to figure out.
            </p>
            <p style={{ color: '#6b4f3a', fontSize: '0.95rem', lineHeight: 1.85, fontWeight: 300, marginBottom: '2.5rem' }}>
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
                <div key={t.num} style={{ display: 'flex', gap: '1.25rem', padding: '1.25rem', background: '#fdf8f5', borderRadius: '12px', border: '1px solid #f0e8e0' }}>
                  <div style={{ fontWeight: 900, fontSize: '0.7rem', color: '#d4855a', letterSpacing: '0.1em', minWidth: '28px', marginTop: '3px', opacity: 0.8 }}>{t.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.3rem', color: '#1a0e08' }}>{t.tip}</div>
                    <div style={{ color: '#6b4f3a', fontSize: '0.84rem', fontWeight: 300, lineHeight: 1.6 }}>{t.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#d4855a', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '0.95rem', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(212,133,90,0.35)' }}>
              Book a Free Call with Daniel →
            </a>
          </div>
        </div>
        <style>{`@media (max-width: 820px) { .daniel-tips-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
      </section>

      {/* ── FRANK TRUTH SECTION ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#fdf8f5', borderTop: '1px solid #f0e8e0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4855a', marginBottom: '0.75rem' }}>Let's be honest</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a0e08' }}>
              You have two bad options.<br />
              <span style={{ color: '#d4855a' }}>And one good one.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="options-grid">

            {/* Bad option 1 */}
            <div style={{ background: 'white', border: '1px solid #fde8e0', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>😩</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#1a0e08' }}>Do it yourself on Wix</div>
              <p style={{ color: '#6b4f3a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                10 hours of your weekend. A site that looks like a template. Loads slowly. Ranks nowhere. And you're back tweaking it every month instead of building your actual business.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#c0392b', fontWeight: 600 }}>
                ~$5/hr value of your time × 10+ hours = already cost you more than our rate
              </div>
            </div>

            {/* Bad option 2 */}
            <div style={{ background: 'white', border: '1px solid #fde8e0', borderRadius: '16px', padding: '2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>💸</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#1a0e08' }}>Pay a big agency</div>
              <p style={{ color: '#6b4f3a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                $5,000–$15,000 for a side project that's making $0 right now. You'll get handed to a junior designer you've never spoken to, in an office overseas. Then charged again to change a typo.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#c0392b', fontWeight: 600 }}>
                Way too much risk for a business that hasn't proven itself yet
              </div>
            </div>

            {/* Good option */}
            <div style={{ background: 'white', border: '2px solid #d4855a', borderRadius: '16px', padding: '2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #d4855a, #c4714a)', color: 'white', fontSize: '0.65rem', fontWeight: 900, padding: '0.3rem 1.1rem', borderRadius: '20px', whiteSpace: 'nowrap', letterSpacing: '0.06em' }}>THIS ONE</div>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: '#1a0e08' }}>MoveX — built for side hustles</div>
              <p style={{ color: '#6b4f3a', fontSize: '0.88rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
                $499 USD. Done in 7 days. You speak directly with Daniel — not a tech farm. Fast, SEO-ready, mobile-first. Cheap enough that you don't need to stress about it.
              </p>
              <div style={{ fontSize: '0.78rem', color: '#d4855a', fontWeight: 600 }}>
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
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4855a', marginBottom: '0.75rem' }}>What you get</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1a0e08' }}>
              A proper website.<br /><span style={{ color: '#d4855a' }}>Not a template.</span>
            </h2>
            <p style={{ color: '#6b4f3a', fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, maxWidth: '560px', marginTop: '1rem' }}>
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
              <div key={f.title} style={{ background: '#fdf8f5', border: '1px solid #f0e8e0', borderRadius: '14px', padding: '1.75rem', transition: 'border-color 0.2s' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', color: '#1a0e08' }}>{f.title}</div>
                <p style={{ color: '#6b4f3a', fontSize: '0.85rem', lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div style={{ background: 'linear-gradient(135deg, #2a1505, #3d1f08)', borderRadius: '16px', padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d4855a', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>3-page website · Live in 7 days</div>
              <div style={{ fontWeight: 900, fontSize: '3rem', lineHeight: 1, color: '#d4855a' }}>$499 <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>USD</span></div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '0.4rem', fontWeight: 300 }}>+ $20 USD/month hosting · 2-year minimum hosting commitment</div>
            </div>
            <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#d4855a', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1rem', padding: '1rem 2.2rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(212,133,90,0.4)' }}>Start Today →</a>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ padding: '4rem 1.5rem 6rem', background: '#fdf8f5', borderTop: '1px solid #f0e8e0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d4855a', marginBottom: '0.75rem' }}>Real work</p>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', lineHeight: 1.2, marginBottom: '2.5rem', letterSpacing: '-0.02em', color: '#1a0e08' }}>
            This is what $499 gets you.
          </h2>

          {/* Move Physio - hero */}
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(91,196,245,0.2)', marginBottom: '1.5rem', background: '#0a1628' }}>
            <Image src="/work-move-physio.png" alt="Move Physiotherapy Website" width={1200} height={680} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(6,13,24,0.95), transparent)', padding: '2.5rem 2rem 1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#5bc4f5', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Move Physiotherapy & Fitness</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontWeight: 300 }}>PageSpeed 100 · #1 Google ranking · Three-location business</div>
                </div>
                <a href="https://movephysio.com.au" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'rgba(91,196,245,0.15)', border: '1px solid rgba(91,196,245,0.4)', color: '#5bc4f5', padding: '0.55rem 1.2rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.78rem', textDecoration: 'none' }}>
                  View Live →
                </a>
              </div>
            </div>
          </div>

          {/* Hexa — homepage only */}
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #f0e8e0', background: 'white' }}>
            <Image src="/work-hexa-1.png" alt="Hexa Health Hub" width={600} height={380} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ padding: '1rem 1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.2rem', color: '#1a0e08' }}>Hexa Health Hub</div>
              <div style={{ color: '#6b4f3a', fontSize: '0.78rem', fontWeight: 300 }}>Premium service business · Perth, WA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '6rem 1.5rem 7rem', textAlign: 'center', background: 'linear-gradient(135deg, #1a0e08 0%, #2a1505 50%, #1a0e08 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(212,133,90,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: '660px', margin: '0 auto' }}>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.03em', color: 'white' }}>
            You've been meaning to start.<br />
            <span style={{ color: '#d4855a' }}>This is the day.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            Book a free 15-minute call. I'll ask what your business does, and get you a website that works for it — in a week. That's it.
          </p>
          <a href={BOOKING_URL} style={{ display: 'inline-block', background: '#d4855a', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', padding: '1.25rem 3rem', borderRadius: '8px', textDecoration: 'none', boxShadow: '0 4px 32px rgba(212,133,90,0.45)', marginBottom: '1rem' }}>
            Book My Free Call with Daniel →
          </a>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['$499 USD one-off', 'Live in 7 days', '$20/mo · 2yr min', '30-day money back'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontWeight: 300 }}>
                <span style={{ color: '#d4855a', fontSize: '0.7rem' }}>✓</span> {item}
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
