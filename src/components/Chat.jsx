import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';

const CHAT_FAQ = [
  {
    id: 1,
    q: "What kind of projects do you enjoy working on?",
    a: "Projects that solve real problems — automation, productivity tools, data processing, or systems that run fully offline."
  },
  {
    id: 2,
    q: "How do you balance academics, projects, and placements?",
    a: "By prioritizing fundamentals, building meaningful projects, and being consistent rather than perfect."
  },
  {
    id: 3,
    q: "What are you currently improving at?",
    a: "System design thinking, DSA under interview constraints, and writing cleaner APIs."
  },
  {
    id: 4,
    q: "What kind of problems excite you the most?",
    a: "The messy ones. Ambiguous briefs, half-formed ideas, and “we don’t know what we want yet” problems are my favorite starting points."
  }
];

const Chat = ({ isOpen, onClose }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleQuestion = (id) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="chat-content">
        <div className="chat-header">
          <div className="header-info">
            <span className="title">Alex's FAQ's</span>
            <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <X size={16} className="close-btn" onClick={onClose} />
        </div>

        <div className="chat-messages faq-mode">
          {CHAT_FAQ.map((faq) => {
            const isExpanded = expandedIds.includes(faq.id);
            return (
              <div key={faq.id} className="faq-item">
                <div className="question-row" onClick={() => toggleQuestion(faq.id)}>
                  <div className="bubble question">
                    {faq.q}
                  </div>
                  <div className="toggle-icon">
                    {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>
                {isExpanded && (
                  <div className="answer-row">
                    <div className="bubble answer">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .chat-sidebar {
          width: 0;
          opacity: 0;
          background-color: #252526;
          border-left: 0px solid transparent;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, border-color 0.3s ease;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          pointer-events: none;
        }

        .chat-sidebar.open {
          width: 360px;
          opacity: 1;
          border-left: 1px solid #333333;
          pointer-events: auto;
        }

        .chat-content {
          width: 360px;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .chat-header {
          padding: 15px 20px;
          background-color: #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #333333;
        }

        .header-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .header-info .title {
          font-size: 13px;
          font-weight: 600;
          color: #cccccc;
        }

        .header-info .time {
          font-size: 10px;
          color: #858585;
          margin-top: 2px;
        }

        .chat-header .close-btn {
          cursor: pointer;
          color: #8e8e93;
          transition: color 0.2s;
        }

        .chat-header .close-btn:hover {
          color: #ffffff;
        }

        .chat-messages.faq-mode {
          flex: 1;
          overflow-y: auto;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .question-row {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          max-width: 90%;
        }

        .answer-row {
          align-self: flex-end;
          max-width: 85%;
          animation: bubblyAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
          transform-origin: top right;
        }

        .bubble {
          padding: 12px 16px;
          border-radius: 20px;
          font-size: 14px;
          line-height: 1.4;
          word-wrap: break-word;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .bubble.question {
          background-color: #3e3e42;
          color: #ffffff;
          font-weight: 500;
          border-bottom-left-radius: 4px;
        }

        .bubble.answer {
          background-color: #007acc;
          color: #ffffff;
          border-bottom-right-radius: 4px;
        }

        .toggle-icon {
          color: #8e8e93;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        .question-row:hover .toggle-icon {
          color: #ffffff;
          transform: scale(1.1);
        }

        .question-row:active .bubble {
          transform: scale(0.98);
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes bubblyAppear {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(-10px); 
          }
          70% {
            transform: scale(1.05) translateY(2px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
      `}</style>
    </div>
  );
};

export default Chat;
