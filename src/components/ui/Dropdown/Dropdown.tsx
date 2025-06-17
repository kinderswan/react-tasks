import React, { useState, useRef, useEffect } from "react";

const BrutalDropdown = ({
  label = "SELECT",
  items = [],
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item) => {
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "Courier, monospace",
      }}
    >
      {/* Main dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "12px 24px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          fontFamily: "Courier, monospace",
          fontWeight: "900",
          textTransform: "uppercase",
          fontSize: fontSize,
          cursor: "pointer",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "none", // Instant state change
        }}
      >
        {label}
        <span style={{ fontSize: "1.2em" }}>{isOpen ? "↑" : "↓"}</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "4px",
            border: `${borderWidth} solid black`,
            backgroundColor: bgColor,
            boxShadow: shadow ? "6px 6px 0px black" : "none",
            zIndex: 100,
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: "12px 24px",
                border: "none",
                borderBottom:
                  index !== items.length - 1
                    ? `${borderWidth} solid black`
                    : "none",
                backgroundColor: item.active ? activeColor : bgColor,
                color: item.active ? "white" : textColor,
                fontFamily: "Courier, monospace",
                fontWeight: "900",
                textAlign: "left",
                fontSize: fontSize,
                cursor: "pointer",
                transition: "none",
                ":hover": {
                  backgroundColor: activeColor,
                  color: "white",
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = activeColor;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = item.active
                  ? activeColor
                  : bgColor;
                e.currentTarget.style.color = item.active ? "white" : textColor;
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalDropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const options = [
    { label: "OPTION 1", value: "option1" },
    { label: "OPTION 2", value: "option2" },
    { label: "OPTION 3", value: "option3" },
    { label: "OPTION 4", value: "option4" },
  ];

  const filterOptions = [
    { label: "SHOW ALL", value: "all", active: activeFilter === "all" },
    {
      label: "ACTIVE ONLY",
      value: "active",
      active: activeFilter === "active",
    },
    {
      label: "COMPLETED",
      value: "completed",
      active: activeFilter === "completed",
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        fontFamily: "Courier, monospace",
        maxWidth: "600px",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST DROPDOWN
      </h2>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontWeight: "900" }}>STANDARD DROPDOWN:</h3>
        <BrutalDropdown
          label={selectedOption ? selectedOption.label : "SELECT OPTION"}
          items={options}
          bgColor="yellow"
          activeColor="black"
          borderWidth="4px"
          onSelect={(item) => setSelectedOption(item)}
        />
        <p style={{ fontWeight: "900", marginTop: "8px" }}>
          {selectedOption
            ? `SELECTED: ${selectedOption.value.toUpperCase()}`
            : "NOTHING SELECTED"}
        </p>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontWeight: "900" }}>FILTER DROPDOWN:</h3>
        <BrutalDropdown
          label={`FILTER: ${activeFilter.toUpperCase()}`}
          items={filterOptions}
          bgColor="#f0f0f0"
          activeColor="red"
          onSelect={(item) => setActiveFilter(item.value)}
        />
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ SHARP 90° CORNERS</li>
          <li>✓ THICK BORDERS</li>
          <li>✓ INSTANT OPEN/CLOSE</li>
          <li>✓ HIGH-CONTRAST SELECTION</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalDropdownExample;
