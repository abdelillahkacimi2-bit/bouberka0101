// Landing page — هولينغو الصفحة الرئيسية
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
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px) scale(1.02)';
        (e.currentTarget as HTMLDivElement).style.borderColor = color;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${color}30`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
      }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: '2px solid rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '40px 32px',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow blob */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '140px', height: '140px',
        background: `radial-gradient(circle, ${color}20, transparent 70%)`,
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        width: '72px', height: '72px', margin: '0 auto 20px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        borderRadius: '20px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '32px',
        boxShadow: `0 8px 24px ${color}40`,
      }}>
        {icon}
      </div>
      <h3 style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '20px',
        color: 'white', marginBottom: description ? '10px' : '20px',
      }}>{title}</h3>
      {description && (
        <p style={{
          fontFamily: 'Cairo, sans-serif', fontSize: '13px',
          color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', marginBottom: '20px',
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
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px', padding: '20px 16px',
      textAlign: 'center', transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.08)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.04)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    }}
    >
      <div style={{
        width: '52px', height: '52px', margin: '0 auto 12px',
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        borderRadius: '50%', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'Cairo, sans-serif',
        fontWeight: '800', fontSize: '18px', color: 'white',
        boxShadow: `0 4px 16px ${color}40`,
      }}>
        {initials}
      </div>
      <p style={{
        fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '13px',
        color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: '1.4',
      }}>{name}</p>
    </div>
  );
}

// ─── الصفحة الرئيسية ─────────────────────────────────────────────────────────
export default function HomePage() {
  const teamColors = [
    '#00D4FF', '#7B2FBE', '#00D4FF', '#FF6B6B',
    '#7B2FBE', '#00D4FF', '#FF6B6B', '#7B2FBE',
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
    <div style={{ background: '#0A0A1A', minHeight: '100vh', direction: 'rtl', fontFamily: 'Cairo, sans-serif', overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════════
          CSS Animations (injected via style tag)
          ══════════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');

        @keyframes rotateRing {
          from { transform: rotateX(75deg) rotateZ(0deg); }
          to   { transform: rotateX(75deg) rotateZ(360deg); }
        }
        @keyframes rotateRing2 {
          from { transform: rotateX(65deg) rotateZ(360deg); }
          to   { transform: rotateX(65deg) rotateZ(0deg); }
        }
        @keyframes rotateRing3 {
          from { transform: rotateX(80deg) rotateZ(0deg); }
          to   { transform: rotateX(80deg) rotateZ(360deg); }
        }
        @keyframes floatCube {
          0%,100% { transform: translateY(0px) rotateX(20deg) rotateY(0deg); }
          50%      { transform: translateY(-30px) rotateX(20deg) rotateY(180deg); }
        }
        @keyframes floatPyramid {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          33%  { transform: translateY(-40px) translateX(15px); opacity: 1; }
          66%  { transform: translateY(-20px) translateX(-10px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.4; }
          50%      { opacity: 0.9; }
        }
        @keyframes scanLine {
          from { top: -10%; }
          to   { top: 110%; }
        }
        @keyframes neonBlink {
          0%,100% { box-shadow: 0 0 8px #00D4FF, 0 0 20px #00D4FF40; }
          50%      { box-shadow: 0 0 16px #00D4FF, 0 0 40px #00D4FF60, 0 0 80px #00D4FF20; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-ring-1 { animation: rotateRing 8s linear infinite; }
        .hero-ring-2 { animation: rotateRing2 12s linear infinite; }
        .hero-ring-3 { animation: rotateRing3 6s linear infinite; }
        .cube-float-1 { animation: floatCube 7s ease-in-out infinite; }
        .cube-float-2 { animation: floatCube 9s ease-in-out infinite 2s; }
        .cube-float-3 { animation: floatCube 11s ease-in-out infinite 4s; }
        .pyramid-1 { animation: floatPyramid 8s ease-in-out infinite 1s; }
        .pyramid-2 { animation: floatPyramid 10s ease-in-out infinite 3s; }
        .particle { animation: particleFloat 6s ease-in-out infinite; }
        .scan-line { animation: scanLine 4s linear infinite; }
        .neon-border { animation: neonBlink 2s ease-in-out infinite; }
        .glow-text {
          background: linear-gradient(135deg, #00D4FF, #7B2FBE, #00D4FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .fade-in { animation: fadeInUp 0.8s ease-out forwards; }
        .fade-in-d1 { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .fade-in-d2 { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }
        .fade-in-d3 { animation: fadeInUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        .fade-in-d4 { animation: fadeInUp 0.8s ease-out 0.8s forwards; opacity: 0; }
        .spin-slow { animation: spinSlow 20s linear infinite; }
      `}</style>

      {/* ══════════════════════════════════════════════
          HEADER — البيانات الأكاديمية الرسمية
          ══════════════════════════════════════════════ */}
      <header style={{
        background: 'linear-gradient(180deg, rgba(0,212,255,0.06) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(0,212,255,0.15)',
        padding: '20px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { text: 'الجمهورية الجزائرية الديمقراطية الشعبية', size: '12px', weight: '500', opacity: 0.6 },
            { text: 'وزارة التعليم العالي والبحث العلمي', size: '12px', weight: '500', opacity: 0.6 },
            { text: 'المركز الجامعي بمغنية', size: '14px', weight: '700', opacity: 0.9 },
            { text: 'معهد الآداب واللغات — قسم اللغة والأدب العربي', size: '13px', weight: '600', opacity: 0.75 },
            { text: 'تخصص: لسانيات تطبيقية      |      السنة الجامعية: 2025–2026', size: '12px', weight: '500', opacity: 0.55 },
          ].map((line, i) => (
            <p key={i} style={{
              margin: 0, fontFamily: 'Cairo, sans-serif',
              fontSize: line.size, fontWeight: line.weight,
              color: `rgba(0,212,255,${line.opacity})`,
              lineHeight: '1.6', letterSpacing: '0.3px',
            }}>{line.text}</p>
          ))}
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO — مع خلفية الهولوغرام ثلاثية الأبعاد
          ══════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '60px 24px' }}>

        {/* ── خلفية: جسيمات ── */}
        {[
          { top: '15%', right: '8%', size: 4, delay: '0s' },
          { top: '30%', right: '20%', size: 3, delay: '1s' },
          { top: '60%', right: '5%', size: 5, delay: '2s' },
          { top: '75%', right: '35%', size: 3, delay: '0.5s' },
          { top: '10%', left: '10%', size: 4, delay: '1.5s' },
          { top: '45%', left: '5%', size: 3, delay: '3s' },
          { top: '80%', left: '20%', size: 6, delay: '2.5s' },
          { top: '25%', left: '40%', size: 3, delay: '0.8s' },
          { top: '55%', left: '50%', size: 4, delay: '4s' },
          { top: '90%', right: '15%', size: 3, delay: '3.5s' },
          { top: '5%',  left: '60%', size: 5, delay: '2s' },
          { top: '35%', right: '50%', size: 3, delay: '1.2s' },
        ].map((p, i) => (
          <div key={i} className="particle" style={{
            position: 'absolute',
            top: p.top,
            right: 'right' in p ? (p as { right: string }).right : undefined,
            left: 'left' in p ? (p as { left: string }).left : undefined,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: i % 3 === 0 ? '#00D4FF' : i % 3 === 1 ? '#7B2FBE' : 'rgba(255,255,255,0.6)',
            boxShadow: i % 2 === 0 ? '0 0 8px #00D4FF' : '0 0 6px #7B2FBE',
            animationDelay: p.delay,
            zIndex: 0,
          }} />
        ))}

        {/* ── خلفية: خطوط نيون أفقية ── */}
        {[10, 28, 46, 64, 82].map((top, i) => (
          <div key={i} style={{
            position: 'absolute', top: `${top}%`, left: 0, right: 0,
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? '#00D4FF' : '#7B2FBE'}18, transparent)`,
            zIndex: 0, pointerEvents: 'none',
          }} />
        ))}

        {/* ── خلفية: حلقات هولوغرام ── */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0, perspective: '800px' }}>
          {/* حلقة 1 */}
          <div className="hero-ring-1" style={{
            position: 'absolute',
            width: '600px', height: '600px',
            border: '2px solid rgba(0,212,255,0.2)',
            borderRadius: '50%',
            boxShadow: '0 0 30px rgba(0,212,255,0.1), inset 0 0 30px rgba(0,212,255,0.05)',
          }} />
          {/* حلقة 2 */}
          <div className="hero-ring-2" style={{
            position: 'absolute',
            width: '800px', height: '800px',
            border: '1px solid rgba(123,47,190,0.2)',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(123,47,190,0.1)',
          }} />
          {/* حلقة 3 */}
          <div className="hero-ring-3" style={{
            position: 'absolute',
            width: '420px', height: '420px',
            border: '3px solid rgba(0,212,255,0.15)',
            borderRadius: '50%',
            boxShadow: '0 0 40px rgba(0,212,255,0.08)',
          }} />
          {/* نقطة مركزية */}
          <div style={{
            position: 'absolute',
            width: '12px', height: '12px',
            background: '#00D4FF',
            borderRadius: '50%',
            boxShadow: '0 0 20px #00D4FF, 0 0 60px #00D4FF60',
          }} />
        </div>

        {/* ── خلفية: مكعبات طافية ── */}
        {/* مكعب 1 */}
        <div className="cube-float-1" style={{ position: 'absolute', top: '15%', right: '12%', zIndex: 0 }}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,20 55,45 30,55 5,45 5,20" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.04)" />
            <polygon points="30,5 55,20 30,30" stroke="#00D4FF" strokeWidth="1" fill="rgba(0,212,255,0.06)" />
            <line x1="30" y1="5" x2="30" y2="30" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="55" y1="20" x2="30" y2="30" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="5" y1="20" x2="30" y2="30" stroke="#00D4FF" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        </div>
        {/* مكعب 2 */}
        <div className="cube-float-2" style={{ position: 'absolute', bottom: '20%', left: '10%', zIndex: 0 }}>
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,20 55,45 30,55 5,45 5,20" stroke="#7B2FBE" strokeWidth="1.5" fill="rgba(123,47,190,0.04)" />
            <polygon points="30,5 55,20 30,30" stroke="#7B2FBE" strokeWidth="1" fill="rgba(123,47,190,0.06)" />
            <line x1="30" y1="5" x2="30" y2="30" stroke="#7B2FBE" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
        </div>
        {/* مكعب 3 */}
        <div className="cube-float-3" style={{ position: 'absolute', top: '60%', right: '20%', zIndex: 0 }}>
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,20 55,45 30,55 5,45 5,20" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" fill="rgba(0,212,255,0.02)" />
          </svg>
        </div>

        {/* ── هرمان ── */}
        <div className="pyramid-1" style={{ position: 'absolute', top: '20%', left: '15%', zIndex: 0 }}>
          <svg width="50" height="50" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,52 5,52" stroke="#7B2FBE" strokeWidth="1.5" fill="rgba(123,47,190,0.05)" />
            <line x1="30" y1="5" x2="30" y2="52" stroke="#7B2FBE" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        </div>
        <div className="pyramid-2" style={{ position: 'absolute', bottom: '25%', right: '8%', zIndex: 0 }}>
          <svg width="35" height="35" viewBox="0 0 60 60" fill="none">
            <polygon points="30,5 55,52 5,52" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.04)" />
          </svg>
        </div>

        {/* ── خط المسح ── */}
        <div className="scan-line" style={{
          position: 'absolute', left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)',
          zIndex: 0, pointerEvents: 'none',
        }} />

        {/* ── توهج الخلفية ── */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(123,47,190,0.04) 50%, transparent 70%)',
          borderRadius: '50%', zIndex: 0, pointerEvents: 'none',
        }} />

        {/* ── محتوى الـ Hero ── */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', textAlign: 'center', width: '100%' }}>

          {/* شارة */}
          <div className="fade-in" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)',
            borderRadius: '50px', padding: '8px 20px', marginBottom: '32px',
            fontFamily: 'Cairo, sans-serif', fontSize: '13px',
            color: '#00D4FF', fontWeight: '600',
          }}>
            <span style={{ animation: 'spinSlow 8s linear infinite', display: 'inline-block' }}>✦</span>
            منصة تعليمية جامعية جزائرية
          </div>

          {/* العنوان الكبير */}
          <h1 className="fade-in-d1" style={{
            fontFamily: 'Cairo, sans-serif', fontWeight: '900',
            fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: '1.15',
            margin: '0 0 16px', letterSpacing: '-1px',
          }}>
            <span className="glow-text">Holingo</span>
            <br />
            <span style={{ color: 'white', fontSize: 'clamp(32px, 5.5vw, 64px)' }}>هولينغو</span>
          </h1>

          {/* الوصف */}
          <p className="fade-in-d2" style={{
            fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', maxWidth: '640px',
            margin: '0 auto 28px',
          }}>
            منصة تحويل الدروس الأدبية إلى محتوى تفاعلي
            <br />
            بتقنية <span style={{ color: '#7B2FBE', fontWeight: '700' }}>الهولوغرام</span> و<span style={{ color: '#00D4FF', fontWeight: '700' }}>الموشن غرافيك</span>
          </p>

          {/* بطاقة عنوان المشروع */}
          <div className="fade-in-d3 neon-border" style={{
            background: 'rgba(0,212,255,0.04)',
            border: '1px solid rgba(0,212,255,0.3)',
            borderRadius: '20px', padding: '28px 36px',
            maxWidth: '680px', margin: '0 auto 48px',
          }}>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '11px', fontWeight: '700',
              color: '#00D4FF', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '14px',
            }}>مشروع التخرج</p>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '800',
              fontSize: 'clamp(15px, 2.5vw, 22px)', color: 'white',
              lineHeight: '1.5', margin: '0 0 8px',
            }}>
              دمج الموشن غرافيك وتقنية الهولوغرام في جودة التدريس
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '400',
              fontSize: 'clamp(12px, 1.8vw, 15px)',
              color: 'rgba(255,255,255,0.5)', margin: 0,
            }}>
              رؤية تطبيقية لتطوير الممارسات البيداغوجية في الجامعة
            </p>
          </div>

          {/* بطاقات الطالب والمشرف */}
          <div className="fade-in-d4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            {[
              { label: 'إعداد الطالب', name: 'محمد بوبركة', icon: '🎓', color: '#00D4FF' },
              { label: 'إشراف', name: 'أ.د. وهيب وهيبة', icon: '👩‍🏫', color: '#7B2FBE' },
            ].map((card, i) => (
              <div key={i} style={{
                flex: '1 1 200px',
                background: `rgba(${i === 0 ? '0,212,255' : '123,47,190'},0.08)`,
                border: `1px solid rgba(${i === 0 ? '0,212,255' : '123,47,190'},0.25)`,
                borderRadius: '16px', padding: '20px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{card.icon}</div>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '11px', color: card.color, marginBottom: '6px', fontWeight: '600', letterSpacing: '1px' }}>{card.label}</p>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '15px', color: 'white', fontWeight: '700', margin: 0 }}>{card.name}</p>
              </div>
            ))}
          </div>

          {/* سهم للأسفل */}
          <div style={{ marginTop: '60px' }}>
            <div
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              style={{
                width: '40px', height: '40px', margin: '0 auto',
                border: '2px solid rgba(0,212,255,0.35)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', animation: 'particleFloat 2s ease-in-out infinite',
                boxShadow: '0 0 12px rgba(0,212,255,0.2)',
              }}
            >
              <span style={{ color: '#00D4FF', fontSize: '18px' }}>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          لجنة المناقشة
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(22px, 3vw, 32px)', color: 'white', marginBottom: '12px' }}>
            لجنة المناقشة
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #00D4FF, #7B2FBE)', borderRadius: '2px', margin: '0 auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            background: 'rgba(0,212,255,0.06)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: '20px', padding: '32px 40px',
            textAlign: 'center', maxWidth: '420px', width: '100%',
            boxShadow: '0 0 40px rgba(0,212,255,0.08)',
          }}>
            <div style={{
              width: '64px', height: '64px', margin: '0 auto 16px',
              background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontFamily: 'Cairo, sans-serif',
              fontWeight: '800', fontSize: '22px', color: 'white',
              boxShadow: '0 8px 24px rgba(0,212,255,0.3)',
            }}>و.و</div>
            <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '18px', color: 'white', marginBottom: '8px' }}>
              أ.د. وهيب وهيبة
            </h3>
            <span style={{
              display: 'inline-block', padding: '4px 16px',
              background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)',
              borderRadius: '20px', fontFamily: 'Cairo, sans-serif',
              fontSize: '12px', color: '#00D4FF', fontWeight: '600', marginBottom: '8px',
            }}>مشرفاً ومقرراً</span>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: '8px 0 0' }}>
              المركز الجامعي مغنية
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          ما هو هولينغو؟
          ══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(123,47,190,0.05) 0%, rgba(0,212,255,0.03) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(22px, 3vw, 32px)', color: 'white', marginBottom: '20px' }}>
              ما هو هولينغو؟
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.6)', lineHeight: '2', maxWidth: '640px', margin: '0 auto',
            }}>
              هولينغو منصة تعليمية رقمية تهدف إلى تحويل الدروس الأدبية النظرية
              إلى محتوى تفاعلي عبر تقنيتي الموشن غرافيك والهولوغرام،
              لتطوير الممارسات البيداغوجية في التعليم الجامعي الجزائري
            </p>
          </div>

          {/* بطاقات الميزات */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '🎬', title: 'موشن غرافيك', desc: 'تحويل المفاهيم إلى رسوم متحركة تفاعلية', color: '#00D4FF', grad: 'rgba(0,212,255,0.08)' },
              { icon: '🔮', title: 'هولوغرام', desc: 'عرض المحتوى بأبعاد ثلاثية واقعية', color: '#7B2FBE', grad: 'rgba(123,47,190,0.08)' },
              { icon: '🎓', title: 'جودة التدريس', desc: 'تطوير الممارسات البيداغوجية الجامعية', color: '#00D4FF', grad: 'rgba(0,212,255,0.05)' },
            ].map((feat, i) => (
              <div key={i} style={{
                background: feat.grad,
                border: `1px solid rgba(${i === 1 ? '123,47,190' : '0,212,255'},0.2)`,
                borderRadius: '20px', padding: '32px 28px', textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px rgba(${i === 1 ? '123,47,190' : '0,212,255'},0.2)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feat.icon}</div>
                <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '18px', color: feat.color, marginBottom: '10px' }}>{feat.title}</h3>
                <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', margin: 0 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          فريق العمل
          ══════════════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(22px, 3vw, 32px)', color: 'white', marginBottom: '12px' }}>
            فريق العمل
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #7B2FBE, #00D4FF)', borderRadius: '2px', margin: '0 auto' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
          {team.map((member, i) => (
            <TeamCard key={i} name={member.name} initials={member.initials} color={teamColors[i]} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          اختيار نوع المستخدم
          ══════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(0,212,255,0.03) 0%, rgba(123,47,190,0.05) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: 'clamp(22px, 3vw, 32px)', color: 'white', marginBottom: '12px' }}>
              ابدأ تجربتك الآن
            </h2>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '0' }}>
              اختر نوع حسابك للانضمام إلى المنصة
            </p>
            <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, #00D4FF, #7B2FBE)', borderRadius: '2px', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <RoleCard
              icon="🎓" title="أنا طالب"
              description="تصفّح الدروس التفاعلية وتابع مشاريعك التعليمية"
              color="#00D4FF" colorLight="#00A8CC"
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
              color="#00D4FF" colorLight="#7B2FBE"
              href="/auth/register/freelancer"
            />
          </div>

          {/* رابط تسجيل الدخول */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a href="/auth/login" style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '14px',
              color: 'rgba(0,212,255,0.7)', textDecoration: 'none', fontWeight: '500',
              borderBottom: '1px solid rgba(0,212,255,0.3)', paddingBottom: '2px',
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
        borderTop: '1px solid rgba(0,212,255,0.1)',
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Cairo, sans-serif', fontWeight: '800',
            fontSize: '20px', letterSpacing: '2px', marginBottom: '8px',
          }}>
            <span className="glow-text">Holingo</span>
          </div>
          <p style={{
            fontFamily: 'Cairo, sans-serif', fontSize: '13px',
            color: 'rgba(255,255,255,0.35)', margin: 0,
          }}>
            © 2026 Holingo — جميع الحقوق محفوظة
          </p>
        </div>
      </footer>

    </div>
  );
}
