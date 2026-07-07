import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'LUXE – MERN E-Commerce',
        description: 'Built a scalable MERN-based e-commerce platform with 25+ reusable components, integrated Stripe payments, and developed an admin dashboard for managing products, inventory, and orders.',
        techStack: ['React.js', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
        githubUrl: 'https://github.com/Rajanikanth45/luxe-ecommerce',
        liveUrl: '#'
    },

    {
        title: 'AI- Career Counciling Platform',
        description: 'RiseStar AI is an intelligent career counseling platform that uses Google Gemini AI to provide personalized career guidance, resume building, interview preparation, and industry insights in one place.',
        techStack: ['Laravel', 'LiweWire', 'Tailwind CSS', 'Google Gemini-API],
        githubUrl: 'https://github.com/Rajanikanth45/EduSphere',
        liveUrl: '#'
    },
    {
        title: 'Founder Forge – Networking Group',
        description: 'Developed a professional networking platform with secure authentication, profile management, and a modular database structure using PHP and MySQL.',
        techStack: ['HTML5', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
        githubUrl: 'https://github.com/Rajanikanth45/Entrepreneurial-Network-web-development',
        liveUrl: '#'
    },
    {
        title: 'Spreadsheet Simulator',
        description: 'Built a mini spreadsheet application supporting cell-based calculations, formulas, and dynamic data handling similar to Excel.',
        techStack: ['HTML5', 'Tailwind', 'JavaScript'],
        githubUrl: 'https://github.com/Rajanikanth45/Spreadsheet-Simulator',
        liveUrl: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section section-container">
            <h2 className="section-title">Featured Projects</h2>

            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card animate-on-scroll">
                        <div className="project-card-inner">
                            <div className="project-header">
                                <div className="project-icon">
                                    <FolderGit2 size={32} />
                                </div>
                                <div className="project-links">
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.techStack.map((tech, tIdx) => (
                                    <span key={tIdx} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                        {/* Glow border element */}
                        <div className="card-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
