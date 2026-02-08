import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import Portfolio from './pages/Portfolio';

const App = () => {
  const [activeFile, setActiveFile] = useState({ name: 'about_me.md' });
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'i') {
        e.preventDefault();
        setIsChatOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="app">
      <TitleBar
        activeFileName={activeFile?.name || 'VSC Portfolio'}
        isChatOpen={isChatOpen}
        onChatToggle={() => setIsChatOpen(!isChatOpen)}
      />
      <Portfolio
        onFileChange={setActiveFile}
        isChatOpen={isChatOpen}
        onChatClose={() => setIsChatOpen(false)}
      />

      <style>{`
              #app {
                display: flex;
                flex-direction: column;
                height: 100vh;
              }
              body {
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #1e1e1e;
              }
            `}</style>
    </div>
  );
};

export default App;
