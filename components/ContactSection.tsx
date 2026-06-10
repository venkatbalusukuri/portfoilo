'use client';
import { useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolio-data';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function ContactSection() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Opens default mail client — replace with your preferred form handler
        const mailto = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.location.href = mailto;
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.85rem 1rem',
        borderRadius: '0.6rem',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: 'var(--text-primary)',
        fontFamily: 'inherit',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
    };

    const contactItems = [
        {
            icon: '✉️',
            label: 'Email',
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
            color: '#F59E0B',
        },
        {
            icon: '📞',
            label: 'Phone',
            value: PERSONAL_INFO.phone,
            href: `tel:${PERSONAL_INFO.phone}`,
            color: '#3B82F6',
        },
        {
            icon: '📍',
            label: 'Location',
            value: PERSONAL_INFO.location,
            href: `https://maps.google.com?q=${encodeURIComponent(PERSONAL_INFO.location)}`,
            color: '#10B981',
        },
        {
            icon: '🎓',
            label: 'Education',
            value: PERSONAL_INFO.education,
            href: '#',
            color: '#8B5CF6',
        },
    ];

    return (
        <section id="contact" className="section-padding" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            {/* Ambient glow */}
            <div style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: '600px', height: '300px',
                background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container-custom">
                {/* Header */}
                <motion.div
                    variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <motion.p variants={fadeUp} className="section-tag">◆ Let's Connect</motion.p>
                    <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Initiate{' '}<span className="gradient-text-amber">Contact</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
                        Have a project in mind or want to discuss data? I'm available and ready to launch.
                    </motion.p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '3rem',
                    alignItems: 'start',
                }}
                    className="contact-grid"
                >
                    {/* ── Left: Contact details ── */}
                    <motion.div
                        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        {contactItems.map(item => (
                            <motion.a
                                key={item.label}
                                variants={fadeUp}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="glass"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.1rem 1.25rem',
                                    borderRadius: '0.9rem',
                                    border: `1px solid ${item.color}20`,
                                    textDecoration: 'none',
                                    transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = `${item.color}50`;
                                    el.style.boxShadow = `0 8px 30px ${item.color}12`;
                                    el.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.borderColor = `${item.color}20`;
                                    el.style.boxShadow = 'none';
                                    el.style.transform = 'translateX(0)';
                                }}
                            >
                                <div style={{
                                    width: '42px', height: '42px', borderRadius: '0.6rem', flexShrink: 0,
                                    background: `${item.color}15`, border: `1px solid ${item.color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem',
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.7rem', color: item.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: '0.15rem' }}>
                                        {item.label}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                        {item.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}

                        {/* Social */}
                        <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                                className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
                                className="btn-ghost" style={{ flex: 1, justifyContent: 'center', borderColor: 'rgba(139,92,246,0.3)', color: '#C4B5FD' }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                GitHub
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Contact form (illuminated panel) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div
                            className="glass"
                            style={{
                                borderRadius: '1.5rem',
                                padding: '2.25rem',
                                border: '1px solid rgba(245,158,11,0.18)',
                                boxShadow: '0 0 60px rgba(245,158,11,0.05), 0 30px 80px rgba(0,0,0,0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Top accent line */}
                            <div style={{
                                position: 'absolute', top: 0, left: '1.5rem', right: '1.5rem', height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--amber), transparent)',
                                borderRadius: '1px',
                            }} />

                            <p style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.7rem',
                                color: 'var(--amber)',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '1.5rem',
                            }}>
                                ◆ Data Transmission Panel
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                                    <div>
                                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                            Name
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(245,158,11,0.1)'; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                            Email
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            style={inputStyle}
                                            onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(245,158,11,0.1)'; }}
                                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Project collaboration, hiring, etc."
                                        style={inputStyle}
                                        onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(245,158,11,0.1)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                                    />
                                </div>

                                <div>
                                    <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', fontFamily: "'JetBrains Mono', monospace" }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Describe your project or inquiry..."
                                        style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                                        onFocus={e => { e.target.style.borderColor = 'rgba(245,158,11,0.5)'; e.target.style.boxShadow = '0 0 12px rgba(245,158,11,0.1)'; }}
                                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn-primary"
                                    style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '0.95rem' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {sent ? (
                                        <>✓ Message Launched!</>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            Launch Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
