import ReactDOM from "react-dom/client";
import Menu from "./Menu";
import "./index.css";

// Function to inject CSS dynamically
function injectCSS() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/dist/accessibility-widget.css"; // Adjust path based on your setup
  document.head.appendChild(link);
}

// Initialize widget after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Accessibility Widget Loaded");

  // Inject CSS
  injectCSS();

  // Render the widget
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = ReactDOM.createRoot(container);
  root.render(<Menu />);
});
