import React from 'react';
import SkillBar from './SkillBar';

const skillCategories = {
  Languages: [
    { skill: 'JavaScript', years: 5, total: 5 },
    { skill: 'Java', years: 4, total: 5 },
    { skill: 'Python', years: 3, total: 5 },
    { skill: 'PHP', years: 2, total: 5 }
  ],
  Frontend: [
    { skill: 'HTML/CSS', years: 5, total: 5 },
    { skill: 'React', years: 4, total: 5 },
    { skill: 'Next.js', years: 3, total: 5 },
    { skill: 'Django', years: 2, total: 5 },
    { skill: 'Tailwind', years: 2, total: 5 }
  ],
  Backend: [
    { skill: 'Node.js', years: 4, total: 5 },
    { skill: 'Express', years: 4, total: 5 },
    { skill: 'REST API', years: 4, total: 5 },
    { skill: 'Nest.js', years: 2, total: 5 },
    { skill: 'Spring Boot', years: 3, total: 5 },
  ],
  DevOps: [
    { skill: 'Git', years: 5, total: 5 },
    { skill: 'Docker', years: 3, total: 5 },
    { skill: 'Kubernetes', years: 2, total: 5 },
    { skill: 'CI/CD', years: 2.5, total: 5 },
  ],
  'Database & ORM': [
    { skill: 'MongoDB', years: 4.5, total: 5 },
    { skill: 'MySQL', years: 4.5, total: 5 },
    { skill: 'PostgreSQL', years: 3.5, total: 5 },
    { skill: 'Sequelize', years: 3, total: 5 },
    { skill: 'Prisma', years: 2, total: 5 },
  ],
  'Quality Assurance': [
    { skill: 'Postman', years: 4, total: 5 },
    { skill: 'Manual Testing', years: 2.5, total: 5 },
    { skill: 'Test Case Design', years: 2, total: 5 },
    { skill: 'Bug Reporting (Jira)', years: 2, total: 5 },
    { skill: 'Selenium', years: 1.5, total: 5 },
    { skill: 'Automation Scripts', years: 1, total: 5 },
  ],
  Support: [
    { skill: 'Linux Server Debugging', years: 4, total: 5 },
    { skill: 'SMAX (UCMD)', years: 2, total: 5 },
    { skill: 'Salesforce', years: 1.5, total: 5 },
    { skill: 'Incident Management', years: 2, total: 5 },
    { skill: 'Log Analysis', years: 2, total: 5 },
  ],
  Cybersecurity: [
    { skill: 'OWASP Top 10', years: 1.5, total: 5 },
    { skill: 'Authentication & Authorization', years: 2, total: 5 },
    { skill: 'Security Testing', years: 1.5, total: 5 },
    { skill: 'Data Protection & Encryption', years: 1, total: 5 },
    { skill: 'Secure Coding Practices', years: 1.5, total: 5 },
  ],
};

interface SkillsSectionProps {
  darkMode?: boolean;
}

export default function SkillsSection({ darkMode = true }: SkillsSectionProps) {
  return (
    <div
      id="skills"
      className={`skills-section py-12 ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4"> {/* Increased container width */}
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            className={`text-3xl font-bold ${
              darkMode ? 'text-emerald-400' : 'text-emerald-600'
            } mb-4 relative inline-block`}
          >
            Technical Expertise
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-emerald-500 rounded-full"></span>
          </h2>
          <p
            className={`text-base max-w-lg mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A comprehensive showcase of my technical skills and proficiency levels across various domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Increased gap */}
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className={`p-6 rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-1
                        ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-lg border border-gray-100'}`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                <div
                  className={`w-3.5 h-3.5 rounded-full mr-3 ${
                    darkMode ? 'bg-emerald-500' : 'bg-emerald-600'
                  }`}
                ></div>
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {category}
                </h3>
              </div>

              {/* Skills Container */}
              <div className="flex flex-wrap justify-center gap-5">
                {skills.map(({ skill, years, total }) => (
                  <SkillBar
                    key={skill}
                    skill={skill}
                    years={years}
                    totalYears={total}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div
          className={`mt-12 p-6 rounded-xl text-center ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-md border border-gray-100 dark:border-gray-700`}
        >
          <h3
            className={`text-lg font-semibold mb-5 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            Proficiency Scale
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-gray-400 to-gray-600 rounded-full mr-2"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Beginner (0-30%)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-amber-400 to-amber-600 rounded-full mr-2"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Beginner+ (30-50%)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full mr-2"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Intermediate (50-70%)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-green-400 to-green-600 rounded-full mr-2"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Advanced (70-90%)
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-t from-emerald-400 to-emerald-600 rounded-full mr-2"></div>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Expert (90-100%)
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p
            className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Interested in how I can apply these skills to your projects?
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105
                      ${
                        darkMode
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      } shadow-md hover:shadow-lg`}
          >
            Let&apos;s Discuss Your Project
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
