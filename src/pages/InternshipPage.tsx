// src/pages/InternshipPage.tsx

import SectionTitle from '../components/ui/SectionTitle';
import { internship } from '../data/content';

export default function InternshipPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle title="实习经历" />

      {/* 公司 & 部门信息 */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-offwhite">{internship.company}</h3>
        <p className="text-green font-mono text-sm mt-1">
          {internship.department} · {internship.role}
        </p>
        <p className="text-slate font-mono text-xs mt-0.5">
          {internship.period} · {internship.team} · {internship.totalLines} 行代码
        </p>
      </div>

      {/* 项目背景 */}
      <p className="text-slate text-sm leading-relaxed mb-10 border-l-2 border-green/30 pl-4">
        {internship.background}
      </p>

      {/* 个人职责卡片 */}
      <h3 className="text-sm font-mono text-green mb-4">个人职责与产出</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {internship.responsibilities.map((r) => (
          <div
            key={r.title}
            className="bg-navy-light border border-navy-lightest/30 rounded-sm p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/5"
          >
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-offwhite font-semibold text-sm">{r.title}</h4>
              <span className="font-mono text-[10px] text-green/70 bg-green/5 px-1.5 py-0.5 rounded-sm">
                {r.tag}
              </span>
            </div>
            <p className="text-slate text-sm leading-relaxed">{r.detail}</p>
          </div>
        ))}
      </div>

      {/* Harness Engineering 工程实践 */}
      <div className="border-t border-navy-lightest/20 pt-12 mb-12">
        <h3 className="text-xl font-semibold text-offwhite mb-2">{internship.harnessEngineering.title}</h3>
        <p className="text-slate text-sm mb-6">{internship.harnessEngineering.description}</p>

        <div className="space-y-4">
          {internship.harnessEngineering.items.map((item) => (
            <div
              key={item.title}
              className="bg-navy-light border border-green/10 rounded-sm p-5"
            >
              <h4 className="text-offwhite font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-green shrink-0">▹</span>
                {item.title}
              </h4>
              <p className="text-slate text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 代码量统计 */}
      <div className="border-t border-navy-lightest/20 pt-12 mb-12">
        <h3 className="text-sm font-mono text-green mb-4">代码量统计</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-navy-lightest/30 rounded-sm">
            <thead>
              <tr className="border-b border-navy-lightest/30">
                <th className="text-left px-4 py-2 text-green font-mono text-xs">功能区域</th>
                <th className="text-center px-4 py-2 text-green font-mono text-xs">后端</th>
                <th className="text-center px-4 py-2 text-green font-mono text-xs">前端</th>
                <th className="text-center px-4 py-2 text-green font-mono text-xs">合计</th>
              </tr>
            </thead>
            <tbody>
              {internship.modules.map((m, i) => (
                <tr
                  key={m.name}
                  className={`${i === internship.modules.length - 1 ? 'font-semibold border-t border-green/30' : 'border-b border-navy-lightest/10'}`}
                >
                  <td className={`px-4 py-2 ${i === internship.modules.length - 1 ? 'text-offwhite' : 'text-slate-light'}`}>
                    {m.name}
                  </td>
                  <td className="px-4 py-2 text-slate font-mono text-xs text-center">{m.backend}</td>
                  <td className="px-4 py-2 text-slate font-mono text-xs text-center">{m.frontend}</td>
                  <td className="px-4 py-2 text-green font-mono text-xs text-center">{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 技术栈覆盖 */}
      <div className="border-t border-navy-lightest/20 pt-12 mb-12">
        <h3 className="text-sm font-mono text-green mb-4">技术栈覆盖</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-navy-lightest/30 rounded-sm">
            <thead>
              <tr className="border-b border-navy-lightest/30">
                <th className="text-left px-4 py-2 text-green font-mono text-xs w-24">维度</th>
                <th className="text-left px-4 py-2 text-green font-mono text-xs">技术</th>
              </tr>
            </thead>
            <tbody>
              {internship.techCoverage.map((t) => (
                <tr key={t.dimension} className="border-b border-navy-lightest/10 last:border-0">
                  <td className="px-4 py-2 text-slate-light align-top">{t.dimension}</td>
                  <td className="px-4 py-2 text-slate font-mono text-xs leading-relaxed">{t.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 关键成长 */}
      <div className="border-t border-navy-lightest/20 pt-12">
        <h3 className="text-sm font-mono text-green mb-4">关键成长</h3>
        <div className="space-y-3">
          {internship.learnings.map((l, i) => (
            <div key={i} className="flex gap-3 text-sm text-slate">
              <span className="text-green font-mono shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
