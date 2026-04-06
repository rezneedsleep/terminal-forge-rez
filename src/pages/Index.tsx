import HeroSection from '@/components/HeroSection';
import MarauderSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen scanlines grid-pattern">
      <HeroSection />
      <MarauderSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
