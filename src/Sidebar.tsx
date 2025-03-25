import InvertColorsButton from "./features/InverColorButton";
import ScreenReader from "./features/ScreenReader";
import PageZoomer from "./features/PageZoomer";
import SidebarHeader from "./SidebarHeader";
import TextSpacer from "./features/TextSpacer";
import HideImages from "./features/HideImages";
import LineHeightAdjuster from "./features/LineHeightAdjuster";
import SaturationAdjuster from "./features/SaturationAdjuster";
import ImageDescriberWithSpeech from "./features/ImageDescriberWithSpeech";
import DyslexiaFontToggle from "./features/DyslexiaFontToggle";
import TextAlignToggle from "./features/TextAlignToggle";
import Footer from "./Footer";

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      style={{ zIndex: 2000 }}
      className="fixed top-0 right-0 w-80 h-screen bg-white shadow-lg border-l  flex flex-col overflow-auto"
    >
      {/* Header */}
      <SidebarHeader onClose={onClose} />
      <div className=" p-4 grid grid-cols-2 grid-rows-2 gap-2">
        <InvertColorsButton />
        <ScreenReader />
        <SaturationAdjuster />
        <DyslexiaFontToggle />
        <ImageDescriberWithSpeech />
        <PageZoomer />
        <TextAlignToggle />
        <TextSpacer />
        <HideImages />
        <LineHeightAdjuster />
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
