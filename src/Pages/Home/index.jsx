import React from "react";
import logo from "../../../src/assets/images/Replace This.png";

const HomePage = () => {
  return (
    <>
      <div className="h-full mx-auto p-10 relative bg-home-background bg-cover">
        <div className="top-110 left-150 gap-20 p-6 text-left space-grotesk-font">
          <div className="w-full mt-12 ml-8 lg:w-11/12">
            <p
              className="text-18 font-medium leading-18 tracking-[0.095em] text-left uppercase  text-white mb-3"
              style={{ fontFamily: "SpaceGrotesk" }}
            >
              We are the Best Logistic Company
            </p>

            <p className="text-[color:var(--White,#FFF)] mt-4 text-[50px] not-italic font-bold leading-[130%]  font-SpaceGrotesk uppercase text-white">
              Streamline Your Shipping with <br />
              Our Cargo Services
            </p>

            <p
              className="text-18 font-medium mt-4 leading-18 tracking-[0.095em] text-left   text-white mb-3"
              style={{ fontFamily: "SpaceGrotesk" }}
            >
              Simplify your shipping process and make it more efficient with our{" "}
              <br /> cargo services. From start to finish, we'll handle
              everything to ensure
              <br /> your cargo arrives safely.
            </p>
          </div>
          <div className="mt-8 ml-8 flex flex-col lg:flex-row">
            <div className="lg:flex flex-1 gap-4 items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-100 h-100 logo mr-8"
                style={{
                  borderRadius: "6px",
                  background:
                    "url(path-to-image), lightgray 50% / cover no-repeat",
                }}
              />

              <div className="ml-0 mt-4  lg:mt-0">
                <p className="text-4xl font-bold mb-2 text-white">26 K</p>
                <p className=" text-white">Satisfied Clients</p>
              </div>
              <div className="flex h-[7rem] items-center ">
                <div className="border border-white h-3/5 border-dashed"></div>
              </div>
              <div className="ml-0 mt-4  lg:mt-0">
                <p className="text-4xl font-bold mb-2 text-white">12 +</p>
                <p className=" text-white">Years of Experience</p>
              </div>
            </div>
            <div className="lg:ml-10">
              <div className="flex lg:flex-row flex-col">
                <button
                  className="w-full lg:w-[140px] h-[46px] mb-4 lg:mb-0"
                  style={{
                    background: "var(--Dark-Blue-2, #090E23)",
                    color: "#1195D6",
                    borderRadius: "8px 0px 0px 0px",
                  }}
                >
                  TRACKING
                </button>
                <button
                  className="text-gray-600 bg-black w-full lg:w-[140px] h-[46px] "
                  style={{
                    borderRadius: "0px 8px 8px 0px",
                  }}
                >
                  RATE & SHIP
                </button>
              </div>
              <div
                className="flex flex-col p-6"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "24px 24px 25px 24px",
                  justifyContent: "center",
                  background: "var(--Dark-Blue-2, #090E23)",
                  gap: "16px",
                  borderRadius: "0px 8px 8px 8px",
                  width: "100%",
                }}
              >
                <div className="flex items-center mt-4 h-12 ">
                  <input
                    type="text"
                    placeholder="Tracking ID "
                    className="p-2 border border-gray-600 bg-transparent w-full lg:w-[285px] h-[50px] rounded"
                    style={{
                      color: "#090E23",
                      borderRadius: "8px",
                      borderColor: "var(--Grey-2, #5C6C7B)",
                    }}
                  ></input>

                  <button
                    className="ml-0 lg:ml-4 w-full lg:w-[211px] h-[50px] text-white"
                    style={{
                      borderRadius: "8px",
                      background: "#1195D6",
                    }}
                  >
                    Track
                  </button>
                </div>
                <p className="text-body2 mt-2 text-white">
                  See the tracking ID on the shipping document.{" "}
                  <span className="" style={{ color: "#1195D6" }}>
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
