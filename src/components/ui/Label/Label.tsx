export const BrutalLabel = ({
  children,
  htmlFor,
  required = false,
  size = "medium",
  underline = false,
}) => {
  // Define size variants
  const sizeStyles = {
    small: { fontSize: "14px", padding: "2px 4px" },
    medium: { fontSize: "18px", padding: "4px 8px" },
    large: { fontSize: "24px", padding: "6px 12px" },
  };

  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "inline-block",
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
        letterSpacing: "1px",
        backgroundColor: "#f0f0f0",
        border: "3px solid black",
        boxShadow: "4px 4px 0px black",
        marginBottom: "8px",
        ...sizeStyles[size],
        ...(underline && { textDecoration: "underline" }),
      }}
    >
      {children}
      {required && (
        <span
          style={{
            color: "red",
            marginLeft: "4px",
            fontSize: "1.2em",
          }}
        >
          *
        </span>
      )}
    </label>
  );
};
