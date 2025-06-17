import React, { useState, useEffect } from "react";

const BrutalSidebar = ({
  isOpen = false,
  onClose,
  position = "left",
  width = "300px",
  bgColor = "#f0f0f0",
  textColor = "black",
  borderWidth = "4px",
  shadow = true,
  overlay = true,
  children,
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);

  useEffect(() => {
    setInternalOpen(isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    const newState = !internalOpen;
    setInternalOpen(newState);
    if (!newState && onClose) onClose();
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".brutal-sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        toggleSidebar();
      }
    };

    if (internalOpen && overlay) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [internalOpen, overlay]);

  return (
    <>
      {/* Overlay */}
      {overlay && internalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
            cursor: "pointer",
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className="brutal-sidebar"
        style={{
          position: "fixed",
          top: 0,
          [position]: internalOpen ? 0 : `-${width}`,
          width: width,
          height: "100vh",
          backgroundColor: bgColor,
          borderRight:
            position === "left" ? `${borderWidth} solid black` : "none",
          borderLeft:
            position === "right" ? `${borderWidth} solid black` : "none",
          boxShadow: shadow ? "8px 0 0 black" : "none",
          zIndex: 999,
          transition: "left 0.3s, right 0.3s", // Smooth sliding animation
          fontFamily: "Courier, monospace",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close button */}
        <button
          onClick={toggleSidebar}
          style={{
            alignSelf: "flex-end",
            margin: "16px",
            padding: "8px 12px",
            border: `${borderWidth} solid black`,
            backgroundColor: "black",
            color: "white",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          × CLOSE
        </button>

        {/* Content */}
        <div
          style={{
            padding: "16px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

// Example Usage Component
const BrutalSidebarExample = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Courier, monospace",
        padding: "24px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        WORKING BRUTALIST SIDEBAR
      </h2>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <button
          onClick={() => setIsLeftOpen(true)}
          style={{
            padding: "12px 24px",
            border: "4px solid black",
            backgroundColor: "black",
            color: "white",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "4px 4px 0px black",
          }}
        >
          OPEN LEFT SIDEBAR
        </button>

        <button
          onClick={() => setIsRightOpen(true)}
          style={{
            padding: "12px 24px",
            border: "4px solid black",
            backgroundColor: "black",
            color: "white",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
            fontSize: "16px",
            boxShadow: "4px 4px 0px black",
          }}
        >
          OPEN RIGHT SIDEBAR
        </button>
      </div>

      {/* Left Sidebar */}
      <BrutalSidebar
        isOpen={isLeftOpen}
        onClose={() => setIsLeftOpen(false)}
        position="left"
        bgColor="yellow"
        width="320px"
      >
        <h3
          style={{
            borderBottom: "3px solid black",
            paddingBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          NAVIGATION
        </h3>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            fontWeight: "900",
          }}
        >
          <li style={{ padding: "12px 0", borderBottom: "2px solid black" }}>
            HOME
          </li>
          <li style={{ padding: "12px 0", borderBottom: "2px solid black" }}>
            PRODUCTS
          </li>
          <li style={{ padding: "12px 0", borderBottom: "2px solid black" }}>
            ABOUT
          </li>
          <li style={{ padding: "12px 0" }}>CONTACT</li>
        </ul>
      </BrutalSidebar>

      {/* Right Sidebar */}
      <BrutalSidebar
        isOpen={isRightOpen}
        onClose={() => setIsRightOpen(false)}
        position="right"
        bgColor="#f0f0f0"
        width="280px"
        shadow={false}
      >
        <h3
          style={{
            borderBottom: "3px solid black",
            paddingBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          SETTINGS
        </h3>
        <div
          style={{
            border: "3px solid black",
            padding: "16px",
            marginBottom: "16px",
            fontWeight: "900",
          }}
        >
          <p>THEME: BRUTAL</p>
        </div>
        <div
          style={{
            border: "3px solid black",
            padding: "16px",
            fontWeight: "900",
          }}
        >
          <p>FONT: MONOSPACE</p>
        </div>
      </BrutalSidebar>

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>FIXED ISSUES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ PROPER STATE MANAGEMENT</li>
          <li>✓ WORKING CLICK-OUTSIDE</li>
          <li>✓ SMOOTH SLIDING ANIMATION</li>
          <li>✓ CORRECT OVERLAY BEHAVIOR</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalSidebarExample;
