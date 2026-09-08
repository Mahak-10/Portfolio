import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  ShoppingCart, 
  BarChart3, 
  Package, 
  CreditCard, 
  PieChart, 
  Receipt, 
  TrendingUp, 
  Heart, 
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ProjectsPage.css';

// Card 1 — AI Health Custom Technical Visual
const AIHealthThumbnail = () => (
  <svg viewBox="0 0 460 240" className="card-media-bg">
    <defs>
      <linearGradient id="aiHealthBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#040D17" />
        <stop offset="100%" stopColor="#0B2338" />
      </linearGradient>
      <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#25B9FF" stopOpacity="0.2" />
        <stop offset="50%" stopColor="#25B9FF" stopOpacity="1" />
        <stop offset="100%" stopColor="#00E676" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    
    <rect width="460" height="240" fill="url(#aiHealthBg)" />
    <path d="M 0 60 L 460 60 M 0 120 L 460 120 M 0 180 L 460 180" stroke="#12304A" strokeWidth="1" strokeDasharray="4 4" />
    <path d="M 120 0 L 120 240 M 240 0 L 240 240 M 360 0 L 360 240" stroke="#12304A" strokeWidth="1" strokeDasharray="4 4" />
    
    <g transform="translate(24, 60)" opacity="0.85">
      <text x="0" y="0" fill="#25B9FF" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">HEALTHIER</text>
      <text x="0" y="20" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">PEOPLE</text>
      <text x="0" y="40" fill="#25B9FF" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">BRIGHTER</text>
      <text x="0" y="60" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">TOMORROWS</text>
    </g>

    <rect x="135" y="45" width="160" height="150" rx="12" fill="#071727" stroke="#1D4A6E" strokeWidth="1.5" />
    <path d="M 30 140 L 140 140 L 155 110 L 170 170 L 185 80 L 200 150 L 215 130 L 230 140 L 430 140" 
          stroke="url(#cyanLine)" strokeWidth="3" fill="none" strokeLinecap="round" />

    <g transform="translate(195, 75)" fill="none" stroke="#25B9FF" strokeWidth="2">
      <path d="M 10 10 Q 20 50 35 50 Q 50 50 60 10" />
      <circle cx="35" cy="58" r="8" fill="#25B9FF" fillOpacity="0.2" />
      <circle cx="35" cy="58" r="3" fill="#25B9FF" />
    </g>
    
    <circle cx="295" cy="65" r="3" fill="#25B9FF" />
    <circle cx="380" cy="90" r="3" fill="#25B9FF" />
    <path d="M 295 65 L 340 65 L 380 90" stroke="#1D4A6E" strokeWidth="1" fill="none" />
  </svg>
);

// Card 2 — Enterprise E-Commerce Custom Technical Visual
const ECommerceThumbnail = () => (
  <svg viewBox="0 0 460 240" className="card-media-bg">
    <defs>
      <linearGradient id="ecomBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#150E05" />
        <stop offset="100%" stopColor="#2B1A0A" />
      </linearGradient>
    </defs>
    
    <rect width="460" height="240" fill="url(#ecomBg)" />
    <path d="M 0 50 L 460 50 M 0 120 L 460 120 M 0 190 L 460 190" stroke="#3D2812" strokeWidth="1" strokeDasharray="4 4" />
    
    <g transform="translate(24, 60)" opacity="0.85">
      <text x="0" y="0" fill="#FFB84A" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">SHOP</text>
      <text x="0" y="20" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">SELL</text>
      <text x="0" y="40" fill="#FFB84A" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">GROW</text>
      <text x="0" y="60" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">TOGETHER</text>
    </g>

    <rect x="160" y="45" width="140" height="150" rx="12" fill="#1C1207" stroke="#543616" strokeWidth="1.5" />
    
    <g transform="translate(195, 85)" fill="none" stroke="#FFB84A" strokeWidth="2.2" strokeLinecap="round">
      <path d="M 0 0 L 10 0 L 22 35 L 55 35 L 65 10 L 18 10" />
      <circle cx="26" cy="46" r="4" fill="#FFB84A" />
      <circle cx="50" cy="46" r="4" fill="#FFB84A" />
      <line x1="30" y1="10" x2="26" y2="35" stroke="#FFB84A" strokeWidth="1" />
      <line x1="42" y1="10" x2="40" y2="35" stroke="#FFB84A" strokeWidth="1" />
      <line x1="54" y1="10" x2="52" y2="35" stroke="#FFB84A" strokeWidth="1" />
    </g>

    <rect x="135" y="130" width="30" height="28" rx="4" fill="#291A0C" stroke="#FFB84A" strokeWidth="1.2" />
    <path d="M 135 138 L 165 138 M 150 130 L 150 158" stroke="#FFB84A" strokeWidth="1" />

    <rect x="315" y="110" width="45" height="28" rx="4" fill="#291A0C" stroke="#FFB84A" strokeWidth="1.2" />
    <line x1="315" y1="118" x2="360" y2="118" stroke="#FFB84A" strokeWidth="2" />
    <rect x="320" y="125" width="10" height="7" rx="1" fill="#FFB84A" />
  </svg>
);

