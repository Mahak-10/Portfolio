import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronDown,
  GitBranch,
  Users,
  Calendar,
  BriefcaseBusiness,
  Building2,
  FileText,
  Layers,
  Copy,
  Code2,
  Check,
  ExternalLink
} from 'lucide-react';
import './ExperiencePage.css';

export const ExperiencePage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText('12b2c2f');
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="github-exp-root fade-in">
      {/* TOP HEADER */}
      <header className="github-exp-header">
        <div className="header-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.2rem' }}>
          {/* GitHub Icon */}
          <svg className="github-brand-icon" viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>

          <span className="header-name">Mahak Singh</span>
          <button className="projects-portfolio-btn" onClick={() => navigate('/')} title="Return to main portfolio">
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="github-exp-container">
        {/* PAGE TITLE & FILTER CONTROLS */}
        <div className="exp-heading-row">
          <div className="exp-title-group">
            <h1 className="exp-main-title">Experience</h1>
            <span className="exp-badge">1 experience</span>
          </div>

          {/* FILTER CONTROLS */}
          <div className="exp-filter-controls">
            <div className="filter-dropdown left-dropdown">
              <GitBranch size={14} className="control-icon" />
              <span>main</span>
              <ChevronDown size={14} className="control-chevron" />
            </div>

            <div className="filter-dropdown">
              <Users size={14} className="control-icon" />
              <span>All users</span>
              <ChevronDown size={14} className="control-chevron" />
            </div>

            <div className="filter-dropdown">
              <Calendar size={14} className="control-icon" />
              <span>All time</span>
              <ChevronDown size={14} className="control-chevron" />
            </div>
          </div>
        </div>

        <p className="exp-subtitle">
          A timeline of my professional journey, just like commits in a repository.
        </p>

        {/* TIMELINE SECTION */}
        <div className="timeline-wrapper">
          {/* VERTICAL TIMELINE LINE */}
          <div className="timeline-line"></div>

          {/* TOP TIMELINE ITEM */}
          <div className="timeline-item">
            <div className="timeline-node top-node"></div>

            <div className="timeline-content">
              {/* MONTH LABEL */}
              <h2 className="month-label">Commits on Oct 2025</h2>

              {/* EXPERIENCE CARD */}
              <div className="experience-card">
                {/* CARD HEADER */}
                <div className="card-header-top">
                  <div className="card-title-block">
                    <h3 className="card-role-title">
                      Software Developer Intern — Senraa / Evaao Group
                    </h3>
                    <p className="card-desc">
                      Worked on an AR-based virtual try-on product using computer vision and deep learning models.
                    </p>
                    <div className="card-author-subrow">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Mahak Singh</span>
                    </div>
                  </div>

                  <div className="card-header-actions">
                    <span className="badge-verified">Verified</span>
                    <span className="commit-hash">12b2c2f</span>
                    <button className="card-action-btn" onClick={handleCopyHash} title="Copy hash">
                      {copied ? <Check size={14} style={{ color: '#00E676' }} /> : <Copy size={14} />}
                    </button>
                    <button className="card-action-btn" title="View Code">
                      <Code2 size={14} />
                    </button>
                  </div>
                </div>

                {/* 3-COLUMN METADATA ROW WITH CLICKABLE COMPANY WEBSITE REDIRECT */}
                <div className="meta-grid">
                  <div className="meta-col">
                    <BriefcaseBusiness size={22} strokeWidth={2.5} className="meta-icon icon-role" />
                    <div className="meta-text-block">
                      <span className="meta-label">Role</span>
                      <span className="meta-val">Software Developer Intern</span>
                    </div>
                  </div>

                  <div className="meta-col">
                    <Building2 size={22} strokeWidth={2.5} className="meta-icon icon-company" />
                    <div className="meta-text-block">
                      <span className="meta-label">Company</span>
                      <a
                        href="https://senraa.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-meta-link"
                        title="Visit Senraa / Evaao Group website"
                      >
                        <span>Senraa / Evaao Group</span>
                        <ExternalLink size={13} className="meta-link-icon" />
                      </a>
                    </div>
                  </div>

                  <div className="meta-col">
                    <Calendar size={22} strokeWidth={2.5} className="meta-icon icon-duration" />
                    <div className="meta-text-block">
                      <span className="meta-label">Duration</span>
                      <span className="meta-val">Oct 2025 – Apr 2026 (6 months)</span>
                    </div>
                  </div>
                </div>

                {/* KEY CONTRIBUTIONS */}
                <div className="section-block">
                  <h4 className="section-header font-sans">
                    <FileText size={20} strokeWidth={2.5} className="section-icon icon-contributions" />
                    <span>Key Contributions</span>
                  </h4>

                  <ul className="contributions-list">
                    <li>
                      Integrated computer vision tools into an AR-based virtual try-on product, covering image overlay, silhouette detection, and live camera feed processing.
                    </li>
                    <li>
                      Built a weighted image scoring system (silhouette framing, brightness, sharpness, posture) that scores input quality out of 100 and rejects images scoring below 70, improving pipeline reliability.
                    </li>
                    <li>
                      Evaluated CatVTON on 100+ images across different silhouettes for garment fitting quality, and used IDM-VTON for mask generation; separately tested the PARE model on 10 videos for 3D human mesh generation as a potential improvement to fitting accuracy.
                    </li>
                  </ul>
                </div>

                {/* TECHNOLOGIES */}
                <div className="section-block">
                  <h4 className="section-header font-sans">
                    <Layers size={20} strokeWidth={2.5} className="section-icon icon-tech" />
                    <span>Technologies</span>
                  </h4>

                  <div className="tech-pills-row">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">OpenCV</span>
                    <span className="tech-pill">MediaPipe</span>
                    <span className="tech-pill">Computer Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM TIMELINE ITEM */}
          <div className="timeline-item bottom-item">
            <div className="timeline-node bottom-node"></div>
            <div className="timeline-content bottom-content">
              <div className="timeline-end-row">
                <GitBranch size={16} className="end-branch-icon" />
                <span className="end-log-title">End of experience log</span>
              </div>
              <p className="end-more-text">... more to come</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
