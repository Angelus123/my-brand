'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Scroll from 'react-scroll';
import Navigation from './components/Navigation';
import Skills from './components/SkillsSection';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactInfo from './components/ContactInfo';
import Experiences from './components/Experience';
import { FiMoon, FiSun, FiChevronDown, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const logo = '/images/assets/img/logo/logo.png';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ScrollLink = Scroll.Link;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-gray-400 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header
        className={`fixed top-0 w-full shadow-md z-40 transition-colors duration-500 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between py-3">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={logo}
                  alt="My Brand"
                  width={32}
                  height={32}
                  className="transition-transform duration-300"
                />
                <span
                  className={`ml-2 font-bold text-lg ${
                    darkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}
                >
                  IZERE
                </span>
              </motion.div>
            </ScrollLink>

            <div className="flex items-center space-x-3">
              <span
                className={`text-xs font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                LET&apos;S FLY HIGHER
              </span>
              <motion.button
                onClick={toggleDarkMode}
                className={`p-1.5 rounded-full transition-colors duration-300 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-200 hover:bg-teal-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-100'
                }`}
                aria-label="Toggle dark mode"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Component Integration */}
      <Navigation darkMode={darkMode} />
      <ContactInfo darkMode={darkMode} />

      <section
        id="hero"
        className={`w-full min-h-screen flex items-center justify-center pt-14 relative overflow-hidden transition-colors duration-500 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950'
            : 'bg-white bg-opacity-95'
        }`}
      >
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div
            className="absolute top-1/5 left-1/5 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ x: [0, 30, -20, 0], y: [0, -50, 20, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
            style={{ transform: 'translateZ(0)' }}
          ></motion.div>
          <motion.div
            className="absolute top-1/3 right-1/5 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl"
            animate={{ x: [0, -30, 20, 0], y: [0, 50, -20, 0], scale: [1, 1.15, 0.95, 1] }}
            transition={{ duration: 9, repeat: Infinity, delay: 2 }}
            style={{ transform: 'translateZ(0)' }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-16 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2 lg:w-1/2 mx-8 mt-14 md:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.p
                className={`text-xl md:text-3xl font-semibold tracking-wider flex items-center gap-2 ${
                  darkMode ? 'text-teal-100' : 'text-gray-800'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span>Hello</span>
                <motion.span
                  role="img"
                  aria-label="wave"
                  className="text-2xl md:text-4xl"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  👋
                </motion.span>
                <span>, I am</span>
              </motion.p>
              <motion.h1
                className={`text-2xl md:text-4xl py-2 font-extrabold uppercase tracking-widest drop-shadow-md ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                IZERE Ange Felix
              </motion.h1>
              <motion.div
                className="inline-block"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
              >
                <p
                  className={`text-xl md:text-4xl py-1 font-bold uppercase tracking-wider drop-shadow-md overflow-hidden whitespace-nowrap border-r-4 ${
                    darkMode ? 'border-teal-200 text-white' : 'border-gray-400 text-gray-800'
                  } pr-2`}
                >
                  Software Engineer
                </p>
              </motion.div>
              <div
                className={`text-base font-bold md:text-lg py-4 space-y-3 rounded-lg ${
                  darkMode ? 'text-white' : 'text-gray-700'
                }`}
              >
                I will,
                <p
                  className={`text-sm md:text-base max-w-xl leading-relaxed ${
                    darkMode ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  craft elegant applications from pixel-perfect UI to robust backend systems, ensuring seamless
                  integration, rigorous testing, and scalable cloud deployment.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <motion.a
                    href="/images/assets/pdf/felix-resume-9202025.pdf"
                    download
                    className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full shadow-md transition-all duration-300 ${
                      darkMode
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-teal-100 hover:border-teal-300'
                    }`}
                    whileHover={{ scale: 1.08, boxShadow: '0 8px 20px rgba(0, 128, 128, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">📄</span> Download My CV
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.08, boxShadow: '0 8px 20px rgba(0, 128, 128, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ScrollLink
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full shadow-md transition-all duration-300 cursor-pointer ${
                        darkMode
                          ? 'text-white border-2 border-teal-500 hover:bg-teal-900'
                          : 'text-gray-800 bg-white border-2 border-teal-300 hover:bg-teal-100'
                      }`}
                    >
                      View My Work
                    </ScrollLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <Image
                src="/images/assets/img/profile/profile.png"
                alt="Software Engineer Illustration"
                width={400}
                height={400}
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-6 right-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className={`flex flex-col items-center transition-colors font-bold duration-300 cursor-pointer ${
                darkMode ? 'text-teal-400 hover:text-teal-600' : 'text-teal-600 hover:text-teal-600'
              }`}
            >
              <span className="mb-1 text-sm font-extrabold">Discover More</span>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FiChevronDown size={24} />
              </motion.div>
            </ScrollLink>
          </motion.div>
        </div>
      </section>

      <section
        id="about"
        className={`py-16 transition-colors duration-500 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={`text-3xl font-bold mb-3 relative inline-block ${
                darkMode ? 'text-teal-400' : 'text-teal-600'
              }`}
            >
              About Me
              <span
                className={`absolute -bottom-1 left-1/4 w-1/2 h-1 rounded-full ${
                  darkMode ? 'bg-teal-400' : 'bg-teal-500'
                }`}
              ></span>
            </h2>
            <p
              className={`text-base max-w-3xl mx-auto leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Hello, I&apos;m Felix, a passionate and ambitious software engineer dedicated to rapid growth in the tech
              industry. I thrive in both team and independent settings, bringing expertise in various languages,
              frameworks, and technologies to deliver innovative solutions.
            </p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className={`text-2xl font-semibold mb-6 text-center ${
                darkMode ? 'text-teal-300' : 'text-teal-700'
              }`}
            >
              Education Background
            </h2>
            <ul className="space-y-6 max-w-4xl mx-auto">
              <motion.li
                className={`flex items-start gap-4 p-5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-teal-900' : 'bg-teal-100'
                    }`}
                  >
                    <Image
                      src="/images/assets/icon/ur.jpg"
                      alt="University Icon"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <strong
                    className={`text-base ${
                      darkMode ? 'text-teal-400' : 'text-teal-600'
                    }`}
                  >
                    BSc, Computer Engineering
                  </strong>
                  <br />
                  <i
                    className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    University of Rwanda, 2017–2022
                  </i>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Graduated with honors, specializing in software engineering and system architecture.
                    Completed thesis on optimizing distributed systems for resource-constrained environments.
                  </p>
                </div>
              </motion.li>
              <motion.li
                className={`flex items-start gap-4 p-5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      darkMode ? 'bg-teal-900' : 'bg-teal-100'
                    }`}
                  >
                    <Image
                      src="/images/assets/icon/andela.png"
                      alt="Andela Icon"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <strong
                    className={`text-base ${
                      darkMode ? 'text-teal-400' : 'text-teal-600'
                    }`}
                  >
                    Full Stack Web Development Program
                  </strong>
                  <br />
                  <i
                    className={`text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Andela Technical Leadership Program, Jan – Sept 2022 (Remote)
                  </i>
                  <p
                    className={`mt-1 text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Completed 9-month intensive training focused on React, Node.js, PostgreSQL, CI/CD, cloud, and
                    security. Collaborated on real-world projects using git-flow, pair programming, and agile practices.
                    Ranked in the top 10% of participants for technical excellence and leadership.
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section
        id="skill"
        className={`py-16 transition-colors duration-500 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        <Skills darkMode={darkMode} />
      </section>

      <section
        id="experiences"
        className={`py-16 transition-colors duration-500 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <Experiences darkMode={darkMode} />
      </section>

      <section
        id="portfolio"
        className={`py-16 transition-colors duration-500 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      >
        <Portfolio />
      </section>

      <section
        id="resume"
        className={`py-16 transition-colors duration-500 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <Resume />
      </section>

      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-2.5 rounded-full shadow-md transition-all duration-300 z-30 ${
            darkMode
              ? 'bg-teal-600 hover:bg-teal-700 text-white'
              : 'bg-white text-gray-800 border border-gray-300 hover:bg-teal-100'
          }`}
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}

      <footer
        className={`py-10 text-center transition-colors duration-500 ${
          darkMode
            ? 'bg-gradient-to-r from-gray-800 to-gray-900'
            : 'bg-gradient-to-r from-teal-600 to-gray-700'
        }`}
      >
        <div className="container mx-auto px-4">
          <p
            className={`text-base ${
              darkMode ? 'text-gray-300' : 'text-white'
            }`}
          >
            &copy; 2025 Felix. All rights reserved.
          </p>
          <div className="mt-3 flex justify-center space-x-3">
            <a
              href="#"
              className={`text-sm transition-colors duration-300 ${
                darkMode
                  ? 'text-gray-300 hover:text-teal-400'
                  : 'text-white hover:text-teal-200'
              }`}
            >
              Privacy Policy
            </a>
            <span className={`${darkMode ? 'text-gray-300' : 'text-white'}`}>
              •
            </span>
            <a
              href="#"
              className={`text-sm transition-colors duration-300 ${
                darkMode
                  ? 'text-gray-300 hover:text-teal-400'
                  : 'text-white hover:text-teal-200'
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;