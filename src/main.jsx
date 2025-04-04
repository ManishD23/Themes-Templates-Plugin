import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Fetch from "./fetch.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ChooseUs from "./components/ChooseUs.jsx";
import Features from "./components/Features.jsx";
import Allprdoduct from "./components/Allprdoduct.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Vlog from "./components/vlog.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
  <StrictMode>
    {/* <App /> */}
    {/* <Fetch /> */}
    <div className=" relative overflow-hidden">
      {/* Background Circle Covering Navbar + Hero */}
      <div className="hidden min-[350px]:block  absolute top-[-250px] right-[-250px] 
                      w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]  
                      md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]  
                      bg-gradient-to-br from-purple-500 to-indigo-500 
                      rounded-full z-[-1]">
      </div>
      <Navbar />
      <Hero />
      <ChooseUs />
      <Features />
      <Allprdoduct />
      <Testimonial />
      <Vlog />
      <Footer />
    </div>
  </StrictMode>
  </>
);
