import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ResumePage.css';

export const ResumePage = () => {
  const navigate = useNavigate();
  const { personalInfo } = portfolioData;

  const pdfPath = "/resume_mahak.pdf";
  const downloadFileName = "Mahak_Singh_Resume.pdf";

  return (
    <div className="resume-root fade-in">
      {/* TOP PORTFOLIO HEADER */}
      <header className="resume-header">
        <div className="resume-header-left">
          <div className="resume-brand-icon" title="Resume Document">
            <FileText size={20} />
          </div>
          <div className="resume-header-title-group">
            <h1 className="resume-header-name">{personalInfo.name}</h1>
            <span className="resume-header-sub">Software Engineer</span>
          </div>
        </div>

        <div className="resume-header-right">
          <button className="btn-portfolio-back-resume" onClick={() => navigate('/')}>
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="resume-container">
        {/* TOP RIGHT PROMINENT ACTIONS BAR */}
        <div className="resume-actions-bar" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-portfolio-back-resume"
            style={{ color: '#F3F0E8', padding: '10px 18px' }}
            title="Open Resume PDF in New Window"
          >
            <ExternalLink size={17} />
            <span>Open in New Window</span>
          </a>
          <a
            href={pdfPath}
            download={downloadFileName}
            className="btn-download-resume"
            title="Download PDF Resume"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* EMBEDDED PDF VIEWER CARD */}
        <div className="resume-viewer-card">
          <object
            data={pdfPath}
            type="application/pdf"
            className="pdf-iframe"
          >
            <iframe
              src={pdfPath}
              title="Mahak Singh Resume"
              className="pdf-iframe"
            >
              <div className="pdf-fallback">
                <FileText size={48} />
                <p>Your browser does not support inline PDF viewing.</p>
                <a href={pdfPath} download={downloadFileName} className="btn-download-resume">
                  <Download size={18} />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </main>
    </div>
  );
};
