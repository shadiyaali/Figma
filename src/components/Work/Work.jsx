import React from "react";
import "./Work.css";
import logo4 from "../../../src/assets/images/bg-1.png";
import logo5 from "../../../src/assets/images/Icon.png";

const Works = () => {
  return (
    <>
      <div className="top-most">
        <div className="flex items-center">
          <img
            src={logo4}
            alt="Logo1"
            className="w-[556px] h-[370px] logo mb-20 mt-[92px] ml-[125px]"
            style={{
              borderRadius: "6px",
              background: "url(path-to-image), lightgray 50% / cover no-repeat",
            }}
          />
          <div className="ml-8">
            <p className="text-first w-[118px] h-[14px]">How It Works</p>
            <p className="heading text-center w-[580px] h-[186px] mt-4">
              Simplify Your Shipping Experience with Our Easy Step Process
            </p>
            <p className="sub-heading text-gray-600 w-[580px] h-[100px] mt-12">
              We believe in providing our clients with personalized and efficient
              logistics solutions that meet their unique needs. With years of
              experience and a team of experts, we are dedicated to empowering your
              business with seamless shipping experiences.
            </p>
          </div>
        </div>
        <div className="dotted-line border bg-gray-300 border-dashed mt-4"></div>
        <div className="icon-outer justify-center flex gap-119  mt-20 w-[1099px] h-[349px]">
          <div className="w-[287px] h-[345px]  flex flex-col items-center">
            <div
              className="w-[66px] h-[33px] mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 1</p>
            </div>
            <img
              src={logo5}
              alt="Logo5"
              className="icon-box w-100 h-100 logo"
            />
            <p className="heading-text mt-8">Request a Quote</p>
            <p className=" mt-8 w-[287px] h-[66px]">
              We believe in providing our clients with personalized and efficient
              logistics solutions that meet their unique needs.
            </p>
          </div>
          {/* Repeat the above block for the other two divs */}
          <div className="w-[287px] h-[345px]  flex flex-col items-center">
            <div
              className="w-[66px] h-[33px] mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 2</p>
            </div>
            <img
              src={logo5}
              alt="Logo5"
              className="icon-box w-100 h-100 logo"
            />
            <p className="heading-text mt-8">Provide Details</p>
            <p className=" mt-8 w-[287px] h-[66px]">
            We believe in providing our clients with personalized and efficient
              logistics solutions that meet their unique needs.
            </p>
          </div>
          <div className="w-[287px] h-[345px]  flex flex-col items-center">
            <div
              className="w-[66px] h-[33px] mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 3</p>
            </div>
            <img
              src={logo5}
              alt="Logo5"
              className="icon-box w-100 h-100 logo"
            />
            <p className="heading-text mt-8">Schedule Pick-Up</p>
            <p className=" mt-8 w-[287px] h-[66px] ">
            We believe in providing our clients with personalized and efficient
              logistics solutions that meet their unique needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
