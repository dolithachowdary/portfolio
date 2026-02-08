import React from 'react';
import { Files, Search, GitBranch, Github, UserCircle, Settings, MessageSquare } from 'lucide-react';

const ActivityBar = ({ activeGithub, onGithubClick, onExplorerClick }) => {
    return (
        <div className="activityBar">
            <div
                className={"icon has-tooltip " + (activeGithub ? '' : "active")}
                onClick={onExplorerClick}
                data-tooltip="( open me )"
            >
                <Files size={24} />
            </div>
            <div className="icon">
                <Search size={24} />
            </div>
            <div className="icon">
                <GitBranch size={24} />
            </div>
            <div
                className={"icon has-tooltip " + (activeGithub ? "active" : '')}
                onClick={onGithubClick}
                data-tooltip="( open me )"
            >
                <Github size={24} />
            </div>
            <div style={{ flex: 1 }}></div>
            <div className="icon">
                <UserCircle size={24} />
            </div>
            <div className="icon">
                <Settings size={24} />
            </div>

            <style>{`
        .activityBar {
          width: 50px;
          background-color: #1e1e1e;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 15px;
          gap: 20px;
          border-right: 1px solid #333333;
          position: relative;
        }

        .has-tooltip {
          position: relative;
        }

        .has-tooltip::after {
          content: attr(data-tooltip);
          position: absolute;
          left: 80%;
          top: 50%;
          transform: translateY(-50%) scale(0.9);
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
          margin-left: 5px;
        }

        .has-tooltip:hover::after {
          opacity: 1;
          transform: translateY(-50%) scale(1);
          left: 100%;
        }

        .icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #858585;
          cursor: pointer;
          transition: color 0.2s;
          position: relative;
        }

        .icon:hover {
          color: #ffffff;
        }

        .active {
          color: #ffffff;
        }

        .active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background-color: #ffffff;
        }
      `}</style>
        </div>
    );
};

export default ActivityBar;
