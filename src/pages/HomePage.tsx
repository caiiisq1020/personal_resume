import ParticleBg from '../components/effects/ParticleBg';
import { Link } from 'react-router-dom';
import { personalInfo, navLinks } from '../data/content';

const terminalLines = [
  { prompt: '$ whoami', output: `${personalInfo.name} — ${personalInfo.tagline}`, delay: '200ms' },
  { prompt: '$ cat README.md', output: personalInfo.description, delay: '600ms' },
  {
    prompt: '$ ls projects/',
    output: '智慧医疗  ·  知识问答  ·  有声读物  ·  Coze智能体  ·  组卷阅卷  ·  SOC',
    delay: '1000ms',
  },
  { prompt: '$ contact --help', output: '', delay: '1400ms' },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBg />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 w-full">
        {/* 终端窗口 */}
        <div className="bg-navy/90 border border-navy-lightest/30 rounded-sm overflow-hidden shadow-2xl shadow-black/40">
          {/* 终端标题栏 */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-light/80 border-b border-navy-lightest/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green/60" />
            </div>
            <span className="ml-3 font-mono text-xs text-slate/60">zhangshaocong — bash</span>
          </div>

          {/* 终端内容 */}
          <div className="p-6 font-mono text-sm leading-relaxed animate-fade-in-up">
            {terminalLines.map((line, i) => (
              <div key={i} className="mb-4" style={{ animationDelay: line.delay }}>
                <p className="text-green">
                  <span className="text-slate/40 select-none">❯ </span>
                  {line.prompt}
                </p>
                {line.output && (
                  <p className="text-slate-light mt-1 pl-5">{line.output}</p>
                )}
                {i === terminalLines.length - 1 && (
                  <div className="mt-1 pl-5 space-y-1">
                    <p className="text-slate">
                      ✉️{' '}
                      <a href={`mailto:${personalInfo.email}`} className="text-green hover:underline">
                        {personalInfo.email}
                      </a>
                    </p>
                    <p className="text-slate">📱 {personalInfo.phone}</p>
                    <p className="text-slate">📍 {personalInfo.location}</p>
                  </div>
                )}
              </div>
            ))}

            {/* 闪烁光标 */}
            <p className="text-green mt-4">
              <span className="text-slate/40 select-none">❯ </span>
              <span className="inline-block w-2 h-4 bg-green animate-pulse align-middle" />
            </p>
          </div>
        </div>

        {/* 快速导航 */}
        <div className="mt-8 flex justify-center gap-6 font-mono text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-slate hover:text-green transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
