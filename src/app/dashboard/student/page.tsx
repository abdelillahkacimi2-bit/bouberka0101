// لوحة تحكم الطالب
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const sidebarLinks = [
  { icon: '🏠', label: 'الرئيسية', id: 'home' },
  { icon: '📖', label: 'دروسي', id: 'lessons' },
  { icon: '📋', label: 'طلباتي', id: 'requests' },
  { icon: '👤', label: 'الملف الشخصي', id: 'profile' },
];

const availableLessons = [
  { id: 1, title: 'مخارج الحروف العربية', subject: 'علم الأصوات', level: 'ليسانس 1', type: 'موشن غرافيك', icon: '🎬', color: '#1E3A5F', duration: '12 دقيقة', views: 1240 },
  { id: 2, title: 'البلاغة العربية — علم البيان', subject: 'البلاغة', level: 'ليسانس 2', type: 'هولوغرام', icon: '🔮', color: '#4A1D8F', duration: '18 دقيقة', views: 876 },
  { id: 3, title: 'النحو العربي — الجملة الاسمية', subject: 'النحو والصرف', level: 'ليسانس 1', type: 'موشن غرافيك', icon: '🎬', color: '#1E3A5F', duration: '15 دقيقة', views: 2100 },
  { id: 4, title: 'اللسانيات الحديثة — دوسوسير', subject: 'اللسانيات', level: 'ليسانس 3', type: 'فيديو', icon: '🎞️', color: '#8B6914', duration: '22 دقيقة', views: 540 },
  { id: 5, title: 'الأدب الجاهلي — المعلقات', subject: 'تاريخ الأدب', level: 'ليسانس 2', type: 'هولوغرام', icon: '🔮', color: '#4A1D8F', duration: '28 دقيقة', views: 763 },
  { id: 6, title: 'علم العروض والقافية', subject: 'الأدب', level: 'ليسانس 3', type: 'موشن غرافيك', icon: '🎬', color: '#1E3A5F', duration: '20 دقيقة', views: 420 },
];

