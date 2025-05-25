"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Handle images
import design from "../Images/design.jpg";
import coding from "../Images/coding.jpg";
import website from "../Images/website.jpg";

// Smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Custom Link Component for smooth scrolling
const ScrollLink = ({ href, className, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();

    // Extract section ID from href (remove the # symbol)
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);

    // Call any additional onClick handler
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

// Aurora Background Component
const AuroraBackground = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Primary Aurora Elements */}
        <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-aurora-shift"></div>
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-gradient-to-l from-blue-300 via-cyan-300 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-aurora-shift-reverse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-[550px] h-[550px] bg-gradient-to-tr from-rose-300 via-fuchsia-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-aurora-float animation-delay-4000"></div>

        {/* Accent Layers */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-violet-400/40 to-indigo-400/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tr from-blue-400/30 to-emerald-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow animation-delay-3000"></div>

        {/* Moving Particles */}
        <div className="absolute inset-0">
          <div className="absolute w-4 h-4 bg-white rounded-full blur-sm animate-particle-1"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full blur-sm animate-particle-2 animation-delay-1000"></div>
          <div className="absolute w-2 h-2 bg-white rounded-full blur-sm animate-particle-3 animation-delay-2000"></div>
        </div>

        {/* Refined Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)]"></div>
      </div>
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <SpeedInsights />
      <Analytics />
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
                  <span className="relative z-10 text-gray-600">From</span>
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
                  <span className="text-gray-600">to</span>
                </motion.span>{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                  {" "}
                  <span className="text-gray-600">Deployment</span>
                </motion.span>
                <br className="md:block" />
                <motion.span
                  className="relative inline-block mt-2"
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
                  <span className="text-gray-600">We Build with</span>

                  <span className="relative ml-2">
                    <span className="relative z-10 text-indigo-600">
                      Impact
                    </span>
                    <svg
                      className="absolute -bottom-1 -left-2 w-full h-3 text-indigo-200"
                      viewBox="0 0 100 12"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M0,0 Q50,12 100,0"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.6,
                          ease: "easeInOut",
                        }}
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
                    <span className="text-gray-600">Design</span>
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

          {/* CTA Buttons with smooth scrolling */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
          >
            <ScrollLink
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Free Consultancy
            </ScrollLink>
            <ScrollLink
              href="#products"
              className="bg-white hover:bg-gray-50 text-slate-900 font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat border border-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Our Products
            </ScrollLink>
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
                Our end-to-end process ensures seamless transition from concept
                to production
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
                    <h3 className="text-white text-2xl font-bold mb-2">
                      Design
                    </h3>
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
    </>
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

/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}
`;

// Add the custom styles to the document head
const StyleInjector = () => {
  useEffect(() => {
    // Create style element
    const style = document.createElement("style");
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
