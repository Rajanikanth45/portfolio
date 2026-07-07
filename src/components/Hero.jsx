import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const roles = ["Web Developer", "Front-End Developer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 40 : 100;
        const currentRole = roles[currentRoleIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === currentRole) {
                // Wait briefly before deleting
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === '') {
                // Move to next role
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                // Add or remove character
                setCurrentText(
                    currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);

    return (
        <section id="home" className="hero-section">
            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        B.Tech CSE | Lovely Professional University
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Mukappa Gari Rajanikanth</span>
                        <br />
                        <span className="subtitle">
                            {currentText}<span className="cursor">|</span>
                        </span>
                    </h1>

                    <p className="hero-bio">
                        Passionate about building scalable web applications, solving complex problems, and creating seamless user experiences through modern technologies.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn primary-btn">
                            View Projects
                        </a>

                        <a href="/CV.RAJ.pdf" target="_blank" rel="noreferrer" className="btn secondary-btn">
                            View CV
                        </a>
                        <a href="/CV.RAJ.pdf" download="Mukappa_Gari_Rajanikanth_CV.pdf" className="btn secondary-btn">
                            <Download size={20} />
                            Download CV
                        </a>

                        <a href="/Rajini%20Specialized%20cv.pdf" target="_blank" rel="noreferrer" className="btn secondary-btn">
                            View Specialized CV
                        </a>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Rajanikanth45" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/rajanikanth45/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:rajinikanthmukappa@gmail.com" className="social-icon" aria-label="Email">
                            <Mail size={22} />
                        </a>
                    </div>
                </div>

                {/* Right Photo Placeholder */}
                <div className="hero-image-wrapper">
                    <div className="image-border">
                        <div className="profile-photo">
                            <img src="/img_1.jpg" alt="Mukappa Gari Rajanikanth" className="profile-img" />
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
