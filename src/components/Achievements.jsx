import React from 'react';
import { Trophy, Star, Code, Award, CheckCircle, ExternalLink } from 'lucide-react';
import './Achievements.css';

const competitiveStats = [
    {
        platform: 'HackerRank',
        rating: 'Python 3-star',
        details: 'Earned 3-star badge by solving 50+ problems consistently.',
        icon: <Code size={32} />
    },
    {
        platform: 'Hackathon',
        rating: 'Advanced to Round 2',
        details: 'Code Off Duty Web Development Hackathon.',
        icon: <Trophy size={32} />
    },
    {
        platform: 'Social Service',
        rating: '60 Hours Completed',
        details: 'Care Club Foundation - teamwork and community engagement.',
        icon: <Star size={32} />
    }
    
];

const certifications = [
    {
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        details: 'Certified in responsive web design, covering HTML5, CSS3, layout techniques, and mobile-first design principles',
        icon: <Award size={32} />,
        link: 'https://drive.google.com/file/d/1XphMJkhS_1CjqOIyKa-ZXPS48BSeDU99/view'
    },
    {
        title: 'Mastering C and C++ Programming',
        issuer: 'Board Infinity',
        details: 'Certified in C and C++ programming, covering core concepts, memory management, and object-oriented programming principles',
        icon: <CheckCircle size={32} />,
        link: 'https://drive.google.com/file/d/1jB2pJVIkmIKOi1LH4S9bIuyA_9AdB46V/view?usp=drive_open'
    },
    {
        title: 'Software Engineering: Implementation and Testing',
        issuer: 'Coursera',
        details: 'Focused on software development lifecycles, implementation best practices, and automated testing methodologies.',
        icon: <Award size={32} />,
        link: 'https://drive.google.com/file/d/1qBk_drUFs2GE-Ty63fwgIGI1nyZ8NZvc/view'
    },
    {
        title: 'Java Programming',
        issuer: 'Lovely Professional University',
        details: 'Gained a strong foundation in Java programming, object-oriented concepts, and data structures.',
        icon: <Star size={32} />,
        link: 'https://drive.google.com/file/d/19IjJdT73KtQ--P312-Qo9QDmsIRPQvBt/view'
    }
];

const Achievements = () => {

    return (
        <section id="achievements" className="achievements-section section-container">
            <h2 className="section-title">Achievements & Certifications</h2>

            <div className="achievements-content">
                <div className="achievement-column">
                    <h3 className="column-title">Achievements</h3>
                    <div className="stats-grid">
                        {competitiveStats.map((stat, idx) => (
                            <div key={idx} className="stat-card">
                                <div className="stat-icon-wrapper">
                                    {stat.icon}
                                </div>
                                <div className="stat-info">
                                    <h4>{stat.platform}</h4>
                                    <p className="stat-rating">{stat.rating}</p>
                                    <p className="stat-details">{stat.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="achievement-column">
                    <h3 className="column-title">Certifications</h3>
                    <div className="stats-grid">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="stat-card cert-card">
                                <div className="stat-header-group">
                                    <div className="stat-icon-wrapper">
                                        {cert.icon}
                                    </div>
                                    <div className="stat-info">
                                        <h4>{cert.title}</h4>
                                        <p className="stat-rating">{cert.issuer}</p>
                                        <p className="stat-details">{cert.details}</p>
                                    </div>
                                </div>
                                {cert.link && (
                                    <a 
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="view-cert-btn"
                                        aria-label={`View ${cert.title} Certificate`}
                                    >
                                        <span>View</span>
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Achievements;
