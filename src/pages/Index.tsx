import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import FooterSection from '@/components/FooterSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-mesh-dark tech-dot-grid text-zinc-100 flex flex-col relative selection:bg-zinc-200 selection:text-black overflow-x-hidden">
      {/* Floating Pill Dock Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 2-Column Hero Section matching reference */}
        <HeroSection />

        {/* Featured Projects Section */}
        <FeaturedProjectsSection />

        {/* Services & Skills Matrix */}
        <SkillsSection />

        {/* Modern Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
