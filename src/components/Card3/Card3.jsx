import React from "react";
import  "./Card3.css";
import logo8 from "../../../src/assets/images/pic.png"; 
import logo9 from "../../../src/assets/images/Star 5.png"; 

const Card3 = () => {
    const numberOfImages = 5; 
  return (

<div className=" outer-layer " >
<div className="  text-heading-outer w-[506px] h-[156px]">  
<p className="sub-head ">Testimonials</p>
<p className="sub-text-head mr-40 w-[506px] h-[124px]  "> Our Clients Speak for Us</p>
 
<img
          src={logo8}
          alt="Logo8"
          className="w-[543px] h-[368px]rounded mt-4"
          style={{
            borderRadius: "6px",
            background: "url(path-to-image), lightgray 50% / cover no-repeat",
          }}
        
        />  
       <div className="box-last w-[506px] h-[282px] mt-4  flex gap-4">
      <div className="w-[190px] h-[38px] flex ">
        {[...Array(numberOfImages)].map((_, index) => (
          <img
            key={index}
            src={logo9}
            alt={`Logo9-${index + 1}`}
            className="w-[38px] h-[38px] mt-8 "
          />
        ))}
      </div>
      <div className="w-[422px] h-[110px] mb-20  ">
        <p className="para text-white mt-6">
          I have been using FastGo cargo logistic & transportation services
          for over a year now and I am extremely satisfied with their service.
          They are efficient, reliable, and always deliver on time. I highly
          recommend them to anyone in need of logistics services.
        </p>
        <p className="header-head  mt-6 w-[283px] h-[18px]  "> Our Clients Speak for Us</p>
      </div>
    </div>
     
    
    
    
  </div>
  </div>  

    


    );
};

export default Card3;