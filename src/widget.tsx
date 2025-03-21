import ReactDOM from "react-dom/client";
import Menu from "./Menu"; // Ensure this component exists

// Ensure widget runs automatically
(function () {
  console.log("Accessibility Widget Loading...");

  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = ReactDOM.createRoot(container);
  root.render(<Menu />);
})();
