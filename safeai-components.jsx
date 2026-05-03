// SafeAI — shared components, tokens, icons
// Exported to window at bottom

/* ── Tokens ── */
const T = {
  teal:       '#1B9AAA',
  tealLight:  '#E6F4F6',
  tealDark:   '#147a87',
  navy:       '#1B3A6B',
  navyDark:   '#122849',
  charcoal:   '#3F4B56',
  ink:        '#2D3640',
  muted:      '#7A8590',
  cream:      '#F4F7F9',
  white:      '#FFFFFF',
};

/* ── Base styles injected once ── */
if (!document.getElementById('safeai-base')) {
  const s = document.createElement('style');
  s.id = 'safeai-base';
  s.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { font-family: 'Poppins', sans-serif; color: ${T.ink}; background: ${T.white}; }
    :focus-visible { outline: 2px solid ${T.teal}; outline-offset: 2px; }

    .sa-btn-primary {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: ${T.teal}; color: #fff; font-family: 'Poppins', sans-serif;
      font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 6px;
      border: none; cursor: pointer; text-decoration: none; transition: background 0.18s, transform 0.12s;
      line-height: 1;
    }
    .sa-btn-primary:hover { background: ${T.tealDark}; transform: translateY(-1px); }

    .sa-btn-outline {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: transparent; color: ${T.white}; font-family: 'Poppins', sans-serif;
      font-weight: 600; font-size: 15px; padding: 13px 28px; border-radius: 6px;
      border: 2px solid rgba(255,255,255,0.55); cursor: pointer; text-decoration: none;
      transition: border-color 0.18s, background 0.18s;
    }
    .sa-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

    .sa-btn-ghost {
      display: inline-flex; align-items: center; gap: 6px;
      background: transparent; color: ${T.teal}; font-family: 'Poppins', sans-serif;
      font-weight: 500; font-size: 14px; border: none; cursor: pointer; text-decoration: none;
      transition: color 0.15s;
    }
    .sa-btn-ghost:hover { color: ${T.tealDark}; }

    .sa-card {
      background: ${T.white}; border-radius: 10px;
      border: 1.5px solid #e0e8ed; padding: 24px;
    }
    .sa-card-teal { border-left: 4px solid ${T.teal}; }

    .sa-tag {
      display: inline-block; padding: 3px 10px; border-radius: 20px;
      font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
    }
    .sa-tag-teal { background: ${T.tealLight}; color: ${T.teal}; }
    .sa-tag-navy { background: rgba(27,58,107,0.1); color: ${T.navy}; }
    .sa-tag-white { background: rgba(255,255,255,0.15); color: #fff; }

    .sa-eyebrow {
      font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${T.teal}; margin-bottom: 10px;
    }

    .sa-input {
      flex: 1; padding: 13px 16px; border-radius: 6px;
      border: 1.5px solid #d0dce4; background: ${T.white};
      font-family: 'Poppins', sans-serif; font-size: 14px; color: ${T.ink};
      transition: border-color 0.15s;
    }
    .sa-input::placeholder { color: ${T.muted}; }
    .sa-input:focus { outline: none; border-color: ${T.teal}; }

    /* Smooth section transitions */
    section { position: relative; }

    /* Quiz answer hover */
    .quiz-opt:hover { border-color: ${T.teal} !important; background: ${T.tealLight} !important; }

    /* Blog card hover */
    .blog-card:hover { box-shadow: 0 6px 24px rgba(27,58,107,0.10); transform: translateY(-2px); }
    .blog-card { transition: box-shadow 0.2s, transform 0.2s; }

    /* FAQ item */
    .faq-item { border-bottom: 1px solid #e8edf2; }
    .faq-q { cursor: pointer; padding: 18px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .faq-q:hover .faq-chevron { color: ${T.teal}; }
    .faq-chevron { transition: transform 0.22s; flex-shrink: 0; }
    .faq-a { overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; }

    /* Scrollbar subtle */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #c8d6de; border-radius: 3px; }
  `;
  document.head.appendChild(s);
}

/* ── Simple SVG icons ── */
const Icon = {
  Check: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={T.teal} opacity="0.15"/>
      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke={T.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Arrow: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Plus: ({ open }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transition: 'transform 0.22s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
      <path d="M10 4v12M4 10h12" stroke={T.teal} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  CheckCircle: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill={T.tealLight}/>
      <path d="M14 25l7 7 13-14" stroke={T.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="11" rx="2" stroke={T.muted} strokeWidth="1.2"/>
      <path d="M1 6h12M5 1v2M9 1v2" stroke={T.muted} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke={T.muted} strokeWidth="1.2"/>
      <path d="M7 4v3.5l2 2" stroke={T.muted} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  LinkedIn: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="1.8"/>
    </svg>
  ),
  Facebook: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Instagram: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill={color}/>
    </svg>
  ),
};

/* ── Navbar ── */
function Navbar({ tweaks }) {
  const R = React;
  const [scrolled, setScrolled] = R.useState(false);
  const [mobileOpen, setMobileOpen] = R.useState(false);

  R.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Problem','Quiz','Free tools','Guides','Blog','About'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 1px 12px rgba(27,58,107,0.08)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill={T.tealLight}/>
            <rect x="8" y="10" width="12" height="10" rx="3" fill="none" stroke={T.teal} strokeWidth="1.6"/>
            <circle cx="11" cy="14" r="1.2" fill={T.teal}/>
            <circle cx="17" cy="14" r="1.2" fill={T.teal}/>
            <path d="M11 17.5c.8.8 2 1 3 .8s2-.8 3-1.8" stroke={T.teal} strokeWidth="1.2" strokeLinecap="round"/>
            <line x1="14" y1="7" x2="14" y2="10" stroke={T.teal} strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="14" cy="6.5" r="1" fill={T.teal}/>
          </svg>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: scrolled ? T.charcoal : T.white, letterSpacing: '-0.01em' }}>
            Safe<span style={{ color: T.teal }}>AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`}
              style={{ fontSize: 14, fontWeight: 500, color: scrolled ? T.charcoal : T.white, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={e => e.target.style.color = T.teal}
              onMouseLeave={e => e.target.style.color = scrolled ? T.charcoal : T.white}
            >{l}</a>
          ))}
          <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer" className="sa-btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
            Book a call
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section id="hero" style={{ background: T.navy, minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>
      {/* Subtle dot-grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }}></div>
      {/* Teal arc shape bottom-right */}
      <div style={{
        position: 'absolute', bottom: -80, right: -80, width: 420, height: 420,
        borderRadius: '50%', background: T.teal, opacity: 0.07, zIndex: 0,
        pointerEvents: 'none',
      }}></div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 24px 80px', position: 'relative', zIndex: 1 }}>
        <span className="sa-tag sa-tag-white" style={{ marginBottom: 20, display: 'inline-block' }}>
          For Irish small businesses, schools &amp; community organisations
        </span>

        <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 700, color: T.white, lineHeight: 1.1, marginBottom: 20, maxWidth: 780, textWrap: 'balance' }}>
          Using AI in your business?
        </h1>
        <p style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: T.teal, lineHeight: 1.3, marginBottom: 20, maxWidth: 620 }}>
          You may already have legal obligations.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>
          The EU AI Act is here. Even everyday use of ChatGPT, Canva, or Midjourney can create legal obligations. SafeAI helps Irish organisations use AI confidently — and sleep at night.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#quiz" className="sa-btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
            Take the 2-minute check
          </a>
          <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer" className="sa-btn-outline" style={{ fontSize: 16, padding: '14px 32px' }}>
            Book a call with Marcela
          </a>
        </div>

        {/* Footer strip */}
        <div style={{ display: 'flex', gap: 24, marginTop: 52, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
          {['Cork, Ireland', 'English & Polish', 'safeai.ie'].map(item => (
            <span key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Problem Section ── */
function ProblemSection() {
  const problems = [
    { text: 'Asked ChatGPT to "write me a customer email"' },
    { text: 'Pasted client information into an AI tool to "improve it"' },
    { text: 'Generated Instagram captions or product descriptions with AI' },
    { text: 'Created images using Midjourney, ChatGPT, or Canva Magic' },
    { text: 'Asked AI to summarise documents, meetings, or messages' },
  ];
  return (
    <section id="problem" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">The Problem</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 12, textWrap: 'balance' }}>
            If you've ever done any of this, you're already using AI
          </h2>
          <p style={{ fontSize: 16, color: T.muted }}>That feels normal. Sometimes it is. Sometimes it is not.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
          {problems.map((p, i) => (
            <div key={i} className="sa-card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.teal, flexShrink: 0, marginTop: 8 }}></div>
              <span style={{ fontSize: 14, color: T.ink, lineHeight: 1.6 }}>{p.text}</span>
            </div>
          ))}
        </div>

        <div style={{ background: T.tealLight, borderLeft: `4px solid ${T.teal}`, borderRadius: '0 10px 10px 0', padding: '20px 24px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: T.charcoal, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>The Quiet Bit</p>
          <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.8 }}>
            You might be sharing customer data without realising. AI-generated content can accidentally copy existing work. Some tools store and reuse what you type. And under the EU AI Act, you are legally responsible for what AI produces on your behalf. <strong>Even if you are a one-person business.</strong>
          </p>
        </div>

        <p style={{ textAlign: 'center', marginTop: 40, fontSize: 20, fontStyle: 'italic', fontWeight: 300, color: T.charcoal }}>
          You don't need to stop using AI. You just need to use it properly.
        </p>
      </div>
    </section>
  );
}

/* ── Timeline Section ── */
function TimelineSection() {
  const steps = [
    { date: 'Aug 2024', label: 'Act in force', note: 'Prohibited practices banned', done: true },
    { date: 'Feb 2025', label: 'GPAI obligations', note: 'General-purpose AI rules', done: true },
    { date: 'Aug 2025', label: 'High-risk rules', note: 'Most SME obligations apply', done: false },
    { date: 'Aug 2026', label: 'Full enforcement', note: 'All articles enforceable', done: false },
  ];
  return (
    <section id="timeline" style={{ background: T.tealLight, padding: '72px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p className="sa-eyebrow">EU AI Act — Where We Are Now</p>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: T.charcoal, marginBottom: 8, textWrap: 'balance' }}>
          The law is already in motion
        </h2>
        <p style={{ fontSize: 15, color: T.muted, marginBottom: 48 }}>Here's what's in force — and what's coming next for your organisation.</p>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 24, left: '12.5%', right: '12.5%', height: 3, background: T.teal, opacity: 0.2, borderRadius: 2 }}></div>
          <div style={{ position: 'absolute', top: 24, left: '12.5%', width: '25%', height: 3, background: T.teal, opacity: 0.8, borderRadius: 2 }}></div>

          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: s.done ? T.teal : T.white,
                border: `3px solid ${s.done ? T.teal : '#c0ced8'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: s.done ? `0 0 0 6px ${T.tealLight}` : 'none',
                transition: 'all 0.2s',
              }}>
                {s.done
                  ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#c0ced8' }}></div>
                }
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: s.done ? T.teal : T.muted }}>{s.date}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.charcoal, textAlign: 'center' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: T.muted, textAlign: 'center', lineHeight: 1.5 }}>{s.note}</div>
              {i === 2 && <span className="sa-tag sa-tag-teal">Coming up</span>}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <span style={{ fontSize: 15, color: T.ink }}>Not sure where your organisation stands? </span>
          <a href="#quiz" style={{ fontSize: 15, color: T.teal, fontWeight: 600, textDecoration: 'none' }}>Take the 2-minute check →</a>
        </div>
      </div>
    </section>
  );
}

/* ── Quiz Section ── */
function QuizSection() {
  const R = React;
  const questions = [
    { q: 'Are you or your staff generating images with AI for marketing or social media?', opts: ['Yes, regularly','Sometimes','Not sure'] },
    { q: 'Has anyone pasted customer information or internal documents into an AI tool?', opts: ['Yes','Maybe','Definitely not'] },
    { q: 'Do you have a written policy on what staff can and cannot put into AI tools?', opts: ['Yes, written and signed','We talked about it once','No'] },
    { q: 'Have you trained your team on safe AI use in the last twelve months?', opts: ['Yes, with attendance recorded','Informally','No'] },
  ];

  const [step, setStep] = R.useState(0);
  const [answers, setAnswers] = R.useState([null,null,null,null]);
  const [email, setEmail] = R.useState('');
  const [submitted, setSubmitted] = R.useState(false);

  function pick(opt) {
    const a = [...answers]; a[step] = opt;
    setAnswers(a);
    if (step < questions.length - 1) setStep(step + 1);
    else setStep(questions.length);
  }

  function risk() {
    let score = 0;
    answers.forEach((a, i) => {
      if (!a) return;
      const idx = questions[i].opts.indexOf(a);
      if (i <= 1) { if (idx === 0) score += 1; else if (idx === 1) score += 0.5; }
      else { if (idx === 0) score -= 1; else if (idx === 1) score += 0.5; else score += 1; }
    });
    if (score <= 0) return 'Low';
    if (score <= 2) return 'Medium';
    return 'High';
  }

  const riskColors = { Low: { bg: '#ECFDF5', text: '#065F46', border: '#34D399' }, Medium: { bg: '#FFFBEB', text: '#92400E', border: '#FBBF24' }, High: { bg: '#FEF2F2', text: '#991B1B', border: '#F87171' } };
  const riskText = {
    Low: "Your organisation appears to have some awareness of AI risks. A quick review of your practices would help confirm you're on the right track.",
    Medium: "Your AI use creates some legal risk under the EU AI Act. The good news: most gaps are straightforward to close with a written policy and basic training.",
    High: "Your current AI practices create meaningful risk under the EU AI Act. This is common and fixable. A structured approach to AI governance will address most of your exposure."
  };

  return (
    <section id="quiz" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="sa-eyebrow">Self-Assessment</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>Find out your AI exposure in 2 minutes</h2>
          <p style={{ fontSize: 15, color: T.muted }}>4 questions. Instant result. Free checklist to your inbox.</p>
        </div>

        <div style={{ background: T.white, border: `2px solid ${T.teal}`, borderRadius: 14, padding: '32px 36px', boxShadow: '0 8px 32px rgba(27,154,170,0.10)' }}>
          {step < questions.length ? (
            <>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: T.muted }}>Step {step + 1} of {questions.length}</span>
                  <span style={{ fontSize: 12, color: T.teal, fontWeight: 600 }}>{Math.round(((step + 1) / questions.length) * 100)}%</span>
                </div>
                <div style={{ height: 5, background: T.cream, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: '100%', background: T.teal, borderRadius: 3, transition: 'width 0.4s ease' }}></div>
                </div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: T.charcoal, marginBottom: 20, lineHeight: 1.5 }}>{questions[step].q}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {questions[step].opts.map(o => (
                  <button key={o} className="quiz-opt" onClick={() => pick(o)}
                    style={{ padding: '14px 18px', background: T.cream, border: `1.5px solid #d8e4eb`, borderRadius: 8, fontSize: 14, color: T.ink, textAlign: 'left', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'all 0.15s' }}>
                    {o}
                  </button>
                ))}
              </div>
            </>
          ) : !submitted ? (
            <>
              {(() => { const r = risk(); const c = riskColors[r]; return (
                <>
                  <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 24, background: c.bg, color: c.text, border: `1.5px solid ${c.border}`, fontSize: 14, fontWeight: 600 }}>
                      {r} exposure
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.8, marginBottom: 28 }}>{riskText[r]}</p>
                </>
              )})()}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Send me my full report and the free Irish SME AI Risk Checklist</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input type="email" className="sa-input" placeholder="your@email.ie" value={email} onChange={e => setEmail(e.target.value)} />
                  <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 20px', flexShrink: 0 }} onClick={() => email && setSubmitted(true)}>
                    Send it <Icon.Arrow size={16} color="#fff" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <Icon.CheckCircle size={56} />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: T.charcoal, margin: '16px 0 8px' }}>Check your inbox</h3>
              <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7 }}>The checklist is on its way. We'll follow up with one practical email next week, then leave you alone unless you ask us not to.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Services Section ── */
