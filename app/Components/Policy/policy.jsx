import React from "react";

const Policy = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto font-montserrat relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="mb-16 relative">
        <div className="w-20 h-2 bg-indigo-600 mb-4 rounded-full mx-auto md:mx-0"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center md:text-left relative">
          Why Choose <span className="text-indigo-600">InnoSphere</span>
          <div className="absolute -right-8 -top-8 w-16 h-16 bg-indigo-100 rounded-full blur-xl opacity-70 hidden md:block"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Product Ship Fast */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-10 group-hover:bg-indigo-100 transition-colors duration-300"></div>

          <div className="mb-6 p-4 bg-indigo-100 rounded-2xl inline-block group-hover:bg-indigo-200 transition-colors duration-300">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
            >
              <path
                d="M16 36H42C43.1 36 44 35.1 44 34V12C44 10.9 43.1 10 42 10H16C14.9 10 14 10.9 14 12V34C14 35.1 14.9 36 16 36Z"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 28H10C8.9 28 8 28.9 8 30V34C8 35.1 8.9 36 10 36H14"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 20H8"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M14 26H12"
                stroke="#4F46E5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Product Ship Fast
          </h3>

          <p className="text-slate-600 mb-4">
            Get your product up and running in just 21 days with our streamlined development process.
          </p>

          <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        {/* SEO Ready */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors duration-300"></div>

          <div className="mb-6 p-4 bg-blue-100 rounded-2xl inline-block group-hover:bg-blue-200 transition-colors duration-300">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
            >
              <circle
                cx="32"
                cy="32"
                r="20"
                stroke="#2563EB"
                strokeWidth="2.5"
              />
              <path
                d="M32 20L38 32H26L32 20Z"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.5"
              />
              <path d="M32 36V44" stroke="#2563EB" strokeWidth="2.5" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">SEO Ready</h3>

          <p className="text-slate-600 mb-4">
            Our apps are optimized from the ground up to rank well on search engines and drive organic traffic.
          </p>

          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>

        {/* Fast, Reliable Apps */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors duration-300"></div>

          <div className="mb-6 p-4 bg-blue-100 rounded-2xl inline-block group-hover:bg-blue-200 transition-colors duration-300">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
            >
              <circle
                cx="32"
                cy="32"
                r="20"
                fill="#1E88E5"
                stroke="#1E88E5"
                strokeWidth="2.5"
              />
              <path
                d="M32 20L24 36H32L32 44L40 28H32L32 20Z"
                fill="white"
                stroke="#1E88E5"
                strokeWidth="0"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Fast, Reliable Apps
          </h3>

          <p className="text-slate-600 mb-4">
            Experience lightning-fast performance with our optimized applications built for speed and dependability.
          </p>

          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
          <p className="text-white/80 font-medium">Client Satisfaction</p>
        </div>

        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold mb-2">10+</p>
          <p className="text-white/80 font-medium">Projects Completed</p>
        </div>

        <div className="text-center">
          <p className="text-4xl md:text-5xl font-bold mb-2">21</p>
          <p className="text-white/80 font-medium">Days to Launch</p>
        </div>
      </div>
    </section>
  );
};

export default Policy;