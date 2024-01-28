import React from "react";
import logo1 from "../../assets/images/Image.png";
 

const About = () => {
  return (
    <>
    <div className="md:p-[6rem]">
  <div className=" w-full  gap-[5rem] p-[5rem]  grid grid-cols-2 place-content-center  md:px-19">
    <div className=" text-center md:text-left">
      <p className="text-[color:var(--Blue-1,#0E33CB)]  pt-6 text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase" style={{ fontFamily: "Space Grotesk" }}>
        About Us
      </p>
      <p className=" text-[color:var(--Dark-Blue-1,#121D50)] mt-8 text-[45px] not-italic font-bold leading-[130%] uppercase" style={{ fontFamily: "Space Grotesk" }}>
        Empowering Your<br /> Business with Tailored <br/> Logistics Solutions
      </p>
      

          <p className="text-[18px]font-normal  leading-[140%] md:mt-8 text-[color:var(--Grey-2,#5C6C7B)]"style={{ fontFamily: "Roboto" }}>
            We believe in providing our clients with personalized and efficient<br/>
            logistics solutions that meet their unique needs. With years of<br/>
            experience and a team of experts, we are dedicated to empowering your <br/>
             business with seamless shipping experiences.
          </p>
          <button
            className="flex mt-6 items-start gap-[10px] px-[54px] py-[18px] rounded-[8px];
            "
            style={{
              borderRadius: "8px",
              background: "#1195D6",
            }}
          >
            <p className="text-[color:var(--White,#FFF)] text-[18px] not-italic font-normal leading-[100%] tracking-[1.71px] uppercase
 
  "style={{
    
    background: "#1195D6",
  }}>Learn More</p>
          </button>
        </div>
        <img
          src={logo1}
          alt="Logo1"
          className="w-full h-full  logo mt-8 md:mt-0"
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
      </div>
    
    </>
  );
};

export default About;
