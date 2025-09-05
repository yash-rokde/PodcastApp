import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [active, setActive] = useState("Home");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = ["Home", "Explore", "Library"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎙️</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              PODVERSE
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`relative px-3 sm:px-4 py-2 font-medium transition-all duration-300 ${
                  active === link
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link}
                {active === link && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div
              className={`flex items-center bg-gray-900/60 backdrop-blur-sm rounded-xl px-3 py-2 transition-all duration-300 w-[180px] md:w-[220px] ${
                searchFocused
                  ? "ring-2 ring-purple-500/50 bg-gray-900/80"
                  : "hover:bg-gray-900/80"
              }`}
            >
              <Search className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-white text-sm outline-none placeholder-gray-400 w-full"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Guest Login */}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2.5 rounded-2xl font-medium text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Guest Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-900/90 rounded-xl p-4 space-y-3">
            {/* Links */}
            {links.map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => {
                  setActive(link);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-lg transition-all ${
                  active === link
                    ? "text-white bg-purple-600/40"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/80"
                }`}
              >
                {link}
              </Link>
            ))}

            {/* Search inside dropdown */}
            <div
              className={`flex items-center bg-gray-800/80 rounded-xl px-3 py-2 transition-all duration-300 ${
                searchFocused ? "ring-2 ring-purple-500/50" : ""
              }`}
            >
              <Search className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-white text-sm outline-none placeholder-gray-400 w-full"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Guest Login inside dropdown */}
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Guest Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
