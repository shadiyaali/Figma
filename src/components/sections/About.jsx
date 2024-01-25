import React from "react";
import logo1 from "../../assets/images/Image.png";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-12 mx-4 md:ml-14 gap-4 md:gap-16 p-4 md:p-12">
        <div className="w-full md:w-11/12 max-w-[580px] text-center md:text-left">
          <p className="text-subheading text-blue-500 uppercase mb-4 md:mb-16">
            About Us
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-about-heading text-black uppercase text-center md:text-left">
        Empowering Your Business with Tailored Logistics Solutions
      </p>
          <p className="text-lg mt-4 md:mt-8 text-gray-600">
            We believe in providing our clients with personalized and efficient
            logistics solutions that meet their unique needs. With years of
            experience and a team of experts, we are dedicated to empowering
            your business with seamless shipping experiences.
          </p>
          <button
            className="px-6 md:px-14 py-4 border mt-4 text-white rounded-md uppercase"
            style={{
              borderRadius: "8px",
              background: "#1195D6",
            }}
          >
            Learn More
          </button>
        </div>
        <img
          src={logo1}
          alt="Logo1"
          className="w-full md:w-100 h-100 logo mt-8 md:mt-0"
          style={{
            borderRadius: "6px",
            background: "url(path-to-image), lightgray 50% / cover no-repeat",
          }}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 px-4 md:px-32 py-4 md:py-12">
          <div className="about-card w-full md:w-[367px] h-[160px] gap-3">
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-center flex justify-center items-center text-xl font-bold text-white border border-transparent border-r-white pe-4 border-dashed w-full md:w-[203px] h-[64px]">
              01
            </p>
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-lg font-semibold text-white text-start">
              Expertise and Experience
            </p>
          </div>
          <div className="about-card w-full md:w-[367px] h-[160px] gap-3">
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-center flex justify-center items-center text-xl font-bold text-white border border-transparent border-r-white pe-4 border-dashed w-full md:w-[203px] h-[64px]">
              02
            </p>
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-lg font-semibold text-white text-start">
              Committed to Quality
            </p>
          </div>
          <div className="about-card w-full md:w-[367px] h-[160px] gap-3">
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-center flex justify-center items-center text-xl font-bold text-white border border-transparent border-r-white pe-4 border-dashed w-full md:w-[203px] h-[64px]">
              03
            </p>
            <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase font-family: 'Space Grotesk' text-lg font-semibold text-white text-start">
              Comprehensive Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
