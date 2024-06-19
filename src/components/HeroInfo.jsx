import React from "react";
import { IoStatsChartOutline } from "react-icons/io5";
const HeroInfo = ({ text, title, titleStyle, textStyle }) => {
  return (
    <>
      <div className="boxbg py-32 text-center">
        <h1 style={titleStyle} className="text-5xl text-white font-semibold">
          {title}
        </h1>
        <p
          style={textStyle}
          className="text-2xl text-center font-medium text-white sm:text-sm md:text-lg p-6"
        >
          {text}
        </p>
      </div>
      <div className="bg-white px-5 body-font">
        <div className="container mx-auto flex flex-wrap p-5 sm:pt-14 pt-10 justify-between items-center">
          <span className="ml-3 text-xl">805 Listings</span>

          <button className="inline-flex items-center rounded-2xl px-10 bg-gray-100 border-0 py-1  focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
            Filter
            <IoStatsChartOutline className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroInfo;
