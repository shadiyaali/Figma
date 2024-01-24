import React, { Fragment } from "react";
import logo from "../../../src/assets/images/Replace This.png"; // Replace with the actual path to your logo
import "./index.css";


const HomePage = () => {
  return (
    <>
      <div className="h-full mx-auto p-10 relative bg-home-background bg-cover">
        <div className=" top-110 left-150 gap-24 p-6 text-left space-grotesk-font">
          <div className="w-11/12">
            <p className="text-subheading text-white mb-3">
              We are the Best Logistic Company
            </p>
            <p className="text-heading uppercase text-white ">
              Streamline Your Shipping with Our Cargo Services
            </p>
            <p className="text-body mt-10 text-white  ">
              Simplify your shipping process and make it more efficient with our
              cargo services. From start to finish, we'll handle everything to
              ensure your cargo arrives safely.
            </p>
          </div>
          <div className=" mt-8 flex">
            <div className="flex flex-1 items-center">
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
              <div className="border border-transparent border-r-white pe-6 border-dashed">
                <p className="text-4xl text-white font-bold mb-2">26 K</p>
                <p className="text-body2 text-white">Satisfied Clients</p>
              </div>
              <div className="ml-10">
                <p className="text-4xl font-bold mb-2 text-white">12 +</p>
                <p className="text-body2 text-white">Years of Experience</p>
              </div>
            </div>
            <div>
            <div className="flex ">
                <p className=" text-blue-400 ">TRACKING</p>
                <p className="text-gray-600 ml-10">RATE & SHIP</p>
              </div>
            <div
              className=" flex flex-1 p-6"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "24px 24px 25px 24px",
                justifyContent: "center",
                background: "var(--Dark-Blue-2, #090E23)",
                gap: "16px",
                borderRadius: "8px 8px 8px 8px",
                
                width: "560px",
                height: "178px",
                position: "relative",
                //   top: "390px",
                //   left: "730px",
              }}
            >
            
              <div className="flex items-center mt-4 h-12 "
              >
                <input
                  type="text"
                  placeholder="Enter Tracking ID"
                  className="p-2 border border-gray-600 bg-transparent w-[285px] rounded"
                  style={{ color: "#090E23" }}
                />

                <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
                  Track
                </button>
              </div>
              <p className="text-body2 mt-2 text-white">
                See the tracking ID on the shipping document.{" "}
                <span className="text-blue-300">Help</span>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

      
      <div></div>
    </>
  );
};

export default HomePage;
