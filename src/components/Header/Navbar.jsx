import React from "react";
import logo from "../../assets/logo.png";
import gitLogo from "../../assets/gitLogo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm">
        <div className="navbar bg-base-100 max-w-[1600px] mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Home</NavLink>
          </li>
          <li>
              <NavLink to="/Apps" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Apps</NavLink>
          </li>
          <li>
            <NavLink to="/Installed" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Installed</NavLink>
          </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost flex item-c">
            <img src={logo} alt="" className="w-[40px]"/>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold">HERO.IO</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Home</NavLink>
          </li>
          <li>
              <NavLink to="/Apps" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Apps</NavLink>
          </li>
          <li>
            <NavLink to="/Installed" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : ""}>Installed</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"https://github.com/a2adib"}
        target="_blank"
        className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-semibold">
            <img src={gitLogo} alt="" />
            Contribute</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
