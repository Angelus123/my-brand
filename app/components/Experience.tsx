// app/components/Experiences.tsx
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiExternalLink, FiMapPin, FiCalendar, FiChevronRight } from "react-icons/fi";

// Define interfaces for type safety
interface Experience {
  company: string;
  role: string;
  period: string;
  image: string;
  location: string;
  description: string | string[];
  link?: string | null;
  technologies?: string[];
}

interface ExperiencesProps {
  darkMode: boolean;
}

const experiences: Experience[] = [
  {
    company: "Teknowledge",
    role: "Software Developer",
    period: "Oct 2023 – Present",
    image: "/images/assets/img/portfolio/teknowledge-landing.png",
    location: "On Site, Rwanda",
    description: [
      "Support OpenText SMAX on Azure, AWS, GCP, and on-prem (install, upgrade, troubleshoot).",
      "Develop internal software tools using Python, Java, and JavaScript to automate tasks and boost productivity.",
      "Use Docker, Kubernetes, and logs for debugging and deployment.",
      "Integrate systems with external partners for secure, efficient data exchange.",
    ],
    technologies: ["Azure", "AWS", "GCP", "Python", "Java", "JavaScript", "Docker", "Kubernetes"],
  },
  {
    company: "Abidors",
    role: "Software Developer",
    period: "Mar 2023 - Aug 2023",
    image: "/images/assets/img/portfolio/abidors-landing.png",
    location: "Remote, Bulgaria",
    description: [
      "Built a full-featured platform using the PERN stack (PostgreSQL, Express.js, React, Node.js).",
      "Developed secure APIs and optimized queries, improving performance by 30%.",
      "Led API design, business logic, and frontend-backend integration.",
      "Deployed on AWS, using CI/CD, version control, and automated testing.",
      "Worked in an Agile team with regular sprints and code reviews.",
    ],
    technologies: ["PostgreSQL", "Express.js", "React", "Node.js", "AWS", "CI/CD"],
  },
  {
    company: "GAIA Survey Rwanda",
    role: "Full-Stack Developer",
    period: "Mar 2019 - Nov 2019",
    image: "/images/assets/img/portfolio/gaia-landingpage.png",
    location: "Kigali, Rwanda",
    description:
      "Gaia Survey Rwanda, a division of Gaia Survey AB Sweden, specializes in constructing wells/boreholes, water pipeline installations, and various pump systems, offering water treatment, storage solutions, and ongoing maintenance for public and private wells.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
  },
  {
    company: "Sluu Corporation LTD",
    role: "Frontend Engineer",
    period: "Nov 2019 - Jan 2020",
    image: "/images/assets/img/portfolio/portfolio-4.jpg",
    location: "Remote",
    description: [
      "Led full-stack development of a PERN-based web platform, managing architecture and frontend/backend.",
      "Built a secure JavaScript sandbox with React and Babylon.js for in-browser code execution.",
      "Designed and deployed an admin dashboard for analytics, user management, and subscriptions.",
      "Integrated real-time chat and video streaming for team collaboration.",
      "Developed a custom VS Code extension to enhance developer workflow.",
      "Provided technical support ensuring platform stability and user satisfaction.",
    ],
    technologies: ["React", "Babylon.js", "Node.js", "WebSockets", "VS Code API"],
  },
  {
    company: "Andela",
    role: "Software Developer",
    period: "Jan 2019 - Apr 2020",
    image: "/images/assets/img/portfolio/andela-landing.png",
    location: "Kigali, Rwanda",
    description: [
      "Selected as a full-stack developer through Andela's competitive talent program.",
      "Contributed to Author's Haven — a full-stack article publishing platform (PostgreSQL, React/Redux, Node.js, Express).",
      "Built new features, improved UI/UX, and maintained test coverage with unit/integration tests.",
      "Collaborated with Agile teams to deliver scalable, production-ready code.",
      "Led interviews and mentored new developers through bootcamp sessions.",
      "Gained hands-on experience working in distributed, high-performance engineering teams.",
    ],
    technologies: ["PostgreSQL", "React/Redux", "Node.js", "Express", "Jest", "Agile"],
    link: "https://andela.com",
  },
];

