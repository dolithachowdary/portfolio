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
            title: "Hello, I'm Alex Chen",
            subtitle: 'const profile = { name: "Alex Chen", role: "Full Stack Developer" };',
            body: `I am currently a senior Computer Science student at Global University of Technology. I specialize in building distributed systems and high-performance web applications. When I'm not debugging threads, I'm contributing to open-source or tinkering with hardware.`
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
                languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java'],
                frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI'],
                tools: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Linux']
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
                name: 'quantum_ledger.js',
                type: 'file',
                icon: 'box',
                content: {
                    type: 'project',
                    title: 'Quantum Ledger V2',
                    description: 'A blockchain-based inventory system using Go and React.',
                    link: '#',
                    tags: ['Go', 'React', 'Blockchain']
                }
            },
            {
                id: 'project2',
                name: 'ai_vision.py',
                type: 'file',
                icon: 'image',
                content: {
                    type: 'project',
                    title: 'AI Vision Engine',
                    description: 'Real-time object detection and classification system.',
                    link: '#',
                    tags: ['Python', 'PyTorch', 'OpenCV']
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
                    <div className="timeline">
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
