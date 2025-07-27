import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 bg-gray-700/50 backdrop-blur-xl border border-gray-600/50 rounded-full transition-all duration-300 hover:border-purple-500/50 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
        theme === 'light' ? 'translate-x-8' : 'translate-x-1'
      }`}>
        <span className="text-xs">
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;