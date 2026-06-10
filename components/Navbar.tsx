'use client';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let lastY = 0;
        const onScroll = () => {
            const y = window.scrollY;
            if (!navRef.current) return;
            navRef.current.style.transform =
                y > lastY && y > 80 ? 'translateY(-100%)' : 'translateY(0)';
            lastY = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            ref={navRef}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transition: 'transform 0.35s ease' }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div
                className="glass"
                style={{
                    borderBottom: '1px solid rgba(245,158,11,0.15)',
                    padding: '0.85rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1280px',
                    margin: '0 auto',
                }}
            >
                {/* Logo */}
                <a href="#hero" style={{ textDecoration: 'none' }}>
                    <span
                        className="gradient-text-amber"
                        style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                    >
                        ⬡ {PERSONAL_INFO.name}
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        listStyle: 'none',
                        alignItems: 'center',
                    }}
                    className="desktop-nav"
                >
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = 'var(--amber)')
                                }
                                onMouseLeave={(e) =>
                                    ((e.target as HTMLElement).style.color = 'var(--text-secondary)')
                                }
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social icons */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ padding: '0.45rem 0.9rem', fontSize: '0.8rem' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{
                            padding: '0.45rem 0.9rem',
                            fontSize: '0.8rem',
                            borderColor: 'rgba(139,92,246,0.3)',
                            color: '#C4B5FD',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href={SOCIAL_LINKS.credly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{
                            padding: '0.45rem 0.9rem',
                            fontSize: '0.8rem',
                            borderColor: 'rgba(236,72,153,0.3)',
                            color: '#F9A8D4',
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zM12 20c-2.4 0-4.5-1.1-5.9-2.8.2-1.3 1.1-2.4 2.4-3 .5.7 1.4 1.2 2.4 1.2s1.9-.5 2.4-1.2h.1c1.3.6 2.2 1.7 2.4 3-1.4 1.7-3.5 2.8-5.9 2.8z" />
                        </svg>
                        Credly
                    </a>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </motion.nav>
    );
}
