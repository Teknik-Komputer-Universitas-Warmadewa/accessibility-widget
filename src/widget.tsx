import ReactDOM from "react-dom/client";
import Menu from "./Menu"; // Your menu component
import "./index.css"; // Your Tailwind and custom styles (only in the Shadow DOM)

// Function to inject CSS dynamically into Shadow DOM
function injectCSS(shadowRoot: ShadowRoot) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/gh/Teknik-Komputer-Universitas-Warmadewa/accessibility-widget@v1.0.8/dist/accessibility-widget.css"; // Adjust path based on your setup
  shadowRoot.appendChild(link); // Append to Shadow DOM
}

// Initialize widget after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Accessibility Widget Loaded");

  // Create a container for the widget and attach a Shadow DOM to it
  const container = document.createElement("div");
  const shadowRoot = container.attachShadow({ mode: "open" }); // Open Shadow DOM
  document.body.appendChild(container);

  // Inject CSS into the Shadow DOM
  injectCSS(shadowRoot);

  // Render your widget inside the Shadow DOM
  const root = ReactDOM.createRoot(shadowRoot);
  root.render(<Menu />);
});
