import { useEffect, useState } from "react";
import { MdOutlineDocumentScanner } from "react-icons/md";

const ImageDescriberWithSpeech = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const tooltip = document.createElement("div");
    tooltip.id = "image-description-tooltip";
    tooltip.style.position = "fixed";
    tooltip.style.background = "rgba(0,0,0,0.75)";
    tooltip.style.color = "white";
    tooltip.style.padding = "6px 10px";
    tooltip.style.borderRadius = "8px";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.zIndex = "9999";
    tooltip.style.transition = "opacity 0.2s";
    tooltip.style.opacity = "0";
    document.body.appendChild(tooltip);

    const speak = (text: string) => {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID";
      window.speechSynthesis.speak(utterance);
    };

    const showTooltip = (e: MouseEvent) => {
      const target = e.target as HTMLImageElement;
      if (target.tagName === "IMG") {
        const altText = target.alt || "No description available";
        tooltip.innerText = altText;
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.opacity = "1";
        speak(altText);
      }
    };

    const moveTooltip = (e: MouseEvent) => {
      tooltip.style.top = `${e.clientY + 10}px`;
      tooltip.style.left = `${e.clientX + 10}px`;
    };

    const hideTooltip = () => {
      tooltip.style.opacity = "0";
      window.speechSynthesis.cancel();
    };

    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("mouseenter", showTooltip);
      img.addEventListener("mousemove", moveTooltip);
      img.addEventListener("mouseleave", hideTooltip);
    });

    return () => {
      tooltip.remove();
      document.querySelectorAll("img").forEach((img) => {
        img.removeEventListener("mouseenter", showTooltip);
        img.removeEventListener("mousemove", moveTooltip);
        img.removeEventListener("mouseleave", hideTooltip);
      });
      window.speechSynthesis.cancel();
    };
  }, [enabled]);

  const toggleFeature = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <button
      onClick={toggleFeature}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        enabled ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <MdOutlineDocumentScanner size={32} />
      {enabled ? "Image Description: On" : "Image Description: Off"}
    </button>
  );
};

export default ImageDescriberWithSpeech;
