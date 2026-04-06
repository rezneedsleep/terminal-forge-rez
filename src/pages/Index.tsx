import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen scanlines grid-pattern scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <FooterSection />
    </div>
  );
};

export default Index;