function ServicesSection() {
  const services = [
    { title: 'Practical AI Safety Workshop', price: 'From €800', cta: 'Book a workshop', href: 'https://cal.com/safeai/workshop', desc: '2.5-hour on-site or remote workshop for teams of up to 20. You leave with an AI Use Inventory, an Acceptable Use Policy, and your Article 4 compliance one-pager.' },
    { title: 'AI Readiness Assessment', price: 'From €1,500', cta: 'Book an assessment', href: 'https://cal.com/safeai/assessment', desc: '1–2 day engagement. Written report with prioritised risks and a clear remediation plan. The thing to do before a regulator turns up.' },
  ];
  return (
    <section id="services" style={{ background: T.navy, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p className="sa-eyebrow" style={{ color: T.teal }}>Work With Marcela</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.white, marginBottom: 10, textWrap: 'balance', maxWidth: 560 }}>
          Get this done in a single afternoon
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 48 }}>For organisations that want a real human in the room, not another PDF.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: T.white, borderRadius: 12, padding: '28px 28px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: T.ink, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
              <p style={{ fontSize: 20, fontWeight: 700, color: T.charcoal, marginBottom: 20 }}>{s.price}</p>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="sa-btn-primary" style={{ fontSize: 14, padding: '12px 22px' }}>{s.cta}</a>
            </div>
          ))}
        </div>

        {/* Monthly retainer */}
        <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: T.white, marginBottom: 4 }}>Monthly AI Literacy Maintenance</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Monthly call, quarterly updates, annual policy review. Keep your team confident and compliant.</div>
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: T.white }}>From €200/mo</span>
            <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer" className="sa-btn-outline" style={{ fontSize: 14, padding: '11px 22px' }}>Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Free Tools Section ── */
