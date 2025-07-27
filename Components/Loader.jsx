import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl flex items-center justify-center z-50">
      <div className="relative">
        {/* Enhanced Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
        
        {/* Main Loader */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-gray-700/30 rounded-full"></div>
          
          {/* Animated Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 border-b-pink-500 rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-2 border-2 border-gray-700/20 rounded-full"></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-xl">M</span>
            </div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center mt-8">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Loading MECOIN
          </div>
          <div className="text-gray-400 text-sm">Please wait...</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;