// Card 3 — Expense Tracker Custom Technical Visual
const ExpenseTrackerThumbnail = () => (
  <svg viewBox="0 0 460 240" className="card-media-bg">
    <defs>
      <linearGradient id="expenseBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#041710" />
        <stop offset="100%" stopColor="#0B3022" />
      </linearGradient>
    </defs>
    
    <rect width="460" height="240" fill="url(#expenseBg)" />
    <path d="M 0 60 L 460 60 M 0 120 L 460 120 M 0 180 L 460 180" stroke="#0E3827" strokeWidth="1" strokeDasharray="4 4" />
    
    <g transform="translate(24, 60)" opacity="0.85">
      <text x="0" y="0" fill="#2DDBA0" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">TRACK</text>
      <text x="0" y="20" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">PLAN</text>
      <text x="0" y="40" fill="#2DDBA0" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">SAVE</text>
      <text x="0" y="60" fill="#A9BCD3" fontSize="12" fontFamily="JetBrains Mono" fontWeight="600" letterSpacing="1.5">GROW</text>
    </g>

    <rect x="165" y="45" width="145" height="150" rx="12" fill="#072116" stroke="#16543A" strokeWidth="1.5" />
    
    <g transform="translate(185, 90)">
      <rect x="0" y="45" width="14" height="35" rx="2" fill="#2DDBA0" fillOpacity="0.4" />
      <rect x="22" y="30" width="14" height="50" rx="2" fill="#2DDBA0" fillOpacity="0.6" />
      <rect x="44" y="15" width="14" height="65" rx="2" fill="#2DDBA0" fillOpacity="0.8" />
      <rect x="66" y="0" width="14" height="80" rx="2" fill="#2DDBA0" />
      
      <path d="M -5 40 L 20 25 L 45 12 L 78 -10" stroke="#00E676" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="78,-16 84,-6 72,-6" fill="#00E676" />
    </g>

    <circle cx="125" cy="140" r="16" fill="none" stroke="#2DDBA0" strokeWidth="5" strokeDasharray="70 30" />

    <g transform="translate(325, 125)">
      <ellipse cx="14" cy="20" rx="14" ry="5" fill="#0B3022" stroke="#2DDBA0" strokeWidth="1.2" />
      <ellipse cx="14" cy="14" rx="14" ry="5" fill="#0B3022" stroke="#2DDBA0" strokeWidth="1.2" />
      <ellipse cx="14" cy="8" rx="14" ry="5" fill="#2DDBA0" fillOpacity="0.3" stroke="#2DDBA0" strokeWidth="1.2" />
    </g>
  </svg>
);

