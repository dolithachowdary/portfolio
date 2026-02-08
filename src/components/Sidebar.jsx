import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Code2, Box, Image, FileDigit, Briefcase } from 'lucide-react';

const EXPLORER_DATA = [
    {
        id: 'about',
        name: 'about_me.md',
        type: 'file',
        icon: 'file-text',
        content: {
            type: 'markdown',
            title: "Hello, I'm Dolitha Chowdary",
            subtitle: 'const profile = { name: "Dolitha Chowdary", role: "Final-year CS Student & DRDO Intern" };',
            body: `I am currently a final-year Computer Science student and an intern at DRDO. I am passionate about Data Science, Machine Learning, and building impactful software solutions. I specialize in Python and have experience with predictive modeling, real-time transcription, and advanced data structures.`
        }
    },
    {
        id: 'skills',
        name: 'skills.json',
        type: 'file',
        icon: 'code-2',
        content: {
            type: 'json',
            data: {
                languages: ['Python', 'JavaScript', 'SQL', 'C++'],
                frameworks: ['React', 'FastAPI', 'Streamlit', 'TensorFlow', 'PyTorch'],
                tools: ['Docker', 'Git', 'Linux', 'Whisper', 'OpenCV']
            }
        }
    },
    {
        id: 'projects-folder',
        name: 'projects',
        type: 'folder',
        children: [
            {
                id: 'project1',
                name: 'Summer-of-DSA.py',
                type: 'file',
                icon: 'code-2',
                content: {
                    type: 'project',
                    title: 'Summer-of-DSA',
                    description: 'Advanced Data Structures & Algorithms solutions practiced during summer training.',
                    link: 'https://github.com/dolithachowdary/Summer-of-DSA',
                    tags: ['Python', 'DSA', 'Algorithms']
                }
            },
            {
                id: 'project2',
                name: 'heart_pred.py',
                type: 'file',
                icon: 'image',
                content: {
                    type: 'project',
                    title: 'Heart Disease Prediction',
                    description: 'Prediction of heart disease using retina images via deep learning.',
                    link: 'https://projectheartdisease.streamlit.app/',
                    tags: ['Python', 'Deep Learning', 'Streamlit']
                }
            },
            {
                id: 'project3',
                name: 'meeting_transcriber.js',
                type: 'file',
                icon: 'box',
                content: {
                    type: 'project',
                    title: 'Meeting Transcriber',
                    description: 'Real-time speech-to-text with speaker identification using Whisper.',
                    link: 'https://github.com/dolithachowdary/Meeting-transcriber',
                    tags: ['JavaScript', 'FastAPI', 'AI']
                }
            }
        ]
    },
    {
        id: 'resume',
        name: 'resume.pdf',
        type: 'file',
        icon: 'file-digit',
        content: {
            type: 'iframe',
            url: '/resume.pdf'
        }
    }
];

const SidebarSection = ({ title, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={`section ${isOpen ? 'open' : ''}`}>
            <div className="sectionHeader" onClick={() => setIsOpen(!isOpen)}>
                <div className="chevron">
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
                <span>{title}</span>
            </div>
            <div className="sectionContentWrapper">
                <div className="sectionContent">{children}</div>
            </div>
        </div>
    );
};

