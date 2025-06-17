import React, { useState, useEffect } from "react";

const BrutalAlert = ({
  message,
  type = "info", // 'info', 'success', 'warning', 'error'
  duration = 5000,
  position = "top-right", // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
  borderWidth = "3px",
  shadow = true,
  onClose,
  showClose = true,
}) => {
  const [visible, setVisible] = useState(true);

  // Auto-dismiss after duration
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  const typeStyles = {
    info: { bgColor: "#f0f0f0", textColor: "black" },
    success: { bgColor: "green", textColor: "white" },
    warning: { bgColor: "yellow", textColor: "black" },
    error: { bgColor: "red", textColor: "white" },
  };

  const positionStyles = {
    "top-right": { top: "20px", right: "20px" },
    "top-left": { top: "20px", left: "20px" },
    "bottom-right": { bottom: "20px", right: "20px" },
    "bottom-left": { bottom: "20px", left: "20px" },
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 1000,
        padding: "16px",
        border: `${borderWidth} solid black`,
        backgroundColor: typeStyles[type].bgColor,
        color: typeStyles[type].textColor,
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
        boxShadow: shadow ? "4px 4px 0px black" : "none",
        maxWidth: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        ...positionStyles[position],
      }}
    >
      <div>{message}</div>
      {showClose && (
        <button
          onClick={handleClose}
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: typeStyles[type].textColor,
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            fontSize: "20px",
            cursor: "pointer",
            padding: "0",
            lineHeight: "1",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

// Example usage
const BrutalAlertExample = () => {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (type) => {
    const id = Date.now();
    const messages = {
      info: "This is an INFORMATION message",
      success: "ACTION COMPLETED SUCCESSFULLY",
      warning: "WARNING: BRUTAL DESIGN AHEAD",
      error: "ERROR: TOO MUCH POLISH DETECTED",
    };

    setAlerts((prev) => [...prev, { id, type, message: messages[type] }]);
  };

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

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
        BRUTALIST ALERTS
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <button
          onClick={() => addAlert("info")}
          style={{
            padding: "12px 24px",
            border: "3px solid black",
            backgroundColor: "#f0f0f0",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Show Info Alert
        </button>
        <button
          onClick={() => addAlert("success")}
          style={{
            padding: "12px 24px",
            border: "3px solid black",
            backgroundColor: "green",
            color: "white",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Show Success Alert
        </button>
        <button
          onClick={() => addAlert("warning")}
          style={{
            padding: "12px 24px",
            border: "3px solid black",
            backgroundColor: "yellow",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Show Warning Alert
        </button>
        <button
          onClick={() => addAlert("error")}
          style={{
            padding: "12px 24px",
            border: "3px solid black",
            backgroundColor: "red",
            color: "white",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Show Error Alert
        </button>
      </div>

      {alerts.map((alert) => (
        <BrutalAlert
          key={alert.id}
          message={alert.message}
          type={alert.type}
          duration={5000}
          position={
            ["top-right", "top-left", "bottom-right", "bottom-left"][
              alerts.indexOf(alert) % 4
            ]
          }
          onClose={() => removeAlert(alert.id)}
        />
      ))}

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
          <li>✓ INSTANT APPEARANCE</li>
          <li>✓ AUTO-DISMISS</li>
          <li>✓ HIGH-CONTRAST COLORS</li>
          <li>✓ MULTIPLE POSITIONS</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalAlertExample;
