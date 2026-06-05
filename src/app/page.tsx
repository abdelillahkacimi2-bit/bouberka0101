// Landing page - صفحة الهبوط
'use client';

import Navbar from '@/components/Navbar';
import RoleCard from '@/components/RoleCard';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      {/* Background Arabic Decorative Letters */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <span className="arabic-decor" style={{
          position: 'absolute',
          fontSize: '50vw',
          top: '-10%',
          right: '-15%',
          color: '#1E3A5F',
          lineHeight: 1,
        }}>ع</span>
        <span className="arabic-decor" style={{
          position: 'absolute',
          fontSize: '30vw',
          bottom: '-5%',
          left: '-10%',
          color: '#4A1D8F',
          lineHeight: 1,
        }}>ل</span>
        <span className="arabic-decor" style={{
          position: 'absolute',
          fontSize: '20vw',
          top: '40%',
          left: '10%',
          color: '#8B6914',
          lineHeight: 1,
        }}>م</span>
      </div>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        zIndex: 1,
        paddingTop: '120px',
        paddingBottom: '60px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '120px 24px 60px',
      }}>
        {/* Badge */}
        <div className="animate-fade-in-up" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(30, 58, 95, 0.08)',
          border: '1px solid rgba(30, 58, 95, 0.15)',
          borderRadius: '50px',
          padding: '6px 20px',
          marginBottom: '28px',
          fontFamily: 'Cairo, sans-serif',
          fontSize: '13px',
          color: '#1E3A5F',
          fontWeight: '600',
        }}>
          <span>✨</span>
          منصة تعليمية للجامعات الجزائرية
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up delay-100" style={{
          fontFamily: 'Cairo, sans-serif',
          fontWeight: '900',
          fontSize: 'clamp(36px, 6vw, 72px)',
          lineHeight: '1.2',
          color: '#1A1A2E',
          marginBottom: '20px',
          animationFillMode: 'forwards',
          opacity: 0,
        }}>
          حوّل دروسك إلى
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #1E3A5F, #4A1D8F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>تجربة تفاعلية</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200" style={{
          fontFamily: 'Cairo, sans-serif',
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: '#6B7280',
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto 48px',
          animationFillMode: 'forwards',
          opacity: 0,
        }}>
          منصة <strong style={{ color: '#1E3A5F' }}>Holingo</strong> تحوّل المحتوى الأدبي النظري إلى فيديوهات
          <strong style={{ color: '#4A1D8F' }}> موشن غرافيك</strong> وعروض
          <strong style={{ color: '#8B6914' }}> هولوغرام</strong> تفاعلية
        </p>

        {/* Stats Row */}
        <div className="animate-fade-in-up delay-300" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '64px',
          flexWrap: 'wrap',
          animationFillMode: 'forwards',
          opacity: 0,
        }}>
          {[
            { num: '+50', label: 'درساً تفاعلياً' },
            { num: '+200', label: 'أستاذ مسجّل' },
            { num: '+1000', label: 'طالب مستفيد' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: '800',
                fontSize: '28px',
                color: '#1E3A5F',
                lineHeight: 1,
              }}>{stat.num}</div>
              <div style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: '13px',
                color: '#9CA3AF',
                marginTop: '4px',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Role Selection Title */}
        <div className="animate-fade-in-up delay-400" style={{
          marginBottom: '32px',
          animationFillMode: 'forwards',
          opacity: 0,
        }}>
          <p style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: '16px',
            color: '#6B7280',
            fontWeight: '500',
          }}>
            اختر نوع حسابك للبدء
          </p>
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #1E3A5F, #4A1D8F)',
            borderRadius: '2px',
            margin: '12px auto 0',
          }} />
        </div>
      </section>

      {/* Role Cards */}
      <section style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        <RoleCard
          icon="🎓"
          title="أنا طالب"
          color="#1E3A5F"
          colorLight="#2A4E80"
          colorPale="#EEF4FF"
          href="/auth/register/student"
          delay={500}
        />
        <RoleCard
          icon="📚"
          title="أنا أستاذ"
          color="#8B6914"
          colorLight="#B8900F"
          colorPale="#FDF8EC"
          href="/auth/register/teacher"
          delay={600}
        />
        <RoleCard
          icon="🎬"
          title="أنا عامل حر"
          description="لتحويل ملفات الأساتذة إلى فيديو أو هولوغرام"
          color="#4A1D8F"
          colorLight="#6329BC"
          colorPale="#F3EEFF"
          href="/auth/register/freelancer"
          delay={700}
        />
      </section>

      {/* Features strip */}
      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F, #4A1D8F)',
        padding: '60px 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          {[
            { icon: '🎯', title: 'محتوى مخصص', desc: 'دروس مصممة خصيصاً للمنهج الجزائري' },
            { icon: '📱', title: 'يعمل على الجوال', desc: 'تجربة سلسة على جميع الأجهزة' },
            { icon: '🎬', title: 'موشن غرافيك', desc: 'تحويل احترافي للمحتوى الأدبي' },
            { icon: '🔮', title: 'هولوغرام', desc: 'تقنية عرض مستقبلية للفصول الدراسية' },
          ].map((feat, i) => (
            <div key={i} style={{ color: 'white' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{feat.icon}</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '16px', marginBottom: '8px' }}>{feat.title}</h3>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', opacity: 0.75, lineHeight: '1.6' }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1A1A2E',
        color: 'white',
        textAlign: 'center',
        padding: '32px 24px',
        fontFamily: 'Cairo, sans-serif',
        fontSize: '13px',
        opacity: 0.9,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ marginBottom: '8px', fontSize: '18px', fontWeight: '700' }}>Holingo</div>
        <div style={{ opacity: 0.6 }}>
          © 2024 Holingo — منصة تعليمية للجامعات الجزائرية
        </div>
      </footer>
    </div>
  );
}
