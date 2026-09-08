import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import './TopHeader.css';

export const TopHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="top-header">
      <div className="top-header-right">
        <button
          className="header-resume-btn"
          onClick={() => window.open('/resume_mahak.pdf', '_blank')}
          title="View Resume"
          aria-label="View Resume"
        >
          <FileText size={20} className="header-resume-icon" />
          <span>Resume</span>
        </button>
        <div className="header-user-avatar" title="Mahak Singh">
          M
        </div>
      </div>
    </header>
  );
};
