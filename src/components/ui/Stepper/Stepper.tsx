import React, { useState } from "react";

const BrutalStepper = ({
  steps = [],
  currentStep = 0,
  borderWidth = "3px",
  bgColor = "#f0f0f0",
  textColor = "black",
  activeColor = "black",
  completedColor = "black",
  shadow = true,
  fontSize = "16px",
  onStepClick,
}) => {
  const [activeStep, setActiveStep] = useState(currentStep);

  const handleStepClick = (index) => {
    if (onStepClick) {
      onStepClick(index);
    } else {
      setActiveStep(index);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Courier, monospace",
        fontWeight: "900",
        textTransform: "uppercase",
      }}
    >
      {/* Stepper line */}
      <div
        style={{
          position: "relative",
          height: borderWidth,
          backgroundColor: "black",
          margin: `0 calc(40px / 2)`,
          top: "40px",
          zIndex: 1,
        }}
      />

      {/* Steps */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: step.clickable ? "pointer" : "default",
              }}
              onClick={() => step.clickable && handleStepClick(index)}
            >
              {/* Step circle */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "0%", // Square for brutalist look
                  border: `${borderWidth} solid black`,
                  backgroundColor: isActive
                    ? activeColor
                    : isCompleted
                      ? completedColor
                      : bgColor,
                  color: isActive || isCompleted ? "white" : textColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: shadow ? "3px 3px 0px black" : "none",
                  fontSize: fontSize,
                }}
              >
                {isCompleted ? "✓" : index + 1}
              </div>

              {/* Step label */}
              <div
                style={{
                  marginTop: "8px",
                  padding: "4px 8px",
                  border: `${borderWidth} solid black`,
                  backgroundColor: isActive ? activeColor : bgColor,
                  color: isActive ? "white" : textColor,
                  boxShadow: shadow ? "2px 2px 0px black" : "none",
                  fontSize: `calc(${fontSize} * 0.8)`,
                  textAlign: "center",
                }}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div
        style={{
          marginTop: "48px",
          padding: "24px",
          border: `${borderWidth} solid black`,
          backgroundColor: bgColor,
          boxShadow: shadow ? "4px 4px 0px black" : "none",
        }}
      >
        {steps[activeStep]?.content || (
          <p style={{ fontWeight: "900" }}>NO CONTENT AVAILABLE</p>
        )}
      </div>
    </div>
  );
};

// Example usage
const BrutalStepperExample = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      label: "START",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            BEGIN PROCESS
          </h3>
          <p style={{ fontWeight: "900" }}>RAW BRUTALIST DESIGN SYSTEM</p>
        </div>
      ),
      clickable: true,
    },
    {
      label: "UPLOAD",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            UPLOAD FILES
          </h3>
          <div
            style={{
              border: "3px solid black",
              padding: "16px",
              fontWeight: "900",
            }}
          >
            <p>DRAG AND DROP YOUR FILES HERE</p>
          </div>
        </div>
      ),
      clickable: true,
    },
    {
      label: "CONFIRM",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            CONFIRM DETAILS
          </h3>
          <ul style={{ listStyleType: "none", padding: 0, fontWeight: "900" }}>
            <li>✓ ALL FILES UPLOADED</li>
            <li>✓ METADATA VERIFIED</li>
            <li>✓ READY FOR PROCESSING</li>
          </ul>
        </div>
      ),
      clickable: true,
    },
    {
      label: "COMPLETE",
      content: (
        <div>
          <h3
            style={{
              textDecoration: "underline",
              fontFamily: "Courier, monospace",
            }}
          >
            PROCESS COMPLETE
          </h3>
          <p style={{ fontWeight: "900", fontSize: "24px" }}>SUCCESS!</p>
        </div>
      ),
      clickable: false,
    },
  ];

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
        BRUTALIST STEPPER
      </h2>

      <BrutalStepper
        steps={steps}
        currentStep={currentStep}
        bgColor="yellow"
        activeColor="red"
        completedColor="black"
        borderWidth="4px"
        onStepClick={setCurrentStep}
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
          <li>✓ SQUARE STEP INDICATORS</li>
          <li>✓ THICK BORDERS</li>
          <li>✓ INSTANT STEP CHANGES</li>
          <li>✓ HIGH-CONTRAST STATES</li>
        </ul>
      </div>
    </div>
  );
};

export default BrutalStepperExample;
