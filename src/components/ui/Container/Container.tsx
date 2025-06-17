import React from "react";

const BrutalContainer = ({
  children,
  padding = "24px",
  margin = "0",
  borderWidth = "4px",
  bgColor = "#f0f0f0",
  shadow = true,
  fullWidth = false,
  centered = false,
  title,
  titleBorder = true,
}) => {
  return (
    <div
      style={{
        width: fullWidth ? "100%" : "auto",
        maxWidth: centered ? "1200px" : "none",
        margin: margin,
        padding: padding,
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "8px 8px 0px black" : "none",
        fontFamily: "Courier, monospace",
        boxSizing: "border-box",
        ...(centered && {
          marginLeft: "auto",
          marginRight: "auto",
        }),
      }}
    >
      {title && (
        <h2
          style={{
            marginTop: 0,
            marginBottom: "24px",
            paddingBottom: titleBorder ? "8px" : "0",
            borderBottom: titleBorder ? `${borderWidth} solid black` : "none",
            textTransform: "uppercase",
            fontWeight: "900",
            letterSpacing: "1px",
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

// Example usage
const BrutalContainerExample = () => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "white",
        fontFamily: "Courier, monospace",
      }}
    >
      <BrutalContainer
        title="MAIN CONTAINER"
        bgColor="yellow"
        borderWidth="4px"
        margin="0 0 32px 0"
      >
        <p style={{ fontWeight: "900" }}>
          This is a brutalist container with thick borders and high contrast.
        </p>
        <div
          style={{
            marginTop: "16px",
            padding: "16px",
            border: "3px solid black",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontWeight: "900", margin: 0 }}>Nested content</p>
        </div>
      </BrutalContainer>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <BrutalContainer title="ITEM 1" bgColor="#f0f0f0" shadow={false}>
          <p style={{ fontWeight: "900", margin: 0 }}>Raw content wrapper</p>
        </BrutalContainer>

        <BrutalContainer title="ITEM 2" bgColor="black" shadow={false}>
          <p style={{ fontWeight: "900", margin: 0, color: "white" }}>
            High contrast container
          </p>
        </BrutalContainer>
      </div>

      <BrutalContainer
        title="FULL WIDTH"
        fullWidth
        centered={false}
        bgColor="red"
        textColor="white"
      >
        <p style={{ fontWeight: "900", margin: 0, color: "white" }}>
          This container spans full width
        </p>
      </BrutalContainer>
    </div>
  );
};

export default BrutalContainerExample;
