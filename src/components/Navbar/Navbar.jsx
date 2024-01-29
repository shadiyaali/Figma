import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Navbar = () => {
  return (
    <header className="px-6 sm:px-6 md:px-8 lg:px-40 py-3">
      <div className="mx-auto flex flex-col sm:flex-row justify-between items-center sm:pr-4 lg:pr-6 sm:pl-4 lg:pl-6">
        <div className="flex lg:border lg:border-transparent lg:border-r-white pr-4 lg:border-dashed nav">
          <p
            className="text-[color:var(--Dark-Blue-2,#090E23)] p-3 text-sm sm:text-base md:text-lg lg:text-xl not-italic font-semibold leading-[100%] tracking-[1.04px]"
            style={{ fontFamily: "Space Grotesk", borderRight: "2px dotted gray" }}
          >
            massshipping@mail.com
          </p>
          <p className="text-[color:var(--Dark-Blue-2,#090E23)] p-3 text-sm sm:text-base md:text-lg lg:text-xl not-italic font-semibold leading-[100%] tracking-[1.04px]" style={{ fontFamily: "Space Grotesk" }}>+1 (333) 000-0000</p>
        </div>
        <nav className="mt-2 lg:mt-0">
          <ul className="flex space-x-4">
          <button
              className="px-14 py-4 border mt-2 lg:mt-0 text-white rounded-md uppercase"
              style={{
                borderRadius: "8px",
                background: "#1195D6",
              }}
            >
              Get Quote
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
