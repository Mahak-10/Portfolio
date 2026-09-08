import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  GraduationCap, 
  Folder, 
  Code2, 
  Briefcase, 
  BarChart3, 
  Trophy, 
  FileText, 
  Mail 
} from 'lucide-react';
import './ExploreMoreSection.css';

const exploreCards = [
  { id: 'about', title: 'About', path: '/', icon: User },
  { id: 'education', title: 'Education', path: '/education', icon: GraduationCap },
  { id: 'projects', title: 'Projects', path: '/projects', icon: Folder },
  { id: 'skills', title: 'Technical Skills', path: '/technical-skills', icon: Code2 },
  { id: 'experience', title: 'Experience', path: '/experience', icon: Briefcase },
  { id: 'profiles', title: 'Coding Profiles', path: '/coding-profiles', icon: BarChart3 },
  { id: 'achievements', title: 'Achievements & Certifications', path: '/achievements', icon: Trophy },
  { id: 'resume', title: 'Resume', path: '/resume', icon: FileText },
  { id: 'contact', title: 'Contact', path: '/contact', icon: Mail }
];

export const ExploreMoreSection = ({ sectionRef }) => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    if (path === '/resume') {
      window.open('/resume_mahak.pdf', '_blank');
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="explore-more-container fade-in">
      <div className="explore-more-header">
        <h2 className="explore-more-title">Explore more</h2>
        <div className="explore-more-accent-line"></div>
      </div>

      <div className="explore-more-grid">
        {exploreCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="explore-card"
              onClick={() => handleCardClick(card.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(card.path);
                }
              }}
            >
              <div className="explore-card-icon">
                <IconComponent size={20} strokeWidth={1.8} />
              </div>
              <span className="explore-card-title">{card.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
