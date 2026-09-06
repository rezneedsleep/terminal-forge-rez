import React, { useState } from 'react';
import { Radio, Bluetooth, Activity, BookOpen, ExternalLink, Bookmark, ShieldAlert, Cpu } from 'lucide-react';
import TextScramble from '@/components/TextScramble';

interface ProjectData {
  id: string;
  name: string;
  version: string;
  category: string;
  meta: string;
  description: string;
  bullets: string[];
  tags: string[];
  link?: string;
  linkText?: string;
  warning?: string;
  icon: React.ElementType;
}

const PROJECTS: ProjectData[] = [
  {
    id: 'marauder',
    name: 'ESP32 Marauder',
    version: 'V1.0.7',
    category: 'HARDWARE / RF SECURITY',
    meta: '@rez • 2d ago • 68 words • 12 saves • 8 replies',
    description: 'A comprehensive wireless auditing platform built on the ESP32 microcontroller. Capable of 802.11 frame manipulation, PMKID capture, deauthentication detection, and BLE device enumeration — all from a handheld, battery-powered unit.',
    bullets: [
      '802.11 Frame Analysis — Beacon, probe, and deauth frame capture and injection',
      'PMKID Harvesting — WPA/WPA2 handshake-less key material extraction',
      'BLE Sniffing — Bluetooth Low Energy device discovery and enumeration',
      'ESP32 Dual-Core — Xtensa LX6 @ 240MHz with Wi-Fi and BLE radios',
      'TFT Display — Real-time packet visualization and menu navigation',
      'SD Card Logging — Persistent capture storage for post-analysis',
    ],
    tags: ['esp32', 'rf-security', '802.11', 'c++', 'embedded'],
    warning: 'Developed for educational and ethical security auditing purposes. Always obtain explicit authorization before testing.',
    icon: Radio,
  },
  {
    id: 'blue-jammer',
    name: 'ESP32 Blue Jammer',
    version: 'V0.9.4',
    category: 'HARDWARE / RF DISRUPTION',
    meta: '@rez • 5d ago • 45 words • 7 saves • 4 replies',
    description: 'Bluetooth signal disruption tool built on the ESP32 platform. Targets BLE and Classic Bluetooth channels for controlled interference testing in authorized RF environments.',
    bullets: [
      'BLE Channel Flooding — Targeted disruption across 40 BLE advertising channels',
      'Classic BT Interference — Frequency hopping disruption on 79 Bluetooth channels',
      'ESP32 BLE Stack — Native Bluetooth 4.2 + BLE radio with full stack control',
      'Frequency Spectrum Analysis — Live hopping monitor in RF test chambers',
    ],
    tags: ['esp32', 'bluetooth', 'ble', 'rf-testing', 'embedded'],
    warning: 'For authorized RF testing only. Bluetooth signal disruption may violate local regulations. Ensure compliance with applicable laws.',
    icon: Bluetooth,
  },
  {
    id: 'personal-tracker',
    name: 'Personal Tracker',
    version: 'V2.1.0',
    category: 'WEB APP / PRODUCTIVITY',
    meta: '@rez • 1w ago • 52 words • 18 saves • 6 replies',
    description: 'A self-hosted personal analytics dashboard for tracking daily expenses, building habits, and logging body weight trends. Built with a modern responsive interface and localized database storage.',
    bullets: [
      'Financial Tracking — Daily expense categorization, cash-flow monitoring, and monthly summaries',
      'Habit Grid — GitHub-style activity contribution grid for daily streak monitoring',
      'Weight Log — Body metrics logging with visual trend lines and target goal forecasting',
      'Self-Hosted — Deployed on personal Proxmox infrastructure under tracker.vstn.cloud',
    ],
    tags: ['react', 'typescript', 'tailwind', 'sqlite', 'self-hosted'],
    link: 'https://tracker.vstn.cloud',
    linkText: 'tracker.vstn.cloud',
    icon: Activity,
  },
  {
    id: 'edutrack',
    name: 'EduTrack',
    version: 'V1.4.2',
    category: 'WEB APP / EDUCATION',
    meta: '@rez • 2w ago • 58 words • 23 saves • 11 replies',
    description: 'An academic tracking platform for students to manage schedules, assignments, and grades in one streamlined dashboard. Built for productivity, deadlined schedules, and academic success.',
    bullets: [
      'Course Management — Organize courses, subjects, and semester schedules in a unified view',
      'Assignment Tracker — Track assignments, deadlines, and submission status with priority sorting',
      'Grade Analytics — Visualize academic performance with interactive grade charts and GPA trends',
      'Deadline Reminders — Get notified of upcoming due dates and never miss a submission again',
      'Student Dashboard — Personalized overview with quick access to all academic activities',
    ],
    tags: ['react', 'vite', 'tailwind', 'supabase', 'dashboard'],
    link: 'https://edutrack.davinn.net',
    linkText: 'edutrack.davinn.net',
    icon: BookOpen,
  },
];

