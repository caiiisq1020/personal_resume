import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ResearchPage from './pages/ResearchPage';
import SkillsPage from './pages/SkillsPage';
import InternshipPage from './pages/InternshipPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
