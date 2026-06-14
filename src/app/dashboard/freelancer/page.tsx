// لوحة تحكم العامل الحر
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

const availableProjects = [
  { id: 1, title: 'مخارج الحروف العربية — المستوى المتقدم', teacher: 'د. بن عمر محمد', type: 'موشن غرافيك', budget: '8,000 دج', deadline: '5 أيام', priority: 'عاجل' },
  { id: 2, title: 'الفصاحة والبلاغة في القرآن الكريم', teacher: 'د. فاطمة سعيد', type: 'هولوغرام', budget: '15,000 دج', deadline: '14 يوماً', priority: 'عادي' },
  { id: 3, title: 'النحو العربي — الجملة الفعلية', teacher: 'د. يوسف بلعباس', type: 'مونتاج فيديو', budget: '5,000 دج', deadline: '7 أيام', priority: 'عادي' },
  { id: 4, title: 'اللسانيات — نظرية التواصل', teacher: 'د. أمال رحماني', type: 'موشن غرافيك', budget: '10,000 دج', deadline: '10 أيام', priority: 'متوسط' },
];

const myProjects = [
  { id: 1, title: 'مخارج الحروف العربية', client: 'د. بن عمر', progress: 65, status: 'جاري العمل', payment: 'قيد المعالجة' },
  { id: 2, title: 'الأدب الجاهلي — عرض هولوغرامي', client: 'د. خالد سليماني', progress: 100, status: 'مكتمل', payment: 'تم الدفع' },
];

