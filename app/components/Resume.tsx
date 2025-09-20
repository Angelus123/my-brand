import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  // Container animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item animation
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const, // ✅ FIX: cast literal type
      },
    },
  };

  // Dots animation
  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const, // ✅ FIX: cast literal type
      },
    },
  };

  return (
    <section
      id="resume"
      className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-100 to-lime-50 transition-colors duration-500"
    >
      {/* Background Pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_60%)] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-emerald-700 mb-4 relative inline-block">
            Resume
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-teal-900 leading-relaxed">
            A curated showcase of my expertise, experience, and passion for building innovative software solutions.
          </p>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 sm:space-y-16"
        >
          {/* Personal Info */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div
                variants={dotVariants}
                className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"
              />
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="text-sm sm:text-base">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-900 mb-3">
                IZERE Ange Felix
              </h3>
              <ul className="list-none space-y-1.5 text-teal-800">
                <li>Kigali, Rwanda</li>
                <li>+250785182823</li>
                <li>izerefaifelix@gmail.com</li>
              </ul>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="resume-item flex">
            <div className="flex flex-col items-center mr-6 sm:mr-8">
              <motion.div
                variants={dotVariants}
                className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-emerald-500 mb-2 shadow-md"
              />
              <div className="w-1 h-full bg-emerald-500/50 rounded-lg"></div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-4">
                Professional Summary
              </h3>
              <p className="text-sm sm:text-base text-teal-800 leading-relaxed">
                Results-driven Software Engineer with over 5 years of experience crafting scalable applications.
                Expert in Java, Python, JavaScript (React, Next.js, Node.js, Nest.js), and PostgreSQL.
                Proficient in microservices, REST APIs, CI/CD, and DevOps tools like Docker, Kubernetes, and Terraform.
                Experienced in supporting SMAX systems across AWS, GCP, Azure, and on-prem environments.
                Passionate about delivering high-quality software in agile, remote settings with a focus on clean code
                and innovative problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="/images/assets/pdf/felix-resume-9202025.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-white bg-emerald-500 hover:bg-emerald-600 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Download resume PDF"
            >
              <FiDownload className="w-5 h-5 mr-2" />
              Download My CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slow pulse animation */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 12s infinite ease-in-out;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
