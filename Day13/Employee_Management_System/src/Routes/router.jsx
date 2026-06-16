import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";

import List from "../Components/List";
import Highlighted from "../Components/Highlighted";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "employees",
        element: <List />
      },
      {
        path: "highlighted",
        element: <Highlighted />,
      },
    ],
  },
]);

export default router;
