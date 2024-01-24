import React from "react";
import  "./Forms.css"; 
import logo0 from "../../../src/assets/images/Icon.png";

const Form = () => {
  return (
    <div className=" mt-12 w-3/4 ml-20  gap-[5rem] p-5  grid grid-cols-2 place-content-center  md:px-20">
      {/* Left Section */}
      <div className="flex-[0.5]  p-3 flex flex-col justify-between items-center">
        <div className="box-last w-full flex flex-col  justify-start">
          <p className="sub-head text-blue-500">Contact Us</p>
          <p className="sub-text-head text-start w-[481px] h-[186px]">
          Take the First Step <br/> to Streamlined <br/> Shipping
          </p>
          <div className="flex text-start justify-start">
          <div className="w-[437px]  flex h-[106px] ">
          <img
              src={logo0}
              alt="Logo0"
              className=" w-[106px] h-[106px] logo"
            />
            <div className="w-[287px] h-[59px] text-start mt-6 ml-8 ">
                <p className="text-md"> call us</p>
                <p className="typo-text"> +2 333 000-0000</p>
            </div>
         

          </div>
        </div> 
        <div className="dotted-line border text-start bg-gray-300 border-dashed justify-start "></div>
        </div>
        <div className="box-last w-full flex flex-col  justify-start">
           
          <div className="flex text-start justify-start">
          <div className="w-[437px]  flex h-[106px]  ">
          <img
              src={logo0}
              alt="Logo0"
              className=" w-[106px] h-[106px] logo"
            />
            <div className="w-[287px] h-[59px] text-start mt-6 ml-8 ">
                <p className="text-md"> Email </p>
                <p className="typo-text"> massshipping@mail.com</p>
            </div>
         

          </div>
        </div> 
        <div className="dotted-line border text-start bg-gray-300 border-dashed justify-start "></div>
        </div>
        <div className="box-last w-full flex flex-col  justify-start">
           
          <div className="flex text-start justify-start">
          <div className="w-[437px]  flex h-[106px]  ">
          <img
              src={logo0}
              alt="Logo0"
              className=" w-[106px] h-[106px] logo"
            />
            <div className="w-[287px] h-[59px] text-start mt-6  ml-8 ">
                <p className="text-md"> Office</p>
                <p className="typo-text"> Anywhere Street, NY</p>
            </div>
         

          </div>
        </div> 
        
        </div>
        </div>  
        <div className="bg-gray-200 ml-12 rounded-lg w-[590px] h-[690px] mt-8">
            <div className="flex-col text-start mt-12 ml-20">
                 <p className=" typo1 w-[295px] h-[32px]  ">Request a Quote Today</p>
                 <div className="w-[424px] h-[57px] mt-12">
                    <p className="name-text ">Your Name</p>
                    <button className="form  px-14 py-4 border w-[30]  mt-4  text-gray-400 rounded-md "
          style={{
            borderRadius: "8px",

          }}>
            Ex: Jhon Dee
          </button>
                 </div>
                 <div className="w-[424px] h-[57px] mt-14 ">
                    <p className="name-text mb-4">Email Address</p>
                    <button className="form  border w-[30] mt-4 mb-20 text-gray-400 rounded-md  "
          style={{
            borderRadius: "8px",

          }}>
           Ex: jhondee@gmail.com
          </button>
                 </div>
                 <div className="w-[424px] h-[57px] mt-14 ">
                    <p className="name-text">Phone</p>
                    <button className="form  px-14 py-4 border w-[30] mt-4 text-gray-400 rounded-md  "
          style={{
            borderRadius: "8px",

          }}>
            Ex: +1 (333) 000-0000
          </button>
                 </div>
                 <div className="w-[424px] h-[57px] mt-14">
                    <p className="name-text">Message</p>
                    <button className="form  px-14 py-4 border w-[30] mt-4  text-gray-400 rounded-md  "
          style={{
            borderRadius: "8px",

          }}>
            Ex: +1 (333) 000-0000
          </button>
                 </div>
                 <button className="  px-14 py-4 border   mt-14 text-white rounded-md uppercase "
          style={{
            borderRadius: "8px",background: "#1195D6",fontFamily: "Space Grotesk",

          }}>
            submit
          </button>     
            </div>
            
         </div>
        
        </div> 
  );
};

export default Form;
