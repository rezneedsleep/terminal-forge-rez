import React from 'react';
import CyberWindowFrame from '@/components/CyberWindowFrame';
import CyberStatusline from '@/components/CyberStatusline';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import BackToTop from '@/components/BackToTop';

const Contact: React.FC = () => {
  return (
    <CyberWindowFrame domain="vstn.cloud/contact">
      <div className="flex-1 w-full relative scanlines grid-pattern">
        <main className="w-full min-w-0 px-3 sm:px-6 md:px-10 py-6 pb-24 overflow-x-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            <ContactSection />
            <FooterSection />
          </div>
        </main>
      </div>

      <BackToTop />
      <CyberStatusline />
    </CyberWindowFrame>
  );
};

export default Contact;