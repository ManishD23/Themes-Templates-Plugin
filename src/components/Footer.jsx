import React from "react";
import { useState, useEffect } from "react";
import Send from "../assets/icons/send.png";

const Footer = () => {
  return (
    <section className="">
      <div className="p-10 flex justify-center items-center gap-6 bg-gray-500">
        <div>
          <h1 className="text-2xl  text-white">Newsletter</h1>
        </div>
        {/* <div className="bg-white shadow-lg flex items-center space-x-2 rounded-lg p-2">
          <input
            type="text"
            placeholder="Your email"
            className="w-60 h-12 px-4 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="w-12 h-10 flex items-center justify-center bg-purple-500 rounded-md p-3 hover:bg-purple-600 transition duration-300">
            <img src={Send} alt="send" className="w-5 h-5" />
          </button>
        </div> */}
      </div>
      <div className="bg-gray-900 p-10">
        <div className="p-5">
          <ul className="flex flex-wrap  justify-center items-center gap-6 p-5 text-white">
            <li>Html Design </li>
            <li>WP Themes </li>
            <li>CMS Themes</li>
            <li>e Commerce</li>
            <li>Blogging</li>
            <li>UI Templates</li>
          </ul>
        </div>
        <div className="py-5">
          <p className="text-white items-center text-center p-5">
            2021 JS Template. Designd By Ojjomedia All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
