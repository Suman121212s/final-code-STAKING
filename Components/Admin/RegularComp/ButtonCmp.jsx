import React from "react";

const ButtonCmp = ({ tab, name, styleClass, icon }) => {
  const isActive = styleClass?.includes("active");
  
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left border ${
          isActive 
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-primary-500 shadow-lg' 
            : 'bg-transparent text-secondary border-transparent hover:bg-tertiary hover:text-primary'
        }`}
        data-bs-toggle="tab"
        data-bs-target={`#tab-${tab}`}
        type="button"
        role="tab"
        aria-controls={`tab-${tab}`}
        aria-selected={isActive}
      >
        {icon && (
          <span className="text-lg">{icon}</span>
        )}
        <span className="font-medium">{name}</span>
        
        {isActive && (
          <div className="ml-auto">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </button>
    </li>
  );
};

export default ButtonCmp;