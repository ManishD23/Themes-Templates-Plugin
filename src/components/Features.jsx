import React from "react";
import { useState, useEffect } from "react";
import image2 from "../assets/icons/features img/image (2).png";
import image3 from "../assets/icons/features img/image (3).png";
import image4 from "../assets/icons/features img/image (4).png";
import shopping from "../assets/icons/features img/shopping-cart-fill.png";
import AllProducts from "../assets/icons/features img/View All Product.png";

const Features = () => {
  return (
    <section className="py-10 px-10  sm:py-10 sm:px-10 md:py-10 md:px-20 lg:py-10 lg:px-20 xl:py-25 xl:px-32 bg-gray-100">
      <h1 className="text-center font-josefin font-bold text-2xl sm:text-[2.5rem] md:text-[3rem] leading-[1.5] tracking-[0%]">
        Featured Products
      </h1>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="w-full h-auto  shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-40 sm:h-48 md:h-60 object-fit rounded-lg shadow-md"
            />
            {/*preview button*/}
            <div
              className="py-10 absolute inset-0 flex items-center justify-center gap-4 
                     transition-all"
            >
              <button className="px-6 py-2 border-1 rounded-md  hover:bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-300 ">
                Preview
              </button>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 rounded ">
                <img
                  src={shopping}
                  alt="Preview"
                  className="p-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                />
              </span>
            </div>

           
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="flex justify-between mt-5 text-sm sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3>258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-full h-auto shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-40 sm:h-48 md:h-60 object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm sm:text-sm md:text-lg">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="flex justify-between mt-5 text-sm sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3>258 sales</h3>
            </div>
          </div>
        </div>
        <div className="w-full h-auto shadow-md rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-100">
          <div className="p-4 sm:p-6">
            <img
              src={image4}
              alt="Image 4"
              className="w-full h-40 sm:h-48 md:h-60 object-fit rounded-lg shadow-md"
            />
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Hazel - Clean Minimalist Multi-Pu...
            </p>
            <div className="flex justify-between mt-5 text-sm sm:text-base">
              <h1 className="text-2xl font-medium">$50</h1>
              <h3>258 sales</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button className="w-40 h-11 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-md hover:cursor-pointer">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Features;
