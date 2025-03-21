import { useEffect, useState } from "react";
import { RiBookReadLine } from "react-icons/ri";

const DyslexiaFontToggle = () => {
  const [enabled, setEnabled] = useState(false);

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
    setEnabled((prev) => !prev);
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
