// BrutalistLabel.js
import React from "react";
import "./Label.css";

const BrutalistLabel = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="brutalist-label">
      {children}
    </label>
  );
};

export default BrutalistLabel;
