import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  FileText,
  ExternalLink,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ContactPage.css';

export const ContactPage = () => {
  const navigate = useNavigate();
  const { contact, personalInfo } = portfolioData;

  return (
    <div className="contact-root fade-in">
      {/* TOP PORTFOLIO HEADER */}
      <header className="contact-header">
        <div className="contact-header-left">
          <div className="terminal-brand-box" title="Terminal Interface">
            &gt;\:&gt;
          </div>
          <div className="header-title-group">
            <h1 className="contact-header-name">{personalInfo.name}</h1>
            <span className="contact-header-sub">Software Engineer</span>
          </div>
        </div>

        <div className="contact-header-right">
          <button className="btn-portfolio-back-contact" onClick={() => navigate('/')}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN TERMINAL CONTAINER */}
      <main className="contact-container">
        <div className="terminal-window">
          {/* TERMINAL TITLE BAR */}
          <div className="terminal-titlebar">
            <div className="titlebar-left">
              <Terminal size={16} className="titlebar-icon" />
              <span className="titlebar-path">C:\Users\Mahak\contact.exe</span>
            </div>

            <div className="titlebar-controls">
              <span className="win-control-btn" title="Minimize">—</span>
              <span className="win-control-btn" title="Maximize">□</span>
              <span className="win-control-btn close" title="Close">×</span>
            </div>
          </div>

          {/* TERMINAL BODY */}
          <div className="terminal-body">
            {/* LEFT TERMINAL PANE */}
            <div className="terminal-left-pane">
              {/* BANNER HEADER */}
              <div className="terminal-banner">
                <div className="banner-sys-info">
                  Microsoft Windows [Version 11.0.26100]<br />
                  (c) 2026 Mahak Singh. All rights reserved.
                </div>

                <div className="banner-cmd-row">
                  <span className="cmd-path">C:\Users\Mahak&gt;</span>
                  <span className="cmd-exe">contact.exe</span>
                </div>

                <div className="banner-init-text">
                  Initializing contact interface...
                </div>
              </div>

              {/* CONTACT INFORMATION ROWS */}
              <div className="contact-rows-list">
                {/* Email */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <img src="/gmail.png" alt="Email" className="contact-row-img" />
                  </div>
                  <span className="row-label">Email</span>
                  <span className="row-colon">:</span>
                  <a href={`mailto:${contact.email}`} className="row-link">
                    {contact.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <img src="/phone.png" alt="Phone" className="contact-row-img" />
                  </div>
                  <span className="row-label">Phone</span>
                  <span className="row-colon">:</span>
                  <a href={`tel:${contact.phone}`} className="row-link">
                    {contact.phone}
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <img src="/linkedin.png" alt="LinkedIn" className="contact-row-img" />
                  </div>
                  <span className="row-label">LinkedIn</span>
                  <span className="row-colon">:</span>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="row-link">
                    linkedin.com/in/mahak1210 <ExternalLink size={13} style={{ marginLeft: 2 }} />
                  </a>
                </div>

                {/* GitHub */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <img src="/github.png" alt="GitHub" className="contact-row-img" />
                  </div>
                  <span className="row-label">GitHub</span>
                  <span className="row-colon">:</span>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="row-link">
                    github.com/Mahak-10 <ExternalLink size={13} style={{ marginLeft: 2 }} />
                  </a>
                </div>

                {/* Calendly */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <img src="/calendly.png" alt="Calendly" className="contact-row-img" />
                  </div>
                  <span className="row-label">Calendly</span>
                  <span className="row-colon">:</span>
                  <a href={contact.calendly || "https://calendly.com/mahaksinghjsr/30min"} target="_blank" rel="noopener noreferrer" className="row-link">
                    Schedule a meeting <ExternalLink size={13} style={{ marginLeft: 2 }} />
                  </a>
                </div>

                {/* Resume */}
                <div className="contact-row-item">
                  <span className="check-mark">[✓]</span>
                  <div className="row-icon-box">
                    <FileText size={24} style={{ color: '#4DA3FF' }} />
                  </div>
                  <span className="row-label">Resume</span>
                  <span className="row-colon">:</span>
                  <a href="/resume_mahak.pdf" target="_blank" rel="noopener noreferrer" className="row-link">
                    View Resume <ExternalLink size={13} style={{ marginLeft: 2 }} />
                  </a>
                </div>
              </div>

              {/* STATUS BLOCK */}
              <div className="contact-status-block">
                <div className="status-line">
                  STATUS: OPEN_TO_WORK
                </div>
                <div className="status-subtext">
                  Available for Software Engineering opportunities.
                </div>
              </div>

              {/* PROMPT WITH BLINKING CURSOR */}
              <div className="terminal-prompt-row">
                <span className="prompt-text">C:\Users\Mahak&gt;</span>
                <span className="blinking-cursor"></span>
              </div>
            </div>

            {/* RIGHT TERMINAL QUOTE PANE */}
            <div className="terminal-right-pane">
              <p className="terminal-quote-text">
                Let's build<br />
                something<br />
                meaningful.
              </p>
              <div className="quote-author-block">
                <span className="quote-dash">—</span>
                <span className="quote-author-name">Mahak Singh</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
