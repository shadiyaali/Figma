import React from "react";
// import "./Card2.css";
import logo7 from "../../../src/assets/images/Icon2.png";

const Card2 = () => {
  return (
    <div className="w-full aspect-[2] bg-cover-background bg-center text-white text-center flex flex-col justify-center items-center">
      <p className="text-white text-4xl md:text-5xl lg:text-6xl not-italic font-bold leading-tight uppercase font-SpaceGrotesk w-full md:w-[580px] h-[83px] mt-4 md:mt-0">
        See it in Action
      </p>

      <p className="text-white text-base md:text-lg font-normal leading-[140%] font-roboto mb-8">
        Watch Our Video to Get a Clear Understanding of How It Works
      </p>
      <img src={logo7} alt="Logo7" className=" mb-8" />
    </div>
  );
};

export default Card2;
