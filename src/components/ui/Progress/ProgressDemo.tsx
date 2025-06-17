import { useState, useEffect } from "react";
import { BrutalLinearProgress } from "./LinearProgress";
import { BrutalCircularProgress } from "./CircularProgress";

export const BrutalProgressDemo = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        padding: "24px",
        border: "4px solid black",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        maxWidth: "400px",
      }}
    >
      <h2
        style={{
          fontFamily: "Courier, monospace",
          textDecoration: "underline",
          marginBottom: "8px",
        }}
      >
        BRUTALIST PROGRESS
      </h2>

      <BrutalLinearProgress
        value={progress}
        thickness={10}
        color="red"
        showLabel
      />

      <BrutalLinearProgress
        value={progress}
        thickness={6}
        color="blue"
        bgColor="#f0f0f0"
        showLabel
        labelPosition="left"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "24px",
        }}
      >
        <BrutalCircularProgress
          value={progress}
          size={80}
          thickness={8}
          color="black"
        />

        <BrutalCircularProgress
          value={progress}
          size={60}
          thickness={6}
          color="green"
          bgColor="yellow"
        />
      </div>
    </div>
  );
};
