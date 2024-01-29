import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Header = () => {
  return (
    <header
  className="inline-flex w-full justify-center items-center px-4 md:px-8 pt-2 md:pt-3 pb-2 md:pb-3"
  style={{ background: "var(--Dark-Blue-1, #121D50)" }}
    >
      <div className="flex justify-between items-center gap-[33rem] pr-[1rem]">
        <div>
          <img src={logo} alt="Logo" className="w-full  " />
        </div>
        <nav>
        <ul className="flex flex-wrap space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10">
            <li>
              <a
                href="#"
                className="text-[#1195D6] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase"
                style={{ fontFamily: "Space Grotesk" }}
              >
                home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[color:var(--White,#FFF)] text-[14px]  not-italic font-medium leading-[100%] tracking-[1.33px] uppercase
  
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                about us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[color:var(--White,#FFF)] text-[14px] not-italic font-medium leading-[100%] tracking-[1.33px] uppercase;
  
  "
                style={{ fontFamily: "Space Grotesk" }}
              >
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
