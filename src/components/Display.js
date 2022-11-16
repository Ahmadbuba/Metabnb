import React, { Fragment } from "react";
import one from "../assests/display/1.png";
import two from "../assests/display/2.png";
import three from "../assests/display/3.png";
import four from "../assests/display/4.png";
import five from "../assests/display/5.png";
import six from "../assests/display/6.png";
import seven from "../assests/display/7.png";
import eight from "../assests/display/8.png";
import nine from "../assests/display/9.png";
import ten from "../assests/display/10.png";
import eleven from "../assests/display/11.png";
import twelve from "../assests/display/12.png";
import thirteen from "../assests/display/13.png";
import fourteen from "../assests/display/14.png";
import fifteen from "../assests/display/15.png";
import sixteen from "../assests/display/16.png";
import stars from "../assests/display/stars.png";
import Card from "./UI/Card";

const Display = () => {
  const photos = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
  ];

  return (
    <React.Fragment>
      <div className="w-11/12 pb-20 mx-auto grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:w-10/12">
        {photos.map((photo) => (
          <Card>
            <img src={photo} className=" w-full object-cover" />
            <div className=" py-1 flex justify-between">
              <p className=" tracking-tighter">Desert king</p>
              <h2 className="tracking-tighter">1MBT per night</h2>
            </div>

            <div className=" py-1 flex justify-between">
              <p className="tracking-tighter">2345km away</p>
              <p className="tracking-tighter">available for 2weeks stay</p>
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

export default Display;
