import React from "react";
import "./Work.css";
import logo4 from "../../../src/assets/images/bg-1.png";
import logo5 from "../../../src/assets/images/Icon.png";

const Works = () => {
  return (
  <>
  <div className="top-most">
    <div className=" flex items-center ">
      <img
        src={logo4}
        alt="Logo1"
        className="w-full h-100 logo mb-20 mt-[92px] ml-[125px]"
        style={{
          borderRadius: "6px",
          background: "url(path-to-image), lightgray 50% / cover no-repeat",
        }}
      />
      <div className="mt-16">
        <p className="text-first mb-4">How It Works</p>
        <p className="heading text-center mb-4">Simplify Your Shipping Experience with Our Easy Step Process</p>
        <p className="sub-heading    text-gray-600">
          We believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.
        </p>
      </div>
      
    </div>
    <div className="dotted-line border  gap-[62px] bg-gray-300 border-dashed"></div> 
     <div className="icon-outer justify-start flex gap-[119px] mt-20 w-[1099px] h-[349px] ">
     <div className="w-[287px] h-[345px] ">
     
    <img
          src={logo5}
          alt="Logo5"
          className=" icon-box mt-10 ml-20 justify-center w-100 h-100 logo  "
        
        />
         <p className="heading-text mt-8">Request a Quote</p>
         <p className="sub-text mt-8">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
<div className="w-[287px] h-[345px]  ">
     
    <img
          src={logo5}
          alt="Logo5"
          className=" icon-box mt-10 ml-20 justify-center w-100 h-100 logo  "
        
        />
         <p className="heading-text mt-8">Request a Quote</p>
         <p className="sub-text mt-8">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
<div className="w-[287px] h-[345px] ">
     
    <img
          src={logo5}
          alt="Logo5"
          className=" icon-box mt-10 ml-20 justify-center w-100 h-100 logo  "
        
        />
         <p className="heading-text mt-8">Request a Quote</p>
         <p className="sub-text mt-8">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>

    </div>
    </div>
    </>
  );
};

export default Works;
