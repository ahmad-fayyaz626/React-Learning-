import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import List from "./Components/List";
import EmployeePopUp from "./Components/EmployeePopUp";
import { useSelector } from "react-redux";
import DeletePopUp from "./Components/DeletePopUp";
import { fetchEmployees } from "./Features/EmployeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const App = () => {
  const employees = useSelector((state) => state.employee.employees);
  console.log("Employees in App.jsx:", employees);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <DeletePopUp />
      <EmployeePopUp />
      <Navbar />
      <div className="flex-1 p-10">
        
        <List />
      </div>

      <Footer />
    </div>
  );
};

export default App;
