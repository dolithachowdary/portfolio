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
          className={`titleIcon ${isChatOpen ? 'active' : ''}`}
          onClick={onChatToggle}
          title="Toggle Chat (Ctrl+Alt+I)"
        >
          <MessageSquare size={16} />
        </div>
        <Minus size={14} />
        <Square size={12} />
        <X size={14} />
      </div>

      <style>{`
        .titleBar {
          height: 35px;
          background-color: #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
          font-size: 13px;
          color: #858585;
          border-bottom: 1px solid #333333;
          user-select: none;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .center {
          flex: 1;
          text-align: center;
          color: #cccccc;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .titleIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }

        .titleIcon:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .titleIcon.active {
          color: #007acc;
        }
      `}</style>
    </div>
  );
};

export default TitleBar;
