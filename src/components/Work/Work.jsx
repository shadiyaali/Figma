import React from "react";
import logo4 from "../../../src/assets/images/bg-1.png";
import logo5 from "../../../src/assets/images/package.png";

const Works = () => {
  return (
    <>
      <div className="  pb-16 mt-6  md:p-[5rem]  ">
        <div className=" w-full  gap-[1rem] p-1  grid grid-cols-2 place-content-center  md:px-20">
          <div className="w-full p-3">
            <img
              src={logo4}
              alt="Logo1"
              className="w-full  logo"
              style={{
                borderRadius: "12px",
                maxWidth: "90%",
                height: "auto",
                background:
                  "url(path-to-image), lightgray 50% / cover no-repeat",
              }}
            />
          </div>
          <div className="pt-4 ">
            <p
              className="text-[color:var(--Blue-1,#0e33cb)]  text-[14px] text-start not-italic font-medium leading-[100%] tracking-[1.33px] uppercase   "
              style={{ fontFamily: "Space Grotesk" }}
            >
              How It Works
            </p>

            <p
              className="text-[color:var(--Dark-Blue-1,#121d50)] mt-6 text-start text-[48px] not-italic font-bold leading-[130%] uppercase "
              style={{ fontFamily: "Space Grotesk" }}
            >
              Simplify Your Shipping
              <br /> Experience with Our
              <br /> Easy Step Process
            </p>

            <p
              className="text-[color:var(--Grey-2,#5c6c7b)] text-start text-[17px] mt-8 font-normal leading-[140%] "
              style={{ fontFamily: "Roboto" }}
            >
              We believe in providing our clients with personalized and
              efficient <br />
              logistics solutions that meet their unique needs. With years of 
              <br />
              experience and a team of experts, we are dedicated to empowering
              your<br/> business with seamless shipping experiences.
            </p>
          </div>
        </div>
        <div className="w-full px-20 pt-20 ">
        <div className="w-full  border border-dashed border-gray-600"></div>
      </div>
        <div className="flex p-[10rem] pt-0 flex-col md:flex-row gap-8 md:gap-20 justify-center mt-8 md:mt-20">
          <div className="w-full  h-auto  flex flex-col items-center mx-auto">
            <div
              className="inline-flex justify-center items-start border-[color:var(--Grey-1,#EDF0F3)] px-[16px] py-[8px] rounded-[90px] border-2 border-solid
              "
              style={{
                borderRadius: "90px",

                background: "var(--White, #FFF)",
              }}
            >
              <p
                className="text-[#121D50] text-center text-[12px] not-italic font-normal leading-[140%]; 
  "
                style={{ padding: "8px,16px", fontFamily: "Roboto" }}
              >
                Step 1
              </p>
            </div>
            <div className="p-5">
              <img
                src={logo5}
                alt="Logo5"
                className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
              />
            </div>
            <p className="text-[#121d50] text-center text-[27px]  not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
              Request a Quote
            </p>

            <p className=" text-center text-[16px]  mt-4 "style={{ fontFamily: "Roboto",color:"var(--Grey-2,#5C6C7B)" }}>
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>
          
          <div className="w-full  flex flex-col items-center mx-auto">
            <div
              className="inline-flex justify-center items-start border-[color:var(--Grey-1,#EDF0F3)] px-[16px] py-[8px] rounded-[90px] border-2 border-solid
              "
              style={{
                borderRadius: "90px",

                background: "var(--White, #FFF)",
              }}
            >
              <p
                className="text-[#121D50] text-center text-[12px] not-italic font-normal leading-[140%]; 
  "
                style={{ padding: "8px,16px", fontFamily: "Roboto" }}
              >
                Step 2
              </p>
            </div>
            <div className="p-5">
              <img
                src={logo5}
                alt="Logo5"
                className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
              />
            </div>

            <p className="text-[#121d50] text-center text-[27px]   not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
              Provide Details
            </p>

            <p className="  text-center text-[16px] mt-4 "style={{ fontFamily: "Roboto",color:"var(--Grey-2,#5C6C7B)" }}>
              We believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.
            </p>
          </div>

          <div className="w-full  h-auto  flex flex-col items-center mx-auto">
            <div
              className="inline-flex justify-center items-start border-[color:var(--Grey-1,#EDF0F3)] px-[16px] py-[8px] rounded-[90px] border-2 border-solid
              "
              style={{
                borderRadius: "90px",

                background: "var(--White, #FFF)",
              }}
            >
              <p
                className="text-[#121D50] text-center text-[12px] not-italic font-normal leading-[140%]; 
  "
                style={{ padding: "8px,16px", fontFamily: "Roboto" }}
              >
                Step 3
              </p>
            </div>
            <div className="p-5">
              <img
                src={logo5}
                alt="Logo5"
                className="  md:w-full md:h-auto justify-center items-center shrink-0 p-[36px] rounded-[8px] bg-[#1195d6] logo"
              />
            </div>
            <p className="text-[#121d50] text-center text-[27px]  not-italic font-bold leading-[130%] uppercase font-SpaceGrotesk mt-4 md:mt-8">
            Schedule Pick-Up
            </p>

            <p className=" text-center text-[16px] mt-4  "style={{ fontFamily: "Roboto",color:"var(--Grey-2,#5C6C7B)" }}>
            we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