export default function FreelancerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Record<string, string | string[]> | null>(null);
  const [activeTab, setActiveTab] = useState<'available' | 'mine'>('available');

  useEffect(() => {
    const stored = localStorage.getItem('holingo_user');
    if (!stored) { router.push('/auth/login'); return; }
    const parsed = JSON.parse(stored);
    if (parsed.role !== 'FREELANCER') { router.push('/auth/login'); return; }
    setUser(parsed);
  }, [router]);

  if (!user) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Cairo, sans-serif', color: '#4A1D8F' }}>⏳ جاري التحميل...</div>;

  const services = Array.isArray(user.services) ? user.services : [];

  const serviceIcons: Record<string, string> = { motion: '🎬 موشن غرافيك', hologram: '🔮 هولوغرام', montage: '🎞️ مونتاج', graphic: '🎨 غرافيك' };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F5F0FF', direction: 'rtl', fontFamily: 'Cairo, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px', background: 'white', borderLeft: '1px solid #E5E7EB',
        padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '6px',
        position: 'fixed', top: 0, right: 0, height: '100vh', zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 8px', marginBottom: '24px' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #4A1D8F, #6329BC)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '16px' }}>ه</span>
          </div>
          <span style={{ fontWeight: '800', fontSize: '18px', color: '#4A1D8F' }}>Holingo</span>
        </div>
        {[
          { icon: '🏠', label: 'الرئيسية', active: true },
          { icon: '📋', label: 'المشاريع المتاحة', active: false },
          { icon: '💼', label: 'مشاريعي', active: false },
          { icon: '💰', label: 'المدفوعات', active: false },
          { icon: '👤', label: 'الملف الشخصي', active: false },
        ].map((link, i) => (
          <div key={i} className="sidebar-link" style={{
            color: link.active ? 'white' : undefined,
            background: link.active ? 'linear-gradient(135deg, #4A1D8F, #6329BC)' : undefined,
          }}>
            <span style={{ fontSize: '18px' }}>{link.icon}</span>
            <span>{link.label}</span>
          </div>
        ))}
        <div style={{ flexGrow: 1 }} />

        {/* Services tags */}
        {services.length > 0 && (
          <div style={{ padding: '12px', background: '#F3EEFF', borderRadius: '12px', marginBottom: '8px' }}>
            <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '600', marginBottom: '8px' }}>خدماتك:</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {services.map((s: string) => (
                <span key={s} style={{ padding: '2px 8px', background: '#4A1D8F15', color: '#4A1D8F', borderRadius: '8px', fontSize: '10px', fontWeight: '600' }}>
                  {serviceIcons[s]?.split(' ')[0]} {s}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ padding: '14px 12px', background: '#F3EEFF', borderRadius: '12px', border: '1px solid rgba(74, 29, 143, 0.15)' }}>
          <div style={{ fontWeight: '700', fontSize: '13px', color: '#4A1D8F', marginBottom: '2px' }}>🎬 {user.name as string}</div>
          <div style={{ fontSize: '11px', color: '#9CA3AF' }}>عامل حر</div>
        </div>
        <button onClick={() => { localStorage.removeItem('holingo_user'); router.push('/'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', fontFamily: 'Cairo, sans-serif', fontSize: '13px', fontWeight: '600', width: '100%' }}>
          <span>🚪</span> تسجيل الخروج
        </button>
      </aside>

      {/* Main Content Wrapper */}
      <div style={{ marginRight: '240px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }} className="main-content-wrapper">
        <main style={{ flex: 1, padding: '32px' }} className="main-content">
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontWeight: '800', fontSize: '24px', color: '#1A1A2E', marginBottom: '4px' }}>أهلاً، {(user.name as string)?.split(' ')[0]} 🎬</h1>
            <p style={{ fontSize: '14px', color: '#9CA3AF' }}>ابحث عن مشاريع تناسب مهاراتك</p>
          </div>

          {/* Earnings Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #4A1D8F, #6329BC)', borderRadius: '20px', padding: '24px 32px',
            marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxShadow: '0 8px 30px rgba(74, 29, 143, 0.3)',
          }}>
            <div style={{ color: 'white' }}>
              <p style={{ fontSize: '13px', opacity: 0.75, marginBottom: '4px' }}>أرباحك هذا الشهر</p>
              <div style={{ fontWeight: '900', fontSize: '32px' }}>15,000 دج</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', color: 'white' }}>
              {[{ label: 'مشاريع مكتملة', val: '2' }, { label: 'في الانتظار', val: '1' }, { label: 'نجمة التقييم', val: '4.9⭐' }, { label: 'وقت التسليم', val: '100%' }].map((s, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
                  <div style={{ fontWeight: '800', fontSize: '16px' }}>{s.val}</div>
                  <div style={{ fontSize: '10px', opacity: 0.75 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', background: 'white', padding: '6px', borderRadius: '14px', width: 'fit-content', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}>
            {[{ id: 'available', label: '🔍 المشاريع المتاحة' }, { id: 'mine', label: '💼 مشاريعي' }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as 'available' | 'mine')} style={{
                padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px', transition: 'all 0.2s ease',
                background: activeTab === tab.id ? 'linear-gradient(135deg, #4A1D8F, #6329BC)' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#6B7280',
              }}>
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'available' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {availableProjects.map(proj => (
                <div key={proj.id} style={{
                  background: 'white', borderRadius: '16px', padding: '22px 26px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
                  display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#4A1D8F40'; (e.currentTarget as HTMLDivElement).style.transform = 'translateX(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB'; (e.currentTarget as HTMLDivElement).style.transform = 'translateX(0)'; }}
                >
                  <div style={{ width: '50px', height: '50px', background: '#F3EEFF', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                    {proj.type === 'موشن غرافيك' ? '🎬' : proj.type === 'هولوغرام' ? '🔮' : '🎞️'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E', marginBottom: '4px' }}>{proj.title}</div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{proj.teacher} • {proj.type}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
                    <span style={{ fontWeight: '700', fontSize: '16px', color: '#4A1D8F' }}>{proj.budget}</span>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{
                        padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                        background: proj.priority === 'عاجل' ? '#FEE2E2' : '#F3F4F6',
                        color: proj.priority === 'عاجل' ? '#EF4444' : '#6B7280',
                      }}>⏰ {proj.deadline}</span>
                    </div>
                    <button style={{
                      padding: '8px 18px', background: 'linear-gradient(135deg, #4A1D8F, #6329BC)',
                      color: 'white', border: 'none', borderRadius: '10px',
                      fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '13px', cursor: 'pointer',
                    }}>
                      قدّم طلباً
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {myProjects.map(proj => (
                <div key={proj.id} style={{
                  background: 'white', borderRadius: '16px', padding: '22px 26px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #E5E7EB',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '15px', color: '#1A1A2E', marginBottom: '4px' }}>{proj.title}</div>
                      <div style={{ fontSize: '12px', color: '#9CA3AF' }}>العميل: {proj.client}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{
                        padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                        background: proj.progress === 100 ? '#D1FAE5' : '#DBEAFE',
                        color: proj.progress === 100 ? '#065F46' : '#1E40AF',
                      }}>{proj.status}</span>
                      <span style={{
                        padding: '5px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600',
                        background: proj.payment === 'تم الدفع' ? '#D1FAE5' : '#FDF8EC',
                        color: proj.payment === 'تم الدفع' ? '#065F46' : '#92400E',
                      }}>{proj.payment}</span>
                    </div>
                  </div>
                  <div style={{ height: '8px', background: '#F3F4F6', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: '4px', width: proj.progress + "%",
                      background: proj.progress === 100 ? 'linear-gradient(90deg, #10B981, #059669)' : 'linear-gradient(90deg, #4A1D8F, #6329BC)',
                      transition: 'width 0.5s ease',
                    }} />
                  </div>
                  <div style={{ textAlign: 'left', fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}>{proj.progress}%</div>
                </div>
              ))}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
