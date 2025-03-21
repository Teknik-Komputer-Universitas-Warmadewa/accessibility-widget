import { FaTimes } from "react-icons/fa";

const SidebarHeader = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="font-semibold">Warmadewa Accessibility Menu</span>
      <button onClick={onClose} className="hover:text-gray-300">
        <FaTimes size={20} />
      </button>
    </div>
  );
};

export default SidebarHeader;
