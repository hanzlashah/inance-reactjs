import React from "react";
import about_img from "../../src/assets/about-img.jpg";

function AboutUs() {
  return (
    <div className="md:flex  w-[70vw] mx-auto justify-center items-center mb-[100px] md:mb-[8vw]">
      <div className="w-[100%] md:w-[30vw] pr-[3vw] mb-[60px] md:mb-[0vw]">
        <h2 className="md:text-[2vw] lg:text-[2vw] text-black uppercase font-sans font-[700] pb-[20px] md:pb-[1.5vw]">
        About us

        </h2>
        <p className="text-[13px] md:text-[1vw] pb-[20px] md:pb-[1.5vw] ">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised


        </p>
        <button className="py-[10px] md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-blue-600 bg-blue-600 border-transparent hover:border-blue-600 border text-[14px] md:text-[1vw]">
        Read More
        </button>
      </div>
      <div className="w-[100%] md:w-[40vw] bg-red-400">
        <img src={about_img} className="md:w-[40vw] md:h-[30vw]" />
      </div>
    </div>
  );
}

export default AboutUs;
