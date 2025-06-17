import React, { useEffect } from "react";

const BrutalModal = ({
  isOpen = false,
  onClose,
  title = "MODAL",
  bgColor = "#f0f0f0",
  textColor = "black",
  borderWidth = "4px",
  shadow = true,
  overlay = true,
  children,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      {overlay && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 999,
            cursor: "pointer",
          }}
        />
      )}

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "300px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          backgroundColor: bgColor,
          border: `${borderWidth} solid black`,
          boxShadow: shadow ? "8px 8px 0px black" : "none",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Courier, monospace",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px",
            borderBottom: `${borderWidth} solid black`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            fontWeight: "900",
            textTransform: "uppercase",
          }}
        >
          <div>{title}</div>
          <button
            onClick={onClose}
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "white",
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              fontSize: "24px",
              cursor: "pointer",
              padding: "0",
              lineHeight: "1",
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            padding: "24px",
            overflowY: "auto",
            color: textColor,
          }}
        >
          {children}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "16px",
            borderTop: `${borderWidth} solid black`,
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              border: `${borderWidth} solid black`,
              backgroundColor: "black",
              color: "white",
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};

// Example usage
const BrutalModalExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        minHeight: "300px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST MODAL
      </h2>

      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "12px 24px",
          border: "3px solid black",
          backgroundColor: "black",
          color: "white",
          fontFamily: "Courier, monospace",
          fontWeight: "900",
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "4px 4px 0px black",
        }}
      >
        OPEN MODAL
      </button>

      <BrutalModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="WARNING"
        bgColor="yellow"
      >
        <div style={{ marginBottom: "16px", fontWeight: "900" }}>
          THIS IS A BRUTALIST MODAL DIALOG
        </div>
        <ul style={{ listStyleType: "none", padding: 0, fontWeight: "900" }}>
          <li>✓ NO SMOOTH TRANSITIONS</li>
          <li>✓ THICK BORDERS</li>
          <li>✓ HIGH CONTRAST</li>
          <li>✓ RAW DESIGN</li>
        </ul>
      </BrutalModal>

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
          <li>✓ ESC KEY TO CLOSE</li>
          <li>✓ CLICK OUTSIDE TO CLOSE</li>
          <li>✓ FIXED POSITIONING</li>
          <li>✓ UPPERCASE TYPOGRAPHY</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalModalExample;
