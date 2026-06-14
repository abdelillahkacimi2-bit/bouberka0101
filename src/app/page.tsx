// ════════════════════════════════════════════════════════════════════════════
//  Holingo — الصفحة الرئيسية
//  إعادة تصميم: خلفية بيضاء نقية + إسقاط هولوغرامي + عناصر ثلاثية الأبعاد متحركة
//  المركز الجامعي بمغنية — لسانيات تطبيقية — 2025/2026
// ════════════════════════════════════════════════════════════════════════════
'use client';

import { useRouter } from 'next/navigation';

// ألوان النظام -----------------------------------------------------------------
const CYAN = '#00D4FF';
const PURPLE = '#7B2FBE';
const MAGENTA = '#FF3DAE';

// ─── بطاقة الدور (المنطق محفوظ: التوجيه عند النقر) ───────────────────────────
function RoleCard({
  icon, title, description, color, colorLight, href,
}: {
  icon: string; title: string; description: string;
  color: string; colorLight: string; href: string;
}) {
  const router = useRouter();

  const lift = (el: HTMLDivElement) => {
    el.style.transform = 'translateY(-10px) scale(1.02)';
    el.style.boxShadow = `0 26px 60px ${color}26`;
    el.style.borderColor = `${color}55`;
  };
  const rest = (el: HTMLDivElement) => {
    el.style.transform = 'translateY(0) scale(1)';
    el.style.boxShadow = '0 8px 30px rgba(17,18,42,0.06)';
    el.style.borderColor = 'rgba(17,18,42,0.06)';
  };

  return (
    <div
      className="role-card"
      role="button"
      tabIndex={0}
      aria-label={`${title} — ابدأ التسجيل`}
      onClick={() => router.push(href)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); router.push(href); }
      }}
      onMouseEnter={(e) => lift(e.currentTarget)}
      onMouseLeave={(e) => rest(e.currentTarget)}
      onFocus={(e) => lift(e.currentTarget)}
      onBlur={(e) => rest(e.currentTarget)}
      style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '2px solid rgba(17,18,42,0.06)',
        borderRadius: '24px',
        padding: '40px 30px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        boxShadow: '0 8px 30px rgba(17,18,42,0.06)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* وهج زاوية */}
      <div style={{
        position: 'absolute', top: '-40px', insetInlineEnd: '-40px',
        width: '130px', height: '130px',
        background: `radial-gradient(circle, ${color}14, transparent 70%)`,
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      {/* أيقونة */}
      <div style={{
        width: '74px', height: '74px', margin: '0 auto 20px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        borderRadius: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '32px',
        boxShadow: `0 10px 26px ${color}38`,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '20px',
        color: '#11122A', marginBottom: '10px',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'Cairo, sans-serif', fontSize: '13.5px',
        color: '#5B6478', lineHeight: 1.7, marginBottom: '22px',
      }}>{description}</p>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '11px 26px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        color: 'white', borderRadius: '12px',
        fontFamily: 'Cairo, sans-serif', fontWeight: 600, fontSize: '14px',
        boxShadow: `0 6px 18px ${color}33`,
      }}>
        ابدأ التسجيل <span aria-hidden>←</span>
      </div>
    </div>
  );
}

// ─── بطاقة عضو الفريق ────────────────────────────────────────────────────────
function TeamCard({ name, initials, color }: { name: string; initials: string; color: string }) {
  return (
    <div
      className="team-card"
      style={{
        background: 'rgba(255,255,255,0.9)',
        border: `1px solid ${color}22`,
        borderRadius: '18px', padding: '22px 16px',
        textAlign: 'center', transition: 'all 0.32s ease',
        boxShadow: '0 4px 18px rgba(17,18,42,0.05)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = `0 16px 36px ${color}24`;
        el.style.borderColor = `${color}50`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 4px 18px rgba(17,18,42,0.05)';
        el.style.borderColor = `${color}22`;
      }}
    >
      <div style={{
        width: '56px', height: '56px', margin: '0 auto 12px',
        background: `linear-gradient(135deg, ${color}, ${color}99)`,
        borderRadius: '50%', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'Cairo, sans-serif',
        fontWeight: 800, fontSize: '17px', color: 'white',
        boxShadow: `0 6px 18px ${color}3a`,
      }}>
        {initials}
      </div>
      <p style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: 700, fontSize: '13.5px',
        color: '#11122A', margin: 0, lineHeight: 1.45,
      }}>{name}</p>
    </div>
  );
}

