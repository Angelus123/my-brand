import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiFileText, FiMenu, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface CombinedNavigationProps {
  darkMode?: boolean;
}

const CombinedNavigation: React.FC<CombinedNavigationProps> = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Framer Motion variants for animations
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <>
      {/* Desktop Navigation (Visible on md and larger) */}
      <motion.nav
        className={`hidden md:flex fixed top-1/2 right-2 transform -translate-y-1/2 flex-col space-y-2 p-2 rounded-xl border shadow-lg z-50 transition-all duration-500 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-teal-100'
        } ${isExpanded ? 'w-36' : 'w-auto'}`}
        initial="hidden"
        animate="visible"
      >
        <NavItemDesktop
          to="hero"
          label="Home"
          icon={<FiHome size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={0}
        />
        <NavItemDesktop
          to="about"
          label="About"
          icon={<FiUser size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={1}
        />
        <NavItemDesktop
          to="skill"
          label="Skills"
          icon={<FiCode size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={2}
        />
        <NavItemDesktop
          to="experiences"
          label="Experience"
          icon={<FiBriefcase size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={3}
        />
        <NavItemDesktop
          to="portfolio"
          label="Portfolio"
          icon={<FiFolder size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={4}
        />
        <NavItemDesktop
          to="resume"
          label="Resume"
          icon={<FiFileText size={14} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          isExpanded={isExpanded}
          custom={5}
        />
        
        {/* Expand/Collapse Button */}
        <motion.button
          onClick={toggleExpand}
          className={`flex items-center justify-center w-full mt-2 p-1 rounded-md transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
              : 'bg-teal-50 text-teal-700 hover:bg-emerald-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isExpanded ? "Collapse navigation" : "Expand navigation"}
        >
          {isExpanded ? (
            <FiChevronRight size={14} className="transition-transform duration-300" />
          ) : (
            <FiChevronLeft size={14} className="transition-transform duration-300" />
          )}
          {isExpanded && (
            <span className="ml-1 text-xs font-medium">Collapse</span>
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className={`md:hidden fixed top-3 right-3 p-2 rounded-full shadow-lg z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
          darkMode
            ? 'bg-gray-800 text-gray-200 hover:bg-emerald-800'
            : 'bg-white text-teal-800 hover:bg-emerald-100'
        }`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </motion.button>

      {/* Mobile Navigation (Visible on mobile when menu open) */}
      <motion.nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center space-y-4 transition-all duration-500 ${
          darkMode ? 'bg-gray-900/95' : 'bg-white/95'
        } ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <NavItemMobile
          to="hero"
          label="Home"
          icon={<FiHome size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={0}
        />
        <NavItemMobile
          to="about"
          label="About"
          icon={<FiUser size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={1}
        />
        <NavItemMobile
          to="skill"
          label="Skills"
          icon={<FiCode size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={2}
        />
        <NavItemMobile
          to="experiences"
          label="Experience"
          icon={<FiBriefcase size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={3}
        />
        <NavItemMobile
          to="portfolio"
          label="Portfolio"
          icon={<FiFolder size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={4}
        />
        <NavItemMobile
          to="resume"
          label="Resume"
          icon={<FiFileText size={20} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
          custom={5}
        />
        
        {/* Close Menu Button for Mobile */}
        <motion.button
          onClick={() => setIsMenuOpen(false)}
          className={`mt-6 px-5 py-2 rounded-md font-medium transition-colors duration-300 ${
            darkMode
              ? 'bg-gray-800 text-gray-200 hover:bg-gray-700'
              : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close Menu
        </motion.button>
      </motion.nav>
    </>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  custom: number;
  isExpanded?: boolean;
}

interface NavItemMobileProps extends NavItemProps {
  onClick: () => void;
}

const NavItemDesktop: React.FC<NavItemProps> = ({ 
  to, 
  label, 
  icon, 
  activeSection, 
  setActiveSection, 
  darkMode, 
  isExpanded = false, 
  custom 
}) => {
  const isActive = activeSection === to;

  return (
    <motion.div
      custom={custom}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: custom * 0.1 }}
    >
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={() => setActiveSection(to)}
        className={`relative flex items-center ${
          isExpanded ? 'justify-start w-full px-2' : 'justify-center w-10'
        } h-10 rounded-md cursor-pointer transition-all duration-300 group ${
          isActive
            ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg'
            : darkMode
            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            : 'bg-teal-50 text-teal-700 hover:bg-emerald-100'
        }`}
      >
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
        >
          {icon}
          {isExpanded && (
            <motion.span 
              className="ml-2 text-xs font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {label}
            </motion.span>
          )}
        </motion.div>
        
        {/* Tooltip for collapsed state */}
        {!isExpanded && (
          <motion.div
            className={`absolute right-full mr-2 px-2 py-1 text-xs font-medium rounded-md shadow-md whitespace-nowrap transform -translate-y-1/2 top-1/2 transition-opacity duration-300 pointer-events-none ${
              darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-teal-800'
            } opacity-0 group-hover:opacity-100`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {label}
            <div
              className={`absolute top-1/2 right-0 w-1.5 h-1.5 transform rotate-45 -translate-y-1/2 translate-x-0.5 ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            ></div>
          </motion.div>
        )}
        
        {isActive && (
          <motion.div
            className="absolute -left-0.5 top-1/2 w-1 h-5 bg-emerald-500 rounded-full transform -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </ScrollLink>
    </motion.div>
  );
};

const NavItemMobile: React.FC<NavItemMobileProps> = ({
  to,
  label,
  icon,
  activeSection,
  setActiveSection,
  darkMode,
  onClick,
  custom,
}) => {
  const isActive = activeSection === to;

  return (
    <motion.div
      custom={custom}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: custom * 0.1 }}
    >
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={() => setActiveSection(to)}
        onClick={onClick}
        className={`flex items-center space-x-2 px-5 py-2 rounded-md cursor-pointer transition-all duration-300 w-56 ${
          isActive
            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
            : darkMode
            ? 'text-gray-200 hover:bg-gray-800'
            : 'text-teal-800 hover:bg-emerald-50'
        }`}
      >
        <motion.span className="flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {icon}
        </motion.span>
        <span className="text-base font-medium">{label}</span>
        {isActive && (
          <motion.div
            className="absolute left-0 w-1 h-5 bg-emerald-500 rounded-r-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </ScrollLink>
    </motion.div>
  );
};

export default CombinedNavigation;