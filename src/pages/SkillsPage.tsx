// src/pages/SkillsPage.tsx

import SectionTitle from '../components/ui/SectionTitle';
import TechTag from '../components/ui/TechTag';
import { skillCategories } from '../data/content';

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="专业技能" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.name}
            className="bg-navy-light border border-navy-lightest/30 rounded-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/5"
          >
            <h3 className="text-offwhite font-semibold mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
