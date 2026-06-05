// نموذج تسجيل العامل الحر
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const serviceOptions = [
  { id: 'motion', label: 'إنتاج موشن غرافيك', icon: '🎬' },
  { id: 'hologram', label: 'تصميم هولوغرام', icon: '🔮' },
  { id: 'montage', label: 'مونتاج فيديو', icon: '🎞️' },
  { id: 'graphic', label: 'تصميم غرافيك', icon: '🎨' },
];

export default function FreelancerRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    services: [] as string[], tools: '', portfolioUrl: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleService = (id: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(id) ? f.services.filter(s => s !== id) : [...f.services, id],
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'الاسم مطلوب';
    if (!form.email.includes('@')) errs.email = 'البريد الإلكتروني غير صحيح';
    if (form.password.length < 6) errs.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'كلمتا المرور غير متطابقتان';
    if (form.services.length === 0) errs.services = 'يرجى اختيار خدمة واحدة على الأقل';
    if (!form.tools.trim()) errs.tools = 'يرجى ذكر البرامج التي تستخدمها';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('holingo_user', JSON.stringify({
        id: Date.now().toString(), name: form.name, email: form.email,
        role: 'FREELANCER', services: form.services, tools: form.tools,
        portfolioUrl: form.portfolioUrl,
      }));
      setSuccess(true);
      setTimeout(() => router.push('/dashboard/freelancer'), 1500);
    }, 1200);
  };

  const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div>
      <label style={{ display: 'block', fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px', color: '#374151', marginBottom: '6px' }}>{label}</label>
      {children}
      {error && <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>⚠️ {error}</p>}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      <span className="arabic-decor" style={{ position: 'fixed', fontSize: '60vw', top: '-10%', right: '-20%', color: '#4A1D8F', lineHeight: 1, zIndex: 0 }}>ق</span>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '100%', maxWidth: '600px', background: 'white', borderRadius: '28px', padding: '40px',
          boxShadow: '0 20px 60px rgba(74, 29, 143, 0.12)', border: '1px solid rgba(74, 29, 143, 0.08)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              width: '70px', height: '70px', background: 'linear-gradient(135deg, #4A1D8F, #6329BC)',
              borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px', margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(74, 29, 143, 0.3)',
            }}>🎬</div>
            <h1 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '26px', color: '#4A1D8F', marginBottom: '6px' }}>تسجيل عامل حر</h1>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#9CA3AF' }}>حوّل الدروس إلى تجارب بصرية رائعة</p>
          </div>

          {success ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #F3EEFF, #EDE0FF)', borderRadius: '16px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '20px', color: '#4A1D8F' }}>تم إنشاء الحساب بنجاح!</h3>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>جاري توجيهك إلى لوحة التحكم...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Field label="الاسم الكامل" error={errors.name}>
                <input className="input-field" placeholder="يوسف مزيان" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} />
              </Field>

              <Field label="البريد الإلكتروني" error={errors.email}>
                <input className="input-field" type="email" placeholder="freelancer@gmail.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} />
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Field label="كلمة المرور" error={errors.password}>
                  <input className="input-field" type="password" placeholder="••••••••" value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })} />
                </Field>
                <Field label="تأكيد كلمة المرور" error={errors.confirmPassword}>
                  <input className="input-field" type="password" placeholder="••••••••" value={form.confirmPassword}
                    onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />
                </Field>
              </div>

              {/* Services checkboxes */}
              <div>
                <label style={{ display: 'block', fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px', color: '#374151', marginBottom: '10px' }}>
                  نوع الخدمة المقدمة
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {serviceOptions.map(opt => (
                    <div
                      key={opt.id}
                      onClick={() => toggleService(opt.id)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '12px 14px', borderRadius: '10px', cursor: 'pointer',
                        border: `2px solid ${form.services.includes(opt.id) ? '#4A1D8F' : '#E5E7EB'}`,
                        background: form.services.includes(opt.id) ? '#F3EEFF' : 'white',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <div style={{
                        width: '18px', height: '18px',
                        border: `2px solid ${form.services.includes(opt.id) ? '#4A1D8F' : '#D1D5DB'}`,
                        borderRadius: '4px',
                        background: form.services.includes(opt.id) ? '#4A1D8F' : 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {form.services.includes(opt.id) && <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>✓</span>}
                      </div>
                      <span style={{ fontSize: '14px' }}>{opt.icon}</span>
                      <span style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', fontWeight: '500', color: form.services.includes(opt.id) ? '#4A1D8F' : '#374151' }}>
                        {opt.label}
                      </span>
                    </div>
                  ))}
                </div>
                {errors.services && <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '6px' }}>⚠️ {errors.services}</p>}
              </div>

              <Field label="البرامج المستخدمة" error={errors.tools}>
                <input className="input-field" placeholder="مثال: After Effects, Blender, Cinema 4D, Premiere Pro..."
                  value={form.tools} onChange={e => setForm({ ...form, tools: e.target.value })} />
              </Field>

              <Field label="رابط البورتفوليو (اختياري)">
                <input className="input-field" type="url" placeholder="https://behance.net/username"
                  value={form.portfolioUrl} onChange={e => setForm({ ...form, portfolioUrl: e.target.value })} />
              </Field>

              <button type="submit" disabled={loading} className="btn-primary btn-purple"
                style={{ width: '100%', marginTop: '8px', padding: '14px', fontSize: '16px', borderRadius: '12px' }}>
                {loading ? '⏳ جاري إنشاء الحساب...' : '🎬 إنشاء حساب'}
              </button>

              <p style={{ textAlign: 'center', fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>
                لديك حساب بالفعل؟{' '}
                <Link href="/auth/login" style={{ color: '#4A1D8F', fontWeight: '600', textDecoration: 'none' }}>تسجيل الدخول</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
