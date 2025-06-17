import React, { useState } from "react";

const BrutalPagination = ({
  currentPage = 1,
  totalPages = 10,
  visiblePages = 5,
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  shadow = true,
  fontSize = "16px",
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
    onPageChange && onPageChange(page);
  };

  // Calculate visible page range
  const getPageRange = () => {
    let start = Math.max(1, activePage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    // Adjust if we're at the end
    if (end - start + 1 < visiblePages) {
      start = Math.max(1, end - visiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
      }}
    >
      {/* First & Previous buttons */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={activePage === 1}
        style={{
          padding: "12px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          cursor: activePage === 1 ? "default" : "pointer",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          fontSize: fontSize,
          opacity: activePage === 1 ? 0.5 : 1,
        }}
      >
        ««
      </button>

      <button
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
        style={{
          padding: "12px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          cursor: activePage === 1 ? "default" : "pointer",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          fontSize: fontSize,
          opacity: activePage === 1 ? 0.5 : 1,
        }}
      >
        «
      </button>

      {/* Page numbers */}
      {getPageRange().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            padding: "12px 16px",
            border: `${borderWidth} solid black`,
            backgroundColor: activePage === page ? activeColor : bgColor,
            color: activePage === page ? "white" : textColor,
            cursor: "pointer",
            boxShadow: shadow ? "3px 3px 0px black" : "none",
            fontSize: fontSize,
            minWidth: "40px",
          }}
        >
          {page}
        </button>
      ))}

      {/* Next & Last buttons */}
      <button
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
        style={{
          padding: "12px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          cursor: activePage === totalPages ? "default" : "pointer",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          fontSize: fontSize,
          opacity: activePage === totalPages ? 0.5 : 1,
        }}
      >
        »
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={activePage === totalPages}
        style={{
          padding: "12px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          color: textColor,
          cursor: activePage === totalPages ? "default" : "pointer",
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          fontSize: fontSize,
          opacity: activePage === totalPages ? 0.5 : 1,
        }}
      >
        »»
      </button>
    </div>
  );
};

// Example usage
const BrutalPaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 15;

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "800px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST PAGINATION
      </h2>

      <div
        style={{
          marginBottom: "32px",
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>CURRENT PAGE: {currentPage}</p>
        <p>TOTAL PAGES: {totalPages}</p>
      </div>

      <BrutalPagination
        currentPage={currentPage}
        totalPages={totalPages}
        activeColor="red"
        bgColor="#f0f0f0"
        borderWidth="4px"
        onPageChange={setCurrentPage}
      />

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
          <li>✓ INSTANT PAGE CHANGES</li>
          <li>✓ NO ROUNDED CORNERS</li>
          <li>✓ AGGRESSIVE SHADOW</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalPaginationExample;
