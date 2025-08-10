import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Styles
import "./style/general.scss";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