const Sidebar = ({ onFileClick, activeFileId }) => {
    const [collapsedFolders, setCollapsedFolders] = useState(new Set());

    const toggleFolder = (id) => {
        const newCollapsed = new Set(collapsedFolders);
        if (newCollapsed.has(id)) newCollapsed.delete(id);
        else newCollapsed.add(id);
        setCollapsedFolders(newCollapsed);
    };

    const renderTree = (items, depth = 0) => {
        return items.map(item => {
            const isFolder = item.type === 'folder';
            const isCollapsed = collapsedFolders.has(item.id);

            return (
                <div key={item.id}>
                    <div
                        className={`treeItem ${activeFileId === item.id ? 'active' : ''}`}
                        style={{ paddingLeft: `${15 + depth * 15}px` }}
                        onClick={() => isFolder ? toggleFolder(item.id) : onFileClick(item)}
                    >
                        {isFolder ? (
                            isCollapsed ? <ChevronRight size={18} /> : <ChevronDown size={18} />
                        ) : (
                            getIcon(item.icon)
                        )}
                        <span>{item.name}</span>
                    </div>
                    {isFolder && !isCollapsed && item.children && renderTree(item.children, depth + 1)}
                </div>
            );
        });
    };

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'file-text': return <FileText size={18} />;
            case 'code-2': return <Code2 size={18} />;
            case 'box': return <Box size={18} />;
            case 'image': return <Image size={18} />;
            case 'file-digit': return <FileDigit size={18} />;
            default: return <FileText size={18} />;
        }
    };

    return (
        <div className="sidebar">
            <div className="explorerContainer">
                <SidebarSection title="Explorer">
                    <div className="explorerTree">
                        {renderTree(EXPLORER_DATA)}
                    </div>
                </SidebarSection>
            </div>

            <div className="bottomSections">
                <SidebarSection title="Outline" defaultOpen={false}>
                    <div className="outline">No symbols found in this file</div>
                </SidebarSection>

                <SidebarSection title="Timeline">
                    <div className="timeline" id="sidebar-timeline">
                        <div className="timelineItem">
                            <div className="timelinePoint"><Briefcase size={14} /></div>
                            <div className="timelineInfo">
                                <strong>2023 - Present</strong>
                                <span>Software Engineer Intern</span>
                                <small>TechNova Solutions</small>
                            </div>
                        </div>
                        <div className="timelineItem">
                            <div className="timelinePoint"><Briefcase size={14} /></div>
                            <div className="timelineInfo">
                                <strong>2022 - 2023</strong>
                                <span>Open Source Contributor</span>
                                <small>React & Documentation</small>
                            </div>
                        </div>
                    </div>
                </SidebarSection>
            </div>

            <style>{`
        .sidebar {
          width: 260px;
          background-color: #252526;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #1e1e1e;
          height: 100%;
          flex-shrink: 0;
          user-select: none;
        }

        .explorerContainer {
          flex: 1;
          overflow-y: auto;
          min-height: 0;
        }

        .bottomSections {
          flex-shrink: 0;
          border-top: 1px solid #333333;
        }

        .section {
          display: flex;
          flex-direction: column;
        }

        .sectionHeader {
          display: flex;
          align-items: center;
          gap: 2px;
          padding: 4px 4px;
          background-color: #37373d;
          font-size: 11px;
          text-transform: uppercase;
          color: #cccccc;
          font-weight: bold;
          cursor: pointer;
          border-bottom: 1px solid #252526;
        }

        .sectionHeader:hover {
          color: #ffffff;
        }

        .sectionHeader .chevron {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #cccccc;
        }

        .sectionContentWrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.2s ease-out;
          overflow: hidden;
        }

        .section.open .sectionContentWrapper {
          grid-template-rows: 1fr;
        }

        .sectionContent {
          min-height: 0;
        }

        .treeItem {
          display: flex;
          align-items: center;
          padding: 4px 10px;
          gap: 8px;
          font-size: 13px;
          cursor: pointer;
          color: #cccccc;
        }

        .treeItem:hover {
          background-color: #2a2d2e;
        }

        .treeItem.active {
          background-color: #37373d;
          color: #ffffff;
        }

        .timeline {
          padding: 10px 15px;
        }

        .timelineItem {
          border-left: 1px solid #333333;
          padding-left: 15px;
          padding-bottom: 20px;
          position: relative;
        }

        .timelinePoint {
          position: absolute;
          left: -8px;
          top: 0;
          background: #252526;
          color: #007acc;
        }

        .timelineInfo {
          display: flex;
          flex-direction: column;
          font-size: 11px;
        }

        .timelineInfo strong {
          font-size: 12px;
          color: #007acc;
        }

        .timelineInfo span {
          color: #cccccc;
        }

        .timelineInfo small {
          color: #858585;
        }

        .outline {
          padding: 10px 20px;
          font-size: 11px;
          color: #858585;
          font-style: italic;
        }
      `}</style>
        </div>
    );
};

export default Sidebar;
