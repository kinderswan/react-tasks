import React, { useState } from "react";

const BrutalNavBar = ({
  items = [],
  position = "top", // 'top' or 'side'
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  borderWidth = "3px",
  shadow = true,
  fontSize = "16px",
  onSelect,
}) => {
  const [activeItem, setActiveItem] = useState(items[0]?.value || null);

  const handleSelect = (item) => {
    setActiveItem(item.value);
    onSelect && onSelect(item);
  };

  return (
    <nav
      style={{
        backgroundColor: bgColor,
        border: `${borderWidth} solid black`,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
        ...(position === "top"
          ? {
              display: "flex",
              width: "100%",
            }
          : {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "250px",
            }),
      }}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSelect(item)}
          style={{
            padding: "16px 24px",
            border: "none",
            borderRight:
              position === "top" && index !== items.length - 1
                ? `${borderWidth} solid black`
                : "none",
            borderBottom:
              position === "side" && index !== items.length - 1
                ? `${borderWidth} solid black`
                : "none",
            backgroundColor: activeItem === item.value ? activeColor : bgColor,
            color: activeItem === item.value ? "white" : textColor,
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: fontSize,
            cursor: "pointer",
            textAlign: "left",
            transition: "none", // Instant state change
            ":hover": {
              backgroundColor: activeColor,
              color: "white",
            },
            ...(position === "top" ? { flex: 1 } : { width: "100%" }),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = activeColor;
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor =
              activeItem === item.value ? activeColor : bgColor;
            e.currentTarget.style.color =
              activeItem === item.value ? "white" : textColor;
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

// Example usage
const BrutalNavBarExample = () => {
  const [activeView, setActiveView] = useState("home");

  const topNavItems = [
    { label: "Home", value: "home" },
    { label: "Products", value: "products" },
    { label: "About", value: "about" },
    { label: "Contact", value: "contact" },
  ];

  const sideNavItems = [
    { label: "Dashboard", value: "dashboard" },
    { label: "Projects", value: "projects" },
    { label: "Team", value: "team" },
    { label: "Settings", value: "settings" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Courier, monospace",
      }}
    >
      {/* Top Navigation Example */}
      <BrutalNavBar
        items={topNavItems}
        position="top"
        bgColor="black"
        textColor="white"
        activeColor="yellow"
        borderWidth="4px"
        onSelect={(item) => setActiveView(item.value)}
      />

      <div
        style={{
          display: "flex",
          flex: 1,
          borderLeft: "4px solid black",
          borderRight: "4px solid black",
        }}
      >
        {/* Side Navigation Example */}
        <BrutalNavBar
          items={sideNavItems}
          position="side"
          bgColor="#f0f0f0"
          activeColor="red"
          shadow={false}
          onSelect={(item) => setActiveView(item.value)}
        />

        {/* Content Area */}
        <main
          style={{
            flex: 1,
            padding: "24px",
            borderBottom: "4px solid black",
          }}
        >
          <h2
            style={{
              textDecoration: "underline",
              marginBottom: "24px",
            }}
          >
            BRUTALIST NAVIGATION
          </h2>

          <div
            style={{
              padding: "16px",
              border: "3px solid black",
              fontWeight: "900",
            }}
          >
            <p>CURRENT VIEW: {activeView.toUpperCase()}</p>
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
              <li>✓ THICK BORDERS</li>
              <li>✓ INSTANT HOVER EFFECTS</li>
              <li>✓ HIGH-CONTRAST ACTIVE STATE</li>
              <li>✓ TOP OR SIDE POSITIONING</li>
            </ul>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "16px",
          border: "4px solid black",
          borderTop: "none",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Courier, monospace",
          fontWeight: "900",
          textAlign: "center",
        }}
      >
        BRUTALIST DESIGN SYSTEM
      </footer>
    </div>
  );
};

export default BrutalNavBarExample;
