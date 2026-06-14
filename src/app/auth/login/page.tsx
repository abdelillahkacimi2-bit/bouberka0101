// صفحة تسجيل الدخول
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock users for demo
const mockUsers = [
  { email: 'student@demo.dz', password: '123456', role: 'STUDENT', name: 'أمين بوعزيز', university: 'جامعة الجزائر 2' },
  { email: 'prof@demo.dz', password: '123456', role: 'TEACHER', name: 'د. فاطمة بن علي', institution: 'جامعة قسنطينة 1' },
  { email: 'free@demo.dz', password: '123456', role: 'FREELANCER', name: 'يوسف مزيان', services: ['motion', 'hologram'] },
];

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) { setError('يرجى ملء جميع الحقول'); return; }
    setLoading(true);
    setError('');

    setTimeout(() => {
      // Check localStorage first (real registered users)
      const stored = localStorage.getItem('holingo_user');
      if (stored) {
        const user = JSON.parse(stored);
        if (user.email === form.email) {
          setLoading(false);
          redirectToDashboard(user.role);
          return;
        }
      }

      // Check mock users
      const mockUser = mockUsers.find(u => u.email === form.email && u.password === form.password);
      if (mockUser) {
        localStorage.setItem('holingo_user', JSON.stringify(mockUser));
        setLoading(false);
        redirectToDashboard(mockUser.role);
        return;
      }

      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      setLoading(false);
    }, 1000);
  };

  const redirectToDashboard = (role: string) => {
    switch (role) {
      case 'STUDENT': router.push('/dashboard/student'); break;
      case 'TEACHER': router.push('/dashboard/teacher'); break;
      case 'FREELANCER': router.push('/dashboard/freelancer'); break;
      default: router.push('/');
    }
  };

  const fillDemo = (email: string) => {
    setForm({ email, password: '123456' });
    setError('');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF7', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      <span className="arabic-decor" style={{ position: 'fixed', fontSize: '60vw', top: '-10%', right: '-20%', color: '#1E3A5F', lineHeight: 1, zIndex: 0 }}>م</span>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '100%', maxWidth: '480px', background: 'white', borderRadius: '28px', padding: '44px',
          boxShadow: '0 20px 60px rgba(30, 58, 95, 0.12)', border: '1px solid rgba(30, 58, 95, 0.08)',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '14px', fontFamily: 'Cairo, sans-serif', color: '#9CA3AF', marginBottom: '8px', fontWeight: '500', letterSpacing: '2px' }}>
              Holingo
            </div>
            <h1 style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '800', fontSize: '28px', color: '#1A1A2E', marginBottom: '8px' }}>
              مرحباً بعودتك! 👋
            </h1>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '14px', color: '#9CA3AF' }}>
              سجّل دخولك للوصول إلى منصتك
            </p>
          </div>

          {/* Demo accounts */}
          <div style={{
            background: 'linear-gradient(135deg, #EEF4FF, #F0EBFF)',
            borderRadius: '14px', padding: '16px', marginBottom: '28px',
            border: '1px solid rgba(30, 58, 95, 0.1)',
          }}>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '12px', color: '#6B7280', marginBottom: '10px', fontWeight: '600' }}>
              🔑 حسابات تجريبية (اضغط للملء التلقائي):
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { label: '🎓 طالب', email: 'student@demo.dz', color: '#1E3A5F' },
                { label: '📚 أستاذ', email: 'prof@demo.dz', color: '#8B6914' },
                { label: '🎬 عامل حر', email: 'free@demo.dz', color: '#4A1D8F' },
              ].map(d => (
                <button key={d.email} onClick={() => fillDemo(d.email)} style={{
                  padding: '6px 12px', borderRadius: '8px', border: `1px solid ${d.color}30`,
                  background: `${d.color}10`, color: d.color, fontFamily: 'Cairo, sans-serif',
                  fontSize: '12px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease',
                }}>
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px', color: '#374151', marginBottom: '6px' }}>
                البريد الإلكتروني
              </label>
              <input
                className="input-field"
                type="email"
                placeholder="your@email.dz"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <label style={{ fontFamily: 'Cairo, sans-serif', fontWeight: '600', fontSize: '14px', color: '#374151' }}>
                  كلمة المرور
                </label>
                <span style={{ fontFamily: 'Cairo, sans-serif', fontSize: '12px', color: '#1E3A5F', cursor: 'pointer' }}>
                  نسيت كلمة المرور؟
                </span>
              </div>
              <input
                className="input-field"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {error && (
              <div style={{
                background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px',
                padding: '12px 16px', fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#EF4444',
              }}>
                ⚠️ {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn-primary btn-navy"
              style={{ width: '100%', padding: '14px', fontSize: '16px', borderRadius: '12px', marginTop: '4px' }}>
              {loading ? '⏳ جاري التحقق...' : '🔐 تسجيل الدخول'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Cairo, sans-serif', fontSize: '13px', color: '#9CA3AF' }}>
              ليس لديك حساب بعد؟{' '}
              <Link href="/" style={{ color: '#1E3A5F', fontWeight: '600', textDecoration: 'none' }}>
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
