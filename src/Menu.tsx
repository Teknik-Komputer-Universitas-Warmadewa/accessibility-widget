import { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";
import Sidebar from "./Sidebar";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed z-10 top-36 right-5 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
      >
        <FaUniversalAccess size={32} />
      </button>

      {/* Sidebar */}
      {isOpen && <Sidebar onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default FloatingMenu;
