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
        year: "2023",
        image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=2664&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 2,
        title: "Urban Solitude",
        category: "Documentary",
        year: "2023",
        image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=2576&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Velocity",
        category: "Commercial",
        year: "2022",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2883&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 4,
        title: "Ethereal",
        category: "Fashion",
        year: "2022",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

const Work = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="work" className="work-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">Selected Work</h2>
                    <p className="section-subtitle">
                        A curated collection of commercial and creative projects.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                            onClick={() => setSelectedVideo(project)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="play-button">
                                        <Play size={24} fill="currentColor" />
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
                video={selectedVideo}
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </section>
    );
};

export default Work;
