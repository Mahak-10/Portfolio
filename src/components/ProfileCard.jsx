import React, { useState } from 'react';
import { MapPin, Phone, Mail, GraduationCap, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ProfileCard.css';

export const ProfileCard = () => {
  const { personalInfo, aboutHighlightedSkills, contact } = portfolioData;
  const [imgError, setImgError] = useState(false);

  // Class helper for individual skill pill subtle palette variations
  const getPillClass = (skillName) => {
    const name = skillName.toLowerCase();
    if (name.includes('java')) return 'skill-pill-java';
    if (name.includes('dsa')) return 'skill-pill-dsa';
    if (name.includes('oops')) return 'skill-pill-oops';
    if (name.includes('spring')) return 'skill-pill-springboot';
    if (name.includes('sql')) return 'skill-pill-mysql';
    return '';
  };

  return (
    <div className="profile-card-inner">
      {/* Left Side: Photo & Contact Info */}
      <div className="profile-card-left">
        <div className="profile-avatar-wrapper">
          {!imgError ? (
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="profile-avatar-img"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="profile-avatar-fallback" title={personalInfo.name}>
              MS
            </div>
          )}
        </div>

        <div className="profile-contact-list">
          <div className="profile-contact-item">
            <MapPin size={15} className="profile-contact-icon" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="profile-contact-item">
            <Phone size={15} className="profile-contact-icon" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="profile-contact-item">
            <Mail size={15} className="profile-contact-icon" />
            <span>{personalInfo.email}</span>
          </div>
        </div>
      </div>

      {/* Right Side: Name, Bio, Skills & Social Icons */}
      <div className="profile-card-right">
        <span className="profile-role-label">{personalInfo.role}</span>
        <h1 className="profile-name-title">{personalInfo.name}</h1>

        <div className="profile-education-badge">
          <span className="profile-badge-item">
            <GraduationCap size={16} style={{ color: 'var(--accent-orange)' }} />
            <span>{personalInfo.education}</span>
          </span>
          <span className="profile-badge-divider">|</span>
          <span className="profile-badge-item">
            <User size={15} style={{ color: 'var(--accent-orange)' }} />
            <span>{personalInfo.experienceStatus}</span>
          </span>
        </div>

        <p className="profile-summary-text">
          {personalInfo.summary}
        </p>

        {/* Skill Pills Section */}
        <div className="profile-skills-row">
          {aboutHighlightedSkills.map((skill) => (
            <span
              key={skill.name}
              className={`skill-pill ${getPillClass(skill.name)}`}
            >
              {skill.name}
            </span>
          ))}
        </div>

        {/* Social Icons using user-provided github.png and linkedin.png */}
        <div className="profile-social-row">
          <a
            href={contact?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-social-link social-github"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <img src="/images/github.png" alt="GitHub" className="social-icon-img" />
          </a>
          <a
            href={contact?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-social-link social-linkedin"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon-img" />
          </a>
        </div>
      </div>
    </div>
  );
};
