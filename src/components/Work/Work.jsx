import React from "react";
import logo4 from "../../../src/assets/images/bg-1.png";
import logo5 from "../../../src/assets/images/Icon.png";

const Works = () => {
  return (
    <>
      <div className="w-full   shrink-0 pt-[3rem]">
        <div className="w-full grid grid-cols-2 items-center p-[4rem] gap-[5rem]">
            <div className="w-full p-3">
          <img
            src={logo4}
            alt="Logo1"
            className="w-full  logo"
            style={{
              borderRadius: "6px",
              maxWidth: "100%",
              height: "auto",
              background: "url(path-to-image), lightgray 50% / cover no-repeat",
            }}
          />
</div>
          <div className="h-4/5 w-4/5">
            <p className="text-[color:var(--Blue-1,#0e33cb)] text-[12px] text-start not-italic font-bold leading-[100%] tracking-[1.33px] uppercase   " style={{fontFamily:'Space Grotesk'}}>
              How It Works
            </p>

            <p className="text-[color:var(--Dark-Blue-1,#121d50)] md:text-4xl not-italic font-bold leading-[140%] uppercase text-justify md:text-left font-SpaceGrotesk w-full  md:h-[auto] mt-4" style={{lineHeight:"150%"}}>
              Simplify Your Shipping Experience with Our Easy Step Process
            </p>

            <p className="text-[color:var(--Grey-2,#5c6c7b)] md:text-base font-normal leading-[140%] text-left text-gray-600 w-full   mt-4 md:mt-8">
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs. With
              years of experience and a team of experts, we are dedicated to
              empowering your business with seamless shipping experiences.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="w-4/5  border border-dashed border-gray-400"></div>
        </div>
        <div className="flex p-[10rem] pt-0 flex-col md:flex-row gap-8 md:gap-20 justify-center mt-8 md:mt-20">
          <div className="w-full  h-auto  flex flex-col items-center mx-auto">
            <div
              className=" mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 1</p>
            </div>
            <div className="p-5">
            <img
              src={logo5}
              alt="Logo5"
              className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
            />
             </div>
            <p className="text-[#121d50] text-center text-[20px] md:text-[25px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
              Request a Quote
            </p>

            <p className="text-[#121d50] text-center text-[14px] md:text-[16px] mt-4 w-full  h-auto ">
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="w-full  flex flex-col items-center mx-auto">
            <div
              className=" mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 2</p>
            </div>
            <div className="p-5">
            <img
              src={logo5}
              alt="Logo5"
              className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
            />
             </div>

            <p className="text-[#121d50] text-center text-[20px] md:text-[25px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
              Provide Details
            </p>

            <p className="text-[#121d50] text-center text-[14px] md:text-[16px] mt-4 w-full h-auto ">
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="w-full  h-auto  flex flex-col items-center mx-auto">
            <div
              className=" mb-4"
              style={{
                borderRadius: "90px",
                border: "2px solid var(--Grey-1, #EDF0F3)",
                background: "var(--White, #FFF)",
              }}
            >
              <p className="">Step 3</p>
            </div>
            <div className="p-5">
            <img
              src={logo5}
              alt="Logo5"
              className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
            />
             </div>
            <p className="text-[#121d50] text-center text-[20px] md:text-[25px] not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
              Schedule Pick-Up
            </p>

            <p className="text-[#121d50] text-center text-[14px] md:text-[16px] mt-4 w-full  h-auto ">
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
