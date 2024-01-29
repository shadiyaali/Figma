import React from "react";
import logo7 from "../../../src/assets/images/Icon2.png";

const Card2 = () => {
  return (
    <div className=" aspect-[2] bg-cover-background bg-cover bg-black bg-blend-overlay bg-opacity-40 flex flex-col items-center pt-1">
      <p className="text-white mt-4 text-center text-[64px] not-italic font-bold  leading-[130%] uppercase  "style={{fontFamily: "Space Grotesk"}}>
        See it in Action
      </p>

      <p className="text-white text-center mt-4 text-[18px]  font-normal leading-[140%] "style={{fontFamily: "Roboto"}}>
        Watch Our Video to Get a Clear Understanding of How It Works
      </p>
      <img src={logo7} alt="Logo7" className=" mt-12 w-[132px] h-[132px] " />
    </div>
  );
};

export default Card2;