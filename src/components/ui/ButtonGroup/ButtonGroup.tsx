import React from "react";

const BrutalButtonGroup = ({
  buttons,
  direction = "horizontal", // 'horizontal' or 'vertical'
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  activeColor = "black",
  textColor = "black",
  shadow = true,
  fontSize = "16px",
  onButtonClick,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction === "vertical" ? "column" : "row",
        fontFamily: "Courier, monospace",
        border: `${borderWidth} solid black`,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        width: "fit-content",
      }}
    >
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(button.value)}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRight:
              direction === "horizontal" && index !== buttons.length - 1
                ? `${borderWidth} solid black`
                : "none",
            borderBottom:
              direction === "vertical" && index !== buttons.length - 1
                ? `${borderWidth} solid black`
                : "none",
            backgroundColor: button.active ? activeColor : bgColor,
            color: button.active ? "white" : textColor,
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: fontSize,
            cursor: "pointer",
            transition: "none", // Instant state change
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
            e.currentTarget.style.backgroundColor = button.active
              ? activeColor
              : bgColor;
            e.currentTarget.style.color = button.active ? "white" : textColor;
          }}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

// Example usage
const BrutalButtonGroupExample = () => {
  const [activeButton, setActiveButton] = React.useState("sort-newest");

  const buttons = [
    {
      label: "Newest",
      value: "sort-newest",
      active: activeButton === "sort-newest",
    },
    {
      label: "Popular",
      value: "sort-popular",
      active: activeButton === "sort-popular",
    },
    {
      label: "Featured",
      value: "sort-featured",
      active: activeButton === "sort-featured",
    },
    {
      label: "Oldest",
      value: "sort-oldest",
      active: activeButton === "sort-oldest",
    },
  ];

  const verticalButtons = [
    {
      label: "Edit",
      value: "action-edit",
      active: activeButton === "action-edit",
    },
    {
      label: "Delete",
      value: "action-delete",
      active: activeButton === "action-delete",
    },
    {
      label: "Share",
      value: "action-share",
      active: activeButton === "action-share",
    },
  ];

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
        BRUTALIST BUTTON GROUP
      </h2>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontWeight: "900" }}>HORIZONTAL GROUP:</h3>
        <BrutalButtonGroup
          buttons={buttons}
          direction="horizontal"
          bgColor="yellow"
          activeColor="black"
          borderWidth="4px"
          onButtonClick={(value) => setActiveButton(value)}
        />
        <p style={{ fontWeight: "900", marginTop: "8px" }}>
          Current selection: {activeButton.replace("sort-", "")}
        </p>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontWeight: "900" }}>VERTICAL GROUP:</h3>
        <BrutalButtonGroup
          buttons={verticalButtons}
          direction="vertical"
          bgColor="#f0f0f0"
          activeColor="red"
          onButtonClick={(value) => setActiveButton(value)}
        />
        <p style={{ fontWeight: "900", marginTop: "8px" }}>
          Current action: {activeButton.replace("action-", "")}
        </p>
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
          <li>✓ THICK DIVIDING BORDERS</li>
          <li>✓ INSTANT HOVER EFFECTS</li>
          <li>✓ HIGH-CONTRAST ACTIVE STATE</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalButtonGroupExample;
