import React from "react";
import logo0 from "../../../src/assets/images/Icon.png";

const Form = () => {
  return (
    <div className=" mt-12 p-20 ml-44 pl-[8px] gap-[5rem]   grid grid-cols-2 place-content-center  md:px-20">
      {/* Left Section */}
      <div className="flex-[0.5] p-2 flex flex-col justify-between items-start">
  <div className="flex flex-col items-start gap-[16px] w-full justify-start">
    <p className="uppercase font-medium text-[16px]" style={{ fontFamily: "Space Grotesk", color: "var(--Blue-1, #0E33CB)" }}>
      Contact Us
    </p>

    <p className="text-[48px] font-bold leading-[130%] uppercase text-start" style={{ fontFamily: "Space Grotesk", color: "var(--Dark-Blue-1, #121D50)" }}>
      Take the First Step <br />
      to Streamlined Shipping<br />
    </p>

    <div className="flex text-start items-start justify-start"> {/* Add items-start to align items at the start */}
      <img src={logo0} alt="Logo0" className="mt-6 items-start p-[23px] rounded-[8px] logo" />
      <div className="text-start">
        <p className="text-md pt-12 text-[18px]" style={{ fontFamily: "Roboto" }}>
          Call us
        </p>
        <p className="text-[20px] not-italic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
          +2 333 000-0000
        </p>
      </div>
    </div>
    <div className="w-3/4  border text-start bg-gray-300 border-dashed justify-start"></div>
  </div>

  <div className="flex flex-col items-start gap-[20px] p-[20px] w-full justify-start">
    <div className="flex text-start justify-start">
      <div className="flex">
        <img src={logo0} alt="Logo0" className="logo" />
        <div className="text-start mt-2 ml-8">
          <p className="text-md text-[18px]" style={{ fontFamily: "Roboto" }}> Email </p>
          <p className="text-[20px] not-Fitalic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
            massshipping@mail.com
          </p>
        </div>
      </div>
    </div>
    <div className="w-4/5 border text-start bg-gray-300 border-dashed justify-start"></div>
  </div>

  <div className="flex flex-col items-start gap-[20px] p-[20px] w-full justify-start">
    <div className="flex text-start justify-start">
      <div className="flex">
        <img src={logo0} alt="Logo0" className="logo" />
        <div className="text-start mt-2 ml-8">
          <p className="text-md text-[18px]" style={{ fontFamily: "Roboto" }}> Office</p>
          <p className="text-[color:var(--Dark-Blue-1,#121d50)] text-[20px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk" style={{ fontFamily: "Space Grotesk" }}>
            Anywhere Street, NY
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className=" w-full h-full   px-12 mt-8"style={{borderRadius: "12px",background: "var(--Grey-1, #EDF0F3)"}}>
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
            <p className="  text-[14px]  not-italic font-medium leading-[100%] uppercase  ">
              Email Address
            </p>

            <button
              className="flex items-center w-full  py-[15px] rounded-[8px] px-14 border mt-4 text-gray-400 "
              style={{
                borderRadius: "8px",
                background: "var(--White, #fff)",
              }}
            >
              Ex: jhondee@gmail.com
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
