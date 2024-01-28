// Form.js

import React from "react";
import "./Form.css";
import logo0 from "../../../src/assets/images/Icon.png";
import "./Form.css"; // Import the CSS file for styling

const Form = () => {
  return (
    <div className="form-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="flex-[0.5] flex flex-col justify-between items-start">
          <div className="flex flex-col items-start gap-[16px] w-full justify-start">
            <p className="uppercase mt-4 font-medium text-[16px]" style={{ fontFamily: "Space Grotesk", color: "var(--Blue-1, #0E33CB)" }}>
              Contact Us
            </p>

            <p className="text-[48px] font-bold leading-[130%] uppercase text-start" style={{ fontFamily: "Space Grotesk", color: "var(--Dark-Blue-1, #121D50)" }}>
              Take the First Step <br />
              to Streamlined<br/> Shipping
            </p>

            <div className="flex items-start justify-start">
              <img src={logo0} alt="Logo0" className="mt-4  items-start  rounded-[8px] logo" />
              <div className="text-start ml-8 mt-6 ">
                <p className="text-md  text-[18px]" style={{ fontFamily: "Roboto" }}>
                  Call Us
                </p>
                <p className="text-[20px] not-italic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
                  +2 333 000-0000
                </p>
              </div>
            </div>
            <div className="border w-[70%] mt-4 text-start bg-gray-300 border-dashed justify-start"></div>

            <div className="flex items-start justify-start">
              <img src={logo0} alt="Logo0" className="mt-4 items-start  rounded-[8px] logo" />
              <div className="text-start ml-8 mt-6 ">
                <p className="text-md  text-[18px]" style={{ fontFamily: "Roboto" }}>
                  Email
                </p>
                <p className="text-[20px] not-italic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
                  massshipping@mail.com
                </p>
              </div>
            </div>
            <div className="border w-[70%] mt-4 text-start bg-gray-300 border-dashed justify-start"></div>

            <div className="flex items-start justify-start">
              <img src={logo0} alt="Logo0" className="mt-4 items-start  rounded-[8px] logo" />
              <div className="text-start ml-8 mt-6 ">
                <p className="text-md  text-[18px]" style={{ fontFamily: "Roboto" }}>
                  Office
                </p>
                <p className="text-[20px] not-italic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
                  Anywhere Street, NY
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="px-16 py-8 pb-16 pt-14" style={{ borderRadius: "12px", background: "var(--Grey-1, #EDF0F3)" }}>
          <div className="flex-col text-start pt-8  ">
            <p className="text-[25px] not-italic mb-4 font-bold leading-[130%] uppercase" style={{ fontFamily: "SpaceGrotesk", color: "var(--Dark-Blue-1,#121d50)" }}>
              Request a Quote Today
            </p>

            <div className="pt-12">
              <p className="text-[14px] not-italic font-semibold leading-[100%] tracking-[1.33px] uppercase" style={{ color: "var(--Dark-Blue-2, #090E23)", fontFamily: "Space Grotesk" }}>
                Your Name
              </p>

              <button
                className="flex  text-start w-full  py-[15px] rounded-[8px] px-4 border mt-2 text-gray-400"
                style={{
                  borderRadius: "8px",
                  background: "var(--White, #fff)",
                  fontFamily: "Roboto",
                  color: "var(--Grey-2, #5C6C7B)"
                }}
              >
                Ex: Jhon Dee
              </button>
            </div>
            <div className="mt-4">
              <p className="text-[14px] not-italic font-semibold leading-[100%] tracking-[1.33px] uppercase" style={{ color: "var(--Dark-Blue-2, #090E23)", fontFamily: "Space Grotesk" }}>
                Email Address
              </p>

              <button
                className="flex items-center w-full  py-[15px] rounded-[8px] px-4 border mt-2 text-gray-400"
                style={{
                  borderRadius: "8px",
                  background: "var(--White, #fff)",
                  fontFamily: "Roboto",
                  color: "var(--Grey-2, #5C6C7B)"
                }}
              >
                Ex: jhondee@gmail.com
              </button>
            </div>
            <div className="mt-4">
              <p className="text-[14px] not-italic font-semibold leading-[100%] tracking-[1.33px] uppercase" style={{ color: "var(--Dark-Blue-2, #090E23)", fontFamily: "Space Grotesk" }}>
                Phone
              </p>

              <button
                className="flex text-start w-full  py-[15px] rounded-[8px] px-4 border mt-2 text-gray-400"
                style={{
                  borderRadius: "8px",
                  background: "var(--White, #fff)",
                  fontFamily: "Roboto",
                  color: "var(--Grey-2, #5C6C7B)"
                }}
              >
                Ex: +1 (333) 000-0000
              </button>
            </div>
            <div className="mt-4">
              <p className="text-[14px] not-italic font-semibold ltter-spacing: [1.33px] leading-[100%] tracking-[1.33px] uppercase" style={{ color: "var(--Dark-Blue-2, #090E23)", fontFamily: "Space Grotesk" }}>
                Message
              </p>

              <button
                className="flex items-center w-full  py-[15px] rounded-[8px] px-4 border mt-2 text-gray-400"
                style={{
                  borderRadius: "8px",
                  background: "var(--White, #fff)",
                  fontFamily: "Roboto",
                  color: "var(--Grey-2, #5C6C7B)"
                }}
              >
                Writing your message here...
              </button>
            </div>
            <button
              className="px-14 py-4 border mt-6 text-white rounded-md uppercase"
              style={{
                borderRadius: "8px",
                background: "#1195D6",
                
                
              }}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
