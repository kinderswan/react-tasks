import React, { useState } from "react";

const BrutalRating = ({
  max = 5,
  value = 0,
  size = 32,
  color = "black",
  activeColor = "yellow",
  bgColor = "#f0f0f0",
  thickness = 2,
  shadow = true,
  onChange,
  readOnly = false,
}) => {
  const [rating, setRating] = useState(value);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newValue) => {
    if (!readOnly) {
      setRating(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const handleMouseEnter = (newValue) => {
    if (!readOnly) {
      setHoverRating(newValue);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;
        const isActive = ratingValue <= (hoverRating || rating);

        return (
          <div
            key={index}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: readOnly ? "default" : "pointer",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: bgColor,
              border: `${thickness}px solid black`,
              boxShadow: shadow ? "3px 3px 0px black" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width={size * 0.6}
              height={size * 0.6}
              viewBox="0 0 24 24"
              fill={isActive ? activeColor : "none"}
              stroke={color}
              strokeWidth={thickness}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

// Example usage
const BrutalRatingExample = () => {
  const [rating, setRating] = useState(3);

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "400px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST RATING
      </h2>

      <div style={{ marginBottom: "32px" }}>
        <p style={{ fontFamily: "Courier, monospace", marginBottom: "8px" }}>
          INTERACTIVE RATING: {rating}
        </p>
        <BrutalRating
          value={rating}
          onChange={setRating}
          size={40}
          activeColor="red"
          thickness={3}
        />
      </div>

      <div>
        <p style={{ fontFamily: "Courier, monospace", marginBottom: "8px" }}>
          READ-ONLY RATING (4 STARS)
        </p>
        <BrutalRating
          value={4}
          readOnly
          size={32}
          activeColor="black"
          bgColor="yellow"
          shadow={false}
        />
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontFamily: "Courier, monospace",
        }}
      >
        CURRENT RATING: <strong>{rating}</strong>
      </div>
    </div>
  );
};

export default BrutalRatingExample;
