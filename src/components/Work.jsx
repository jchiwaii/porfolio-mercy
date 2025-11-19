import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import VideoModal from './VideoModal';
import './Work.css';

const projects = [
    {
        id: 1,
        title: "Neon Dreams",
        category: "Music Video",
        image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=2070&auto=format&fit=crop",
        year: "2023",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
    },
    {
        id: 2,
        title: "Urban Solitude",
        category: "Documentary",
        image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=2070&auto=format&fit=crop",
        year: "2023",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "The Artisan",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
        year: "2024",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Midnight Run",
        category: "Short Film",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2070&auto=format&fit=crop",
        year: "2024",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="work-section">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        A collection of visual narratives and cinematic experiences.
                    </motion.p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="play-button">
                                        <Play fill="currentColor" size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-meta">
                                    <span className="project-category">{project.category}</span>
                                    <span className="project-year">{project.year}</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <VideoModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                videoUrl={selectedProject?.videoUrl}
                title={selectedProject?.title}
            />
        </section>
    );
};

export default Work;
