import React, { useState } from "react";

const BrutalTooltip = ({
  children,
  content,
  position = "top",
  bgColor = "black",
  textColor = "white",
  borderWidth = "2px",
  shadow = true,
  fontSize = "14px",
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    if (delay > 0) {
      const id = setTimeout(() => setIsVisible(true), delay);
      setTimeoutId(id);
    } else {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  // Position styles
  const positionStyles = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "8px",
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "8px",
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: "8px",
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: "8px",
    },
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {isVisible && (
        <div
          style={{
            position: "absolute",
            zIndex: 100,
            padding: "6px 12px",
            backgroundColor: bgColor,
            color: textColor,
            border: `${borderWidth} solid ${textColor}`,
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: fontSize,
            letterSpacing: "1px",
            whiteSpace: "nowrap",
            boxShadow: shadow ? "3px 3px 0px black" : "none",
            ...positionStyles[position],
          }}
        >
          {content}
          <div
            style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              backgroundColor: bgColor,
              borderRight: `${borderWidth} solid ${textColor}`,
              borderBottom: `${borderWidth} solid ${textColor}`,
              transform: "rotate(45deg)",
              ...getArrowPosition(position),
            }}
          />
        </div>
      )}
    </div>
  );
};

// Arrow position helper
const getArrowPosition = (position) => {
  switch (position) {
    case "top":
      return {
        bottom: "-6px",
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
      };
    case "bottom":
      return {
        top: "-6px",
        left: "50%",
        transform: "translateX(-50%) rotate(-135deg)",
      };
    case "left":
      return {
        right: "-6px",
        top: "50%",
        transform: "translateY(-50%) rotate(-45deg)",
      };
    case "right":
      return {
        left: "-6px",
        top: "50%",
        transform: "translateY(-50%) rotate(135deg)",
      };
    default:
      return {};
  }
};

// Example usage
const BrutalTooltipExample = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "800px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST TOOLTIPS
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <BrutalTooltip
          content="TOP TOOLTIP"
          position="top"
          bgColor="black"
          textColor="yellow"
        >
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            HOVER TOP
          </button>
        </BrutalTooltip>

        <BrutalTooltip
          content="RIGHT TOOLTIP"
          position="right"
          bgColor="red"
          textColor="white"
          borderWidth="3px"
        >
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            HOVER RIGHT
          </button>
        </BrutalTooltip>

        <BrutalTooltip
          content="BOTTOM TOOLTIP"
          position="bottom"
          bgColor="blue"
          textColor="white"
          shadow={false}
        >
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            HOVER BOTTOM
          </button>
        </BrutalTooltip>

        <BrutalTooltip
          content="LEFT TOOLTIP"
          position="left"
          bgColor="yellow"
          textColor="black"
          fontSize="16px"
        >
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "yellow",
              color: "black",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            HOVER LEFT
          </button>
        </BrutalTooltip>
      </div>

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
        }}
      >
        <p>BRUTALIST TOOLTIP FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ INSTANT APPEARANCE (NO FADE)</li>
          <li>✓ SHARP 45° ARROW</li>
          <li>✓ UPPERCASE TEXT</li>
          <li>✓ THICK BORDERS</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalTooltipExample;
