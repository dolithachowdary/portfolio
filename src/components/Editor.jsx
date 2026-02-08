import React from 'react';
import { X, FileText, Code2, Box, Image, FileDigit, Github } from 'lucide-react';
import GithubMock from './GithubMock';

const Editor = ({ openTabs, activeFileId, onTabClick, onCloseTab }) => {
  const activeFile = openTabs.find(t => t.id === activeFileId);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'file-text': return <FileText size={14} />;
      case 'code-2': return <Code2 size={14} />;
      case 'box': return <Box size={14} />;
      case 'image': return <Image size={14} />;
      case 'file-digit': return <FileDigit size={14} />;
      case 'github': return <Github size={14} />;
      default: return <FileText size={14} />;
    }
  };

  const renderContent = () => {
    if (!activeFile) return null;

    const { content } = activeFile;

    if (content.type === 'markdown') {
      return (
        <div className="contentScroll markdown">
          <div className="contentMd">
            <h1>{content.title}</h1>
            <div className="codeBlock">
              <code>{content.subtitle}</code>
            </div>
            <p>{content.body}</p>
            <h2 style={{ marginTop: '40px' }}>My Expertise</h2>
            <div className="expertiseGrid">
              <div className="card">
                <h3>Frontend</h3>
                <p>React, Next.js, and CSS Modules.</p>
              </div>
              <div className="card">
                <h3>Backend</h3>
                <p>Node.js, Go, and Scalable APIs.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (content.type === 'json') {
      return (
        <div className="contentScroll json">
          <pre className="codeView">
            {JSON.stringify(content.data, null, 2)}
          </pre>
        </div>
      );
    }

    if (content.type === 'github-mock') {
      return <GithubMock />;
    }

    if (content.type === 'project' || content.type === 'iframe') {
      return (
        <iframe
          src={content.url || '#'}
          className="iframe"
          title={activeFile.name}
        />
      );
    }

    return <div>Unsupported content type</div>;
  };

  return (
    <div className="editorArea">
      <div className="tabsContainer">
        {openTabs.map(tab => (
          <div
            key={tab.id}
            className={`tab ${activeFileId === tab.id ? 'active' : ''}`}
            onClick={() => onTabClick(tab)}
          >
            {getIcon(tab.icon)}
            <span>{tab.name}</span>
            <div className="closeWrapper" onClick={(e) => {
              e.stopPropagation();
              onCloseTab(tab.id);
            }}>
              <X size={14} />
            </div>
          </div>
        ))}
      </div>
      <div className="contentArea">
        {renderContent()}
      </div>

      <style>{`
        .editorArea {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #1e1e1e;
          overflow: hidden;
        }

        .tabsContainer {
          height: 35px;
          background-color: #252526;
          display: flex;
          overflow-x: auto;
        }

        .tab {
          display: flex;
          align-items: center;
          padding: 0 10px;
          background-color: #2d2d2d;
          border-right: 1px solid #333333;
          cursor: pointer;
          font-size: 13px;
          color: #858585;
          gap: 8px;
          min-width: 120px;
          position: relative;
        }

        .tab.active {
          background-color: #1e1e1e;
          color: #ffffff;
          border-top: 1px solid #007acc;
        }

        .closeWrapper {
          margin-left: auto;
          opacity: 0;
          padding: 2px;
          border-radius: 3px;
        }

        .tab:hover .closeWrapper {
          opacity: 1;
        }

        .closeWrapper:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .contentArea {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .contentScroll {
          flex: 1;
          overflow-y: auto;
          padding: 40px 60px;
        }

        .contentMd {
          max-width: 900px;
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .codeBlock {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
          color: #c586c0;
          font-family: 'JetBrains Mono', monospace;
        }

        .codeView {
          font-family: 'JetBrains Mono', monospace;
          color: #9cdcfe;
          font-size: 14px;
        }

        .iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #fff;
        }

        .expertiseGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          background: rgba(255, 255, 255, 0.03);
          padding: 20px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Editor;
