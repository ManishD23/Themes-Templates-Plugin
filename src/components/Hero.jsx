import React from "react";
import { useState, useEffect } from "react";
import Wired from "../assets/icons/image 8.png";
import Angular from "../assets/icons/image 2.png";
import Js from "../assets/icons/image 3.png";
import Vue from "../assets/icons/image 7.png";
import DotNet from "../assets/icons/image 6.png";

const Hero = () => {
  return (
    <section className=" px-10  sm:py-10 sm:px-10 md:py-10 md:px-20 lg:py-10 lg:px-20 xl:py-10 xl:px-32 ">
      <div className=" container mx-auto flex flex-col md:flex-col md:gap-5 lg:flex-row lg:gap-5 items-center md:content-evenly justify-between">
        {/* Left Side: Text and Search */}
         <div className="md:w-full lg:max-w-md"> {/*max-w-md */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold leading-relaxed">
              <span>World Top </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Themes,
              </span>
              <br />
              <span className="md:ml-5 whitespace-nowrap bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Plugins & Templates
              </span>
            </h1>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            ultricies habitant eget volutpat ut aenean dolor. Praesent mi velit
            id hac platea leo vulputate.
          </p>
          <div className="bg-white shadow-md mt-6 flex items-center p-2 rounded space-x-2">
            <input
              type="text"
              placeholder="e.g. 'wordpress'"
              className="w-full md:px-4 md:py-2 text-gray-800 rounded-md focus:outline-none"
            />
            <button className="text-sm flex items-center px-2.5 py-1  md:px-5 md:py-2 bg-purple-500 text-white rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="md:w-5 md:h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
                />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Right Side: Tech Logos */}
        <div className=" md:mt-15 mt-8  grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center">
          <img
            src={Wired}
            alt="WordPress"
            className="w-24 h-24 md:w-30  md:h-30 rounded bg-white p-2 object-contain hover:shadow-lg hover:bg-purple-100 transition-all duration-300"
          />
          <img
            src={Vue}
            alt="Angular"
            className="w-5 h-5 md:w-30 md:h-30 bg-white p-2 rounded-md object-contain hover:shadow-lg hover:bg-green-100 transition-all duration-300"
          />
          <img
            src={Angular}
            alt="Gatsby"
            className="w-36 h-36 bg-white p-2 rounded-md object-contain hover:shadow-lg hover:bg-red-100 transition-all duration-300"
          />
          <img
            src={Js}
            alt="Vue"
            className="w-24 h-24 bg-white p-2 rounded-md object-contain hover:shadow-lg hover:bg-yellow-100 transition-all duration-300"
          />
          <img
            src={DotNet}
            alt=".NET"
            className="w-30 h-30 bg-white p-2 rounded-md object-contain hover:shadow-lg hover:bg-blue-100 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
