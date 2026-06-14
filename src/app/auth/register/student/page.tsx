// نموذج تسجيل الطالب
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const universities = [
  'جامعة الجزائر 1 بن يوسف بن خدة',
  'جامعة الجزائر 2 أبو القاسم سعد الله',
  'جامعة الجزائر 3',
  'جامعة وهران 1 أحمد بن بلة',
  'جامعة وهران 2 محمد بن أحمد',
  'جامعة قسنطينة 1 فرحات عباس',
  'جامعة قسنطينة 2 عبد الحميد مهري',
  'جامعة قسنطينة 3 صالح بوبنيدر',
  'جامعة سطيف 1 فرحات عباس',
  'جامعة عنابة باجي مختار',
  'جامعة بجاية عبد الرحمان ميرة',
  'جامعة تلمسان أبو بكر بلقايد',
  'جامعة باتنة 1 الحاج لخضر',
  'جامعة بسكرة محمد خيضر',
  'جامعة تيزي وزو مولود معمري',
  'جامعة المسيلة محمد بوضياف',
  'جامعة سكيكدة 1955 أوت 20',
  'جامعة جيجل محمد الصديق بن يحيى',
  'أخرى',
];

const specialities = [
  'لغة وأدب عربي',
  'لسانيات',
  'أدب عربي وحضارة إسلامية',
  'لغة وأدب فرنسي',
  'لغة وأدب إنجليزي',
  'دراسات أدبية',
  'اللسانيات التطبيقية',
  'أخرى',
];

const studyYears = [
  'ليسانس السنة الأولى (L1)',
  'ليسانس السنة الثانية (L2)',
  'ليسانس السنة الثالثة (L3)',
  'ماستر السنة الأولى (M1)',
  'ماستر السنة الثانية (M2)',
];

export default function StudentRegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    university: '',
    speciality: '',
    studyYear: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'الاسم مطلوب';
    if (!form.email.includes('@')) newErrors.email = 'البريد الإلكتروني غير صحيح';
    if (form.password.length < 6) newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'كلمتا المرور غير متطابقتان';
    if (!form.university) newErrors.university = 'يرجى اختيار الجامعة';
    if (!form.speciality) newErrors.speciality = 'يرجى اختيار التخصص';
    if (!form.studyYear) newErrors.studyYear = 'يرجى اختيار السنة الدراسية';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      const user = {
        id: Date.now().toString(),
        name: form.name,
        email: form.email,
        role: 'STUDENT',
        university: form.university,
        speciality: form.speciality,
        studyYear: form.studyYear,
      };
      localStorage.setItem('holingo_user', JSON.stringify(user));
      setSuccess(true);
      setTimeout(() => router.push('/dashboard/student'), 1500);
    }, 1200);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
      <Navbar />

      {/* Background decor */}
      <span className="arabic-decor" style={{
        position: 'fixed', fontSize: '60vw', top: '-10%', right: '-20%',
        color: '#1E3A5F', lineHeight: 1, zIndex: 0,
      }}>ع</span>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 60px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          width: '100%',
          maxWidth: '560px',
          background: 'white',
          borderRadius: '28px',
          padding: '40px',
          boxShadow: '0 20px 60px rgba(30, 58, 95, 0.12)',
          border: '1px solid rgba(30, 58, 95, 0.08)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              width: '70px', height: '70px',
              background: 'linear-gradient(135deg, #1E3A5F, #2A4E80)',
              borderRadius: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '32px', margin: '0 auto 16px',
              boxShadow: '0 8px 24px rgba(30, 58, 95, 0.3)',
            }}>🎓</div>
            <h1 style={{
              fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '26px',
              color: '#1E3A5F', marginBottom: '6px',
            }}>تسجيل طالب</h1>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#9CA3AF' }}>
              أنشئ حسابك وابدأ التعلم
            </p>
          </div>

          {success ? (
            <div style={{
              textAlign: 'center', padding: '40px 20px',
              background: 'linear-gradient(135deg, #EEF4FF, #E8F0FE)',
              borderRadius: '16px',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '700', fontSize: '20px', color: '#1E3A5F' }}>
                تم إنشاء الحساب بنجاح!
              </h3>
              <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>
                جاري توجيهك إلى لوحة التحكم...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <FormField label="الاسم الكامل" error={errors.name}>
                <input className="input-field" placeholder="محمد أمين بوعزيز" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} />
              </FormField>

              <FormField label="البريد الإلكتروني" error={errors.email}>
                <input className="input-field" type="email" placeholder="student@univ.dz" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} />
              </FormField>

              <FormField label="كلمة المرور" error={errors.password}>
                <input className="input-field" type="password" placeholder="••••••••" value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })} />
              </FormField>

              <FormField label="تأكيد كلمة المرور" error={errors.confirmPassword}>
                <input className="input-field" type="password" placeholder="••••••••" value={form.confirmPassword}
                  onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />
              </FormField>

              <FormField label="الجامعة / المعهد" error={errors.university}>
                <select className="input-field" value={form.university}
                  onChange={e => setForm({ ...form, university: e.target.value })}>
                  <option value="">اختر جامعتك</option>
                  {universities.map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </FormField>

              <FormField label="التخصص" error={errors.speciality}>
                <select className="input-field" value={form.speciality}
                  onChange={e => setForm({ ...form, speciality: e.target.value })}>
                  <option value="">اختر تخصصك</option>
                  {specialities.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </FormField>

              <FormField label="السنة الدراسية" error={errors.studyYear}>
                <select className="input-field" value={form.studyYear}
                  onChange={e => setForm({ ...form, studyYear: e.target.value })}>
                  <option value="">اختر سنتك الدراسية</option>
                  {studyYears.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </FormField>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary btn-navy"
                style={{ width: '100%', marginTop: '8px', padding: '14px', fontSize: '16px', borderRadius: '12px' }}
              >
                {loading ? '⏳ جاري إنشاء الحساب...' : '🎓 إنشاء حساب'}
              </button>

              <p style={{ textAlign: 'center', fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#9CA3AF', marginTop: '4px' }}>
                لديك حساب بالفعل؟{' '}
                <Link href="/auth/login" style={{ color: '#1E3A5F', fontWeight: '600', textDecoration: 'none' }}>
                  تسجيل الدخول
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'Cairo, sans-serif', fontWeight: '600',
        fontSize: '14px', color: '#374151', marginBottom: '6px',
      }}>{label}</label>
      {children}
      {error && (
        <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
