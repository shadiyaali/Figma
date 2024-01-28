import React from "react";
import "./Card3.css";
import logo8 from "../../../src/assets/images/pic.png";
import logo9 from "../../../src/assets/images/Star 5.png";

const Card3 = () => {
  const numberOfImages = 5;

  return (
    <div className=" outer-layer  md:p-[4rem] ">
      <div className=" w-full  gap-[5rem] p-1  grid grid-cols-2 place-content-center  md:px-20">
        {/* Left Section */}
        <div className="flex-[0.5]    flex flex-col justify-between items-center">
          <div className=" w-full flex flex-col mt-14 justify-start"style={{ fontFamily: "Space Grotesk" }}>
            <p
              className="uppercase  text-[14px] text-start  m-0 "
              style={{color: "var(--Blue-1, #0E33CB)"}}
            >
              Testimonials
            </p>

            <p className=" mt-4 uppercase  font-bold text-[48px] text-[color:var(--Dark-Blue-1,#121d50)] text-start "
            style={{ lineHeight: "130%" }}>
              Our Clients Speak <br/>for Us
            </p>
            </div>

          <img
            src={logo8}
            alt="Logo8"
            className="w-full justify-between mt-4 aspect-auto rounded-xl "
            style={{
              borderRadius: "8px",
              background: "url(path-to-image), lightgray 50% / cover no-repeat",
            }}
          />
         
          {/* <div className=" mt-6  flex flex-col "> */}
            <div
              className="flex w-full flex-col mb-4 justify-between   aspect-auto  rounded"
              style={{
                background: "var(--Dark-Blue-2, #090E23)",
                padding: "34px 46px 34px 38px",
                borderRadius: "12px"
                
                
              }}
            >
            
            <div className="flex flex-start flex-wrap gap-2">
  {[...Array(numberOfImages)].map((_, index) => (
    <img
      key={index}
      src={logo9}
      alt={`Logo9-${index + 1}`}
      className="mt-2 max-w-[50%] md:max-w-[25%] lg:max-w-[20%]"
    />
  ))}
</div>

              <div className="">
                <p className="para text-white text-[16px] text-start mt-6 "style={{fontFamily: "Roboto"}}>
                  I have been using FastGo cargo logistic & transportation<br/>
                  services for over a year now and I am extremely satisfied <br/> with
                  their service. They are efficient, reliable, and always<br/>
                  deliver on time. I highly recommend them to anyone in<br/> need of
                  logistics services.
                </p>
                <p className="text-start font-medium   text-white mt-6 uppercase text-[18px] text-base"style={{fontFamily: "Space Grotesk",letterSpacing: "1.71px"}}>
                  John Doe, Business Owner
                </p>
              </div>
            </div>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div className=" p-3 mt-10 flex flex-col justify-between  items-center">
          {/* <div className="  mt-8 flex flex-col gap-10"> */}
          <div
              className=" mt-6  flex w-full flex-col  justify-between bg-white  aspect-auto  rounded"
              style={{
                padding: "34px 46px 34px 38px",
                borderRadius: "12px"
                
                
              }}
            >
            
            <div className="flex flex-start flex-wrap gap-2">
  {[...Array(numberOfImages)].map((_, index) => (
    <img
      key={index}
      src={logo9}
      alt={`Logo9-${index + 1}`}
      className="mt-2 max-w-[50%] md:max-w-[25%] lg:max-w-[20%]"
    />
  ))}
</div>


              <div className="">
                <p className="para text-white text-[16px] text-start mt-6 "style={{fontFamily: "Roboto",color: "var(--Dark-Blue-1, #121D50)"}}>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
                </p>
                <p className="text-start font-medium leading-[100%] tracking-[1.71px] text-white mt-6 uppercase text-[18px] text-base"style={{fontFamily: "Space Grotesk",letterSpacing: "1.71px",color: "var(--Dark-Blue-1, #121D50)"}}>
                Jane Smith, Freelance Consultant
                </p>
              </div>
            </div>
            <div
              className=" mt-6  flex w-full flex-col  justify-between bg-white  aspect-auto  rounded"
              style={{
                padding: "34px 46px 34px 38px",
                borderRadius: "12px"
                
                
              }}
            >
            
            <div className="flex flex-start flex-wrap gap-2">
  {[...Array(numberOfImages)].map((_, index) => (
    <img
      key={index}
      src={logo9}
      alt={`Logo9-${index + 1}`}
      className="mt-2 max-w-[50%] md:max-w-[25%] lg:max-w-[20%]"
    />
  ))}
</div>

              <div className="">
                <p className="para text-white text-[16px] text-start mt-6 "style={{fontFamily: "Roboto",color: "var(--Dark-Blue-1, #121D50)"}}>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
                </p>
                <p className="text-start font-medium   text-white mt-6 uppercase text-[18px] text-base"style={{fontFamily: "Space Grotesk",letterSpacing: "1.71px",color: "var(--Dark-Blue-1, #121D50)"}}>
                Michael Johnson, CEO
                </p>
              </div>
            </div>
            <div
              className=" mt-6  flex w-full flex-col  justify-between bg-white  aspect-auto  rounded"
              style={{
                padding: "34px 46px 34px 38px",
                borderRadius: "12px"
                
                
              }}
            >
            
            <div className="flex flex-start flex-wrap gap-2">
  {[...Array(numberOfImages)].map((_, index) => (
    <img
      key={index}
      src={logo9}
      alt={`Logo9-${index + 1}`}
      className="mt-2 max-w-[50%] md:max-w-[25%] lg:max-w-[20%]"
    />
  ))}
</div>

              <div className="">
                <p className="para text-white text-[16px] text-start mt-6 "style={{fontFamily: "Roboto",color: "var(--Dark-Blue-1, #121D50)"}}>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
                </p>
                <p className="text-start font-medium text-white mt-6 uppercase text-[18px] text-base"style={{fontFamily: "Space Grotesk",letterSpacing: "1.71px",color: "var(--Dark-Blue-1, #121D50)"}}>
                Sarah Lee, Online Retailer
                </p>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card3;
