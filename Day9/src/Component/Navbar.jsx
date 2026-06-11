import { Link, NavLink, useNavigate } from "react-router-dom";

// useNavigate is a hook provided by react-dom which loves

const Navbar = () => {
  const isLogin = true;
  const navigate = useNavigate();
  const handleNavigate = () => {
    isLogin && navigate("/About");
  };

  const arr = ["a", "b", "c", "d", "e"];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex space-x-4 justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Services
        </NavLink>
        {arr.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={`/about/${item}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-800 hover:text-blue-500"
              }
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
      <button
        onClick={handleNavigate}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      >
        Navigate to About Page
      </button>
    </div>
  );
};

export default Navbar;
