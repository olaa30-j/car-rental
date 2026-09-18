import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

import bgImage from '../assets/notfound/404-bg.png';
import carImage from '../assets/notfound/404-car.png';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-primary">
      <div
        className="w-full max-w-6xl min-h-[400px] sm:min-h-[500px] bg-cover bg-center bg-no-repeat shadow-2xl relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-[1]"></div>

        <div className="flex items-center justify-between container p-6 sm:p-8 md:p-16 relative z-[2] min-h-[400px] sm:min-h-[500px] flex-col lg:flex-row gap-6 lg:gap-0">
          {/* Left Side - Content */}
          <div className="flex-1 max-w-full lg:max-w-[50%] text-center">
            {/* 404 - Primary Color */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none text-primary animate-fade-in-down">
              404
            </h1>

            {/* Oh no! - Primary Color */}
            <h2 className="text-primary mt-2 animate-fade-in-down delay-100">
              Oh no!
            </h2>

            {/* Description - White with opacity */}
            <h5 className="mt-4 mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 animate-fade-in-down delay-300">
              Looks like you've driven off the map! The page you're looking for
              doesn't exist or has been moved.
            </h5>

            {/* Button with primary and secondary colors */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 px-6 bg-primary rounded-button text-white font-button font-semibold text-base sm:text-md transition-all duration-300 hover:translate-y-[-3px] animate-fade-in-down delay-400 animate-button-pulse"
              style={{
                boxShadow: '0 4px 20px rgba(89, 55, 224, 0.4)',
                padding: 'var(--button-padding-y) var(--button-padding-x)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(89, 55, 224, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(89, 55, 224, 0.4)';
              }}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Home Page
            </Link>
          </div>

          {/* Right Side - Car Image */}
          <div className="flex-1 flex justify-center items-center relative max-w-full lg:max-w-[40%] md:-bottom-[100px] md:right-[50px]">
            <img
              src={carImage}
              alt="Lost car"
              className="max-w-full h-auto max-h-[180px] sm:max-h-[280px] md:max-h-[400px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] animate-car-float"
            />

            {/* Decorative tire tracks with secondary color */}
            <div className="absolute -bottom-3 sm:-bottom-5 left-0 right-0 flex gap-4 sm:gap-6 md:gap-8 justify-center opacity-60">
              <div
                className="w-8 sm:w-10 h-1 rounded-sm animate-track-slide"
                style={{
                  background: `repeating-linear-gradient(90deg, var(--secondary-color) 0px, var(--secondary-color) 10px, transparent 10px, transparent 20px)`
                }}
              />
              <div
                className="w-12 sm:w-16 h-1 rounded-sm animate-track-slide-delayed"
                style={{
                  background: `repeating-linear-gradient(90deg, var(--secondary-color) 0px, var(--secondary-color) 10px, transparent 10px, transparent 20px)`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;