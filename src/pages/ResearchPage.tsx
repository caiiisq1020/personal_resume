import SectionTitle from '../components/ui/SectionTitle';
import { patent, researchProject, education } from '../data/content';

export default function ResearchPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="科研 & 教育" />

      {/* 专利 */}
      <div className="mb-8">
        <h3 className="text-sm font-mono text-green mb-4">📜 专利</h3>
        <div className="bg-navy-light border border-navy-lightest/30 rounded-sm p-6">
          <h4 className="text-offwhite font-semibold mb-3">{patent.title}</h4>
          <div className="space-y-1 font-mono text-sm text-slate">
            <p><span className="text-slate-light">{patent.type}</span> · {patent.inventor}</p>
            <p>申请号：{patent.applicationNumber}</p>
            <p>申请日期：{patent.applicationDate}</p>
          </div>
        </div>
      </div>

      {/* 科研项目 */}
      <div className="mb-12">
        <h3 className="text-sm font-mono text-green mb-4">🔬 科研项目</h3>
        <div className="bg-navy-light border border-navy-lightest/30 rounded-sm p-6">
          <h4 className="text-offwhite font-semibold mb-2">{researchProject.title}</h4>
          <p className="text-slate text-sm mb-1">{researchProject.subtitle}</p>
          <p className="text-slate text-sm">{researchProject.role}</p>
        </div>
      </div>

      {/* 教育背景 */}
      <h3 className="text-sm font-mono text-green mb-4">🎓 教育背景</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="bg-navy-light border border-navy-lightest/30 rounded-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/5"
          >
            <h4 className="text-offwhite font-semibold">{edu.school}</h4>
            <p className="text-green font-mono text-sm mt-1">{edu.degree} · {edu.major}</p>
            <div className="flex items-center gap-3 mt-2 text-sm text-slate">
              <span className="bg-green/10 text-green font-mono text-xs px-2 py-0.5 rounded">
                {edu.tag}
              </span>
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
