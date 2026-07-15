// src/pages/InternshipPage.tsx

import SectionTitle from '../components/ui/SectionTitle';
import { internship, socProjectDetail } from '../data/content';

export default function InternshipPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="实习经历" />

      {/* 公司信息 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-offwhite">{internship.company}</h3>
        <p className="font-mono text-sm text-green mt-1">
          {internship.role} · {internship.period}
        </p>
      </div>

      {/* 职责卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {internship.responsibilities.map((r) => (
          <div
            key={r.title}
            className="bg-navy-light border border-navy-lightest/30 rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/5"
          >
            <h4 className="text-offwhite font-semibold text-sm mb-2">{r.title}</h4>
            <p className="text-slate text-sm leading-relaxed">{r.detail}</p>
          </div>
        ))}
      </div>

      {/* Harness Engineering 标注 */}
      <div className="bg-green/5 border border-green/20 rounded-sm p-4 mb-16 text-sm text-slate-light">
        {internship.harnessNote}
      </div>

      {/* SOC 项目详情 */}
      <div className="border-t border-navy-lightest/20 pt-12">
        <h3 className="text-xl font-semibold text-offwhite mb-1">
          {socProjectDetail.title}
        </h3>
        <p className="font-mono text-sm text-green mb-6">
          {socProjectDetail.period} · {socProjectDetail.team}
        </p>

        {/* 代码量 */}
        <div className="flex gap-8 font-mono text-sm text-slate mb-8">
          <span>后端 {socProjectDetail.backendLines} 行</span>
          <span>前端 {socProjectDetail.frontendLines} 行</span>
          <span>合计 {socProjectDetail.totalLines} 行</span>
        </div>

        {/* 模块卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {socProjectDetail.modules.map((m) => (
            <div
              key={m.name}
              className="bg-navy-light border border-navy-lightest/30 rounded-sm p-4"
            >
              <h4 className="text-offwhite font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-green">▹</span>
                {m.name}
              </h4>
              <p className="text-slate text-xs leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* 技术覆盖表 */}
        <h4 className="text-offwhite font-semibold mb-3">技术覆盖</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-navy-lightest/30 rounded-sm">
            <thead>
              <tr className="border-b border-navy-lightest/30">
                <th className="text-left px-4 py-2 text-green font-mono text-xs">维度</th>
                <th className="text-left px-4 py-2 text-green font-mono text-xs">技术</th>
              </tr>
            </thead>
            <tbody>
              {socProjectDetail.techCoverage.map((t) => (
                <tr key={t.dimension} className="border-b border-navy-lightest/10 last:border-0">
                  <td className="px-4 py-2 text-slate-light">{t.dimension}</td>
                  <td className="px-4 py-2 text-slate font-mono text-xs">{t.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
