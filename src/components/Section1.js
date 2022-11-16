import React from "react";
import three from "../../src/assests/section1/image 3.png";
import four from "../../src/assests/section1/image 4.png";
import five from "../../src/assests/section1/image 5.png";
import six from "../../src/assests/section1/image 6.png";

// className="pt-6 flex flex-col gap-6 md:flex md:flex-row md:items-start md:ml-32"

const Section1 = () => {
  return (
    <React.Fragment>
      <div className="w-11/12 pt-24 pb-10 max-[470px]:flex max-[470px]:gap-6 flex-col mx-auto grid grid-cols-2  font-red-rose font-normal text-textBlack md:w-10/12">
        <div className="py-4">
          <h2 className=" text-5xl tracking-tight font-medium">
            Rent a <span className="text-purple">Place</span> away from
            <span className="text-purple"> Home</span> in the
            <span className="text-purple"> Metaverse</span>
          </h2>
          <p className="text-2xl py-16">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="mt-6 grid grid-cols-5">
            <input
              placeholder="Search for location"
              type="text"
              className=" col-span-3 border-inputBorderGray border border-r-0 px-3 placeholder:text-placeholderGray placeholder:px-3 "
            />
            <button className="col-span-2 bg-purple py-2 text-white">
              Search
            </button>
          </div>
        </div>
        <div className=" justify-end flex gap-1.5">
          <div className="flex flex-col pt-24">
            <img src={three} className="mt-0.5" />
            <img src={four} className="mt-0.5" />
          </div>
          <div className="flex flex-col">
            <img src={five} className="mt-0.5" />
            <img src={six} className="mt-0.5" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Section1;