// ─── عنوان القسم (موحّد) ─────────────────────────────────────────────────────
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '44px' }}>
      <h2 style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: 800,
        fontSize: 'clamp(22px, 3.4vw, 34px)', color: '#11122A', marginBottom: sub ? '14px' : '16px',
      }}>{children}</h2>
      {sub && (
        <p style={{
          fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2vw, 16px)',
          color: '#5B6478', lineHeight: 2, maxWidth: '640px', margin: '0 auto',
        }}>{sub}</p>
      )}
      <div style={{
        width: '64px', height: '3px', margin: sub ? '22px auto 0' : '0 auto',
        background: `linear-gradient(90deg, ${CYAN}, ${PURPLE}, ${MAGENTA})`, borderRadius: '2px',
      }} />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  الصفحة
// ════════════════════════════════════════════════════════════════════════════
export default function HomePage() {
  const teamColors = [CYAN, PURPLE, MAGENTA, CYAN, PURPLE, MAGENTA, CYAN, PURPLE];

  const team = [
    { name: 'قاسيمي عبد الإله', initials: 'ق.ع' },
    { name: 'قرشي إلياس',        initials: 'ق.إ' },
    { name: 'المسعود يوسف',      initials: 'م.ي' },
    { name: 'دكالي عائشة',        initials: 'د.ع' },
    { name: 'وهيب وهيبة',         initials: 'و.و' },
    { name: 'زياني سمير',         initials: 'ز.س' },
    { name: 'صمود عبد الرزاق',   initials: 'ص.ع' },
    { name: 'خليد نبيل',          initials: 'خ.ن' },
  ];

  const academicLines = [
    { text: 'الجمهورية الجزائرية الديمقراطية الشعبية', size: '11.5px', weight: 500, color: '#5B6478' },
    { text: 'وزارة التعليم العالي والبحث العلمي',      size: '11.5px', weight: 500, color: '#5B6478' },
    { text: 'المركز الجامعي بمغنية',                    size: '15px',   weight: 800, color: '#11122A' },
    { text: 'معهد الآداب واللغات — قسم اللغة والأدب العربي', size: '12.5px', weight: 600, color: '#374151' },
    { text: 'تخصص: لسانيات تطبيقية   |   السنة الجامعية: 2025–2026', size: '11.5px', weight: 500, color: '#9098A6' },
  ];

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', direction: 'rtl', fontFamily: 'Cairo, sans-serif', overflowX: 'hidden' }}>

      {/* ════════════════ الأنماط والحركات ════════════════ */}
      <style>{`
        :root{ --cyan:${CYAN}; --purple:${PURPLE}; --magenta:${MAGENTA}; }

        @keyframes spinRingA { from { transform: rotateX(74deg) rotateZ(0deg); }   to { transform: rotateX(74deg) rotateZ(360deg); } }
        @keyframes spinRingB { from { transform: rotateX(66deg) rotateZ(360deg); } to { transform: rotateX(66deg) rotateZ(0deg); } }
        @keyframes spinRingC { from { transform: rotateX(82deg) rotateZ(0deg); }   to { transform: rotateX(82deg) rotateZ(360deg); } }
        @keyframes floatY  { 0%,100% { transform: translateY(0); }            50% { transform: translateY(-14px); } }
        @keyframes floatYr { 0%,100% { transform: translateY(0) rotate(0); }  50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes floatYs { 0%,100% { transform: translateY(0) rotate(0); }  50% { transform: translateY(-16px) rotate(-160deg); } }
        @keyframes slowSpin{ from { transform: rotate(0); } to { transform: rotate(360deg); } }
        @keyframes drift {
          0%   { transform: translate(0,0) scale(1);        opacity: .55; }
          33%  { transform: translate(10px,-32px) scale(1.18); opacity: 1; }
          66%  { transform: translate(-8px,-16px) scale(.9);  opacity: .8; }
          100% { transform: translate(0,0) scale(1);        opacity: .55; }
        }
        @keyframes scanMove { 0% { top: 4%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 92%; opacity: 0; } }
        @keyframes shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes fadeUp   { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes basePulse{ 0%,100% { opacity:.5; transform: translateX(-50%) scaleX(1); } 50% { opacity:.85; transform: translateX(-50%) scaleX(1.12); } }
        @keyframes coneFlicker { 0%,100% { opacity:.28; } 45% { opacity:.46; } 55% { opacity:.34; } }
        @keyframes ringPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(0,212,255,.20); } 50% { box-shadow: 0 0 0 14px rgba(0,212,255,0); } }
        @keyframes bobArrow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

        .ringA { animation: spinRingA 11s linear infinite; }
        .ringB { animation: spinRingB 16s linear infinite; }
        .ringC { animation: spinRingC 8s  linear infinite; }
        .floaty  { animation: floatY  6s ease-in-out infinite; }
        .floatyr { animation: floatYr 9s ease-in-out infinite; }
        .floatys { animation: floatYs 11s ease-in-out infinite; }
        .spin    { animation: slowSpin 22s linear infinite; }
        .dot     { animation: drift 7s ease-in-out infinite; }
        .holo-panel-float { animation: floatY 5s ease-in-out infinite; }
        .holo-base  { animation: basePulse 3s ease-in-out infinite; }
        .holo-cone  { animation: coneFlicker 4s ease-in-out infinite; }
        .holo-scan  { animation: scanMove 3.6s linear infinite; }
        .ring-pulse { animation: ringPulse 3s ease-in-out infinite; }
        .arrow-bob  { animation: bobArrow 1.8s ease-in-out infinite; }

        .wordmark {
          background: linear-gradient(120deg, var(--cyan), var(--purple), var(--magenta), var(--cyan));
          background-size: 220% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: shimmer 5s linear infinite;
        }

        .fu0 { animation: fadeUp .7s ease-out forwards; }
        .fu1 { animation: fadeUp .7s ease-out .15s forwards; opacity: 0; }
        .fu2 { animation: fadeUp .7s ease-out .30s forwards; opacity: 0; }
        .fu3 { animation: fadeUp .7s ease-out .45s forwards; opacity: 0; }
        .fu4 { animation: fadeUp .7s ease-out .60s forwards; opacity: 0; }
        .fu5 { animation: fadeUp .7s ease-out .75s forwards; opacity: 0; }

        .scanlines {
          background-image: repeating-linear-gradient(0deg,
            rgba(0,212,255,.14) 0px, rgba(0,212,255,.14) 1px,
            transparent 1px, transparent 4px);
        }

        /* بطاقة هولوغرامية زجاجية */
        .holo-card {
          position: relative;
          background: rgba(255,255,255,0.74);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid rgba(123,47,190,0.14);
          border-radius: 22px;
          box-shadow: 0 12px 40px rgba(17,18,42,0.06);
          overflow: hidden;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
        }
        .holo-card::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--cyan), var(--purple), var(--magenta), transparent);
          opacity: .75;
        }
        .holo-card::after {
          content: ''; position: absolute; top: 0; inset-inline-start: -120%;
          width: 70%; height: 100%; pointer-events: none;
          background: linear-gradient(100deg, transparent, rgba(0,212,255,.09), transparent);
          transition: inset-inline-start .7s ease;
        }
        .holo-card:hover::after { inset-inline-start: 130%; }
        .holo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 52px rgba(0,212,255,0.14);
          border-color: rgba(0,212,255,0.32);
        }

        .role-card:focus-visible { outline: 3px solid var(--cyan); outline-offset: 4px; }
        a:focus-visible { outline: 2px solid var(--cyan); outline-offset: 3px; border-radius: 4px; }

        @media (max-width: 880px) { .hero-floats { display: none; } }
        @media (max-width: 600px) { .acad-sep { display: none; } }

        @media (prefers-reduced-motion: reduce) {
          .ringA,.ringB,.ringC,.floaty,.floatyr,.floatys,.spin,.dot,
          .holo-panel-float,.holo-base,.holo-cone,.holo-scan,.ring-pulse,
          .arrow-bob,.wordmark { animation: none !important; }
          .fu0,.fu1,.fu2,.fu3,.fu4,.fu5 { animation: none !important; opacity: 1 !important; transform: none !important; }
          .wordmark { -webkit-text-fill-color: ${PURPLE}; color: ${PURPLE}; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════
          HEADER — البيانات الأكاديمية الرسمية + اللوغوان
          ════════════════════════════════════════════════════════════════ */}
      <header style={{
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,212,255,0.16)',
        padding: '18px 28px', position: 'relative', zIndex: 20,
        boxShadow: '0 2px 24px rgba(17,18,42,0.05)',
      }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* لوغو الجامعة */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src="/university-logo.png"
              alt="المركز الجامعي بمغنية"
              width={92} height={88}
              style={{ display: 'block', objectFit: 'contain', height: '84px', width: 'auto' }}
            />
          </div>

          <div className="acad-sep" style={{ width: '1px', height: '78px', background: 'linear-gradient(180deg, transparent, rgba(0,212,255,0.3), transparent)', flexShrink: 0 }} />

          {/* النصوص الأكاديمية */}
          <div style={{ flex: 1, textAlign: 'center', minWidth: '250px' }}>
            {academicLines.map((line, i) => (
              <p key={i} style={{
                margin: '2px 0', fontFamily: 'Cairo, sans-serif',
                fontSize: line.size, fontWeight: line.weight, color: line.color, lineHeight: 1.6,
              }}>{line.text}</p>
            ))}
          </div>

          <div className="acad-sep" style={{ width: '1px', height: '78px', background: 'linear-gradient(180deg, transparent, rgba(123,47,190,0.3), transparent)', flexShrink: 0 }} />

          {/* لوغو هولينغو */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden', lineHeight: 0,
              boxShadow: '0 6px 20px rgba(0,212,255,0.22), 0 0 0 1px rgba(0,212,255,0.18)',
            }}>
              <img
                src="/holingo-logo.png"
                alt="Holingo"
                width={76} height={76}
                style={{ display: 'block', objectFit: 'cover', width: '76px', height: '76px' }}
              />
            </div>
            <span style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '12px', color: '#11122A', letterSpacing: '1px' }}>Holingo</span>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════════
          HERO — خلفية بيضاء ثلاثية الأبعاد + إسقاط هولوغرامي للّوغو
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '94vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '56px 24px 72px' }}>

        {/* شبكة نقاط خفيفة */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(0,212,255,0.10) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 40%, transparent 100%)',
        }} />

        {/* تدرّج ضوئي علوي */}
        <div style={{
          position: 'absolute', top: '4%', left: '50%', transform: 'translateX(-50%)',
          width: '760px', height: '760px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, rgba(123,47,190,0.05) 45%, rgba(255,61,174,0.03) 65%, transparent 75%)',
          borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
        }} />

        {/* عناصر ثلاثية الأبعاد طافية (مخفية على الجوال) */}
        <div className="hero-floats" aria-hidden style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          {/* مكعب سلكي — أعلى يمين */}
          <div className="floaty" style={{ position: 'absolute', top: '14%', insetInlineEnd: '9%' }}>
            <svg width="74" height="74" viewBox="0 0 80 80" fill="none">
              <polygon points="40,8 72,26 72,60 40,72 8,60 8,26" stroke={CYAN} strokeWidth="1.4" fill="rgba(0,212,255,0.04)"/>
              <polygon points="40,8 72,26 40,38" stroke={CYAN} strokeWidth="1" fill="rgba(0,212,255,0.07)"/>
              <polygon points="40,8 8,26 40,38" stroke={PURPLE} strokeWidth="1" fill="rgba(123,47,190,0.05)"/>
              <line x1="40" y1="8" x2="40" y2="38" stroke={CYAN} strokeWidth="1" strokeOpacity="0.5"/>
              <line x1="72" y1="26" x2="40" y2="38" stroke={CYAN} strokeWidth="1" strokeOpacity="0.4"/>
              <line x1="8" y1="26" x2="40" y2="38" stroke={PURPLE} strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
          </div>
          {/* ثُماني الأوجه — أسفل يسار */}
          <div className="floatyr" style={{ position: 'absolute', bottom: '17%', insetInlineStart: '8%' }}>
            <svg width="64" height="64" viewBox="0 0 80 80" fill="none">
              <polygon points="40,6 70,40 40,74 10,40" stroke={PURPLE} strokeWidth="1.4" fill="rgba(123,47,190,0.04)"/>
              <line x1="10" y1="40" x2="70" y2="40" stroke={PURPLE} strokeWidth="1" strokeOpacity="0.45"/>
              <line x1="40" y1="6" x2="40" y2="74" stroke={MAGENTA} strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
          </div>
          {/* هرم — أعلى يسار */}
          <div className="floatys" style={{ position: 'absolute', top: '16%', insetInlineStart: '11%' }}>
            <svg width="58" height="58" viewBox="0 0 70 70" fill="none">
              <polygon points="35,6 65,58 5,58" stroke={CYAN} strokeWidth="1.4" fill="rgba(0,212,255,0.05)"/>
              <line x1="35" y1="6" x2="35" y2="58" stroke={CYAN} strokeWidth="1" strokeOpacity="0.4"/>
              <polygon points="35,6 35,58 65,58" stroke={PURPLE} strokeWidth="0.6" fill="rgba(123,47,190,0.03)"/>
            </svg>
          </div>
          {/* مكعب صغير — وسط يمين */}
          <div className="floaty" style={{ position: 'absolute', top: '58%', insetInlineEnd: '5%' }}>
            <svg width="46" height="46" viewBox="0 0 80 80" fill="none">
              <polygon points="40,8 72,26 72,60 40,72 8,60 8,26" stroke={MAGENTA} strokeWidth="1.4" fill="rgba(255,61,174,0.04)"/>
              <line x1="40" y1="8" x2="40" y2="38" stroke={MAGENTA} strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
          </div>
          {/* حلقة متقطّعة طائرة — يسار */}
          <div className="floatyr" style={{ position: 'absolute', top: '40%', insetInlineStart: '5%' }}>
            <svg width="50" height="24" viewBox="0 0 80 40">
              <ellipse cx="40" cy="20" rx="38" ry="13" stroke={CYAN} strokeWidth="2" fill="none" strokeDasharray="6 5" opacity="0.5"/>
            </svg>
          </div>
          {/* حلقة متقطّعة طائرة — يمين */}
          <div className="floatys" style={{ position: 'absolute', top: '28%', insetInlineEnd: '19%' }}>
            <svg width="42" height="20" viewBox="0 0 80 40">
              <ellipse cx="40" cy="20" rx="38" ry="13" stroke={PURPLE} strokeWidth="2" fill="none" strokeDasharray="5 4" opacity="0.42"/>
            </svg>
          </div>
        </div>

        {/* جسيمات */}
        <div aria-hidden>
          {[
            { top: '18%', right: '23%', size: 5, color: CYAN,    delay: '0s' },
            { top: '40%', right: '15%', size: 4, color: PURPLE,  delay: '1.5s' },
            { top: '70%', right: '30%', size: 6, color: MAGENTA, delay: '3s' },
            { top: '22%', left: '26%',  size: 4, color: PURPLE,  delay: '0.8s' },
            { top: '56%', left: '18%',  size: 5, color: CYAN,    delay: '2.2s' },
            { top: '80%', left: '36%',  size: 4, color: MAGENTA, delay: '4s' },
            { top: '12%', left: '50%',  size: 3, color: CYAN,    delay: '1s' },
            { top: '62%', right: '9%',   size: 4, color: PURPLE,  delay: '3.5s' },
          ].map((p, i) => (
            <div key={i} className="dot" style={{
              position: 'absolute', top: p.top,
              right: 'right' in p ? (p as { right: string }).right : undefined,
              left:  'left'  in p ? (p as { left: string }).left  : undefined,
              width: p.size, height: p.size, borderRadius: '50%',
              background: p.color, boxShadow: `0 0 9px ${p.color}`,
              animationDelay: p.delay, zIndex: 1, pointerEvents: 'none',
            }} />
          ))}
        </div>

        {/* محتوى الهيرو */}
        <div style={{ position: 'relative', zIndex: 3, maxWidth: '880px', margin: '0 auto', textAlign: 'center', width: '100%' }}>

          {/* شارة */}
          <div className="fu0" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.24)',
            borderRadius: '50px', padding: '8px 20px', marginBottom: '30px',
            fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#0596b8', fontWeight: 600,
          }}>
            <span className="spin" style={{ display: 'inline-block' }} aria-hidden>✦</span>
            منصة تعليمية جامعية جزائرية
          </div>

          {/* ✦ الإسقاط الهولوغرامي للّوغو ✦ */}
          <div className="fu1" style={{ position: 'relative', width: '230px', height: '250px', margin: '0 auto 28px', perspective: '900px' }}>

            {/* حلقات المسح الدوّارة */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d' }}>
              <div className="ringA" style={{ position: 'absolute', width: '210px', height: '210px', border: `2px solid ${CYAN}40`, borderRadius: '50%', boxShadow: `0 0 22px ${CYAN}22` }} />
              <div className="ringB" style={{ position: 'absolute', width: '255px', height: '255px', border: `1.5px solid ${PURPLE}38`, borderRadius: '50%' }} />
              <div className="ringC" style={{ position: 'absolute', width: '170px', height: '170px', border: `2px solid ${MAGENTA}3a`, borderRadius: '50%' }} />
            </div>

            {/* مخروط الإسقاط */}
            <div className="holo-cone" style={{
              position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)',
              width: '170px', height: '180px',
              background: `linear-gradient(to top, ${CYAN}30, ${CYAN}10 55%, transparent 85%)`,
              clipPath: 'polygon(42% 100%, 58% 100%, 88% 0, 12% 0)',
              filter: 'blur(2px)', pointerEvents: 'none',
            }} />

            {/* لوحة العرض الهولوغرامية (اللوغو) */}
            <div className="holo-panel-float" style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)' }}>
              <div className="ring-pulse" style={{
                position: 'relative', width: '152px', height: '152px',
                borderRadius: '26px', overflow: 'hidden',
                border: `1.5px solid ${CYAN}80`,
                boxShadow: `0 0 34px ${CYAN}40, 0 14px 40px rgba(0,212,255,0.25), inset 0 0 24px rgba(0,212,255,0.12)`,
              }}>
                <img
                  src="/holingo-logo.png"
                  alt="شعار هولينغو"
                  width={152} height={152}
                  style={{ display: 'block', width: '152px', height: '152px', objectFit: 'cover' }}
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const fb = t.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = 'flex';
                  }}
                />
                {/* بديل عند فشل تحميل الصورة */}
                <div style={{
                  display: 'none', position: 'absolute', inset: 0,
                  background: `linear-gradient(135deg, ${CYAN}, ${PURPLE})`,
                  alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Cairo, sans-serif', fontWeight: 900, fontSize: '64px', color: 'white',
                }}>H</div>
                {/* طبقة خطوط المسح */}
                <div className="scanlines" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }} />
                {/* خط مسح متحرّك */}
                <div className="holo-scan" style={{
                  position: 'absolute', left: 0, right: 0, height: '2px',
                  background: `linear-gradient(90deg, transparent, ${CYAN}, transparent)`,
                  boxShadow: `0 0 8px ${CYAN}`, pointerEvents: 'none',
                }} />
              </div>
            </div>

            {/* قاعدة الباعث المتوهّجة */}
            <div className="holo-base" style={{
              position: 'absolute', bottom: '4px', left: '50%',
              width: '150px', height: '26px',
              background: `radial-gradient(ellipse at center, ${CYAN}66 0%, ${PURPLE}33 45%, transparent 72%)`,
              borderRadius: '50%', filter: 'blur(3px)', pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
              width: '92px', height: '7px', borderRadius: '50%',
              background: `linear-gradient(90deg, ${CYAN}, ${PURPLE})`,
              boxShadow: `0 0 16px ${CYAN}, 0 0 28px ${PURPLE}66`,
            }} />
          </div>

          {/* العنوان */}
          <h1 className="fu2" style={{
            fontFamily: 'Cairo, sans-serif', fontWeight: 900,
            fontSize: 'clamp(38px, 6.2vw, 74px)', lineHeight: 1.12, margin: '0 0 14px',
          }}>
            <span className="wordmark">Holingo</span>
            <span style={{ color: '#11122A', fontSize: 'clamp(28px, 4.6vw, 56px)', display: 'block', marginTop: '2px' }}>هولينغو</span>
          </h1>

          {/* العنوان الفرعي */}
          <p className="fu3" style={{
            fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2.1vw, 18px)',
            color: '#5B6478', lineHeight: 1.85, maxWidth: '640px', margin: '0 auto 30px',
          }}>
            منصة تحويل الدروس الأدبية إلى محتوى تفاعلي بتقنية{' '}
            <span style={{ color: PURPLE, fontWeight: 700 }}>الهولوغرام</span> و
            <span style={{ color: '#0596b8', fontWeight: 700 }}>الموشن غرافيك</span>
          </p>

          {/* بطاقة عنوان المشروع */}
          <div className="fu4 holo-card" style={{ padding: '30px 38px', maxWidth: '680px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '11px', fontWeight: 700,
              color: '#0596b8', letterSpacing: '3px', marginBottom: '14px',
            }}>مشروع التخرّج</p>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: 800,
              fontSize: 'clamp(16px, 2.6vw, 23px)', color: '#11122A', lineHeight: 1.5, margin: '0 0 10px',
            }}>
              دمج الموشن غرافيك وتقنية الهولوغرام في جودة التدريس
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(12px, 1.9vw, 15px)', color: '#5B6478', margin: 0,
            }}>
              رؤية تطبيقية لتطوير الممارسات البيداغوجية في الجامعة
            </p>
          </div>

          {/* مؤشّر التمرير */}
          <div style={{ marginTop: '46px' }}>
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              aria-label="انتقل للأسفل"
              style={{
                width: '44px', height: '44px', margin: '0 auto',
                border: `2px solid ${CYAN}40`, borderRadius: '50%', background: 'rgba(255,255,255,0.7)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: `0 0 18px ${CYAN}1f`,
              }}>
              <span className="arrow-bob" style={{ color: '#0596b8', fontSize: '18px' }} aria-hidden>↓</span>
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          معلومات المشروع — الطالب / الإشراف
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '78px 24px', background: '#F2F7FF', borderBlock: '1px solid rgba(0,212,255,0.1)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <SectionTitle>معلومات المشروع</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { label: 'إعداد الطالب', name: 'محمد بوبركة',   icon: '🎓', color: CYAN },
              { label: 'إشراف',        name: 'أ.د. وهيب وهيبة', icon: '👩‍🏫', color: PURPLE },
            ].map((c, i) => (
              <div key={i} className="holo-card" style={{ padding: '34px 30px', textAlign: 'center' }}>
                <div style={{
                  width: '66px', height: '66px', margin: '0 auto 16px',
                  background: `linear-gradient(135deg, ${c.color}, ${c.color}aa)`,
                  borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', boxShadow: `0 8px 22px ${c.color}33`,
                }}>{c.icon}</div>
                <p style={{
                  fontFamily: 'Cairo, sans-serif', fontSize: '12px', fontWeight: 700,
                  color: c.color, letterSpacing: '2px', marginBottom: '8px',
                }}>{c.label}</p>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '19px', fontWeight: 800, color: '#11122A', margin: 0 }}>{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          لجنة المناقشة
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '78px 24px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <SectionTitle>لجنة المناقشة</SectionTitle>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="holo-card" style={{ padding: '34px 42px', maxWidth: '420px', width: '100%', textAlign: 'center' }}>
              <div style={{
                width: '68px', height: '68px', margin: '0 auto 16px',
                background: `linear-gradient(135deg, ${PURPLE}, ${MAGENTA})`,
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '23px', color: 'white',
                boxShadow: `0 8px 24px ${PURPLE}45`,
              }}>و.و</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '19px', color: '#11122A', marginBottom: '10px' }}>
                أ.د. وهيب وهيبة
              </h3>
              <span style={{
                display: 'inline-block', padding: '5px 18px',
                background: 'rgba(123,47,190,0.1)', border: '1px solid rgba(123,47,190,0.26)',
                borderRadius: '20px', fontFamily: 'Cairo, sans-serif',
                fontSize: '12px', color: PURPLE, fontWeight: 600,
              }}>مشرفاً ومقرراً</span>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#5B6478', margin: '12px 0 0' }}>
                المركز الجامعي بمغنية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ما هو هولينغو؟
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '78px 24px', background: '#F2F7FF', borderBlock: '1px solid rgba(123,47,190,0.1)' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <SectionTitle sub="هولينغو منصة تعليمية رقمية تهدف إلى تحويل الدروس الأدبية النظرية إلى محتوى تفاعلي عبر تقنيتي الموشن غرافيك والهولوغرام، لتطوير الممارسات البيداغوجية في التعليم الجامعي الجزائري.">
            ما هو هولينغو؟
          </SectionTitle>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎬', title: 'موشن غرافيك',  desc: 'تحويل المفاهيم إلى رسوم متحركة تفاعلية',  color: CYAN },
              { icon: '🔮', title: 'هولوغرام',     desc: 'عرض المحتوى بأبعاد ثلاثية واقعية',         color: PURPLE },
              { icon: '🎓', title: 'جودة التدريس', desc: 'تطوير الممارسات البيداغوجية الجامعية',    color: MAGENTA },
            ].map((f, i) => (
              <div key={i} className="holo-card" style={{ padding: '38px 28px', textAlign: 'center' }}>
                <div style={{
                  width: '70px', height: '70px', margin: '0 auto 16px',
                  borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '34px', background: `${f.color}14`, border: `1px solid ${f.color}30`,
                }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '19px', color: f.color, marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#5B6478', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          فريق العمل
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '78px 24px' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <SectionTitle>فريق العمل</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(168px, 1fr))', gap: '18px' }}>
            {team.map((m, i) => (
              <TeamCard key={i} name={m.name} initials={m.initials} color={teamColors[i % teamColors.length]} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          اختيار نوع المستخدم (المنطق محفوظ)
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '78px 24px', position: 'relative', overflow: 'hidden', background: '#F2F7FF', borderBlock: '1px solid rgba(0,212,255,0.1)' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(123,47,190,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div style={{ maxWidth: '980px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '46px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: 'clamp(22px, 3.4vw, 34px)', color: '#11122A', marginBottom: '12px' }}>
              ابدأ تجربتك الآن
            </h2>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '15px', color: '#9098A6' }}>
              اختر نوع حسابك للانضمام إلى المنصة
            </p>
            <div style={{ width: '64px', height: '3px', background: `linear-gradient(90deg, ${CYAN}, ${PURPLE}, ${MAGENTA})`, borderRadius: '2px', margin: '18px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: '24px' }}>
            <RoleCard
              icon="🎓" title="أنا طالب"
              description="تصفّح الدروس التفاعلية وتابع مشاريعك التعليمية"
              color={CYAN} colorLight="#5FE3FF"
              href="/auth/register/student"
            />
            <RoleCard
              icon="📚" title="أنا أستاذ"
              description="ارفع دروسك الأدبية وحوّلها إلى محتوى تفاعلي"
              color={PURPLE} colorLight="#9B3FDE"
              href="/auth/register/teacher"
            />
            <RoleCard
              icon="🎬" title="أنا عامل حر"
              description="أنجز مشاريع الأساتذة وحوّل المحتوى إلى هولوغرام وموشن غرافيك"
              color={MAGENTA} colorLight="#FF6FC4"
              href="/auth/register/freelancer"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="/auth/login" style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '14px',
              color: '#0596b8', textDecoration: 'none', fontWeight: 500,
              borderBottom: '1px solid rgba(0,212,255,0.45)', paddingBottom: '2px',
            }}>
              لديك حساب بالفعل؟ سجّل دخولك
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════════════════ */}
      <footer style={{ background: '#0A0A1A', padding: '40px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* خط هولوغرامي علوي */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${CYAN}, ${PURPLE}, ${MAGENTA}, transparent)`, opacity: 0.7 }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div style={{ borderRadius: '14px', overflow: 'hidden', lineHeight: 0, boxShadow: `0 0 24px ${CYAN}33` }}>
            <img
              src="/holingo-logo.png"
              alt="Holingo"
              width={56} height={56}
              style={{ display: 'block', width: '56px', height: '56px', objectFit: 'cover' }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div style={{ fontFamily: 'Cairo, sans-serif', fontWeight: 800, fontSize: '19px', letterSpacing: '2px' }}>
            <span className="wordmark">Holingo</span>
          </div>
          <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            © 2026 Holingo — جميع الحقوق محفوظة
          </p>
          <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '11.5px', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
            المركز الجامعي بمغنية — معهد الآداب واللغات
          </p>
        </div>
      </footer>

    </div>
  );
}
