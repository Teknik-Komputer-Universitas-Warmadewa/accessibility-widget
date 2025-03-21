import { useEffect, useState } from "react";
import { RiTextSpacing } from "react-icons/ri";

const TextSpacer = () => {
  const [spacingStep, setSpacingStep] = useState(0); // 0 = normal, 1-4 = spacing levels

  const getSpacingStyles = (step: number) => {
    switch (step) {
      case 1:
        return { letterSpacing: "0.5px", lineHeight: "1.6" };
      case 2:
        return { letterSpacing: "1px", lineHeight: "1.8" };
      case 3:
        return { letterSpacing: "1.5px", lineHeight: "2.0" };
      case 4:
        return { letterSpacing: "2px", lineHeight: "2.2" };
      default:
        return { letterSpacing: "", lineHeight: "" };
    }
  };

  const spacingStyles = getSpacingStyles(spacingStep);

  useEffect(() => {
    const body = document.body;
    body.style.letterSpacing = spacingStyles.letterSpacing;
    body.style.lineHeight = spacingStyles.lineHeight;

    return () => {
      body.style.letterSpacing = "";
      body.style.lineHeight = "";
    };
  }, [spacingStyles]);

  const toggleSpacingStep = () => {
    setSpacingStep((prev) => (prev + 1) % 5);
  };

  const spacingLabels = [
    "Spacing: Off",
    "Spacing: +0.5px / 1.6",
    "Spacing: +1px / 1.8",
    "Spacing: +1.5px / 2.0",
    "Spacing: +2px / 2.2",
  ];

  return (
    <button
      onClick={toggleSpacingStep}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        spacingStep > 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <RiTextSpacing size={32} />
      {spacingLabels[spacingStep]}
    </button>
  );
};

export default TextSpacer;
