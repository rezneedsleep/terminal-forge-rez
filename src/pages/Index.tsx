import React, { useState, useEffect } from 'react';
import CyberWindowFrame from '@/components/CyberWindowFrame';
import CyberStatusline from '@/components/CyberStatusline';
import HeroSection from '@/components/HeroSection';
import CyberPostCard from '@/components/CyberPostCard';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import FeaturedProjectsSection from '@/components/MarauderSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import FooterSection from '@/components/FooterSection';
import BackToTop from '@/components/BackToTop';
import TextScramble from '@/components/TextScramble';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('id-ID', { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <CyberWindowFrame domain="vstn.cloud">
      <div className="flex-1 w-full relative scanlines grid-pattern">
        {/* Main Centered Content Shell */}
        <main className="w-full min-w-0 px-2.5 sm:px-6 md:px-10 py-3 sm:py-6 pb-20 overflow-x-hidden">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Top Profile Card with In-Place Interactive Tabs */}
            <HeroSection activeTab={activeTab} onSelectTab={setActiveTab} />

            {/* Live Telemetry / Terminal Pipe Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 bg-[#0a0a0d] border border-[#222227] text-[10px] font-mono select-none">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="inline-block w-2 h-2 rounded-full bg-zinc-300 animate-pulse" />
                <span className="text-zinc-500">STDOUT:</span>
                <span className="text-zinc-200">
                  vstn://views/<TextScramble text={activeTab} trigger={activeTab} />.tui
                </span>
                <span className="cursor-block text-zinc-500 text-[9px]" />
              </div>
              <div className="flex items-center gap-2.5 text-zinc-500">
                <span>TIME: [{currentTime || '--:--:--'} WIB]</span>
                <span className="hidden sm:inline text-zinc-700">•</span>
                <span className="hidden sm:inline text-zinc-400">STATUS: [200 OK]</span>
                <span className="hidden sm:inline text-zinc-700">•</span>
                <span className="text-zinc-400">STREAM_ACTIVE</span>
              </div>
            </div>

            {/* In-Place Dynamic Content Viewer with CRT Redraw / Screen Flicker */}
            <div key={activeTab} className="pt-1 min-h-[360px] animate-crt-switch">
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-fade-in">
                  <CyberPostCard onSwitchTab={setActiveTab} />
                  <FeaturedProjectsSection />
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="animate-fade-in">
                  <InteractiveTerminal />
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="animate-fade-in">
                  <FeaturedProjectsSection />
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="animate-fade-in">
                  <SkillsSection />
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="animate-fade-in">
                  <ExperienceSection />
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="animate-fade-in">
                  <AchievementsSection />
                </div>
              )}
            </div>

            <FooterSection />
          </div>
        </main>
      </div>

      {/* Global Statusline & Back To Top */}
      <BackToTop />
      <CyberStatusline onSelectTab={setActiveTab} />
    </CyberWindowFrame>
  );
};

export default Index;
