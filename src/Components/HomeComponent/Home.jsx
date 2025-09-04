import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Search, Volume2, Clock, Star, TrendingUp } from 'lucide-react';

import "./Home.css"

const Home = () => {

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

  const carouselRef = useRef(null);
  const mainVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mainVideo, setMainVideo] = useState(videoData[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoChange = (video) => {
    setFade(false);
    setTimeout(() => {
      setMainVideo(video);
      setIsPlaying(false);
      setFade(true);
    }, 300);
  };

  const handlePlayPause = () => {
    if (!isPlaying) {
      mainVideoRef.current.play();
    } else {
      mainVideoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24">
      <div className={`transition-all duration-1000 transform ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Main Video */}
            <div className="lg:col-span-3">
              <div className={`relative group transition-all duration-500 ${
                fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-1">
                  <video
                    ref={mainVideoRef}
                    src={mainVideo.src}
                    className="w-full h-[400px] lg:h-[500px] rounded-3xl object-cover"
                    controls={isPlaying}
                  />
                  
                  {!isPlaying && (
                    <>
                      <div className="absolute inset-1 bg-black/40 backdrop-blur-sm rounded-3xl"></div>
                      <button
                        onClick={() => {
                          mainVideoRef.current.play();
                          setIsPlaying(true);
                        }}
                        className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group-hover:scale-110"
                      >
                        <Play className="w-10 h-10 text-white ml-1" />
                      </button>
                    </>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mainVideo.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {mainVideo.title}
                </h1>
                
                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{mainVideo.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{mainVideo.views} views</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{mainVideo.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                  {mainVideo.summary}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105">
                    Explore More
                  </button>
             
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Episodes */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Related Episodes</h2>
              <p className="text-gray-400">Discover more amazing content</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => scroll('left')}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Enhanced Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoData.map((video, index) => (
              <div
                key={index}
                className="min-w-[320px] flex-shrink-0 group cursor-pointer"
                onClick={() => handleVideoChange(video)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="relative">
                    <video
                      src={video.src}
                      className="w-full h-48 object-cover"
                      muted
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {video.duration}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                      {video.category}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{video.views} views</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{video.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Home;
