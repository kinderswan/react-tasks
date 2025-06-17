import React, { useState } from "react";

const BrutalTabs = ({
  tabs = [],
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange && onTabChange(tabId);
  };

  return (
    <div
      style={{
        fontFamily: "Courier, monospace",
      }}
    >
      {/* Tab Bar */}
      <div
        style={{
          display: "flex",
          borderBottom: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          boxShadow: shadow ? "4px 4px 0px black" : "none",
        }}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              padding: "16px 24px",
              border: "none",
              borderRight:
                index !== tabs.length - 1
                  ? `${borderWidth} solid black`
                  : "none",
              backgroundColor: activeTab === tab.id ? activeColor : bgColor,
              color: activeTab === tab.id ? "white" : textColor,
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              textTransform: "uppercase",
              fontSize: fontSize,
              cursor: "pointer",
              position: "relative",
              transition: "none", // Instant state change
              ":hover": {
                backgroundColor: activeColor,
                color: "white",
              },
              // Extend active tab to cover the bottom border
              ...(activeTab === tab.id && {
                borderBottom: `${borderWidth} solid ${activeColor}`,
                marginBottom: `-${borderWidth}`,
              }),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = activeColor;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                activeTab === tab.id ? activeColor : bgColor;
              e.currentTarget.style.color =
                activeTab === tab.id ? "white" : textColor;
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: "24px",
          border: `${borderWidth} solid black`,
          borderTop: "none",
          backgroundColor: bgColor,
          boxShadow: shadow ? "4px 4px 0px black" : "none",
        }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content || (
          <p style={{ fontWeight: "900" }}>NO CONTENT AVAILABLE</p>
        )}
      </div>
    </div>
  );
};

// Example usage
const BrutalTabsExample = () => {
  const tabs = [
    {
      id: "details",
      label: "Details",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            PRODUCT DETAILS
          </h3>
          <p style={{ fontWeight: "900" }}>RAW BRUTALIST DESIGN</p>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>✓ THICK BORDERS</li>
            <li>✓ HIGH CONTRAST</li>
            <li>✓ NO SMOOTH TRANSITIONS</li>
          </ul>
        </div>
      ),
    },
    {
      id: "specs",
      label: "Specs",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            TECHNICAL SPECS
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              fontWeight: "900",
            }}
          >
            <div>MATERIAL:</div>
            <div>STEEL</div>
            <div>SIZE:</div>
            <div>24PX × 24PX</div>
            <div>WEIGHT:</div>
            <div>HEAVY</div>
          </div>
        </div>
      ),
    },
    {
      id: "reviews",
      label: "Reviews",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            CUSTOMER REVIEWS
          </h3>
          <div
            style={{
              border: "3px solid black",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <p style={{ fontWeight: "900" }}>"SO BRUTAL IT HURTS" ★★★★★</p>
          </div>
          <div
            style={{
              border: "3px solid black",
              padding: "16px",
            }}
          >
            <p style={{ fontWeight: "900" }}>"NOT FOR THE WEAK" ★★★★☆</p>
          </div>
        </div>
      ),
    },
  ];

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
        BRUTALIST TAB BAR
      </h2>

      <BrutalTabs
        tabs={tabs}
        bgColor="yellow"
        activeColor="black"
        borderWidth="4px"
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
          <li>✓ INSTANT TAB SWITCHING</li>
          <li>✓ BOLD ACTIVE STATE</li>
          <li>✓ NO ROUNDED CORNERS</li>
          <li>✓ AGGRESSIVE SHADOW</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalTabsExample;
