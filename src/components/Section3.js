import React, { Fragment } from "react";
import six from "../../src/assests/display/6.png";
import seven from "../../src/assests/display/7.png";
import eight from "../../src/assests/display/8.png";
import nine from "../../src/assests/display/9.png";
import ten from "../../src/assests/display/10.png";
import eleven from "../../src/assests/display/11.png";
import twelve from "../../src/assests/display/12.png";
import thirteen from "../../src/assests/display/13.png";
import stars from "../../src/assests/display/stars.png";

import Card from "./UI/Card";

const Section3 = () => {
  const photos = [six, seven, eight, nine, ten, eleven, twelve, thirteen];

  return (
    <React.Fragment>
      <h2 className="text-center font-red-rose font-bold text-black text-5xl pt-10 pb-1">
        Inspiration for your next adventure
      </h2>
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-8">
        {photos.map((photo) => (
          <Card>
            <img src={photo} className="object-cover w-full" />
            <div className="flex justify-between">
              <div className="p-1">
                <p className="tracking-tight">Desert king</p>
                <p className="tracking-tight">2345km away</p>
              </div>
              <div className="p-1">
                <h2 className="text-right tracking-tight">1MBT per night</h2>
                <p className="tracking-tight">available for 2weeks stay</p>
              </div>
            </div>
            <div className="py-1">
              <img src={stars} />
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
    // <div className="mt-2 w-11/12 mx-auto grid grid-cols-2 gap-2 md:grid-cols-4 md:w-10/12">
    //   <img alt="six" src={six} className="w-full object-cover" />
    //   <img alt="seven" src={seven} className="w-full object-cover" />
    //   <img alt="eight" src={eight} className="w-full object-cover" />
    //   <img alt="nine" src={nine} className="w-full object-cover" />
    //   <img alt="ten" src={ten} className="w-full object-cover" />
    //   <img alt="eleven" src={eleven} className="w-full object-cover" />
    //   <img alt="eleven" src={twelve} className="w-full object-cover" />
    //   <img alt="eleven" src={thirteen} className="w-full object-cover" />
    // </div>
  );
};

export default Section3;
