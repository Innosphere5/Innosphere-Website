
"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

// Import client images (you'll need to add these to your Images folder)
import client1 from "../Images/client1.jpg"; // Add actual client images
import client2 from "../Images/client2.jpg";
import client3 from "../Images/client3.jpg";

const TestimonialSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: client1,
      rating: 5,
      testimonial: "Working with Innosphere was a game-changer for our business. Their team delivered a stunning website that not only looks amazing but performs exceptionally well. The attention to detail and modern design approach exceeded our expectations.",
      project: "E-commerce Platform",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-100"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, EduTech Pro",
      company: "EduTech Pro",
      image: client2,
      rating: 5,
      testimonial: "The team at Innosphere transformed our vision into reality with incredible precision. Their innovative approach to UI/UX design and seamless development process made our educational platform stand out in the market.",
      project: "Learning Management System",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-100"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Marketing Director, BrandForce",
      company: "BrandForce",
      image: client3,
      rating: 5,
      testimonial: "Exceptional service and outstanding results! Innosphere delivered our project on time with cutting-edge features. Their communication throughout the process was transparent and professional. Highly recommended!",
      project: "Brand Management Tool",
      gradient: "from-emerald-500 to-teal-500",
      bgGlow: "bg-emerald-100"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            } transition-colors duration-200`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-30 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-[#5409da] rounded-full text-sm font-medium mb-6">
            <Quote size={16} className="mr-2" />
            Client Testimonials
          </div>

          <h2 className="text-5xl font-bold mb-6 font-montserrat">
            <span className="bg-gradient-to-r from-[#5409da] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="text-gray-800">Say About Us</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Innosphere.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                activeCard === testimonial.id ? "ring-2 ring-purple-500 shadow-2xl -translate-y-2" : ""
              }`}
              onClick={() => setActiveCard(testimonial.id)}
              onMouseEnter={() => setActiveCard(testimonial.id)}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient} rounded-t-3xl`}></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={40} className="text-gray-400" />
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Project Tag */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 bg-gradient-to-r ${testimonial.gradient} text-white`}>
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} animate-pulse opacity-30`}></div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover border-3 border-white shadow-lg relative z-10"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
              <span className="text-2xl font-bold text-white">50+</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Happy Clients</h3>
            <p className="text-gray-600">Satisfied customers worldwide</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <span className="text-2xl font-bold text-white">98%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
            <p className="text-gray-600">Projects delivered on time</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600">Round-the-clock assistance</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#5409da] to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5409da]/90 to-purple-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Join our growing list of satisfied clients and transform your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-[#5409da] rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Your Project
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  View More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
