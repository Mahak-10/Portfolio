import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CodingProfilesPage } from './pages/CodingProfilesPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  const location = useLocation();
  const isStandalonePage = ['/projects', '/education', '/technical-skills', '/experience', '/coding-profiles', '/achievements', '/contact', '/resume'].some(path => location.pathname.startsWith('/projects') || location.pathname === path);

  if (isStandalonePage) {
    return (
      <div className="app-container full-screen-standalone">
        <ScrollToTop />
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/technical-skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/coding-profiles" element={<CodingProfilesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="app-container">
      <ScrollToTop />
      {/* Persistent Left Sidebar */}
      <Sidebar />

      {/* Main Right Content Area */}
      <div className="main-wrapper">
        <TopHeader />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            {/* Catch-all redirect to About */}
            <Route path="*" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