function FreeToolsSection() {
  const R = React;
  const [modal, setModal] = R.useState(null);
  const [emailVal, setEmailVal] = R.useState('');
  const [sent, setSent] = R.useState(null);

  const tools = [
    { title: 'The Irish SME AI Risk Checklist', type: 'PDF · fillable', desc: 'A 10-point guide to identifying hidden risks in your daily AI use.' },
    { title: 'AI Image Safety Guide', type: 'PDF', desc: 'Know whether your AI-generated marketing content is safe to publish under Irish copyright and EU AI Act rules.' },
    { title: 'SafeAI Team Policy Template', type: 'Editable .docx', desc: 'A simple one-page Acceptable Use Policy you can give your team today.' },
  ];

  return (
    <section id="free-tools" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">Free Tools</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>Designed for your desk, not your lawyer</h2>
          <p style={{ fontSize: 15, color: T.muted, maxWidth: 480, margin: '0 auto' }}>Each download is sent to your inbox. We'll email you twice more, then leave you alone.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {tools.map((t, i) => (
            <div key={i} className="sa-card sa-card-teal">
              <span className="sa-tag sa-tag-teal" style={{ marginBottom: 14, display: 'inline-block' }}>{t.type}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 8 }}>{t.title}</h3>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 18 }}>{t.desc}</p>
              <button onClick={() => setModal(i)} className="sa-btn-ghost" style={{ fontSize: 14 }}>
                Get it <Icon.Arrow size={14} color={T.teal} />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal !== null && (
          <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(27,58,107,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: T.white, borderRadius: 14, padding: '32px 32px 28px', maxWidth: 480, width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <button onClick={() => { setModal(null); setEmailVal(''); setSent(null); }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: T.muted }}>×</button>
              {sent === modal ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <Icon.CheckCircle size={48} />
                  <p style={{ fontSize: 16, fontWeight: 600, color: T.charcoal, marginTop: 12 }}>On its way!</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 20 }}>{tools[modal].title}</h3>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Where should we send it?</label>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <input type="email" className="sa-input" placeholder="your@email.ie" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                    <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 18px', flexShrink: 0 }} onClick={() => emailVal && setSent(modal)}>Send</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Guides Section ── */
