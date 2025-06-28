import React from "react";

const ClickButton = ({ 
  name, 
  handleClick, 
  icon, 
  gradient = "from-primary-500 to-secondary-500",
  disabled = false 
}) => {
  return (
    <div className="w-full">
      <button
        type="button"
        className={`w-full btn btn-primary btn-lg bg-gradient-to-r ${gradient} group ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon && (
          <span className="text-lg">{icon}</span>
        )}
        <span>{name}</span>
        <svg 
          className="w-5 h-5 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </button>
    </div>
  );
};

export default ClickButton;