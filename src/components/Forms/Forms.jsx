import React from "react";
import "./Forms.css";
import logo0 from "../../../src/assets/images/Icon.png";

const Form = () => {
  return (
    <div className=" mt-12 w-3/4 ml-44  gap-[5rem] p-[5rem]  grid grid-cols-2 place-content-center  md:px-20">
      {/* Left Section */}
      <div className="flex-[0.5]  p-3 flex flex-col justify-between items-center">
        <div className="flex flex-col items-start gap-[20px] p-[20px] w-full   justify-start">
          <p className="uppercase text-[color:var(--Blue-1,#0e33cb)] m-0 font-SpaceGrotesk text-blue-500">
            Contact Us
          </p>

          <p
            className="  text-3xl font-bold leading-[130%] uppercase  text-start"
            style={{
              fontFamily: "SpaceGrotesk",
              color: "var(--Dark-Blue-1, #121D50)",
            }}
          >
            Take the First Step <br />
            to Streamlined Shipping
          </p>

          <div className="flex text-start justify-start">
            <div className="  flex  ">
              <img src={logo0} alt="Logo0" className=" logo" />
              <div className=" text-start mt-6 ml-8 ">
                <p className="text-md"> Call us</p>
                <p className="  text-20 not-italic font-bold leading-[130%] uppercase  ">
                  +2 333 000-0000
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full bg-[8px_2px];
    border text-start bg-gray-300 border-dashed justify-start "
          ></div>
        </div>
        <div className="flex flex-col items-start gap-[20px] p-[20px] w-full   justify-start">
          <div className="flex text-start justify-start">
            <div className="  flex    ">
              <img src={logo0} alt="Logo0" className=" logo" />
              <div className=" text-start mt-6 ml-8 ">
                <p className="text-md"> Email </p>
                <p className="  text-20 not-italic  font-bold leading-[130%] uppercase  ">
                  massshipping@mail.com
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full bg-[8px_2px];
    border text-start bg-gray-300 border-dashed justify-start "
          ></div>
        </div>
        <div className="flex flex-col items-start gap-[20px] p-[20px] w-full  justify-start">
          <div className="flex text-start justify-start">
            <div className=" flex   ">
              <img src={logo0} alt="Logo0" className=" logo" />
              <div className=" text-start mt-6  ml-8 ">
                <p className="text-md"> Office</p>
                <p className="text-[color:var(--Dark-Blue-1,#121d50)] text-20 not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk">
                  Anywhere Street, NY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-full bg-gray-200 rounded-lg px-12 mt-8">
        <div className="flex-col text-start mt-12 ">
          <p
            className="t  text-[25px] not-italic font-bold leading-[130%] uppercase  
           "
            style={{
              fontFamily: "SpaceGrotesk",
              color: "var(--Dark-Blue-1,#121d50)",
            }}
          >
            Request a Quote Today
          </p>

          <div className="  mt-6">
            <p className=" text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase  ">
              Your Name
            </p>

            <button
              className="flex  text-start w-full  py-[15px] rounded-[8px] px-14 border mt-4 text-gray-400 "
              style={{
                borderRadius: "8px",
                background: "var(--White, #fff)",
              }}
            >
             Ex: Jhon Dee
            </button>
          </div>
          <div className=" mt-6 ">
            <p className="  text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase  ">
              Email Address
            </p>

            <button
              className="flex items-center w-full  py-[15px] rounded-[8px] px-14 border mt-4 text-gray-400 "
              style={{
                borderRadius: "8px",
                background: "var(--White, #fff)",
              }}
            >
              Ex: Jhon Dee
            </button>
          </div>
          <div className=" mt-6">
            <p className="  text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase  ">
              Phone
            </p>

            <button
              className="flex items-center w-full  py-[15px] rounded-[8px] px-14 border mt-4 text-gray-400 "
              style={{
                borderRadius: "8px",
                background: "var(--White, #fff)",
              }}
            >
              Ex: +1 (333) 000-0000
            </button>
          </div>
          <div className=" mt-6">
            <p className=" text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase ">
              Message
            </p>

            <button
              className="flex items-center w-fulFl  py-[15px] rounded-[8px] px-14 border mt-4 text-gray-400 "
              style={{
                borderRadius: "8px",
                background: "var(--White, #fff)",
              }}
            >
              Writing your message here...
            </button>
          </div>
          <button
            className="  px-14 py-4 border   mt-6 text-white rounded-md uppercase "
            style={{
              borderRadius: "8px",
              background: "#1195D6",
              fontFamily: "Space Grotesk",
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
