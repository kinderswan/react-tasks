import React from "react";

export const BrutalAvatar = ({
  src,
  alt = "User",
  size = 64,
  square = true,
  borderWidth = 3,
  shadow = true,
  initials,
  bgColor = "#f0f0f0",
  textColor = "black",
}) => {
  const renderContent = () => {
    if (src) {
      return (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      );
    }

    if (initials) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Courier, monospace",
            fontWeight: "900",
            fontSize: size * 0.4,
            color: textColor,
            textTransform: "uppercase",
          }}
        >
          {initials.slice(0, 2)}
        </div>
      );
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          stroke={textColor}
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    );
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid black`,
        borderRadius: square ? "0" : "50%",
        overflow: "hidden",
        boxShadow: shadow ? "4px 4px 0px black" : "none",
        backgroundColor: "white",
      }}
    >
      {renderContent()}
    </div>
  );
};
