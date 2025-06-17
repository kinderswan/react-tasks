import React from "react";

const BrutalLink = ({
  children,
  href,
  underline = true,
  color = "black",
  hoverColor = "red",
  fontSize = "inherit",
  bold = true,
  external = false,
  onClick,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      if (e.defaultPrevented) return;
    }

    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      e.preventDefault();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        color: color,
        textDecoration: underline ? "underline" : "none",
        fontFamily: "Courier, monospace",
        fontWeight: bold ? "900" : "normal",
        fontSize: fontSize,
        cursor: "pointer",
        transition: "none",
        ":hover": {
          color: hoverColor,
          textDecoration: underline ? "underline" : "none",
        },
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = color;
      }}
      {...(external ? { rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && (
        <span style={{ marginLeft: "4px", fontWeight: "900" }}>↗</span>
      )}
    </a>
  );
};

// Example usage
const BrutalLinkExample = () => {
  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST LINK
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "32px",
        }}
      >
        <p style={{ fontWeight: "900" }}>
          This is a <BrutalLink href="#basic">basic brutalist link</BrutalLink>{" "}
          with underline.
        </p>

        <p style={{ fontWeight: "900" }}>
          This is a{" "}
          <BrutalLink href="#no-underline" underline={false}>
            link without underline
          </BrutalLink>
          .
        </p>

        <p style={{ fontWeight: "900" }}>
          This is an{" "}
          <BrutalLink href="https://example.com" external hoverColor="blue">
            external link
          </BrutalLink>{" "}
          with icon.
        </p>

        <p style={{ fontWeight: "900" }}>
          <BrutalLink
            href="#custom"
            color="red"
            hoverColor="black"
            fontSize="18px"
            onClick={(e) => {
              e.preventDefault();
              alert("BRUTAL LINK CLICKED!");
            }}
          >
            Custom styled clickable link
          </BrutalLink>
        </p>
      </div>

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST LINK FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ INSTANT HOVER EFFECT</li>
          <li>✓ MONOSPACE TYPOGRAPHY</li>
          <li>✓ EXTERNAL LINK INDICATOR</li>
          <li>✓ CUSTOM COLOR OPTIONS</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalLinkExample;
