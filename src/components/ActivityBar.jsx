import React from 'react';
import { Files, Search, GitBranch, Github, UserCircle, Settings, MessageSquare } from 'lucide-react';

const ActivityBar = ({ activeGithub, onGithubClick, onExplorerClick }) => {
    return (
        <div className="activityBar">
            <div
                className={"icon " + (activeGithub ? '' : "active")}
                onClick={onExplorerClick}
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
                className={"icon " + (activeGithub ? "active" : '')}
                onClick={onGithubClick}
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
