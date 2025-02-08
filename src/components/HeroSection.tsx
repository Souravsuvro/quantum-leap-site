import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC<{ id?: string }> = ({ id = 'hero' }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <motion.section
      id={id}
      className="relative pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 flex flex-col-reverse lg:flex-row items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 max-w-xl mx-auto lg:mx-0"
            >
              {['Empowering Lives', 'Through', 'Technology'].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  style={{ display: 'inline-block', marginRight: index < 2 ? '0.5rem' : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-gray-100 mb-10 max-w-md mx-auto lg:mx-0"
            >
              At our core, we are dedicated to revolutionizing the healthcare ecosystem, ensuring
              accessibility, intuition, and efficiency for all, as we envision a world where
              technology enriches lives effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                className="rounded-full bg-white text-blue-600 px-8 py-3 text-base font-semibold 
                                 shadow-lg hover:bg-blue-50 transform transition duration-300 
                                 ease-in-out hover:scale-105 flex items-center justify-center"
              >
                <i className="fas fa-video mr-3 text-blue-500"></i>
                Watch Demo
              </button>
              <button
                onClick={handleLearnMore}
                className="rounded-full bg-transparent border-2 border-white text-white px-8 py-3 
                           text-base font-medium hover:bg-white/20 transform transition 
                           duration-300 ease-in-out hover:scale-105 flex items-center justify-center"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="mb-12 lg:mb-0 w-full max-w-md lg:max-w-none mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              src="/dashboard_design.png"
              alt="Advanced Healthcare Management"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Subtle Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-2xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full filter blur-2xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            transition: {
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
