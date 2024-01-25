import React from "react";
import logo from "../../../src/assets/images/Group.png";

const Navbar = () => {
  return (
    <header className="p-3">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div
          className="flex lg:border lg:border-transparent lg:border-r-white lg:pe-6 lg:border-dashed nav"
          style={{
            color: "var(--Dark-Blue-2, #090E23)",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "bold",
            lineHeight: "100%",
            letterSpacing: "1.04px",
            fontFamily: "Space Grotesk",
          }}
        >
          <p
            className=""
            style={{
              borderRight: "2px dotted gray",
              paddingRight: "5px",
              marginRight: "5px",
            }}
          >
            massshipping@mail.com
          </p>
          <p className="">+1 (333) 000-0000</p>
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
