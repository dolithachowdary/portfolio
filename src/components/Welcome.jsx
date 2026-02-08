import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="content">
        <div className="welcome-msg">
          <span className="small">welcome to my</span>
          <h1 className="main-title">portfolio<span>.</span></h1>
        </div>

        <div className="shortcuts">
          <div className="shortcut-item">
            <span className="label">Open Chat</span>
            <span className="key">Ctrl</span> + <span className="key">I</span>
          </div>
          <div className="shortcut-item">
            <span className="label">Github Profile</span>
            <span className="key">Ctrl</span> + <span className="key">Alt</span> + <span className="key">K</span>
          </div>
          <div className="shortcut-item">
            <span className="label">Home Page</span>
            <span className="key">Ctrl</span> + <span className="key">Shift</span> + <span className="key">H</span>
          </div>
          <div className="shortcut-item">
            <span className="label">View Timeline</span>
            <span className="key">Ctrl</span> + <span className="key">T</span>
          </div>
        </div>
      </div>

      <style>{`
        .welcome-container {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1e1e1e;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          color: #cccccc;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .welcome-container::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, #1e1e1e 80%);
          pointer-events: none;
        }

        .content {
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          text-align: center;
        }

        .welcome-msg {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .main-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 4rem;
          font-weight: 300;
          margin: 0;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .main-title span {
          color: #007acc;
        }

        .welcome-msg .small {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.4rem;
          font-weight: 300;
          color: #858585;
          letter-spacing: 0.5px;
          display: block;
        }

        .shortcuts {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
          width: 100%;
          max-width: 400px;
        }

        .shortcut-item {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 14px;
          color: #858585;
        }

        .shortcut-item .label {
          flex: 1;
          text-align: left;
        }

        .key {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 2px 6px;
          margin: 0 4px;
          font-family: 'JetBrains Mono', monospace;
          color: #cccccc;
          font-size: 12px;
          min-width: 30px;
          display: inline-block;
          text-align: center;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .main-title { font-size: 3rem; }
          .welcome-msg .small { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
