'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Check if user is logged in (from localStorage)
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('holingo_user');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('holingo_user') || '{}') : null;

  const handleLogout = () => {
    localStorage.removeItem('holingo_user');
    router.push('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/auth/login';
    switch (user.role) {
      case 'STUDENT': return '/dashboard/student';
      case 'TEACHER': return '/dashboard/teacher';
      case 'FREELANCER': return '/dashboard/freelancer';
      default: return '/auth/login';
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1000,
      background: 'rgba(250, 250, 247, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(30, 58, 95, 0.1)',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            background: 'linear-gradient(135deg, #1E3A5F, #2A4E80)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)',
          }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '18px', fontFamily: 'Cairo, sans-serif' }}>ه</span>
          </div>
          <span style={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: '800',
            fontSize: '22px',
            background: 'linear-gradient(135deg, #1E3A5F, #2A4E80)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '1px',
          }}>Holingo</span>
        </Link>

        {/* Desktop Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-nav">
          {isLoggedIn ? (
            <>
              <span style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: '14px',
                color: '#6B7280',
                fontWeight: '500',
              }}>
                أهلاً، {user?.name?.split(' ')[0]}
              </span>
              <Link href={getDashboardLink()} className="btn-primary btn-navy" style={{ padding: '8px 20px', fontSize: '14px', borderRadius: '10px', textDecoration: 'none' }}>
                لوحة التحكم
              </Link>
              <button onClick={handleLogout} style={{
                padding: '8px 20px',
                border: '2px solid #E5E7EB',
                borderRadius: '10px',
                background: 'transparent',
                fontFamily: 'Cairo, sans-serif',
                fontSize: '14px',
                color: '#6B7280',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#1E3A5F')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                خروج
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" style={{
                fontFamily: 'Cairo, sans-serif',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1E3A5F',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EEF2F7')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                تسجيل الدخول
              </Link>
              <Link href="/" className="btn-primary btn-navy" style={{ padding: '8px 20px', fontSize: '14px', borderRadius: '10px', textDecoration: 'none' }}>
                ابدأ الآن
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="mobile-menu-btn"
          aria-label="القائمة"
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '24px',
              height: '2px',
              background: '#1E3A5F',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(250, 250, 247, 0.98)',
          borderTop: '1px solid #E5E7EB',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {isLoggedIn ? (
            <>
              <Link href={getDashboardLink()} style={{ padding: '12px', textAlign: 'center', fontFamily: 'Cairo, sans-serif', color: '#1E3A5F', fontWeight: '600', textDecoration: 'none' }}>لوحة التحكم</Link>
              <button onClick={handleLogout} style={{ padding: '12px', fontFamily: 'Cairo, sans-serif', color: '#6B7280', border: 'none', background: 'none', cursor: 'pointer', fontSize: '14px' }}>تسجيل الخروج</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" style={{ padding: '12px', textAlign: 'center', fontFamily: 'Cairo, sans-serif', color: '#1E3A5F', fontWeight: '600', textDecoration: 'none' }}>تسجيل الدخول</Link>
              <Link href="/" style={{ padding: '12px', textAlign: 'center', fontFamily: 'Cairo, sans-serif', color: '#1E3A5F', textDecoration: 'none' }}>إنشاء حساب</Link>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
