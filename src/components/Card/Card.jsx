import React from "react";
import  "./Card.css";
import logo3 from "../../../src/assets/images/Logo 1.png";


const Card = () => {
  return (


<div className="flex h-[246px] justify-center items-center  px-[70px] "
style={{
     
    background: "#1195D6",
  }}>
 <div className="flex  gap-4 md:gap-8 w-full md:w-[100%] h-auto md:h-[46px] justify-center md:justify-start px-4 md:px-8 py-4 md:py-0" style={{ background: "#1195D6" }}>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={logo3}
          alt={`Logo${index + 1}`}
          className={`w-full md:w-1/5 h-auto md:h-full logo ${index !== 4 ? 'mb-4 md:mb-0 md:mr-4' : ''}`}
        />
      ))}
    </div>
</div>



    


    );
};

export default Card;