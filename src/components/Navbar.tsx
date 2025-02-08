import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const products = [
    {
      name: 'LabQFusion',
      description: 'Comprehensive Laboratory Management System',
      icon: 'flask',
      href: '/labq-fusion',
    },
    {
      name: 'CareLinkAccess',
      description: 'Healthcare Provider Scheduling Solution',
      icon: 'calendar-check',
      href: '/carelink-access',
    },
    {
      name: 'EMRVault',
      description: 'Secure Electronic Medical Records Management',
      icon: 'shield-alt',
      href: '#',
      comingSoon: true,
    },
    {
      name: 'DocuHealth',
      description: 'Healthcare Documentation Platform',
      icon: 'file-medical-alt',
      href: '#',
      comingSoon: true,
    },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '#',
      children: products,
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  /**
   * Handles navigation and smooth scrolling to contact section
   * @param href - Target href for navigation
   */
  const handleNavigation = (href: string) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);

    // If on homepage and contact link is clicked
    if (href === '/#contact' && location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Default navigation
    navigate(href.replace('/#contact', ''));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative pt-0 pb-0 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-14 w-auto ml-2"
                src="/quantum_leap_logo_trasparent.png"
                alt="Quantum Leaps"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:ml-auto md:space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.name === 'Products' ? productsRef : null}
              >
                {item.children ? (
                  <div
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="text-white hover:text-gray-200 cursor-pointer 
                               px-3 py-2 text-sm font-medium flex items-center 
                               transition-colors duration-300"
                  >
                    {item.name}
                    <svg
                      className={`ml-2 h-4 w-4 transform transition-transform 
                                 ${isProductsOpen ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-white hover:text-gray-200 
                               px-3 py-2 text-sm font-medium 
                               transition-colors duration-300 
                               relative group"
                  >
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white 
                                     transition-all duration-300 
                                     group-hover:w-full"
                    ></span>
                  </Link>
                )}

                {/* Desktop Dropdown Menu */}
                <AnimatePresence>
                  {isProductsOpen && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-20 left-1/2 transform -translate-x-1/2 
                                 mt-4 w-screen max-w-md px-2 sm:px-0"
                    >
                      <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 
                                    overflow-hidden bg-white"
                      >
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {item.children.map((product) => (
                            <div
                              key={product.name}
                              onClick={() => {
                                if (!product.comingSoon) {
                                  navigate(product.href);
                                  setIsProductsOpen(false);
                                }
                              }}
                              className={`
                                -m-3 p-3 flex items-start rounded-lg 
                                hover:bg-gray-50 transition ease-in-out duration-150
                                ${
                                  product.comingSoon
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'cursor-pointer'
                                }
                              `}
                            >
                              <div
                                className="flex-shrink-0 flex items-center justify-center 
                                              h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12"
                              >
                                <i className={`fas fa-${product.icon} text-xl`}></i>
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {product.name}
                                  {product.comingSoon && (
                                    <span
                                      className="ml-2 px-2 py-0.5 
                                                    bg-yellow-100 text-yellow-800 
                                                    text-xs rounded-full"
                                    >
                                      Coming Soon
                                    </span>
                                  )}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Log In Button for Desktop */}
            <Link
              to="/login"
              className="ml-4 px-6 py-2 text-sm font-medium text-white 
                         bg-white/20 hover:bg-white/30 rounded-full 
                         transition-colors duration-300 flex items-center"
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              Log In
            </Link>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-blue-600 to-indigo-700 z-50"
              >
                <div className="px-4 pt-2 pb-6 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      {item.children ? (
                        <div
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="text-white hover:bg-blue-700 cursor-pointer 
                                     px-3 py-3 rounded-lg text-base font-medium flex 
                                     justify-between items-center"
                        >
                          {item.name}
                          <svg
                            className={`h-5 w-5 transform transition-transform 
                                       ${isProductsOpen ? 'rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => handleNavigation(item.href)}
                          className="block text-white hover:bg-blue-700 
                                     px-3 py-3 rounded-lg text-base font-medium"
                        >
                          {item.name}
                        </Link>
                      )}

                      {/* Mobile Products Dropdown */}
                      {isProductsOpen && item.children && (
                        <div className="pl-4 mt-2 space-y-2">
                          {item.children.map((product) => (
                            <div
                              key={product.name}
                              onClick={() => {
                                if (!product.comingSoon) {
                                  navigate(product.href);
                                  setIsMobileMenuOpen(false);
                                }
                              }}
                              className={`
                                flex items-center px-3 py-2 rounded-lg 
                                text-white hover:bg-blue-700
                                ${
                                  product.comingSoon
                                    ? 'opacity-50 cursor-not-allowed'
                                    : 'cursor-pointer'
                                }
                              `}
                            >
                              <i className={`fas fa-${product.icon} mr-3`}></i>
                              <div>
                                <p className="text-base">
                                  {product.name}
                                  {product.comingSoon && (
                                    <span
                                      className="ml-2 px-2 py-0.5 
                                                    bg-yellow-100 text-blue-800 
                                                    text-xs rounded-full"
                                    >
                                      Coming Soon
                                    </span>
                                  )}
                                </p>
                                <p className="text-sm text-gray-300">{product.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Log In Button for Mobile */}
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center text-white hover:bg-blue-700 
                               px-3 py-3 rounded-lg text-base font-medium 
                               bg-white/20 hover:bg-white/30 mt-4"
                  >
                    <i className="fas fa-sign-in-alt mr-2"></i>
                    Log In
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
