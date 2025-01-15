import React from 'react';
import { motion } from 'framer-motion';

// Dummy Data for Projects (Replace with your actual data)
const projects = [
  {
    title: 'Portfolio website',
    description: 'Showcasing my work and creative skills online.',
    imageUrl: '/bc-website-image.png',
    link: 'https://www.beggarscorporation.com/'
  },
  {
    title: 'E-commerce website',
    description: 'A seamless online shopping experience for everyone.',
    imageUrl: '/sho.bc-website-image.png',
    link: 'https://shop.beggarscorporation.com/'
  },
  {
    title: 'E-commerce website',
    description: 'A seamless online shopping experience for everyone.',
    imageUrl: '/spiffy-website-image.png',
    link: 'https://spiffysole.com/'
  },
  {
    title: 'Employment policy portfolio website',
    description: 'Clear, concise employment policies for organizational transparency.',
    imageUrl: '/youth4employement-webiste-image.png',
    link: 'https://youth4employment.com/'
  },
  
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-12 bg-slate-950">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-semibold text-center text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-slate-400 mt-2">{project.description}</p>
              <a
                href={project.link} target='_blank'
                className="mt-4 inline-block text-blue-400 hover:text-blue-600 transition-colors"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
