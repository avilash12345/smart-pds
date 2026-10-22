import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Update active tab based on scroll position
      const sections = ["home", "fps", "sale", "rostatus"];
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveTab(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100"
          : "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("home");
                  setIsMenuOpen(false);
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer"
              >
                <h1
                  className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${
                    isScrolled ? "text-blue-700" : "text-white"
                  }`}
                >
                  SMART-PDS
                </h1>
                <div
                  className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 mt-0.5 sm:mt-1 ${
                    isScrolled
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                      : "bg-white"
                  }`}
                />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-2">
              <a
                href="#fps"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("fps");
                  const element = document.getElementById("fps");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium lg:font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                  activeTab === "fps"
                    ? isScrolled
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-blue-700 shadow-lg"
                    : isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    : "text-white hover:bg-white/20 hover:text-white"
                }`}
              >
                FPS
              </a>
              <a
                href="#sale"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("sale");
                  const element = document.getElementById("sale");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium lg:font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                  activeTab === "sale"
                    ? isScrolled
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-blue-700 shadow-lg"
                    : isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    : "text-white hover:bg-white/20 hover:text-white"
                }`}
              >
                SALE
              </a>
              <a
                href="#rostatus"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("rostatus");
                  const element = document.getElementById("rostatus");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`px-3 lg:px-4 py-2 rounded-lg font-medium lg:font-semibold text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 ${
                  activeTab === "rostatus"
                    ? isScrolled
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-blue-700 shadow-lg"
                    : isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    : "text-white hover:bg-white/20 hover:text-white"
                }`}
              >
                RO Status
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 touch-manipulation ${
                isScrolled
                  ? "text-gray-700 hover:bg-blue-50 active:bg-blue-100"
                  : "text-white hover:bg-white/20 active:bg-white/30"
              }`}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
              className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 origin-top-right ${
                isMenuOpen
                  ? "scale-100 opacity-100 visible"
                  : "scale-95 opacity-0 invisible"
              }`}
            >
              <div className="py-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick("home");
                    const element = document.getElementById("home");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeTab === "home"
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#fps"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick("fps");
                    const element = document.getElementById("fps");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeTab === "fps"
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  }`}
                >
                  FPS
                </a>
                <a
                  href="#sale"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick("sale");
                    const element = document.getElementById("sale");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeTab === "sale"
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  }`}
                >
                  SALE
                </a>
                <a
                  href="#rostatus"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick("rostatus");
                    const element = document.getElementById("rostatus");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    activeTab === "rostatus"
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  }`}
                >
                  RO Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
