'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// ParticleField is canvas-based — load only on client
const ParticleField = dynamic(() => import('@/components/ParticleField'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Fixed star-field background */}
      <ParticleField />

      {/* Sticky navbar */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />

        {/* Divider */}
        <div className="container-custom">
          <div className="divider-glow" />
        </div>

        <AboutSection />

        <div className="container-custom">
          <div className="divider-glow" />
        </div>

        <ProjectsSection />

        <div className="container-custom">
          <div className="divider-glow" />
        </div>

        <AchievementsSection />

        <div className="container-custom">
          <div className="divider-glow" />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
