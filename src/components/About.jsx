import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 3D Book Animation */}
          <div className="relative perspective-1000">
            <div className="book-container w-64 h-80 mx-auto transform-style-preserve-3d animate-float">
              <div className="book-side book-front bg-blue-600 w-64 h-80 absolute rounded-lg shadow-xl transform translate-z-25 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">BookStore</h3>
                  <p className="italic">Your Gateway to Knowledge</p>
                </div>
              </div>
              <div className="book-side book-back bg-blue-700 w-64 h-80 absolute rounded-lg shadow-xl transform -translate-z-25"></div>
              <div className="book-side book-spine bg-blue-800 w-10 h-80 absolute rounded-sm shadow-xl transform rotate-y-90 -translate-x-5"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 dark:text-white">About BookStore</h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Welcome to BookStore, your premier destination for literary exploration and discovery. 
                Established in 2024, we've been dedicated to bringing the joy of reading to our community 
                and beyond.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To inspire, educate, and connect readers with the perfect books that will enrich their 
                lives and expand their horizons.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">What Sets Us Apart</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Carefully curated collection of books across all genres</li>
                <li>Knowledgeable and passionate staff</li>
                <li>Regular literary events and author meetups</li>
                <li>Comfortable reading spaces</li>
                <li>Online ordering and home delivery</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Knowledge Accessibility</li>
                <li>Community Engagement</li>
                <li>Cultural Diversity</li>
                <li>Environmental Responsibility</li>
                <li>Customer Satisfaction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 