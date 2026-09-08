import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trophy,
  Award,
  Code2,
  Star,
  ExternalLink,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import './AchievementsPage.css';

export const AchievementsPage = () => {
  const navigate = useNavigate();

  // Generate 52 weeks x 7 days heatmap grid with realistic distribution matching screenshot
  const weeks = Array.from({ length: 52 }, (_, weekIndex) => {
    return Array.from({ length: 7 }, (_, dayIndex) => {
      // Deterministic pseudo-random heat pattern matching screenshot
      const seed = (weekIndex * 7 + dayIndex) % 13;
      let level = 0; // inactive (#1F2A35)
      if ([1, 4].includes(seed)) level = 1; // low (#164B35)
      if ([2, 8].includes(seed) && weekIndex % 2 === 0) level = 2; // medium (#218A4A)
      if ([5, 11].includes(seed) && weekIndex % 3 === 0) level = 3; // high (#31C95F)
      if (seed === 9 && weekIndex % 5 === 0) level = 4; // highest (#55E878)
      return level;
    });
  });

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="achievements-root fade-in">
      {/* TOP HEADER */}
      <header className="achievements-header">
        <div className="header-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          {/* GitHub Brand Logo */}
          <svg className="github-icon-brand" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span className="header-name-muted" onClick={() => navigate('/')}>Mahak Singh</span>
          <span className="header-page-title-active">Achievements & Certifications</span>
          <button className="projects-portfolio-btn" onClick={() => navigate('/')} title="Return to main portfolio">
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="achievements-container">


        {/* CONTRIBUTION ACTIVITY PANEL */}
        <section className="contrib-activity-panel">
          <div className="contrib-header">
            <div className="contrib-header-left">
              <svg className="contrib-gh-icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>

            <div className="contrib-settings-dropdown">
              <span>Contribution settings</span>
              <ChevronDown size={14} />
            </div>
          </div>

          {/* HEATMAP GRAPH */}
          <div className="heatmap-wrapper">
            {/* MONTHS HEADER ROW */}
            <div className="heatmap-months-row">
              {months.map((m) => (
                <span key={m} className="month-col-label">{m}</span>
              ))}
            </div>

            {/* HEATMAP BODY WITH DAY LABELS */}
            <div className="heatmap-body">
              <div className="day-labels-col">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div className="heatmap-grid">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="heatmap-week-col">
                    {week.map((level, dIdx) => (
                      <div key={dIdx} className={`cell level-${level}`} title={`Activity level ${level}`} />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* HEATMAP FOOTER ROW */}
            <div className="heatmap-footer">
              <span className="footer-tagline">Learn · Solve · Build · Grow</span>

              <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-cell level-0"></span>
                <span className="legend-cell level-1"></span>
                <span className="legend-cell level-2"></span>
                <span className="legend-cell level-3"></span>
                <span className="legend-cell level-4"></span>
                <span>More</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVITIES & ACHIEVEMENTS SECTION */}
        <section className="section-block-achievements">
          <div className="section-head-row">
            <div className="head-title-row">
              <Trophy size={22} className="head-icon icon-yellow" />
              <h2 className="section-head-title">Activities & Achievements</h2>
            </div>
            <p className="section-head-sub">
              Recognitions that motivate me to keep learning and building.
            </p>
          </div>

          <div className="cards-grid-3col">
            {/* ACHIEVEMENT CARD 1: IBM */}
            <div className="card-achievement">
              <div className="card-top-head">
                <div className="brand-logo-box">
                  <img src="/ibm.jpg" alt="IBM" className="brand-logo-img" />
                </div>
                <span className="card-year-badge">2025</span>
              </div>

              <h3 className="card-achieve-title">
                Finalist – IBM Prarambh Hack Challenge 2025
              </h3>

              <p className="card-achieve-desc">
                Top among 1,200+ teams in the IBM Prarambh Hack Challenge 2025.
              </p>

              <div className="card-bottom-pill-row">
                <span className="badge-finalist">Finalist</span>
              </div>
            </div>

            {/* ACHIEVEMENT CARD 2: 500+ DSA */}
            <div className="card-achievement">
              <div className="card-top-head">
                <div className="brand-icon-box">
                  <Code2 size={26} className="code-icon-white" />
                </div>
                <span className="card-year-badge">2025</span>
              </div>

              <h3 className="card-achieve-title">
                500+ DSA Problems Solved
              </h3>
              <p className="card-platform-sub">LeetCode · HackerRank</p>

              <p className="card-achieve-desc">
                Solved 500+ DSA problems across LeetCode and HackerRank, strengthening my problem-solving and algorithmic skills.
              </p>

              <div className="card-bottom-pill-row">
                <span className="badge-dsa-green">500+ Problems</span>
              </div>
            </div>

            {/* ACHIEVEMENT CARD 3: CONTINUOUS LEARNING */}
            <div className="card-achievement">
              <div className="card-top-head">
                <div className="brand-icon-box">
                  <Star size={26} className="star-icon-gold" fill="#FFC83D" />
                </div>
                <span className="card-year-badge">Ongoing</span>
              </div>

              <h3 className="card-achieve-title">
                Continuous Learning
              </h3>

              <p className="card-achieve-desc">
                Consistently learning and building projects to enhance my technical and problem-solving skills.
              </p>

              <div className="card-bottom-pill-row">
                <span className="badge-always-neutral">Always Learning</span>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section className="section-block-certifications">
          <div className="section-head-row">
            <div className="head-title-row">
              <Award size={22} className="head-icon icon-blue" />
              <h2 className="section-head-title">Certifications</h2>
            </div>
            <p className="section-head-sub">
              Verified credentials that validate my skills and learning.
            </p>
          </div>

          <div className="cards-grid-2col">
            {/* CERTIFICATION 1: AWS */}
            <div className="card-cert">
              <div className="cert-left-content">
                <div className="cert-logo-box">
                  <img src="/aws.jpg" alt="AWS" className="cert-logo-img" />
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">AWS Cloud Foundations</h3>
                  <p className="cert-issuer">Amazon Web Services (AWS Academy)</p>
                  <p className="cert-desc">
                    Certified in AWS Cloud Foundations, covering core cloud concepts, services, security, and best practices.
                  </p>
                </div>
              </div>

              <div className="cert-right-actions">
                <span className="card-year-badge">2025</span>
                <span className="cert-badge-verified">
                  <CheckCircle2 size={13} />
                  <span>Verified</span>
                </span>
                <button
                  className="btn-view-credential"
                  onClick={() => window.open('https://www.credly.com/badges/c85b0a7c-70a1-4942-9f1b-69a4eeacfde9', '_blank', 'noopener,noreferrer')}
                  title="View official AWS Credly Badge"
                >
                  <span>View Credential</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>

            {/* CERTIFICATION 2: SPRING */}
            <div className="card-cert">
              <div className="cert-left-content">
                <div className="cert-logo-box">
                  <img src="/springboot.png" alt="Spring Boot" className="cert-logo-img" />
                </div>

                <div className="cert-info">
                  <h3 className="cert-title">Spring 6 and Spring Boot 3</h3>
                  <p className="cert-issuer">Telusko (Udemy)</p>
                  <p className="cert-desc">
                    Certified in Spring 6 and Spring Boot 3, covering modern backend development with Spring ecosystem.
                  </p>
                </div>
              </div>

              <div className="cert-right-actions">
                <span className="card-year-badge">2025</span>
                <span className="cert-badge-verified">
                  <CheckCircle2 size={13} />
                  <span>Verified</span>
                </span>
                <button
                  className="btn-view-credential"
                  onClick={() => window.open('https://www.udemy.com/certificate/UC-313f6449-adfa-45e1-8f43-72b2c22546ae/', '_blank', 'noopener,noreferrer')}
                  title="View official Udemy Certificate Verification"
                >
                  <span>View Credential</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="achievements-footer">
          <div className="footer-divider"></div>
          <div className="footer-content-row">
            <svg className="footer-gh-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>© 2026 Mahak Singh</span>
            <span className="dot">•</span>
            <span>Keep Learning</span>
            <span className="dot">•</span>
            <span>Keep Building</span>
            <span className="dot">•</span>
            <span>Keep Growing</span>
          </div>
        </footer>
      </main>
    </div>
  );
};
