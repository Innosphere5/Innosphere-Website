"use client";
import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Star, Quote, Users, CheckCircle, Clock } from "lucide-react";


// Import client images (you'll need to add these to your Images folder)
import client1 from "../Images/client1.jpg";
import client2 from "../Images/client2.jpg";
import client3 from "../Images/client3.jpg";

const TestimonialSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  // Memoized testimonials data
  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "Taran",
        position: "College Student",
        company: "Chunni Kalan",
        image: client1,
        rating: 5,
        testimonial:
          "Working with Innosphere was a game-changer for our business. Their team delivered a stunning website that not only looks amazing but performs exceptionally well. The attention to detail and modern design approach exceeded our expectations.",
        project: "Drive-in Website",
        category: "Web Development",
      },
      {
        id: 2,
        name: "Gaurav Kumar",
        position: "Founder",
        company: "Tech Point",
        image: client2,
        rating: 5,
        testimonial:
          "The team at Innosphere transformed our vision into reality with incredible precision. Their innovative approach to UI/UX design and seamless development process made our educational platform stand out in the market.",
        project: "E-learning Platform",
        category: "Full-Stack Development",
      },
      {
        id: 3,
        name: "Sahil",
        position: "Founder, Brandbuys",
        company: "brandbuys.in",
        image: client3,
        rating: 5,
        testimonial:
          "Exceptional service and outstanding results. The team's professionalism and technical expertise helped us achieve our digital transformation goals ahead of schedule.",
        project: "Corporate Website",
        category: "UI/UX Design",
      },
    ],
    []
  );

  // Memoized stats data
  const stats = useMemo(
    () => [
      {
        id: 1,
        icon: Users,
        value: "50+",
        label: "Happy Clients",
        description: "Satisfied customers worldwide",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        id: 2,
        icon: CheckCircle,
        value: "98%",
        label: "Success Rate",
        description: "Projects delivered on time",
        color: "text-green-600",
        bgColor: "bg-green-50",
      },
      {
        id: 3,
        icon: Clock,
        value: "24/7",
        label: "Support",
        description: "Round-the-clock assistance",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
      },
    ],
    []
  );

  // Optimized event handlers
  const handleCardClick = useCallback((id) => {
    setActiveCard(id);
  }, []);

  const handleCardHover = useCallback((id) => {
    setActiveCard(id);
  }, []);

  // Memoized Star Rating Component
  const StarRating = useMemo(
    () =>
      ({ rating }) => (
        <div className="flex gap-1 mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-gray-300"
              } transition-colors duration-200`}
              aria-hidden="true"
            />
          ))}
        </div>
      ),
    []
  );

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
     

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Quote size={16} className="mr-2 text-blue-600" />
            Client Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            What Our Clients
            <br />
            <span className="text-blue-600">Say About Us</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Innosphere.
          </p>
        </header>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 ${
                activeCard === testimonial.id
                  ? "ring-2 ring-blue-500 shadow-lg -translate-y-1 border-blue-200"
                  : ""
              }`}
              onClick={() => handleCardClick(testimonial.id)}
              onMouseEnter={() => handleCardHover(testimonial.id)}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 rounded-t-2xl"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={32} className="text-gray-400" />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-blue-50 text-blue-700 border border-blue-200">
                {testimonial.category}
              </div>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Project Tag */}
              <div className="inline-block px-3 py-1 rounded-md text-xs font-medium mb-6 bg-gray-100 text-gray-700">
                {testimonial.project}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.position}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 ring-opacity-0 group-hover:ring-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 text-base">
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
            </article>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-xl mb-4`}
                >
                  <IconComponent size={24} className={stat.color} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;