// Toggle.js
import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-label">
        <span className={`status-text ${isToggled ? "on" : "off"}`}>
          {isToggled ? "ON" : "OFF"}
        </span>
        <div
          className={`toggle-switch ${isToggled ? "active" : ""}`}
          onClick={handleToggle}
          role="switch"
          aria-checked={isToggled}
          tabIndex="0"
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") handleToggle();
          }}
        >
          <div className="toggle-thumb" />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
