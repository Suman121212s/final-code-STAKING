import React from "react";

const Title = ({ title, icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-3 mb-4">
        {icon && (
          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <div>
          <h2 className="text-3xl font-bold gradient-text">{title}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Title;