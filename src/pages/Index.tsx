import Navbar from '@/components/navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import AchievementsSection from '@/components/AchievementsSection';
import FooterSection from '@/components/FooterSection';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen scanlines grid-pattern scroll-smooth">
      <Navbar />
      <HeroSection />
      <InteractiveTerminal />
      <FeaturedProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
