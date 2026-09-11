import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FolderKanban,
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Search, 
  Target, 
  Lightbulb, 
  Settings, 
  Network, 
  Workflow, 
  TrendingUp, 
  CheckCircle2, 
  Github, 
  ExternalLink, 
  User, 
  Database, 
  Brain, 
  FileText, 
  BarChart3, 
  ArrowRight,
  ArrowDown,
  Layers, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  ShoppingCart, 
  CreditCard, 
  PieChart, 
  Receipt, 
  Zap,
  Bell,
  LayoutDashboard,
  MonitorSmartphone,
  Store,
  Truck,
  Mail,
  Lock,
  Filter,
  Info,
  Monitor,
  Server,
  Share2,
  Wrench,
  Sparkles,
  Layout,
  DollarSign,
  Box,
  Send,
  GitBranch,
  BarChart,
  Code,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './ProjectDetailsPage.css';

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects, personalInfo } = portfolioData;

  const project = projects.find(p => p.id === projectId) || projects[0];

  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [screenshotFilter, setScreenshotFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getLoomEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
    return match ? `https://www.loom.com/embed/${match[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true` : null;
  };

  const loomEmbedUrl = getLoomEmbedUrl(project.liveDemo || project.videoSrc);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleWatchDemo = () => {
    if (loomEmbedUrl) {
      setIsVideoModalOpen(true);
    } else if (project.liveDemo || project.videoSrc) {
      window.open(project.liveDemo || project.videoSrc, '_blank');
    }
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds <= 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const accentColor = project.accent || '#35BDF5';
  const secondaryAccent = project.accentSecondary || project.accent || '#54E0C1';

  // Filtered screenshots list
  const allScreenshots = project.screenshots || [];
  const filteredScreenshots = allScreenshots.filter(item => {
    if (screenshotFilter === 'All') return true;
    if (item.category === screenshotFilter) return true;
    if (item.categories && item.categories.includes(screenshotFilter)) return true;
    return false;
  });

  // Lightbox keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredScreenshots.length - 1));
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev < filteredScreenshots.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredScreenshots.length]);

  // Helper icon renderer for workflow steps with distinct vibrant colors & larger 28px size
  const getStepIcon = (iconName, sIdx) => {
    const stepColors = ['#38BDF8', '#10B981', '#F59E0B', '#EC4899', '#A855F7', '#00E5FF'];
    const iconColor = stepColors[sIdx % stepColors.length];
    
    switch (iconName) {
      case 'user': return <User size={28} color={iconColor} />;
      case 'database': return <Database size={28} color={iconColor} />;
      case 'brain': return <Brain size={28} color={iconColor} />;
      case 'file': return <FileText size={28} color={iconColor} />;
      case 'chart': return <BarChart3 size={28} color={iconColor} />;
      default: return <Workflow size={28} color={iconColor} />;
    }
  };

  // Helper icon renderer for Features list entries with larger 28px size & rich colors
  const getFeatureIcon = (iconName, fallbackColor) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={28} color="#10B981" />;
      case 'Activity': return <Activity size={28} color="#38BDF8" />;
      case 'Brain': return <Brain size={28} color="#A855F7" />;
      case 'Target': return <Target size={28} color="#EF4444" />;
      case 'BarChart3': return <BarChart3 size={28} color="#10B981" />;
      case 'Bell': return <Bell size={28} color="#F59E0B" />;
      case 'LayoutDashboard': return <LayoutDashboard size={28} color="#6366F1" />;
      case 'MonitorSmartphone': return <MonitorSmartphone size={28} color="#00E5FF" />;
      case 'Store': return <Store size={28} color="#FF6B00" />;
      case 'Search': return <Search size={28} color="#38BDF8" />;
      case 'ShoppingCart': return <ShoppingCart size={28} color="#FF6B00" />;
      case 'CreditCard': return <CreditCard size={28} color="#635BFF" />;
      case 'Truck': return <Truck size={28} color="#10B981" />;
      case 'Mail': return <Mail size={28} color="#EC4899" />;
      case 'Receipt': return <Receipt size={28} color="#F59E0B" />;
      case 'PieChart': return <PieChart size={28} color="#A855F7" />;
      case 'Filter': return <Filter size={28} color="#38BDF8" />;
      case 'Lock': return <Lock size={28} color="#F59E0B" />;
      case 'Zap': return <Zap size={28} color="#F59E0B" />;
      case 'Share2': return <Share2 size={28} color="#FF6B00" />;
      case 'Database': return <Database size={28} color="#00E5FF" />;
      case 'Cpu': return <Cpu size={28} color="#38BDF8" />;
      case 'Code': return <Code size={28} color="#EC4899" />;
      default: return <Activity size={28} color={fallbackColor || "#38BDF8"} />;
    }
  };

  // Category icon helper for Tech Stack with distinct category colors & larger 28px size
  const getTechCategoryIcon = (iconName, fallbackColor) => {
    switch (iconName) {
      case 'Monitor': return <Monitor size={28} color="#00E5FF" />;
      case 'Server': return <Server size={28} color="#F59E0B" />;
      case 'Database': return <Database size={28} color="#10B981" />;
      case 'Share2': return <Share2 size={28} color="#FF6B00" />;
      case 'ShieldCheck': return <ShieldCheck size={28} color="#EC4899" />;
      case 'Cpu': return <Cpu size={28} color="#38BDF8" />;
      case 'Brain': return <Brain size={28} color="#A855F7" />;
      case 'Wrench': return <Wrench size={28} color="#F59E0B" />;
      case 'CreditCard': return <CreditCard size={28} color="#635BFF" />;
      default: return <Layers size={28} color={fallbackColor || "#38BDF8"} />;
    }
  };

  // Tech item tile icon helper with larger 32px size
  const getTechTileIcon = (name, color) => {
    switch (name) {
      case 'React':
      case 'React 18': return <Cpu size={32} color="#61DAFB" />;
      case 'Java':
      case 'Java 17': return <Code size={32} color="#F89820" />;
      case 'Spring Boot':
      case 'Spring Boot 3':
      case 'Spring Boot 3.x': return <Zap size={32} color="#6DB33F" />;
      case 'PostgreSQL':
      case 'PostgreSQL 15': return <Database size={32} color="#336791" />;
      case 'MySQL': return <Database size={32} color="#00758F" />;
      case 'MongoDB':
      case 'MongoDB 6': return <Database size={32} color="#47A248" />;
      case 'RabbitMQ': return <Share2 size={32} color="#FF6600" />;
      case 'Keycloak':
      case 'Keycloak OAuth2': return <ShieldCheck size={32} color="#0088CC" />;
      case 'OAuth2 / JWT':
      case 'OAuth2 PKCE':
      case 'JWT': return <Lock size={32} color="#F7B928" />;
      case 'Eureka':
      case 'Eureka Server':
      case 'Spring Cloud Gateway':
      case 'Config Server': return <Network size={32} color="#38BDF8" />;
      case 'Gemini API':
      case 'Google Gemini API': return <Sparkles size={32} color="#8E75FF" />;
      case 'Stripe API': return <CreditCard size={32} color="#635BFF" />;
      case 'PayPal SDK': return <DollarSign size={32} color="#003087" />;
      case 'Spring Security': return <ShieldCheck size={32} color="#6DB33F" />;
      case 'Hibernate / JPA':
      case 'Spring Data JPA': return <Database size={32} color="#59666C" />;
      case 'Chart.js': return <BarChart3 size={32} color="#FF6384" />;
      case 'Maven': return <Box size={32} color="#C71A36" />;
      case 'Postman': return <Send size={32} color="#FF6C37" />;
      case 'Git': return <GitBranch size={32} color="#F05032" />;
      case 'JavaScript': return <Code size={32} color="#F7DF1E" />;
      case 'CSS Modules': return <Layout size={32} color="#264DE4" />;
      default: return <Code size={32} color={color || "#38BDF8"} />;
    }
  };

  // Color palette helper for hero tech stack pills (single unified color theme)
  const getTagStyle = () => {
    return {
      bg: `${accentColor}1F`,       // ~12% opacity background
      border: `${accentColor}66`,   // ~40% opacity border
      text: accentColor,            // 100% solid vivid text
      glow: `${accentColor}2E`      // ~18% opacity glow box shadow
    };
  };

  // Visual Flowchart Diagram Renderer (Flowchart Shapes & Directional Connectors)
  const renderSystemDiagram = () => {
    if (project.id === 'ai-health') {
      return (
        <div className="fc-flowchart-card">
          <div className="arch-card-header">
            <div className="arch-header-title-wrap">
              <Workflow size={20} color={accentColor} />
              <h3 className="arch-header-title">System Control Flowchart</h3>
            </div>
            <div className="arch-live-badge">
              <span className="arch-live-dot"></span>
              <span>LIVE PIPELINE</span>
            </div>
          </div>

          <div className="fc-canvas">
            {/* 1. START NODE (PILL) */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#BAE6FD', borderColor: accentColor, color: '#0369A1' }}>
              <User size={16} />
              <span>[START] React 18 Dashboard UI (Port 3000)</span>
            </div>

            {/* ARROW 1 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">OAuth2 Authorization Code + PKCE</span>
              <ArrowDown size={14} />
            </div>

            {/* 2. KEYCLOAK IAM SERVICE */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#BAE6FD', borderColor: '#0284C7' }}>
              <div className="fc-shape-left">
                <ShieldCheck size={18} color="#0284C7" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Keycloak Identity & Access Manager</span>
                  <span className="fc-shape-sub">Issues Realm Bearer JWT tokens & user roles</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#0369A1', borderColor: '#0284C777', backgroundColor: '#7DD3FC' }}>PORT 8181</span>
            </div>

            {/* ARROW 2 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">HTTP Request + Bearer Token</span>
              <ArrowDown size={14} />
            </div>

            {/* 3. EUREKA NAMING SERVER */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#E9D5FF', borderColor: '#9333EA' }}>
              <div className="fc-shape-left">
                <Server size={18} color="#9333EA" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Netflix Eureka Naming Server</span>
                  <span className="fc-shape-sub">Service Registry & Dynamic IP Resolution</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#6B21A8', borderColor: '#9333EA77', backgroundColor: '#D8B4FE' }}>PORT 8761</span>
            </div>

            {/* ARROW 3 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Discovered Route Target</span>
              <ArrowDown size={14} />
            </div>

            {/* 4. SPRING CLOUD GATEWAY */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#BAE6FD', borderColor: '#0284C7' }}>
              <div className="fc-shape-left">
                <Network size={18} color="#0284C7" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Spring Cloud API Gateway</span>
                  <span className="fc-shape-sub">Validates JWT Signature, Rate Limiter & Router</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#0369A1', borderColor: '#0284C777', backgroundColor: '#7DD3FC' }}>PORT 8080</span>
            </div>

            {/* ARROW 4 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Authenticated Payload</span>
              <ArrowDown size={14} />
            </div>

            {/* 5. USER SERVICE & ACTIVITY SERVICE */}
            <div className="fc-branch-grid">
              <div className="fc-branch-card" style={{ backgroundColor: '#C7D2FE', borderColor: '#4F46E5' }}>
                <User size={18} color="#4F46E5" />
                <span className="fc-branch-title">User Service</span>
                <span className="fc-branch-sub">Port 8081 • Profile & Goals</span>
              </div>

              <div className="fc-branch-card" style={{ backgroundColor: '#A7F3D0', borderColor: '#059669' }}>
                <Zap size={18} color="#059669" />
                <span className="fc-branch-title">Activity Service</span>
                <span className="fc-branch-sub">Port 8082 • Workout Logger</span>
              </div>
            </div>

            {/* ARROW 5 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Parallel Write & Publish (&lt;100ms)</span>
              <ArrowDown size={14} />
            </div>

            {/* 6. MONGODB & RABBITMQ */}
            <div className="fc-shape fc-shape-cylinder" style={{ backgroundColor: '#FFD8A8', borderColor: '#EA580C' }}>
              <div className="fc-shape-left">
                <Share2 size={18} color="#EA580C" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">RabbitMQ Exchange & MongoDB Activity DB</span>
                  <span className="fc-shape-sub">Persists log & pushes activity.tracking event to queue</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#C2410C', borderColor: '#EA580C77', backgroundColor: '#FDBA74' }}>PORT 5672 / 27017</span>
            </div>

            {/* ARROW 6 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Async Event Consumer Listener</span>
              <ArrowDown size={14} />
            </div>

            {/* 7. AI SERVICE */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#E9D5FF', borderColor: '#9333EA' }}>
              <div className="fc-shape-left">
                <Brain size={18} color="#9333EA" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">AI Recommendation Microservice</span>
                  <span className="fc-shape-sub">Consumes queue message & builds dynamic prompt</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#6B21A8', borderColor: '#9333EA77', backgroundColor: '#D8B4FE' }}>PORT 8083</span>
            </div>

            {/* ARROW 7 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Execute LLM Inference</span>
              <ArrowDown size={14} />
            </div>

            {/* 8. GEMINI AI INFERENCE ENGINE */}
            <div className="fc-shape fc-shape-diamond" style={{ backgroundColor: '#FDE68A', borderColor: '#D97706' }}>
              <div className="fc-shape-left">
                <Sparkles size={18} color="#D97706" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Google Gemini AI Inference Engine</span>
                  <span className="fc-shape-sub">Generates personalized workout recovery & macro-nutrition insights</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#B45309', borderColor: '#D9770677', backgroundColor: '#FCD34D' }}>AI ENGINE</span>
            </div>

            {/* ARROW 8 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Save Structured JSON Output</span>
              <ArrowDown size={14} />
            </div>

            {/* 9. MONGODB RECS STORE */}
            <div className="fc-shape fc-shape-cylinder" style={{ backgroundColor: '#A7F3D0', borderColor: '#059669' }}>
              <div className="fc-shape-left">
                <Database size={18} color="#059669" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">MongoDB Recommendation Store</span>
                  <span className="fc-shape-sub">Stores personalized nutrition & recovery advice</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#047857', borderColor: '#05966977', backgroundColor: '#6EE7B7' }}>PERSISTENCE</span>
            </div>

            {/* ARROW 9 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Hydrate UI Dashboard</span>
              <ArrowDown size={14} />
            </div>

            {/* 10. END TERMINAL NODE (PILL) */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#BAE6FD', borderColor: '#0284C7', color: '#0369A1' }}>
              <CheckCircle2 size={16} />
              <span>[END] Render Live Health & AI Advice on Dashboard</span>
            </div>
          </div>
        </div>
      );
    } else if (project.id === 'ecommerce') {
      return (
        <div className="fc-flowchart-card">
          <div className="arch-card-header">
            <div className="arch-header-title-wrap">
              <Workflow size={20} color={accentColor} />
              <h3 className="arch-header-title">E-Commerce Transaction Flowchart</h3>
            </div>
            <div className="arch-live-badge">
              <span className="arch-live-dot"></span>
              <span>PRODUCTION PIPELINE</span>
            </div>
          </div>

          <div className="fc-canvas">
            {/* 1. START NODE */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#BAE6FD', borderColor: accentColor, color: '#0369A1' }}>
              <User size={16} />
              <span>[START] Customer / Seller Session (React 19 + Redux)</span>
            </div>

            {/* ARROW 1 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">REST Request + Bearer JWT</span>
              <ArrowDown size={14} />
            </div>

            {/* 2. PROCESS NODE */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#BBF7D0', borderColor: '#16A34A' }}>
              <div className="fc-shape-left">
                <Lock size={18} color="#16A34A" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Spring Security & RBAC Router</span>
                  <span className="fc-shape-sub">Validates JWT claims & UserContext isolation</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#15803D', borderColor: '#16A34A77', backgroundColor: '#86EFAC' }}>AUTH & RBAC</span>
            </div>

            {/* ARROW 2 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Order & Cart Service</span>
              <ArrowDown size={14} />
            </div>

            {/* 3. DECISION NODE */}
            <div className="fc-shape fc-shape-diamond" style={{ backgroundColor: '#FDE68A', borderColor: '#D97706' }}>
              <div className="fc-shape-left">
                <ShoppingCart size={18} color="#D97706" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Stock Reservation & Address Audit Check</span>
                  <span className="fc-shape-sub">Soft-disassociation prevents FK deletion breakage</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#B45309', borderColor: '#D9770677', backgroundColor: '#FCD34D' }}>DECISION</span>
            </div>

            {/* ARROW 3 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Select Payment Gateway</span>
              <ArrowDown size={14} />
            </div>

            {/* 4. PAYMENT BRANCHES */}
            <div className="fc-branch-grid">
              <div className="fc-branch-card" style={{ backgroundColor: '#C7D2FE', borderColor: '#4F46E5' }}>
                <CreditCard size={18} color="#4F46E5" />
                <span className="fc-branch-title">Stripe API</span>
                <span className="fc-branch-sub">Card Webhooks</span>
              </div>

              <div className="fc-branch-card" style={{ backgroundColor: '#BAE6FD', borderColor: '#2563EB' }}>
                <DollarSign size={18} color="#2563EB" />
                <span className="fc-branch-title">PayPal SDK</span>
                <span className="fc-branch-sub">Express Sandbox</span>
              </div>

              <div className="fc-branch-card" style={{ backgroundColor: '#A7F3D0', borderColor: '#059669' }}>
                <Truck size={18} color="#059669" />
                <span className="fc-branch-title">COD Gateway</span>
                <span className="fc-branch-sub">Instant Confirm</span>
              </div>
            </div>

            {/* ARROW 4 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Transaction Approved</span>
              <ArrowDown size={14} />
            </div>

            {/* 5. DATABASE CYLINDER */}
            <div className="fc-shape fc-shape-cylinder" style={{ backgroundColor: '#BFDBFE', borderColor: '#2563EB' }}>
              <div className="fc-shape-left">
                <Database size={18} color="#2563EB" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">PostgreSQL Relational Storage</span>
                  <span className="fc-shape-sub">Stores user profiles, products, & order history</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#1D4ED8', borderColor: '#2563EB77', backgroundColor: '#93C5FD' }}>POSTGRESQL</span>
            </div>

            {/* ARROW 5 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Order Confirmation Email</span>
              <ArrowDown size={14} />
            </div>

            {/* 6. END NODE */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#A7F3D0', borderColor: '#059669', color: '#047857' }}>
              <CheckCircle2 size={16} />
              <span>[END] Order Complete & Invoice Generated</span>
            </div>
          </div>
        </div>
      );
    } else {
      // expense-tracker
      return (
        <div className="fc-flowchart-card">
          <div className="arch-card-header">
            <div className="arch-header-title-wrap">
              <Workflow size={20} color={accentColor} />
              <h3 className="arch-header-title">Multi-Tenant Financial Flowchart</h3>
            </div>
            <div className="arch-live-badge">
              <span className="arch-live-dot"></span>
              <span>SELF-HEALING ENGINE</span>
            </div>
          </div>

          <div className="fc-canvas">
            {/* 1. START NODE */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#BAE6FD', borderColor: accentColor, color: '#0369A1' }}>
              <User size={16} />
              <span>[START] User Login & Session (React 19 + Vite)</span>
            </div>

            {/* ARROW 1 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Header: X-User-Id Context</span>
              <ArrowDown size={14} />
            </div>

            {/* 2. DECISION DIAMOND (RECRUITER DEMO RESET) */}
            <div className="fc-shape fc-shape-diamond" style={{ backgroundColor: '#FDE68A', borderColor: '#D97706' }}>
              <div className="fc-shape-left">
                <Zap size={18} color="#D97706" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">Is Recruiter Demo Account Login?</span>
                  <span className="fc-shape-sub">Triggers @Transactional database self-healing reset</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#B45309', borderColor: '#D9770677', backgroundColor: '#FCD34D' }}>DEMO RESET</span>
            </div>

            {/* ARROW 2 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Proceed to 5-Layer Engine</span>
              <ArrowDown size={14} />
            </div>

            {/* 3. PROCESS RECTANGLE */}
            <div className="fc-shape fc-shape-rect" style={{ backgroundColor: '#BAE6FD', borderColor: '#0284C7' }}>
              <div className="fc-shape-left">
                <BarChart3 size={18} color="#0284C7" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">5-Layer Tracking Service</span>
                  <span className="fc-shape-sub">Expenses • Savings • Debts • Bills • Subscriptions</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#0369A1', borderColor: '#0284C777', backgroundColor: '#7DD3FC' }}>SERVICE</span>
            </div>

            {/* ARROW 3 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Spring Data JPA Aggregation</span>
              <ArrowDown size={14} />
            </div>

            {/* 4. DATABASE CYLINDER */}
            <div className="fc-shape fc-shape-cylinder" style={{ backgroundColor: '#BFDBFE', borderColor: '#2563EB' }}>
              <div className="fc-shape-left">
                <Database size={18} color="#2563EB" />
                <div className="fc-shape-text">
                  <span className="fc-shape-title">PostgreSQL Relational DB</span>
                  <span className="fc-shape-sub">Persists isolated multi-tenant logs per user ID</span>
                </div>
              </div>
              <span className="fc-type-tag" style={{ color: '#1D4ED8', borderColor: '#2563EB77', backgroundColor: '#93C5FD' }}>POSTGRESQL</span>
            </div>

            {/* ARROW 4 */}
            <div className="fc-arrow-down">
              <div className="fc-arrow-line-v"></div>
              <span className="fc-arrow-label">Calculates Monthly Metrics</span>
              <ArrowDown size={14} />
            </div>

            {/* 5. END NODE */}
            <div className="fc-shape fc-shape-pill" style={{ backgroundColor: '#A7F3D0', borderColor: '#059669', color: '#047857' }}>
              <PieChart size={16} />
              <span>[END] Render Recharts Financial Analytics</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="project-details-root fade-in">
      {/* 1. TOP NAVIGATION HEADER */}
      <header className="details-nav-header">
        <div className="details-nav-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.2rem', cursor: 'default' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="details-nav-name">{personalInfo.name}</h1>
            <span className="details-nav-role">SOFTWARE DEVELOPER</span>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="projects-portfolio-btn"
            title="Return to main portfolio"
          >
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
          <button 
            onClick={() => navigate('/projects')} 
            className="projects-portfolio-btn"
            title="View all projects"
          >
            <FolderKanban size={17} />
            <span>Projects</span>
          </button>
        </div>
      </header>

      {/* 2. CINEMATIC VIDEO HERO SECTION (~520px) */}
      <section className="details-hero-section">
        <div className="hero-video-container">
          {project.videoSrc && project.videoSrc.endsWith('.mp4') ? (
            <video 
              ref={videoRef}
              src={project.videoSrc}
              className="hero-video-element"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={() => {
                if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
              }}
              onLoadedMetadata={() => {
                if (videoRef.current) setDuration(videoRef.current.duration);
              }}
              onClick={togglePlay}
            />
          ) : project.heroImage || project.thumbnail ? (
            <img
              src={project.heroImage || project.thumbnail}
              alt={project.title}
              className="hero-video-element"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          ) : (
            /* Cinematic Blueprint Dark Media Backdrop when video file is pending */
            <svg viewBox="0 0 1200 520" className="hero-video-element" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="heroDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#040D17" />
                  <stop offset="60%" stopColor="#081827" />
                  <stop offset="100%" stopColor="#0F283C" />
                </linearGradient>
              </defs>
              <rect width="1200" height="520" fill="url(#heroDarkGrad)" />
              {/* Technical blueprint grid overlay lines */}
              <path d="M 0 100 L 1200 100 M 0 250 L 1200 250 M 0 400 L 1200 400" stroke="#12304A" strokeWidth="1" strokeDasharray="6 6" />
              <path d="M 200 0 L 200 520 M 600 0 L 600 520 M 1000 0 L 1000 520" stroke="#12304A" strokeWidth="1" strokeDasharray="6 6" />
              
              {/* Decorative Tech Graphic */}
              <g transform="translate(680, 110)" opacity="0.85">
                <rect x="0" y="0" width="440" height="280" rx="16" fill="#071727" stroke="#1F4C6F" strokeWidth="2" />
                <rect x="20" y="20" width="400" height="200" rx="8" fill="#030A12" />
                {/* Simulated code / metrics UI */}
                <line x1="40" y1="50" x2="220" y2="50" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
                <line x1="40" y1="80" x2="340" y2="80" stroke="#1F4C6F" strokeWidth="3" strokeLinecap="round" />
                <line x1="40" y1="110" x2="290" y2="110" stroke="#1F4C6F" strokeWidth="3" strokeLinecap="round" />
                <line x1="40" y1="140" x2="380" y2="140" stroke={secondaryAccent} strokeWidth="3" strokeLinecap="round" />
                <circle cx="340" cy="180" r="16" fill={accentColor} fillOpacity="0.2" />
                <circle cx="340" cy="180" r="6" fill={accentColor} />
              </g>
            </svg>
          )}
        </div>

        {/* Gradient overlays for high text contrast */}
        <div className="hero-gradient-overlay-left"></div>
        <div className="hero-gradient-overlay-bottom"></div>

        {/* HERO CONTENT ON TOP OF VIDEO */}
        <div className="hero-content-wrapper">
          {/* Middle Row: Left Title & Right Decorative Message */}
          <div className="hero-body-row">
            <div className="hero-body-left">
              <span className="hero-eyebrow-text">{project.eyebrow || "FEATURED CASE STUDY"}</span>
              <h1 className="hero-title-heading">
                {project.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="hero-title-accent" style={{ color: secondaryAccent }}>
                  {project.title.split(" ").slice(-1)}
                </span>
              </h1>

              {/* Tags Pills / Tech Stack Badges */}
              <div className="hero-tags-row">
                {(project.tags || ["Full Stack", "Engineering", "Production"]).map((tag, idx) => {
                  const styleTheme = getTagStyle(idx);
                  return (
                    <span 
                      key={idx} 
                      className="hero-tag-pill"
                      style={{
                        backgroundColor: styleTheme.bg,
                        borderColor: styleTheme.border,
                        color: styleTheme.text,
                        boxShadow: `0 2px 10px ${styleTheme.glow}`
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Summary Paragraph */}
              <p className="hero-summary-paragraph">
                {project.tagline || project.shortDescription || "PROJECT SUMMARY WILL BE PROVIDED"}
              </p>

              {/* Action Buttons */}
              <div className="hero-buttons-row">
                <button className="btn-hero-primary" onClick={handleWatchDemo}>
                  <Play size={15} fill="#07111B" />
                  <span>Watch Demo</span>
                </button>

                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Far Right Decorative Handwritten Message */}
            <div className="hero-decorative-right">
              <div className="decorative-handwriting">
                {(project.decorativeText || ["Small", "Changes", "Big", "Impact"]).map((line, lIdx) => (
                  <div key={lIdx}>{line}</div>
                ))}
              </div>
              <div className="decorative-accent-line" style={{ backgroundColor: accentColor }}></div>
            </div>
          </div>

          {/* Bottom Bar: Video Controls Bar */}
          <div className="hero-bottom-controls">
            <div className="controls-left">
              <button className="control-btn" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button className="control-btn" onClick={toggleMute} title={isMuted ? "Unmute sound" : "Mute sound"}>
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <span className="time-display">
                {formatTime(currentTime)} / {duration ? formatTime(duration) : (project.duration || "02:36")}
              </span>
            </div>
            <div className="controls-right">
              <button className="control-btn" onClick={toggleFullscreen} title="Fullscreen">
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL TAB NAVIGATION */}
      <nav className="details-tabs-bar">
        <div className="tabs-container">
          {['Overview', 'Features', 'How It Works', 'Tech Stack'].map((tab) => (
            <button 
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* 4. MAIN TAB CONTENT AREA */}
      <main className="details-main-content">
        {/* OVERVIEW TAB */}
        {activeTab === 'Overview' && (
          <div className="tab-section-wrap fade-in">
            {loomEmbedUrl && (
              <div id="video-walkthrough-section" style={{ marginBottom: '2.5rem' }}>
                <div className="section-title-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h2 className="section-title-text">Video Walkthrough</h2>
                    <div className="section-title-line" style={{ backgroundColor: accentColor }}></div>
                  </div>
                  <a 
                    href={project.liveDemo || project.videoSrc} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-hero-secondary" 
                    style={{ fontSize: '13px', padding: '0.45rem 1rem' }}
                  >
                    <ExternalLink size={14} />
                    <span>Open in Loom ↗</span>
                  </a>
                </div>

                <div style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  borderRadius: '16px',
                  border: `1px solid ${accentColor}44`,
                  backgroundColor: '#040D17',
                  boxShadow: `0 12px 40px rgba(0,0,0,0.5), 0 0 20px ${accentColor}1A`
                }}>
                  <iframe
                    src={loomEmbedUrl}
                    title={`${project.title} Video Walkthrough`}
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px'
                    }}
                  />
                </div>
              </div>
            )}

            <div className="section-title-wrap">
              <h2 className="section-title-text">Overview</h2>
            </div>

            <div className="overview-cards-stack">
              {/* 01 PROBLEM STATEMENT */}
              <div className="overview-card-box">
                <div className="overview-card-left-group">
                  <div className="icon-circle-box icon-red">
                    <Target size={28} color="#FF5376" />
                  </div>
                </div>
                <div className="overview-card-right-content">
                  <h3 className="overview-card-title">Problem Statement</h3>
                  <p className="overview-card-body">
                    {project.overview?.problemStatement || "CONTENT WILL BE PROVIDED"}
                  </p>
                </div>
              </div>

              {/* 02 WHAT I SOLVED */}
              <div className="overview-card-box">
                <div className="overview-card-left-group">
                  <div className="icon-circle-box icon-gold">
                    <Lightbulb size={28} color="#F59E0B" />
                  </div>
                </div>
                <div className="overview-card-right-content">
                  <h3 className="overview-card-title">What I Solved</h3>
                  <p className="overview-card-body">
                    {project.overview?.whatISolved || "CONTENT WILL BE PROVIDED"}
                  </p>
                </div>
              </div>

              {/* 03 HOW I SOLVED IT */}
              <div className="overview-card-box">
                <div className="overview-card-left-group">
                  <div className="icon-circle-box icon-green">
                    <Settings size={28} color="#10B981" />
                  </div>
                </div>
                <div className="overview-card-right-content">
                  <h3 className="overview-card-title">How I Solved It</h3>
                  <p className="overview-card-body">
                    {project.overview?.howISolved || "CONTENT WILL BE PROVIDED"}
                  </p>
                </div>
              </div>

              {/* 04 HOW THE PROJECT WORKS (HORIZONTAL WORKFLOW) */}
              <div className="overview-card-box">
                <div className="overview-card-left-group">
                  <div className="icon-circle-box icon-cyan">
                    <Network size={28} color="#38BDF8" />
                  </div>
                </div>
                <div className="overview-card-right-content">
                  <h3 className="overview-card-title">How the Project Works</h3>
                  <div className="workflow-horizontal-flow">
                    {project.overview?.howItWorksSteps ? (
                      project.overview.howItWorksSteps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <div className="workflow-step-box">
                            <div className="step-icon-wrapper">
                              {getStepIcon(step.icon, sIdx)}
                            </div>
                            <div className="step-title-text">{step.title}</div>
                            <div className="step-desc-text">{step.desc}</div>
                          </div>
                          {sIdx < project.overview.howItWorksSteps.length - 1 && (
                            <div className="workflow-arrow-wrap">
                              <ArrowRight size={16} color="#38BDF8" opacity={0.7} />
                            </div>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      <div className="overview-card-body">CONTENT WILL BE PROVIDED</div>
                    )}
                  </div>
                </div>
              </div>

              {/* 05 OUTCOME (TWO-COLUMN CHECKLIST) */}
              <div className="overview-card-box">
                <div className="overview-card-left-group">
                  <div className="icon-circle-box icon-purple">
                    <BarChart3 size={28} color="#A855F7" />
                  </div>
                </div>
                <div className="overview-card-right-content">
                  <h3 className="overview-card-title">Outcome</h3>
                  <div className="outcome-checklist-grid">
                    {project.overview?.outcomeChecklist ? (
                      project.overview.outcomeChecklist.map((item, oIdx) => (
                        <div key={oIdx} className="checklist-item">
                          <CheckCircle2 size={18} color="#20C997" style={{ flexShrink: 0 }} />
                          <span>{item}</span>
                        </div>
                      ))
                    ) : (
                      <div className="overview-card-body">CONTENT WILL BE PROVIDED</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FEATURES TAB */}
        {activeTab === 'Features' && (
          <div className="tab-section-wrap fade-in">
            <div className="features-header-area">
              <div className="features-header-left">
                <h2 className="features-heading-text">Features</h2>
                <div className="features-heading-line" style={{ backgroundColor: accentColor }}></div>
              </div>
              <p className="features-header-desc">
                {project.id === 'ai-health' 
                  ? "A complete set of features designed to make health management simple, personalized and effective."
                  : project.id === 'ecommerce'
                  ? "A complete set of features designed to make marketplace transactions simple, scalable and secure."
                  : "A complete set of features designed to make personal budget tracking automated, intuitive and insightful."
                }
              </p>
            </div>

            <div className="features-vertical-list">
              {project.featuresList && project.featuresList.length > 0 ? (
                project.featuresList.map((feat, fIdx) => (
                  <div key={fIdx} className="feature-row-card">
                    {/* ICON: Circular icon container with vivid 28px icon */}
                    <div className="feature-icon-circle">
                      {getFeatureIcon(feat.icon, accentColor)}
                    </div>

                    {/* CENTER: Title & Description */}
                    <div className="feature-center-content">
                      <h3 className="feature-item-title">{feat.title}</h3>
                      <p className="feature-item-desc">{feat.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="overview-card-body">CONTENT WILL BE PROVIDED</div>
              )}
            </div>
          </div>
        )}

        {/* HOW IT WORKS TAB */}
        {activeTab === 'How It Works' && (
          <div className="tab-section-wrap fade-in">
            {/* Header section with left heading + right info block */}
            <div className="hiw-header-row">
              <div className="hiw-header-left">
                <h2 className="hiw-heading-title">How It Works</h2>
                <div className="hiw-heading-line" style={{ backgroundColor: accentColor }}></div>
                <p className="hiw-heading-sub">
                  From user input to personalized recommendations — here's how the entire system works behind the scenes.
                </p>
              </div>

              <div className="hiw-header-right-block">
                <Settings size={22} color={accentColor} className="hiw-info-icon" />
                <div className="hiw-info-vbar" style={{ backgroundColor: accentColor }}></div>
                <p className="hiw-info-text">
                  A seamless flow of data, intelligent processing, and personalized insights to help users make better decisions.
                </p>
              </div>
            </div>

            {/* Main 2-column layout: Left Timeline (34%) + Right Diagram Placeholder (66%) */}
            <div className="hiw-two-column-body">
              {/* LEFT: VERTICAL PROCESS TIMELINE */}
              <div className="hiw-timeline-column">
                {(project.howItWorksTimeline || [
                  { step: "01", title: "User Input", desc: "User provides their health details, goals and preferences through the web or mobile interface." },
                  { step: "02", title: "Backend Processing", desc: "Input data is validated, stored securely and sent to the AI microservice for analysis." },
                  { step: "03", title: "AI Analysis", desc: "Machine learning models analyze the data to identify patterns, risks and improvement areas." },
                  { step: "04", title: "Recommendation Engine", desc: "Based on the analysis, the system generates personalized diet plans, workout routines and health tips." },
                  { step: "05", title: "Personalized Output", desc: "Recommendations are displayed to the user with clear insights, charts and next steps for a healthier lifestyle." }
                ]).map((tItem, tIdx, arr) => (
                  <div key={tIdx} className="hiw-timeline-step">
                    {/* Circle badge & vertical line */}
                    <div className="hiw-step-node">
                      <div className="hiw-badge-circle" style={{ borderColor: accentColor }}>
                        {tItem.step}
                      </div>
                      {tIdx < arr.length - 1 && <div className="hiw-vline"></div>}
                    </div>

                    {/* Step Title & Description */}
                    <div className="hiw-step-content">
                      <h3 className="hiw-step-title">{tItem.title}</h3>
                      <p className="hiw-step-desc">{tItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: SYSTEM ARCHITECTURE & CONTROL FLOW DIAGRAM */}
              <div className="hiw-diagram-column">
                {renderSystemDiagram()}
              </div>
            </div>
          </div>
        )}

        {/* TECH STACK TAB */}
        {activeTab === 'Tech Stack' && (
          <div className="tab-section-wrap fade-in">
            {/* Top section: Left Heading + Subtitle | Right Info Card */}
            <div className="ts-header-row">
              <div className="ts-header-left">
                <h2 className="ts-heading-title">Tech Stack</h2>
                <div className="ts-heading-line" style={{ backgroundColor: accentColor }}></div>
                <p className="ts-heading-sub">
                  {project.techStackData?.subtitle || 
                    "A combination of modern technologies used to build a scalable, secure and reliable application."
                  }
                </p>
              </div>

              <div className="ts-header-right-card">
                <div className="ts-why-icon-wrap">
                  <Layers size={22} color={accentColor} />
                </div>
                <div className="ts-why-content">
                  <h3 className="ts-why-title">Why These Technologies?</h3>
                  <p className="ts-why-desc">
                    These tools were chosen for their reliability, performance, strong community support and suitability for building real-world applications.
                  </p>
                </div>
              </div>
            </div>

            {/* 2-Column Responsive Category Grid */}
            <div className="ts-category-grid">
              {project.techStackData?.categories ? (
                project.techStackData.categories.map((cat, cIdx) => (
                  <div key={cIdx} className="ts-category-card">
                    {/* Category Header */}
                    <div className="ts-category-header">
                      <div className="ts-cat-header-left">
                        <div className="ts-cat-icon">
                          {getTechCategoryIcon(cat.icon, accentColor)}
                        </div>
                        <h3 className="ts-cat-title">{cat.category}</h3>
                      </div>
                      <span className="ts-cat-subtitle">{cat.subtitle}</span>
                    </div>

                    {/* Technology Tiles Grid */}
                    <div className="ts-tiles-grid">
                      {cat.technologies.map((tech, tIdx) => (
                        <div key={tIdx} className="ts-tech-tile">
                          <div className="ts-tile-icon-wrap">
                            {getTechTileIcon(tech.name, accentColor)}
                          </div>
                          <span className="ts-tile-name">{tech.name}</span>
                          <span className="ts-tile-role">{tech.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="overview-card-body">CONTENT WILL BE PROVIDED</div>
              )}
            </div>

            {/* Bottom Summary Card */}
            <div className="ts-summary-card">
              <div className="ts-summary-icon-circle">
                <Target size={26} color={accentColor} />
              </div>

              <div className="ts-summary-content">
                <h3 className="ts-summary-title">Tech Stack in Short</h3>
                <div className="ts-summary-short-line" style={{ color: accentColor }}>
                  {project.techStackData?.summaryShort || project.techStack?.join(' + ')}
                </div>
                <p className="ts-summary-explanation">
                  {project.techStackData?.summaryExplanation || 
                    "A powerful microservices and backend stack engineered to deliver a secure, scalable, and high-performance application."
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* LOOM VIDEO EMBED MODAL OVERLAY */}
      {isVideoModalOpen && loomEmbedUrl && (
        <div 
          className="video-modal-backdrop fade-in"
          onClick={() => setIsVideoModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(4, 13, 23, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              backgroundColor: '#07111B',
              border: `1px solid ${accentColor}66`,
              borderRadius: '20px',
              boxShadow: `0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px ${accentColor}2E`,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.1rem 1.6rem',
              borderBottom: '1px solid #162B3D',
              backgroundColor: '#050E17'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Play size={18} color={accentColor} />
                <span style={{ fontWeight: 700, fontSize: '17px', color: '#F5F7FA' }}>
                  {project.title} — Video Walkthrough
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a 
                  href={project.liveDemo || project.videoSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: accentColor,
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Open in Loom ↗</span>
                </a>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Video Body */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              width: '100%',
              backgroundColor: '#000'
            }}>
              <iframe
                src={loomEmbedUrl}
                title={`${project.title} Video Walkthrough`}
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 5. MINIMALIST FOOTER */}
      <footer className="details-footer">
        <div className="footer-left">
          <span className="footer-name">{personalInfo.name}</span>
          <span className="footer-role">Software Engineer</span>
        </div>

        <div className="footer-right">
          <a href="https://github.com/mahaksingh" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/mahaksingh" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="/resume" className="footer-link">Resume</a>
          <span className="footer-copyright">© 2026 Mahak Singh</span>
        </div>
      </footer>
    </div>
  );
};

// Dynamic SVG Mockup Thumbnail renderer matching reference screenshot design
const RenderScreenshotThumbnail = ({ item, project }) => {
  if (item.image) {
    return <img src={item.image} alt={item.title} className="screenshot-img" />;
  }

  const accent = project.accent || '#25B9FF';
  const isMobile = item.category === 'Mobile' || item.title.includes('Mobile');
  
  if (isMobile) {
    return (
      <div className="screenshot-svg-wrap mobile-mockup-bg">
        <svg viewBox="0 0 320 200" className="screenshot-svg-content">
          <g transform="translate(45, 12)">
            <rect x="0" y="0" width="100" height="175" rx="14" fill="#06121E" stroke="#1B4D72" strokeWidth="2.5" />
            <rect x="35" y="4" width="30" height="4" rx="2" fill="#123552" />
            <rect x="6" y="14" width="88" height="147" rx="8" fill="#030C16" />
            <circle cx="50" cy="45" r="16" fill={accent} opacity="0.25" />
            <text x="50" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">{project.id === 'ai-health' ? 'MediMind' : 'App'}</text>
            <rect x="15" y="78" width="70" height="7" rx="3.5" fill="#143D5C" />
            <rect x="15" y="92" width="50" height="6" rx="3" fill="#0D2A42" />
            <rect x="20" y="115" width="60" height="22" rx="11" fill={accent} />
            <text x="50" y="129" textAnchor="middle" fill="#030C16" fontSize="8" fontWeight="bold">Get Started</text>
          </g>

          <g transform="translate(175, 12)">
            <rect x="0" y="0" width="100" height="175" rx="14" fill="#06121E" stroke="#1B4D72" strokeWidth="2.5" />
            <rect x="35" y="4" width="30" height="4" rx="2" fill="#123552" />
            <rect x="6" y="14" width="88" height="147" rx="8" fill="#030C16" />
            <rect x="12" y="24" width="76" height="35" rx="6" fill="#09243B" />
            <text x="20" y="38" fill="#8EA5BB" fontSize="7">Health Score</text>
            <text x="20" y="52" fill="#FFFFFF" fontSize="11" fontWeight="bold">85/100</text>
            <rect x="12" y="68" width="35" height="38" rx="6" fill="#081F33" stroke="#103859" strokeWidth="1" />
            <rect x="53" y="68" width="35" height="38" rx="6" fill="#081F33" stroke="#103859" strokeWidth="1" />
            <rect x="12" y="114" width="76" height="35" rx="6" fill="#081F33" stroke="#103859" strokeWidth="1" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="screenshot-svg-wrap">
      <svg viewBox="0 0 400 240" className="screenshot-svg-content">
        <rect x="0" y="0" width="400" height="240" rx="8" fill="#F4F8FC" />
        <rect x="0" y="0" width="400" height="28" fill="#FFFFFF" />
        <line x1="0" y1="28" x2="400" y2="28" stroke="#E2E8F0" strokeWidth="1" />
        <text x="16" y="18" fill="#0F172A" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          {project.id === 'ai-health' ? 'MediMind' : project.id === 'ecommerce' ? 'ShopVerse' : 'ExpenseFlow'}
        </text>
        <rect x="120" y="11" width="30" height="6" rx="3" fill="#94A3B8" />
        <rect x="160" y="11" width="30" height="6" rx="3" fill="#CBD5E1" />
        <rect x="200" y="11" width="30" height="6" rx="3" fill="#CBD5E1" />
        <circle cx="380" cy="14" r="8" fill={accent} />
        <text x="380" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">M</text>

        {item.title.includes('Landing') ? (
          <g>
            <rect x="0" y="29" width="400" height="211" fill="#F8FAFC" />
            <text x="24" y="75" fill="#0F172A" fontSize="16" fontWeight="bold">Better Health</text>
            <text x="24" y="95" fill={accent} fontSize="16" fontWeight="bold">Brighter Tomorrows</text>
            <rect x="24" y="108" width="160" height="8" rx="4" fill="#94A3B8" />
            <rect x="24" y="122" width="120" height="8" rx="4" fill="#CBD5E1" />
            <rect x="24" y="142" width="70" height="22" rx="4" fill={accent} />
            <text x="59" y="156" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Get Started</text>
            <rect x="210" y="55" width="166" height="130" rx="8" fill="#E2E8F0" />
            <circle cx="293" cy="110" r="30" fill={accent} opacity="0.2" />
            <path d="M273 125 C293 90, 293 90, 313 125 Z" fill={accent} />
          </g>
        ) : item.title.includes('Registration') || item.title.includes('Form') ? (
          <g>
            <rect x="0" y="29" width="400" height="211" fill="#F1F5F9" />
            <rect x="110" y="45" width="180" height="170" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <text x="200" y="70" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">{item.title}</text>
            <rect x="130" y="88" width="140" height="18" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="130" y="115" width="140" height="18" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="130" y="142" width="140" height="18" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
            <rect x="130" y="172" width="140" height="22" rx="4" fill={accent} />
            <text x="200" y="186" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Submit</text>
          </g>
        ) : item.title.includes('Dashboard') || item.title.includes('Admin') || item.title.includes('Analytics') || item.title.includes('Tracking') ? (
          <g>
            <rect x="0" y="29" width="400" height="211" fill="#F8FAFC" />
            <rect x="0" y="29" width="75" height="211" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="12" y="45" width="50" height="8" rx="4" fill={accent} />
            <rect x="12" y="65" width="50" height="6" rx="3" fill="#CBD5E1" />
            <rect x="12" y="80" width="50" height="6" rx="3" fill="#CBD5E1" />
            <rect x="12" y="95" width="50" height="6" rx="3" fill="#CBD5E1" />
            <rect x="12" y="110" width="50" height="6" rx="3" fill="#CBD5E1" />
            
            <rect x="90" y="45" width="90" height="42" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <text x="100" y="60" fill="#64748B" fontSize="7">Metric 1</text>
            <text x="100" y="76" fill="#0F172A" fontSize="12" fontWeight="bold">1,248</text>

            <rect x="190" y="45" width="90" height="42" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <text x="200" y="60" fill="#64748B" fontSize="7">Metric 2</text>
            <text x="200" y="76" fill="#0F172A" fontSize="12" fontWeight="bold">882</text>

            <rect x="290" y="45" width="95" height="42" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <text x="300" y="60" fill="#64748B" fontSize="7">Metric 3</text>
            <text x="300" y="76" fill={accent} fontSize="12" fontWeight="bold">94.2%</text>

            <rect x="90" y="98" width="295" height="125" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M 110 190 L 150 160 L 190 175 L 240 130 L 290 145 L 340 115 L 370 120" fill="none" stroke={accent} strokeWidth="3" />
            <circle cx="340" cy="115" r="4" fill={accent} />
          </g>
        ) : (
          <g>
            <rect x="0" y="29" width="400" height="211" fill="#F8FAFC" />
            <rect x="24" y="50" width="352" height="160" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <rect x="44" y="70" width="120" height="12" rx="4" fill="#0F172A" />
            <rect x="44" y="92" width="200" height="8" rx="4" fill="#94A3B8" />
            <rect x="44" y="115" width="312" height="75" rx="6" fill="#F1F5F9" />
          </g>
        )}
      </svg>
    </div>
  );
};
