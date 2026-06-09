'use client';
import { useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { PROJECTS } from '@/data/portfolio-data';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProjectCard({
    project,
    isActive,
    index,
    onClick,
}: {
    project: typeof PROJECTS[0];
    isActive: boolean;
    index: number;
    total: number;
    onClick: () => void;
}) {
    const offset = index;

    return (
        <motion.div
            onClick={onClick}
            animate={{
                z: isActive ? 60 : -30 * Math.abs(offset),
                scale: isActive ? 1 : 0.88 - Math.abs(offset) * 0.04,
                opacity: isActive ? 1 : 0.5 - Math.abs(offset) * 0.1,
                x: isActive ? 0 : offset * 280,
                rotateY: isActive ? 0 : offset * -8,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 28 }}
            style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                translateX: '-50%',
                width: '100%',
                maxWidth: '520px',
                cursor: isActive ? 'default' : 'pointer',
                transformStyle: 'preserve-3d',
                zIndex: isActive ? 10 : 10 - Math.abs(offset),
            }}
        >
            <div
                className="glass"
                style={{
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    border: `1px solid ${project.accent}${isActive ? '55' : '22'}`,
                    boxShadow: isActive
                        ? `0 0 60px ${project.accent}20, 0 30px 80px rgba(0,0,0,0.5)`
                        : '0 10px 40px rgba(0,0,0,0.3)',
                    transition: 'border-color 0.4s, box-shadow 0.4s',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Featured badge */}
                {project.featured && (
                    <div style={{
                        position: 'absolute',
                        top: '1rem', right: '1rem',
                        background: `linear-gradient(135deg, ${project.accent}, ${project.accent}88)`,
                        color: '#000',
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        ★ Featured
                    </div>
                )}

                {/* Accent line */}
                <div style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                    borderRadius: '2px',
                    marginBottom: '1.5rem',
                    width: '60%',
                }} />

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                    {project.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: project.accent, fontFamily: "'JetBrains Mono', monospace", marginBottom: '1rem' }}>
                    {project.subtitle}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.72rem',
                            fontFamily: "'JetBrains Mono', monospace",
                            padding: '0.25rem 0.7rem',
                            borderRadius: '999px',
                            background: `${project.accent}12`,
                            border: `1px solid ${project.accent}30`,
                            color: project.accent,
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <a href={project.caseStudyUrl} className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.55rem 1rem', background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)` }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
                        View Case Study
                    </a>
                    <a href={project.githubUrl} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.55rem 1rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        GitHub
                    </a>
                    <a href={project.dashboardUrl} className="btn-ghost" style={{ fontSize: '0.8rem', padding: '0.55rem 1rem' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                        Live Dashboard
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [active, setActive] = useState(0);

    const prev = () => setActive(a => (a - 1 + PROJECTS.length) % PROJECTS.length);
    const next = () => setActive(a => (a + 1) % PROJECTS.length);

    const getOffset = (i: number) => {
        let d = i - active;
        if (d > PROJECTS.length / 2) d -= PROJECTS.length;
        if (d < -PROJECTS.length / 2) d += PROJECTS.length;
        return d;
    };

    return (
        <section id="projects" className="section-padding" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            {/* Blob */}
            <div style={{
                position: 'absolute', top: '20%', left: '0',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <motion.p variants={fadeUp} className="section-tag">◆ My Work</motion.p>
                    <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Flagship Analytics{' '}
                        <span className="gradient-text-blue">Project</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
                        {PROJECTS.length > 1
                            ? 'Each project floats independently on its own Z-axis — click the cards or use the arrows to explore.'
                            : 'A deep-dive into cross-platform AI deployment and real-time data visualization.'}
                    </motion.p>
                </motion.div>

                {/* 3D Carousel / Single Card Display */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                        position: 'relative',
                        height: '520px',
                        perspective: '1200px',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {PROJECTS.map((p, i) => (
                        <ProjectCard
                            key={p.id}
                            project={p}
                            isActive={i === active}
                            index={getOffset(i)}
                            total={PROJECTS.length}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </motion.div>

                {/* 🎯 Controls - Only show if multiple projects exist */}
                {PROJECTS.length > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
                        <button onClick={prev} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                            ← Prev
                        </button>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {PROJECTS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    style={{
                                        width: i === active ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '999px',
                                        background: i === active ? 'var(--amber)' : 'var(--text-muted)',
                                        border: 'none', cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>

                        <button onClick={next} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
