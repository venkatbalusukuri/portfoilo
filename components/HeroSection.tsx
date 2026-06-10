'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';

/* ─── Floating 3D bar chart (CSS-only, no Three.js dep needed) ── */
function DataChart() {
    const bars = [
        { h: 55, color: '#F59E0B', label: 'SQL' },
        { h: 80, color: '#3B82F6', label: 'Python' },
        { h: 70, color: '#14B8A6', label: 'Power BI' },
        { h: 45, color: '#8B5CF6', label: 'ML' },
        { h: 90, color: '#10B981', label: 'Analytics' },
        { h: 65, color: '#F59E0B', label: 'DAX' },
    ];

    return (
        <motion.div
            className="animate-float-2"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
                perspective: '800px',
                transformStyle: 'preserve-3d',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
            }}
        >
            {/* Chart container */}
            <div
                className="glass"
                style={{
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    border: '1px solid rgba(245,158,11,0.2)',
                    boxShadow: '0 0 60px rgba(245,158,11,0.08), 0 30px 80px rgba(0,0,0,0.5)',
                    minWidth: '320px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Shimmer overlay */}
                <div
                    className="animate-shimmer"
                    style={{
                        position: 'absolute', inset: 0, borderRadius: '1.5rem',
                        pointerEvents: 'none', zIndex: 1,
                    }}
                />

                {/* Title */}
                <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: 'var(--amber)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                }}>
                    ◆ Skills Matrix
                </p>

                {/* Bars */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '0.75rem',
                    height: '120px',
                }}>
                    {bars.map((b, i) => (
                        <motion.div
                            key={b.label}
                            initial={{ height: 0 }}
                            animate={{ height: `${b.h}%` }}
                            transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}
                        >
                            {/* 3D bar */}
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                {/* Bar top face */}
                                <div style={{
                                    width: '100%',
                                    height: '6px',
                                    background: b.color,
                                    borderRadius: '2px 2px 0 0',
                                    filter: 'brightness(1.4)',
                                }} />
                                <motion.div
                                    animate={{ height: `${b.h * 1.2}px` }}
                                    initial={{ height: 0 }}
                                    transition={{ duration: 1.2, delay: 0.8 + i * 0.1 }}
                                    style={{
                                        width: '100%',
                                        background: `linear-gradient(to top, ${b.color}99, ${b.color})`,
                                        borderRadius: '2px',
                                        boxShadow: `0 0 12px ${b.color}66`,
                                    }}
                                />
                            </div>
                            <span style={{
                                fontSize: '0.55rem',
                                color: 'var(--text-secondary)',
                                textAlign: 'center',
                                fontFamily: "'JetBrains Mono', monospace",
                            }}>
                                {b.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Stat row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                    {[
                        { val: '2027', label: 'Class of' },
                        { val: 'Finalist', label: 'Buildathon' },
                        { val: 'AIML', label: 'Specialist' },
                    ].map((s) => (
                        <div key={s.label} style={{ textAlign: 'center' }}>
                            <div className="gradient-text-amber" style={{ fontWeight: 800, fontSize: '1.2rem' }}>{s.val}</div>
                            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating badge chips */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {['Oracle SQL', 'Pandas', 'Power BI', 'TensorFlow'].map((tag, i) => (
                    <motion.span
                        key={tag}
                        className="animate-bob"
                        style={{ animationDelay: `${i * 0.4}s` }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                    >
                        <span className="glass-amber" style={{
                            display: 'inline-block',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '999px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: 'var(--amber-light)',
                            fontFamily: "'JetBrains Mono', monospace",
                        }}>
                            {tag}
                        </span>
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

/* ─── Main Hero ───────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                paddingTop: '5rem',
                zIndex: 1,
            }}
        >
            {/* Ambient glow blobs */}
            <div style={{
                position: 'absolute', top: '20%', left: '5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', top: '30%', right: '10%',
                width: '500px', height: '500px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="container-custom" style={{ width: '100%' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                }}
                    className="hero-grid"
                >
                    {/* ── Left: Text + Profile ── */}
                    <div>
                        {/* Tag line */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="section-tag"
                            style={{ marginBottom: '1rem' }}
                        >
                            ◆ Available for opportunities
                        </motion.div>

                        {/* Animated Name */}
                        <motion.h1
                            style={{
                                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                                fontWeight: 900,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.3em',
                            }}
                        >
                            {PERSONAL_INFO.name.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.1 + i * 0.2,
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                    }}
                                    style={{ display: 'inline-block' }}
                                >
                                    {word.split('').map((char, j) => (
                                        <motion.span
                                            key={j}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.1 + i * 0.2 + j * 0.05,
                                            }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{ marginBottom: '1.25rem' }}
                        >
                            <span
                                className="gradient-text-amber"
                                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', fontWeight: 700 }}
                            >
                                {PERSONAL_INFO.title}
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            style={{
                                fontSize: '1.05rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '480px',
                                marginBottom: '0.5rem',
                                lineHeight: 1.7,
                            }}
                        >
                            {PERSONAL_INFO.tagline}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                maxWidth: '440px',
                                marginBottom: '2rem',
                                lineHeight: 1.7,
                            }}
                        >
                            {PERSONAL_INFO.subTagline}
                        </motion.p>

                        {/* Profile image + CTA row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}
                        >
                            {/* Glassmorphic floating profile frame */}
                            <div className="animate-float-1" style={{ position: 'relative', flexShrink: 0 }}>
                                {/* Outer glow ring */}
                                <div style={{
                                    position: 'absolute', inset: '-4px',
                                    borderRadius: '50%',
                                    background: 'conic-gradient(from 0deg, #F59E0B, #3B82F6, #14B8A6, #F59E0B)',
                                    animation: 'spin-slow 6s linear infinite',
                                    zIndex: 0,
                                }} className="animate-spin-slow" />
                                {/* Glass frame */}
                                <div style={{
                                    position: 'relative', zIndex: 1,
                                    width: '110px', height: '110px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '3px solid rgba(245,158,11,0.4)',
                                    boxShadow: '0 0 30px rgba(245,158,11,0.25), inset 0 0 20px rgba(0,0,0,0.3)',
                                    backdropFilter: 'blur(10px)',
                                }}>
                                    <Image
                                        src={PERSONAL_INFO.profileImage}
                                        alt="Profile photo"
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        priority
                                    />
                                </div>
                                {/* Status dot */}
                                <div style={{
                                    position: 'absolute', bottom: '6px', right: '6px', zIndex: 2,
                                    width: '14px', height: '14px', borderRadius: '50%',
                                    background: '#10B981',
                                    border: '2px solid var(--bg-space)',
                                    boxShadow: '0 0 8px #10B981',
                                }} />
                            </div>

                            {/* CTA buttons */}
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <a href="#projects" className="btn-primary">
                                    View My Work
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a href="#contact" className="btn-secondary">Get In Touch</a>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}
                        >
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                Connect →
                            </span>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--amber)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                LinkedIn
                            </a>
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#C4B5FD')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                GitHub
                            </a>
                        </motion.div>
                    </div>

                    {/* ── Right: 3D Chart ── */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <DataChart />
                    </div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        marginTop: '4rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.15em' }}>
                        SCROLL TO EXPLORE
                    </span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        style={{ color: 'var(--amber)', fontSize: '1.2rem' }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child { order: 2; }
          .hero-grid > div:last-child  { order: 1; }
        }
      `}</style>
        </section>
    );
}
