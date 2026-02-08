import React from 'react';
import { GitBranch, RefreshCw, Bell } from 'lucide-react';

const StatusBar = () => {
    return (
        <div className="statusBar">
            <div className="left">
                <span><GitBranch size={12} /> main*</span>
                <span><RefreshCw size={12} /> 0</span>
            </div>
            <div className="right">
                <span>Spaces: 2</span>
                <span>UTF-8</span>
                <span>React Portfolio</span>
                <span className="launch">Ready to Launch!</span>
                <Bell size={12} />
            </div>

            <style>{`
        .statusBar {
          height: 22px;
          background-color: #007acc;
          color: white;
          display: flex;
          align-items: center;
          padding: 0 10px;
          font-size: 11px;
          justify-content: space-between;
        }

        .left, .right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .left span, .right span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .launch {
          font-weight: bold;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default StatusBar;