const Experiences: React.FC<ExperiencesProps> = ({ darkMode }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>(experiences[0].company);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);
  const currentExperience = experiences.find((exp) => exp.company === selectedCompany);

  // Framer Motion variants for animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experiences"
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
            My Professional Journey
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-teal-800'} leading-relaxed`}>
            A showcase of my professional experiences, highlighting my contributions to innovative projects and teams.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row gap-8 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-400 to-teal-600 opacity-60 hidden md:block"></div>
          
          {/* Left Side: Company Tabs */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 flex flex-col space-y-4 relative"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-7 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full z-10 ${
                  selectedCompany === exp.company 
                    ? 'bg-emerald-500 ring-4 ring-emerald-500/30' 
                    : darkMode 
                      ? 'bg-gray-600' 
                      : 'bg-teal-300'
                } hidden md:block`}></div>
                
                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedCompany(exp.company);
                    setShowFullDescription(false);
                  }}
                  className={`relative flex items-center justify-between w-full p-5 rounded-xl transition-all duration-300 group ${
                    selectedCompany === exp.company
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-white text-teal-800 hover:bg-teal-50 border border-teal-100'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: selectedCompany !== exp.company ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : ""
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-lg">{exp.company}</span>
                    <span className={`text-sm mt-1 ${
                      selectedCompany === exp.company ? 'text-emerald-100' : darkMode ? 'text-gray-400' : 'text-teal-600'
                    }`}>
                      {exp.role}
                    </span>
                  </div>
                  
                  <div className={`flex items-center ${
                    selectedCompany === exp.company ? 'text-white' : darkMode ? 'text-gray-400' : 'text-teal-400'
                  }`}>
                    <span className="text-xs mr-2 hidden sm:block">{exp.period.split(" ")[0]}</span>
                    <FiChevronRight className={`transform transition-transform ${
                      selectedCompany === exp.company ? 'rotate-0' : 'group-hover:translate-x-1'
                    }`} />
                  </div>
                  
                  {selectedCompany === exp.company && (
                    <span className="absolute -left-1 top-1/2 h-8 w-1 bg-emerald-500 rounded-r-full transform -translate-y-1/2 hidden md:block" />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Details */}
          <AnimatePresence mode="wait">
            {currentExperience && (
              <motion.div
                key={currentExperience.company}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-2/3 relative"
              >
                {/* Vertical Separator Line */}
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 to-teal-500 opacity-50 hidden md:block"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-teal-100/50">
                  {/* Image */}
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={currentExperience.image}
                      alt={`${currentExperience.company} illustration`}
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
                  </div>
                  {/* Details */}
                  <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-b-2xl`}>
                    <h3 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-teal-900'} mb-2`}>
                      {currentExperience.role}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center">
                        <FiCalendar className={`mr-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-teal-700'}`}>
                          {currentExperience.period}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className={`mr-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-teal-700'}`}>
                          {currentExperience.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`text-base ${darkMode ? 'text-gray-300' : 'text-teal-800'} leading-relaxed mb-6`}>
                      {Array.isArray(currentExperience.description) ? (
                        <>
                          <ul className="list-disc pl-5 space-y-2">
                            {(showFullDescription
                              ? currentExperience.description
                              : currentExperience.description.slice(0, 3)
                            ).map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          {currentExperience.description.length > 3 && (
                            <button
                              onClick={toggleDescription}
                              className={`mt-4 text-sm font-medium ${
                                darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-500 hover:text-emerald-600'
                              } underline transition-colors duration-300 flex items-center`}
                            >
                              {showFullDescription ? "Show Less" : "Show More"}
                            </button>
                          )}
                        </>
                      ) : (
                        <p>{currentExperience.description}</p>
                      )}
                    </div>
                    
                    {/* Technologies */}
                    {currentExperience.technologies && (
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-teal-800'}`}>
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {currentExperience.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-sm ${
                                darkMode
                                  ? 'bg-emerald-900/50 text-emerald-300'
                                  : 'bg-emerald-100 text-emerald-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {currentExperience.link && (
                      <a
                        href={currentExperience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                          darkMode
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-emerald-500 text-white hover:bg-emerald-600'
                        }`}
                      >
                        <FiExternalLink className="mr-2" />
                        Visit {currentExperience.company}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;