const pendingProjects = [
  { id: 1, title: 'الفصاحة والبلاغة في القرآن الكريم', teacher: 'د. بن عمر', status: 'قيد التحويل', progress: 65, type: 'موشن غرافيك' },
  { id: 2, title: 'المذاهب الأدبية الحديثة', teacher: 'د. فاطمة سعيد', status: 'في الانتظار', progress: 0, type: 'هولوغرام' },
  { id: 3, title: 'تحليل النصوص الأدبية', teacher: 'د. يوسف بلعباس', status: 'اكتمل', progress: 100, type: 'فيديو' },
];

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, string> | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('holingo_user');
    if (!stored) { router.push('/auth/login'); return; }
    const parsed = JSON.parse(stored);
    if (parsed.role !== 'STUDENT') { router.push('/auth/login'); return; }
    setUser(parsed);
  }, [router]);

  if (!user) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Cairo, sans-serif', fontSize: '16px', color: '#1E3A5F' }}>
      ⏳ جاري التحميل...
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F6FB', direction: 'rtl', fontFamily: 'Cairo, sans-serif' }}>

      {/* Sidebar */}
      <aside style={{
        width: '240px', background: 'white', borderLeft: '1px solid #E5E7EB',
        padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '6px',
        position: 'fixed', top: 0, right: 0, height: '100vh', zIndex: 100,
        transition: 'transform 0.3s ease',
        transform: sidebarOpen ? 'translateX(0)' : undefined,
      }} className="sidebar">
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 8px', marginBottom: '24px' }}>
          <div style={{
            width: '36px', height: '36px', background: 'linear-gradient(135deg, #1E3A5F, #2A4E80)',
            borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '16px' }}>ه</span>
          </div>
          <span style={{ fontWeight: '800', fontSize: '18px', color: '#1E3A5F' }}>Holingo</span>
        </div>

        {sidebarLinks.map(link => (
          <div
            key={link.id}
            className={`sidebar-link ${activeTab === link.id ? 'active' : ''}`}
            onClick={() => { setActiveTab(link.id); setSidebarOpen(false); }}
          >
            <span style={{ fontSize: '18px' }}>{link.icon}</span>
            <span>{link.label}</span>
          </div>
        ))}

        <div style={{ flexGrow: 1 }} />

        {/* User info */}
        <div style={{
          padding: '14px 12px', background: '#EEF4FF', borderRadius: '12px',
          border: '1px solid rgba(30, 58, 95, 0.1)',
        }}>
          <div style={{ fontWeight: '700', fontSize: '13px', color: '#1E3A5F', marginBottom: '2px' }}>
            🎓 {user.name}
          </div>
          <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{user.studyYear || 'طالب'}</div>
          <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>{user.university?.split(' ')[1] || 'الجامعة'}</div>
        </div>

        <button
          onClick={() => { localStorage.removeItem('holingo_user'); router.push('/'); }}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px',
            borderRadius: '10px', background: 'none', border: 'none', cursor: 'pointer',
            color: '#EF4444', fontFamily: 'Cairo, sans-serif', fontSize: '13px', fontWeight: '600',
            transition: 'background 0.2s ease', width: '100%',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#FEF2F2')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          <span>🚪</span> تسجيل الخروج
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ marginRight: '240px', flex: 1, padding: '32px', minHeight: '100vh', position: 'relative' }} className="main-content">

        {/* Top bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px',
        }}>
          <div>
            <h1 style={{ fontWeight: '800', fontSize: '24px', color: '#1A1A2E', marginBottom: '4px' }}>
              أهلاً، {user.name?.split(' ')[0]} 👋
            </h1>
            <p style={{ fontSize: '14px', color: '#9CA3AF' }}>
              {new Date().toLocaleDateString('ar-DZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{
              padding: '8px 16px', background: 'linear-gradient(135deg, #EEF4FF, #E8EFFE)',
              borderRadius: '10px', fontSize: '13px', fontWeight: '600', color: '#1E3A5F',
              border: '1px solid rgba(30, 58, 95, 0.12)',
            }}>
              🎓 {user.studyYear || 'ليسانس'}
            </div>
          </div>
        </div>

        {/* Featured Video */}
        <div style={{
          background: 'white', borderRadius: '20px', padding: '28px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)', marginBottom: '28px',
          border: '1px solid rgba(30, 58, 95, 0.06)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{
              width: '38px', height: '38px', background: 'linear-gradient(135deg, #1E3A5F, #2A4E80)',
              borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
            }}>⭐</div>
            <div>
              <h2 style={{ fontWeight: '800', fontSize: '18px', color: '#1A1A2E' }}>الدرس المميز</h2>
              <p style={{ fontSize: '12px', color: '#9CA3AF' }}>اختيار المحررين — هذا الأسبوع</p>
            </div>
            <div style={{ marginRight: 'auto' }}>
              <span style={{
                padding: '4px 12px', background: '#EEF4FF', color: '#1E3A5F',
                borderRadius: '20px', fontSize: '12px', fontWeight: '600',
              }}>🎬 موشن غرافيك</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '24px', alignItems: 'start' }}>
            <div>
              <YouTubeEmbed videoId="Jl6O3wepoAE" title="مخارج الحروف العربية" startTime={55} />
            </div>
            <div>
              <h3 style={{ fontWeight: '800', fontSize: '22px', color: '#1E3A5F', marginBottom: '12px', lineHeight: '1.4' }}>
                مخارج الحروف العربية
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.8', marginBottom: '20px' }}>
                تعرف على مخارج الحروف العربية بطريقة تفاعلية مبتكرة — الدرس يشرح كيفية النطق الصحيح لكل حرف من الحروف الهجائية العربية وموضعه الدقيق في جهاز النطق.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { icon: '⏱️', label: '12 دقيقة' },
                  { icon: '📚', label: 'علم الأصوات' },
                  { icon: '👁️', label: '1,240 مشاهدة' },
                  { icon: '⭐', label: '4.8 / 5.0' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6B7280' }}>
                    <span>{item.icon}</span><span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Available Lessons */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontWeight: '800', fontSize: '20px', color: '#1A1A2E' }}>📖 الدروس المتاحة</h2>
            <span style={{ fontSize: '13px', color: '#1E3A5F', fontWeight: '600', cursor: 'pointer' }}>عرض الكل ←</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {availableLessons.map(lesson => (
              <div key={lesson.id} style={{
                background: 'white', borderRadius: '16px', padding: '20px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 30px ${lesson.color}15`;
                (e.currentTarget as HTMLDivElement).style.borderColor = `${lesson.color}40`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB';
              }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', background: `${lesson.color}15`,
                    borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px',
                  }}>{lesson.icon}</div>
                  <span style={{
                    padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                    background: `${lesson.color}10`, color: lesson.color,
                  }}>{lesson.type}</span>
                </div>
                <h3 style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E', marginBottom: '6px', lineHeight: '1.4' }}>
                  {lesson.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '14px' }}>
                  {lesson.subject} • {lesson.level}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#9CA3AF' }}>
                  <span>⏱️ {lesson.duration}</span>
                  <span>👁️ {lesson.views.toLocaleString('ar')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Projects */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontWeight: '800', fontSize: '20px', color: '#1A1A2E' }}>⚙️ المشاريع قيد الإنجاز</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pendingProjects.map(proj => (
              <div key={proj.id} style={{
                background: 'white', borderRadius: '14px', padding: '18px 22px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', gap: '16px',
              }}>
                <div style={{
                  width: '46px', height: '46px', background: '#EEF4FF', borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0,
                }}>
                  {proj.type === 'موشن غرافيك' ? '🎬' : proj.type === 'هولوغرام' ? '🔮' : '🎞️'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#1A1A2E', marginBottom: '4px' }}>{proj.title}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '10px' }}>{proj.teacher} • {proj.type}</div>
                  <div style={{ height: '6px', background: '#F3F4F6', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: '3px',
                      width: `${proj.progress}%`,
                      background: proj.progress === 100
                        ? 'linear-gradient(90deg, #10B981, #059669)'
                        : proj.progress > 0
                          ? 'linear-gradient(90deg, #1E3A5F, #2A4E80)'
                          : '#E5E7EB',
                      transition: 'width 0.5s ease',
                    }} />
                  </div>
                </div>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{
                    padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                    background: proj.progress === 100 ? '#D1FAE5' : proj.progress > 0 ? '#DBEAFE' : '#F3F4F6',
                    color: proj.progress === 100 ? '#065F46' : proj.progress > 0 ? '#1E40AF' : '#6B7280',
                  }}>
                    {proj.status}
                  </div>
                  <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>{proj.progress}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style jsx>{`
        @media (max-width: 900px) {
          .sidebar { transform: translateX(100%); }
          .main-content { margin-right: 0 !important; padding: 20px !important; }
        }
      `}</style>
    </div>
  );
}
