import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Component/Router";


createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />,
);
