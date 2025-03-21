import { useEffect, useState } from "react";
import { RiSpeakLine } from "react-icons/ri";

const ScreenReader = () => {
  const [step, setStep] = useState(0); // 0 = Off, 1 = Normal, 2 = Fast, 3 = Slow
  const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);
  const synth = window.speechSynthesis;

  // Define speed based on step
  const getSpeed = (step: number) => {
    switch (step) {
      case 1:
        return 1.0; // Normal
      case 2:
        return 1.5; // Fast
      case 3:
        return 0.7; // Slow
      default:
        return 1.0; // Default Normal
    }
  };

  const speed = getSpeed(step);

  useEffect(() => {
    const handleHover = (event: MouseEvent) => {
      if (step === 0) return; // Only work when activated

      const target = event.target as HTMLElement;

      // Exclude button from being highlighted
      if (target.tagName === "BUTTON") return;

      const text = target.innerText.trim();

      if (text && text.length > 2) {
        // Remove highlight from previous element
        if (activeElement) {
          activeElement.style.backgroundColor = "";
        }

        // Set new active element & highlight it
        setActiveElement(target);
        target.style.backgroundColor = "yellow";

        speak(text);
      }
    };

    const handleMouseLeave = () => {
      if (activeElement) {
        activeElement.style.backgroundColor = ""; // Remove highlight
        setActiveElement(null);
      }
    };

    const speak = (text: string) => {
      if (synth.speaking) {
        synth.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "id-ID"; // Change to "id-ID" for Indonesian
      utterance.rate = speed;
      utterance.pitch = 1;
      synth.speak(utterance);
    };

    if (step > 0) {
      document.addEventListener("mouseover", handleHover);
      document.addEventListener("mouseout", handleMouseLeave);
    } else {
      // Remove all highlights when disabled
      if (activeElement) {
        activeElement.style.backgroundColor = "";
        setActiveElement(null);
      }
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleMouseLeave);
      synth.cancel(); // Stop speech when disabled
    }

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [step, speed, activeElement, synth]);

  // Cycle through 4-step toggle
  const toggleStep = () => {
    setStep((prevStep) => {
      // When turning off, remove highlight
      if (prevStep === 3) {
        if (activeElement) {
          activeElement.style.backgroundColor = "";
          setActiveElement(null);
        }
      }
      return (prevStep + 1) % 4;
    });
  };

  // Button text based on step
  const buttonText = ["Enable Screen Reader", "Read Normal", "Read Fast", "Read Slow"][step];

  return (
    <button
      onClick={toggleStep}
      className={`w-full h-32 p-4 rounded-lg text-center font-medium transition flex flex-col items-center justify-center space-y-2 ${
        step > 0 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      <RiSpeakLine size={32} />
      {buttonText}
    </button>
  );
};

export default ScreenReader;
