import React, { useState } from "react";

export const BrutalRadio = ({ options, name, onChange, initialValue }) => {
  const [selected, setSelected] = useState(initialValue || null);

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontFamily: "Courier, monospace",
        border: "3px solid black",
        padding: "16px",
        background: "#f0f0f0",
        boxShadow: "5px 5px 0px black",
      }}
    >
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            fontSize: "16px",
            userSelect: "none",
          }}
        >
          <input
            type="radio"
            name={name}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
            style={{
              appearance: "none",
              width: "20px",
              height: "20px",
              border: "3px solid black",
              borderRadius: "0",
              marginRight: "12px",
              position: "relative",
              backgroundColor: selected === option.value ? "black" : "white",
              boxShadow: "2px 2px 0px black",
            }}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
