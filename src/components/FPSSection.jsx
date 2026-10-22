import React from "react";

const FPSSection = () => {
  const fpsLinks = [
    {
      id: 1,
      title: "View Daily Transaction",
      url: "https://smartpds.odisha.gov.in/FPSDayWiseInterface",
      description: "Daily transaction details for FPS",
      icon: "📊",
    },
    {
      id: 2,
      title: "FPS Stock Details",
      url: "https://smartpds.odisha.gov.in/FPS_Stock",
      description: "Current stock information of FPS",
      icon: "📦",
    },
    {
      id: 3,
      title: "FPS Status",
      url: "https://smartpds.odisha.gov.in/FPS_Status",
      description: "Status of Fair Price Shops",
      icon: "🏪",
    },
    {
      id: 4,
      title: "FPS Transactions",
      url: "https://smartpds.odisha.gov.in/FPS_Trans_Int",
      description: "Transaction history for FPS",
      icon: "💳",
    },
    {
      id: 5,
      title: "FPS Authentications",
      url: "https://smartpds.odisha.gov.in/FPS_Auth_Interface",
      description: "Authentication details for FPS",
      icon: "🔐",
    },
    {
      id: 6,
      title: "FPS Entitlement",
      url: "https://smartpds.odisha.gov.in/FPS_Entitlement",
      description: "Entitlement details for FPS",
      icon: "📋",
    },
  ];

  return (
    <section id="fps" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Animated background elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="hidden sm:block absolute bottom-0 left-1/2 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              FPS Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Fair Price Shop management and transaction services
          </p>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {fpsLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-blue-100 active:scale-95"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/10 transition-all duration-300" />
              
              <div className="relative p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {link.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {link.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FPSSection;
