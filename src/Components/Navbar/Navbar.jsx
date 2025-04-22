import React from "react";
import logo from "../../assets/logo.png";
import coin from "../../assets/coins.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="text-base font-regular">
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <img className="w-14 h-14" src={logo} alt="" srcset="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-base font-regular">
            <a>Home</a>
          </li>
          <li>
            <a>Fixtures</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <p className="text-base font-semibold">0 Coin</p>
        <img className="w-6 h-6 ml-2" src={coin} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
