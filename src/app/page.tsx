// Landing page - صفحة الهبوط
'use client';

import Navbar from '@/components/Navbar';
import RoleCard from '@/components/RoleCard';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      {/* ════════════════════════════════════════
          القسم التعريفي — غلاف المذكرة الجامعية
          ════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2A2D7C 50%, #4A1D8F 100%)',
        overflow: 'hidden',
        paddingTop: '64px', // ارتفاع الـ Navbar
      }}>
        {/* زخارف عربية خطية في الخلفية */}
        <span style={{
          position: 'absolute', fontFamily: 'Cairo, sans-serif', fontWeight: '900',
          fontSize: '55vw', top: '-15%', right: '-20%', color: 'rgba(255,255,255,0.03)',
          lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        }}>ع</span>
        <span style={{
          position: 'absolute', fontFamily: 'Cairo, sans-serif', fontWeight: '900',
          fontSize: '35vw', bottom: '-10%', left: '-10%', color: 'rgba(255,255,255,0.03)',
          lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        }}>ل</span>
        <span style={{
          position: 'absolute', fontFamily: 'Cairo, sans-serif', fontWeight: '900',
          fontSize: '20vw', top: '30%', left: '20%', color: 'rgba(255,255,255,0.025)',
          lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
        }}>م</span>

        {/* نمط نقطي خفيف */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
        }} />

        {/* المحتوى */}
        <div style={{
          position: 'relative', zIndex: 1,
          maxWidth: '900px', margin: '0 auto',
          padding: '60px 24px 70px',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0',
        }}>

          {/* ── معلومات المؤسسة ── */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '4px', marginBottom: '36px',
          }}>
            {[
              { text: 'الجمهورية الجزائرية الديمقراطية الشعبية', size: '13px', weight: '500', opacity: 0.75 },
              { text: 'وزارة التعليم العالي والبحث العلمي', size: '13px', weight: '500', opacity: 0.75 },
              { text: 'المركز الجامعي بمغنية', size: '15px', weight: '700', opacity: 0.95 },
              { text: 'معهد الآداب واللغات — قسم اللغة والأدب العربي', size: '14px', weight: '600', opacity: 0.85 },
              { text: 'تخصص: لسانيات تطبيقية', size: '13px', weight: '500', opacity: 0.75 },
            ].map((line, i) => (
              <p key={i} style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: line.size,
                fontWeight: line.weight,
                color: `rgba(255,255,255,${line.opacity})`,
                margin: 0,
                lineHeight: '1.7',
              }}>{line.text}</p>
            ))}
          </div>

          {/* ── خط فاصل زخرفي ── */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            width: '100%', maxWidth: '500px', marginBottom: '36px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>❖</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          </div>

          {/* ── شعار Holingo ── */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            marginBottom: '28px',
          }}>
            <div style={{
              width: '80px', height: '80px',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255,255,255,0.25)',
              borderRadius: '22px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '14px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}>
              <span style={{
                fontFamily: 'Cairo, sans-serif', fontWeight: '900',
                fontSize: '42px', color: 'white', lineHeight: 1,
              }}>ه</span>
            </div>
            <div style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '900',
              fontSize: 'clamp(32px, 5vw, 52px)', color: 'white',
              letterSpacing: '3px', lineHeight: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}>Holingo</div>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '14px',
              color: 'rgba(255,255,255,0.65)', marginTop: '8px',
              fontWeight: '400', letterSpacing: '0.5px',
            }}>
              منصة تحويل الدروس الأدبية إلى محتوى تفاعلي
            </p>
          </div>

          {/* ── خط فاصل زخرفي ── */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            width: '100%', maxWidth: '500px', marginBottom: '36px',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>❖</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          </div>

          {/* ── عنوان المشروع ── */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '20px',
            padding: '28px 36px',
            maxWidth: '700px',
            width: '100%',
            marginBottom: '36px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontSize: '11px', fontWeight: '600',
              color: 'rgba(255,255,255,0.5)', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>
              مشروع التخرج
            </p>
            <h2 style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '800',
              fontSize: 'clamp(17px, 3vw, 24px)', color: 'white',
              lineHeight: '1.5', marginBottom: '10px', margin: '0 0 10px',
            }}>
              دمج الموشن غرافيك وتقنية الهولوغرام في جودة التدريس
            </h2>
            <p style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '400',
              fontSize: 'clamp(13px, 2vw, 16px)',
              color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', margin: 0,
            }}>
              رؤية تطبيقية لتطوير الممارسات البيداغوجية في الجامعة
            </p>
          </div>

          {/* ── الأشخاص ── */}
          <div style={{
            display: 'flex', gap: '16px', flexWrap: 'wrap',
            justifyContent: 'center', alignItems: 'stretch',
            width: '100%', maxWidth: '680px',
          }}>
            {/* إعداد الطالب */}
            <div style={{
              flex: '1 1 200px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              padding: '20px 22px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎓</div>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '11px',
                color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: '500',
              }}>إعداد الطالب</p>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '15px',
                color: 'white', fontWeight: '700', margin: 0,
              }}>محمد بوبركة</p>
            </div>

            {/* إشراف */}
            <div style={{
              flex: '1 1 200px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              padding: '20px 22px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>👩‍🏫</div>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '11px',
                color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: '500',
              }}>إشراف</p>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '15px',
                color: 'white', fontWeight: '700', margin: 0,
              }}>أ.د. وهيب وهيبة</p>
            </div>

            {/* السنة الجامعية */}
            <div style={{
              flex: '1 1 160px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '16px',
              padding: '20px 22px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📅</div>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '11px',
                color: 'rgba(255,255,255,0.5)', marginBottom: '6px', fontWeight: '500',
              }}>السنة الجامعية</p>
              <p style={{
                fontFamily: 'Cairo, sans-serif', fontSize: '15px',
                color: 'white', fontWeight: '700', margin: 0,
              }}>2025 — 2026</p>
            </div>
          </div>

          {/* ── سهم للأسفل ── */}
          <div style={{ marginTop: '48px' }}>
            <div style={{
              width: '36px', height: '36px', margin: '0 auto',
              border: '2px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'float 2s ease-in-out infinite',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1 }}>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          الجزء الثاني — اختيار نوع المستخدم
          ════════════════════════════════════════ */}

      {/* Background Arabic Decorative Letters */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        pointerEvents: 'none', overflow: 'hidden',
      }}>
        <span className="arabic-decor" style={{
          position: 'absolute', fontSize: '50vw',
          top: '-10%', right: '-15%', color: '#1E3A5F', lineHeight: 1,
        }}>ع</span>
        <span className="arabic-decor" style={{
          position: 'absolute', fontSize: '30vw',
          bottom: '-5%', left: '-10%', color: '#4A1D8F', lineHeight: 1,
        }}>ل</span>
        <span className="arabic-decor" style={{
          position: 'absolute', fontSize: '20vw',
          top: '40%', left: '10%', color: '#8B6914', lineHeight: 1,
        }}>م</span>
      </div>

      {/* Hero Section */}
      <section style={{
        position: 'relative', zIndex: 1,
        maxWidth: '900px', margin: '0 auto',
        padding: '80px 24px 40px',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <div className="animate-fade-in-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(30, 58, 95, 0.08)',
          border: '1px solid rgba(30, 58, 95, 0.15)',
          borderRadius: '50px', padding: '6px 20px', marginBottom: '28px',
          fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#1E3A5F', fontWeight: '600',
        }}>
          <span>✨</span>
          منصة تعليمية للجامعات الجزائرية
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up delay-100" style={{
          fontFamily: 'Cairo, sans-serif', fontWeight: '900',
          fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: '1.2',
          color: '#1A1A2E', marginBottom: '20px',
          animationFillMode: 'forwards', opacity: 0,
        }}>
          حوّل دروسك إلى
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #1E3A5F, #4A1D8F)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>تجربة تفاعلية</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200" style={{
          fontFamily: 'Cairo, sans-serif', fontSize: 'clamp(15px, 2vw, 18px)',
          color: '#6B7280', lineHeight: '1.8', maxWidth: '600px',
          margin: '0 auto 48px', animationFillMode: 'forwards', opacity: 0,
        }}>
          منصة <strong style={{ color: '#1E3A5F' }}>Holingo</strong> تحوّل المحتوى الأدبي النظري إلى فيديوهات
          <strong style={{ color: '#4A1D8F' }}> موشن غرافيك</strong> وعروض
          <strong style={{ color: '#8B6914' }}> هولوغرام</strong> تفاعلية
        </p>

        {/* Stats Row */}
        <div className="animate-fade-in-up delay-300" style={{
          display: 'flex', justifyContent: 'center', gap: '40px',
          marginBottom: '64px', flexWrap: 'wrap',
          animationFillMode: 'forwards', opacity: 0,
        }}>
          {[
            { num: '+50', label: 'درساً تفاعلياً' },
            { num: '+200', label: 'أستاذ مسجّل' },
            { num: '+1000', label: 'طالب مستفيد' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '28px', color: '#1E3A5F', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Role Selection Title */}
        <div className="animate-fade-in-up delay-400" style={{ marginBottom: '32px', animationFillMode: 'forwards', opacity: 0 }}>
          <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '16px', color: '#6B7280', fontWeight: '500' }}>
            اختر نوع حسابك للبدء
          </p>
          <div style={{
            width: '60px', height: '3px',
            background: 'linear-gradient(90deg, #1E3A5F, #4A1D8F)',
            borderRadius: '2px', margin: '12px auto 0',
          }} />
        </div>
      </section>

      {/* Role Cards */}
      <section style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1100px', margin: '0 auto',
        padding: '0 24px 100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        <RoleCard icon="🎓" title="أنا طالب" color="#1E3A5F" colorLight="#2A4E80" colorPale="#EEF4FF" href="/auth/register/student" delay={500} />
        <RoleCard icon="📚" title="أنا أستاذ" color="#8B6914" colorLight="#B8900F" colorPale="#FDF8EC" href="/auth/register/teacher" delay={600} />
        <RoleCard icon="🎬" title="أنا عامل حر" description="لتحويل ملفات الأساتذة إلى فيديو أو هولوغرام" color="#4A1D8F" colorLight="#6329BC" colorPale="#F3EEFF" href="/auth/register/freelancer" delay={700} />
      </section>

      {/* Features strip */}
      <section style={{
        background: 'linear-gradient(135deg, #1E3A5F, #4A1D8F)',
        padding: '60px 24px', position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '32px', textAlign: 'center',
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

      <Footer />
    </div>
  );
}
