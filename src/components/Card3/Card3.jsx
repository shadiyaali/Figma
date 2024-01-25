import React from "react";
import "./Card3.css";
import logo8 from "../../../src/assets/images/pic.png";
import logo9 from "../../../src/assets/images/Star 5.png";

const Card3 = () => {
  const numberOfImages = 5;

  return (
    <div className=" outer-layer md:p-[8rem] ">
      <div className=" w-full  gap-[5rem] p-1  grid grid-cols-2 place-content-center  md:px-20">
        {/* Left Section */}
        <div className="flex-[0.5]     flex flex-col justify-between items-center">
          <div className="box-last w-full flex flex-col mt-14 justify-start">
            <p
              className="uppercase text-start text-[color:var(--Blue-1,#0e33cb)] m-0 "
              style={{ fontFamily: "SpaceGrotesk" }}
            >
              Testimonials
            </p>

            <p className="  uppercase font-bold text-[40px] text-[color:var(--Dark-Blue-1,#121d50)] text-start ">
              Our Clients Speak for Us
            </p>
          </div>

          <img
            src={logo8}
            alt="Logo8"
            className="w-[100%]  aspect-auto rounded "
            style={{
              borderRadius: "6px",
              background: "url(path-to-image), lightgray 50% / cover no-repeat",
            }}
          />
          <div className="  flex-[0.5]  flex flex-col ">
            <div
              className="px-8 w-full flex mb-4 flex-col bg-white justify-between gap-4  aspect-auto  rounded"
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
                  their service. They are efficient, reliable, and always
                  deliver on time. I highly recommend them to anyone in need of
                  logistics services.
                </p>
                <p className="text-start  header-head text-white mt-6 uppercase mb-8 text-base">
                  John Doe, Business Owner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" p-3 flex flex-col justify-between  items-center">
          <div className="right-section  mt-8 flex flex-col gap-10">
            <div className="px-8 w-full flex flex-col bg-white justify-between gap-4  aspect-auto  rounded">
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
                <p
                  className="para  text-start "
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                  }}
                >
                  I was very impressed with FastGo handling of my recent
                  shipment. They went above and beyond to ensure my cargo
                  arrived safely and on time. I will definitely be using their
                  services again in the future.
                </p>
                <p
                  className="header-head text-white mt-6 uppercase mb-8 text-start  text-base"
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                  }}
                >
                  Jane Smith, Freelance Consultant
                </p>
              </div>
            </div>
            <div className="px-8 w-full flex flex-col bg-white justify-between gap-4  aspect-auto  rounded">
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
                <p
                  className="para  text-start "
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                  }}
                >
                  I was very impressed with FastGo handling of my recent
                  shipment. They went above and beyond to ensure my cargo
                  arrived safely and on time. I will definitely be using their
                  services again in the future.
                </p>
                <p
                  className="header-head text-white mt-4 text-start  uppercase mb-8 text-base"
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                  }}
                >
                  Michael Johnson, CEO
                </p>
              </div>
            </div>
            <div className="px-8 w-full flex flex-col bg-white justify-between gap-4  aspect-auto  rounded">
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
                <p
                  className="para text-white text-start  "
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                  }}
                >
                  I was very impressed with FastGo handling of my recent
                  shipment. They went above and beyond to ensure my cargo
                  arrived safely and on time. I will definitely be using their
                  services again in the future.
                </p>
                <p
                  className=" text-white mt-6 uppercase mb-8 font-medium text-start "
                  style={{
                    color: "var(--Dark-Blue-1, #121D50)",
                    fontFamily: "Space Grotesk",
                  }}
                >
                  Sarah Lee, Online Retailer
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
