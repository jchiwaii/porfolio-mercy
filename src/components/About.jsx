import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-image-wrapper"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1533518444033-4e989f972024?q=80&w=1974&auto=format&fit=crop"
                            alt="Filmmaker filming"
                            className="about-image"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-content"
                    >
                        <div>
                            <h2 className="about-title">About Us</h2>
                            <h3 className="about-subtitle">Visual Storytelling for the Digital Age</h3>
                        </div>

                        <div className="about-text">
                            <p>
                                We believe that every brand has a unique story waiting to be told. Our mission is to translate your vision into compelling visual narratives that drive engagement and growth.
                            </p>
                            <p>
                                With a focus on technical precision and artistic excellence, we deliver high-quality video production services tailored to modern digital platforms.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">12</span>
                                <span className="stat-label">Industry Awards</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
