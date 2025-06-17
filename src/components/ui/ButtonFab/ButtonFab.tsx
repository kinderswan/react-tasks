import React from "react";

const BrutalFAB = ({
  icon = "+",
  onClick,
  position = "bottom-right", // 'bottom-right', 'bottom-left', 'top-right', 'top-left'
  size = "56px",
  bgColor = "black",
  color = "white",
  borderWidth = "3px",
  shadow = true,
  hoverEffect = true,
}) => {
  const positionStyles = {
    "bottom-right": {
      bottom: "24px",
      right: "24px",
    },
    "bottom-left": {
      bottom: "24px",
      left: "24px",
    },
    "top-right": {
      top: "24px",
      right: "24px",
    },
    "top-left": {
      top: "24px",
      left: "24px",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        width: size,
        height: size,
        borderRadius: "0%", // Square for brutalist look (use '50%' for circle)
        backgroundColor: bgColor,
        color: color,
        border: `${borderWidth} solid black`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        fontSize: `calc(${size} * 0.5)`,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        transition: hoverEffect ? "none" : "all 0.2s ease",
        transform: hoverEffect ? "none" : "translate(0, 0)",
        ":hover": hoverEffect
          ? {
              transform: "translate(-2px, -2px)",
              boxShadow: shadow ? "8px 8px 0px black" : "none",
            }
          : {},
        ...positionStyles[position],
      }}
      onMouseEnter={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translate(-2px, -2px)";
          e.currentTarget.style.boxShadow = shadow
            ? "8px 8px 0px black"
            : "none";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverEffect) {
          e.currentTarget.style.transform = "translate(0, 0)";
          e.currentTarget.style.boxShadow = shadow
            ? "6px 6px 0px black"
            : "none";
        }
      }}
    >
      {icon}
    </button>
  );
};

// Example usage
const BrutalFABExample = () => {
  const [clickCount, setClickCount] = React.useState(0);

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        minHeight: "300px",
        fontFamily: "Courier, monospace",
        position: "relative",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST FLOATING ACTION BUTTON
      </h2>

      <p style={{ fontWeight: "900" }}>CLICKS: {clickCount}</p>

      {/* Main FAB */}
      <BrutalFAB
        onClick={() => setClickCount((c) => c + 1)}
        icon="+"
        position="bottom-right"
        bgColor="red"
        color="white"
        size="64px"
      />

      {/* Secondary FAB */}
      <BrutalFAB
        onClick={() => setClickCount(0)}
        icon="↻"
        position="bottom-left"
        bgColor="black"
        color="yellow"
        borderWidth="4px"
      />

      {/* Minimal FAB */}
      <BrutalFAB
        onClick={() => alert("BRUTAL!")}
        icon="!"
        position="top-right"
        bgColor="yellow"
        color="black"
        shadow={false}
      />

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
          <li>✓ SQUARE FORM (NO ROUNDED CORNERS)</li>
          <li>✓ THICK BORDER</li>
          <li>✓ AGGRESSIVE SHADOW</li>
          <li>✓ INSTANT HOVER EFFECT</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalFABExample;
