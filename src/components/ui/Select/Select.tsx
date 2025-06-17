import React, { useState, useRef, useEffect } from "react";

const BrutalSelect = ({ options, defaultValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.value
  );
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) onChange(value);
  };

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label ||
    options[0]?.label;

  return (
    <div
      ref={selectRef}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "Courier New, monospace",
        minWidth: "200px",
      }}
    >
      <div
        style={{
          padding: "10px 15px",
          border: "3px solid black",
          backgroundColor: "white",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.75)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <span style={{ fontSize: "1.2em" }}>{isOpen ? "↑" : "↓"}</span>
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "3px solid black",
            borderTop: "none",
            backgroundColor: "white",
            zIndex: 100,
            marginTop: "2px",
            boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.75)",
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                padding: "10px 15px",
                cursor: "pointer",
                fontWeight: option.value === selectedValue ? "bold" : "normal",
                backgroundColor:
                  option.value === selectedValue ? "#000" : "transparent",
                color: option.value === selectedValue ? "#fff" : "#000",
                borderBottom: "1px solid black",
              }}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrutalSelect;
