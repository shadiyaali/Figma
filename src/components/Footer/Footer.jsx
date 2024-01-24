import React from "react";
import logo from "../../../src/assets/images/Group.png";
import "./Footer.css";
import logo9 from "../../../src/assets/images/man.png";

const Footer = () => {
  return (
    <>
      <div
        className=""
        style={{
          background: "var(--Dark-Blue-2, #090E23)",
        }}
      >
        <div className="w-[100%] h-[470px] mt-20 bg-red-300 flex items-center">
          <div className="flex-col">
            <img src={logo} alt="Logo" className="w-[283px] h-[83px] mt-12 ml-24" />
            <p className="text-sub w-[391px] h-[93px] mt-4 mb-16 ml-24">
              we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.
            </p>
          </div>
          <div className="w-[140px] h-[176px] ml-14">
            <p className="font-text w-[140px] h-[32px]">Navigation</p>
            <p className="w-[89px] h-[25px] text-start text-white mt-4">Home</p>
            <p className="w-[89px] h-[25px] text-start text-white  mt-2">Home</p>
            <p className="w-[89px] h-[25px] text-start text-white  mt-2">Home</p>
            <p className="w-[89px] h-[25px] text-start text-white  mt-2">Home</p>
          </div>
          <div className="w-[213px] h-[176px] ml-14">
            <p className="font-text w-[204px] h-[32px]">Recent Project</p>
            <img src={logo9} alt="Logo9" className=" w-full logo mt-4" />
          </div>
          <div className="w-[296px] h-[177px] ml-14">
            <p className="font-text w-[204px] h-[32px]">Subscribe Us</p>
            <button
              className="w-[296px] h-[57px] px-14 py-4 border bg-white text-start mt-4 text-gray-500 rounded-md"
              style={{
                borderRadius: "8px",
                fontFamily: "Space Grotesk",
              }}
            >
              Enter Your Email
            </button>
            <button
              className="w-[296px] h-[57px] px-14 py-4 border bg-whitev text-white text-start mt-4  rounded-md"
              style={{
                borderRadius: "8px",
                background: "#1195D6",
                fontFamily: "Space Grotesk",
              }}
            >
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="dotted-line border justify-items-center bg-gray-300 border-dashed mt-4 mb-8"></div>

        <p className="text-white mb-20" style={{ fontFamily: "Space Grotesk" }}>
          Copyright © 2023 massshipping
        </p>
      </div>
    </>
  );
};

export default Footer;
