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
                        <h3 className="about-subtitle">Visual Storyteller</h3>

                        <div className="about-text">
                            <p>
                                Every frame is an opportunity to evoke emotion. With a passion for cinematic excellence, I specialize in creating visual narratives that leave a lasting impact.
                            </p>
                            <p>
                                My approach blends technical mastery with artistic intuition. From high-energy music videos to compelling documentaries, I strive for perfection in every shot.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">05</span>
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
