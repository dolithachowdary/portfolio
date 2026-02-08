import React from 'react';
import { Menu, Minus, Square, X, MessageSquare } from 'lucide-react';

const TitleBar = ({ activeFileName, isChatOpen, onChatToggle }) => {
  return (
    <div className="titleBar">
      <div className="left">
        <Menu size={14} />
        <span>Portfolio - Visual Studio Code</span>
      </div>
      <div className="center">
        {activeFileName} - Portfolio
      </div>
      <div className="right">
        <div
          className={`chatToggle has-tooltip ${isChatOpen ? 'active' : ''}`}
          onClick={onChatToggle}
          data-tooltip="( open me )"
        >
          <MessageSquare size={16} />
          <span>Chat</span>
        </div>
        <div className="windowControls">
          <div className="controlIcon"><Minus size={14} /></div>
          <div className="controlIcon"><Square size={12} /></div>
          <div className="controlIcon close"><X size={14} /></div>
        </div>
      </div>

      <style>{`
        .titleBar {
          height: 35px;
          background-color: #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0;
          font-size: 13px;
          color: #858585;
          border-bottom: 1px solid #333333;
          user-select: none;
          position: relative;
        }

        .has-tooltip {
          position: relative;
        }

        .has-tooltip::after {
          content: attr(data-tooltip);
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) scale(0.9);
          background-color: #ffffff;
          color: #000000;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 1000;
        }

        .has-tooltip:hover::after {
          opacity: 1;
          transform: translateX(-50%) scale(1);
          top: 110%;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 10px;
        }

        .center {
          flex: 1;
          text-align: center;
          color: #cccccc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0 20px;
        }

        .right {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .chatToggle {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          padding: 0 12px;
          height: 100%;
          transition: background 0.2s, color 0.2s;
          margin-right: 15px; /* Separation from window controls */
          border-radius: 4px;
        }

        .chatToggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .chatToggle.active {
          color: #007acc;
        }

        .chatToggle span {
          font-size: 12px;
          font-weight: 500;
        }

        .windowControls {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .controlIcon {
          width: 45px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }

        .controlIcon:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .controlIcon.close:hover {
          background-color: #e81123;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default TitleBar;
