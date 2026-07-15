// src/pages/ProjectsPage.tsx

import { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/content';

const categories = ['全部', 'AI应用开发', '后端开发'];

export default function ProjectsPage() {
  const [active, setActive] = useState('全部');

  const filtered =
    active === '全部'
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="项目经历" />

      {/* 筛选标签 */}
      <div className="flex gap-4 mb-10 font-mono text-sm">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-1.5 rounded-full border transition-colors ${
              active === c
                ? 'border-green text-green bg-green/10'
                : 'border-navy-lightest text-slate hover:text-green hover:border-green/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 项目卡片列表 */}
      <div className="space-y-6">
        {filtered.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}
