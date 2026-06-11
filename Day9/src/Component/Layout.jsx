import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="bg-gray-800 text-white text-center p-4 mt-4">
        Designed and Developed by React Learning Team
      </div>
    </>
  );
};

export default Layout;
