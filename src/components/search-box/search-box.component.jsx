import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="serach-bar">
      <input
        className="serach"
        type="serach"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
