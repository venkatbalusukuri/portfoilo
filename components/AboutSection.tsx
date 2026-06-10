'use client';
import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { TECH_STACK } from '@/data/portfolio-data';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger: Variants = { show: { transition: { staggerChildren: 0.08 } } };

export default function AboutSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const philosophy = [
        {
            icon: '🔭',
            title: 'Data Curiosity',
            body: 'I approach every dataset like a scientist — asking why before how, and always chasing the signal inside the noise.',
            color: '#F59E0B',
        },
        {
            icon: '⚖️',
            title: 'Precision & Clarity',
            body: 'Numbers only matter when they are understood. I pair rigorous analysis with crystal-clear storytelling.',
            color: '#3B82F6',
        },
        {
            icon: '🚀',
            title: 'Impact-Driven',
            body: 'Every chart, query, and model I build is measured by one metric: the business decisions it improves.',
            color: '#10B981',
        },
        {
            icon: '🔄',
            title: 'Continuous Learning',
            body: 'Data moves fast. I stay ahead by blending computer vision, ML, and classical BI in a single modern toolkit.',
            color: '#8B5CF6',
        },
    ];

    return (
        <section id="about" className="section-padding" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            {/* Ambient blob */}
            <div style={{
                position: 'absolute', bottom: '10%', right: '5%',
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Section header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <motion.p variants={fadeUp} className="section-tag">◆ About Me</motion.p>
                    <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        The Mind Behind the{' '}
                        <span className="gradient-text-amber">Data</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
                        A passionate Data Analyst who transforms complex, gravitational datasets into
                        weightless, floating clarity — using Python, Oracle SQL, and Power BI as my
                        instruments of lift.
                    </motion.p>
                </motion.div>

                {/* Philosophy bento grid */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.25rem',
                        marginBottom: '4rem',
                    }}
                >
                    {philosophy.map((p, i) => (
                        <motion.div
                            key={p.title}
                            variants={fadeUp}
                            className={`card-3d animate-float-${(i % 3) + 1}`}
                            style={{ animationDelay: `${i * 0.5}s` }}
                        >
                            <div
                                className="glass"
                                style={{
                                    borderRadius: '1.25rem',
                                    padding: '1.75rem',
                                    height: '100%',
                                    border: `1px solid ${p.color}22`,
                                    boxShadow: `0 0 30px ${p.color}0a`,
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${p.color}55`;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.color}20`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${p.color}22`;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${p.color}0a`;
                                }}
                            >
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{p.icon}</span>
                                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: p.color }}>{p.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{p.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech stack */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    <motion.p variants={fadeUp} className="section-tag" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        ◆ Core Tech Stack
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.85rem',
                            justifyContent: 'center',
                        }}
                    >
                        {TECH_STACK.map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                className={`animate-bob`}
                                style={{ animationDelay: `${i * 0.3}s` }}
                                whileHover={{ scale: 1.08, y: -4 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className="glass"
                                    style={{
                                        padding: '0.7rem 1.2rem',
                                        borderRadius: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.6rem',
                                        border: `1px solid ${tech.color}30`,
                                        background: `${tech.color}08`,
                                        cursor: 'default',
                                        transition: 'all 0.3s',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.background = `${tech.color}15`;
                                        (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}60`;
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${tech.color}25`;
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.background = `${tech.color}08`;
                                        (e.currentTarget as HTMLElement).style.borderColor = `${tech.color}30`;
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem' }}>{tech.icon}</span>
                                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{tech.name}</span>
                                    <span style={{
                                        fontSize: '0.65rem', color: tech.color,
                                        fontFamily: "'JetBrains Mono', monospace",
                                        background: `${tech.color}15`,
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '999px',
                                    }}>
                                        {tech.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
