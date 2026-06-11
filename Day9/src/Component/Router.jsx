import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact..jsx";
import Layout from "./Layout";
import Services from "./Services";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contact/:id", element: <Contact /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);
export default router;
