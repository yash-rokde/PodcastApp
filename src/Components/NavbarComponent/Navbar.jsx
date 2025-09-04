import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Search, Volume2, Clock, Star, TrendingUp, Menu, X  } from 'lucide-react';

import { Link } from "react-router-dom";
import "./Navbar.css"

const videoData = [
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: '🎧 The Ultimate Podcast Episode About React and Vite Integration in Modern Web Apps',
    summary: "In this episode, we explore how to use React with Vite to create blazing-fast web applications. We'll discuss project setup, development best practices, and optimizing video performance. You'll learn how to structure your components, manage state, and deploy your app efficiently. Ideal for developers looking to improve frontend workflow and user experience.",
    duration: '45:32',
    views: '234K',
    rating: 4.8,
    category: 'Development'
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Episode 2: Advanced Hooks in React',
    summary: 'Dive deep into React hooks and how they can optimize your application. We cover useState, useEffect, custom hooks, and best practices for building scalable applications.',
    duration: '38:15',
    views: '189K',
    rating: 4.7,
    category: 'React'
  },
  {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Episode 3: Styling React Components',
    summary: 'Learn modern ways to style React components with Tailwind CSS, CSS modules, and styled-components for clean, maintainable code.',
    duration: '42:18',
    views: '156K',
    rating: 4.9,
    category: 'Styling'
  },
  {
    src: 'https://www.w3schools.com/html/movie.mp4',
    title: 'Episode 4: Performance Optimization',
    summary: 'Techniques to optimize performance in React apps including memoization, lazy loading, and code splitting to keep your app fast and responsive.',
    duration: '51:27',
    views: '298K',
    rating: 4.8,
    category: 'Performance'
  },
];

// Modern Navbar Component
const Navbar = () => {
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

          {/* Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search */}
            <div
              className={`hidden sm:flex items-center bg-gray-900/60 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 ${
                searchFocused
                  ? "ring-2 ring-purple-500/50 bg-gray-900/80"
                  : "hover:bg-gray-900/80"
              }`}
            >
              <Search className="text-gray-400 w-5 h-5 mr-2 sm:mr-3" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white outline-none placeholder-gray-400 w-24 sm:w-40"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Guest Login */}
            <button className="hidden sm:block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Guest Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-gray-900/90 rounded-xl p-3 space-y-2">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar
