import React, { useState } from "react";

const BrutalTreeNode = ({
  node,
  level = 0,
  borderWidth = "2px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  fontSize = "14px",
  onNodeClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleNodeClick = () => {
    if (onNodeClick) onNodeClick(node);
  };

  return (
    <div
      style={{
        marginLeft: `${level * 20}px`,
        fontFamily: "Courier, monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 12px",
          borderBottom: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          cursor: "pointer",
          fontWeight: "900",
        }}
        onClick={handleNodeClick}
      >
        {hasChildren && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            style={{
              marginRight: "8px",
              fontSize: "18px",
              fontWeight: "900",
              cursor: "pointer",
              minWidth: "20px",
            }}
          >
            {isExpanded ? "−" : "+"}
          </span>
        )}
        {!hasChildren && <span style={{ marginRight: "28px" }}>•</span>}
        <span style={{ color: textColor, fontSize: fontSize }}>
          {node.label}
        </span>
      </div>

      {isExpanded && hasChildren && (
        <div
          style={{
            borderLeft: `${borderWidth} solid black`,
            marginLeft: "10px",
          }}
        >
          {node.children.map((childNode, index) => (
            <BrutalTreeNode
              key={index}
              node={childNode}
              level={level + 1}
              borderWidth={borderWidth}
              bgColor={bgColor}
              textColor={textColor}
              activeColor={activeColor}
              fontSize={fontSize}
              onNodeClick={onNodeClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BrutalTreeView = ({
  data = [],
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  onNodeClick,
}) => {
  return (
    <div
      style={{
        border: `${borderWidth} solid black`,
        backgroundColor: bgColor,
        boxShadow: shadow ? "6px 6px 0px black" : "none",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
      }}
    >
      {data.length > 0 ? (
        data.map((node, index) => (
          <BrutalTreeNode
            key={index}
            node={node}
            borderWidth={borderWidth}
            bgColor={bgColor}
            textColor={textColor}
            activeColor={activeColor}
            fontSize={fontSize}
            onNodeClick={onNodeClick}
          />
        ))
      ) : (
        <div
          style={{
            padding: "16px",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          NO DATA AVAILABLE
        </div>
      )}
    </div>
  );
};

// Example usage
const BrutalTreeViewExample = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const treeData = [
    {
      label: "BRUTAL DESIGN SYSTEM",
      children: [
        {
          label: "COMPONENTS",
          children: [
            { label: "BUTTONS" },
            { label: "CARDS" },
            { label: "LISTS" },
          ],
        },
        {
          label: "TYPOGRAPHY",
          children: [{ label: "HEADINGS" }, { label: "PARAGRAPHS" }],
        },
        {
          label: "COLORS",
          children: [{ label: "PRIMARY" }, { label: "SECONDARY" }],
        },
      ],
    },
    {
      label: "DOCUMENTATION",
      children: [{ label: "GETTING STARTED" }, { label: "API REFERENCE" }],
    },
  ];

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
        BRUTALIST TREE VIEW
      </h2>

      <BrutalTreeView
        data={treeData}
        bgColor="yellow"
        textColor="black"
        activeColor="black"
        borderWidth="3px"
        onNodeClick={setSelectedNode}
      />

      {selectedNode && (
        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            border: "3px solid black",
            backgroundColor: "#f0f0f0",
            fontWeight: "900",
          }}
        >
          SELECTED: {selectedNode.label}
        </div>
      )}

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>BRUTALIST FEATURES:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>✓ THICK BORDERS</li>
          <li>✓ RAW HIERARCHY DISPLAY</li>
          <li>✓ INSTANT EXPAND/COLLAPSE</li>
          <li>✓ MONOSPACE TYPOGRAPHY</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalTreeViewExample;
