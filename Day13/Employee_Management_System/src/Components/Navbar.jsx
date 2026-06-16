import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa6";
import { showPopUp } from "../Features/PopUpSlice";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 z-10 px-10 bg-base-100">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            EMS
          </Link>
        </div>
        <div className="navbar-center">
          <Link to="/employees" className="btn btn-ghost">
            <span className="text-lg font-bold">Employees</span>
          </Link>

          <Link to="/highlighted" className="btn btn-ghost">
            <span className="text-lg font-bold">Highlighted</span>
          </Link>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => {
              dispatch(showPopUp());
            }}
            className="btn btn-ghost btn-circle"
          >
            <FaPlus className="size-[1.2em] font-bold" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
