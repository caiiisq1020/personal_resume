// src/components/layout/Footer.tsx

import { personalInfo } from '../../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-navy-lightest/20 py-8 text-center">
      <div className="flex items-center justify-center gap-6 mb-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-slate hover:text-green transition-colors text-sm font-mono"
        >
          ✉️ {personalInfo.email}
        </a>
        <span className="text-slate/40">|</span>
        <span className="text-slate text-sm font-mono">
          📱 {personalInfo.phone}
        </span>
        <span className="text-slate/40">|</span>
        <span className="text-slate text-sm">
          📍 {personalInfo.location}
        </span>
      </div>
      <p className="text-xs text-slate/40 font-mono">
        Designed & Built by {personalInfo.name} · 2026
      </p>
    </footer>
  );
}
