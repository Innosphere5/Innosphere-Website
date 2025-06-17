"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Enhanced Social Icon Component with better animations
const SocialIcon = ({
  path,
  href,
  ariaLabel,
  bgColor = "bg-indigo-100",
  hoverBg = "hover:bg-indigo-600",
}) => (
  <Link href={href} aria-label={ariaLabel} className="group">
    <motion.div
      className={`w-12 h-12 flex items-center justify-center rounded-xl ${bgColor} ${hoverBg} border-2 border-indigo-200 text-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-indigo-500/25`}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        whileHover={{ scale: 1.1 }}
      >
        <path d={path} />
      </motion.svg>
    </motion.div>
  </Link>
);

// Enhanced Link Component with better hover effects
const FooterLink = ({ href, children, external = false }) => (
  <li>
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="group relative text-gray-600 hover:text-indigo-600 text-sm transition-all duration-300 flex items-center py-1"
    >
      <motion.span
        className="w-0 group-hover:w-3 h-0.5 mr-0 group-hover:mr-3 bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300 rounded-full"
        whileHover={{ scaleX: 1.2 }}
      />
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
      </span>
      {external && (
        <motion.svg
          className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ scale: 1.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </motion.svg>
      )}
    </Link>
  </li>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setEmail("");
        setIsLoading(false);

        // Reset submission state after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    }
  };

  // Enhanced social media icons
  const socialIcons = [
    {
      path: "M13.6823 10.6218L20.2391 3H18.5778L12.9146 9.61788L8.41826 3H3.2002L10.0765 13.0074L3.2002 21H4.86157L10.8443 14.0113L15.5841 21H20.8023L13.6819 10.6218H13.6823ZM11.5979 13.0886L10.9212 12.0117L5.0002 3.9776H7.5216L12.1216 10.5551L12.7984 11.632L18.9996 20.0378H16.4781L11.5979 13.089V13.0886Z",
      href: "https://twitter.com/innosphere",
      ariaLabel: "X (Twitter)",
    },
    {
      path: "M20.5 3.5H3.5C2.67157 3.5 2 4.17157 2 5V19C2 19.8284 2.67157 20.5 3.5 20.5H20.5C21.3284 20.5 22 19.8284 22 19V5C22 4.17157 21.3284 3.5 20.5 3.5ZM8.25 18.5H5.5V9.5H8.25V18.5ZM6.875 8.25C5.9175 8.25 5.125 7.4575 5.125 6.5C5.125 5.5425 5.9175 4.75 6.875 4.75C7.8325 4.75 8.625 5.5425 8.625 6.5C8.625 7.4575 7.8325 8.25 6.875 8.25ZM18.5 18.5H15.75V14C15.75 13.0375 15.7275 11.8125 14.4275 11.8125C13.1025 11.8125 12.875 12.8375 12.875 13.9V18.5H10.125V9.5H12.75V10.75H12.7875C13.1025 10.035 14.0375 9.285 15.4 9.285C18.1925 9.285 18.5 11.0125 18.5 13.25V18.5Z",
      href: "https://linkedin.com/company/innosphere",
      ariaLabel: "LinkedIn",
    },
    {
      path: "M12 2C6.477 2 2 6.477 2 12C2 16.423 4.865 20.167 8.84 21.5C9.34 21.587 9.52 21.273 9.52 21.007C9.52 20.77 9.513 20.044 9.51 19.197C6.73 19.805 6.14 17.967 6.14 17.967C5.68 16.873 5.03 16.56 5.03 16.56C4.12 15.962 5.1 15.973 5.1 15.973C6.1 16.039 6.64 16.978 6.64 16.978C7.55 18.49 9.07 18.01 9.54 17.753C9.627 17.108 9.876 16.69 10.15 16.427C7.93 16.157 5.57 15.306 5.57 11.473C5.57 10.387 6 9.492 6.65 8.79C6.56 8.543 6.17 7.597 6.75 6.304C6.75 6.304 7.61 6.034 9.5 7.28C10.3 7.057 11.15 6.945 12 6.943C12.85 6.945 13.7 7.057 14.5 7.28C16.39 6.034 17.25 6.304 17.25 6.304C17.83 7.597 17.44 8.543 17.35 8.79C18 9.492 18.43 10.387 18.43 11.473C18.43 15.316 16.07 16.154 13.84 16.417C14.188 16.743 14.5 17.391 14.5 18.391C14.5 19.82 14.485 20.68 14.485 21.007C14.485 21.275 14.665 21.593 15.175 21.5C19.145 20.166 22 16.423 22 12C22 6.477 17.523 2 12 2Z",
      href: "https://github.com/innosphere",
      ariaLabel: "GitHub",
    },
    {
      path: "M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z",
      href: "https://instagram.com/innosphere",
      ariaLabel: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-white border-t-4 border-indigo-500 overflow-hidden">
      {/* Enhanced Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-indigo-100/20 rounded-full blur-3xl"></div>

        {/* Geometric patterns */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-indigo-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-indigo-300 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-indigo-200 rounded-full opacity-30"></div>
      </div>

      {/* Main Footer Content */}
      <motion.div
        className="container mx-auto px-6 py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Enhanced Company Info Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                    Inno
                  </span>
                  <span className="text-indigo-600">sphere</span>
                </h2>
              </motion.div>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
            </div>

            <div className="mb-8">
              <p className="text-indigo-700 font-semibold text-lg mb-3">
                We turn ideas into SaaS fast
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming digital concepts into scalable, reliable SaaS
                products with speed and innovation. Building the future, one
                solution at a time.
              </p>
            </div>

            {/* Enhanced Social Icons */}
            <div className="mb-8">
              <h4 className="text-indigo-600 font-medium mb-4">
                Connect with us
              </h4>
              <div className="flex space-x-4">
                {socialIcons.map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SocialIcon
                      path={icon.path}
                      href={icon.href}
                      ariaLabel={icon.ariaLabel}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-indigo-700 font-bold text-xl mb-6 relative">
              Our Products
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="https://roadmapfinder.tech" external>
                RoadmapFinder.tech
              </FooterLink>
              <FooterLink href="https://threadsnatch.online" external>
                ThreadsNatch.online
              </FooterLink>
              <FooterLink href="https://gauravtechpoint.in" external>
                GauravTechPoint.in
              </FooterLink>
            </ul>
          </motion.div>

          {/* Client Work Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-indigo-700 font-bold text-xl mb-6 relative">
              Client Work
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#" external>
                Drive-in Website
              </FooterLink>
              <FooterLink href="https://brandbuys.in" external>
                BrandBuys.in
              </FooterLink>
              
            </ul>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          className="pt-12 mt-12 border-t-2 border-gray-100"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Innosphere. All rights reserved. Made
              with ❤️ in India
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 text-sm">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "FAQ", href: "#" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
}
