"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`w-full py-5 px-6 md:px-12 lg:px-16 flex justify-between items-center transition-all duration-300 backdrop-blur-sm ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 shadow-lg"
            : "bg-white/70 dark:bg-slate-900/70"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-montserrat flex items-center gap-2"
        >
          <span className="text-indigo-600 dark:text-indigo-400">
            InnoSphere
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            href="/"
            className="text-slate-900 dark:text-slate-200 font-medium relative group text-base transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="text-slate-900 dark:text-slate-200 font-medium relative group text-base transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/products"
            className="text-slate-900 dark:text-slate-200 font-medium relative group text-base transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Our Products
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Contact / CTA Button */}
          <Link
            href="/contact"
            className="ml-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 dark:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col gap-4 animate-fade-in-down">
          <Link
            href="/"
            className="text-slate-900 dark:text-slate-200 font-medium py-2 border-b border-slate-100 dark:border-slate-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-slate-900 dark:text-slate-200 font-medium py-2 border-b border-slate-100 dark:border-slate-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-slate-900 dark:text-slate-200 font-medium py-2 border-b border-slate-100 dark:border-slate-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Products
          </Link>
          <Link
            href="/contact"
            className="mt-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-full font-medium transition-colors text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
