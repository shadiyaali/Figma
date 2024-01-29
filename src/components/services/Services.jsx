import React from "react";
 
import logo2 from "../../../src/assets/images/Icon.png";

const Service = () => {
  return (
    <>
    <div className=" md:p-[7rem]"style={{background: "var(--Grey-1, #edf0f3)" }}>
      <div className="flex flex-col  justify-center items-center px-24 "
  >
    
        <p
          className=" text-center text-[14px]   not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
           style={{fontFamily: "Space Grotesk",color:"var(--Blue-1,#0e33cb)"}}
        >
          our services
        </p>

        <p className=" text-center text-[48px] mt-4 not-italic font-bold leading-[130%] uppercase"style={{fontFamily: "Space Grotesk",color:"var(--Dark-Blue-1,#121D50)"}}  
  >
          Efficient and Reliable Shipping <br/> with FastGo
        </p>

        <div className="flex w-full gap-[18px] mt-8">
          <div
            className="flex flex-col items-start gap-[32px] text-start   rounded-[12px]   justify-start "
            style={{
              background: "var(--Dark-Blue-2, #121d50)",
              padding: "48px 40px 70px 40px"
            }}
          >
            <img src={logo2} alt="Logo2" className=" logo " />
            <p className=" text-[25px] not-italic font-bold leading-130 uppercase text-white  justify-start"style={{fontFamily: "Space Grotesk"}}>
              Ocean Shipping
            </p>

            <p
              className="not-italic text-[16px]  font-normal  leading-[140%] justify-start "
              style={{
                color: "var(--White, #FFF)",
                fontFamily: "Roboto"
              }}
            >
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>

          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  justify-start  bg-white">
            <img src={logo2} alt="Logo2" className=" logo " />
            <p className=" text-[25px] not-italic font-bold leading-130 uppercase    justify-start"style={{fontFamily: "Space Grotesk",color:" var(--Dark-Blue-1, #121D50)"}}>
              Air Shipping
            </p>

            <p className="not-italic text-[16px]  font-normal  leading-[140%] justify-start  "
             style={{
              
              fontFamily: "Roboto",
              color: "var(--Grey-2, #5C6C7B)"
            }}>
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px] w-  justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className=" text-[25px]  not-italic font-bold leading-130 uppercase justify-start"style={{fontFamily: "Space Grotesk",color:" var(--Dark-Blue-1, #121D50)"}}>
              Truck Shipping
            </p>

            <p className="not-italic text-[16px]  font-normal  leading-[140%] justify-start  "
              style={{
              
                fontFamily: "Roboto",
                color: "var(--Grey-2, #5C6C7B)"
              }}>
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  mt-6 justify-start  bg-white">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className=" text-[25px]   not-italic font-bold leading-130 uppercase    justify-start"style={{fontFamily: "Space Grotesk",color:" var(--Dark-Blue-1, #121D50)"}}>
              Custom Clearance
            </p>

            <p className="not-italic text-[16px]  font-normal  leading-[140%] justify-start "
              style={{
              
                fontFamily: "Roboto",
                color: "var(--Grey-2, #5C6C7B)"
              }}>
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px] mt-6   justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className=" text-[25px]  not-italic font-bold leading-130 uppercase justify-start"style={{fontFamily: "Space Grotesk",color:" var(--Dark-Blue-1, #121D50)"}}>
              Freight Forwarding
            </p>

            <p className="not-italic text-[16px]  font-normal  leading-[140%] justify-start  "
              style={{
              
                fontFamily: "Roboto",
                color: "var(--Grey-2, #5C6C7B)"
              }}>
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>

          <div className="flex flex-col items-start gap-[32px] text-start pt-[48px] pb-[70px] px-[40px] rounded-[12px]  mt-6 justify-start bg-white ">
            <img src={logo2} alt="Logo2" className="w-100 h-100 logo " />
            <p className=" text-[25px]   not-italic font-bold leading-130 uppercase   justify-start"style={{fontFamily: "Space Grotesk",color:" var(--Dark-Blue-1, #121D50)"}}>
              Insurance
            </p>

            <p className="not-italic text-[16px]  font-normal  leading-[140%] justify-start "
              style={{
              
                fontFamily: "Roboto",
                color: "var(--Grey-2, #5C6C7B)"
              }}>
              we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs.{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Service;
