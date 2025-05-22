"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Handle images
import design from "../Images/design.jpg";
import coding from "../Images/coding.jpg";
import website from "../Images/website.jpg";

// Aurora Background Component
const AuroraBackground = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Aurora blobs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute -bottom-8 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

        {/* Additional glow effects */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-medium"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-white/80 mix-blend-overlay"></div>
      </div>
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative w-full pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden transition-colors duration-300 bg-white min-h-screen flex flex-col justify-center">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-6 relative">
          {/* Visual element */}
          <div className="hidden md:block absolute -top-8 -left-8 w-24 h-24 rounded-full bg-indigo-100 blur-xl opacity-80 animate-pulse-slow"></div>
          <div className="hidden md:block absolute -right-4 top-1/2 w-20 h-20 rounded-full bg-blue-100 blur-xl opacity-80 animate-float-medium"></div>

          {/* Animated Main headline with gradient */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-montserrat leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="relative inline-block"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <span className="relative z-10">From</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-indigo-100 -z-10 transform -rotate-1"></span>
              </motion.span>{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                Vision
              </motion.span>{" "}
              <motion.span
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                to
              </motion.span>{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                Deployment
              </motion.span>
              <br className="md:block" /> 
              <motion.span 
                className="relative inline-block mt-2"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              >
                We Build with 
                <span className="relative ml-2">
                  <span className="relative z-10 text-indigo-600">Impact</span>
                  <svg className="absolute -bottom-1 -left-2 w-full h-3 text-indigo-200" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <motion.path 
                      d="M0,0 Q50,12 100,0" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Enhanced subheading with animated text reveal */}
          <div className="flex items-center justify-center">
            <div className="text-xl md:text-2xl text-slate-700 font-montserrat max-w-3xl px-6 relative">
              <div className="flex flex-wrap justify-center gap-2 items-center">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  Design
                </motion.span>
                <motion.span 
                  className="inline-block text-indigo-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  •
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Develop
                </motion.span>
                <motion.span 
                  className="inline-block text-indigo-400"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                >
                  •
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  Deliver
                </motion.span>
              </div>
              <motion.span 
                className="block mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.6 }}
              >
                High-Performance Applications
              </motion.span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          <Link
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Free Consultancy
          </Link>
          <Link
            href="/products"
            className="bg-white hover:bg-gray-50 text-slate-900 font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat border border-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Our Products
          </Link>
        </motion.div>

        {/* Image Gallery Section */}
        <motion.div 
          className="bg-indigo-600 rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden transition-colors duration-300 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {/* Gallery Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse-medium"></div>
          </div>

          {/* Caption - Moved above images for mobile */}
          <div className="text-center relative z-10 mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              Design to Deploy
            </motion.h2>
            <motion.p 
              className="text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
            >
              Our end-to-end process ensures seamless transition from concept to
              production
            </motion.p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8 justify-between">
            {/* Design Image */}
            <motion.div 
              className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 2.4 }}
            >
              <div className="overflow-hidden">
                <Image
                  src={design}
                  alt="Design Interface"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-5">
                  <h3 className="text-white text-2xl font-bold mb-2">Design</h3>
                  <p className="text-white/90 text-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Beautiful and intuitive interfaces
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Code Image */}
            <motion.div 
              className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 2.5 }}
            >
              <div className="overflow-hidden">
                <Image
                  src={coding}
                  alt="Code Interface"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-5">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Development
                  </h3>
                  <p className="text-white/90 text-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Clean, efficient code
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deployment Image */}
            <motion.div 
              className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 2.6 }}
            >
              <div className="overflow-hidden">
                <Image
                  src={website}
                  alt="Deployment Interface"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-5">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Deployment
                  </h3>
                  <p className="text-white/90 text-sm transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Reliable and scalable solutions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add custom keyframe animations for the Aurora background effect
const customStyles = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s infinite;
}

.animate-float-medium {
  animation: float-medium 6s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-6000 {
  animation-delay: 6s;
}
`;

// Add the custom styles to the document head
const StyleInjector = () => {
  useEffect(() => {
    // Create style element
    const style = document.createElement('style');
    style.innerHTML = customStyles;
    // Append to head
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

const EnhancedHeroSection = () => {
  return (
    <>
      <StyleInjector />
      <HeroSection />
    </>
  );
};

export default EnhancedHeroSection;