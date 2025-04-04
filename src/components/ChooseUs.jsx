import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/icons/icon.png";
import Icon1 from "../assets/icons/icon (1).png";
import Icon2 from "../assets/icons/icon (2).png";
import Icon3 from "../assets/icons/icon (3).png";
import Preview from "../assets/icons/All-products-img/Preview.png";
import Shopping from "../assets/icons/All-products-img/shopping-cart-fill.png";

const ChooseUs = () => {
  return (
    <>
      <section className="py-10 px-10  sm:py-10 sm:px-10 md:py-40 md:px-20 lg:py-10 lg:px-20 xl:py-25 xl:px-32">
        <h1 className="text-center font-josefin font-bold text-2xl md:text-[39.06px] md:leading-[58.59px] tracking-[0%]">
          Why Choose Us
        </h1>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 md:gap-7 xl:gap-15 ">
          <div className="  sm:w-68 sm:h-73 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 flex flex-col rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
            <img src={Icon} alt="Icon" className="w-20 h-20 mb-4" />
            <h1 className="text-xl font-semibold">Well Documentation</h1>
            <p className="text-sm mt-2 md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
              ornare in mattis.
            </p>
          </div>
          <div className="sm:w-68 sm:h-73 p-6 flex flex-col rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
            <img src={Icon1} alt="Icon" className="w-20 h-20 mb-4" />
            <h1 className="text-xl font-semibold">Live Support</h1>
            <p className="text-sm mt-2 md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
              ornare in mattis.
            </p>
          </div>
          <div className="sm:w-68 sm:h-73 p-6 flex flex-col rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
            <img src={Icon2} alt="Icon" className="w-20 h-20 mb-4" />
            <h1 className="text-xl font-semibold">Free Resource</h1>
            <p className="text-sm mt-2 md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
              ornare in mattis.
            </p>
          </div>
          <div className="sm:w-68 sm:h-73 p-6 flex flex-col rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110">
            <img src={Icon3} alt="Icon" className="w-20 h-20 mb-4" />
            <h1 className="text-xl font-semibold">Regular Update</h1>
            <p className="text-sm mt-2 md:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor
              ornare in mattis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
