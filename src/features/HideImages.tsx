import { useEffect, useState } from "react";
import { MdHideImage } from "react-icons/md";

const HideImages = () => {
  const [hideImages, setHideImages] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (hideImages) {
        (img as HTMLElement).style.display = "none";
      } else {
        (img as HTMLElement).style.display = "";
      }
    });

    return () => {
      images.forEach((img) => {
        (img as HTMLElement).style.display = "";
      });
    };
  }, [hideImages]);

  const toggleImages = () => {
    setHideImages((prev) => !prev);
  };

  return (
    <button
      onClick={toggleImages}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        hideImages ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <MdHideImage size={32} />
      {hideImages ? "Show Images" : "Hide Images"}
    </button>
  );
};

export default HideImages;
