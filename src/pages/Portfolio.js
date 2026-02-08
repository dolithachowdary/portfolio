import React, { useState, useEffect } from 'react';
import ActivityBar from '../components/ActivityBar';
import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';
import StatusBar from '../components/StatusBar';
import Chat from '../components/Chat';
import Welcome from '../components/Welcome';

const INITIAL_FILE = {
    id: 'about',
    name: 'about_me.md',
    type: 'file',
    icon: 'file-text',
    content: {
        type: 'markdown',
        title: "Hello, I'm Alex Chen",
        subtitle: 'const profile = { name: "Alex Chen", role: "Full Stack Developer" };',
        body: `I am currently a senior Computer Science student at Global University of Technology. I specialize in building distributed systems and high-performance web applications. When I'm not debugging threads, I'm contributing to open-source or tinkering with hardware.`
    }
};

const Portfolio = ({ onFileChange, isChatOpen, onChatClose }) => {
    const [openTabs, setOpenTabs] = useState([]);
    const [activeFileId, setActiveFileId] = useState(null);
    const [isGithubOpen, setIsGithubOpen] = useState(false);

    const handleFileClick = (file) => {
        if (!openTabs.find(t => t.id === file.id)) {
            setOpenTabs([...openTabs, file]);
        }
        setActiveFileId(file.id);
        onFileChange(file);
        setIsGithubOpen(false);
    };

    const handeGithubClick = () => {
        const githubFile = {
            id: 'github-page',
            name: 'github.com/dolithachowdary',
            icon: 'github',
            content: {
                type: 'github-mock'
            }
        };
        if (!openTabs.find(t => t.id === githubFile.id)) {
            setOpenTabs([...openTabs, githubFile]);
        }
        setActiveFileId(githubFile.id);
        onFileChange(githubFile);
        setIsGithubOpen(true);
    };

    const handleTabClick = (tab) => {
        setActiveFileId(tab.id);
        onFileChange(tab);
        setIsGithubOpen(tab.id === 'github-page');
    };

    const handleCloseTab = (id) => {
        const newTabs = openTabs.filter(t => t.id !== id);
        setOpenTabs(newTabs);

        if (activeFileId === id) {
            if (newTabs.length > 0) {
                const lastTab = newTabs[newTabs.length - 1];
                setActiveFileId(lastTab.id);
                onFileChange(lastTab);
                setIsGithubOpen(lastTab.id === 'github-page');
            } else {
                setActiveFileId(null);
                onFileChange(null);
                setIsGithubOpen(false);
            }
        }
    };

    const handleExplorerClick = () => {
        if (isGithubOpen) {
            setActiveFileId(null);
            setOpenTabs(openTabs.filter(t => t.id !== 'github-page'));
            setIsGithubOpen(false);
            onFileChange(null);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl + Alt + K: Open GitHub
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                handeGithubClick();
            }
            // Ctrl + Shift + H: Home (Welcome)
            if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
                e.preventDefault();
                handleExplorerClick();
                setActiveFileId(null);
                onFileChange(null);
            }
            // Ctrl + T: Timeline (Scroll to sidebar section)
            if (e.ctrlKey && !e.altKey && !e.shiftKey && e.key.toLowerCase() === 't') {
                e.preventDefault();
                const timelineSection = document.getElementById('sidebar-timeline');
                if (timelineSection) {
                    timelineSection.scrollIntoView({ behavior: 'smooth' });
                    // Visual feedback: brief highlight
                    timelineSection.style.backgroundColor = 'rgba(0, 122, 204, 0.3)';
                    setTimeout(() => {
                        timelineSection.style.backgroundColor = '';
                    }, 1000);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isGithubOpen, openTabs, activeFileId]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 35px)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
                <ActivityBar
                    activeGithub={isGithubOpen}
                    onGithubClick={handeGithubClick}
                    onExplorerClick={handleExplorerClick}
                />

                <Sidebar
                    onFileClick={handleFileClick}
                    activeFileId={activeFileId}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {activeFileId ? (
                        <Editor
                            openTabs={openTabs}
                            activeFileId={activeFileId}
                            onTabClick={handleTabClick}
                            onCloseTab={handleCloseTab}
                        />
                    ) : (
                        <Welcome />
                    )}
                </div>

                <Chat isOpen={isChatOpen} onClose={onChatClose} />
            </div>
            <StatusBar />
        </div>
    );
};

export default Portfolio;
