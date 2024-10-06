import React from "react";
import Navbar from "./NavBar";
import heroImage from "/hero.jpeg";

const HeroSection = () => {
  return (
    <div id="hero">
      {/* hero section */}
      <section
        className="hero bg-white text-center w-full h-screen flex flex-col"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* navbar section */}
        {/* Hero content */}
        <div className=" flex-auto mx-auto px-4">
          {" "}
          {/* Center content with margin-top */}
          <h1 className="text-4xl font-bold text-white mt-10 leading-7">
            Wearable Tech, Solar Powered.
          </h1>
          <p className="text-md font-extralight text-white mt-3 leading-4">
            A cutting-edge wearable device that harnesses the power of the sun{" "}
          </p>
        </div>

        <div className="mx-auto items-end">
          {" "}
          {/* Center content with margin-top */}
          <button
            className="rounded-full bg-[#D9D9D9]/70 hover:bg-[#D9D9D9]/60 text-xs  p-2 my-24"
            href="#capsun"
          >
            {" "}
            Discover more
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
