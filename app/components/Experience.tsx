'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const placeholderImage = '/placeholder.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveDemoLink: string;
  githubLink: string;
}

interface PortfolioProps {
  darkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [brokenImages, setBrokenImages] = useState<{ [key: number]: string }>({});

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is the first project description.',
      imageUrl: '/images/project1.png',
      liveDemoLink: 'https://example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is the second project description.',
      imageUrl: '/images/project2.png',
      liveDemoLink: '#',
      githubLink: '#',
    },
  ];

  /** ✅ Correctly typed Framer Motion variants */
  const modalVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const, // Fix: Typed easing
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeIn' as const, // Fix: Typed easing
      },
    },
  };

  return (
    <section
      id="portfolio"
      className={`py-16 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Portfolio</h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={brokenImages[project.id] || project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                placeholder="blur"
                blurDataURL="/blur-placeholder.png"
                onError={() =>
                  setBrokenImages((prev) => ({ ...prev, [project.id]: placeholderImage }))
                }
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <motion.div
                className={`relative w-full max-w-2xl rounded-xl p-6 ${
                  darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}
              >
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-2xl font-bold"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                {/* Modal Image */}
                <Image
                  src={brokenImages[selectedProject.id] || selectedProject.imageUrl}
                  alt={selectedProject.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  placeholder="blur"
                  blurDataURL="/blur-placeholder.png"
                  onError={() =>
                    setBrokenImages((prev) => ({ ...prev, [selectedProject.id]: placeholderImage }))
                  }
                />

                {/* Modal Content */}
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="mb-4">{selectedProject.description}</p>

                {/* Links */}
                <div className="flex space-x-4">
                  {selectedProject.liveDemoLink !== '#' ? (
                    <a
                      href={selectedProject.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        darkMode
                          ? 'bg-emerald-700 text-white hover:bg-emerald-600'
                          : 'bg-emerald-500 text-white hover:bg-emerald-600'
                      }`}
                      aria-label={`View live demo for ${selectedProject.title}`}
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center px-6 py-3 rounded-lg font-medium text-gray-500 bg-gray-200 cursor-not-allowed">
                      <FiExternalLink className="mr-2" />
                      Live Demo Unavailable
                    </span>
                  )}

                  {selectedProject.githubLink !== '#' ? (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        darkMode
                          ? 'bg-gray-700 text-white hover:bg-gray-600'
                          : 'bg-gray-800 text-white hover:bg-gray-900'
                      }`}
                      aria-label={`View GitHub repository for ${selectedProject.title}`}
                    >
                      <FiGithub className="mr-2" />
                      GitHub
                    </a>
                  ) : (
                    <span className="flex items-center px-6 py-3 rounded-lg font-medium text-gray-500 bg-gray-200 cursor-not-allowed">
                      <FiGithub className="mr-2" />
                      GitHub (Private)
                    </span>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
