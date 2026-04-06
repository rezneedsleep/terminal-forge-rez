import HeroSection from '@/components/HeroSection';
import MarauderSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen scanlines grid-pattern">
      <HeroSection />
      <MarauderSection />
      <SkillsSection />
      <ExperienceSection />
      <FooterSection />
    </div>
  );
};

export default Index;
