import { useState, useEffect } from "react";
import { RiBookReadLine } from "react-icons/ri";

const DyslexiaFontToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Dynamically create a <style> tag to inject font styles
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: "OpenDyslexic";
        src: url("https://cdn.jsdelivr.net/gh/Teknik-Komputer-Universitas-Warmadewa/accessibility-widget@v1.0.5/dist/accessibility-widget.js") format("opentype");
        font-weight: normal;
        font-style: normal;
      }

      .dyslexia-font {
        font-family: "OpenDyslexic", Arial, sans-serif !important;
      }
    `;

    // Append the style to the head of the document
    document.head.appendChild(style);

    // Clean up by removing the style tag when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Toggle the dyslexia font on and off
  useEffect(() => {
    const body = document.body;

    if (enabled) {
      body.classList.add("dyslexia-font");
    } else {
      body.classList.remove("dyslexia-font");
    }

    return () => {
      body.classList.remove("dyslexia-font");
    };
  }, [enabled]);

  const toggleFont = () => {
    setEnabled((prev) => !prev); // Toggle dyslexia font
  };

  return (
    <button
      onClick={toggleFont}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        enabled ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <RiBookReadLine size={32} />
      {enabled ? "Dyslexia Font: On" : "Dyslexia Font: Off"}
    </button>
  );
};

export default DyslexiaFontToggle;
