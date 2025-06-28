import React from "react";

const InputField = ({
  size,
  type,
  title,
  name,
  placeholder,
  handleChange,
  value,
  disabled,
  icon
}) => {
  return (
    <div className={`col-span-${size === "12" ? "full" : size === "6" ? "1" : "1"}`}>
      <div className="form-group">
        <label htmlFor={name} className="form-label flex items-center space-x-2">
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </label>
        
        <div className="relative">
          <input
            id={name}
            type={type}
            name={name}
            className={`form-control ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            disabled={disabled}
          />
          
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary">
              <span className="text-sm">{icon}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;