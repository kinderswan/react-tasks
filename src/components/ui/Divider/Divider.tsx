import React from "react";

const BrutalDivider = ({
  thickness = 2,
  color = "black",
  style = "solid", // solid, double, dashed, dotted, shadow
  width = "100%",
  margin = "16px 0",
  withText = false,
  text = "",
  textPosition = "center",
}) => {
  // Style variants
  const styleRules = {
    solid: {
      borderTop: `${thickness}px solid ${color}`,
      borderBottom: "none",
    },
    double: {
      borderTop: `${thickness}px double ${color}`,
      borderBottom: `${thickness}px double ${color}`,
      height: `${thickness * 3}px`,
    },
    dashed: {
      borderTop: `${thickness}px dashed ${color}`,
      borderBottom: "none",
    },
    dotted: {
      borderTop: `${thickness}px dotted ${color}`,
      borderBottom: "none",
    },
    shadow: {
      borderTop: `${thickness}px solid ${color}`,
      borderBottom: "none",
      boxShadow: `0 ${thickness}px 0 ${color}`,
    },
  };

  const textAlignment = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  if (withText) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: width,
          margin: margin,
        }}
      >
        <div
          style={{
            flex: 1,
            height: `${thickness}px`,
            backgroundColor: color,
            ...(style !== "solid" && styleRules[style]),
          }}
        />
        <span
          style={{
            margin: "0 16px",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: "14px",
            color: color,
          }}
        >
          {text}
        </span>
        <div
          style={{
            flex: 1,
            height: `${thickness}px`,
            backgroundColor: color,
            ...(style !== "solid" && styleRules[style]),
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: width,
        height: `${thickness}px`,
        backgroundColor: style === "solid" ? color : "transparent",
        margin: margin,
        ...styleRules[style],
      }}
    />
  );
};

// Example usage
const BrutalDividerCollection = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "8px",
        }}
      >
        BRUTALIST DIVIDERS
      </h2>

      <BrutalDivider />

      <BrutalDivider thickness={4} color="red" />

      <BrutalDivider style="double" thickness={2} color="blue" />

      <BrutalDivider style="dashed" thickness={3} color="black" />

      <BrutalDivider style="dotted" thickness={2} color="green" />

      <BrutalDivider style="shadow" thickness={2} color="black" />

      <BrutalDivider
        withText
        text="SECTION"
        textPosition="center"
        thickness={3}
        color="black"
      />

      <BrutalDivider
        withText
        text="LEFT ALIGN"
        textPosition="left"
        thickness={2}
        color="black"
        width="80%"
      />

      <BrutalDivider
        withText
        text="RIGHT"
        textPosition="right"
        thickness={4}
        color="red"
        style="dashed"
      />
    </div>
  );
};

export default BrutalDividerCollection;
