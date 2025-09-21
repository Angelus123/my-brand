import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiExternalLink, FiMapPin, FiCalendar, FiChevronRight } from "react-icons/fi";

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

interface Props {
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
      "Develop internal software tools using Python, Java, JavaScript to automate tasks and boost productivity.",
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
    description: "Gaia Survey Rwanda, a division of Gaia Survey AB Sweden, specializes in constructing wells/boreholes, water pipeline installations, and various pump systems, offering water treatment, storage solutions, and ongoing maintenance for public and private wells.",
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

const Experiences: React.FC<Props> = ({ darkMode }) => {
  const [selected, setSelected] = useState(experiences[0].company);
  const [showFull, setShowFull] = useState(false);
  const current = experiences.find((exp) => exp.company === selected);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-emerald-50 to-teal-100'} transition-colors duration-500`}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl"> {/* Changed from max-w-5xl to max-w-6xl */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} mb-3 relative inline-block`}>
            My Professional Journey
            <span className="absolute -bottom-1 left-1/4 w-1/2 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-200' : 'text-teal-800'} leading-relaxed`}>
            A showcase of my professional experiences, highlighting contributions to innovative projects.
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col md:flex-row gap-4 relative">
          <div className="absolute left-4 md:left-1/3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-600 opacity-50 hidden md:block"></div>
          
          <motion.div variants={item} className="w-full md:w-1/3 flex flex-col space-y-3">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full z-10 ${
                  selected === exp.company ? 'bg-emerald-500 ring-2 ring-emerald-500/30' : darkMode ? 'bg-gray-600' : 'bg-teal-300'
                } hidden md:block`}></div>
                <motion.button
                  variants={item}
                  onClick={() => { setSelected(exp.company); setShowFull(false); }}
                  className={`flex justify-between w-full p-4 rounded-lg transition-all duration-300 group ${
                    selected === exp.company
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                      : darkMode
                      ? 'bg-gray-800 text-gray-200 hover:bg-gray-700/80 shadow-sm border border-gray-700'
                      : 'bg-white text-teal-800 hover:bg-teal-50/50 shadow-sm border border-teal-200'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                  whileHover={{ scale: 1.03, boxShadow: selected !== exp.company ? "0 6px 20px -5px rgba(0, 0, 0, 0.15)" : "" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex flex-col items-start">
                    <span className="font-semibold text-base">{exp.company}</span>
                    <span className={`text-xs mt-1 ${selected === exp.company ? 'text-emerald-100' : darkMode ? 'text-gray-400' : 'text-teal-600'}`}>
                      {exp.role}
                    </span>
                  </div>
                  <div className={`flex items-center ${selected === exp.company ? 'text-white' : darkMode ? 'text-gray-400' : 'text-teal-400'}`}>
                    <span className="text-xs mr-1 hidden sm:block">{exp.period.split(" ")[0]}</span>
                    <FiChevronRight className={`transition-transform ${selected === exp.company ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />
                  </div>
                  {selected === exp.company && (
                    <span className="absolute -left-1 top-1/2 h-6 w-1 bg-emerald-500 rounded-r-full -translate-y-1/2 hidden md:block" />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.company}
                variants={item}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full md:w-2/3"
              >
                <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 to-teal-500 opacity-40 hidden md:block"></div>
                <div className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-teal-100'} border`}>
                  <div className="relative h-56 md:h-72">
                    <Image
                      src={current.image}
                      alt={`${current.company} illustration`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      quality={75}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/70' : 'from-teal-900/70'} via-transparent to-transparent`} />
                  </div>
                  <div className={`p-5 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-b-xl`}>
                    <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-teal-900'} mb-2`}>{current.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                      <div className="flex items-center">
                        <FiCalendar className={`mr-1.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} size={14} />
                        <p className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-teal-700'}`}>{current.period}</p>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className={`mr-1.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} size={14} />
                        <p className={`text-xs font-medium ${darkMode ? 'text-gray-200' : 'text-teal-700'}`}>{current.location}</p>
                      </div>
                    </div>
                    <div className={`text-sm ${darkMode ? 'text-gray-200' : 'text-teal-800'} mb-5 leading-relaxed`}>
                      {Array.isArray(current.description) ? (
                        <>
                          <ul className="list-disc pl-4 space-y-1.5">
                            {(showFull ? current.description : current.description.slice(0, 3)).map((item, i) => (
                              <li key={i} className="text-sm">{item}</li>
                            ))}
                          </ul>
                          {current.description.length > 3 && (
                            <button
                              onClick={() => setShowFull(!showFull)}
                              className={`mt-3 text-xs font-medium ${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-500 hover:text-emerald-600'} underline transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50`}
                            >
                              {showFull ? "Show Less" : "Show More"}
                            </button>
                          )}
                        </>
                      ) : (
                        <p>{current.description}</p>
                      )}
                    </div>
                    {current.technologies && (
                      <div className="mb-5">
                        <h4 className={`text-base font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-teal-800'}`}>Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {current.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                darkMode ? 'bg-emerald-900/60 text-emerald-200' : 'bg-emerald-100/80 text-emerald-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {current.link && (
                      <a
                        href={current.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
                          darkMode ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-emerald-500 text-white hover:bg-emerald-600'
                        }`}
                      >
                        <FiExternalLink className="mr-1.5" size={14} />
                        Visit {current.company}
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