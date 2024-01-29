import React from "react";
import logo from "../../../src/assets/images/Replace This.png";

const HomePage = () => {
  return (
    <>
   
      <div className="h-full mx-auto p-[5rem] relative bg-home-background bg-cover">
        <div className=" gap-20  md:px-[7rem] p-6 text-left space-grotesk-font">
          <div className="w-full  lg:w-11/12">
            <p
              className="text-[18px] font-medium leading-[100%] tracking-[0.095em] text-left uppercase  text-white mb-3"
              style={{ fontFamily: "Space Grotesk" }}
            >
              We are the Best Logistic Company
            </p>

            <p className="text-[color:var(--White,#FFF)] mt-4 text-[64px] not-italic font-bold leading-[130%]  font-SpaceGrotesk uppercase text-white">
              Streamline Your Shipping with <br />
              Our Cargo Services
            </p>

            <p
              className="text-[18px] not-italic font-normal leading-[140%] pt-8 text-left   text-white mb-3"
              style={{ fontFamily: "Roboto" }}
            >
              Simplify your shipping process and make it more efficient with our{" "}
              <br /> cargo services. From start to finish, we'll handle
              everything to ensure
              <br /> your cargo arrives safely.
            </p>
          </div>
          <div className=" pl-1 px-8  flex flex-col lg:flex-row">
            <div className="lg:flex flex-1 gap-8 items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-100 h-100 logo "
                style={{
                  borderRadius: "6px",
                  background:
                    "url(path-to-image), lightgray 50% / cover no-repeat",
                }}
              />

              <div className="pl-3  mt-4 lg:mt-0">
                <p
                  className="text-[color:var(--White,#FFF)]  text-[48px] not-italic font-bold leading-[130%] uppercase
 
  "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  26 K
                </p>
                <p
                  className=" text-[color:var(--White,#FFF)]  text-[16px] not-italic font-normal leading-[140%]
  
 "
                  style={{ fontFamily: "Roboto" }}
                >
                  Satisfied Clients
                </p>
              </div>
              <div className="flex h-[7rem] items-center ">
                <div className="border border-white h-3/5 border-dashed"></div>
              </div>
              <div className="ml-0 mt-4  lg:mt-0">
                <p
                  className="text-[color:var(--White,#FFF)] text-[48px] not-italic font-bold leading-[130%] uppercase
 
 "
                  style={{ fontFamily: "Space Grotesk" }}
                >
                  12 +
                </p>
                <p
                  className=" text-[color:var(--White,#FFF)] text-[16px] not-italic font-normal leading-[140%]
  
  "
                  style={{ fontFamily: "Roboto" }}
                >
                  Years of Experience
                </p>
              </div>
            </div>
            <div className="lg:pl-20 pr-6 pt-16">
              <div className="flex lg:flex-row flex-col">
                <button
                  className="flex items-start gap-[10px] px-[24px] py-[16px] rounded-[8px_0px_0px_0px]
                  "
                  style={{ background: "var(--Dark-Blue-2, #090e23)" }}
                >
                  <p
                    className="text-[#1195D6] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase
  
  "
                    style={{ fontamily: "Space Grotesk" }}
                  >
                    Tracking
                  </p>
                </button>
                <button
                  className="flex items-start gap-[10px] px-[24px] py-[16px] rounded-[0px_8px_0px_0px]"
                  style={{ background: "var(--Dark-Blue-3, #060a17)" }}
                >
                  <p
                    className="text-[color:var(--Grey-2,#5C6C7B)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    Rate & Ship
                  </p>
                </button>
              </div>
              <div
                className="flex flex-col justify-center items-start gap-[16px] pt-[24px] pb-[25px] px-[24px] rounded-[0px_8px_8px_8px]
                "
                style={{ background: "var(--Dark-Blue-2, #090e23)" }}
              >
                <div className="flex items-center gap-[1rem] pt-4  ">
                  <button className="flex w-[285px] items-start gap-[10px] border border-[color:var(--Grey-2,#5C6C7B)] px-[16px] py-[18px] rounded-[8px] border-solid">
                    <p
                      className="text-[color:var(--Grey-2,#5C6C7B)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      tracking id
                    </p>
                  </button>

                  <button
                    className="flex w-[211px] justify-center items-center gap-[10px] px-[54px] py-[18px] rounded-[8px]
                    "
                    style={{ background: "#1195d6" }}
                  >
                    <p
                      className="text-[color:var(--White,#FFF)]  text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
                      style={{ fontFamily: "Space Grotesk" }}
                    >
                      track
                    </p>
                  </button>
                </div>
                <p
                  className="text-[color:var(--White,#FFF)]    text-[12px] not-italic font-normal leading-[140%]"
                  style={{ fontFamily: "Roboto" }}
                  /* Caption */
                >
                  See the tracking ID on the shipping document.{" "}
                  <span className="text-[12px] leading-[140%]" style={{color:"#1195D6" ,fontFamily: "Roboto" }}>
                    Help
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
