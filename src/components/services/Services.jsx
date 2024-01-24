import React from "react";
import "./Service.css";
import logo2 from "../../../src/assets/images/Icon.png";
 
const Service = () => {
  return (
<>
<div className="outer">
    
<p className="typography gap-[68px] ">our services</p>
<p className="heading w-[798px] h-[124px] mb-4 ">Efficient and Reliable Shipping with FastGo</p>
<div className="flex gap-[20px]">


<div className="card1 w-[367px] h-[340px]  justify-start "
 style={{
    background: "var(--Dark-Blue-2, #121d50)",
  }}>
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start text-white ">Ocean Shipping</p>
<p className="sub-heading justify-start text-white">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>

<div className="card1 w-[367px] h-[340px]  justify-start  bg-white">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Ocean Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
<div className="card1 w-[367px] h-[340px]  justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Ocean Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
</div>
<div className="flex gap-[20px]">
<div className="card1 w-[367px] h-[340px]  justify-start  bg-white">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Ocean Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
<div className="card1 w-[367px] h-[340px]  justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Ocean Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
 
<div className="card1 w-[367px] h-[340px]  justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Ocean Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
</div>
</div>
</>

    );
};

export default Service;    