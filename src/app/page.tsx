// Landing page — هولينغو الصفحة الرئيسية — تصميم أبيض ثلاثي الأبعاد
'use client';

import { useRouter } from 'next/navigation';

// ─── بطاقة الدور ────────────────────────────────────────────────────────────
function RoleCard({
  icon, title, description, color, colorLight, href,
}: {
  icon: string; title: string; description?: string;
  color: string; colorLight: string; href: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(href)}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-10px) scale(1.02)';
        el.style.boxShadow = `0 24px 60px ${color}25`;
        el.style.borderColor = `${color}60`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0) scale(1)';
        el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
        el.style.borderColor = 'rgba(0,0,0,0.06)';
      }}
      style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(0,0,0,0.06)',
        borderRadius: '24px',
        padding: '40px 32px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: '-30px', right: '-30px',
        width: '120px', height: '120px',
        background: `radial-gradient(circle, ${color}12, transparent 70%)`,
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        width: '72px', height: '72px', margin: '0 auto 20px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        borderRadius: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '32px',
        boxShadow: `0 8px 24px ${color}35`,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '20px',
        color: '#1A1A2E', marginBottom: description ? '10px' : '20px',
      }}>{title}</h3>
      {description && (
        <p style={{
          fontFamily: 'Cairo, sans-serif', fontSize: '13px',
          color: '#6B7280', lineHeight: '1.7', marginBottom: '20px',
        }}>{description}</p>
      )}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '10px 24px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        color: 'white', borderRadius: '12px',
        fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px',
        boxShadow: `0 4px 15px ${color}30`, marginTop: description ? '0' : '12px',
      }}>
        ابدأ التسجيل <span>←</span>
      </div>
    </div>
  );
}

// ─── بطاقة عضو الفريق ────────────────────────────────────────────────────────
function TeamCard({ name, initials, color }: { name: string; initials: string; color: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.8)',
      border: `1px solid ${color}20`,
      borderRadius: '16px', padding: '20px 16px',
      textAlign: 'center', transition: 'all 0.3s ease',
      boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = 'translateY(-4px)';
      el.style.boxShadow = `0 12px 32px ${color}20`;
      el.style.borderColor = `${color}40`;
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = 'translateY(0)';
      el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
      el.style.borderColor = `${color}20`;
    }}
    >
      <div style={{
        width: '52px', height: '52px', margin: '0 auto 12px',
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        borderRadius: '50%', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'Cairo, sans-serif',
        fontWeight: '800', fontSize: '16px', color: 'white',
        boxShadow: `0 4px 16px ${color}35`,
      }}>
        {initials}
      </div>
      <p style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '13px',
        color: '#1A1A2E', margin: 0, lineHeight: '1.4',
      }}>{name}</p>
    </div>
  );
}

