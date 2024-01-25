import React from "react";
import "./Service.css";
import logo2 from "../../../src/assets/images/Icon.png";

const Service = () => {
  return (
    <>
      <div className="outer mt-12">
        <p
          className="text-[color:var(--Blue-1,#0e33cb)] text-center text-[16px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase
   
  font-family: 'Space Grotesk'"
        >
          our services
        </p>

        <p className="text-[color:var(--Dark-Blue-1,#121d50)] text-center text-[18px] md:text-2xl lg:text-3xl xl:text-4xl not-italic font-bold leading-[130%] uppercase font-family-'Space Grotesk' w-full md:w-[70%] lg:w-[60%] xl:w-[50%] h-[auto] md:h-[124px] mt-2">
          Efficient and Reliable Shipping with FastGo
        </p>

        <div className="flex gap-[20px] mt-8">
          <div
            className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]   justify-start "
            style={{
              background: "var(--Dark-Blue-2, #121d50)",
            }}
          >
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] not-italic font-bold leading-130 uppercase text-white font-SpaceGrotesk justify-start">
              Ocean Shipping
            </p>

            <p
              className="not-italic font-extralight leading-[140%] justify-start "
              style={{
                color: "var(--White, #FFF)",
              }}
            >
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>

          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  justify-start  bg-white">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] not-italic font-bold leading-130 uppercase text-[color:var(--Dark-Blue-1,#121d50)] font-SpaceGrotesk justify-start">
              Air Shipping
            </p>

            <p className=" font-normal  leading-[140%] justify-start ">
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px] w-  justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] text-[color:var(--Dark-Blue-1,#121d50)] not-italic font-bold leading-130 uppercase  font-SpaceGrotesk justify-start">
              Truck Shipping
            </p>

            <p className="not-italic  font-normal leading-[140%] justify-start ">
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  mt-6 justify-start  bg-white">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] text-[color:var(--Dark-Blue-1,#121d50)] not-italic font-bold leading-130 uppercase  font-SpaceGrotesk justify-start">
              Custom Clearance
            </p>

            <p className="not-italic font-normal leading-[140%] justify-start ">
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px] mt-6   justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] text-[color:var(--Dark-Blue-1,#121d50)] not-italic font-bold leading-130 uppercase  font-SpaceGrotesk justify-start">
              Freight Forwarding
            </p>

            <p className="not-italic font-normal leading-[140%] justify-start ">
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>

          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  mt-6 justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className="w-287 text-[25px] text-[color:var(--Dark-Blue-1,#121d50)] not-italic font-bold leading-130 uppercase  font-SpaceGrotesk justify-start">
              Insurance
            </p>

            <p className="not-italic font-normal leading-[140%] justify-start ">
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
