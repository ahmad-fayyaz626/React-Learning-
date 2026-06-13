import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from 'Store_App.jsx';
import Home from "./Home";
import Product from "./Product";
import DetailedProduct from "./DetailedProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Product",
        element: <Product />,
      },
      {
        path: "Product/:id",
        element: <DetailedProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
