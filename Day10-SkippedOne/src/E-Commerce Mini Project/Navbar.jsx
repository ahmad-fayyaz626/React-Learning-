import { IoStatsChart } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-gray-800 text-white px-1">
      <img
        className="w-12 h-12 rounded-full border-2 border-white object-cover mr-4 hover:scale-110 transition-transform duration-300"
        src="https://i.pinimg.com/originals/bf/08/e3/bf08e3b80f893f99d423b7546ba6c24a.jpg?nii=t"
        alt="Logo"
      ></img>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
        to="/Home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white"
        }
        to="/Product"
      >
        Products
      </NavLink>
    </div>
  );
};

export default Navbar;
