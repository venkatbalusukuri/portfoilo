'use client';
import { useEffect, useRef } from 'react';

interface Particle {
    x: number; y: number; z: number;
    vx: number; vy: number; vz: number;
    size: number; color: string; opacity: number;
}

export default function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);
    const animRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const colors = ['#F59E0B', '#3B82F6', '#14B8A6', '#8B5CF6', '#10B981'];
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Init particles
        const count = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 12000));
        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            z: Math.random(),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            vz: 0,
            size: Math.random() * 2.5 + 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.5 + 0.15,
        }));

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', onMouseMove);

        let lastTime = 0;
        const draw = (ts: number) => {
            const dt = Math.min(ts - lastTime, 50);
            lastTime = ts;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            particlesRef.current.forEach((p, i) => {
                // Mouse repulsion
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.vx += (dx / dist) * force * 0.04;
                    p.vy += (dy / dist) * force * 0.04;
                }

                // Damping
                p.vx *= 0.98;
                p.vy *= 0.98;

                p.x += p.vx * (dt / 16);
                p.y += p.vy * (dt / 16);

                // Wrap edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity * p.z;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const q = particlesRef.current[j];
                    const ex = p.x - q.x;
                    const ey = p.y - q.y;
                    const ed = Math.sqrt(ex * ex + ey * ey);
                    if (ed < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = '#3B82F6';
                        ctx.globalAlpha = (1 - ed / 100) * 0.12;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
                ctx.globalAlpha = 1;
            });

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
}
