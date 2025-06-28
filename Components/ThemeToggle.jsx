import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-slider">
        {theme === 'light' ? '☀️' : '🌙'}
      </div>
    </button>
  );
};

export default ThemeToggle;