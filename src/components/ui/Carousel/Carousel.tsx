import React, { useState } from "react";

const BrutalCarousel = ({
  slides,
  autoPlay = false,
  interval = 3000,
  showControls = true,
  showIndicators = true,
  width = "100%",
  height = "400px",
  bgColor = "#f0f0f0",
  borderWidth = "3px",
  shadow = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        overflow: "hidden",
      }}
    >
      {/* Slides */}
      <div
        style={{
          display: "flex",
          width: `${slides.length * 100}%`,
          height: "100%",
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          transition: "none", // Instant transition for brutalist feel
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              fontSize: "20px",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              fontSize: "20px",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            →
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 2,
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: index === currentSlide ? "black" : bgColor,
                border: `${borderWidth} solid black`,
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalCarouselExample = () => {
  const slides = [
    {
      content: (
        <div
          style={{
            textAlign: "center",
            fontFamily: "Courier, monospace",
          }}
        >
          <h2 style={{ fontSize: "2rem", textDecoration: "underline" }}>
            BRUTAL DESIGN
          </h2>
          <p>Raw, unpolished, and unapologetic</p>
        </div>
      ),
    },
    {
      content: (
        <div
          style={{
            textAlign: "center",
            fontFamily: "Courier, monospace",
          }}
        >
          <h2 style={{ fontSize: "2rem", textDecoration: "underline" }}>
            NO SMOOTHNESS
          </h2>
          <p>Instant transitions. No easing.</p>
        </div>
      ),
    },
    {
      content: (
        <div
          style={{
            textAlign: "center",
            fontFamily: "Courier, monospace",
          }}
        >
          <h2 style={{ fontSize: "2rem", textDecoration: "underline" }}>
            HIGH CONTRAST
          </h2>
          <p>Black. White. Primary colors.</p>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "800px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST CAROUSEL
      </h2>

      <BrutalCarousel
        slides={slides}
        autoPlay={true}
        height="300px"
        bgColor="yellow"
        borderWidth="4px"
      />

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontFamily: "Courier, monospace",
        }}
      >
        <p>This carousel rejects:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ Smooth animations</li>
          <li>✓ Subtle transitions</li>
          <li>✓ Rounded corners</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalCarouselExample;
