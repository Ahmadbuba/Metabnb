import React from "react";
import six from "../../../assests/display/6.png";
import seven from "../../../assests/display/7.png";
import eight from "../../../assests/display/8.png";
import nine from "../../../assests/display/9.png";
import ten from "../../../assests/display/10.png";
import eleven from "../../../assests/display/11.png";
import twelve from "../../../assests/display/12.png";
import thirteen from "../../../assests/display/13.png";
import stars from "../../../assests/display/stars.png";

import Card from "../../../components/UI/Card";

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
  );
};

export default Section3;
