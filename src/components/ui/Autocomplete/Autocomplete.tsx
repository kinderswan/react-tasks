import React, { useState, useEffect, useRef } from "react";

const BrutalAutocomplete = ({
  options = [],
  placeholder = "TYPE TO SEARCH...",
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  onSelect,
  maxItems = 5,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef(null);

  // Filter options based on input
  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = options
        .filter((option) =>
          option.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, maxItems);
      setFilteredOptions(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredOptions([]);
      setShowDropdown(false);
    }
    setActiveIndex(-1);
  }, [inputValue, options, maxItems]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowDropdown(false);
    if (onSelect) onSelect(option);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleOptionClick(filteredOptions[activeIndex]);
    }
  };

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => inputValue && setShowDropdown(true)}
        placeholder={placeholder}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "16px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          fontFamily: "Courier, monospace",
          fontWeight: "900",
          textTransform: "uppercase",
          fontSize: fontSize,
          boxShadow: shadow ? "4px 4px 0px black" : "none",
          outline: "none",
        }}
      />

      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: `${borderWidth} solid black`,
            borderTop: "none",
            backgroundColor: bgColor,
            zIndex: 1000,
            boxShadow: shadow ? "4px 4px 0px black" : "none",
          }}
        >
          {filteredOptions.map((option, index) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "12px 16px",
                borderBottom:
                  index < filteredOptions.length - 1
                    ? `${borderWidth} solid black`
                    : "none",
                backgroundColor: index === activeIndex ? activeColor : bgColor,
                color: index === activeIndex ? "white" : textColor,
                cursor: "pointer",
                fontSize: fontSize,
                transition: "none",
                ":hover": {
                  backgroundColor: activeColor,
                  color: "white",
                },
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalAutocompleteExample = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const countries = [
    "UNITED STATES",
    "CANADA",
    "UNITED KINGDOM",
    "GERMANY",
    "FRANCE",
    "JAPAN",
    "AUSTRALIA",
    "BRAZIL",
    "INDIA",
    "CHINA",
  ];

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "600px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST AUTOCOMPLETE
      </h2>

      <div style={{ marginBottom: "32px" }}>
        <BrutalAutocomplete
          options={countries}
          placeholder="SEARCH COUNTRIES..."
          bgColor="yellow"
          activeColor="black"
          borderWidth="4px"
          onSelect={setSelectedOption}
        />
      </div>

      {selectedOption && (
        <div
          style={{
            padding: "16px",
            border: "3px solid black",
            backgroundColor: "#f0f0f0",
            marginBottom: "32px",
            fontWeight: "900",
          }}
        >
          SELECTED: {selectedOption}
        </div>
      )}

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ INSTANT FILTERING</li>
          <li>✓ KEYBOARD NAVIGATION</li>
          <li>✓ HIGH-CONTRAST SELECTION</li>
          <li>✓ NO SMOOTH TRANSITIONS</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalAutocompleteExample;
