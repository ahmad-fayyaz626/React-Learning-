import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EmployeePopUp from "../Components/EmployeePopUp";
import DeletePopUp from "../Components/DeletePopUp";

const Layout = () => {
  return (
    <>
      <DeletePopUp />
      <EmployeePopUp />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;