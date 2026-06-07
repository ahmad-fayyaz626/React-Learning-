import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="flex w-full h-full justify-between items-center p-4 bg-black text-white">
      <h1 className="text-2xl font-bold">Logo</h1>
      <div className="flex gap-4 max-[520px]:hidden">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
      {/*Mobile View */}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black text-white flex flex-col gap-4 p-4 transition-all duration-300 ease-in-out
    ${mobileView ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/*Remove Button*/}
        <button
          onClick={() => {
            setMobileView(false);
          }}
          className="self-end text-2xl"
        >
          &times;
        </button>
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Services
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
        <a href="#" className="hover:underline">
          Cart
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
        <a href="#" className="hover:underline">
          Settings
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <span>🛒</span>
        <span>🛒</span>
        <CiMenuBurger
          onClick={() => setMobileView(true)}
          className="text-2xl min-[520px]:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
