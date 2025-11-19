import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Gradient/Overlay */}
            <div className="hero-overlay" />
            <div className="hero-bg-image" />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="hero-subtitle">
                        Cinematography & Direction
                    </h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-title"
                >
                    CAPTURING <br />
                    <span className="hero-title-highlight">
                        MOMENTS IN TIME
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="hero-description"
                >
                    Visual storytelling that transcends the ordinary. Creating immersive experiences through the lens.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="hero-buttons"
                >
                    <a
                        href="#work"
                        className="btn-primary"
                    >
                        <Play size={20} fill="currentColor" />
                        View Showreel
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="scroll-line" />
            </motion.div>
        </section>
    );
};

export default Hero;
