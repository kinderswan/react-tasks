import React, { useState } from "react";

const BrutalAccordion = ({
  items,
  multipleOpen = false,
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  headerBgColor = "white",
  textColor = "black",
  shadow = true,
}) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (multipleOpen) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((item) => item !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "Courier, monospace",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "8px",
            border: `${borderWidth} solid black`,
            backgroundColor: bgColor,
            boxShadow: shadow ? "4px 4px 0px black" : "none",
          }}
        >
          <button
            onClick={() => toggleItem(index)}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              backgroundColor: headerBgColor,
              color: textColor,
              fontWeight: "900",
              textTransform: "uppercase",
              fontSize: "16px",
              textAlign: "left",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: openItems.includes(index)
                ? `${borderWidth} solid black`
                : "none",
            }}
          >
            {item.title}
            <span style={{ fontSize: "20px" }}>
              {openItems.includes(index) ? "−" : "+"}
            </span>
          </button>

          {openItems.includes(index) && (
            <div
              style={{
                padding: "16px",
                borderTop: `${borderWidth} solid black`,
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Example Usage
const BrutalAccordionExample = () => {
  const accordionItems = [
    {
      title: "What is Brutalism?",
      content: (
        <p>
          Brutalism in web design rejects polish and embraces raw,
          high-contrast, unrefined aesthetics. Sharp edges, heavy typography,
          and exposed structure are key.
        </p>
      ),
    },
    {
      title: "Why use this accordion?",
      content: (
        <p>
          This component is <strong>bold</strong>, <strong>functional</strong>,
          and <strong>unapologetic</strong>. It doesn't hide behind animations
          or smooth transitions.
        </p>
      ),
    },
    {
      title: "Customization",
      content: (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✔ Thick borders</li>
          <li>✔ High contrast colors</li>
          <li>✔ No rounded corners</li>
          <li>✔ Optional drop shadow</li>
        </ul>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "500px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST ACCORDION
      </h2>

      <BrutalAccordion
        items={accordionItems}
        multipleOpen={false}
        borderWidth="4px"
        bgColor="#f0f0f0"
        headerBgColor="black"
        textColor="white"
        shadow={true}
      />
    </div>
  );
};

export default BrutalAccordionExample;
