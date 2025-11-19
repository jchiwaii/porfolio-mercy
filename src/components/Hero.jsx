import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const statHighlights = [
    { label: "Luxury campaigns", value: "48" },
    { label: "Cities filmed", value: "12" },
    { label: "Client retention", value: "92%" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-gradient gradient-one" />
        <span className="hero-gradient gradient-two" />
        <span className="hero-grid" />
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            <span className="hero-badge-text">Available for new projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="hero-title"
        >
          Cinematic Luxury <span>for discerning brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hero-description"
        >
          Bespoke video direction and artful production inspired by couture
          houses, contemporary architecture, and the quiet confidence of
          heritage brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="hero-meta"
        >
          <span className="meta-pill">Global studio • Lagos ↔ New York</span>
          <span className="meta-pill">Cannes Lions shortlist 2024</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="hero-buttons"
        >
          <a href="#work" className="btn-primary">
            <Play size={18} fill="currentColor" />
            View Work
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
            <ArrowRight size={18} />
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="hero-stats"
        >
          {statHighlights.map((stat) => (
            <li key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </motion.ul>
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
