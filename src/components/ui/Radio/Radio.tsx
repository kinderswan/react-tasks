import React, { useState } from "react";
import styles from "./radio.module.scss"; // Optional styling

const CustomRadio = ({ options, name }: { options: any[]; name: any }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles["custom-radio-group"]} aria-label={name}>
      {options.map((option) => (
        <div
          key={option.value}
          className={`${styles["custom-radio-option"]} ${
            selectedValue === option.value ? styles["selected"] : ""
          }`}
          onClick={() => handleChange(option.value)}
          role="radio"
          aria-checked={selectedValue === option.value}
        >
          <span className={styles["radio-indicator"]}></span>
          <span className={styles["radio-label"]}>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;
