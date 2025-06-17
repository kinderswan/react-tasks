import React from "react";

const BrutalGrid = ({
  children,
  columns = 3,
  gap = "16px",
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  itemBgColor = "white",
  textColor = "black",
  shadow = true,
  fullWidth = false,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        padding: gap,
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        // width: fullWidth ? "100%" : "auto",
        fontFamily: "Courier, monospace",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            border: `${borderWidth} solid black`,
            backgroundColor: itemBgColor,
            color: textColor,
            padding: "16px",
            fontWeight: "900",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

// Example usage
const BrutalGridExample = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST GRID
      </h2>

      <BrutalGrid
        columns={3}
        gap="24px"
        borderWidth="4px"
        bgColor="yellow"
        itemBgColor="black"
        textColor="white"
      >
        <div>RAW GRID ITEM 1</div>
        <div>BRUTAL DESIGN</div>
        <div>NO FRILLS</div>
        <div>THICK BORDERS</div>
        <div>HIGH CONTRAST</div>
        <div>MONOSPACE FONT</div>
      </BrutalGrid>

      <div style={{ margin: "32px 0" }}>
        <BrutalGrid
          columns={2}
          gap="16px"
          borderWidth="3px"
          bgColor="#f0f0f0"
          shadow={false}
          fullWidth
        >
          <div>
            <h3
              style={{
                borderBottom: "3px solid black",
                paddingBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              FEATURE 1
            </h3>
            <p style={{ fontWeight: "900" }}>Thick borders everywhere</p>
          </div>
          <div>
            <h3
              style={{
                borderBottom: "3px solid black",
                paddingBottom: "8px",
                textTransform: "uppercase",
              }}
            >
              FEATURE 2
            </h3>
            <p style={{ fontWeight: "900" }}>No rounded corners</p>
          </div>
        </BrutalGrid>
      </div>

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST GRID FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ CUSTOMIZABLE COLUMNS</li>
          <li>✓ AGGRESSIVE SHADOW</li>
          <li>✓ FULL-WIDTH OPTION</li>
          <li>✓ HIGH-CONTRAST ITEMS</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalGridExample;
