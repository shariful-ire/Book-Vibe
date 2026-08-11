import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    `rounded-xl px-4 py-2 font-medium transition-all duration-200 ${
      isActive
        ? "bg-amber-400 text-gray-900"
        : "text-gray-700 hover:bg-amber-100 hover:text-gray-900"
    }`;

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar border-b border-gray-200 bg-white/95 px-4 shadow-sm backdrop-blur-md lg:px-8">

        {/* ================= Navbar Start ================= */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-2 lg:hidden"
            >
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

            {/* Mobile Navigation */}
            <ul
              tabIndex="-1"
              className="
                menu
                menu-sm
                dropdown-content
                z-[1]
                mt-3
                w-60
                gap-2
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-3
                shadow-xl
              "
            >
              <li>
                <NavLink to="/" className={navLinkClass}>
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink to="/books" className={navLinkClass}>
                  LISTED BOOKS
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pages-to-read"
                  className={navLinkClass}
                >
                  PAGES TO READ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn btn-ghost px-2 text-2xl font-bold normal-case"
          >
            <span className="text-gray-900">
              Book<span className="text-amber-500">Vibe</span>
            </span>
          </Link>
        </div>


        {/* ================= Desktop Navigation ================= */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal items-center gap-2 px-1">

            <li>
              <NavLink to="/" className={navLinkClass}>
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="/books" className={navLinkClass}>
                LISTED BOOKS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pages-to-read"
                className={navLinkClass}
              >
                PAGES TO READ
              </NavLink>
            </li>

          </ul>

        </div>


        {/* ================= Navbar End ================= */}
        <div className="navbar-end gap-2">

          <Link
            to="/signin"
            className="
              rounded-xl
              border
              border-gray-900
              px-4
              py-2
              text-sm
              font-semibold
              text-gray-900
              transition-all
              duration-200
              hover:bg-gray-900
              hover:text-white
            "
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="
              rounded-xl
              bg-amber-400
              px-4
              py-2
              text-sm
              font-semibold
              text-gray-900
              transition-all
              duration-200
              hover:bg-amber-300
              hover:shadow-md
            "
          >
            Sign Up
          </Link>

        </div>

      </div>
    </div>
  );
};

export default NavBar;