// Footer مشترك لجميع الصفحات
export default function Footer() {
  return (
    <footer style={{
      background: '#1A1A2E',
      color: 'white',
      textAlign: 'center',
      padding: '28px 24px',
      fontFamily: 'Cairo, sans-serif',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}>
        <div style={{
          fontWeight: '700',
          fontSize: '15px',
          letterSpacing: '1px',
          opacity: 0.9,
        }}>
          Holingo
        </div>
        <div style={{
          fontSize: '12px',
          opacity: 0.5,
          fontFamily: 'Cairo, sans-serif',
        }}>
          © 2026 Holingo — جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
