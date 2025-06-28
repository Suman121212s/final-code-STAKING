import React from "react";

const PopUpInputField = ({ title, placeholder, handleChange, icon }) => {
  return (
    <div className="form-group">
      <label className="form-label flex items-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default PopUpInputField;