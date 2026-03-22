import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="nav-logo">
                    <span className="logo-text">Port</span>
                    <span className="logo-accent">folio</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.name} className="nav-item">
                            <a href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>

                {/* Mobile Menu Icon */}
                <div className="mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mobile-nav-item">
                            <a href={link.href} className="mobile-nav-link" onClick={toggleMenu}>
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
