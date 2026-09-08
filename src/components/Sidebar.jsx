import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  Folder, 
  Code2, 
  Briefcase, 
  BarChart3, 
  Trophy, 
  FileText, 
  Mail, 
  SquarePen,
  Menu,
  X
} from 'lucide-react';
import { ClaudeIcon } from './ClaudeIcon';
import { portfolioData } from '../data/portfolioData';
import './Sidebar.css';

export const navItems = [
  { path: '/', label: 'About', icon: Home },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/projects', label: 'Projects', icon: Folder },
  { path: '/technical-skills', label: 'Technical Skills', icon: Code2 },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/coding-profiles', label: 'Coding Profiles', icon: BarChart3 },
  { path: '/achievements', label: 'Achievements & Certifications', icon: Trophy },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail }
];

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <div className="mobile-header-bar">
        <div className="sidebar-brand">
          <ClaudeIcon size={20} />
          <span className="sidebar-name">{portfolioData.personalInfo.name}</span>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMobile} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Main Persistent Sidebar */}
      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div>
          {/* Top Brand Section */}
          <div className="sidebar-header">
            <div className="sidebar-brand">
              <ClaudeIcon size={24} />
              <span className="sidebar-name">{portfolioData.personalInfo.name}</span>
            </div>
            <SquarePen size={18} className="sidebar-edit-icon" title="Edit Profile" />
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path || 
                (item.path === '/' && location.pathname === '');

              return (
                <div
                  key={item.path}
                  className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (item.path === '/resume') {
                      window.open('/resume_mahak.pdf', '_blank');
                    } else {
                      navigate(item.path);
                    }
                    setMobileOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      if (item.path === '/resume') {
                        window.open('/resume_mahak.pdf', '_blank');
                      } else {
                        navigate(item.path);
                      }
                      setMobileOpen(false);
                    }
                  }}
                >
                  <span className="nav-icon">
                    <IconComponent size={19} strokeWidth={1.75} />
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};
