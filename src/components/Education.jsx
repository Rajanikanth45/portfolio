import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import './Education.css';

const educationData = [
    {
        title: 'Bachelor of Technology - Computer Science and Engineering',
        institution: 'Lovely Professional University | Phagwara, Punjab',
        date: 'August 2023 - Present',
        score: 'CGPA: 6.5',
        description: 'Pursuing my B.Tech degree with a focus on core software engineering principles and advanced programming.',
        icon: <GraduationCap size={24} />
    },
    {
        title: 'Intermediate (Class 12th)',
        institution: 'Swami Vivekananda Junior College | Anantapur, AP',
        date: 'June 2021 - March 2023',
        score: 'Percentage: 93%',
        description: 'Completed higher secondary education with excellent academic standing.',
        icon: <BookOpen size={24} />
    },
    {
        title: 'Matriculation (Class 10th)',
        institution: 'Zilla Parishad High School | Anantapur, AP',
        date: 'June 2020 - March 2021',
        score: 'Percentage: 93%',
        description: 'Completed secondary education with a strong foundation in core subjects.',
        icon: <School size={24} />
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section section-container">
            <h2 className="section-title">Education Journey</h2>

            <div className="timeline-container">
                {/* The central line */}
                <div className="timeline-line"></div>

                {educationData.map((edu, idx) => (
                    <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot">
                            <span className="timeline-icon">{edu.icon}</span>
                        </div>

                        <div className="timeline-content">
                            <span className="timeline-date">{edu.date}</span>
                            <h3 className="timeline-title">{edu.title}</h3>
                            <h4 className="timeline-institution">{edu.institution}</h4>
                            <p className="timeline-score">{edu.score}</p>
                            <p className="timeline-description">{edu.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
