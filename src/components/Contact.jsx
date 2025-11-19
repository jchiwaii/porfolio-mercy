import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="contact-header"
          >
            <h2 className="contact-title">Let's Create Together</h2>
            <p className="contact-text">
              New commissions and thoughtful collaborations, handled discreetly.
            </p>
            <a href="mailto:hello@mercy.com" className="contact-email">
              hello@mercy.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="social-links"
          >
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Mercy Portfolio. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
