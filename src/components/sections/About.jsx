import React from "react";
import logo1 from "../../assets/images/Image.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="flex justify-between mt-12 ml-14 gap-[16px] p-[130px]">
        <div className="w-11/12 h-10 max-w-[580px] text-left">
          <p className="text-subheading text-blue-500 uppercase mb-[16px]">
            About Us
          </p>
          <p className="text-2xl text-about-heading text-black uppercase ">
            Empowering Your Business with Tailored Logistics Solutions
          </p>
          <p className="text-lg mt-8 text-gray-600">
            We believe in providing our clients with personalized and efficient
            logistics solutions that meet their unique needs. With years of
            experience and a team of experts, we are dedicated to empowering
            your business with seamless shipping experiences.
          </p>
          <button className="  px-14 py-4 border   mt-4 text-white rounded-md uppercase "
          style={{
            borderRadius: "8px",background: "#1195D6"

          }}>
            Learn More
          </button>
        </div>
        <img
          src={logo1}
          alt="Logo1"
          className="w-100 h-100 logo "
          style={{
            borderRadius: "6px",
            background: "url(path-to-image), lightgray 50% / cover no-repeat",
          }}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-[20px] px-32 py-12 justify-between">
          <div className="about-card ml-12 w-[367px] h-[160px] gap-3">
            <p className="Typography text-center flex justify-center items-center   text-xl font-bold text-white border border-transparent border-r-white w-[203px] h-[64px] pe-4 border-dashed ">
              01
            </p>
            <p className="Typography text-lg font-semibold text-white text-start  ">
              Expertise and Experience
            </p>
          </div>
          <div className="about-card w-[367px] h-[160px] gap-3">
            <p className="Typography text-center flex justify-center items-center  text-xl font-bold w-[203px]  h-[64px] text-white border border-transparent border-r-white pe-4 border-dashed ">
              02
            </p>
            <p className="Typography text-lg font-semibold text-white text-start w-full ">
              Committed to Quality
            </p>
          </div>
          <div className="about-card w-[367px] h-[160px] gap-3">
            <p className="Typography text-center flex justify-center items-center  w-[203px]  h-[64px] text-xl font-bold text-white border border-transparent border-r-white pe-4 border-dashed">
              03
            </p>
            <p className="Typography text-lg font-semibold text-white text-start w-full">
              Comprehensive Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
