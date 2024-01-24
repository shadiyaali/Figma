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
          <button className="  px-14 py-4 border  bg-color1 mt-4 text-white rounded-md uppercase ">
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
        <div className="flex gap-[20px] py-3 justify-evenly">
          <div className="about-card w-full gap-[16px] ">
            <p className="Typography text-xl font-bold text-white border border-transparent border-r-white  pe-8 border-dashed ">
              01
            </p>
            <p className="Typography text-lg font-semibold text-white text-start w-full ">
              Expertise and Experience
            </p>
          </div>
          <div className="about-card w-full gap-[16px]">
            <p className="Typography text-xl font-bold text-white border border-transparent border-r-white pe-6 border-dashed ">
              02
            </p>
            <p className="Typography text-lg font-semibold text-white text-start w-full ">
              Committed to Quality
            </p>
          </div>
          <div className="about-card w-full gap-[16px]">
            <p className="Typography text-xl font-bold text-white border border-transparent border-r-white pe-6 border-dashed">
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
