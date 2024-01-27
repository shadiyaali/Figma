import React from "react";
import logo from "../../../src/assets/images/Group.png";
import logo9 from "../../../src/assets/images/man.png";

const Footer = () => {
  return (
    <div
      className="pl-4 p-12 md:pl-20 mt-20 pb-0"
      style={{ background: "var(--Dark-Blue-2, #090E23)" }}
    >
      <div className="flex flex-col mr-36 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col mt-16 md:items-start">
          <img src={logo} alt="Logo" className="mt-4 md:mt-0 w-3/5 md:ml-24" />
          <p
            className="text-[18px] text-start not-italic font-normal leading-[140%] mt-6 mb-4 md:mb-16 ml-4 md:ml-24"
            style={{ fontFamily: "Roboto", color: "var(--White,#FFF)" }}
          >
            We believe in providing our clients with <br /> personalized and
            efficient logistics <br />
            solutions that meet their unique <br />
            needs.
          </p>
        </div>
        <div className="md:ml-8  md:mt-0">
          <p
            className="text-[25px] mt-16 not-italic font-bold leading-[130%] uppercase"
            style={{ color: "var(--White,#FFF)", fontFamily: "Space Grotesk" }}
          >
            Navigation
          </p>
          <div className="text-start flex-col gap-2 text-[18px] font-normal leading-[140%] mt-20 md:mt-4"></div>
          <p
            className="text-start   text-[18px] font-normal leading-[140%] mt-20 md:mt-4"
            style={{ fontFamily: "Roboto", color: "var(--White,#FFF)" }}
          >
            Home
          </p>
          <p
            className="text-start  text-[18px] font-normal leading-[140%] mt-2 "
            style={{ fontFamily: "Roboto", color: "var(--White,#FFF)" }}
          >
            About Us
          </p>
          <p
            className="text-start  text-[18px] font-normal leading-[140%] mt-2 "
            style={{ fontFamily: "Roboto", color: "var(--White,#FFF)" }}
          >
            Services
          </p>
          <p
            className="text-start  text-[18px] font-normal leading-[140%] mt-2 "
            style={{ fontFamily: "Roboto", color: "var(--White,#FFF)" }}
          >
            Contact Us
          </p>
        </div>
        <div className="md:ml-8 md:mt-0">
          <p
            className="text-[25px] mt-16 not-italic font-bold leading-[130%] uppercase"
            style={{ color: "var(--White,#FFF)", fontFamily: "Space Grotesk" }}
          >
            Recent Project
          </p>
          <img
            src={logo9}
            alt="Logo9"
            className="w-full logo rounded mt-4 md:mt-4"
          />
        </div>
        <div className="flex text-start flex-col md:ml-8 md:mt-0">
          <p
            className="text-[25px] mt-16 not-italic font-bold leading-[130%] uppercase"
            style={{ color: "var(--White,#FFF)", fontFamily: "Space Grotesk" }}
          >
            Subscribe Us
          </p>
          <button
            className="flex w-[296px] mt-4  text-[12px] items-center gap-[10px] pl-[20px] pr-[58px] py-[20px] rounded-[8px]
            "
            style={{
              borderRadius: "8px",
              fontFamily: "Roboto",
              background: "var(--White, #fff)",
              color: "var(--Grey-2, #5C6C7B)",
            }}
          >
            Enter Your Email
          </button>
          <button
            className="px-4 md:px-10 py-2 md:py-4 text-[18px] leading-[100%] mt-4 bg-[#1195D6] text-white text-center uppercase rounded-md"
            style={{
              borderRadius: "8px",
              fontFamily: "Space Grotesk",
            }}
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <div className="w-4/5  border border-dashed border-gray-400"></div>
      </div>
      <p
        className="text-white py-4 md:py-14"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Copyright © 2023 massshipping
      </p>
    </div>
  );
};

export default Footer;
