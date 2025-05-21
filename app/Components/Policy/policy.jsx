import React from "react";

const Policy = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto font-montserrat">
      <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-center md:text-left">
        Why Choose InnoSphere
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Ship Fast */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
            >
              <path
                d="M16 36H42C43.1 36 44 35.1 44 34V12C44 10.9 43.1 10 42 10H16C14.9 10 14 10.9 14 12V34C14 35.1 14.9 36 16 36Z"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 28H10C8.9 28 8 28.9 8 30V34C8 35.1 8.9 36 10 36H14"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 20H8"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M14 26H12"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-2">
            Product Ship Fast
          </h3>
          <p className="text-base text-gray-800">
            Get your product up and running in just 21 days.
          </p>
        </div>

        {/* SEO Ready */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
            >
              <circle
                cx="32"
                cy="32"
                r="20"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path
                d="M32 20L38 32H26L32 20Z"
                fill="none"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path d="M32 36V44" stroke="#0F172A" strokeWidth="2.5" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-2">SEO Ready</h3>
          <p className="text-base text-gray-800">
            Our apps are optimized to rank well on search engines.
          </p>
        </div>

        {/* Fast, Reliable Apps */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-4">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
            >
              <circle
                cx="32"
                cy="32"
                r="20"
                fill="#0F172A"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path
                d="M32 20L24 36H32L32 44L40 28H32L32 20Z"
                fill="white"
                stroke="#0F172A"
                strokeWidth="0"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy-900 mb-2">
            Fast, Reliable Apps
          </h3>
          <p className="text-base text-gray-800">
            Our applications are built for speed and dependability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Policy;
