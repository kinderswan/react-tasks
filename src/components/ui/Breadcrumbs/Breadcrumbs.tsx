import React from "react";

const BrutalBreadcrumbs = ({
  items,
  separator = ">",
  color = "black",
  activeColor = "red",
  bgColor = "#f0f0f0",
  borderWidth = "2px",
  padding = "8px 12px",
  fontSize = "16px",
  shadow = true,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
        backgroundColor: bgColor,
        border: `${borderWidth} solid black`,
        boxShadow: shadow ? "3px 3px 0px black" : "none",
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span
              style={{
                margin: "0 4px",
                color: color,
              }}
            >
              {separator}
            </span>
          )}
          <a
            href={item.href}
            style={{
              color: index === items.length - 1 ? activeColor : color,
              textDecoration: "none",
              cursor: index === items.length - 1 ? "default" : "pointer",
              letterSpacing: "1px",
            }}
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
};

// Example usage
const BrutalBreadcrumbsExample = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Brutalist", href: "/products/brutalist" },
    { label: "Components", href: "/products/brutalist/components" },
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
        BRUTALIST BREADCRUMBS
      </h2>

      <BrutalBreadcrumbs
        items={breadcrumbItems}
        separator="/"
        activeColor="black"
        bgColor="yellow"
        borderWidth="3px"
      />

      <div style={{ marginTop: "24px" }}>
        <BrutalBreadcrumbs
          items={breadcrumbItems.slice(0, 3)}
          separator=">"
          activeColor="red"
          bgColor="#f0f0f0"
          shadow={false}
          padding="12px 16px"
          fontSize="18px"
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
        <p>BRUTALIST FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ THICK BORDERS</li>
          <li>✓ HIGH CONTRAST</li>
          <li>✓ MONOSPACE FONT</li>
          <li>✓ UPPERCASE TEXT</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalBreadcrumbsExample;
