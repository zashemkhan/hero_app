import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import gitLogo from "../../assets/git.logo.png";

const NavBar = () => {
  return (
    <div className="  bg-base-100 shadow-sm ">
      <div className="navbar w-full lg:max-w-11/12 mx-auto  relative flex items-center justify-between">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" mr-3 lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className="text-[#000000e6] font-semibold" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[#000000e6] font-semibold"
                  to="/apps"
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-[#000000e6] font-semibold"
                  to="/installation"
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <Link to="/" className="text-xl">
          Hero.IO
        </Link> */}
          <Link to="/">
            <div className="flex items-center h-8 lg:h-10 overflow-hidden gap-1">
              <img className="w-8 lg:w-10 object-cover" src={logo} alt="" />
              <h1 className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] bg-clip-text text-transparent font-bold text-base lg:text-xl">
                Hero.IO
              </h1>
            </div>
          </Link>
        </div>

        <div className=" absolute left-1/2 transform -translate-x-1/2 hidden lg:flex ">
          <ul className="menu menu-horizontal   px-1">
            <li>
              <NavLink className="text-[#000000e6] font-semibold" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#000000e6] font-semibold"
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#000000e6] font-semibold"
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/zashemkhan"
            className="btn  flex items-center gap-2.5 bg-gradient-to-l from-[#9f62f2] to-[#632ee3] lg:py-5"
          >
            <img src={gitLogo} alt="" />
            <h2 className="text-white lg:text-base font-semibold">
              {" "}
              Contribute
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
