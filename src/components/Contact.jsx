import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send data to a backend or service like EmailJS
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section section-container">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-content">

                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Let's Work Together</h3>
                    <p>
                        I'm currently looking for new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="info-icon">
                                <Mail size={20} />
                            </div>
                            <span>rajinikanthmukappa@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <MapPin size={20} />
                            </div>
                            <span>India</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">
                                <Phone size={20} />
                            </div>
                            <span>+91-6301524896</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
