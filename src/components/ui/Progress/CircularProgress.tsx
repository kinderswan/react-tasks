export const BrutalCircularProgress = ({
  value = 0,
  size = 64,
  thickness = 8,
  color = "black",
  bgColor = "#f0f0f0",
  showLabel = true,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        width={size}
        height={size}
        style={{
          transform: "rotate(-90deg)",
          border: "2px solid black",
          boxShadow: "3px 3px 0px black",
          backgroundColor: bgColor,
        }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={thickness}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          style={{
            transition: "none", // Instant changes
          }}
        />
      </svg>

      {showLabel && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            fontSize: `${size * 0.25}px`,
          }}
        >
          {clampedValue}%
        </div>
      )}
    </div>
  );
};
