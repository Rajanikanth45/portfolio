import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './index.css'

function App() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const hiddenElements = document.querySelectorAll('.animate-on-scroll, .section-title, .project-card, .timeline-item, .stat-card, .cert-card');

        hiddenElements.forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Achievements />
                <Contact />
            </main>
        </>
    )
}

export default App
