"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect with reduced threshold for faster glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'policy', 'products', 'team', 'clientwork' , 'testmonial', 'contact'];
      let currentSection = 'home';

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (accounting for navbar height)
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Enhanced water ripple effect on scroll
  useEffect(() => {
    if (!scrolled) return;

    const createRipple = () => {
      const header = document.querySelector('header');
      if (!header) return;

      const ripple = document.createElement('span');
      ripple.className = 'water-ripple';

      // Random position within navbar
      const x = Math.random() * header.offsetWidth;
      const size = Math.random() * 40 + 15;

      ripple.style.left = `${x}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      header.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple && ripple.parentElement) {
          ripple.parentElement.removeChild(ripple);
        }
      }, 2500);
    };

    const rippleInterval = setInterval(createRipple, 400);
    return () => clearInterval(rippleInterval);
  }, [scrolled]);

  // Enhanced smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for fixed navbar
      const offsetTop = element.offsetTop - navbarHeight;

      // Smooth scroll with easing
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Update active section immediately for better UX
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items - Updated to match your page structure
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'Policy', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'team', label: 'Team' },
    { id: 'clientwork', label: 'Client Work' },
  
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <style jsx global>{`
        .water-ripple {
          position: absolute;
          top: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 70%, transparent 100%);
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 2.5s ease-out;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.9;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(79, 70, 229, 0.8));
          }
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .clay-morphism {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
        }

        .logo-gradient {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4f46e5 50%, #6366f1 75%, #1e1b4b 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 6s ease-in-out infinite;
          filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.3));
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .logo-gradient-scrolled {
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 20%, #4f46e5 40%, #6366f1 60%, #2563eb 80%, #1e1b4b 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 6s ease-in-out infinite, pulse-glow 3s ease-in-out infinite;
          filter: drop-shadow(0 2px 8px rgba(37, 99, 235, 0.6));
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .logo-gradient:hover {
          animation: gradient-shift 2s ease-in-out infinite, pulse-glow 1.5s ease-in-out infinite;
          transform: scale(1.02);
        }

        /* Smooth scrolling for the entire page */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4f46e5, #6366f1);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #3730a3, #4f46e5);
        }
      `}</style>
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: 1,
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
          background: scrolled 
            ? "rgba(255, 255, 255, 0.08)" 
            : "linear-gradient(145deg, #ffffff, #f8fafc)",
          borderColor: scrolled 
            ? "rgba(255, 255, 255, 0.15)" 
            : "transparent",
          boxShadow: scrolled 
            ? "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)"
            : "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff, inset 8px 8px 16px #e6e6e6, inset -8px -8px 16px #ffffff"
        }}
        transition={{ duration: 0.6, ease: [0.19, 1.0, 0.22, 1.0] }}
        className={`w-full py-5 px-6 md:px-12 lg:px-16 flex justify-between items-center rounded-b-3xl border transition-all duration-600 ${
          scrolled ? 'glass-morphism' : 'clay-morphism'
        }`}
        style={{
          borderWidth: scrolled ? '1px' : '0px',
          transform: `perspective(1000px) rotateX(${scrolled ? '0deg' : '0.5deg'})`,
          transformOrigin: "top center",
          transition: "all 0.6s cubic-bezier(0.19, 1.0, 0.22, 1.0)"
        }}
      >
        {/* Logo with enhanced gradient styling */}
        <motion.button
          onClick={() => scrollToSection('home')}
          className="text-2xl md:text-3xl font-bold font-montserrat flex items-center gap-2 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span 
            className={scrolled ? 'logo-gradient-scrolled' : 'logo-gradient'}
            animate={{
              scale: scrolled ? 1.02 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            InnoSphere
          </motion.span>
        </motion.button>

        {/* Right-aligned Navigation Links & Contact Button */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium relative group text-base transition-all duration-300 cursor-pointer text-slate-800 hover:text-indigo-600 ${
                activeSection === item.id ? 'text-indigo-600' : ''
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-indigo-600"
                initial={{ width: 0 }}
                animate={{ 
                  width: activeSection === item.id ? '100%' : '0%'
                }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}

          {/* Contact / CTA Button - Enhanced with dynamic styling */}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              scrolled 
                ? 'bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 text-white backdrop-blur-sm shadow-lg shadow-indigo-500/25' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/50'
            } ${activeSection === 'contact' ? 'scale-105 shadow-xl' : ''}`}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              boxShadow: scrolled 
                ? "0 10px 25px rgba(79, 70, 229, 0.4)" 
                : "0 15px 35px rgba(79, 70, 229, 0.6)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.button>
        </div>

        {/* Mobile Menu Button with enhanced styling */}
        <motion.button
          className="md:hidden focus:outline-none p-2 rounded-full transition-all duration-300 ml-auto text-slate-900 hover:bg-gray-100"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </motion.svg>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu - Enhanced Glassmorphic Look when scrolled */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`md:hidden py-4 px-6 flex flex-col gap-4 rounded-b-3xl border-t transition-all duration-600 ${
            scrolled 
              ? "glass-morphism border-white border-opacity-15" 
              : "clay-morphism border-gray-100"
          }`}
          style={{
            background: scrolled 
              ? "rgba(255, 255, 255, 0.08)" 
              : "linear-gradient(145deg, #ffffff, #f8fafc)",
            backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
            boxShadow: scrolled 
              ? "0 15px 35px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
              : "15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff, inset 5px 5px 10px #e6e6e6"
          }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium py-3 border-b transition-all duration-300 text-left border-slate-100 text-slate-800 hover:text-indigo-600 ${
                activeSection === item.id ? 'text-indigo-600 border-indigo-600' : ''
              }`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ x: 10 }}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 4px 15px rgba(79, 70, 229, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.4)"
                : "6px 6px 12px #d1d5db, -6px -6px 12px #ffffff"
            }}
            transition={{ duration: 0.6 }}
            className="mt-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className={`block w-full px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-center ${
                scrolled 
                  ? 'bg-indigo-600 bg-opacity-80 hover:bg-opacity-100 text-white backdrop-blur-sm' 
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              } ${activeSection === 'contact' ? 'scale-105' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;