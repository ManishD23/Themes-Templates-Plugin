import React from "react";
import { useState, useEffect } from "react";
import image2 from "../assets/icons/All-products-img/image (2).png";
import image3 from "../assets/icons/All-products-img/image (3).png";
import image4 from "../assets/icons/All-products-img/image (4).png";
import image5 from "../assets/icons/All-products-img/image (5).png";
import image6 from "../assets/icons/All-products-img/image (6).png";
import image7 from "../assets/icons/All-products-img/image (7).png";
import image8 from "../assets/icons/All-products-img/image (8).png";
import image9 from "../assets/icons/All-products-img/image (9).png";
import preview from "../assets/icons/All-products-img/Preview.png";
import shopping from "../assets/icons/All-products-img/shopping-cart-fill.png";
import AllProducts from "../assets/icons/All-products-img/View All Product.png";
import Categories from "../assets/icons/All-products-img/All Categories.png";

const Allprdoduct = () => {
  return (
    <>
      <section className="py-10 px-10  sm:py- sm:px-10 md:py- md:px-20 lg:py- lg:px-20 xl:py- xl:px-32">
        <h1 className="py-15 text-center font-josefin font-bold text-2xl sm:text-[2rem] md:text-[2rem] leading-[1.5] tracking-[0%]">
          Let’s Check Out News Product Theme Templates & Plugin
        </h1>
        <div className="justify-self-center flex md:w-[35%] lg:w-auto w-auto gap-10 items-center md:justify-self-center xl:bg-white xl:shadow-md p-2 rounded-lg">
          <div className=" p-2 w-auto h-auto flex justify-center">
            <button className="p-2 flex items-center w-42 h-11 bg-gradient-to-r from-purple-500 to-blue-500 text-white  hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-md hover:cursor-pointer">
              All Categories
              <svg
                className="w-4 h-4 ml-2 sm:ml-5"
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
            </button>
          </div>
          <div className="hidden  lg:flex p-2  justify-center">
            <ul className="hidden sm:flex sm:flex-col md:flex-row gap-15 text-center">
              <li>HTML Design</li>
              <li>WP Themes</li>
              <li>CMS Themes</li>
              <li>eCommerce</li>
              <li>Blogging</li>
              <li>UI Templates</li>
            </ul>
          </div>
        </div>
      </section>
      {/* images section starts */}
      <div className="flex flex-wrap gap-6 justify-center pt-10 pb-10 ">
        <div className="w-67 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image2}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image3}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image4}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image5}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image6}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image7}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image8}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-70 h-76 shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image9}
              alt="Image 4"
              className="w-auto h-auto  object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-base sm:text-sm md:text-sm">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="pt-7 flex justify-between text-xl sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3 className=" mt-2">258 sales</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-30 ">
        <button className="w-40 h-11 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-md hover:cursor-pointer">
          View All Products
        </button>
      </div>
    </>
  );
};

export default Allprdoduct;
