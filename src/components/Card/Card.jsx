import React from "react";
import logo3 from "../../../src/assets/images/Logo 1.png";


const Card = () => {
  return (


<div className="flex h-[246px] justify-center items-center shrink-0 px-[190px] "
style={{
     
    background: "#1195D6",
  }}>
 <div className="flex  w-full   justify-center " style={{ background: "#1195D6" }}>
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