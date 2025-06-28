import React from "react";

const InputRatio = ({ value, index }) => {
  return (
    <li className="flex items-center space-x-3 p-3 bg-tertiary rounded-lg border border-border-secondary hover:border-primary-500 transition-colors">
      <input 
        id={`type${index}`} 
        type="radio" 
        name="type" 
        className="w-4 h-4 text-primary-600 bg-tertiary border-border-primary focus:ring-primary-500"
      />
      <label 
        htmlFor={`type${index}`} 
        className="flex-1 text-sm text-secondary cursor-pointer"
      >
        {value}
      </label>
    </li>
  );
};

export default InputRatio;