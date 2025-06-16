"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronRight, ArrowRight } from "lucide-react";

// Import your images here
import techpoint from "../Images/techpoint.png";
import roadmapfinder from "../Images/roadmapfinder.png";
import threadsnatch from "../Images/threadsnatch.png";


const Product = () => {
  // Animation states for hover effects
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  // Product data with enhanced details
  const products = [
    {
      id: 1,
      title: "RoadmapFinder",
      subtitle: "Learning Resource Navigator",
      description:
        "Connects learners to the internet's best curated resources with personalized learning paths and expert recommendations.",
      image: roadmapfinder,
      imageAlt: "RoadmapFinder interface showing learning paths",
      category: "education",
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Internet Best Courses",
        "Personalized roadmaps",
        "Official Docs & Tools",
        "Blogs on new technologies",
        "AI Powered Career Guidane "
      ],
      technologies: ["Next js", "Firebase", "Tailwind Css" , "OpenRouter AI"],
      productLink: "https://roadmapfinder.tech",
    },
    {
      id: 2,
      title: "Threadsnatch",
      subtitle: "Social Media Downloader API",
      description:
        "Download images, carousel posts, and videos from social media platforms with a simple link. Fast, reliable, and easy integration.",
      image: threadsnatch,
      imageAlt: "Threadsnatch API interface screenshot",
      category: "tools",
      gradient: "from-blue-500 to-sky-600",
      features: [
        "Threader support",
        "Bulk downloading",
        "Developer-friendly API",
      ],
      technologies: ["Node js", "Puppeteer", "AWS", "Serverless Framework"],
      productLink: "https://threadsnatch.online",
    },
    {
      id: 3,
      title: "TechPoint",
      subtitle: "All-in-One Education Platform",
      description:
        "Certificate verification, syllabus downloads, interactive quizzes, and project uploads - all in one comprehensive educational platform.",
      image: techpoint,
      imageAlt: "TechPoint dashboard showing educational features",
      category: "education",
      gradient: "from-emerald-500 to-teal-600",
      features: [
        "Certificate authentication",
        "Interactive learning",
        "Project portfolio",
      ],
      technologies: ["React js", "Firebase", "Email js"],
      productLink: "https://gauravtechpoint.in",
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-purple-100 opacity-30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-100 opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-emerald-100 opacity-20 blur-3xl" />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 grid grid-cols-12 gap-4">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-600"></div>
          ))}
        </div>
        <div className="absolute bottom-10 right-10 grid grid-cols-12 gap-4">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-600"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with enhanced typography */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent pb-2 font-montserrat">
            Innovative Solutions
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto font-montserrat">
            Discover our feature-rich products designed to enhance productivity
            and learning experiences
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "education"
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "tools"
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 transform ${
                hoveredCard === product.id
                  ? "scale-105 shadow-2xl"
                  : "shadow-lg hover:shadow-xl"
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${product.gradient}`}></div>

              {/* Image container with overlay effects */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={480}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-gray-800">
                  {product.category === "education" ? "Education" : "Tools"}
                </div>
              </div>

              <div className="p-6">
                {/* Product title and subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">
                    {product.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6">{product.description}</p>

                {/* Feature pills */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Technology tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {product.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-white text-xs font-medium rounded-md bg-gradient-to-r ${product.gradient}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    href={product.productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${product.gradient} text-white font-medium rounded-lg transition-all duration-200 transform hover:translate-y-px hover:shadow-lg`}
                  >
                    <span>Visit Project</span>
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
