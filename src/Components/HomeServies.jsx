import React from "react";
import professional_img from "../../src/assets/professional_img.png";

function HomeServies() {
  return (
    <>
      <div className="bg-[#d1e3ff]  ">
        <div
          className="flex justify-around flex-col md:flex-row items-center px-[20px] md:px-[10vw] py-[10vw] gap-y-4 gap-x-0 md:gap-x-[3vw] 
      "
        >
          <div className=" w-[100%] md:w-[30vw] hidden md:flex items-end">
            <img src={professional_img} className="h-[100%] md:h-[37.5vw]" />
          </div>
          <div className="px-[0px] md:px-[1vw] w-[90%] md:w-[40vw] ">
            <h2 className=" md:text-[2vw] lg:text-[2vw] text-[#0355cc] font-sans font-[700] pb-[20px] md:pb-[1.5vw] uppercase">
              We Provide Professional <br />
              Home Services.
            </h2>
            <p className="text-[13px] md:text-[1vw] pb-[20px] md:pb-[1.5vw] ">
              randomised words which don't look even slightly believable. If you
              are going to <br />
              use a passage of Lorem Ipsum, you need to be sure there isn't
              anything <br />
              embarrassing hidden in the middle of text. All randomised words
              which don't <br />
              look even slightly
            </p>
            <button className="py-[10px] md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-[#ff8a1d] bg-[#ff8a1d] border-transparent hover:border-[#ff8a1d] border text-[14px] md:text-[1vw]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeServies;
