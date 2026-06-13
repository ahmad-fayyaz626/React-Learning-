import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsProvider } from "./Context/context";

createRoot(document.getElementById("root")).render(
  <NewsProvider>
    <App />
  </NewsProvider>,
);
