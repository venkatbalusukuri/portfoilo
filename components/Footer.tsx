'use client';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';

export default function Footer() {
    return (
        <footer style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '2.5rem 1.5rem',
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
            }}>
                {/* Logo */}
                <a href="#hero" style={{ textDecoration: 'none' }}>
                    <span className="gradient-text-amber" style={{ fontWeight: 800, fontSize: '1.1rem' }}>
                        ⬡ {PERSONAL_INFO.name}
                    </span>
                </a>

                {/* Copyright */}
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    © 2026 {PERSONAL_INFO.name}
                </p>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        LinkedIn
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#C4B5FD')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        GitHub
                    </a>
                    <a href={SOCIAL_LINKS.credly} target="_blank" rel="noopener noreferrer"
                        style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#F9A8D4')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        Credly
                    </a>
                    <a href={`mailto:${PERSONAL_INFO.email}`}
                        style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
