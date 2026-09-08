import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Clock,
  Database,
  BarChart3,
  Sparkles,
  FileCode2,
  Crown,
  FileText,
  BookOpen,
  UserCheck,
  MessageSquare,
  Lock,
  Menu,
  Bookmark,
  Code2,
  Maximize2,
  Plus
} from 'lucide-react';
import './CodingProfilesPage.css';

export const CodingProfilesPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('accepted');
  const [activeCaseTab, setActiveCaseTab] = useState('case1');

  // Platform Profile URLs (Mahak Singh)
  const platformLinks = {
    leetcode: 'https://leetcode.com/u/mhksingh_12/',
    codechef: 'https://www.codechef.com/users/mahak82',
    geeksforgeeks: 'https://www.geeksforgeeks.org/profile/mahaksiwr1g',
    hackerrank: 'https://www.hackerrank.com/profile/mahaksingh_12',
    github: 'https://github.com/Mahak-10'
  };

  const handlePlatformClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Syntax Highlighted Java Lines matching screenshot
  const codeLines = [
    { num: 1, tokens: [{ text: 'public class ', type: 'keyword' }, { text: 'CodingProfiles', type: 'class' }, { text: ' {', type: 'plain' }] },
    { num: 2, tokens: [{ text: '    public static void ', type: 'keyword' }, { text: 'main', type: 'method' }, { text: '(', type: 'plain' }, { text: 'String', type: 'class' }, { text: '[] args) {', type: 'plain' }] },
    { num: 3, tokens: [{ text: '        System', type: 'class' }, { text: '.', type: 'plain' }, { text: 'out', type: 'variable' }, { text: '.', type: 'plain' }, { text: 'println', type: 'method' }, { text: '(', type: 'plain' }, { text: '"Connecting my coding profiles..."', type: 'string' }, { text: ');', type: 'plain' }] },
    { num: 4, tokens: [{ text: '', type: 'plain' }] },
    { num: 5, tokens: [{ text: '        String', type: 'class' }, { text: '[] platforms = {', type: 'plain' }] },
    { num: 6, tokens: [{ text: '            "LeetCode"', type: 'string' }, { text: ',', type: 'plain' }] },
    { num: 7, tokens: [{ text: '            "CodeChef"', type: 'string' }, { text: ',', type: 'plain' }] },
    { num: 8, tokens: [{ text: '            "GeeksforGeeks"', type: 'string' }, { text: ',', type: 'plain' }] },
    { num: 9, tokens: [{ text: '            "HackerRank"', type: 'string' }] },
    { num: 10, tokens: [{ text: '        };', type: 'plain' }] },
    { num: 11, tokens: [{ text: '', type: 'plain' }] },
    { num: 12, tokens: [{ text: '        for ', type: 'keyword' }, { text: '(', type: 'plain' }, { text: 'String', type: 'class' }, { text: ' platform : platforms) {', type: 'plain' }] },
    { num: 13, tokens: [{ text: '            System', type: 'class' }, { text: '.', type: 'plain' }, { text: 'out', type: 'variable' }, { text: '.', type: 'plain' }, { text: 'println', type: 'method' }, { text: '(', type: 'plain' }, { text: '"✓ "', type: 'string' }, { text: ' + platform + ', type: 'plain' }, { text: '" connected!"', type: 'string' }, { text: ');', type: 'plain' }] },
    { num: 14, tokens: [{ text: '        }', type: 'plain' }] },
    { num: 15, tokens: [{ text: '', type: 'plain' }] },
    { num: 16, tokens: [{ text: '        System', type: 'class' }, { text: '.', type: 'plain' }, { text: 'out', type: 'variable' }, { text: '.', type: 'plain' }, { text: 'println', type: 'method' }, { text: '(', type: 'plain' }, { text: '"\\nAll Test Cases Passed!"', type: 'string' }, { text: ');', type: 'plain' }] },
    { num: 17, tokens: [{ text: '    }', type: 'plain' }] },
    { num: 18, tokens: [{ text: '}', type: 'plain' }] }
  ];

  return (
    <div className="leetcode-root fade-in">
      {/* TOP HEADER */}
      <header className="leetcode-header">
        <div className="header-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
          <img src="/leetcode.png" alt="LeetCode" className="leetcode-header-logo-img" />
          <span className="header-brand">LeetCode</span>
          <div className="header-sep"></div>
          <span className="header-title">Coding Profiles</span>
          <button className="projects-portfolio-btn" onClick={() => navigate('/')} title="Return to main portfolio">
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN TWO-COLUMN WORKSPACE */}
      <div className="workspace-layout">
        {/* LEFT COLUMN PANEL */}
        <div className="panel left-panel">
          {/* LEFT TOP TABS */}
          <div className="panel-tabs-bar">
            <div className="panel-tab">
              <FileText size={14} className="tab-icon" />
              <span>Description</span>
            </div>
            <div className="panel-tab">
              <BookOpen size={14} className="tab-icon" />
              <span>Submission Details</span>
            </div>
            <div className="panel-tab">
              <UserCheck size={14} className="tab-icon" />
              <span>Profile Links</span>
            </div>
            <div className="panel-tab">
              <MessageSquare size={14} className="tab-icon" />
              <span>Discussion</span>
            </div>
            <div className="panel-tab active">
              <CheckCircle2 size={14} className="tab-icon active-icon" />
              <span>Accepted</span>
              <span className="tab-close">×</span>
            </div>
          </div>

          {/* INNER CONTENT SCROLLABLE AREA */}
          <div className="left-panel-content">
            {/* SUBMISSION HEADER */}
            <div className="sub-header-row">
              <button className="btn-all-submissions">
                <ArrowLeft size={13} />
                <span>All Submissions</span>
              </button>
            </div>

            <div className="accepted-meta-block">
              <div className="accepted-title-row">
                <div className="accepted-title-group">
                  <h2 className="accepted-heading">Accepted</h2>
                  <span className="testcases-passed-text">4 / 4 testcases passed</span>
                </div>

                <div className="accepted-action-btns">
                  <button className="btn-analysis">
                    <Sparkles size={14} />
                    <span>Analysis</span>
                  </button>
                  <button className="btn-view-codes">
                    <FileCode2 size={14} />
                    <span>View Codes</span>
                  </button>
                </div>
              </div>

              <div className="sub-user-info">
                <div className="user-avatar-circle">M</div>
                <span><strong className="user-name">Mahak Singh</strong> submitted on Sep 06, 2026 06:23</span>
              </div>
            </div>



            {/* STATISTICS ROW */}
            <div className="stats-grid">
              <div className="stat-col">
                <div className="stat-label-row">
                  <Clock size={16} className="stat-icon" />
                  <span>Connection Time</span>
                </div>
                <div className="stat-num-row">
                  <span className="stat-num">6 ms</span>
                  <span className="stat-beats">Beats <strong>92.14%</strong> 🖐️</span>
                </div>
              </div>

              <div className="stat-col">
                <div className="stat-label-row">
                  <Database size={16} className="stat-icon" />
                  <span>Data Synced</span>
                </div>
                <div className="stat-num-row">
                  <span className="stat-num">0 MB</span>
                  <span className="stat-beats">Beats <strong>100.00%</strong> 🖐️</span>
                </div>
              </div>

              <div className="stat-col">
                <div className="stat-label-row">
                  <BarChart3 size={16} className="stat-icon" />
                  <span>Status</span>
                </div>
                <div className="stat-num-row">
                  <span className="stat-status-accepted">Accepted</span>
                </div>
              </div>
            </div>

            {/* TEST CASES SECTION */}
            <div className="testcases-panel">
              <div className="testcases-header">
                <h3 className="testcases-title">Test Cases <span className="testcases-count">(4)</span></h3>
                <span className="testcases-status-badge">4 / 4 passed</span>
              </div>

              <div className="testcases-list">
                {/* TESTCASE 1: LEETCODE */}
                <div
                  className="testcase-row"
                  onClick={() => handlePlatformClick(platformLinks.leetcode)}
                  title="Open LeetCode Profile"
                >
                  <div className="testcase-left">
                    <CheckCircle2 size={18} className="check-icon-green" />
                    <span className="tc-label">Testcase 1</span>
                    <div className="platform-logo-box">
                      <img src="/leetcode.png" alt="LeetCode" className="platform-logo-img" />
                    </div>
                    <div className="platform-meta">
                      <span className="platform-name">LeetCode</span>
                      <span className="platform-desc">Problem Solving & DSA</span>
                    </div>
                  </div>

                  <div className="testcase-right">
                    <span className="badge-tc-accepted">Accepted</span>
                    <span className="tc-time">2 ms</span>
                    <ExternalLink size={15} className="ext-icon" />
                  </div>
                </div>

                {/* TESTCASE 2: CODECHEF */}
                <div
                  className="testcase-row"
                  onClick={() => handlePlatformClick(platformLinks.codechef)}
                  title="Open CodeChef Profile"
                >
                  <div className="testcase-left">
                    <CheckCircle2 size={18} className="check-icon-green" />
                    <span className="tc-label">Testcase 2</span>
                    <div className="platform-logo-box">
                      <img src="/codechef.png" alt="CodeChef" className="platform-logo-img" />
                    </div>
                    <div className="platform-meta">
                      <span className="platform-name">CodeChef</span>
                      <span className="platform-desc">Competitive Programming</span>
                    </div>
                  </div>

                  <div className="testcase-right">
                    <span className="badge-tc-accepted">Accepted</span>
                    <span className="tc-time">3 ms</span>
                    <ExternalLink size={15} className="ext-icon" />
                  </div>
                </div>

                {/* TESTCASE 3: GEEKSFORGEEKS */}
                <div
                  className="testcase-row"
                  onClick={() => handlePlatformClick(platformLinks.geeksforgeeks)}
                  title="Open GeeksforGeeks Profile"
                >
                  <div className="testcase-left">
                    <CheckCircle2 size={18} className="check-icon-green" />
                    <span className="tc-label">Testcase 3</span>
                    <div className="platform-logo-box">
                      <img src="/gfg.png" alt="GeeksforGeeks" className="platform-logo-img" />
                    </div>
                    <div className="platform-meta">
                      <span className="platform-name">GeeksforGeeks</span>
                      <span className="platform-desc">DSA & Technical Content</span>
                    </div>
                  </div>

                  <div className="testcase-right">
                    <span className="badge-tc-accepted">Accepted</span>
                    <span className="tc-time">4 ms</span>
                    <ExternalLink size={15} className="ext-icon" />
                  </div>
                </div>

                {/* TESTCASE 4: HACKERRANK */}
                <div
                  className="testcase-row"
                  onClick={() => handlePlatformClick(platformLinks.hackerrank)}
                  title="Open HackerRank Profile"
                >
                  <div className="testcase-left">
                    <CheckCircle2 size={18} className="check-icon-green" />
                    <span className="tc-label">Testcase 4</span>
                    <div className="platform-logo-box">
                      <img src="/hackerank.png" alt="HackerRank" className="platform-logo-img" />
                    </div>
                    <div className="platform-meta">
                      <span className="platform-name">HackerRank</span>
                      <span className="platform-desc">Problem Solving</span>
                    </div>
                  </div>

                  <div className="testcase-right">
                    <span className="badge-tc-accepted">Accepted</span>
                    <span className="tc-time">5 ms</span>
                    <ExternalLink size={15} className="ext-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN PANEL */}
        <div className="panel right-panel">
          {/* CODE EDITOR TOP BAR */}
          <div className="editor-top-bar">
            <div className="editor-lang-left">
              <span className="code-icon-green">&lt;/&gt;</span>
              <span className="editor-label-code">Code</span>
              <div className="lang-select-box">
                <span>Java</span>
                <ChevronRight size={12} className="rotate-90" />
              </div>
              <div className="auto-tag">
                <Lock size={11} />
                <span>Auto</span>
              </div>
            </div>

            <div className="editor-controls-right">
              <Menu size={14} className="ed-icon" />
              <Bookmark size={14} className="ed-icon" />
              <Code2 size={14} className="ed-icon" />
              <Maximize2 size={14} className="ed-icon" />
            </div>
          </div>

          {/* CODE EDITOR VIEWPORT */}
          <div className="code-editor-viewport">
            <div className="line-numbers-col">
              {codeLines.map((l) => (
                <div key={l.num} className="line-num">
                  {l.num}
                </div>
              ))}
            </div>

            <div className="code-body font-mono">
              {codeLines.map((l) => (
                <div key={l.num} className="code-line">
                  {l.tokens.map((tok, idx) => (
                    <span key={idx} className={`tok-${tok.type}`}>
                      {tok.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* EDITOR FOOTER META */}
          <div className="editor-footer-meta">
            <span className="saved-text">Saved</span>
            <span className="ln-col-text">Ln 1, Col 1</span>
          </div>

          {/* TESTCASE OUTPUT PANEL */}
          <div className="output-panel">
            <div className="output-tabs-bar">
              <div className="output-tab active">
                <CheckCircle2 size={13} className="tc-icon-green" />
                <span>Testcase</span>
              </div>
              <div className="output-tab">
                <span className="console-prompt">&gt;_</span>
                <span>Test Result</span>
              </div>
            </div>

            <div className="case-subtabs">
              <button
                className={`case-btn ${activeCaseTab === 'case1' ? 'active' : ''}`}
                onClick={() => setActiveCaseTab('case1')}
              >
                Case 1
              </button>
              <button
                className={`case-btn ${activeCaseTab === 'case2' ? 'active' : ''}`}
                onClick={() => setActiveCaseTab('case2')}
              >
                Case 2
              </button>
              <button
                className={`case-btn ${activeCaseTab === 'case3' ? 'active' : ''}`}
                onClick={() => setActiveCaseTab('case3')}
              >
                Case 3
              </button>
              <button
                className={`case-btn ${activeCaseTab === 'case4' ? 'active' : ''}`}
                onClick={() => setActiveCaseTab('case4')}
              >
                Case 4
              </button>
              <button className="case-btn plus-btn">+</button>
            </div>

            <div className="output-terminal-content font-mono">
              <p className="out-line">Connecting my coding profiles...</p>
              <p className="out-line green-out">✓ LeetCode connected!</p>
              <p className="out-line green-out">✓ CodeChef connected!</p>
              <p className="out-line green-out">✓ GeeksforGeeks connected!</p>
              <p className="out-line green-out">✓ HackerRank connected!</p>
              <br />
              <p className="out-line green-out font-bold">All Test Cases Passed!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
