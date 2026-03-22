import React from 'react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            { name: 'C++'},
            { name: 'Java'},
            { name: 'JavaScript'},
            { name: 'Python'}
        ]
    },
    {
        title: 'Frameworks & Web',
        icon: '🌐',
        skills: [
            { name: 'React.js'},
            { name: 'Node.js'},
            { name: 'Tailwind CSS'},
            { name: 'HTML5/CSS3'}
        ]
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: [
            { name: 'MongoDB'},
            { name: 'MySQL'}
        ]
    },
    {
        title: 'Tools & Platforms',
        icon: '⚙️',
        skills: [
            { name: 'Git'},
            { name: 'GitHub'},
            { name: 'Postman'}
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section section-container">
            <h2 className="section-title">Technical Skills</h2>

            <div className="skills-grid">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="skill-card animate-on-scroll">
                        <div className="skill-card-header">
                            <span className="skill-icon">{category.icon}</span>
                            <h3>{category.title}</h3>
                        </div>

                        <div className="skill-tags">
                            {category.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="skill-tag">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
