import React from "react";

const PupUpButton = ({ 
  handleClick, 
  title, 
  icon, 
  gradient = "from-primary-500 to-secondary-500" 
}) => {
  return (
    <button 
      onClick={handleClick} 
      className={`w-full btn btn-primary bg-gradient-to-r ${gradient} group`}
      type="button"
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
      <svg 
        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
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
  );
};

export default PupUpButton;