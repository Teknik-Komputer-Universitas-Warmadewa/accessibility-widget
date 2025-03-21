import { useEffect, useState } from "react";
import { TbZoomScan } from "react-icons/tb";

const PageZoomer = () => {
  const [zoomStep, setZoomStep] = useState(0); // 0 = normal, 1-4 = zoom levels

  const getZoomScale = (step: number) => {
    switch (step) {
      case 1:
        return 1.2;
      case 2:
        return 1.5;
      case 3:
        return 1.8;
      case 4:
        return 2.2;
      default:
        return 1.0;
    }
  };

  const scale = getZoomScale(zoomStep);

  useEffect(() => {
    const body = document.body;
    body.style.transform = `scale(${scale})`;
    body.style.transformOrigin = "top left";
    body.style.width = `${100 / scale}%`;

    return () => {
      body.style.transform = "";
      body.style.transformOrigin = "";
      body.style.width = "";
    };
  }, [scale]);

  const toggleZoomStep = () => {
    setZoomStep((prev) => (prev + 1) % 5);
  };

  const zoomLabels = ["Zoom: Off", "Zoom: 120%", "Zoom: 150%", "Zoom: 180%", "Zoom: 220%"];

  return (
    <button
      onClick={toggleZoomStep}
      className={`w-full p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        zoomStep > 0 ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <TbZoomScan size={32} />
      {zoomLabels[zoomStep]}
    </button>
  );
};

export default PageZoomer;
