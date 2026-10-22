import React from "react";

const HomeHero = () => {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 border-2 border-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-10 sm:right-20 w-12 sm:w-16 h-12 sm:h-16 border-2 border-white rounded-lg rotate-45 animate-bounce" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-20 left-1/4 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full animate-pulse" style={{ animationDuration: "2s" }} />
        <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-16 sm:w-24 h-16 sm:h-24 border-2 border-white/50 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="inline-block animate-fadeInUp">SMART-PDS</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-fadeInUp animation-delay-200">
              Odisha
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400 px-2">
            Smart Public Distribution System - Transparent, Efficient & Citizen-Centric
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeInUp animation-delay-600 px-4">
          <a
            href="#fps"
            className="group px-6 sm:px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Explore FPS Services</span>
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#sale"
            className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Explore Sale Services</span>
            <svg
              className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
