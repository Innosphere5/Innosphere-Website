"use client";
import { useState } from "react";

import sammer from "../Images/sammer.jpeg";
import gurwinder from "../Images/gurwinder.jpeg";
import sohel from "../Images/sohel.jpeg";
import sahil from "../Images/sahil.jpeg";
import gagan from "../Images/gagan.jpeg";

// Individual TeamMemberCard component to prevent unnecessary re-renders
const TeamMemberCard = ({ member }) => {
  // Local state for this card only - prevents affecting other cards
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Social media icons component
  const SocialIcon = ({ type }) => {
    switch (type) {
      case "twitter":
        return (
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "facebook":
        return (
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.64c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
          </svg>
        );
      case "github":
        return (
          <svg
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Toggle social icons visibility
  const toggleSocial = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsOpen(!isOpen);
  };

  // Handle hover states
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Determine card background based on featured status (member.id === 2)
  const cardBg = member.id === 2 ? "bg-indigo-900 text-white" : "bg-white";

  // Determine text colors based on featured status
  const nameColor = isHovered
    ? "text-indigo-600"
    : member.id === 2
    ? "text-white"
    : "text-gray-800";

  const positionColor = member.id === 2 ? "text-gray-300" : "text-gray-500";

  return (
    <div
      className="relative isolate overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card with isolated hover effects */}
      <div
        className={`${cardBg} rounded-xl shadow-xl transition-all duration-300 h-full ${
          isHovered ? "shadow-2xl -translate-y-2" : ""
        } overflow-hidden`}
      >
        {/* Glowing top border with animation */}
        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-700 ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>

        {/* Image container with isolated hover effects */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image.src || member.image}
            alt={`${member.name} - ${member.position}`}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Overlay gradient on hover - better visibility */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Text content with smooth animations */}
        <div className="p-5 text-center relative z-10">
          <h3
            className={`font-bold text-xl transition-colors duration-300 ${nameColor}`}
          >
            {member.name}
          </h3>
          <p
            className={`text-sm transition-all duration-300 ${positionColor} ${
              isHovered ? "font-medium" : ""
            }`}
          >
            {member.position}
          </p>

          {/* Animated underline - smoother animation */}
          <div
            className={`mx-auto mt-2 h-0.5 bg-gradient-to-r from-blue-600 to-blue-600 transition-all duration-500 ease-out ${
              isHovered ? "w-16" : "w-0"
            }`}
            style={{ backgroundColor: "#1E88E5" }}
          ></div>
        </div>
      </div>

      {/* Social Media Icons - Improved animation with staggered appearance */}
      <div
        className={`absolute left-0 right-0 px-4 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          bottom: "40px",
          zIndex: 20,
        }}
      >
        <div className="flex justify-center space-x-2">
          {member.social.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              aria-label={`${social.icon} profile for ${member.name}`}
              className={`${social.color} text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg transform transition-all`}
              style={{
                transitionDelay: `${isOpen ? idx * 70 : 0}ms`,
                transitionDuration: "400ms",
                transform: isOpen
                  ? "translateY(0) scale(1)"
                  : "translateY(20px) scale(0.5)",
                opacity: isOpen ? 1 : 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.25)";
                e.currentTarget.style.boxShadow =
                  "0 15px 25px -5px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <SocialIcon type={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Toggle button with cleaner animation - persistent hover effect */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={toggleSocial}
          aria-label={`Toggle social media for ${member.name}`}
          aria-expanded={isOpen}
          className="relative text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300"
          style={{ 
            background: `linear-gradient(to right, #1E88E5, #1E88E5)`,
            boxShadow: isOpen ? "0 10px 15px -3px rgba(30, 136, 229, 0.4)" : "",
            focusRingColor: "#1E88E5"
          }}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            boxShadow: isOpen ? "0 10px 15px -3px rgba(99, 102, 241, 0.4)" : "",
          }}
        >
          {/* Animated pulse indicator when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-30"></span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function TeamSection() {
  // Team members data with social media links
  const teamMembers = [
    {
      id: 1,
      name: "Sammer",
      position: "Video Editor",
      image: sammer,
      social: [
        { icon: "twitter", url: "#", color: "bg-blue-400" },
        { icon: "linkedin", url: "#", color: "bg-blue-700" },
        { icon: "instagram", url: "#", color: "bg-pink-600" },
      ],
    },
    {
      id: 2,
      name: "Gurwinder",
      position: "Full Stack Engineer",
      image: gurwinder,
      social: [
        { icon: "twitter", url: "#", color: "bg-blue-400" },
        { icon: "linkedin", url: "#", color: "bg-blue-700" },
        { icon: "instagram", url: "#", color: "bg-pink-600" },
        { icon: "facebook", url: "#", color: "bg-blue-600" },
      ],
    },
    {
      id: 3,
      name: "Sahil",
      position: "Graphic Designer",
      image: sahil,
      social: [
        { icon: "twitter", url: "#", color: "bg-blue-400" },
        { icon: "linkedin", url: "#", color: "bg-blue-700" },
        { icon: "instagram", url: "#", color: "bg-pink-600" },
      ],
    },
    {
      id: 4,
      name: "Sohel",
      position: "Software Developer",
      image: sohel,
      social: [
        { icon: "twitter", url: "#", color: "bg-blue-400" },
        { icon: "linkedin", url: "#", color: "bg-blue-700" },
        { icon: "instagram", url: "#", color: "bg-pink-600" },
        { icon: "facebook", url: "#", color: "bg-blue-600" },
      ],
    },
    {
      id: 5,
      name: "Gagan",
      position: "UI/UX Designer",
      image: gagan,
      social: [
        { icon: "twitter", url: "#", color: "bg-blue-400" },
        { icon: "linkedin", url: "#", color: "bg-blue-700" },
        { icon: "instagram", url: "#", color: "bg-pink-600" },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with subtle animations */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block relative">
            <h2
              className="relative text-base font-semibold text-indigo-600 uppercase tracking-wider mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              MEET THE TEAM
            </h2>
          </div>

          <h1
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent pb-2 font-montserrat"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            MINDS BEHIND INNOSPHERE
          </h1>

          <p
            className="mt-6 text-xl text-gray-800 max-w-2xl mx-auto"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Building fast, SEO-first SaaS solutions with cutting-edge technology
            and innovative design.
          </p>
        </div>

        {/* Team Members Grid - using unique component per card to isolate state */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes gradientMove {
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

        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
