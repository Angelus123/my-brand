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

const logo = '/images/assets/img/logo/logo.png';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // State for scroll progress
  const ScrollLink = Scroll.Link;

  useEffect(() => {
    // Check scroll position for back to top button and scroll progress
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      // Calculate scroll progress
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
    <div className={`App transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header className="header fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-40 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="topnav flex items-center justify-between py-3">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center">
                <Image
                  src={logo}
                  alt="My Brand"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <span className="ml-2 font-bold text-emerald-600 dark:text-emerald-400 text-xl">IZERE Ange Felix</span>
              </div>
            </ScrollLink>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      <section
        id="hero"
        className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-200 to-lime-300 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pt-16 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mt-16 md:mt-0">
              <p className="text-lg md:text-3xl font-semibold tracking-wider text-teal-900 dark:text-teal-100 flex items-center gap-2 animate-fade-in">
                <span>Hello</span>
                <span role="img" aria-label="wave" className="text-2xl md:text-4xl animate-wave">👋</span>
                <span>, I am</span>
              </p>
              <h1 className="text-3xl md:text-6xl py-2 font-bold uppercase tracking-widest text-emerald-600 dark:text-white drop-shadow-lg animate-slide-in">
                IZERE Ange Felix
              </h1>
              <div className="inline-block">
                <p className="text-xl md:text-4xl py-2 font-semibold uppercase tracking-wider text-white dark:text-white drop-shadow-lg animate-typing overflow-hidden whitespace-nowrap border-r-4 border-teal-800 dark:border-teal-200 pr-1">
                  A Software Engineer
                </p>
              </div>
              <div className="text-teal-700 dark:text-teal-300 text-lg md:text-xl py-5 space-y-4 font-medium rounded-lg">
                I will,
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
                  build applications from development to deployment — handling UI design, backend logic, API
                  integration, testing, and cloud deployment to ensure complete, reliable, and scalable solutions.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href="/assets/pdf/felix-software-engineer-5212025.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="mr-2">📄</span> Download My CV
                  </a>
                  <ScrollLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center px-6 py-3 text-emerald-700 dark:text-white bg-transparent border-2 border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    View My Work
                  </ScrollLink>
                </div>
              </div>
            </div>
            <ContactInfo />
          </div>
          <div className="absolute bottom-8 right-8 flex justify-center">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="flex flex-col items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-300 cursor-pointer"
            >
              <span className="mb-2 font-medium">Explore More</span>
              <FiChevronDown size={24} className="animate-bounce" />
            </ScrollLink>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hello, I&apos; m Felix, a passionate and ambitious software engineer dedicated to rapid growth in the tech
              industry. I thrive in both team and independent settings, bringing expertise in various languages,
              frameworks, and technologies to deliver innovative solutions.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-teal-700 dark:text-teal-300 mb-8 text-center">Education Background</h2>
            <ul className="space-y-8 max-w-4xl mx-auto">
              <li className="flex items-start gap-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/assets/icon/ur.jpg"
                      alt="University Icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <strong className="text-lg text-emerald-600 dark:text-emerald-400">BSc, Computer Engineering</strong>
                  <br />
                  <i className="text-gray-600 dark:text-gray-400">University of Rwanda, 2017–2022</i>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Graduated with honors, specializing in software engineering and system architecture. 
                    Completed thesis on optimizing distributed systems for resource-constrained environments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/assets/icon/andela.png"
                      alt="Andela Icon"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <strong className="text-lg text-emerald-600 dark:text-emerald-400">Full Stack Web Development Program</strong>
                  <br />
                  <i className="text-gray-600 dark:text-gray-400">Andela Technical Leadership Program, Jan – Sept 2022 (Remote)</i>
                  <br />
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    Completed 9-month intensive training focused on React, Node.js, PostgreSQL, CI/CD, cloud, and
                    security. Collaborated on real-world projects using git-flow, pair programming, and agile practices.
                    Ranked in the top 10% of participants for technical excellence and leadership.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skill" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Skills />
      </section>
      
      <section id="experiences" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <Experiences darkMode={darkMode} /> {/* Pass darkMode prop correctly */}
      </section>
      
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Portfolio />
      </section>
      
      <section id="resume" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <Resume />
      </section>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-30"
          aria-label="Back to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}

      <footer className="bg-gradient-to-r from-emerald-600 to-teal-700 py-12 text-center transition-colors duration-300">
        <div className="container mx-auto px-4">
          <p className="text-white text-lg">&copy; 2025 Felix. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-emerald-200 transition-colors duration-300">Privacy Policy</a>
            <span className="text-white">•</span>
            <a href="#" className="text-white hover:text-emerald-200 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-typing {
          animation: typing 3.5s steps(40, end);
        }
      `}</style>
    </div>
  );
};

export default App;