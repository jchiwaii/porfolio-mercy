import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-image-wrapper"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1533518444033-4e989f972024?q=80&w=1974&auto=format&fit=crop"
                            alt="Filmmaker filming"
                            className="about-image"
                        />
                        <div className="about-image-accent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="about-content"
                    >
                        <h2 className="about-title">The Vision</h2>
                        <h3 className="about-subtitle">Filmmaker & Visual Storyteller</h3>

                        <div className="about-text">
                            <p>
                                I believe that every frame should tell a story. With over 5 years of experience in cinematography and direction, I've dedicated my craft to capturing the raw emotion and authentic moments that define our human experience.
                            </p>
                            <p>
                                My approach combines technical precision with artistic intuition. Whether it's a music video, commercial, or documentary, I strive to create visuals that not only look beautiful but resonate on a deeper emotional level.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">12</span>
                                <span className="stat-label">Awards</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
