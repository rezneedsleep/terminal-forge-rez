import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import BackToTop from '@/components/BackToTop';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-mesh-dark tech-dot-grid text-zinc-100 flex flex-col relative selection:bg-zinc-200 selection:text-black">
      <FloatingNav activeSection="contact" />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-16">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors bg-zinc-900/80 border border-zinc-800 rounded-full px-4 py-2 hover:bg-zinc-800"
          >
            <ArrowLeft size={13} />
            <span>Back to Home</span>
          </Link>
        </div>

        <ContactSection />
        <FooterSection />
      </main>

      <BackToTop />
    </div>
  );
};

export default Contact;