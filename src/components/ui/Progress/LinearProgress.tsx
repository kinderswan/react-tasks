export const BrutalLinearProgress = ({
  value = 0,
  thickness = 8,
  color = "black",
  bgColor = "#f0f0f0",
  showLabel = false,
  labelPosition = "right",
  width = "100%",
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: width,
      }}
    >
      {showLabel && labelPosition === "left" && (
        <span
          style={{
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            fontSize: "14px",
            minWidth: "40px",
          }}
        >
          {clampedValue}%
        </span>
      )}

      <div
        style={{
          flex: 1,
          height: `${thickness}px`,
          backgroundColor: bgColor,
          border: "2px solid black",
          boxShadow: "3px 3px 0px black",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${clampedValue}%`,
            height: "100%",
            backgroundColor: color,
            transition: "none", // Instant changes for brutalist feel
          }}
        />
      </div>

      {showLabel && labelPosition === "right" && (
        <span
          style={{
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            fontSize: "14px",
            minWidth: "40px",
          }}
        >
          {clampedValue}%
        </span>
      )}
    </div>
  );
};
