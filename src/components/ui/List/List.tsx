import React from "react";

const BrutalList = ({
  items = [],
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  striped = false,
  onItemClick,
}) => {
  return (
    <div
      style={{
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
      }}
    >
      {items.length > 0 ? (
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => onItemClick && onItemClick(item)}
              style={{
                padding: "16px",
                borderBottom:
                  index < items.length - 1
                    ? `${borderWidth} solid black`
                    : "none",
                backgroundColor: striped && index % 2 === 0 ? "white" : bgColor,
                color: textColor,
                cursor: onItemClick ? "pointer" : "default",
                transition: "none",
                ":hover": {
                  backgroundColor: onItemClick ? activeColor : "inherit",
                  color: onItemClick ? "white" : "inherit",
                },
              }}
              onMouseEnter={(e) => {
                if (onItemClick) {
                  e.currentTarget.style.backgroundColor = activeColor;
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (onItemClick) {
                  e.currentTarget.style.backgroundColor =
                    striped && index % 2 === 0 ? "white" : bgColor;
                  e.currentTarget.style.color = textColor;
                }
              }}
            >
              {item.content || item.toString()}
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            padding: "24px",
            textAlign: "center",
            fontWeight: "900",
            textTransform: "uppercase",
          }}
        >
          NO ITEMS FOUND
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalListExample = () => {
  const [selectedItem, setSelectedItem] = React.useState(null);

  const todoItems = [
    { id: 1, content: "BUILD BRUTALIST UI COMPONENTS", completed: false },
    { id: 2, content: "REMOVE ALL SHADOWS AND GRADIENTS", completed: true },
    { id: 3, content: "ADD THICK BORDERS EVERYWHERE", completed: false },
    { id: 4, content: "USE ONLY PRIMARY COLORS", completed: false },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "600px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST LIST
      </h2>

      <div style={{ marginBottom: "24px" }}>
        <BrutalList
          items={todoItems}
          bgColor="yellow"
          activeColor="black"
          borderWidth="4px"
          striped={true}
          onItemClick={handleItemClick}
        />
      </div>

      {selectedItem && (
        <div
          style={{
            padding: "16px",
            border: "3px solid black",
            backgroundColor: "#f0f0f0",
            marginBottom: "24px",
            fontWeight: "900",
          }}
        >
          SELECTED: {selectedItem.content}
          {selectedItem.completed && (
            <span style={{ color: "red", marginLeft: "8px" }}>✓ COMPLETED</span>
          )}
        </div>
      )}

      <div
        style={{
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ THICK BORDERS</li>
          <li>✓ NO BULLET POINTS</li>
          <li>✓ INSTANT HOVER EFFECTS</li>
          <li>✓ STRIPED BACKGROUND OPTION</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalListExample;
