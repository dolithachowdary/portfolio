import React from 'react';
import { Github, Star, GitBranch, MapPin, Link as LinkIcon, Mail, Users, BookOpen } from 'lucide-react';

const GithubMock = () => {
    const pinnedRepos = [
        {
            name: 'Summer-of-DSA',
            desc: 'This repo contains all the advanced Data Structures & Algorithms (DSA) problems and solutions I practiced during my summer training/classes — organized day-wise and written in Python 🐍.',
            lang: 'Python',
            color: '#3572A5',
            stars: 1,
            forks: 0
        },
        {
            name: 'heart-disease-prediction-with-retina-image',
            desc: 'Prediction of heart disease using retina images, view the application at https://projectheartdisease.streamlit.app/',
            lang: 'Python',
            color: '#3572A5',
            stars: 1,
            forks: 0
        },
        {
            name: 'leetcode-practice',
            desc: 'A collection of LeetCode questions to ace the coding interview! - Created using [LeetHub v2]',
            lang: 'Python',
            color: '#3572A5',
            stars: 1,
            forks: 0
        },
        {
            name: 'Meeting-transcriber',
            desc: 'Real-time speech-to-text application that transcribes meetings with speaker identification using Whisper and PyAnnotate. Built with FastAPI and React, it offers offline support, live transcription',
            lang: 'JavaScript',
            color: '#f1e05a',
            stars: 1,
            forks: 0
        }
    ];

    return (
        <div className="github-container">
            <div className="github-profile">
                <div className="avatar">
                    <Github size={120} />
                </div>
                <h1 className="name">Dolitha Chowdary</h1>
                <p className="username">dolithachowdary · she/her</p>
                <p className="bio">Final-year CS student 👩‍💻 | DRDO Intern 🔬 | ☕ Runs on coffee & code </p>

                <a
                    href="https://github.com/dolithachowdary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edit-btn"
                    style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                    View profile
                </a>

                <div className="stats">
                    <div className="stat-item">
                        <Users size={16} />
                        <span><strong>3</strong> followers</span>
                    </div>
                    <div className="stat-item">
                        <span>• <strong>4</strong> following</span>
                    </div>
                </div>

                <div className="details">
                    <div className="detail-item">
                        <MapPin size={16} />
                        <span>hyderabad</span>
                    </div>
                    <div className="detail-item" title="Go to LinkedIn">
                        <LinkIcon size={16} />
                        <a href="https://linkedin.com/in/dolitha-chowdary" target="_blank" rel="noopener noreferrer">in/dolitha-chowdary</a>
                    </div>
                    <div className="detail-item" title="Go to LeetCode">
                        <LinkIcon size={16} />
                        <a href="https://leetcode.com/u/dolithadasari1209/" target="_blank" rel="noopener noreferrer">leetcode.com/u/dolithadasari1209/</a>
                    </div>
                </div>
            </div>

            <div className="github-content">
                <div className="nav-tabs">
                    <a href="https://github.com/dolithachowdary" target="_blank" rel="noopener noreferrer" className="tab active" title="Go to GitHub Overview"><BookOpen size={16} /> Overview</a>
                    <a href="https://github.com/dolithachowdary" target="_blank" rel="noopener noreferrer" className="tab" title="Go to GitHub Repositories"><Github size={16} /> Repositories <span>12</span></a>
                    <a href="https://github.com/dolithachowdary" target="_blank" rel="noopener noreferrer" className="tab">Projects</a>
                    <a href="https://github.com/dolithachowdary" target="_blank" rel="noopener noreferrer" className="tab">Packages</a>
                    <a href="https://github.com/dolithachowdary" target="_blank" rel="noopener noreferrer" className="tab">Stars <span>3</span></a>
                </div>

                <div className="pinned-section">
                    <div className="section-title">Pinned</div>
                    <div className="repos-grid">
                        {pinnedRepos.map((repo, i) => (
                            <a
                                key={i}
                                href={`https://github.com/dolithachowdary/${repo.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repo-card"
                                title="Go to GitHub repository"
                            >
                                <div className="repo-header">
                                    <span className="repo-name">{repo.name}</span>
                                    <span className="repo-public">Public</span>
                                </div>
                                <p className="repo-desc">{repo.desc}</p>
                                <div className="repo-footer">
                                    <div className="lang">
                                        <div className="dot" style={{ backgroundColor: repo.color }}></div>
                                        <span>{repo.lang}</span>
                                    </div>
                                    <div className="stat">
                                        <Star size={14} />
                                        <span>{repo.stars}</span>
                                    </div>
                                    <div className="stat">
                                        <GitBranch size={14} />
                                        <span>{repo.forks}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="heatmap-section">
                    <div className="section-title">842 contributions in the last year</div>
                    <div className="github-activity-graph">
                        <img
                            src="/github-snake-dark (1).svg"
                            alt="GitHub Contribution Snake"
                            style={{ width: '100%', display: 'block', borderRadius: '6px' }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                .github-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    padding: 20px;
                    color: #c9d1d9;
                    background-color: #0d1117;
                    height: 100%;
                    overflow-y: auto;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
                }

                .github-profile {
                    width: 240px;
                    flex-shrink: 0;
                    min-width: 200px;
                }

                @media (max-width: 1100px) {
                    .github-container {
                        gap: 15px;
                        padding: 15px;
                    }
                    .avatar {
                        width: 180px;
                        height: 180px;
                    }
                    .nav-tabs .tab {
                        padding: 6px 10px;
                        font-size: 13px;
                    }
                    .nav-tabs .tab span {
                         display: none;
                    }
                    .repo-card {
                        padding: 12px;
                    }
                    .repo-name {
                        font-size: 13px;
                    }
                }

                @media (max-width: 850px) {
                    .github-container {
                        flex-direction: column;
                    }
                    .github-profile {
                        width: 100%;
                        text-align: center;
                    }
                    .avatar {
                        margin: 0 auto 16px;
                    }
                    .stats, .details {
                        justify-content: center;
                    }
                }

                .avatar {
                    width: 230px;
                    height: 230px;
                    background: #161b22;
                    border: 1px solid #30363d;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 30px;
                    transition: all 0.3s ease;
                }

                .github-profile .name {
                    font-size: 22px;
                    font-weight: 600;
                    margin: 0;
                }

                .github-profile .username {
                    font-size: 18px;
                    font-weight: 300;
                    color: #8b949e;
                    margin: 0 0 12px 0;
                }

                .github-profile .bio {
                    font-size: 14px;
                    margin-bottom: 16px;
                    line-height: 1.4;
                }

                .edit-btn {
                    width: 100%;
                    padding: 6px 0;
                    background: #21262d;
                    border: 1px solid #30363d;
                    border-radius: 6px;
                    color: #c9d1d9;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    margin-bottom: 20px;
                }

                .edit-btn:hover {
                    background: #30363d;
                }

                .stats {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 4px;
                    font-size: 13px;
                    color: #8b949e;
                    margin-bottom: 16px;
                }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .stat-item strong {
                    color: #c9d1d9;
                }

                .details {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    font-size: 13px;
                }

                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .detail-item a {
                    color: #58a6ff;
                    text-decoration: none;
                }

                .github-content {
                    flex: 1;
                    min-width: 300px;
                }

                .nav-tabs {
                    display: flex;
                    gap: 8px;
                    border-bottom: 1px solid #30363d;
                    margin-bottom: 10px;
                    overflow-x: auto;
                    white-space: nowrap;
                    scrollbar-width: none;
                }

                .nav-tabs::-webkit-scrollbar {
                    display: none;
                }

                .nav-tabs .tab {
                    padding: 8px 12px;
                    font-size: 14px;
                    cursor: pointer;
                    color: #8b949e;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    text-decoration: none;
                }

                .nav-tabs .tab span {
                    background: #30363d;
                    color: #c9d1d9;
                    padding: 2px 6px;
                    border-radius: 20px;
                    font-size: 11px;
                }

                .nav-tabs .tab.active {
                    color: #c9d1d9;
                    font-weight: 600;
                }

                .nav-tabs .tab.active::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #f78166;
                }

                .pinned-section .section-title {
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #e6edf3;
                }

                .repos-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 15px;
                }

                @media (max-width: 1200px) {
                    .repos-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .repo-card {
                    padding: 14px;
                    background: #0d1117;
                    border: 1px solid #30363d;
                    border-radius: 6px;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s, background-color 0.2s;
                    text-decoration: none;
                    color: inherit;
                }

                .repo-card:hover {
                    border-color: #8b949e;
                    background-color: #161b22;
                }

                .repo-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 3px;
                }

                .repo-name {
                    color: #58a6ff;
                    font-weight: 600;
                    font-size: 14px;
                }

                .repo-public {
                    font-size: 11px;
                    color: #8b949e;
                    padding: 0 6px;
                    border: 1px solid #30363d;
                    border-radius: 20px;
                    margin-left: auto;
                }

                .repo-desc {
                    font-size: 12px;
                    color: #8b949e;
                    margin: 0 0 12px 0;
                    flex: 1;
                    line-height: 1.5;
                }

                .repo-footer {
                    display: flex;
                    gap: 12px;
                    font-size: 11px;
                    color: #8b949e;
                }

                .repo-footer .lang, .repo-footer .stat {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }

                .heatmap-section .section-title {
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                .github-activity-graph {
                    background: #0d1117;
                    border: 1px solid #30363d;
                    border-radius: 6px;
                    padding: 0 7px 7px 7px;
                    margin-top: -3px;
                }
            `}</style>
        </div>
    );
};

export default GithubMock;
