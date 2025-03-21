import { useEffect, useState } from "react";
import { IoColorFilterSharp } from "react-icons/io5";

const SaturationAdjuster = () => {
  const [saturationStep, setSaturationStep] = useState(0); // 0 = normal, 1 = low, 2 = high, 3 = grayscale

  const getSaturationFilter = (step: number) => {
    switch (step) {
      case 1:
        return "saturate(0.5)";
      case 2:
        return "saturate(1.5)";
      case 3:
        return "grayscale(1)";
      default:
        return "none";
    }
  };

  const filter = getSaturationFilter(saturationStep);

  useEffect(() => {
    const body = document.body;
    body.style.filter = filter;

    return () => {
      body.style.filter = "";
    };
  }, [filter]);

  const toggleSaturation = () => {
    setSaturationStep((prev) => (prev + 1) % 4);
  };

  const saturationLabels = [
    "Saturation: Normal",
    "Saturation: Low",
    "Saturation: High",
    "Saturation: Grayscale",
  ];

  return (
    <button
      onClick={toggleSaturation}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        saturationStep > 0
          ? "bg-indigo-600 text-white"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <IoColorFilterSharp size={32} />
      {saturationLabels[saturationStep]}
    </button>
  );
};

export default SaturationAdjuster;
