import { useEffect, useState } from "react";
import { FaAlignLeft } from "react-icons/fa";

const TextAlignToggle = () => {
  const [alignStep, setAlignStep] = useState(0); // 0 = left, 1 = center, 2 = right

  const getAlignValue = (step: number) => {
    switch (step) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  };

  const alignment = getAlignValue(alignStep);

  useEffect(() => {
    // Apply alignment to body using !important
    document.body.style.setProperty("text-align", alignment, "important");

    // Force other block elements to match using !important
    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div").forEach((el) => {
      (el as HTMLElement).style.setProperty("text-align", alignment, "important");
    });

    return () => {
      document.body.style.removeProperty("text-align");
      document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div").forEach((el) => {
        (el as HTMLElement).style.removeProperty("text-align");
      });
    };
  }, [alignment]);

  const toggleAlignment = () => {
    setAlignStep((prev) => (prev + 1) % 3);
  };

  const alignLabels = ["Align: Left", "Align: Center", "Align: Right"];

  return (
    <button
      onClick={toggleAlignment}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        alignStep === 0 ? "bg-gray-100 text-gray-800 hover:bg-gray-200" : "bg-indigo-600 text-white"
      }`}
    >
      <FaAlignLeft size={32} />
      {alignLabels[alignStep]}
    </button>
  );
};

export default TextAlignToggle;
