// src/components/layout/Navbar.tsx

import { Link, useLocation } from 'react-router-dom';
import { navLinks, personalInfo } from '../../data/content';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-sm border-b border-navy-lightest/20">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-offwhite font-bold text-lg hover:text-green transition-colors"
        >
          {personalInfo.name}
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-wide transition-colors ${
                pathname === link.path
                  ? 'text-green'
                  : 'text-slate hover:text-green'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* PDF 下载按钮 */}
          <a
            href="/resume/张少聪-秋招简历.pdf"
            download
            className="ml-2 font-mono text-xs text-green border border-green rounded px-3 py-1.5 hover:bg-green/10 transition-colors"
          >
            📥 PDF
          </a>
        </div>
      </div>
    </nav>
  );
}
