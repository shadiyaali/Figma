import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Navbar = () => {
  return (
    <header className="px-[7rem] py-4">
      <div className=" mx-auto flex flex-col pr-[8rem] pl-[5rem] px-[4rem] lg:flex-row justify-between items-center">
        <div
          className="flex lg:border lg:border-transparent lg:border-r-white pr-[2rem] lg:border-dashed nav"
          
        >
          <p
            className="text-[color:var(--Dark-Blue-2,#090E23)] pr-6 p-3 text-[16px] not-italic font-medium leading-[100%] tracking-[1.04px]"style={{ fontFamily: "Space Grotesk",borderRight: "2px dotted gray",}}
           
          >
            massshipping@mail.com
          </p>
          <p className="text-[color:var(--Dark-Blue-2,#090E23)] p-3 text-[16px] not-italic font-medium leading-[100%] tracking-[1.04px]"style={{ fontFamily: "Space Grotesk"}}>+1 (333) 000-0000</p>
        </div>
        <nav className="mt-2 lg:mt-0">
          <ul className="flex space-x-4">
            <button
              className="inline-flex items-start gap-[10px] px-[54px] py-[18px] rounded-[8px]"style={{background: "#1195d6"}}
              
            >
             <p className="text-[color:var(--White,#FFF)] text-[18px] not-italic font-medium leading-[100%] tracking-[1.71px] uppercase
 
  "style={{fontFamily: "Space Grotesk"}}>Get Quote</p> 
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
