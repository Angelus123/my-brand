import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiHome, FiUser, FiCode, FiBriefcase, FiFolder, FiFileText, FiMenu, FiX } from "react-icons/fi";

interface CombinedNavigationProps {
  darkMode?: boolean;
}

const CombinedNavigation: React.FC<CombinedNavigationProps> = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation (Visible on md and larger) */}
      <nav
        className={`hidden md:flex fixed top-1/2 right-4 transform -translate-y-1/2 flex-col space-y-3 p-2 rounded-xl
                  ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-800 border-gray-700'}
                  border shadow-lg z-50`}
      >
        <NavItemDesktop
          to="hero"
          label="Home"
          icon={<FiHome size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
        <NavItemDesktop
          to="about"
          label="About"
          icon={<FiUser size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
        <NavItemDesktop
          to="skill"
          label="Skills"
          icon={<FiCode size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
        <NavItemDesktop
          to="experiences"
          label="Experience"
          icon={<FiBriefcase size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
        <NavItemDesktop
          to="portfolio"
          label="Portfolio"
          icon={<FiFolder size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
        <NavItemDesktop
          to="resume"
          label="Resume"
          icon={<FiFileText size={16} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
        />
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`md:hidden fixed top-2 right-4 p-2 rounded-full shadow-lg z-50
                  ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'}
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation (Visible on mobile when menu open) */}
      <nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col justify-center items-center space-y-6
                  ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}
                  transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <NavItemMobile
          to="hero"
          label="Home"
          icon={<FiHome size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavItemMobile
          to="about"
          label="About"
          icon={<FiUser size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavItemMobile
          to="skill"
          label="Skills"
          icon={<FiCode size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavItemMobile
          to="experiences"
          label="Experience"
          icon={<FiBriefcase size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavItemMobile
          to="portfolio"
          label="Portfolio"
          icon={<FiFolder size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
        <NavItemMobile
          to="resume"
          label="Resume"
          icon={<FiFileText size={24} />}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          onClick={() => setIsMenuOpen(false)}
        />
      </nav>
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
}

interface NavItemMobileProps extends NavItemProps {
  onClick: () => void;
}

// Use NavItemProps directly instead of NavItemDesktopProps
const NavItemDesktop = ({ to, label, icon, activeSection, setActiveSection, darkMode }: NavItemProps) => {
  const isActive = activeSection === to;

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onSetActive={() => setActiveSection(to)}
      className={`relative flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-all duration-300 group
                ${isActive
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
    >
      <div
        className={`absolute right-full mr-3 px-3 py-1.5 text-xs font-medium rounded-md shadow-md
                  ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                  whitespace-nowrap transform -translate-y-1/2 top-1/2`}
      >
        {label}
        <div
          className={`absolute top-1/2 right-0 w-2 h-2 transform rotate-45 -translate-y-1/2 translate-x-1
                    ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
        ></div>
      </div>
      <div className="flex items-center justify-center">{icon}</div>
      {isActive && (
        <div className="absolute -left-1 top-1/2 w-1 h-6 bg-emerald-500 rounded-full transform -translate-y-1/2"></div>
      )}
    </ScrollLink>
  );
};

const NavItemMobile = ({ to, label, icon, activeSection, setActiveSection, darkMode, onClick }: NavItemMobileProps) => {
  const isActive = activeSection === to;

  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
      onSetActive={() => setActiveSection(to)}
      onClick={onClick}
      className={`flex items-center space-x-3 px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 w-64
                ${isActive
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                  : darkMode
                    ? 'text-gray-200 hover:bg-gray-800'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-lg font-medium">{label}</span>
      {isActive && (
        <div className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full" />
      )}
    </ScrollLink>
  );
};

export default CombinedNavigation;