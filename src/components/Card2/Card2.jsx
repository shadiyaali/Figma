import React from "react";
import "./Card2.css";
import logo7 from "../../../src/assets/images/Icon2.png";

const Card2 = () => {
  return (
    <div className="outer-pic bg-cover-background text-white text-center flex flex-col justify-center items-center">
      <p className="typo">
        See it in Action
      </p>
      <p className="sub-text text-base font-normal mb-20 ">
        Watch Our Video to Get a Clear Understanding of How It Works
      </p>
      <img src={logo7} alt="Logo7" className="play-icon mb-20" />
    </div>
  );
};

export default Card2;
