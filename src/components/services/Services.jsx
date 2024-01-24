import React from "react";
import "./Service.css";
import logo2 from "../../../src/assets/images/Icon.png";
 
const Service = () => {
  return (
<>
<div className="outer">
    
<p className="typography ">our services</p>
<p className="heading w-[798px] h-[124px] mt-2 ">Efficient and Reliable Shipping with FastGo</p>
<div className="flex gap-[20px] mt-8">


<div className="card1  w-[367px] h-[340px]  justify-start "
 style={{
    background: "var(--Dark-Blue-2, #121d50)",
  }}>
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start text-white ">Ocean Shipping</p>
<p className="sub-heading justify-start w-[287px] h-[66px] "
style={{
    color: "var(--White, #FFF)",
    
     
  }}
  
>we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>

<div className="card1 w-[367px] h-[340px]  justify-start  bg-white">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Air Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs.  </p>
</div>
<div className="card1 w-[367px] h-[340px]  justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Truck Shipping</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
</div>
<div className="flex gap-[20px]">
<div className="card1 w-[367px] h-[340px] mt-6 justify-start  bg-white">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Custom Clearance</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
<div className="card1 w-[367px] mt-6 h-[340px]  justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Freight Forwarding</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
 
<div className="card1 w-[367px] h-[340px] mt-6 justify-start bg-white ">
<img
          src={logo2}
          alt="Logo2"
          className="w-100 h-100 logo "
        
        />
<p className="text-card justify-start ">Insurance</p>
<p className="sub-heading justify-start ">we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. </p>
</div>
</div>
</div>
</>

    );
};

export default Service;    