import { useEffect, useState } from "react";
import { ImTextHeight } from "react-icons/im";

const LineHeightAdjuster = () => {
  const [lineHeightStep, setLineHeightStep] = useState(0); // 0 = default, 1-4 = more spacing

  const getLineHeightValue = (step: number) => {
    switch (step) {
      case 1:
        return "1.6";
      case 2:
        return "1.8";
      case 3:
        return "2.0";
      case 4:
        return "2.4";
      default:
        return "normal";
    }
  };

  const lineHeight = getLineHeightValue(lineHeightStep);

  useEffect(() => {
    const body = document.body;
    body.style.lineHeight = lineHeight;

    return () => {
      body.style.lineHeight = "";
    };
  }, [lineHeight]);

  const toggleLineHeight = () => {
    setLineHeightStep((prev) => (prev + 1) % 5);
  };

  const lineHeightLabels = [
    "Line Height: Normal",
    "Line Height: 1.6",
    "Line Height: 1.8",
    "Line Height: 2.0",
    "Line Height: 2.4",
  ];

  return (
    <button
      onClick={toggleLineHeight}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        lineHeightStep > 0
          ? "bg-purple-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <ImTextHeight size={25} />
      {lineHeightLabels[lineHeightStep]}
    </button>
  );
};

export default LineHeightAdjuster;
