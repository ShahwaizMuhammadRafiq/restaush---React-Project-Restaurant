import React from "react";
import Profile from "../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = (props) => {
  return (
    <div
      className="py-4"
      style={{ backgroundColor: props.mode === "light" ? "white" : "black" }}
    >
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo section */}
        <p
          className="text-3xl font-bold cursor-pointer"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          Res <span className="text-red-500 font-bold">taush</span>
        </p>

        {/* Menu Section */}
        <div className="hidden sm:block">
          <ul className="flex gap-8 font-semibold">
            <li
              className="hover:border-b-2 hover:border-red-500 uppercase cursor-pointer"
              style={{ color: props.mode === "light" ? "black" : "white" }}
            >
              Home
            </li>
            <li
              className="hover:border-b-2 hover:border-red-500 uppercase cursor-pointer"
              style={{ color: props.mode === "light" ? "black" : "white" }}
            >
              Menu
            </li>
            <li
              className="hover:border-b-2 hover:border-red-500 uppercase cursor-pointer"
              style={{ color: props.mode === "light" ? "black" : "white" }}
            >
              About
            </li>
          </ul>
        </div>

        {/* Login Section */}
        <div className="flex gap-4 items-center">
          <img src={Profile} alt="" className="w-10 rounded-full" />
          <IoIosArrowDown
            className="cursor-pointer"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          />
          {/* Toggle Mode Button */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              onChange={props.toggleMode} // Only attach onChange here
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
