// BrutalistSelect.js
import React, { useState, useRef, useEffect } from "react";
import "./Select2.css";

const BrutalistSelect = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown();
    } else if (isOpen && e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="brutalist-select"
      ref={dropdownRef}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div className="select-trigger" onClick={toggleDropdown}>
        {selectedOption.label}
        <span className="arrow">{isOpen ? "▼" : "▶"}</span>
      </div>

      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.value}
              className="option"
              onClick={() => handleOptionClick(option)}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  handleOptionClick(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BrutalistSelect;
