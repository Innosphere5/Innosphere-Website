"use client"
import { useState } from 'react';
import Image from 'next/image'
import brandbuys from "../Images/brandbuys.png";
import drivein from "../Images/drivein.png";
import TestimonialSection from "../TestimonialSection/testimonialSection";

const ClientWorkSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Drive-in Website",
      category: "Driving Learning Website",
      description: "Modern platform for driving learning license.",
      image: drivein,
      tags: ["React", "TailwindCSS", "Firebase", "EmailJS"],
      status: "Live",
      link: "https://drive-in-omega.vercel.app/",
      features: ["Learning License", "Practice Test", "Renew License"],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      id: 2,
      title: "BrandBuys.in",
      category: "E-commerce",
      description: "Complete e-commerce solution with advanced inventory management and analytics.",
      image: brandbuys,
      tags: ["Shopify", "Razorpay"],
      status: "Live",
      link: "https://brandbuys.in",
      features: ["Inventory Management", "Analytics Dashboard", "Multi-vendor Support"],
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50"
    }
  ];

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-[#5409da] rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-[#5409da] rounded-full mr-2"></span>
            Our Work
          </div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#5409da] via-purple-600 to-[#5409da] bg-clip-text text-transparent">
              Client Success
            </span>
            <br />
            <span className="text-gray-800">Stories</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed ideas into powerful digital solutions that drive business growth and user engagement.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-12 mt-12">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-[#5409da] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`relative overflow-hidden rounded-2xl ${project.bgPattern} p-1 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#5409da]/20`}>
                <div className="bg-white rounded-xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* View Project Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-[#5409da] rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-[#5409da] bg-purple-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#5409da] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Features</h4>
                      <div className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#5409da] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-purple-50 hover:text-[#5409da] transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#5409da] to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5409da]/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into powerful digital solutions that drive results and exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#5409da] rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection />
    </>
  );
};

export default ClientWorkSection;