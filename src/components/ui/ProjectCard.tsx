// src/components/ui/ProjectCard.tsx

import TechTag from './TechTag';

interface Project {
  id: string;
  title: string;
  period: string;
  category: string;
  techs: string[];
  highlights: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-navy-light border border-navy-lightest/30 rounded-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/5">
      {/* 左侧青绿边框 */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-green/0 group-hover:bg-green rounded-l-lg transition-colors duration-200" />

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-offwhite group-hover:text-green transition-colors">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-slate whitespace-nowrap ml-4">
          {project.period}
        </span>
      </div>

      <span className="inline-block font-mono text-xs text-green/80 mb-4 bg-green/5 px-2 py-0.5 rounded">
        {project.category}
      </span>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      <ul className="space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-sm text-slate leading-relaxed flex gap-2">
            <span className="text-green mt-1.5 shrink-0">▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
