'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ACHIEVEMENTS, CERTIFICATES } from '@/data/portfolio-data';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function AchievementsSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="achievements" className="section-padding" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            {/* Ambient blobs */}
            <div style={{
                position: 'absolute', top: '10%', right: '5%',
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', left: '5%',
                width: '300px', height: '300px',
                background: 'radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Header */}
                <motion.div
                    variants={stagger} initial="hidden" animate={isInView ? 'show' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <motion.p variants={fadeUp} className="section-tag">◆ Recognition</motion.p>
                    <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Hall of{' '}<span className="gradient-text-amber">Fame</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
                        Achievements and credentials that reflect the journey from data student to national-level AI builder.
                    </motion.p>
                </motion.div>

                {/* ── Achievements ── */}
                <motion.div
                    variants={stagger} initial="hidden" animate={isInView ? 'show' : 'hidden'}
                    style={{ marginBottom: '5rem' }}
                >
                    <motion.p variants={fadeUp} className="section-tag" style={{ marginBottom: '1.5rem' }}>
                        ◆ Achievements
                    </motion.p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem',
                    }}>
                        {ACHIEVEMENTS.map((ach, i) => (
                            <motion.div
                                key={ach.id}
                                variants={fadeUp}
                                className={`animate-float-${(i % 2) + 1}`}
                                style={{ animationDelay: `${i * 0.6}s` }}
                            >
                                <div
                                    className="glass card-3d"
                                    style={{
                                        borderRadius: '1.5rem',
                                        padding: '1.75rem',
                                        border: `1px solid ${ach.color}30`,
                                        boxShadow: `0 0 40px ${ach.color}0d`,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        transition: 'border-color 0.3s, box-shadow 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = `${ach.color}60`;
                                        el.style.boxShadow = `0 0 60px ${ach.color}20`;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = `${ach.color}30`;
                                        el.style.boxShadow = `0 0 40px ${ach.color}0d`;
                                    }}
                                >
                                    {/* Top row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <span style={{ fontSize: '2.5rem' }}>{ach.icon}</span>
                                        <span style={{
                                            fontSize: '0.65rem', fontWeight: 700,
                                            padding: '0.3rem 0.75rem', borderRadius: '999px',
                                            background: `${ach.color}20`,
                                            border: `1px solid ${ach.color}50`,
                                            color: ach.color,
                                            fontFamily: "'JetBrains Mono', monospace",
                                            letterSpacing: '0.05em',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {ach.badgeLabel}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                                            {ach.title}
                                        </h3>
                                        <p style={{ fontSize: '0.8rem', color: ach.color, fontWeight: 600, marginBottom: '0.2rem' }}>
                                            {ach.subtitle}
                                        </p>
                                        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                            {ach.detail}
                                        </p>
                                    </div>

                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, flexGrow: 1 }}>
                                        {ach.description}
                                    </p>

                                    {/* Certificate image preview */}
                                    {ach.image && (
                                        <div style={{
                                            borderRadius: '0.75rem',
                                            overflow: 'hidden',
                                            border: `1px solid ${ach.color}25`,
                                            position: 'relative',
                                            aspectRatio: '16/9',
                                        }}>
                                            <Image
                                                src={ach.image}
                                                alt={ach.title}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            {/* Holographic overlay */}
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                background: `linear-gradient(135deg, ${ach.color}15 0%, transparent 60%)`,
                                                pointerEvents: 'none',
                                            }} />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Certificates ── */}
                <motion.div variants={stagger} initial="hidden" animate={isInView ? 'show' : 'hidden'}>
                    <motion.p variants={fadeUp} className="section-tag" style={{ marginBottom: '1.5rem' }}>
                        ◆ Certifications
                    </motion.p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem',
                    }}>
                        {CERTIFICATES.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                variants={fadeUp}
                                className="animate-bob"
                                style={{ animationDelay: `${i * 0.4}s` }}
                            >
                                <div
                                    className="glass card-3d"
                                    style={{
                                        borderRadius: '1.25rem',
                                        padding: '1.5rem',
                                        border: `1px solid ${cert.color}25`,
                                        background: `${cert.color}04`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = `${cert.color}55`;
                                        el.style.boxShadow = `0 20px 60px ${cert.color}15`;
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLDivElement;
                                        el.style.borderColor = `${cert.color}25`;
                                        el.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Logo + cert image preview */}
                                    {cert.image ? (
                                        <div style={{
                                            borderRadius: '0.6rem', overflow: 'hidden',
                                            border: `1px solid ${cert.color}20`,
                                            position: 'relative', aspectRatio: '4/2.5',
                                        }}>
                                            <Image src={cert.image} alt={cert.name} fill style={{ objectFit: 'cover' }} />
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                background: `linear-gradient(to bottom, transparent 50%, ${cert.color}22)`,
                                                pointerEvents: 'none',
                                            }} />
                                        </div>
                                    ) : (
                                        <div style={{
                                            height: '80px', borderRadius: '0.6rem',
                                            background: `${cert.color}10`,
                                            border: `1px dashed ${cert.color}30`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '2rem',
                                        }}>
                                            {cert.logo}
                                        </div>
                                    )}

                                    {/* Info */}
                                    <div>
                                        <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                                            {cert.name}
                                        </h4>
                                        <p style={{ fontSize: '0.78rem', color: cert.color, fontWeight: 600, marginBottom: '0.2rem' }}>
                                            {cert.org}
                                        </p>
                                        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                                            Issued: {cert.date}
                                        </p>
                                    </div>

                                    {/* Verify button */}
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                            background: `${cert.color}15`,
                                            border: `1px solid ${cert.color}40`,
                                            color: cert.color,
                                            textDecoration: 'none',
                                            transition: 'all 0.25s',
                                            justifyContent: 'center',
                                        }}
                                        onMouseEnter={e => {
                                            const el = e.currentTarget as HTMLAnchorElement;
                                            el.style.background = `${cert.color}28`;
                                            el.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={e => {
                                            const el = e.currentTarget as HTMLAnchorElement;
                                            el.style.background = `${cert.color}15`;
                                            el.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        Verify Certificate
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
