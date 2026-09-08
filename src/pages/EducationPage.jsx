import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Globe,
  Copy,
  Maximize2,
  MoreHorizontal,
  Send,
  ArrowLeft,
  Check
} from 'lucide-react';
import { ClaudeIcon } from '../components/ClaudeIcon';
import './EducationPage.css';

export const EducationPage = () => {
  const navigate = useNavigate();

  // State: isLoading (starts true for 3 seconds on page load)
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Params');
  const [activeResponseTab, setActiveResponseTab] = useState('Body');
  const [activeFormat, setActiveFormat] = useState('Pretty');
  const [copied, setCopied] = useState(false);

  // Trigger 0.5-second initial request on page mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSendRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleCopyJson = () => {
    const jsonString = JSON.stringify(educationData, null, 2);
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // Exact Education JSON Data requested
  const educationData = {
    status: "success",
    data: {
      education: [
        {
          level: "B.Tech",
          college: "ABES Engineering College",
          branch: "Computer Science",
          batch: "2023 - 2027",
          cgpa: 7.78
        },
        {
          level: "12th",
          school: "Hill Top School",
          board: "CISCE",
          year: 2022,
          percentage: "73.8%"
        },
        {
          level: "10th",
          school: "Hill Top School",
          board: "CISCE",
          year: 2020,
          percentage: "90%"
        }
      ]
    }
  };

  const rawJsonLines = [
    '{',
    '  "status": "success",',
    '  "data": {',
    '    "education": [',
    '      {',
    '        "level": "B.Tech",',
    '        "college": "ABES Engineering College",',
    '        "branch": "Computer Science",',
    '        "batch": "2023 - 2027",',
    '        "cgpa": 7.78',
    '      },',
    '      {',
    '        "level": "12th",',
    '        "school": "Hill Top School",',
    '        "board": "CISCE",',
    '        "year": 2022,',
    '        "percentage": "73.8%"',
    '      },',
    '      {',
    '        "level": "10th",',
    '        "school": "Hill Top School",',
    '        "board": "CISCE",',
    '        "year": 2020,',
    '        "percentage": "90%"',
    '      }',
    '    ]',
    '  }',
    '}'
  ];

  const renderJsonLine = (line) => {
    return line.split('\n').map((l, idx) => {
      return (
        <span key={idx}>
          {l.includes('"') ? (
            l.split(/(".*?"|\b\d+(?:\.\d+)?\b)/g).map((part, pIdx) => {
              if (part.startsWith('"') && part.endsWith('"')) {
                const isKey = l.indexOf(part) < l.indexOf(':') && l.includes(':');
                return (
                  <span
                    key={pIdx}
                    className={isKey ? 'json-key' : 'json-string'}
                  >
                    {part}
                  </span>
                );
              } else if (!isNaN(Number(part)) && part.trim() !== '') {
                return (
                  <span key={pIdx} className="json-number">
                    {part}
                  </span>
                );
              }
              return <span key={pIdx} className="json-punct">{part}</span>;
            })
          ) : (
            <span className="json-punct">{l}</span>
          )}
        </span>
      );
    });
  };

  return (
    <div className="api-explorer-root fade-in">
      {/* TOP NAVIGATION HEADER */}
      <header className="api-header">
        <div className="api-header-left">
          <ClaudeIcon size={26} />
          <span className="api-brand-title font-serif">Mahak Singh</span>

          <div className="api-breadcrumb">
            <button className="breadcrumb-link" onClick={() => navigate('/')}>
              <ArrowLeft size={14} style={{ marginRight: 4 }} />
              Portfolio
            </button>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-active">Education</span>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-sub">API Explorer</span>
          </div>
        </div>

        <div className="api-header-right"></div>
      </header>

      {/* MAIN API EXPLORER CANVAS */}
      <div className="api-container">
        {/* API REQUEST BAR */}
        <div className="api-request-bar">
          <div className="request-method-dropdown">
            <span className="method-get">GET</span>
            <ChevronDown size={15} className="method-chevron" />
          </div>

          <div className="request-url-input">
            https://api.mahak.dev/education/mahak
          </div>

          <button
            className={`btn-send-request ${isLoading ? 'sending' : ''}`}
            onClick={handleSendRequest}
            disabled={isLoading}
          >
            <Send size={16} className="send-icon" />
            <span>{isLoading ? 'Sending...' : 'Send'}</span>
          </button>
        </div>

        {/* API TABS */}
        <div className="api-tabs-bar">
          {['Params', 'Headers', 'Authorization', 'Body', 'Scripts', 'Settings'].map((tab) => (
            <button
              key={tab}
              className={`api-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* QUERY PARAMETERS SECTION */}
        <div className="api-query-params-section">
          <h3 className="section-subtitle">Query Parameters</h3>

          <div className="params-table-wrapper">
            <div className="params-table-header">
              <div className="col-key">Key</div>
              <div className="col-value">Value</div>
              <div className="col-desc">Description</div>
            </div>
            <div className="params-table-empty">
              No parameters
            </div>
          </div>
        </div>

        {/* SEQUENTIAL VIEW: SHOW RESPONSE LOADING BOX FOR 3 SECONDS, THEN SHOW JSON PANEL */}
        {isLoading ? (
          /* RESPONSE LOADING SECTION (DISPLAYED FOR 3 SECONDS) */
          <div className="api-response-section fade-in">
            <div className="response-header-title">
              <span>Response</span>
            </div>

            <div className="response-status-banner">
              <div className="progress-bar-line">
                <div className="progress-bar-fill active"></div>
              </div>
              <p className="status-primary-text">
                Sending request to /education/mahak ...
              </p>
              <p className="status-secondary-text">
                Fetching educational background
              </p>
            </div>
          </div>
        ) : (
          /* JSON RESPONSE PANEL (REPLACES LOADING BOX AFTER 3 SECONDS) */
          <div className="api-json-panel fade-in">
            {/* Panel Top Status & Tabs Bar */}
            <div className="json-panel-topbar">
              <div className="json-tabs-left">
                {['Body', 'Cookies', 'Headers (6)', 'Test Results'].map((tab) => (
                  <button
                    key={tab}
                    className={`json-tab-btn ${activeResponseTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveResponseTab(tab)}
                  >
                    {tab === 'Headers (6)' ? (
                      <>
                        Headers <span className="badge-count">6</span>
                      </>
                    ) : (
                      tab
                    )}
                  </button>
                ))}
              </div>

              <div className="json-metadata-right">
                <span className="status-pill-200">200 OK</span>
                <span className="meta-info">215 ms</span>
                <span className="meta-info">872 B</span>
                <Globe size={15} className="meta-icon" />
                <MoreHorizontal size={16} className="meta-icon" />
              </div>
            </div>

            {/* Panel Sub-bar: Format Options & Copy/Maximize */}
            <div className="json-panel-subbar">
              <div className="format-options-left">
                {['Pretty', 'Raw', 'Preview'].map((fmt) => (
                  <button
                    key={fmt}
                    className={`fmt-btn ${activeFormat === fmt ? 'active' : ''}`}
                    onClick={() => setActiveFormat(fmt)}
                  >
                    {fmt}
                  </button>
                ))}
                <div className="fmt-dropdown">
                  <span>JSON</span>
                  <ChevronDown size={13} />
                </div>
              </div>

              <div className="panel-actions-right">
                <button
                  className="action-btn"
                  onClick={handleCopyJson}
                  title="Copy JSON"
                >
                  {copied ? <Check size={14} style={{ color: '#35D49A' }} /> : <Copy size={14} />}
                </button>
                <button className="action-btn" title="Maximize">
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            {/* JSON CONTENT CODE VIEWER */}
            <div className="json-code-viewer">
              <div className="json-line-numbers">
                {rawJsonLines.map((_, i) => (
                  <div key={i + 1} className="line-num">{i + 1}</div>
                ))}
              </div>

              <pre className="json-code-block">
                <code>
                  {rawJsonLines.map((line, idx) => (
                    <div key={idx} className="code-line">
                      {renderJsonLine(line)}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
