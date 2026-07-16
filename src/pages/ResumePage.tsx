// src/pages/ResumePage.tsx

import SectionTitle from '../components/ui/SectionTitle';
import { personalInfo } from '../data/content';

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="简历" />

      <div className="text-center">
        <a
          href="/resume/张少聪-秋招简历.pdf"
          download
          className="inline-flex items-center gap-2 font-mono text-lg text-green border border-green rounded-sm px-10 py-5 hover:bg-green/10 transition-colors mb-8"
        >
          📥 下载 PDF
        </a>
        <p className="text-slate text-sm mb-12">或直接通过以下方式联系我</p>

        <div className="flex flex-col items-center gap-4 font-mono text-base text-slate-light">
          <p>
            <span className="text-green mr-2">✉️</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-green transition-colors">
              {personalInfo.email}
            </a>
          </p>
          <p>
            <span className="text-green mr-2">📱</span>
            {personalInfo.phone}
          </p>
          <p>
            <span className="text-green mr-2">📍</span>
            {personalInfo.location}
          </p>
        </div>
      </div>
    </div>
  );
}
