import React from "react";
import  "./Card.css";
import logo3 from "../../../src/assets/images/Logo 1.png";


const Card = () => {
  return (


<div className="card-center">
  <div className="flex w-205px] h-[44px]">

    {[...Array(5)].map((_, index) => (
      <img
        key={index}
        src={logo3}
        alt={`Logo${index + 1}`}
        className={`w-100 h-100 logo ${index !== 4 ? 'mr-4' : ''}`}
      />
    ))}
  </div>
</div>



    


    );
};

export default Card;