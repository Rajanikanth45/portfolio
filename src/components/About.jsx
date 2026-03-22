import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-container">
            <h2 className="section-title">About Me</h2>

            <div className="about-content animate-on-scroll">
                <div className="about-text-container">
                    <p className="about-text">
                        Hello! I'm <span className="highlight">Mukappa Gari Rajanikanth</span>, a passionate Web Developer and Front-End Developer.
                        I am currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University.
                    </p>
                    <p className="about-text">
                        I enjoy the thrill of transforming complex problems into elegant, intuitive, and highly functional web applications. 
                        My focus is on creating seamless and engaging user experiences through clean and efficient code.
                    </p>
                    <p className="about-text">
                        Beyond web development, I have a strong interest in solving algorithmic challenges and exploring new technologies.
                        I am always eager to learn, adapt, and grow in the ever-evolving world of software engineering.
                    </p>

                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">🚀</span>
                            <span className="highlight-text">Problem Solver</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">💻</span>
                            <span className="highlight-text">Passionate Coder</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">📚</span>
                            <span className="highlight-text">Adaptability</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
