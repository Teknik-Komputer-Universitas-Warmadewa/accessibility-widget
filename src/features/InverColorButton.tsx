import { useState } from "react";
import { IoInvertMode } from "react-icons/io5";

const InvertColorsButton = () => {
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => {
    document.body.classList.toggle("invert");
    setIsInverted(!isInverted);
  };

  return (
    <button
      onClick={toggleInvert}
      className="w-full h-32 p-3 bg-gray-100 rounded-lg text-center text-gray-800 font-medium hover:bg-gray-200 transition flex flex-col items-center justify-center space-y-2"
    >
      <IoInvertMode size={32} />
      {isInverted ? "Disable Invert Colors" : "Invert Colors"}
    </button>
  );
};

export default InvertColorsButton;
