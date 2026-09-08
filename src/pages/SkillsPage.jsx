import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FileText,
  File,
  ArrowLeft
} from 'lucide-react';
import './SkillsPage.css';

export const SkillsPage = () => {
  const navigate = useNavigate();

  // Explorer folder open states
  const [openFolders, setOpenFolders] = useState({
    mahakPortfolio: true,
    idea: false,
    src: true,
    main: true,
    java: false,
    resources: true
  });

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  // Structured YAML lines for Technical Skills
  const yamlLines = [
    { line: 1, type: 'comment', content: '# Mahak Singh - Technical Skills' },
    { line: 2, type: 'comment', content: '# Core technologies, frameworks, and developer tools' },
    { line: 3, type: 'blank', content: '' },
    { line: 4, type: 'key', content: 'technical-skills:' },
    { line: 5, type: 'blank', content: '' },
    { line: 6, type: 'subkey', content: '  programming-languages:' },
    { line: 7, type: 'item', content: '    - Java (Core & Advanced)' },
    { line: 8, type: 'item', content: '    - Python' },
    { line: 9, type: 'blank', content: '' },
    { line: 10, type: 'subkey', content: '  backend-development:' },
    { line: 11, type: 'item', content: '    - Spring Framework' },
    { line: 12, type: 'item', content: '    - Spring Boot' },
    { line: 13, type: 'item', content: '    - REST APIs' },
    { line: 14, type: 'blank', content: '' },
    { line: 15, type: 'subkey', content: '  databases-and-storage:' },
    { line: 16, type: 'item', content: '    - MySQL (Relational Database / SQL)' },
    { line: 17, type: 'blank', content: '' },
    { line: 18, type: 'subkey', content: '  computer-vision-ai:' },
    { line: 19, type: 'item', content: '    - OpenCV' },
    { line: 20, type: 'item', content: '    - MediaPipe' },
    { line: 21, type: 'blank', content: '' },
    { line: 22, type: 'subkey', content: '  core-cs-fundamentals:' },
    { line: 23, type: 'item', content: '    - Data Structures & Algorithms (DSA)' },
    { line: 24, type: 'item', content: '    - Object-Oriented Programming (OOPS)' },
    { line: 25, type: 'item', content: '    - Database Management Systems (DBMS)' },
    { line: 26, type: 'item', content: '    - Computer Networks (CN)' },
    { line: 27, type: 'blank', content: '' },
    { line: 28, type: 'subkey', content: '  developer-tools-and-environment:' },
    { line: 29, type: 'item', content: '    - Git & GitHub' },
    { line: 30, type: 'item', content: '    - Postman' },
    { line: 31, type: 'item', content: '    - Google Colab' },
    { line: 32, type: 'item', content: '    - IntelliJ IDEA & VS Code' },
    { line: 33, type: 'item', content: '    - Command Line (CLI)' },
    { line: 34, type: 'blank', content: '' },
    { line: 35, type: 'comment', content: '# Eager to launch career as a Software Development Engineer.' }
  ];

  return (
    <div className="ide-skills-root fade-in">
      {/* TOP HEADER */}
      <header className="ide-header">
        <div className="ide-header-left" style={{ flexDirection: 'row', alignItems: 'center', gap: '1.2rem' }}>
          <div className="ide-logo-wrapper">
            <img src="/images/intellij.jpg" alt="IntelliJ IDEA" className="ide-header-logo-img" />
          </div>
          <div className="ide-header-titles">
            <h1 className="ide-title font-sans">Mahak Singh</h1>
            <span className="ide-subtitle">SOFTWARE DEVELOPER</span>
          </div>
          <button
            className="projects-portfolio-btn"
            onClick={() => navigate('/')}
            title="Return to main portfolio"
          >
            <ArrowLeft size={17} />
            <span>Portfolio</span>
          </button>
        </div>
      </header>

      {/* MAIN EDITOR & EXPLORER BODY */}
      <div className="ide-main-layout">
        {/* LEFT PROJECT EXPLORER */}
        <aside className="ide-explorer">
          <div className="explorer-header">
            <span>Project</span>
            <ChevronDown size={14} className="explorer-chevron" />
          </div>

          <div className="explorer-tree">
            {/* Root Folder: mahak-portfolio */}
            <div className="tree-node">
              <div
                className="tree-row folder-row"
                onClick={() => toggleFolder('mahakPortfolio')}
              >
                {openFolders.mahakPortfolio ? (
                  <ChevronDown size={14} className="tree-chevron" />
                ) : (
                  <ChevronRight size={14} className="tree-chevron" />
                )}
                <Folder size={15} className="folder-icon" />
                <span className="node-text">mahak-portfolio</span>
              </div>

              {openFolders.mahakPortfolio && (
                <div className="tree-children">
                  {/* .idea */}
                  <div
                    className="tree-row folder-row"
                    onClick={() => toggleFolder('idea')}
                  >
                    {openFolders.idea ? (
                      <ChevronDown size={14} className="tree-chevron" />
                    ) : (
                      <ChevronRight size={14} className="tree-chevron" />
                    )}
                    <Folder size={15} className="folder-icon" />
                    <span className="node-text">.idea</span>
                  </div>

                  {/* src */}
                  <div
                    className="tree-row folder-row"
                    onClick={() => toggleFolder('src')}
                  >
                    {openFolders.src ? (
                      <ChevronDown size={14} className="tree-chevron" />
                    ) : (
                      <ChevronRight size={14} className="tree-chevron" />
                    )}
                    <Folder size={15} className="folder-icon" />
                    <span className="node-text">src</span>
                  </div>

                  {openFolders.src && (
                    <div className="tree-children">
                      {/* main */}
                      <div
                        className="tree-row folder-row"
                        onClick={() => toggleFolder('main')}
                      >
                        {openFolders.main ? (
                          <ChevronDown size={14} className="tree-chevron" />
                        ) : (
                          <ChevronRight size={14} className="tree-chevron" />
                        )}
                        <Folder size={15} className="folder-icon" />
                        <span className="node-text">main</span>
                      </div>

                      {openFolders.main && (
                        <div className="tree-children">
                          {/* java */}
                          <div
                            className="tree-row folder-row"
                            onClick={() => toggleFolder('java')}
                          >
                            {openFolders.java ? (
                              <ChevronDown size={14} className="tree-chevron" />
                            ) : (
                              <ChevronRight size={14} className="tree-chevron" />
                            )}
                            <Folder size={15} className="folder-icon" />
                            <span className="node-text">java</span>
                          </div>

                          {/* resources */}
                          <div
                            className="tree-row folder-row"
                            onClick={() => toggleFolder('resources')}
                          >
                            {openFolders.resources ? (
                              <ChevronDown size={14} className="tree-chevron" />
                            ) : (
                              <ChevronRight size={14} className="tree-chevron" />
                            )}
                            <Folder size={15} className="folder-icon" />
                            <span className="node-text">resources</span>
                          </div>

                          {openFolders.resources && (
                            <div className="tree-children">
                              {/* SELECTED FILE: application.yml */}
                              <div className="tree-row file-row selected">
                                <img
                                  src="/images/application-yml-leaf-crop.png"
                                  alt="YAML"
                                  className="yaml-leaf-img"
                                />
                                <span className="node-text selected-file-text">
                                  application.yml
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Other Root Files */}
                  <div className="tree-row file-row">
                    <FileText size={15} className="file-icon" />
                    <span className="node-text">.gitignore</span>
                  </div>

                  <div className="tree-row file-row">
                    <File size={15} className="file-icon" />
                    <span className="node-text">README.md</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* CENTER CODE EDITOR */}
        <main className="ide-editor-container">
          {/* EDITOR TAB BAR */}
          <div className="editor-tab-bar">
            <div className="editor-tab active">
              <img
                src="/images/application-yml-leaf-crop.png"
                alt="YAML"
                className="yaml-tab-leaf-img"
              />
              <span className="tab-filename">application.yml</span>
              <span className="tab-close">×</span>
            </div>
          </div>

          {/* CODE EDITOR VIEWPORT */}
          <div className="editor-viewport">
            {/* LINE NUMBERS */}
            <div className="editor-line-numbers">
              {yamlLines.map((item) => (
                <div key={item.line} className="editor-line-num">
                  {item.line}
                </div>
              ))}
            </div>

            {/* YAML CONTENT */}
            <div className="editor-code-content font-mono">
              {yamlLines.map((item) => {
                if (item.type === 'comment') {
                  return (
                    <div key={item.line} className="code-line comment-line">
                      {item.content}
                    </div>
                  );
                }
                if (item.type === 'key') {
                  return (
                    <div key={item.line} className="code-line key-line">
                      <span className="yaml-key">{item.content}</span>
                    </div>
                  );
                }
                if (item.type === 'subkey') {
                  return (
                    <div key={item.line} className="code-line subkey-line">
                      <span className="yaml-key">{item.content}</span>
                    </div>
                  );
                }
                if (item.type === 'item') {
                  const dashIndex = item.content.indexOf('-');
                  const indent = item.content.substring(0, dashIndex);
                  const val = item.content.substring(dashIndex + 1);
                  return (
                    <div key={item.line} className="code-line item-line">
                      <span>{indent}</span>
                      <span className="yaml-bullet">-</span>
                      <span className="yaml-value">{val}</span>
                    </div>
                  );
                }
                return <div key={item.line} className="code-line blank-line">&nbsp;</div>;
              })}
            </div>
          </div>
        </main>
      </div>

      {/* BOTTOM STATUS BAR */}
      <footer className="ide-status-bar">
        <div className="status-left">
          <span className="status-item">📁 mahak-portfolio</span>
          <span className="status-sep">›</span>
          <span className="status-item">src</span>
          <span className="status-sep">›</span>
          <span className="status-item">main</span>
          <span className="status-sep">›</span>
          <span className="status-item">resources</span>
          <span className="status-sep">›</span>
          <span className="status-item">application.yml</span>
        </div>

        <div className="status-right">
          <span className="status-item">UTF-8</span>
          <span className="status-item">LF</span>
          <span className="status-item">YAML</span>
        </div>
      </footer>
    </div>
  );
};
