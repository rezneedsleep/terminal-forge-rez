import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Instagram, Mail, Check } from 'lucide-react';
import { toast } from 'sonner';
import mePhoto from '@/assets/me.jpeg';

// Authentic Brand Icons for Discord and Spotify
const DiscordIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const SpotifyIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.306a.75.75 0 0 1-1.03.248c-2.82-1.722-6.368-2.112-10.55-1.157a.75.75 0 1 1-.334-1.462c4.58-1.045 8.52-.6 11.666 1.341a.75.75 0 0 1 .248 1.03zm1.468-3.262a.938.938 0 0 1-1.288.309c-3.227-1.984-8.148-2.558-11.966-1.399a.938.938 0 1 1-.548-1.794c4.368-1.325 9.794-.688 13.493 1.586a.938.938 0 0 1 .309 1.288zm.126-3.41c-3.87-2.298-10.258-2.51-13.948-1.39a1.125 1.125 0 1 1-.652-2.155c4.24-1.287 11.293-1.037 15.748 1.608a1.125 1.125 0 1 1-1.148 1.937z"/>
  </svg>
);

const ROLES = [
  'Frontend Developer',
  'Embedded Systems Engineer',
  'Full-Stack Developer',
  'Infrastructure Specialist',
  'IoT & Wireless Researcher',
];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    const email = 'zyxienn21@gmail.com';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      toast.success('Email copied to clipboard: zyxienn21@gmail.com');
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      toast.error('Failed to copy email to clipboard.');
    }
  };

  // Typewriter effect for roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="w-full pt-24 xs:pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-18 relative">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="md:col-span-7 flex flex-col items-start text-left">
          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-white leading-[1.1] mb-2 sm:mb-3">
            Hi, I'm Rezky
          </h1>

          {/* Typing Role Subtitle */}
          <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-200 flex items-center min-h-[2rem] sm:min-h-[2.25rem] mb-3 sm:mb-4">
            <span>{displayedText}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-zinc-200 ml-1.5 animate-pulse" />
          </div>

          {/* About Anchor */}
          <div id="about" className="scroll-mt-28" />

          {/* Bio Description */}
          <p className="text-xs xs:text-sm sm:text-[15px] text-zinc-400 leading-relaxed max-w-lg mb-5 sm:mb-6 font-normal">
            I build modern web applications with React and TypeScript, develop firmware for embedded IoT microcontrollers (ESP32/Arduino), and manage self-hosted Linux clusters on Proxmox.
          </p>

          {/* CTA Action Button */}
          <div className="mb-5 sm:mb-6">
            <a 
              href="mailto:zyxienn21@gmail.com" 
              className="btn-pill-primary text-xs xs:text-sm py-2.5 px-5 xs:px-6 font-medium shadow-md inline-flex items-center gap-2 active:scale-95 touch-manipulation"
            >
              <span>Contact Me</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Horizontal Line Divider */}
          <div className="w-full max-w-md border-t border-zinc-800/80 mb-5" />

          {/* Follow Me Social Links Row */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-medium text-zinc-400 mr-1">
              Find me: 
            </span>

            <a
              href="https://github.com/rezneedsleep"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href="https://discord.com/users/864702111542673428"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Discord Profile"
              aria-label="Discord"
            >
              <DiscordIcon size={16} />
            </a>

            <a
              href="https://open.spotify.com/user/sxym42ud6aa6q2wpyxlztog6d?si=9321e6db0f1a4f15"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Spotify Profile"
              aria-label="Spotify"
            >
              <SpotifyIcon size={16} />
            </a>

            <a
              href="https://instagram.com/rez.css"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Instagram Profile"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`social-icon-btn transition-all duration-200 cursor-pointer ${
                copiedEmail
                  ? '!border-emerald-500/70 !bg-emerald-950/60 !text-emerald-400 scale-105 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  : ''
              }`}
              title={copiedEmail ? 'Email Copied!' : 'Copy Email (zyxienn21@gmail.com)'}
              aria-label="Copy Email to Clipboard"
            >
              {copiedEmail ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Mail size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Photo Frame with refined bezel */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[270px] xs:max-w-[290px] sm:max-w-[330px] md:max-w-[360px] aspect-square rounded-[26px] sm:rounded-[32px] p-2 bg-gradient-to-b from-zinc-800/80 to-zinc-900/60 border border-zinc-800 shadow-2xl shadow-black/80 group backdrop-blur-md">
            <div className="w-full h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-zinc-950 relative">
              <img
                src={mePhoto}
                alt="Rezky"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Micro Badge */}
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/80 border border-zinc-700/80 text-[10px] font-mono text-zinc-300 backdrop-blur-md shadow-md">
                @rez
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;