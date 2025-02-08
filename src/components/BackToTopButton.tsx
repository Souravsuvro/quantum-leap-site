import React, { useState, useEffect } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 
          bg-gradient-to-r from-blue-600 to-purple-600 
          text-white w-10 h-10 sm:w-12 sm:h-12 
          rounded-full shadow-2xl 
          hover:from-blue-700 hover:to-purple-700 
          transition-all duration-300 
          transform hover:scale-110 
          flex items-center justify-center
          animate-bounce"
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-base sm:text-xl"></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
