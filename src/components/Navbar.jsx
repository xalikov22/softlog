import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-5">
            <div className="flex space-x-4 items-center">
              <NavLink
                to="/"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <img className="pl-6" src="/Logo.svg" alt="Logo" />
              </NavLink>

              <div className="hidden md:flex items-center space-x-1">
                <NavLink
                  to="/"
                  className="py-5 px-3 text-gray-900 hover:text-gray-500"
                >
                  Categories
                </NavLink>
                <NavLink
                  to="/blog"
                  className="py-5 px-3 text-gray-900 hover:text-gray-500"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/blog"
                  className="py-5 px-3 text-gray-900 hover:text-gray-500"
                >
                  Blog
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-5 space-x-1">
              <NavLink
                to="/claim-profile"
                className="py-2 px-3 border border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl transition duration-300"
              >
                Claim profile
              </NavLink>
              <NavLink
                to="/write-review"
                className="py-2 px-3 border border-sky-500 bg-blue-600 hover:bg-white text-white hover:text-blue-600 rounded-3xl transition duration-300"
              >
                Write a review
              </NavLink>
            </div>

            <div className="md:hidden flex pr-6 items-center">
              <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden">
            <NavLink
              to="/"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={toggleMobileMenu}
            >
              Categories
            </NavLink>
            <NavLink
              to="/blog"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={toggleMobileMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className="block py-2 px-4 text-sm hover:bg-gray-200"
              onClick={toggleMobileMenu}
            >
              Blog
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