// ─── الصفحة الرئيسية ─────────────────────────────────────────────────────────
export default function HomePage() {
  const teamColors = [
    '#1E88E5', '#7B2FBE', '#00BCD4', '#E91E63',
    '#7B2FBE', '#1E88E5', '#E91E63', '#00BCD4',
  ];

  const team = [
    { name: 'قاسيمي عبد الإله', initials: 'ق.ع' },
    { name: 'قرشي إلياس',        initials: 'ق.إ' },
    { name: 'المسعود يوسف',       initials: 'م.ي' },
    { name: 'دكالي عائشة',        initials: 'د.ع' },
    { name: 'وهيب وهيبة',         initials: 'و.و' },
    { name: 'زياني سمير',         initials: 'ز.س' },
    { name: 'صمود عبد الرزاق',    initials: 'ص.ع' },
    { name: 'خليد نبيل',          initials: 'خ.ن' },
  ];

  return (
    <div style={{ background: '#F8FAFF', minHeight: '100vh', direction: 'rtl', fontFamily: 'Cairo, sans-serif', overflowX: 'hidden' }}>

      {/* ══ CSS Animations ══ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');

        @keyframes floatRing {
          from { transform: rotateX(72deg) rotateZ(0deg); }
          to   { transform: rotateX(72deg) rotateZ(360deg); }
        }
        @keyframes floatRing2 {
          from { transform: rotateX(65deg) rotateZ(360deg); }
          to   { transform: rotateX(65deg) rotateZ(0deg); }
        }
        @keyframes floatRing3 {
          from { transform: rotateX(78deg) rotateZ(0deg); }
          to   { transform: rotateX(78deg) rotateZ(360deg); }
        }
        @keyframes bobFloat {
          0%,100% { transform: translateY(0px) rotateY(0deg); }
          50%      { transform: translateY(-28px) rotateY(180deg); }
        }
        @keyframes bobFloat2 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
          33%  { transform: translateY(-35px) translateX(12px) scale(1.1); opacity: 1; }
          66%  { transform: translateY(-18px) translateX(-8px) scale(0.95); opacity: 0.85; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.7; }
        }
        @keyframes scanV {
          from { top: -5%; }
          to   { top: 105%; }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse3d {
          0%,100% { box-shadow: 0 0 0 0 rgba(30,136,229,0.15); }
          50%      { box-shadow: 0 0 0 16px rgba(30,136,229,0); }
        }
        @keyframes holoPulse {
          0%,100% { opacity: 0.35; }
          50%      { opacity: 0.75; }
        }

        .ring-1 { animation: floatRing 10s linear infinite; }
        .ring-2 { animation: floatRing2 14s linear infinite; }
        .ring-3 { animation: floatRing3 7s linear infinite; }
        .cube-1 { animation: bobFloat 7s ease-in-out infinite; }
        .cube-2 { animation: bobFloat 9s ease-in-out infinite 2.5s; }
        .cube-3 { animation: bobFloat 11s ease-in-out infinite 5s; }
        .pyr-1  { animation: bobFloat2 8s ease-in-out infinite 1s; }
        .pyr-2  { animation: bobFloat2 10s ease-in-out infinite 3s; }
        .dot    { animation: drift 7s ease-in-out infinite; }
        .scan   { animation: scanV 5s linear infinite; }
        .shimmer-text {
          background: linear-gradient(135deg, #1E88E5, #7B2FBE, #00BCD4, #1E88E5);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s linear infinite;
        }
        .fade-u0 { animation: fadeUp 0.7s ease-out forwards; }
        .fade-u1 { animation: fadeUp 0.7s ease-out 0.2s forwards; opacity: 0; }
        .fade-u2 { animation: fadeUp 0.7s ease-out 0.4s forwards; opacity: 0; }
        .fade-u3 { animation: fadeUp 0.7s ease-out 0.6s forwards; opacity: 0; }
        .fade-u4 { animation: fadeUp 0.7s ease-out 0.8s forwards; opacity: 0; }
        .spin-s  { animation: spinSlow 20s linear infinite; }
        .holo-pulse { animation: holoPulse 3s ease-in-out infinite; }

        /* Holographic card border */
        .holo-card {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px);
          border: 1.5px solid rgba(30,136,229,0.25);
          border-radius: 20px;
          box-shadow: 0 4px 30px rgba(30,136,229,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .holo-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 80%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(30,136,229,0.06), transparent);
          transition: left 0.6s ease;
        }
        .holo-card:hover::before { left: 120%; }
        .holo-card:hover {
          box-shadow: 0 12px 40px rgba(30,136,229,0.15), 0 0 0 1px rgba(30,136,229,0.3);
          transform: translateY(-4px);
        }

        @media (max-width: 768px) {
          .hero-rings { display: none; }
          .floating-3d { display: none; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════
          HEADER — البيانات الأكاديمية الرسمية + اللوغوات
          ══════════════════════════════════════════════ */}
      <header style={{
        background: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid rgba(30,136,229,0.12)',
        padding: '20px 32px',
        position: 'relative',
        zIndex: 20,
        boxShadow: '0 2px 20px rgba(30,136,229,0.07)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* لوغو الجامعة */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/university-logo.svg"
              alt="المركز الجامعي مغنية"
              width={85}
              height={100}
              style={{ display: 'block', objectFit: 'contain' }}
            />
          </div>

          {/* الفاصل */}
          <div style={{ width: '1px', height: '80px', background: 'linear-gradient(180deg, transparent, rgba(30,136,229,0.25), transparent)', flexShrink: 0 }} />

          {/* النصوص الأكاديمية */}
          <div style={{ flex: 1, textAlign: 'center', minWidth: '260px' }}>
            {[
              { text: 'الجمهورية الجزائرية الديمقراطية الشعبية', size: '11px', weight: '500', color: '#6B7280' },
              { text: 'وزارة التعليم العالي والبحث العلمي', size: '11px', weight: '500', color: '#6B7280' },
              { text: 'المركز الجامعي بمغنية', size: '14px', weight: '800', color: '#1E3A5F' },
              { text: 'معهد الآداب واللغات — قسم اللغة والأدب العربي', size: '12px', weight: '600', color: '#374151' },
              { text: 'تخصص: لسانيات تطبيقية   |   السنة الجامعية: 2025–2026', size: '11px', weight: '500', color: '#9CA3AF' },
            ].map((line, i) => (
              <p key={i} style={{
                margin: '2px 0', fontFamily: 'Cairo, sans-serif',
                fontSize: line.size, fontWeight: line.weight, color: line.color, lineHeight: '1.6',
              }}>{line.text}</p>
            ))}
          </div>

          {/* الفاصل */}
          <div style={{ width: '1px', height: '80px', background: 'linear-gradient(180deg, transparent, rgba(30,136,229,0.25), transparent)', flexShrink: 0 }} />

          {/* لوغو هولينغو */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <img
              src="/holingo-logo.svg"
              alt="Holingo Logo"
              width={84}
              height={84}
              style={{ display: 'block', borderRadius: '16px', objectFit: 'contain' }}
            />
            <span style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '13px', color: '#1E3A5F', letterSpacing: '1px' }}>Holingo</span>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO — خلفية ثلاثية الأبعاد بيضاء + هولوغرام
          ══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '60px 24px' }}>

        {/* ── خلفية: شبكة نقاط ── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(30,136,229,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }} />

        {/* ── خلفية: تدرج ضوئي ── */}
        <div style={{
          position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '700px',
          background: 'radial-gradient(ellipse, rgba(30,136,229,0.06) 0%, rgba(123,47,190,0.04) 50%, transparent 70%)',
          borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
        }} />

        {/* ── عناصر ثلاثية الأبعاد: حلقات هولوغرام ── */}
        <div className="hero-rings" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0, perspective: '1000px', pointerEvents: 'none' }}>
          <div className="ring-1" style={{ position: 'absolute', width: '520px', height: '520px', border: '2px solid rgba(30,136,229,0.2)', borderRadius: '50%', boxShadow: '0 0 30px rgba(30,136,229,0.08), inset 0 0 20px rgba(30,136,229,0.04)' }} />
          <div className="ring-2" style={{ position: 'absolute', width: '700px', height: '700px', border: '1.5px solid rgba(123,47,190,0.15)', borderRadius: '50%', boxShadow: '0 0 20px rgba(123,47,190,0.06)' }} />
          <div className="ring-3" style={{ position: 'absolute', width: '360px', height: '360px', border: '2.5px solid rgba(0,188,212,0.2)', borderRadius: '50%', boxShadow: '0 0 25px rgba(0,188,212,0.08)' }} />
          {/* نقطة مركزية نابضة */}
          <div style={{ position: 'absolute', width: '10px', height: '10px', background: '#1E88E5', borderRadius: '50%', boxShadow: '0 0 16px #1E88E5, 0 0 40px rgba(30,136,229,0.4)', animation: 'holoPulse 2.5s ease-in-out infinite' }} />
        </div>

        {/* ── مكعبات SVG طافية ── */}
        <div className="floating-3d">
          {/* مكعب 1 — أعلى يمين */}
          <div className="cube-1" style={{ position: 'absolute', top: '12%', right: '8%', zIndex: 1 }}>
            <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
              <polygon points="40,8 72,26 72,60 40,72 8,60 8,26" stroke="#1E88E5" strokeWidth="1.5" fill="rgba(30,136,229,0.05)"/>
              <polygon points="40,8 72,26 40,38" stroke="#1E88E5" strokeWidth="1" fill="rgba(30,136,229,0.08)"/>
              <polygon points="40,8 8,26 40,38" stroke="#7B2FBE" strokeWidth="1" fill="rgba(123,47,190,0.06)"/>
              <line x1="40" y1="8" x2="40" y2="38" stroke="#1E88E5" strokeWidth="1" strokeOpacity="0.5"/>
              <line x1="72" y1="26" x2="40" y2="38" stroke="#1E88E5" strokeWidth="1" strokeOpacity="0.4"/>
              <line x1="8" y1="26" x2="40" y2="38" stroke="#7B2FBE" strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
          </div>

          {/* مكعب 2 — أسفل يسار */}
          <div className="cube-2" style={{ position: 'absolute', bottom: '18%', left: '7%', zIndex: 1 }}>
            <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
              <polygon points="40,8 72,26 72,60 40,72 8,60 8,26" stroke="#7B2FBE" strokeWidth="1.5" fill="rgba(123,47,190,0.05)"/>
              <polygon points="40,8 72,26 40,38" stroke="#7B2FBE" strokeWidth="1" fill="rgba(123,47,190,0.08)"/>
              <line x1="40" y1="8" x2="40" y2="38" stroke="#7B2FBE" strokeWidth="1" strokeOpacity="0.5"/>
            </svg>
          </div>

          {/* مكعب 3 — وسط يمين */}
          <div className="cube-3" style={{ position: 'absolute', top: '55%', right: '4%', zIndex: 1 }}>
            <svg width="44" height="44" viewBox="0 0 80 80" fill="none">
              <polygon points="40,8 72,26 72,60 40,72 8,60 8,26" stroke="#00BCD4" strokeWidth="1.5" fill="rgba(0,188,212,0.05)"/>
              <line x1="40" y1="8" x2="40" y2="38" stroke="#00BCD4" strokeWidth="1" strokeOpacity="0.4"/>
              <line x1="72" y1="26" x2="40" y2="38" stroke="#00BCD4" strokeWidth="1" strokeOpacity="0.35"/>
              <line x1="8" y1="26" x2="40" y2="38" stroke="#00BCD4" strokeWidth="1" strokeOpacity="0.35"/>
            </svg>
          </div>

          {/* هرم 1 — أعلى يسار */}
          <div className="pyr-1" style={{ position: 'absolute', top: '15%', left: '10%', zIndex: 1 }}>
            <svg width="60" height="60" viewBox="0 0 70 70" fill="none">
              <polygon points="35,6 65,58 5,58" stroke="#1E88E5" strokeWidth="1.5" fill="rgba(30,136,229,0.06)"/>
              <line x1="35" y1="6" x2="35" y2="58" stroke="#1E88E5" strokeWidth="1" strokeOpacity="0.4"/>
              <line x1="35" y1="6" x2="5" y2="58" stroke="#7B2FBE" strokeWidth="0.8" strokeOpacity="0.35"/>
              <polygon points="35,6 35,58 65,58" stroke="#7B2FBE" strokeWidth="0.5" fill="rgba(123,47,190,0.04)"/>
            </svg>
          </div>

          {/* هرم 2 — أسفل يمين */}
          <div className="pyr-2" style={{ position: 'absolute', bottom: '22%', right: '12%', zIndex: 1 }}>
            <svg width="44" height="44" viewBox="0 0 70 70" fill="none">
              <polygon points="35,6 65,58 5,58" stroke="#7B2FBE" strokeWidth="1.5" fill="rgba(123,47,190,0.05)"/>
              <line x1="35" y1="6" x2="35" y2="58" stroke="#7B2FBE" strokeWidth="1" strokeOpacity="0.35"/>
            </svg>
          </div>

          {/* حلقة صغيرة طائرة */}
          <div className="pyr-1" style={{ position: 'absolute', top: '35%', left: '4%', zIndex: 1 }}>
            <svg width="40" height="20" viewBox="0 0 80 40">
              <ellipse cx="40" cy="20" rx="38" ry="14" stroke="#00BCD4" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.5"/>
            </svg>
          </div>

          {/* حلقة صغيرة طائرة 2 */}
          <div className="cube-2" style={{ position: 'absolute', top: '25%', right: '18%', zIndex: 1 }}>
            <svg width="36" height="18" viewBox="0 0 80 40">
              <ellipse cx="40" cy="20" rx="38" ry="14" stroke="#1E88E5" strokeWidth="2" fill="none" strokeDasharray="4 3" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* ── جسيمات ── */}
        {[
          { top: '18%', right: '22%', size: 5, color: '#1E88E5', delay: '0s' },
          { top: '40%', right: '15%', size: 4, color: '#7B2FBE', delay: '1.5s' },
          { top: '70%', right: '30%', size: 6, color: '#00BCD4', delay: '3s' },
          { top: '22%', left: '25%', size: 4, color: '#7B2FBE', delay: '0.8s' },
          { top: '55%', left: '18%', size: 5, color: '#1E88E5', delay: '2.2s' },
          { top: '80%', left: '35%', size: 4, color: '#00BCD4', delay: '4s' },
          { top: '10%', left: '50%', size: 3, color: '#1E88E5', delay: '1s' },
          { top: '60%', right: '8%',  size: 4, color: '#7B2FBE', delay: '3.5s' },
        ].map((p, i) => (
          <div key={i} className="dot" style={{
            position: 'absolute',
            top: p.top,
            right: 'right' in p ? (p as { right: string }).right : undefined,
            left: 'left' in p ? (p as { left: string }).left : undefined,
            width: p.size, height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animationDelay: p.delay, zIndex: 1,
          }} />
        ))}

        {/* ── خط مسح ── */}
        <div className="scan" style={{
          position: 'absolute', left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(30,136,229,0.3), transparent)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* ── محتوى الـ Hero ── */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', margin: '0 auto', textAlign: 'center', width: '100%' }}>

          {/* الشارة */}
          <div className="fade-u0" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(30,136,229,0.08)', border: '1px solid rgba(30,136,229,0.2)',
            borderRadius: '50px', padding: '8px 20px', marginBottom: '32px',
            fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#1E88E5', fontWeight: '600',
          }}>
            <span className="spin-s" style={{ display: 'inline-block' }}>✦</span>
            منصة تعليمية جامعية جزائرية
          </div>

          {/* لوغو هولينغو + الاسم */}
          <div className="fade-u1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            {/* صورة اللوغو */}
            <div style={{ position: 'relative' }}>
              <img
                src="/holingo-logo.svg"
                alt="Holingo"
                width={130}
                height={130}
                style={{ borderRadius: '28px', objectFit: 'contain', display: 'block', position: 'relative', zIndex: 2 }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const next = target.nextElementSibling as HTMLElement;
                  if (next) next.style.display = 'flex';
                }}
              />
              {/* Fallback */}
              <div style={{
                display: 'none', width: '120px', height: '120px',
                background: 'linear-gradient(135deg, #1E88E5, #7B2FBE)',
                borderRadius: '28px', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Cairo, sans-serif', fontWeight: '900', fontSize: '52px', color: 'white',
                boxShadow: '0 12px 40px rgba(30,136,229,0.4)',
              }}>ه</div>
              {/* حلقة توهج حول اللوغو */}
              <div style={{
                position: 'absolute', inset: '-8px', borderRadius: '36px',
                border: '2px solid rgba(30,136,229,0.3)',
                animation: 'pulse3d 3s ease-in-out infinite',
              }} />
            </div>
          </div>

          {/* العنوان */}
          <h1 className="fade-u2" style={{
            fontFamily: 'Cairo, sans-serif', fontWeight: '900',
            fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: '1.15',
            margin: '0 0 12px',
          }}>
            <span className="shimmer-text">Holingo</span>
            <span style={{ color: '#1A1A2E', fontSize: 'clamp(28px, 4.5vw, 56px)', display: 'block' }}> هولينغو</span>
          </h1>

          {/* الوصف */}
          <p className="fade-u3" style={{
            fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#6B7280', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 28px',
          }}>
            منصة تحويل الدروس الأدبية إلى محتوى تفاعلي
            بتقنية <span style={{ color: '#7B2FBE', fontWeight: '700' }}>الهولوغرام</span> و<span style={{ color: '#1E88E5', fontWeight: '700' }}>الموشن غرافيك</span>
          </p>

          {/* بطاقة عنوان المشروع */}
          <div className="fade-u4 holo-card" style={{ padding: '28px 36px', maxWidth: '660px', margin: '0 auto 44px' }}>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '11px', fontWeight: '700',
              color: '#1E88E5', letterSpacing: '3px', marginBottom: '14px',
            }}>مشروع التخرج</p>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '800',
              fontSize: 'clamp(15px, 2.5vw, 21px)', color: '#1A1A2E',
              lineHeight: '1.5', margin: '0 0 8px',
            }}>
              دمج الموشن غرافيك وتقنية الهولوغرام في جودة التدريس
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(12px, 1.8vw, 14px)',
              color: '#6B7280', margin: 0,
            }}>
              رؤية تطبيقية لتطوير الممارسات البيداغوجية في الجامعة
            </p>
          </div>

          {/* بطاقات الطالب والمشرف */}
          <div className="fade-u4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '460px', margin: '0 auto' }}>
            {[
              { label: 'إعداد الطالب', name: 'محمد بوبركة', icon: '🎓', color: '#1E88E5', bg: 'rgba(30,136,229,0.07)' },
              { label: 'إشراف',       name: 'أ.د. وهيب وهيبة', icon: '👩‍🏫', color: '#7B2FBE', bg: 'rgba(123,47,190,0.07)' },
            ].map((card, i) => (
              <div key={i} style={{
                flex: '1 1 190px', background: card.bg,
                border: `1px solid ${card.color}25`, borderRadius: '16px', padding: '20px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{card.icon}</div>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '11px', color: card.color, marginBottom: '6px', fontWeight: '700', letterSpacing: '1px' }}>{card.label}</p>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '15px', color: '#1A1A2E', fontWeight: '700', margin: 0 }}>{card.name}</p>
              </div>
            ))}
          </div>

          {/* سهم للأسفل */}
          <div style={{ marginTop: '52px' }}>
            <div onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} style={{
              width: '42px', height: '42px', margin: '0 auto',
              border: '2px solid rgba(30,136,229,0.3)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', animation: 'drift 2s ease-in-out infinite',
              boxShadow: '0 0 16px rgba(30,136,229,0.12)',
            }}>
              <span style={{ color: '#1E88E5', fontSize: '18px' }}>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          لجنة المناقشة
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(30,136,229,0.03)', borderTop: '1px solid rgba(30,136,229,0.08)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(20px, 3vw, 30px)', color: '#1A1A2E', marginBottom: '12px' }}>
              لجنة المناقشة
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #1E88E5, #7B2FBE)', borderRadius: '2px', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="holo-card" style={{ padding: '32px 40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
              <div style={{
                width: '64px', height: '64px', margin: '0 auto 16px',
                background: 'linear-gradient(135deg, #1E88E5, #7B2FBE)',
                borderRadius: '50%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontFamily: 'Cairo, sans-serif',
                fontWeight: '800', fontSize: '22px', color: 'white',
                boxShadow: '0 8px 24px rgba(30,136,229,0.3)',
              }}>و.و</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '18px', color: '#1A1A2E', marginBottom: '8px' }}>
                أ.د. وهيب وهيبة
              </h3>
              <span style={{
                display: 'inline-block', padding: '4px 16px',
                background: 'rgba(30,136,229,0.1)', border: '1px solid rgba(30,136,229,0.25)',
                borderRadius: '20px', fontFamily: 'Cairo, sans-serif',
                fontSize: '12px', color: '#1E88E5', fontWeight: '600', marginBottom: '8px',
              }}>مشرفاً ومقرراً</span>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#6B7280', margin: '8px 0 0' }}>
                المركز الجامعي مغنية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ما هو هولينغو؟
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(20px, 3vw, 30px)', color: '#1A1A2E', marginBottom: '18px' }}>
              ما هو هولينغو؟
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2vw, 16px)',
              color: '#6B7280', lineHeight: '2', maxWidth: '620px', margin: '0 auto',
            }}>
              هولينغو منصة تعليمية رقمية تهدف إلى تحويل الدروس الأدبية النظرية
              إلى محتوى تفاعلي عبر تقنيتي الموشن غرافيك والهولوغرام،
              لتطوير الممارسات البيداغوجية في التعليم الجامعي الجزائري
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #1E88E5, #7B2FBE)', borderRadius: '2px', margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎬', title: 'موشن غرافيك', desc: 'تحويل المفاهيم إلى رسوم متحركة تفاعلية', color: '#1E88E5' },
              { icon: '🔮', title: 'هولوغرام',    desc: 'عرض المحتوى بأبعاد ثلاثية واقعية',        color: '#7B2FBE' },
              { icon: '🎓', title: 'جودة التدريس', desc: 'تطوير الممارسات البيداغوجية الجامعية',  color: '#00BCD4' },
            ].map((feat, i) => (
              <div key={i} className="holo-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontSize: '52px', marginBottom: '16px' }}>{feat.icon}</div>
                <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '18px', color: feat.color, marginBottom: '10px' }}>{feat.title}</h3>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#6B7280', lineHeight: '1.7', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          فريق العمل
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', background: 'rgba(123,47,190,0.03)', borderTop: '1px solid rgba(123,47,190,0.08)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(20px, 3vw, 30px)', color: '#1A1A2E', marginBottom: '12px' }}>
              فريق العمل
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #7B2FBE, #1E88E5)', borderRadius: '2px', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {team.map((member, i) => (
              <TeamCard key={i} name={member.name} initials={member.initials} color={teamColors[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          اختيار نوع المستخدم
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* خلفية ثلاثية الأبعاد خفيفة */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(30,136,229,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(20px, 3vw, 30px)', color: '#1A1A2E', marginBottom: '12px' }}>
              ابدأ تجربتك الآن
            </h2>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '15px', color: '#9CA3AF' }}>
              اختر نوع حسابك للانضمام إلى المنصة
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #1E88E5, #7B2FBE)', borderRadius: '2px', margin: '16px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <RoleCard
              icon="🎓" title="أنا طالب"
              description="تصفّح الدروس التفاعلية وتابع مشاريعك التعليمية"
              color="#1E88E5" colorLight="#42A5F5"
              href="/auth/register/student"
            />
            <RoleCard
              icon="📚" title="أنا أستاذ"
              description="ارفع دروسك الأدبية وحوّلها إلى محتوى تفاعلي"
              color="#7B2FBE" colorLight="#9B3FDE"
              href="/auth/register/teacher"
            />
            <RoleCard
              icon="🎬" title="أنا عامل حر"
              description="أنجز مشاريع الأساتذة وحوّل المحتوى إلى هولوغرام وموشن غرافيك"
              color="#00BCD4" colorLight="#26C6DA"
              href="/auth/register/freelancer"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="/auth/login" style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '14px',
              color: '#1E88E5', textDecoration: 'none', fontWeight: '500',
              borderBottom: '1px solid rgba(30,136,229,0.4)', paddingBottom: '2px',
            }}>
              لديك حساب بالفعل؟ سجّل دخولك
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════ */}
      <footer style={{
        background: '#0A0A1A',
        padding: '36px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <img
            src="/holingo-logo.png"
            alt="Holingo"
            width={52}
            height={52}
            style={{ borderRadius: '12px', objectFit: 'contain', opacity: 0.85 }}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '18px', letterSpacing: '2px' }}>
            <span className="shimmer-text">Holingo</span>
          </div>
          <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © 2026 Holingo — جميع الحقوق محفوظة
          </p>
        </div>
      </footer>

    </div>
  );
}
