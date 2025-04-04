import React from "react";
import { useState, useEffect } from "react";
import wishlist from "../assets/icons/Wish list.png";
import card from "../assets/icons/Add to card.png";
import SignIn from "../assets/icons/Sign in.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <div className="py-10 px-10 sm:py-10 sm:px-10 md:py-10 md:px-20 lg:py-10 lg:px-20 xl:py-10 xl:px-32">
        <nav className="grid grid-cols-[auto_auto] gap-10 md:gap-10 md:grid-cols-[1fr_1fr_5fr] p-2 md:p-4 rounded bg-white shadow-md">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300">
              DS
            </span>
            <span className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
              DigiSell
            </span>
          </div>

          {/* Categories Dropdown */}
          <div className="hidden md:flex w-[70%] md:w-30 lg:w-[80%] justify-center sm:justify-self-start relative">
            <button
              onClick={toggleDropdown}
              className="w-auto md:w-auto sm:w-30 flex items-center px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <span className="mr-2 sm:mr-5">☰</span> Categories
              <span className="">
                <svg
                  className="w-4 h-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Category 1
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Category 2
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Category 3
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Wishlist and Sign-In (Hidden on small screens) */}
          <div className="hidden sm:flex sm:col-span-1 justify-center sm:justify-end items-center space-x-4">
            <button className="text-gray-600 hover:scale-110 transition-transform duration-300">
              <img
                src={wishlist}
                alt="Wishlist"
                className="w-8 h-8 sm:w-9 sm:h-9"
              />
            </button>
            <button className="text-gray-600 hover:scale-110 transition-transform duration-300">
              <img src={card} alt="Card" className="w-8 h-8 sm:w-9 sm:h-9" />
            </button>
            <button className="text-gray-600 rounded-md hover:scale-110 transition-transform duration-300">
              <img
                src={SignIn}
                alt="Sign In"
                className="w-20 h-8 sm:w-25 sm:h-9 inline-block mr-2"
              />
            </button>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="flex sm:hidden justify-end items-center">
            <button
              onClick={toggleHamburger}
              className="text-gray-600 hover:scale-110 transition-transform duration-300"
            >
              <svg
                className="w-8 h-8"
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
            {isHamburgerOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Category
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Wishlist
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
                    Sign In
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