const FeaturedProjectsSection: React.FC = () => {
  const [savedId, setSavedId] = useState<string | null>(null);

  const handleSave = (proj: ProjectData) => {
    navigator.clipboard.writeText(proj.link || proj.name);
    setSavedId(proj.id);
    setTimeout(() => setSavedId(null), 2000);
  };

  return (
    <section id="projects" className="w-full py-2 scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-2 mb-3 text-zinc-500 font-mono text-xs select-none">
        <div className="flex items-center gap-2">
          <span className="text-zinc-300">$</span>
          <span className="text-zinc-200">cat</span>
          <span className="text-zinc-400">
            <TextScramble text="featured_projects.md" />
          </span>
          <span className="cursor-block text-zinc-500 text-[9px]" />
        </div>
        <span className="text-[10px] text-zinc-600 tracking-wider">[HOTKEY: P]</span>
      </div>

      <div className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase mb-4 flex items-center gap-2 select-none">
        <span>PROJECTS // CHANGELOG & REPOSITORIES</span>
        <span className="h-px bg-zinc-800 flex-1" />
      </div>

      {/* Project Cards (Styled as TUI Changelog / Post Cards) */}
      <div className="space-y-6">
        {PROJECTS.map((proj) => {
          const Icon = proj.icon;
          return (
            <article
              key={proj.id}
              className="border border-[#27272a] bg-[#0d0d10] p-3.5 sm:p-6 transition-all hover:border-[#3f3f46] relative group"
            >
              {/* Corner ASCII brackets */}
              <span className="absolute top-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">┌</span>
              <span className="absolute top-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┐</span>
              <span className="absolute bottom-1 left-1.5 font-mono text-[10px] text-zinc-600 select-none">└</span>
              <span className="absolute bottom-1 right-1.5 font-mono text-[10px] text-zinc-600 select-none">┘</span>

              {/* Card Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1f1f24] pb-2.5 mb-3 select-none text-[11px] font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-zinc-300 shrink-0" />
                  <span className="text-zinc-200 font-semibold">{proj.name}</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-[10px] bg-[#1a1a20] text-zinc-300 px-1.5 py-0.2 border border-zinc-700">
                    <TextScramble text={proj.version} />
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500">
                  {proj.meta}
                </div>
              </div>

              {/* Description */}
              <p className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3 sm:mb-4">
                {proj.description}
              </p>

              {/* Bullet Features (Changelog Format) */}
              <div className="bg-[#09090b] border border-[#1e1e23] p-3 sm:p-4 mb-3 sm:mb-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2 flex items-center gap-1.5 select-none">
                  <span>KEY SPECIFICATIONS & FEATURES:</span>
                </div>
                <ul className="space-y-1.5 text-xs font-mono text-zinc-400">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-600 select-none">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning note if any */}
              {proj.warning && (
                <div className="text-[11px] font-mono text-zinc-500 bg-[#121216] border border-[#222227] px-3 py-2 mb-3 sm:mb-4 flex items-start gap-2">
                  <ShieldAlert size={14} className="text-zinc-400 shrink-0 mt-0.5" />
                  <span className="leading-normal">{proj.warning}</span>
                </div>
              )}

              {/* Bottom Tag Pills & Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-[#1e1e23] select-none">
                {/* Tag Pills in Brackets */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-[#141418] text-zinc-400 border border-[#24242a] px-1.5 py-0.5"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                {/* Hotkeys / Action Links */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-start">
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-tui text-xs active:scale-[0.97]"
                      title={`Visit ${proj.name}`}
                    >
                      <span>[↵] Open Project</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-1 border border-[#222227] bg-[#121216]">
                      [HW Hardware Build]
                    </span>
                  )}

                  <button
                    onClick={() => handleSave(proj)}
                    className="btn-tui text-xs cursor-pointer active:scale-[0.97]"
                    title="Copy info"
                  >
                    <Bookmark size={11} />
                    <span>{savedId === proj.id ? 'Saved!' : '[S] Save'}</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;