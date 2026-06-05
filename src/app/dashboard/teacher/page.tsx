// لوحة تحكم الأستاذ
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const teacherLessons = [
  { id: 1, title: 'الفصاحة والبلاغة في القرآن الكريم', status: 'منشور', views: 824, students: 312 },
  { id: 2, title: 'المذاهب الأدبية الحديثة', status: 'قيد التحويل', views: 0, students: 0 },
  { id: 3, title: 'تحليل النصوص الأدبية', status: 'مسودة', views: 0, students: 0 },
];

const statsData = [
  { label: 'إجمالي الدروس', value: '3', icon: '📚', color: '#1E3A5F', bg: '#EEF4FF' },
  { label: 'الطلاب المشتركون', value: '312', icon: '🎓', color: '#4A1D8F', bg: '#F3EEFF' },
  { label: 'إجمالي المشاهدات', value: '824', icon: '👁️', color: '#8B6914', bg: '#FDF8EC' },
  { label: 'مشاريع بانتظار التحويل', value: '1', icon: '⚙️', color: '#059669', bg: '#D1FAE5' },
];

export default function TeacherDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('holingo_user');
    if (!stored) { router.push('/auth/login'); return; }
    const parsed = JSON.parse(stored);
    if (parsed.role !== 'TEACHER') { router.push('/auth/login'); return; }
    setUser(parsed);
  }, [router]);

  if (!user) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Cairo, sans-serif', color: '#8B6914' }}>⏳ جاري التحميل...</div>;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#FBF8F2', direction: 'rtl', fontFamily: 'Cairo, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px', background: 'white', borderLeft: '1px solid #E5E7EB',
        padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '6px',
        position: 'fixed', top: 0, right: 0, height: '100vh', zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 8px', marginBottom: '24px' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #8B6914, #B8900F)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '16px' }}>ه</span>
          </div>
          <span style={{ fontWeight: '800', fontSize: '18px', color: '#8B6914' }}>Holingo</span>
        </div>
        {[
          { icon: '🏠', label: 'الرئيسية' },
          { icon: '📤', label: 'رفع درس جديد' },
          { icon: '📊', label: 'الإحصائيات' },
          { icon: '👤', label: 'الملف الشخصي' },
        ].map((link, i) => (
          <div key={i} className="sidebar-link" style={{ color: i === 0 ? 'white' : undefined, background: i === 0 ? 'linear-gradient(135deg, #8B6914, #B8900F)' : undefined }}>
            <span style={{ fontSize: '18px' }}>{link.icon}</span>
            <span>{link.label}</span>
          </div>
        ))}
        <div style={{ flexGrow: 1 }} />
        <div style={{ padding: '14px 12px', background: '#FDF8EC', borderRadius: '12px', border: '1px solid rgba(139, 105, 20, 0.15)' }}>
          <div style={{ fontWeight: '700', fontSize: '13px', color: '#8B6914', marginBottom: '2px' }}>📚 {user.name}</div>
          <div style={{ fontSize: '11px', color: '#9CA3AF' }}>{user.academicRank || 'أستاذ'}</div>
        </div>
        <button onClick={() => { localStorage.removeItem('holingo_user'); router.push('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontFamily: 'Cairo, sans-serif', fontSize: '13px', fontWeight: '600', width: '100%' }}>
          <span>🚪</span> تسجيل الخروج
        </button>
      </aside>

      {/* Main */}
      <main style={{ marginRight: '240px', flex: 1, padding: '32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontWeight: '800', fontSize: '24px', color: '#1A1A2E', marginBottom: '4px' }}>أهلاً، {user.name?.split(' ')[0]} 📚</h1>
          <p style={{ fontSize: '14px', color: '#9CA3AF' }}>{user.institution || 'لوحة تحكم الأستاذ'} • {user.department || ''}</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          {statsData.map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '22px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: `1px solid ${stat.color}15` }}>
              <div style={{ width: '46px', height: '46px', background: stat.bg, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '12px' }}>{stat.icon}</div>
              <div style={{ fontWeight: '800', fontSize: '28px', color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Upload CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #8B6914, #B8900F)', borderRadius: '20px', padding: '28px 32px',
          marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 8px 30px rgba(139, 105, 20, 0.3)',
        }}>
          <div style={{ color: 'white' }}>
            <h3 style={{ fontWeight: '800', fontSize: '20px', marginBottom: '6px' }}>📤 أضف درساً جديداً</h3>
            <p style={{ fontSize: '14px', opacity: 0.85 }}>ارفع ملفاتك ليحوّلها العمال الأحرار إلى محتوى تفاعلي</p>
          </div>
          <button style={{
            padding: '12px 28px', background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: '12px', color: 'white', fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '15px', cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}>
            رفع الآن
          </button>
        </div>

        {/* My Lessons */}
        <div>
          <h2 style={{ fontWeight: '800', fontSize: '20px', color: '#1A1A2E', marginBottom: '16px' }}>📋 دروسي</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {teacherLessons.map(lesson => (
              <div key={lesson.id} style={{
                background: 'white', borderRadius: '14px', padding: '18px 22px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', gap: '16px',
              }}>
                <div style={{ width: '46px', height: '46px', background: '#FDF8EC', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>📝</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E', marginBottom: '4px' }}>{lesson.title}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF' }}>👁️ {lesson.views} مشاهدة • 🎓 {lesson.students} طالب</div>
                </div>
                <span style={{
                  padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                  background: lesson.status === 'منشور' ? '#D1FAE5' : lesson.status === 'قيد التحويل' ? '#DBEAFE' : '#F3F4F6',
                  color: lesson.status === 'منشور' ? '#065F46' : lesson.status === 'قيد التحويل' ? '#1E40AF' : '#6B7280',
                }}>
                  {lesson.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
