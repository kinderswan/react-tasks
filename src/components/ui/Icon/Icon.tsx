import React from "react";

const BrutalIcon = ({
  name = "box",
  size = 24,
  color = "black",
  bgColor = "#f0f0f0",
  strokeWidth = 2,
  fill = false,
  shadow = true,
  border = true,
  square = true,
}) => {
  // Define brutalist icon shapes
  const iconPaths = {
    box: (
      <rect
        x={strokeWidth}
        y={strokeWidth}
        width={size - strokeWidth * 2}
        height={size - strokeWidth * 2}
      />
    ),
    circle: <circle cx={size / 2} cy={size / 2} r={size / 2 - strokeWidth} />,
    cross: (
      <>
        <line
          x1={strokeWidth}
          y1={strokeWidth}
          x2={size - strokeWidth}
          y2={size - strokeWidth}
        />
        <line
          x1={size - strokeWidth}
          y1={strokeWidth}
          x2={strokeWidth}
          y2={size - strokeWidth}
        />
      </>
    ),
    arrow: (
      <polyline
        points={`
          ${strokeWidth},${size / 2} 
          ${size / 2},${strokeWidth} 
          ${size - strokeWidth},${size / 2} 
          ${size / 2},${size - strokeWidth} 
          ${strokeWidth},${size / 2}
        `}
        fill="none"
      />
    ),
    triangle: (
      <polygon
        points={`
          ${size / 2},${strokeWidth} 
          ${strokeWidth},${size - strokeWidth} 
          ${size - strokeWidth},${size - strokeWidth}
        `}
      />
    ),
    bolt: (
      <polygon
        points={`
          ${size * 0.4},${strokeWidth} 
          ${size - strokeWidth},${size * 0.6} 
          ${size * 0.6},${size * 0.6} 
          ${size * 0.6},${size - strokeWidth} 
          ${strokeWidth},${size * 0.4} 
          ${size * 0.4},${size * 0.4}
        `}
      />
    ),
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        backgroundColor: bgColor,
        border: border ? `${strokeWidth}px solid black` : "none",
        borderRadius: square ? "0" : "50%",
        boxShadow: shadow ? "3px 3px 0px black" : "none",
      }}
    >
      <svg
        width={size - strokeWidth * 2}
        height={size - strokeWidth * 2}
        viewBox={`0 0 ${size} ${size}`}
      >
        {React.cloneElement(iconPaths[name] || iconPaths.box, {
          stroke: color,
          strokeWidth: strokeWidth,
          fill: fill ? color : "none",
        })}
      </svg>
    </div>
  );
};

// Example usage
const BrutalIconCollection = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "16px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <BrutalIcon name="box" size={48} />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          BOX
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <BrutalIcon name="circle" size={48} color="red" strokeWidth={3} />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          CIRCLE
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <BrutalIcon name="cross" size={48} bgColor="black" color="white" />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          CROSS
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <BrutalIcon name="arrow" size={48} strokeWidth={4} shadow={false} />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          ARROW
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <BrutalIcon
          name="triangle"
          size={48}
          color="blue"
          bgColor="yellow"
          fill
        />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          TRIANGLE
        </p>
      </div>

      <div style={{ textAlign: "center" }}>
        <BrutalIcon name="bolt" size={48} color="green" square={false} />
        <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
          BOLT
        </p>
      </div>
    </div>
  );
};

export default BrutalIconCollection;
