import React from "react";
import "./Card3.css";
import logo8 from "../../../src/assets/images/pic.png";
import logo9 from "../../../src/assets/images/Star 5.png";

const Card3 = () => {
  const numberOfImages = 5;

  return (
    <div className=" outer-layer md:p-[8rem] ">

   
    <div className=" w-full  gap-[5rem] p-5  grid grid-cols-2 place-content-center  md:px-20">
      {/* Left Section */}
      <div className="flex-[0.5]    p-3 flex flex-col justify-between items-center">
        <div className="box-last w-full flex flex-col  justify-start">
          <p className="sub-head ">Testimonials</p>
          <p className="sub-text-head text-start ">
            Our Clients Speak <br />
            for Us
          </p>
        </div>

        <img
          src={logo8}
          alt="Logo8"
          className="w-[100%]  aspect-auto rounded mt-4"
          style={{
            borderRadius: "6px",
            background: "url(path-to-image), lightgray 50% / cover no-repeat",
          }}
        />
        <div className="right-section mt-8 flex flex-col gap-20">
          <div
            className="box-last w-full flex flex-col justify-center  aspect-auto  rounded"
            style={{
              background: "var(--Dark-Blue-1, #121D50)",
            }}
          >
            <div className="w-[190px]  flex gap-4">
              {[...Array(numberOfImages)].map((_, index) => (
                <img
                  key={index}
                  src={logo9}
                  alt={`Logo9-${index + 1}`}
                  className="w-[38px] h-[38px] mt-8"
                />
              ))}
            </div>

            <div className="">
              <p className="para text-white text-start  ">
                I have been using FastGo cargo logistic & transportation
                services for over a year now and I am extremely satisfied with
                their service. They are efficient, reliable, and always deliver
                on time. I highly recommend them to anyone in need of logistics
                services.
              </p>
              <p className="text-start  header-head text-white mt-6 uppercase mb-8 text-base">
                Our Clients Speak for Us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className=" p-3 flex flex-col items-center">
        <div className="right-section mt-8 flex flex-col gap-20">
          <div
            className="box-last w-full flex flex-col justify-center bg-white  aspect-auto  rounded"
            
          >
            <div className="w-[190px]  flex gap-4">
              {[...Array(numberOfImages)].map((_, index) => (
                <img
                  key={index}
                  src={logo9}
                  alt={`Logo9-${index + 1}`}
                  className="w-[38px] h-[38px] mt-8"
                />
              ))}
            </div>

            <div className="">
              <p className="para  text-start "
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
              }}>
              I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <p className="header-head text-white mt-6 uppercase mb-8 text-start  text-base"
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
              }}>
                Our Clients Speak for Us
              </p>
            </div>
          </div>
          <div
            className="box-last w-full flex flex-col bg-white justify-center  aspect-auto  rounded"
             
          >
            <div className="w-[190px]  flex gap-4">
              {[...Array(numberOfImages)].map((_, index) => (
                <img
                  key={index}
                  src={logo9}
                  alt={`Logo9-${index + 1}`}
                  className="w-[38px] h-[38px] mt-8"
                />
              ))}
            </div>

            <div className="">
              <p className="para  text-start "
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
              }}>
              I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <p className="header-head text-white mt-6 text-start  uppercase mb-8 text-base"
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
              }}>
                Our Clients Speak for Us
              </p>
            </div>
          </div>
          <div
            className="box-last w-full flex flex-col bg-white justify-center  aspect-auto  rounded"
            
          >
            <div className="w-[190px]  flex gap-4">
              {[...Array(numberOfImages)].map((_, index) => (
                <img
                  key={index}
                  src={logo9}
                  alt={`Logo9-${index + 1}`}
                  className="w-[38px] h-[38px] mt-8"
                />
              ))}
            </div>

            <div className="">
              <p className="para text-white text-start  "
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
                
              }}>
                I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.
              </p>
              <p className="header-head text-white mt-6 uppercase mb-8 text-base text-start "
              style={{
                color: "var(--Dark-Blue-1, #121D50)",
              }}>
                Our Clients Speak for Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card3;
