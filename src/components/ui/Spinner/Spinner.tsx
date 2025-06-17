import React from "react";

const spinKeyframes = `
  @keyframes brutal-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const bounceKeyframes = `
  @keyframes brutal-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25%); }
  }
`;

const stretchKeyframes = `
  @keyframes brutal-stretch {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.3); }
  }
`;

const BrutalSpinner = ({
  size = 40,
  thickness = 4,
  color = "black",
  bgColor = "#f0f0f0",
  speed = "1s",
  style = "spin",
  shadow = true,
}) => {
  // Inject keyframes into a style element
  const Keyframes = () => (
    <style>
      {spinKeyframes}
      {bounceKeyframes}
      {stretchKeyframes}
    </style>
  );

  // Style variants
  const styleComponents = {
    spin: (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${thickness}px solid ${bgColor}`,
          borderTop: `${thickness}px solid ${color}`,
          borderRadius: "50%",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          animation: `brutal-spin ${speed} linear infinite`,
        }}
      />
    ),
    dots: (
      <div
        style={{
          display: "flex",
          gap: `${size / 6}px`,
          alignItems: "center",
          height: `${size}px`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: `${size / 3}px`,
              height: `${size / 3}px`,
              backgroundColor: color,
              animation: `brutal-bounce ${speed} infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    ),
    bars: (
      <div
        style={{
          display: "flex",
          gap: `${size / 8}px`,
          alignItems: "flex-end",
          height: `${size}px`,
        }}
      >
        {[0.3, 0.6, 0.9, 0.6, 0.3].map((scale, i) => (
          <div
            key={i}
            style={{
              width: `${size / 6}px`,
              height: `${size * scale}px`,
              backgroundColor: color,
              animation: `brutal-stretch ${speed} infinite ${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    ),
  };

  return (
    <>
      <Keyframes />
      <div
        style={{
          display: "inline-block",
          border: shadow ? "2px solid black" : "none",
          padding: shadow ? "4px" : "0",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          backgroundColor: shadow ? bgColor : "transparent",
          lineHeight: 0,
        }}
      >
        {styleComponents[style]}
      </div>
    </>
  );
};
// Example usage
const BrutalSpinnerCollection = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "8px",
        }}
      >
        BRUTALIST SPINNERS
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <BrutalSpinner />
          <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
            DEFAULT
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <BrutalSpinner size={50} thickness={6} color="red" speed="0.8s" />
          <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
            RED SPIN
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <BrutalSpinner style="dots" color="blue" size={40} />
          <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
            BOUNCING DOTS
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <BrutalSpinner style="bars" color="green" size={60} shadow={false} />
          <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
            STRETCH BARS
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <BrutalSpinner
            size={70}
            thickness={8}
            bgColor="black"
            color="yellow"
          />
          <p style={{ fontFamily: "Courier, monospace", marginTop: "8px" }}>
            INVERTED
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrutalSpinnerCollection;
