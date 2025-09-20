// app/components/Portfolio.tsx
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';

// Define interfaces for type safety
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
}

interface PortfolioProps {
  darkMode?: boolean;
}

// Portfolio data with unique IDs and additional fields
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Abidors - Backend Developer',
    description: 'Developed a sophisticated real estate web system using the PERN stack, collaborating with a cross-functional team to deliver robust backend solutions.',
    imageUrl: '/images/assets/img/portfolio/portfolio-1.jpg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React'],
    projectLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Deep Turing - Lead Developer',
    description: 'Led a team in developing a web-based system using the PERN stack, ensuring scalability and performance.',
    imageUrl: '/images/assets/img/portfolio/portfolio-2.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    projectLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Gaia Website',
    description: 'Built the Gaia Survey website and admin dashboard, enabling users to explore services and manage operations efficiently.',
    imageUrl: '/images/assets/img/portfolio/gaia-landingpage.png',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    projectLink: '#',
    githubLink: '#',
  },
  {
    id: 4, // Fixed duplicate ID
    title: 'Akagera & Rhein Website',
    description: 'Served as a full-stack developer and later promoted to lead frontend developer, delivering a robust web application.',
    imageUrl: '/images/assets/img/portfolio/portfolio-4.jpg',
    technologies: ['React', 'Spring Boot', 'MySQL'],
    projectLink: '#',
    githubLink: '#',
  },
];

const Portfolio: React.FC<PortfolioProps> = ({ darkMode = false }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to current item
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentItem * 320,
        behavior: 'smooth',
      });
    }
  }, [currentItem]);

  const scrollLeft = () => {
    setCurrentItem((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentItem((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  const openProjectModal = (id: number) => {
    setSelectedProject(id);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Framer Motion variants for animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="portfolio"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-teal-100'} transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} mb-4 relative inline-block`}
          >
            Featured Projects
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-teal-800'} leading-relaxed`}>
            A curated selection of projects showcasing my expertise in full-stack development and innovative solutions.
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              darkMode ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700' : 'bg-emerald-500 text-white hover:bg-emerald-600'
            } hidden md:block`}
            aria-label="Previous projects"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              darkMode ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700' : 'bg-emerald-500 text-white hover:bg-emerald-600'
            } hidden md:block`}
            aria-label="Next projects"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Projects Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            ref={scrollContainerRef}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-80 h-[28rem] snap-center transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  currentItem === index ? 'ring-4 ring-emerald-500 scale-105' : 'scale-100'
                } ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-teal-100'}`}
                onClick={() => openProjectModal(item.id)}
              >
                {/* Project Image */}
                <div className="relative w-full h-2/3 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    quality={80}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      darkMode ? 'from-gray-900/80' : 'from-teal-900/80'
                    } via-transparent to-transparent`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span
                      className={`px-4 py-2 rounded-full ${
                        darkMode ? 'bg-emerald-600' : 'bg-emerald-500'
                      } text-white font-medium text-sm`}
                    >
                      View Details
                    </span>
                  </div>
                </div>
                {/* Project Info */}
                <div className="h-1/3 p-5">
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-teal-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-teal-800'} line-clamp-2`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 text-xs rounded-full ${
                          darkMode ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          darkMode ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentItem(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentItem === index
                    ? 'bg-emerald-500 scale-125'
                    : darkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-teal-300 hover:bg-teal-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } p-6 md:p-8 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-transparent`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeProjectModal}
                  className={`absolute top-4 right-4 p-2 rounded-full ${
                    darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                  } transition-all duration-300`}
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                {portfolioItems
                  .filter((item) => item.id === selectedProject)
                  .map((project) => (
                    <div key={project.id} className="space-y-6">
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL="/images/placeholder.png"
                          quality={80}
                        />
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-teal-900'}`}>
                        {project.title}
                      </h3>
                      <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-teal-800'} leading-relaxed`}>
                        {project.description}
                      </p>
                      <div>
                        <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-teal-900'}`}>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1.5 rounded-full text-sm ${
                                darkMode ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4 pt-4">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                            darkMode
                              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                              : 'bg-emerald-500 text-white hover:bg-emerald-600'
                          }`}
                        >
                          <FiExternalLink className="mr-2" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-5 py-2.5 rounded-lg font-medium border transition-all duration-300 transform hover:scale-105 ${
                            darkMode
                              ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                              : 'border-teal-300 text-teal-800 hover:bg-teal-100'
                          }`}
                        >
                          <FiGithub className="mr-2" />
                          View Code
                        </a>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #10b981;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;