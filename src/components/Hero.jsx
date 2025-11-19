
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Abstract Background */}
            <div className="hero-bg-abstract">
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />
                <div className="hero-blob hero-blob-3" />
            </div>
            <div className="hero-grid" />

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        <span className="hero-badge-text">Available for new projects</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="hero-title"
                >
                    Visual Storytelling <br />
                    Reimagined.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="hero-description"
                >
                    Elevating brands through cinematic excellence. We craft visual narratives that resonate, engage, and inspire action.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="hero-buttons"
                >
                    <a
                        href="#work"
                        className="btn-primary"
                    >
                        <Play size={18} fill="currentColor" />
                        View Showreel
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                    >
                        Start a Project
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="scroll-indicator"
            >
                <div className="mouse-icon">
                    <div className="mouse-wheel" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

