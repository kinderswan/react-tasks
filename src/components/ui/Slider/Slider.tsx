import React, { useState } from "react";

const BrutalSlider = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 50,
  thickness = 8,
  trackColor = "#f0f0f0",
  thumbColor = "black",
  progressColor = "black",
  showValue = true,
  shadow = true,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          height: `${thickness}px`,
          backgroundColor: trackColor,
          border: "2px solid black",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: progressColor,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            margin: 0,
            opacity: 0,
            cursor: "pointer",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: `calc(${percentage}% - ${thickness}px)`,
            top: `calc(50% - ${thickness}px)`,
            width: `${thickness * 2}px`,
            height: `${thickness * 2}px`,
            backgroundColor: thumbColor,
            border: "2px solid black",
            borderRadius: "0",
            boxShadow: shadow ? "3px 3px 0px black" : "none",
            zIndex: 1,
          }}
        />
      </div>

      {showValue && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
          }}
        >
          <span>{min}</span>
          <span>{value}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "400px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST SLIDER
      </h2>

      <BrutalSlider
        initialValue={sliderValue}
        onChange={setSliderValue}
        thickness={10}
        progressColor="red"
      />

      <div style={{ marginTop: "32px" }}>
        <BrutalSlider
          min={0}
          max={500}
          step={50}
          initialValue={250}
          trackColor="yellow"
          thumbColor="blue"
          showValue={false}
        />
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontFamily: "Courier, monospace",
        }}
      >
        CURRENT VALUE: <strong>{sliderValue}</strong>
      </div>
    </div>
  );
};

export default BrutalSliderExample;
