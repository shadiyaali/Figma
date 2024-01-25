import React from "react";
import logo from "../../../src/assets/images/Group.png";
// import "./Footer.css";
import logo9 from "../../../src/assets/images/man.png";

const Footer = () => {
  return (
    <>
      <div
        className="mb-12 pl-20 mt-8"
        style={{
          background: "var(--Dark-Blue-2, #090E23)",
        }}
      >
        <div className=" mt-20  flex items-center">
          <div className="flex-col">
            <img src={logo} alt="Logo" className=" mt-12 ml-24" />
            <p
              className="  text-[16px]  not-italic font-medium leading-[120%]    mt-4 mb-16 ml-24"
              style={{ fontFamily: "SpaceGrotesk", color: "var(--White,#FFF)" }}
            >
              We believe in providing our clients with<br/> personalized and
              efficient logistics<br/> solutions that meet their unique <br/> needs.
            </p>
          </div>
          <div className=" ml-14">
            <p
              className="  text-[20px] not-italic font-bold leading-[130%] uppercase f  "
              style={{ color: "var(--White,#FFF)" }}
            >
              Navigation
            </p>

            <p className=" text-start text-white mt-4">Home</p>
            <p className="  text-start text-white  mt-2">About Us</p>
            <p className="  text-start text-white  mt-2">Services</p>
            <p className="  text-start text-white  mt-2">Contact Us</p>
          </div>
          <div className="  ml-14">
            <p className="text-[color:var(--White,#FFF)] text-[20px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk  ">
              Recent Project
            </p>

            <img src={logo9} alt="Logo9" className=" w-full logo mt-4" />
          </div>
          <div className="flex-col ml-4 md:ml-14">
  <p className="text-[color:var(--White,#FFF)]  text-[20px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-0">
    Subscribe Us
  </p>

  <button
    className="px-4 md:px-14 py-3 md:py-4 border bg-white text-start mt-4 text-gray-500 rounded-md"
    style={{
      borderRadius: "8px",
      fontFamily: "Space Grotesk",
    }}
  >
    Enter Your Email
  </button>
  
  <br />

  <button
    className="px-4 md:px-14 py-3 md:py-4 border bg-[#1195D6] text-white text-start mt-4 rounded-md"
    style={{
      borderRadius: "8px",
      fontFamily: "Space Grotesk",
    }}
  >
    Subscribe Now
  </button>
</div>

        </div>
        <div className="w-full flex justify-center">
          <div className="w-4/5  border border-dashed "></div>
        </div>
        {/* <hr className="text-[red] bg-red-400 w-full"/> */}
        <p className="text-white py-14" style={{ fontFamily: "Space Grotesk" }}>
          Copyright © 2023 massshipping
        </p>
      </div>
    </>
  );
};

export default Footer;
