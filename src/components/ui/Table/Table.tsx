import React from "react";

const BrutalTable = ({
  data = [],
  columns = [],
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  headerColor = "black",
  headerTextColor = "white",
  shadow = true,
  striped = false,
  fontSize = "14px",
}) => {
  return (
    <div
      style={{
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        overflowX: "auto",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          boxShadow: shadow ? "6px 6px 0px black" : "none",
        }}
      >
        {/* Table Header */}
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={colIndex}
                style={{
                  padding: "16px",
                  border: `${borderWidth} solid black`,
                  backgroundColor: headerColor,
                  color: headerTextColor,
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontSize: fontSize,
                  whiteSpace: "nowrap",
                }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              style={{
                backgroundColor:
                  striped && rowIndex % 2 === 0 ? "white" : bgColor,
              }}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: "12px 16px",
                    border: `${borderWidth} solid black`,
                    color: textColor,
                    fontSize: fontSize,
                    verticalAlign: "top",
                  }}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Empty State */}
      {data.length === 0 && (
        <div
          style={{
            padding: "24px",
            border: `${borderWidth} solid black`,
            borderTop: "none",
            backgroundColor: bgColor,
            textAlign: "center",
            fontWeight: "900",
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
const BrutalTableExample = () => {
  const products = [
    { id: 1, name: "BRUTAL CHAIR", price: 299, stock: 12 },
    { id: 2, name: "RAW TABLE", price: 599, stock: 5 },
    { id: 3, name: "HARSH LAMP", price: 199, stock: 0 },
    { id: 4, name: "UNPOLISHED DESK", price: 499, stock: 8 },
  ];

  const columns = [
    {
      header: "ID",
      key: "id",
      render: (item) => `#${item.id}`,
    },
    {
      header: "Product",
      key: "name",
    },
    {
      header: "Price",
      key: "price",
      render: (item) => `$${item.price}`,
    },
    {
      header: "Stock",
      key: "stock",
      render: (item) => (
        <span
          style={{
            color: item.stock === 0 ? "red" : "inherit",
            fontWeight: "900",
          }}
        >
          {item.stock === 0 ? "OUT OF STOCK" : `${item.stock} AVAILABLE`}
        </span>
      ),
    },
  ];

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
        BRUTALIST DATA TABLE
      </h2>

      <BrutalTable
        data={products}
        columns={columns}
        bgColor="#f0f0f0"
        headerColor="black"
        headerTextColor="white"
        borderWidth="3px"
        striped={true}
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
          <li>✓ HIGH CONTRAST HEADERS</li>
          <li>✓ MONOSPACE FONT</li>
          <li>✓ STRIPED ROWS OPTION</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalTableExample;
