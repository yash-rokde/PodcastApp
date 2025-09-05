import React from "react";
import { Clock, Star, TrendingUp } from "lucide-react";
import "./Explore.css";

const videoData = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title:
      "🎧 The Ultimate Podcast Episode About React and Vite Integration in Modern Web Apps",
    summary:
      "In this episode, we explore how to use React with Vite to create blazing-fast web applications. We'll discuss project setup, development best practices, and optimizing video performance. You'll learn how to structure your components, manage state, and deploy your app efficiently. Ideal for developers looking to improve frontend workflow and user experience.",
    duration: "45:32",
    views: "234K",
    rating: 4.8,
    category: "Development",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Episode 2: Advanced Hooks in React",
    summary:
      "Dive deep into React hooks and how they can optimize your application. We cover useState, useEffect, custom hooks, and best practices for building scalable applications.",
    duration: "38:15",
    views: "189K",
    rating: 4.7,
    category: "React",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Episode 3: Styling React Components",
    summary:
      "Learn modern ways to style React components with Tailwind CSS, CSS modules, and styled-components for clean, maintainable code.",
    duration: "42:18",
    views: "156K",
    rating: 4.9,
    category: "Styling",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Episode 4: Performance Optimization",
    summary:
      "Techniques to optimize performance in React apps including memoization, lazy loading, and code splitting to keep your app fast and responsive.",
    duration: "51:27",
    views: "298K",
    rating: 4.8,
    category: "Performance",
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <h1 className="text-3xl font-bold text-white mb-6">Explore Episodes</h1>

        {videoData.map((video, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="relative md:w-1/3">
              <video
                src={video.src}
                className="w-full h-56 object-cover"
                muted
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                {video.category}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                {video.duration}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 p-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                {video.title}
              </h2>
              <div className="flex items-center gap-6 mb-4 text-gray-300 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {video.duration}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> {video.views} views
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {video.rating}
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-justify">
                {video.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center py-2 mt-4">
        <p className="text-gray-400  text-1xl font-bold pt-3">
          © {new Date().getFullYear()} Podverse. All rights reserved.
        </p>
      </div>

      {/* Bottom Spacing */}
      <div className="h-10"></div>
    </div>
  );
};

export default Explore;
