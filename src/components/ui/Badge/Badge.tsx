import React from "react";

const BrutalBadge = ({
  children,
  color = "black",
  bgColor = "#f0f0f0",
  borderWidth = 2,
  size = "medium",
  pill = false,
  shadow = true,
  icon,
  iconPosition = "left",
}) => {
  // Size variants
  const sizeStyles = {
    small: {
      fontSize: "12px",
      padding: "4px 8px",
      iconSize: "12px",
    },
    medium: {
      fontSize: "14px",
      padding: "6px 12px",
      iconSize: "14px",
    },
    large: {
      fontSize: "16px",
      padding: "8px 16px",
      iconSize: "16px",
    },
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "1px",
        color: color,
        backgroundColor: bgColor,
        border: `${borderWidth}px solid black`,
        borderRadius: pill ? "999px" : "0",
        boxShadow: shadow ? "3px 3px 0px black" : "none",
        lineHeight: 1,
        ...sizeStyles[size],
      }}
    >
      {icon && iconPosition === "left" && (
        <span
          style={{
            marginRight: "6px",
            display: "flex",
            fontSize: sizeStyles[size].iconSize,
          }}
        >
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span
          style={{
            marginLeft: "6px",
            display: "flex",
            fontSize: sizeStyles[size].iconSize,
          }}
        >
          {icon}
        </span>
      )}
    </div>
  );
};

// Example usage
const BrutalBadgeCollection = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <BrutalBadge>Default</BrutalBadge>

      <BrutalBadge color="white" bgColor="black">
        Inverted
      </BrutalBadge>

      <BrutalBadge color="black" bgColor="yellow" borderWidth={3}>
        Warning
      </BrutalBadge>

      <BrutalBadge pill shadow={false}>
        Pill Style
      </BrutalBadge>

      <BrutalBadge size="small" color="white" bgColor="red">
        Alert
      </BrutalBadge>

      <BrutalBadge
        size="large"
        icon={<span style={{ fontWeight: "bold" }}>!</span>}
      >
        Important
      </BrutalBadge>

      <BrutalBadge
        icon={<span style={{ fontWeight: "bold" }}>✓</span>}
        iconPosition="right"
        color="white"
        bgColor="green"
      >
        Verified
      </BrutalBadge>
    </div>
  );
};

export default BrutalBadgeCollection;
