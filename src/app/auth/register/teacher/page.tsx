// نموذج تسجيل الأستاذ
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const institutions = [
  'جامعة الجزائر 1 بن يوسف بن خدة',
  'جامعة الجزائر 2 أبو القاسم سعد الله',
  'جامعة وهران 1 أحمد بن بلة',
  'جامعة قسنطينة 1 فرحات عباس',
  'جامعة سطيف 1 فرحات عباس',
  'جامعة عنابة باجي مختار',
  'جامعة بجاية عبد الرحمان ميرة',
  'جامعة تلمسان أبو بكر بلقايد',
  'جامعة باتنة 1 الحاج لخضر',
  'جامعة تيزي وزو مولود معمري',
  'المركز الجامعي تيبازة',
  'أخرى',
];

const departments = [
  'قسم اللغة والأدب العربي',
  'قسم اللسانيات',
  'قسم اللغة والأدب الفرنسي',
  'قسم اللغة والأدب الإنجليزي',
  'قسم الآداب والفلسفة',
  'قسم اللغات الأجنبية',
  'أخرى',
];

const academicRanks = [
  'أستاذ مساعد (أ)',
  'أستاذ مساعد (ب)',
  'أستاذ محاضر (أ)',
  'أستاذ محاضر (ب)',
  'أستاذ التعليم العالي',
];

export default function TeacherRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirmPassword: '',
    institution: '', department: '', academicRank: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'الاسم مطلوب';
    if (!form.email.includes('@')) errs.email = 'البريد الإلكتروني غير صحيح';
    if (form.password.length < 6) errs.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'كلمتا المرور غير متطابقتان';
    if (!form.institution) errs.institution = 'يرجى اختيار المؤسسة';
    if (!form.department) errs.department = 'يرجى اختيار القسم';
    if (!form.academicRank) errs.academicRank = 'يرجى اختيار الرتبة الأكاديمية';
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
        role: 'TEACHER', institution: form.institution,
        department: form.department, academicRank: form.academicRank,
      }));
      setSuccess(true);
      setTimeout(() => router.push('/dashboard/teacher'), 1500);
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
      <span className="arabic-decor" style={{ position: 'fixed', fontSize: '60vw', top: '-10%', right: '-20%', color: '#8B6914', lineHeight: 1, zIndex: 0 }}>ل</span>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '100%', maxWidth: '560px', background: 'white', borderRadius: '28px', padding: '40px',
          boxShadow: '0 20px 60px rgba(139, 105, 20, 0.12)', border: '1px solid rgba(139, 105, 20, 0.08)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              width: '70px', height: '70px', background: 'linear-gradient(135deg, #8B6914, #B8900F)',
              borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px', margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(139, 105, 20, 0.3)',
            }}>📚</div>
            <h1 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '26px', color: '#8B6914', marginBottom: '6px' }}>تسجيل أستاذ</h1>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#9CA3AF' }}>شارك دروسك مع الطلاب</p>
          </div>

          {success ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #FDF8EC, #FDF3D0)', borderRadius: '16px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '20px', color: '#8B6914' }}>تم إنشاء الحساب بنجاح!</h3>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>جاري توجيهك إلى لوحة التحكم...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Field label="الاسم الكامل" error={errors.name}>
                <input className="input-field" placeholder="د. أحمد بن علي" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ borderColor: errors.name ? '#EF4444' : undefined }} />
              </Field>
              <Field label="البريد الإلكتروني" error={errors.email}>
                <input className="input-field" type="email" placeholder="prof@univ.dz" value={form.email}
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
              <Field label="الجامعة / المؤسسة" error={errors.institution}>
                <select className="input-field" value={form.institution} onChange={e => setForm({ ...form, institution: e.target.value })}>
                  <option value="">اختر مؤسستك</option>
                  {institutions.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </Field>
              <Field label="القسم / التخصص الذي تدرّسه" error={errors.department}>
                <select className="input-field" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })}>
                  <option value="">اختر القسم</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>
              <Field label="الرتبة الأكاديمية" error={errors.academicRank}>
                <select className="input-field" value={form.academicRank} onChange={e => setForm({ ...form, academicRank: e.target.value })}>
                  <option value="">اختر رتبتك</option>
                  {academicRanks.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
              <button type="submit" disabled={loading} className="btn-primary btn-gold"
                style={{ width: '100%', marginTop: '8px', padding: '14px', fontSize: '16px', borderRadius: '12px' }}>
                {loading ? '⏳ جاري إنشاء الحساب...' : '📚 إنشاء حساب'}
              </button>
              <p style={{ textAlign: 'center', fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>
                لديك حساب بالفعل؟{' '}
                <Link href="/auth/login" style={{ color: '#8B6914', fontWeight: '600', textDecoration: 'none' }}>تسجيل الدخول</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
