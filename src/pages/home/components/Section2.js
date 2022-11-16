import React from "react";
import first from "../../../assests/section2/first.png";
import second from "../../../assests/section2/second.png";
import third from "../../../assests/section2/third.png";

const Section2 = () => {
  return (
    <div className="bg-purple w-100 grid grid-cols-3 font-serif font-bold min-[966px]:text-3xl text-white ">
      <div className="py-2 flex flex-col items-center">
        <img src={first} className="w-full object-contain h-12" />
        <span>MBToken</span>
      </div>
      <div className="py-2 flex flex-col items-center">
        <img src={second} className="w-full object-contain h-12" />
        <span>METAMASK</span>
      </div>
      <div className="py-2 flex flex-col items-center">
        <img src={third} className="w-full object-contain h-12" />
        <span>OpenSea</span>
      </div>
    </div>
  );
};

export default Section2;
