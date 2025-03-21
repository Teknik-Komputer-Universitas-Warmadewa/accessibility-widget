import { useState } from "react";
import { IoInvertMode } from "react-icons/io5";

const InvertColorsButton = () => {
  const [isInverted, setIsInverted] = useState(false);

  const toggleInvert = () => {
    const body = document.body;

    // Toggle the .invert class on the body
    body.classList.toggle("invert");
    setIsInverted(!isInverted);

    // Apply custom styles when the .invert class is toggled
    if (isInverted) {
      // Revert back the styles when "invert" is disabled
      body.style.backgroundColor = "";
      body.style.filter = "";

      // Revert all images, videos, etc.
      document.querySelectorAll("img, video, iframe, svg").forEach((el) => {
        (el as HTMLElement).style.filter = "";
      });

      // Revert link color
      document.querySelectorAll("a").forEach((el) => {
        (el as HTMLElement).style.color = "";
      });
    } else {
      // Apply the inverted styles when "invert" is enabled
      body.style.backgroundColor = "#121212";
      body.style.filter = "invert(1) hue-rotate(180deg)";

      // Invert images, videos, iframes, etc.
      document.querySelectorAll("img, video, iframe, svg").forEach((el) => {
        (el as HTMLElement).style.filter = "invert(1) hue-rotate(180deg)";
      });

      // Change the color of links
      document.querySelectorAll("a").forEach((el) => {
        (el as HTMLElement).style.color = "#ffcc00"; // Yellow links
      });
    }
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
