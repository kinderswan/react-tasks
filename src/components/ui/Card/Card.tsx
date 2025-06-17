import React from "react";

const BrutalCard = ({
  title,
  children,
  width = "300px",
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  shadow = true,
  headerColor = "black",
  headerBgColor = "white",
  noHeader = false,
}) => {
  return (
    <div
      style={{
        width: width,
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Courier, monospace",
      }}
    >
      {!noHeader && (
        <div
          style={{
            padding: "12px",
            borderBottom: `${borderWidth} solid black`,
            backgroundColor: headerBgColor,
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: "18px",
            color: headerColor,
            letterSpacing: "1px",
          }}
        >
          {title}
        </div>
      )}

      <div
        style={{
          padding: "16px",
          lineHeight: "1.4",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Example usage
const BrutalCardExample = () => {
  return (
    <div
      style={{
        padding: "24px",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <BrutalCard title="Raw Card" width="300px">
        <p>
          This is a basic brutalist card component with sharp edges and high
          contrast styling.
        </p>
        <p style={{ marginTop: "8px", fontWeight: "bold" }}>
          No frills. No nonsense.
        </p>
      </BrutalCard>

      <BrutalCard
        title="Warning"
        bgColor="yellow"
        headerBgColor="black"
        headerColor="yellow"
        borderWidth="4px"
        width="280px"
      >
        <p style={{ fontWeight: "900" }}>Danger Zone</p>
        <p style={{ marginTop: "8px" }}>
          This card uses high contrast warning colors to demand attention.
        </p>
      </BrutalCard>

      <BrutalCard noHeader bgColor="black" width="320px">
        <p style={{ color: "white", fontWeight: "900" }}>HEADERLESS CARD</p>
        <p style={{ color: "white", marginTop: "12px" }}>
          Sometimes you don't need a title. The content should speak for itself.
          Brutalist design rejects unnecessary elements.
        </p>
      </BrutalCard>

      <BrutalCard title="No Shadow" shadow={false} width="280px">
        <p>
          This card rejects the shadow effect for a flatter, more
          two-dimensional appearance.
        </p>
        <div
          style={{
            marginTop: "12px",
            padding: "8px",
            border: "2px solid black",
            backgroundColor: "white",
            fontWeight: "bold",
          }}
        >
          Nested brutalist elements work well
        </div>
      </BrutalCard>
    </div>
  );
};

export default BrutalCardExample;
