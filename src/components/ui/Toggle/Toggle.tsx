import React, { useState } from "react";

const BrutalToggle = ({ initialOn = false, onChange }) => {
  const [isOn, setIsOn] = useState(initialOn);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        border: "3px solid black",
        padding: "2px",
        backgroundColor: isOn ? "black" : "white",
        boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.75)",
        margin: "10px",
        userSelect: "none",
      }}
      onClick={handleToggle}
    >
      <div
        style={{
          width: "50px",
          height: "30px",
          position: "relative",
          backgroundColor: isOn ? "white" : "black",
          transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: isOn ? "26px" : "2px",
            width: "22px",
            height: "22px",
            backgroundColor: isOn ? "black" : "white",
            border: "2px solid black",
            transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "5px",
          color: isOn ? "white" : "black",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default BrutalToggle;