function GuidesSection() {
  const R = React;
  const [freeModal, setFreeModal] = R.useState(false);
  const [emailVal, setEmailVal] = R.useState('');
  const [sent, setSent] = R.useState(false);

  const guides = [
    { badge: 'Free', badgeStyle: 'sa-tag-teal', title: 'EU AI Act for Irish Small Organisations', desc: 'Plain-English field guide, 17 pages.', price: 'Free with email', action: () => setFreeModal(true), cta: 'Get it free' },
    { badge: '€19', badgeStyle: 'sa-tag-navy', title: 'AI for Sole Traders', desc: 'Use ChatGPT, Claude, and Canva Magic to run your business like a team of ten — without the legal headaches.', price: '€19', action: () => {}, cta: 'Order' },
    { badge: '€39', badgeStyle: 'sa-tag-navy', title: 'Educational AI Governance', desc: 'Article 4 framework for primary, post-primary, and further education. Includes staff policy template.', price: '€39', action: () => {}, cta: 'Order' },
  ];

  return (
    <section id="guides" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">Companion Guides</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>When you want to go deeper</h2>
          <p style={{ fontSize: 15, color: T.muted }}>The working documents we hand to clients during workshops.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {guides.map((g, i) => (
            <div key={i} className="sa-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={`sa-tag ${g.badgeStyle}`} style={{ marginBottom: 14, display: 'inline-block', width: 'fit-content' }}>{g.badge}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 8, flex: 1 }}>{g.title}</h3>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>{g.desc}</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 16 }}>{g.price}</p>
              <button onClick={g.action} className="sa-btn-ghost" style={{ fontSize: 14, alignSelf: 'flex-start', border: `1.5px solid ${T.teal}`, borderRadius: 6, padding: '8px 16px', color: T.teal }}>{g.cta}</button>
            </div>
          ))}
        </div>
      </div>

      {freeModal && (
        <div onClick={() => setFreeModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(27,58,107,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: T.white, borderRadius: 14, padding: '32px', maxWidth: 480, width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <button onClick={() => { setFreeModal(false); setEmailVal(''); setSent(false); }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: T.muted }}>×</button>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Icon.CheckCircle size={48} />
                <p style={{ fontSize: 16, fontWeight: 600, color: T.charcoal, marginTop: 12 }}>On its way!</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 20 }}>The EU AI Act for Irish Small Organisations</h3>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Where should we send it?</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input type="email" className="sa-input" placeholder="your@email.ie" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                  <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 18px', flexShrink: 0 }} onClick={() => emailVal && setSent(true)}>Send</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ── Blog Section ── */
function BlogSection() {
  function fmtDate(d) {
    return new Date(d).toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  const posts = [
    { slug: 'eu-ai-act-irish-smes', cat: 'EU AI Act', title: 'EU AI Act: What Irish SMEs Need to Know in 2025', excerpt: "The EU AI Act came into force in August 2024. Here's a plain-English breakdown of what it means for your small business — and what you need to do right now.", date: '2024-12-15', time: '5 min', featured: true },
    { slug: 'chatgpt-workplace-policy', cat: 'Policies', title: 'Creating a ChatGPT Workplace Policy: A Step-by-Step Guide', excerpt: "Your staff are already using AI. Here's how to create a sensible policy that protects your business without killing productivity.", date: '2024-12-08', time: '7 min', featured: false },
    { slug: 'gdpr-ai-tools', cat: 'GDPR', title: 'GDPR and AI Tools: Your Compliance Checklist', excerpt: "Using AI tools with customer data? Make sure you're ticking these GDPR boxes.", date: '2024-11-28', time: '6 min', featured: false },
    { slug: 'ai-risk-assessment', cat: 'Risk Management', title: 'How to Run an AI Risk Assessment for Your Small Business', excerpt: "You don't need a compliance team. Here's a practical framework any SME owner can follow.", date: '2024-11-20', time: '8 min', featured: false },
  ];
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="blog" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p className="sa-eyebrow">From the Blog</p>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal }}>Practical AI compliance insights</h2>
            <p style={{ fontSize: 15, color: T.muted, marginTop: 6 }}>No jargon, no scare tactics. Just clear guidance for Irish organisations.</p>
          </div>
          <a href="/blog" style={{ fontSize: 14, color: T.teal, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            View all articles <Icon.Arrow size={14} color={T.teal} />
          </a>
        </div>

        {/* Featured post */}
        <div className="sa-card blog-card" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 32, marginBottom: 20, padding: '28px 32px', alignItems: 'center' }}>
          <div>
            <span className="sa-tag sa-tag-teal" style={{ marginBottom: 12, display: 'inline-block' }}>{featured.cat}</span>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: T.charcoal, marginBottom: 10, lineHeight: 1.4 }}>{featured.title}</h3>
            <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>{featured.excerpt}</p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: T.muted }}><Icon.Calendar />{fmtDate(featured.date)}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: T.muted }}><Icon.Clock />{featured.time} read</span>
              <a href={`/blog/${featured.slug}`} style={{ fontSize: 13, color: T.teal, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}>Read article <Icon.Arrow size={12} color={T.teal} /></a>
            </div>
          </div>
          <div style={{
            height: 160, borderRadius: 8,
            background: `repeating-linear-gradient(45deg, #e8edf2 0px, #e8edf2 3px, #f4f7f9 3px, #f4f7f9 14px)`,
            border: '1.5px dashed #b0bec5', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: T.muted, fontSize: 12, fontStyle: 'italic'
          }}>featured image</div>
        </div>

        {/* 3-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {rest.map((p, i) => (
            <div key={i} className="sa-card blog-card" style={{ padding: '20px 22px' }}>
              <span className="sa-tag sa-tag-teal" style={{ marginBottom: 10, display: 'inline-block' }}>{p.cat}</span>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: T.charcoal, lineHeight: 1.5, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 12, color: T.muted, lineHeight: 1.6, marginBottom: 14 }}>{p.excerpt}</p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: T.muted }}><Icon.Clock />{p.time} read</span>
                <a href={`/blog/${p.slug}`} style={{ fontSize: 12, color: T.teal, fontWeight: 600, textDecoration: 'none' }}>Read →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
function AboutSection() {
  const creds = ['5 years in the European Parliament','15 years at Microsoft and VMware',"Master's in EU Legal System (Poland)",'AI in Business & Digital Transformation','English and Polish'];
  return (
    <section id="about" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div style={{ aspectRatio: '3/4', background: T.cream, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, border: '1.5px dashed #b0bec5', color: T.muted, fontSize: 13, fontStyle: 'italic', textAlign: 'center', padding: 16 }}>
            Marcela's photograph
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {creds.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Icon.Check size={18} />
                <span style={{ fontSize: 13, color: T.charcoal, lineHeight: 1.5 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="sa-eyebrow">About</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: T.charcoal, marginBottom: 20, textWrap: 'balance' }}>
            I'm Marcela. I make complex things make sense to ordinary people.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, color: T.ink, lineHeight: 1.85 }}>
            <p>I started in the European Parliament, where I learned that the difference between a regulation working and a regulation failing is whether someone bothered to write it in plain English. Then I spent fifteen years in big tech, at Microsoft and VMware, mostly translating engineer-speak into something the rest of the company could act on.</p>
            <blockquote style={{ borderLeft: `4px solid ${T.teal}`, paddingLeft: 20, fontStyle: 'italic', fontWeight: 300, fontSize: 17, color: T.charcoal, lineHeight: 1.7 }}>
              "AI is a powerful tool. Used with humans in mind, it can genuinely empower a small business. Used carelessly, it can quietly risk everything you've built — your customer trust, your data, your reputation."
            </blockquote>
            <p>I hold a Master's in Public Administration in the European Legal System. I am also completing programmes in AI in Business and Digital Transformation through the EU-funded Digital4Business consortium.</p>
            <p style={{ fontSize: 13, fontStyle: 'italic', color: T.teal }}>I run SafeAI from Cork. Bilingual English and Polish. No jargon, no formality, no upselling.</p>
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 26px' }}>Book a call</a>
            <a href="#free-tools" className="sa-btn-ghost" style={{ fontSize: 14, padding: '14px 0', border: `1.5px solid ${T.teal}`, borderRadius: 6, padding: '13px 22px' }}>Download a free guide</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
function FAQSection() {
  const R = React;
  const [open, setOpen] = R.useState(null);
  const faqs = [
    { q: 'Do I actually have EU AI Act obligations as a small business?', a: 'Most likely, yes. If you use AI tools commercially — including general-purpose tools like ChatGPT — the EU AI Act imposes obligations on you. The most immediate is Article 4, which requires AI literacy for all staff using AI in their work. SafeAI provides general information and training; for legal advice specific to your situation, consult a solicitor.' },
    { q: 'Is SafeAI a law firm?', a: 'No. SafeAI provides practical guidance, training, and templates to help your organisation understand and act on its obligations. We are not a law firm or an auditor. Our materials are not legal advice.' },
    { q: 'How long does a workshop take?', a: '2.5 hours, on-site or remote. We work with teams of up to 20 people. By the end you have your AI Use Inventory, your Acceptable Use Policy, and your Article 4 one-pager — done.' },
    { q: 'What if I only use ChatGPT occasionally?', a: "Even occasional use can create obligations, particularly around data protection (GDPR) and transparency. The EU AI Act's Article 4 AI literacy requirement applies to anyone using AI in a commercial context — there's no minimum usage threshold." },
    { q: 'Do you work with schools and community organisations?', a: 'Yes — education and community organisations are two of our three core audiences. We have a specific guide for educational settings (primary, post-primary, and further education) and experience working with non-profits and GAA clubs.' },
    { q: 'Can I get something for free before committing?', a: "Absolutely. Start with the 2-minute self-assessment above, or download any of the free tools in the Free Tools section. You'll get a practical sense of where your organisation stands with no obligation." },
  ];

  return (
    <section id="faq" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">FAQ</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal }}>Common questions</h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontSize: 15, fontWeight: 600, color: T.charcoal, lineHeight: 1.5 }}>{f.q}</span>
                <span className="faq-chevron"><Icon.Plus open={open === i} /></span>
              </div>
              <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0, paddingBottom: open === i ? 20 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease, padding-bottom 0.3s ease' }}>
                <p style={{ fontSize: 14, color: T.ink, lineHeight: 1.85 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Strip ── */
function CTAStrip() {
  return (
    <section style={{ background: T.teal, padding: '48px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: T.white, marginBottom: 6 }}>Ready to get this sorted?</h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Take the 2-minute check, download a free guide, or book a call when you're ready.</p>
        </div>
        <div style={{ display: 'flex', gap: 14, flexShrink: 0, flexWrap: 'wrap' }}>
          <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: T.white, color: T.teal, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 6, textDecoration: 'none', transition: 'opacity 0.15s' }}>
            Book a call
          </a>
          <a href="#quiz" className="sa-btn-outline" style={{ fontSize: 15, padding: '12px 28px' }}>Take the check</a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const qlinks = ['Problem','Quiz','Free tools','Guides','Blog','Services','About'];
  return (
    <footer style={{ background: T.navy, padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="14" fill="rgba(27,154,170,0.15)"/>
                <rect x="8" y="10" width="12" height="10" rx="3" fill="none" stroke={T.teal} strokeWidth="1.6"/>
                <circle cx="11" cy="14" r="1.2" fill={T.teal}/>
                <circle cx="17" cy="14" r="1.2" fill={T.teal}/>
                <path d="M11 17.5c.8.8 2 1 3 .8s2-.8 3-1.8" stroke={T.teal} strokeWidth="1.2" strokeLinecap="round"/>
                <line x1="14" y1="7" x2="14" y2="10" stroke={T.teal} strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="14" cy="6.5" r="1" fill={T.teal}/>
              </svg>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 20, color: T.white, letterSpacing: '-0.01em' }}>
                Safe<span style={{ color: T.teal }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>AI Training & Compliance<br />Cork, Ireland</p>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: T.white, marginBottom: 14 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {qlinks.map(l => <a key={l} href={`#${l.toLowerCase().replace(' ','-')}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>{l}</a>)}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: T.white, marginBottom: 14 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:marcela@safeai.ie" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>marcela@safeai.ie</a>
              <a href="https://cal.com/safeai/call" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Book a call ↗</a>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {[
                { icon: <Icon.LinkedIn size={16} color="rgba(255,255,255,0.6)" />, href: 'https://linkedin.com/company/safeai-ie', label: 'LinkedIn' },
                { icon: <Icon.Facebook size={16} color="rgba(255,255,255,0.6)" />, href: 'https://facebook.com/safeai.ie', label: 'Facebook' },
                { icon: <Icon.Instagram size={16} color="rgba(255,255,255,0.6)" />, href: 'https://instagram.com/safeai.ie', label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 34, height: 34, borderRadius: 7, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {['© 2026 SafeAI','marcela@safeai.ie','General information, not legal advice.','Privacy','Terms','Cookies'].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11 }}>·</span>}
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Export everything to window
Object.assign(window, {
  T, Icon, Navbar, HeroSection, ProblemSection, TimelineSection,
  QuizSection, ServicesSection, FreeToolsSection, GuidesSection,
  BlogSection, AboutSection, FAQSection, CTAStrip, Footer
});
