import React, { useState, useRef, useCallback } from "react";

const BrutalFileUpload = ({
  onFilesSelected,
  multiple = false,
  accept = "*",
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  activeColor = "black",
  textColor = "black",
  shadow = true,
  fontSize = "16px",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        setSelectedFiles(multiple ? files : [files[0]]);
        if (onFilesSelected) {
          onFilesSelected(multiple ? files : files[0]);
        }
      }
    },
    [multiple, onFilesSelected]
  );

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setSelectedFiles(multiple ? files : [files[0]]);
      if (onFilesSelected) {
        onFilesSelected(multiple ? files : files[0]);
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
    if (onFilesSelected) {
      onFilesSelected(multiple ? newFiles : newFiles[0] || null);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Courier, monospace",
      }}
    >
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        multiple={multiple}
        accept={accept}
        style={{ display: "none" }}
      />

      {/* Drag and drop area */}
      <div
        onClick={triggerFileInput}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: `${borderWidth} dashed ${isDragging ? activeColor : "black"}`,
          backgroundColor: isDragging ? activeColor : bgColor,
          color: isDragging ? "white" : textColor,
          padding: "32px",
          textAlign: "center",
          cursor: "pointer",
          marginBottom: "16px",
          boxShadow: shadow ? "4px 4px 0px black" : "none",
          fontWeight: "900",
          textTransform: "uppercase",
          fontSize: fontSize,
          transition: "none", // Instant state change for brutalist feel
        }}
      >
        {isDragging ? "DROP FILES HERE" : "DRAG FILES HERE OR CLICK TO SELECT"}
      </div>

      {/* Selected files list */}
      {selectedFiles.length > 0 && (
        <div
          style={{
            border: `${borderWidth} solid black`,
            backgroundColor: bgColor,
            padding: "12px",
            boxShadow: shadow ? "3px 3px 0px black" : "none",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "12px",
              textDecoration: "underline",
            }}
          >
            SELECTED FILES:
          </h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {selectedFiles.map((file, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom:
                    index < selectedFiles.length - 1
                      ? "1px solid black"
                      : "none",
                }}
              >
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "70%",
                  }}
                >
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  style={{
                    border: `${borderWidth} solid black`,
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "900",
                    cursor: "pointer",
                    padding: "4px 8px",
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Brutalist instructions */}
      <div
        style={{
          marginTop: "16px",
          padding: "8px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          fontWeight: "900",
        }}
      >
        <p style={{ margin: "4px 0" }}>• MAX SIZE: 10MB PER FILE</p>
        <p style={{ margin: "4px 0" }}>
          • ALLOWED: {accept === "*" ? "ANY TYPE" : accept.toUpperCase()}
        </p>
        <p style={{ margin: "4px 0" }}>• MULTIPLE: {multiple ? "YES" : "NO"}</p>
      </div>
    </div>
  );
};

// Example usage
const BrutalFileUploadExample = () => {
  const handleFilesSelected = (files) => {
    console.log("Selected files:", files);
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
        BRUTALIST FILE UPLOAD
      </h2>

      <BrutalFileUpload
        onFilesSelected={handleFilesSelected}
        multiple={true}
        accept="image/*,.pdf"
        bgColor="#f0f0f0"
        activeColor="red"
        borderWidth="3px"
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
          <li>✓ INSTANT DRAG STATE CHANGE</li>
          <li>✓ NO SMOOTH TRANSITIONS</li>
          <li>✓ HIGH CONTRAST COLORS</li>
          <li>✓ RAW FILE LIST DISPLAY</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalFileUploadExample;
