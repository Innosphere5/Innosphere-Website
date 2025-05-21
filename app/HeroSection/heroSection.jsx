"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Handle images
import design from "../Images/design.jpg";
import coding from "../Images/coding.jpg";
import website from "../Images/website.jpg";

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check if dark mode was previously set
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial theme based on localStorage or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const handleThemeChange = () => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener("storage", handleThemeChange);

    // Create a MutationObserver to detect changes to the html class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          setDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden transition-colors duration-300 dark:bg-slate-600 bg-white min-h-screen flex flex-col justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light theme animation elements */}
        {!darkMode && (
          <>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
            <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60 animate-float-medium"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 animate-float-fast"></div>
          </>
        )}

        {/* Dark theme animation elements */}
        {darkMode && (
          <>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-900 rounded-full blur-3xl opacity-20 animate-float-slow"></div>
            <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-20 animate-float-medium"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-900 rounded-full blur-3xl opacity-15 animate-float-fast"></div>
          </>
        )}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 font-montserrat leading-tight transition-colors duration-300 tracking-tight">
            From Vision to Deployment —<br /> We Build with Impact
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-montserrat transition-colors duration-300 max-w-3xl mx-auto">
            Design, Develop, and Deliver High-Performance Applications
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link
            href="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Free Consultancy
          </Link>
          <Link
            href="/products"
            className="bg-white hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium py-3.5 px-10 rounded-lg text-lg font-montserrat border border-slate-200 dark:border-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Our Products
          </Link>
        </div>

        {/* Image Gallery Section */}
        <div className="bg-indigo-600 rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden transition-colors duration-300 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
          {/* Gallery Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl animate-pulse-medium"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 lg:gap-8 justify-between mb-10">
            {/* Design Image */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group">
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
            </div>

            {/* Code Image */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group">
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
            </div>

            {/* Deployment Image */}
            <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-xl relative group">
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
            </div>
          </div>

          {/* Caption */}
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
              Design to Deploy
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our end-to-end process ensures seamless transition from concept to
              production
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
