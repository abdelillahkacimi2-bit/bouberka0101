'use client';

import { useRouter } from 'next/navigation';

interface RoleCardProps {
  icon: string;
  title: string;
  description?: string;
  color: string;
  colorLight: string;
  colorPale: string;
  href: string;
  delay?: number;
}

export default function RoleCard({
  icon,
  title,
  description,
  color,
  colorLight,
  colorPale,
  href,
  delay = 0,
}: RoleCardProps) {
  const router = useRouter();

  return (
    <div
      className="role-card animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animationFillMode: 'forwards',
        background: 'white',
        borderRadius: '24px',
        padding: '40px 32px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        border: `2px solid transparent`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => router.push(href)}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = color;
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${color}20`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)';
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '-20px',
        width: '120px',
        height: '120px',
        background: `${color}08`,
        borderRadius: '50%',
        transition: 'all 0.4s ease',
      }} />

      {/* Icon */}
      <div style={{
        width: '72px',
        height: '72px',
        background: `linear-gradient(135deg, ${color}, ${colorLight})`,
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        marginBottom: '24px',
        boxShadow: `0 8px 24px ${color}30`,
        position: 'relative',
        zIndex: 1,
      }}>
        {icon}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{
          fontFamily: 'Cairo, sans-serif',
          fontWeight: '800',
          fontSize: '22px',
          color: color,
          marginBottom: description ? '10px' : '20px',
        }}>
          {title}
        </h3>

        {description && (
          <p style={{
            fontFamily: 'Cairo, sans-serif',
            fontSize: '13px',
            color: '#6B7280',
            lineHeight: '1.7',
            marginBottom: '24px',
          }}>
            {description}
          </p>
        )}

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 24px',
          background: `linear-gradient(135deg, ${color}, ${colorLight})`,
          color: 'white',
          borderRadius: '12px',
          fontFamily: 'Cairo, sans-serif',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: `0 4px 15px ${color}30`,
          transition: 'all 0.3s ease',
          marginTop: description ? '0' : '12px',
        }}>
          ابدأ التسجيل
          <span style={{ fontSize: '16px' }}>←</span>
        </div>
      </div>
    </div>
  );
}
