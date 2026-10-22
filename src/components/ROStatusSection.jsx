import React from "react";

const ROStatusSection = () => {
  const roLinks = [
    {
      id: 1,
      title: "RO Dispatch Status",
      url: "https://smartpds.odisha.gov.in/Dist_RO_Int",
      description: "District wise RO dispatch status",
      icon: "🚚",
    },
    {
      id: 2,
      title: "RO Received Status",
      url: "https://smartpds.odisha.gov.in/Recieved_RO_Int",
      description: "RO received status details",
      icon: "📥",
    },
    {
      id: 3,
      title: "RO Received Status (Month)",
      url: "https://smartpds.odisha.gov.in/Dist_Month_RO_Int",
      description: "Month wise RO received status",
      icon: "📆",
    },
    {
      id: 4,
      title: "Truck RO Received",
      url: "https://smartpds.odisha.gov.in/Truck_Ro_Recive_M_Y_Int",
      description: "Truck wise RO received report",
      icon: "🚛",
    },
  ];

  return (
    <section id="rostatus" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-10 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="hidden sm:block absolute top-1/2 right-1/4 w-56 sm:w-72 h-56 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              RO Status
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Release Order dispatch and receipt status tracking
          </p>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {roLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-cyan-100 active:scale-95"
              style={{
                animationDelay: `${index * 80}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:to-blue-600/10 transition-all duration-300" />
              
              <div className="relative p-4 sm:p-5">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <svg
                    className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300"
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
                
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-cyan-700 transition-colors duration-300 leading-tight">
                  {link.title}
                </h3>
                
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {link.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROStatusSection;