export const ProjectsPage = () => {
  const navigate = useNavigate();
  const { projects, personalInfo } = portfolioData;
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState({});

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavoriteIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getThumbnailComponent = (id) => {
    switch (id) {
      case 'ai-health':
        return <AIHealthThumbnail />;
      case 'ecommerce':
        return <ECommerceThumbnail />;
      case 'expense-tracker':
        return <ExpenseTrackerThumbnail />;
      default:
        return <AIHealthThumbnail />;
    }
  };

  const getHighlightIcon = (text, accent) => {
    const iconStyle = { color: accent, flexShrink: 0 };
    switch (text) {
      case 'AI Recommendations': return <Activity size={15} style={iconStyle} />;
      case 'Health Metrics': return <Heart size={15} style={iconStyle} />;
      case 'Microservices': return <Cpu size={15} style={iconStyle} />;
      case 'Async Processing': return <Zap size={15} style={iconStyle} />;
      case 'Multi-vendor Marketplace': return <ShoppingCart size={15} style={iconStyle} />;
      case 'Secure Payments': return <ShieldCheck size={15} style={iconStyle} />;
      case 'Admin Dashboard': return <BarChart3 size={15} style={iconStyle} />;
      case 'Order Tracking': return <Package size={15} style={iconStyle} />;
      case 'Expense Tracking': return <CreditCard size={15} style={iconStyle} />;
      case 'Budget Management': return <PieChart size={15} style={iconStyle} />;
      case 'Transaction Management': return <Receipt size={15} style={iconStyle} />;
      case 'Analytics': return <TrendingUp size={15} style={iconStyle} />;
      default: return <CheckCircle2 size={15} style={iconStyle} />;
    }
  };

  // If a project detail is selected, show detail view
  if (activeProject) {
    return (
      <div className="projects-root detail-mode fade-in">
        {/* NAVIGATION HEADER */}
        <header className="projects-nav-header">
          <div className="projects-nav-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 className="projects-nav-name">{personalInfo.name}</h1>
              <span className="projects-nav-role">SOFTWARE DEVELOPER</span>
            </div>
            <button 
              onClick={() => navigate('/')} 
              className="projects-portfolio-btn"
              title="Return to main portfolio"
            >
              <ArrowLeft size={17} />
              <span>Portfolio</span>
            </button>
          </div>
          <div className="projects-nav-right">
            <span className="projects-nav-link active">Projects</span>
          </div>
        </header>

        {/* PROJECT DETAIL CONTAINER */}
        <main className="project-detail-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button className="projects-portfolio-btn" onClick={() => navigate('/')} title="Return to main portfolio" style={{ marginLeft: 0 }}>
              <ArrowLeft size={17} />
              <span>Portfolio</span>
            </button>
            <button className="btn-back-projects" onClick={() => setActiveProject(null)}>
              <span>← Back to Projects</span>
            </button>
          </div>

          <div className="detail-hero-media">
            {getThumbnailComponent(activeProject.id)}
            <div className="card-play-btn" style={{ width: 76, height: 76 }}>
              <div className="play-icon-triangle" style={{ borderLeftWidth: 22, borderTopWidth: 14, borderBottomWidth: 14 }} />
            </div>
          </div>

          <div className="detail-header-group">
            <h1 className="detail-title">{activeProject.title}</h1>
            <p className="detail-subtitle">{activeProject.description}</p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="detail-actions-row">
            <button className="btn-detail-primary" style={{ backgroundColor: activeProject.accent }}>
              <Play size={18} fill="#07111B" />
              <span>Watch Demo</span>
            </button>

            {activeProject.githubUrl && (
              <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-detail-secondary">
                <Github size={18} />
                <span>GitHub ↗</span>
              </a>
            )}

            {activeProject.liveDemo && (
              <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-detail-secondary">
                <ExternalLink size={18} />
                <span>Live Demo ↗</span>
              </a>
            )}
          </div>

          {/* DETAILED CONTENT GRID */}
          <div className="detail-grid">
            <div className="detail-card-box">
              <h3 className="detail-section-title">Key Features & Engineering</h3>
              <div className="detail-feature-list">
                {activeProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="detail-feature-item">
                    <CheckCircle2 size={18} style={{ color: activeProject.accent, flexShrink: 0, marginTop: 2 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {activeProject.architecture && (
                <>
                  <h3 className="detail-section-title" style={{ marginTop: '1rem' }}>Architecture</h3>
                  <p className="detail-text">{activeProject.architecture}</p>
                </>
              )}

              {activeProject.challenges && (
                <>
                  <h3 className="detail-section-title" style={{ marginTop: '1rem' }}>Challenges & Solutions</h3>
                  <p className="detail-text">{activeProject.challenges}</p>
                </>
              )}
            </div>

            <div className="detail-card-box">
              <h3 className="detail-section-title">Tech Stack</h3>
              <div className="tech-stack-wrap">
                {activeProject.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-stack-pill" style={{ borderColor: activeProject.accent, color: activeProject.accent }}>
                    {tech}
                  </span>
                ))}
              </div>

              {activeProject.businessInsight && (
                <>
                  <h3 className="detail-section-title" style={{ marginTop: '1.5rem' }}>Business Impact</h3>
                  <p className="detail-text" style={{ fontSize: '14px' }}>{activeProject.businessInsight}</p>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="projects-root fade-in">
      {/* TOP NAVIGATION HEADER */}
      <header className="projects-nav-header">
        <div className="projects-nav-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="projects-nav-name">{personalInfo.name}</h1>
            <span className="projects-nav-role">SOFTWARE DEVELOPER</span>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="projects-portfolio-btn"
            title="Return to main portfolio"
          >
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
        </div>

        <div className="projects-nav-right">
          <span className="projects-nav-link active">Projects</span>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="projects-container">
        {/* HERO SECTION */}
        <section className="projects-hero-row">
          <div className="projects-hero-left">
            <span className="hero-eyebrow">/ FEATURED PROJECTS</span>
            <h1 className="hero-main-heading">
              Projects that solve<br />
              <span className="hero-heading-gradient">real problems.</span>
            </h1>
            <p className="hero-subtitle">Code. Build. Impact.</p>
          </div>

          {/* RIGHT DECORATIVE HERO TECHNICAL BLOCK */}
          <div className="projects-hero-right">
            <div className="hero-code-ideas">
              <span>// Ideas</span>
              <span>// Build</span>
              <span>// Solve</span>
              <span className="hero-code-accent">// Repeat</span>
            </div>

            <div className="hero-vertical-divider"></div>

            <div className="hero-solutions-block">
              <div className="hero-solutions-text">
                Turning<br />
                ideas into<br />
                real-world<br />
                solutions.
              </div>
              <div className="hero-accent-line"></div>
            </div>
          </div>
        </section>

        {/* THREE PROJECT CARDS GRID */}
        <section className="projects-cards-grid">
          {projects.map((proj, idx) => {
            const isFeatured = hoveredCardId === proj.id;
            const isDimmed = hoveredCardId && !isFeatured;
            const accentClass = proj.id === 'ai-health' ? 'accent-ai' : proj.id === 'ecommerce' ? 'accent-ecom' : 'accent-expense';
            const displayPills = proj.hoverTechStack || proj.techStack.slice(0, 5);

            return (
              <div 
                key={proj.id} 
                className={`project-card card-pos-${idx} ${accentClass} ${isFeatured ? 'is-featured' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                onMouseEnter={() => setHoveredCardId(proj.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => navigate(`/projects/${proj.id}`)}
                role="button"
                tabIndex={0}
              >
                {/* CARD MEDIA / THUMBNAIL AREA */}
                <div className="project-card-media">
                  {getThumbnailComponent(proj.id)}
                  <div className="media-dark-overlay"></div>
                  <div className="card-play-btn" title="Watch Demo">
                    <div className="play-icon-triangle"></div>
                  </div>
                  <span className="card-duration-badge">{proj.duration || "04:30"}</span>
                </div>

                {/* CARD CONTENT AREA */}
                <div className="project-card-content">
                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.shortDescription}</p>

                  {!isFeatured && (
                    <div className="project-card-bottom">
                      <div 
                        className="project-accent-line" 
                        style={{ backgroundColor: proj.accent || '#35BDF5' }}
                      ></div>
                    </div>
                  )}

                  {/* HOVERED EXPANDED REVEAL CONTENT */}
                  {isFeatured && (
                    <div className="card-expanded-reveal">
                      {/* FEATURE HIGHLIGHTS */}
                      <div className="card-highlights-grid">
                        {proj.highlights && proj.highlights.map((hText, hIdx) => (
                          <div key={hIdx} className="highlight-item">
                            {getHighlightIcon(hText, proj.accent)}
                            <span>{hText}</span>
                          </div>
                        ))}
                      </div>

                      {/* TECH STACK PILLS */}
                      <div className="card-tech-row">
                        {displayPills.map((tech, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="tech-pill" 
                            style={{ borderColor: proj.accent, color: proj.accent }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ACTION BUTTONS */}
                      <div className="card-actions-row">
                        <button 
                          className="btn-action-watch-demo"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/${proj.id}`);
                          }}
                        >
                          <Play size={13} fill="#07111B" />
                          <span>Watch Demo</span>
                        </button>

                        <button 
                          className="btn-action-view-details"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/projects/${proj.id}`);
                          }}
                        >
                          <span>View Details →</span>
                        </button>

                        <button 
                          className={`btn-action-favorite ${favoriteIds[proj.id] ? 'active' : ''}`}
                          onClick={(e) => toggleFavorite(e, proj.id)}
                          title="Favorite"
                        >
                          <Heart size={15} fill={favoriteIds[proj.id] ? '#FF815F' : 'none'} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {/* BOTTOM STATEMENT */}
        <div className="projects-bottom-statement">
          <div className="statement-line"></div>
          <span className="statement-text">Small projects can create big opportunities.</span>
          <div className="statement-line right"></div>
        </div>
      </main>
    </div>
  );
};
