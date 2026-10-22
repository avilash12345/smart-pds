import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            SMART-PDS Odisha
          </h3>
          <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
            Smart Public Distribution System - Ensuring food security for all
          </p>
        </div>
        <div className="border-t border-gray-700 pt-3 sm:pt-4">
          <p className="text-xs sm:text-sm text-gray-400">
            © {currentYear} SMART-PDS, Odisha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
