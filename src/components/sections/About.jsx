import React from "react";
import logo1 from "../../assets/images/Image.png";

const About = () => {
  return (
    <>
      <div className="md:p-[7rem]">
      <div className="w-full gap-[1rem] px-[7rem] pl-[4rem] pr-[4rem] grid grid-cols-2 place-content-center md:px-19">
  <div className="text-center md:text-left">
    <p
      className="text-[color:var(--Blue-1,#0E33CB)] pt-6 text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
      style={{ fontFamily: "Space Grotesk" }}
    >
      About Us
    </p>
    <p
      className="text-[color:var(--Dark-Blue-1,#121D50)] mt-6 text-[48px] not-italic font-bold leading-[130%] uppercase"
      style={{ fontFamily: "Space Grotesk" }}
    >
      Empowering Your <br /> Business with Tailored <br /> Logistics Solutions
    </p>

    <p
      className="text-[18px] font-normal leading-[140%] md:mt-8 text-[color:var(--Grey-2,#5C6C7B)]"
      style={{ fontFamily: "Roboto" }}
    >
      We believe in providing our clients with personalized and efficient
      <br />
      logistics solutions that meet their unique needs. With years of
      <br />
      experience and a team of experts, we are dedicated to empowering
      your <br />
      business with seamless shipping experiences.
    </p>
    <button
      className="flex mt-6 items-start gap-[10px] px-[54px] py-[18px] rounded-[8px]"
      style={{
        borderRadius: "8px",
        background: "#1195D6",
      }}
    >
      <p
        className="text-[color:var(--White,#FFF)] text-[18px] not-italic font-normal leading-[100%] tracking-[1.71px] uppercase"
        style={{
          background: "#1195D6",
        }}
      >
        Learn More
      </p>
    </button>
  </div>
  <img
    src={logo1}
    alt="Logo1"
    className="w-full h-full logo mt-8 md:mt-0"
    style={{
      borderRadius: "12px",
      maxWidth: "90%",
      background: "url(path-to-image), lightgray 50% / cover no-repeat",
    }}
  />
</div>


        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col md:flex-row px-[7rem] pl-[4rem] pr[4rem] pt-[8rem]  md:gap-8  ">
          <div className="flex justify-center items-center rounded-[12px]" style={{ background: "var(--Dark-Blue-2, #090e23)" }}>
  <p className="text-[color:var(--White,#FFF)] not-italic  leading-[130%] uppercase text-center flex justify-center items-center text-[48px] font-bold text-white   pe-2 border-dashed" style={{ fontFamily: 'Space Grotesk', padding: "48px 39px 48px 40px" }}>
    01
  </p>
  <div className="flex h-[6rem] items-center ">
                <div className="border border-white  h-3/5 border-dashed"></div>
              </div>
  <p className="text-[color:var(--White,#FFF)] p-8 not-italic leading-[130%] uppercase text-[25px] font-semibold text-white text-start" style={{ fontFamily: 'Space Grotesk' }}>
    Expertise and Experience
  </p>
</div>

            <div
              className="flex justify-center items-center   rounded-[12px]
 "
              style={{ background: "var(--Dark-Blue-2, #090e23)" }}
            >
              <p className="text-[color:var(--White,#FFF)]  not-italic leading-[130%] uppercase  text-center flex justify-center items-center text-[48px] font-bold text-white   pe-4 border-dashed  "style={{ fontFamily: 'Space Grotesk' ,padding: "48px 39px 48px 40px"}}>
                2
              </p>
              <div className="flex h-[6rem] items-center ">
                <div className="border border-white h-3/5 border-dashed"></div>
              </div>
              <p className="text-[color:var(--White,#FFF)] p-8 not-italic leading-[130%] uppercase text-[25px] font-semibold text-white text-start"style={{ fontFamily: 'Space Grotesk' }}>
              Committed to Quality
              </p>
            </div>
            <div
              className="flex justify-center items-center   rounded-[12px]
 "
              style={{ background: "var(--Dark-Blue-2, #090e23)" }}
            >
              <p className="text-[color:var(--White,#FFF)] not-italic leading-[130%] uppercase  text-center flex justify-center items-center text-[48px] font-bold text-white   pe-4 border-dashed  "style={{ fontFamily: 'Space Grotesk' ,padding: "48px 39px 48px 40px"}}>
                3
              </p>
              <div className="flex h-[6rem]  items-center ">
                <div className="border border-white h-3/5 border-dashed"></div>
              </div>
              <p className="text-[color:var(--White,#FFF)] p-8 not-italic leading-[130%] uppercase text-[25px] font-semibold text-white text-start"style={{ fontFamily: 'Space Grotesk' }}>
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
