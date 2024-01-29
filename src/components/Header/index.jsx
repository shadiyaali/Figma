import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Header = () => {
  return (
    <header className="inline-flex w-full justify-center items-center  pl-[150.301px] pr-[148.452px] pt-[15.298px] pb-[14.929px]"style={{background: "var(--Dark-Blue-1, #121D50)"}}>
      <div className="flex justify-between items-center">
      <div>
          <img src={logo} alt="Logo" className="w-full " />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-[#1195D6] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"style={{fontFamily: "Space Grotesk"}}
 
  >
                home
              </a>
            </li>
            <li>
              <a href="#" className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "style={{fontFamily: "Space Grotesk"}}>
                about us
              </a>
            </li>
            <li>
              <a href="#" className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "style={{fontFamily: "Space Grotesk"}}>
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "style={{fontFamily: "Space Grotesk"}}>
                GALLERY
              </a>
            </li>
            <li>
              <a href="#" className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "style={{fontFamily: "Space Grotesk"}}>
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
