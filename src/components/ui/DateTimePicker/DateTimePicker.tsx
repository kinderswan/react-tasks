import React, { useState, useEffect, useRef } from "react";

const BrutalDateTimePicker = ({
  value,
  onChange,
  showTime = true,
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  headerColor = "black",
  textColor = "black",
  activeColor = "red",
  shadow = true,
  fontSize = "16px",
}) => {
  const [currentDate, setCurrentDate] = useState(value || new Date());
  const [initialDate] = useState(value ? new Date(value) : new Date()); // Store initial date
  const [showPicker, setShowPicker] = useState(false);
  const [view, setView] = useState("days");
  const pickerRef = useRef(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        // Revert to initial date when clicking outside
        setCurrentDate(new Date(initialDate));
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker, initialDate]);

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysCount = daysInMonth(month, year);
    const firstDay = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysCount; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleDateClick = (date) => {
    if (!date) return;
    const newDate = new Date(date);
    if (showTime) {
      newDate.setHours(currentDate.getHours());
      newDate.setMinutes(currentDate.getMinutes());
    }
    setCurrentDate(newDate);
    onChange(newDate);
    if (!showTime) setShowPicker(false);
  };

  const handleTimeChange = (e, type) => {
    const newDate = new Date(currentDate);
    if (type === "hours") {
      newDate.setHours(parseInt(e.target.value));
    } else {
      newDate.setMinutes(parseInt(e.target.value));
    }
    setCurrentDate(newDate);
    onChange(newDate);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const changeYear = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() + offset);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "Courier, monospace",
      }}
      ref={pickerRef}
    >
      <div
        onClick={() => setShowPicker(!showPicker)}
        style={{
          padding: "12px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          boxShadow: shadow ? "3px 3px 0px black" : "none",
          cursor: "pointer",
          fontWeight: "900",
          textTransform: "uppercase",
          fontSize: fontSize,
        }}
      >
        {formatDate(currentDate)}
        {showTime && `, ${formatTime(currentDate)}`}
      </div>

      {showPicker && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "8px",
            border: `${borderWidth} solid black`,
            backgroundColor: bgColor,
            boxShadow: shadow ? "6px 6px 0px black" : "none",
            zIndex: 100,
            width: "300px",
            padding: "12px",
          }}
        >
          {/* Header with month/year navigation */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              borderBottom: `${borderWidth} solid black`,
              paddingBottom: "8px",
            }}
          >
            <button
              onClick={() => changeYear(-1)}
              style={{
                border: `${borderWidth} solid black`,
                backgroundColor: "white",
                fontWeight: "900",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
              }}
            >
              «
            </button>
            <button
              onClick={() => changeMonth(-1)}
              style={{
                border: `${borderWidth} solid black`,
                backgroundColor: "white",
                fontWeight: "900",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
              }}
            >
              ‹
            </button>
            <div
              style={{
                fontWeight: "900",
                textTransform: "uppercase",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => setView(view === "months" ? "days" : "months")}
            >
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button
              onClick={() => changeMonth(1)}
              style={{
                border: `${borderWidth} solid black`,
                backgroundColor: "white",
                fontWeight: "900",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
              }}
            >
              ›
            </button>
            <button
              onClick={() => changeYear(1)}
              style={{
                border: `${borderWidth} solid black`,
                backgroundColor: "white",
                fontWeight: "900",
                cursor: "pointer",
                width: "40px",
                height: "40px",
                fontSize: "20px",
              }}
            >
              »
            </button>
          </div>

          {/* Days grid */}
          {view === "days" && (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "4px",
                  marginBottom: "12px",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "4px",
                }}
              >
                {getMonthDays().map((date, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    style={{
                      border: `${borderWidth} solid black`,
                      backgroundColor:
                        date &&
                        date.toDateString() === currentDate.toDateString()
                          ? activeColor
                          : "white",
                      color:
                        date &&
                        date.toDateString() === currentDate.toDateString()
                          ? "white"
                          : textColor,
                      fontWeight: "900",
                      cursor: date ? "pointer" : "default",
                      aspectRatio: "1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                    }}
                    disabled={!date}
                  >
                    {date && date.getDate()}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Months grid */}
          {view === "months" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "8px",
              }}
            >
              {Array.from({ length: 12 }, (_, i) => {
                const monthDate = new Date(currentDate);
                monthDate.setMonth(i);
                return (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentDate(monthDate);
                      setView("days");
                    }}
                    style={{
                      border: `${borderWidth} solid black`,
                      backgroundColor:
                        currentDate.getMonth() === i ? activeColor : "white",
                      color: currentDate.getMonth() === i ? "white" : textColor,
                      fontWeight: "900",
                      cursor: "pointer",
                      padding: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {monthDate.toLocaleDateString("en-US", { month: "short" })}
                  </button>
                );
              })}
            </div>
          )}

          {/* Time picker */}
          {showTime && view === "days" && (
            <div
              style={{
                marginTop: "12px",
                paddingTop: "12px",
                borderTop: `${borderWidth} solid black`,
                display: "flex",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <select
                value={currentDate.getHours()}
                onChange={(e) => handleTimeChange(e, "hours")}
                style={{
                  border: `${borderWidth} solid black`,
                  backgroundColor: "white",
                  fontFamily: "Courier, monospace",
                  fontWeight: "900",
                  padding: "4px",
                  fontSize: "16px",
                }}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
              <span style={{ fontWeight: "900" }}>:</span>
              <select
                value={currentDate.getMinutes()}
                onChange={(e) => handleTimeChange(e, "minutes")}
                style={{
                  border: `${borderWidth} solid black`,
                  backgroundColor: "white",
                  fontFamily: "Courier, monospace",
                  fontWeight: "900",
                  padding: "4px",
                  fontSize: "16px",
                }}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i}>
                    {i.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => {
              setCurrentDate(new Date(initialDate));
              setShowPicker(false);
            }}
            style={{
              marginTop: "12px",
              padding: "8px",
              border: `${borderWidth} solid black`,
              backgroundColor: "white",
              fontFamily: "Courier, monospace",
              fontWeight: "900",
              cursor: "pointer",
              width: "100%",
              textTransform: "uppercase",
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

// Example usage remains the same...
// Example usage
const BrutalDateTimePickerExample = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        maxWidth: "500px",
        fontFamily: "Courier, monospace",
      }}
    >
      <h2
        style={{
          textDecoration: "underline",
          marginBottom: "24px",
        }}
      >
        BRUTALIST DATE/TIME PICKER
      </h2>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontWeight: "900", marginBottom: "8px" }}>DATE PICKER:</p>
        <BrutalDateTimePicker
          value={date}
          onChange={setDate}
          showTime={false}
          bgColor="yellow"
          activeColor="black"
          borderWidth="4px"
        />
      </div>

      <div>
        <p style={{ fontWeight: "900", marginBottom: "8px" }}>
          DATE & TIME PICKER:
        </p>
        <BrutalDateTimePicker
          value={date}
          onChange={setDate}
          showTime={true}
          bgColor="#f0f0f0"
          activeColor="red"
          shadow={false}
        />
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "16px",
          border: "3px solid black",
          fontWeight: "900",
        }}
      >
        <p>SELECTED: {date.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default BrutalDateTimePickerExample;
