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
  <img 
    src="/images/fitsphere-thumbnail.png" 
    alt="FitSphere — Health & Fitness AI" 
    className="card-media-bg"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
);

// Card 2 — Enterprise E-Commerce Custom Technical Visual
const ECommerceThumbnail = () => (
  <img 
    src="/images/shopverse-thumbnail.png" 
    alt="ShopVerse — Enterprise E-Commerce" 
    className="card-media-bg"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
);

// Card 3 — Expense Tracker Custom Technical Visual
const ExpenseTrackerThumbnail = () => (
  <img 
    src="/images/expense-thumbnail.png" 
    alt="ExpenseFlow — Smart Expense Tracker" 
    className="card-media-bg"
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
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
            <button 
              className="btn-detail-primary" 
              style={{ backgroundColor: activeProject.accent }}
              onClick={() => {
                const targetUrl = activeProject.liveDemo || activeProject.videoSrc;
                if (targetUrl) window.open(targetUrl, '_blank');
              }}
            >
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
                  <div 
                    className="card-play-btn" 
                    title="Watch Demo"
                    onClick={(e) => {
                      e.stopPropagation();
                      const targetUrl = proj.liveDemo || proj.videoSrc;
                      if (targetUrl) {
                        window.open(targetUrl, '_blank');
                      } else {
                        navigate(`/projects/${proj.id}`);
                      }
                    }}
                  >
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
                            const targetUrl = proj.liveDemo || proj.videoSrc;
                            if (targetUrl) {
                              window.open(targetUrl, '_blank');
                            } else {
                              navigate(`/projects/${proj.id}`);
                            }
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
