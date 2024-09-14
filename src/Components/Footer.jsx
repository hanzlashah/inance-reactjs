import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-blue-950 h-[400px] md:h-[20vw] py-[2vw]">
        <h2 className=" md:text-[2vw] lg:text-[2vw]  text-white text-center font-sans font-[700] pb-[20px] md:pb-[1.5vw] uppercase mb-[10px] md:mb-[3vw]">
          Get In Touch
        </h2>

        <div className=" flex bg-orange-400 justify-between w-[90%] md:w-[60vw] mx-auto">
          <div className="w-[100%] md:w-[20vw]  border-b-0 md:border-b-[.1vw] relative ">
            <div className=" bg-red-400  lg:-ml-4 h-[40px] w-[40px] md:w-[4vw] md:h-[4vw] absolute md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <IoLocationSharp className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[2vw] -ml-[4vw] lg:text-[1.2vw]  absolute top-6 text-white  font-sans font-[400]  ">
              Lorem Ipsum is simply dummy text
            </h2>
          </div>
          <div className="w-[20vw] flex justify-center  border-b-[.1vw] relative ">
            <div className=" bg-red-400  lg:-ml-4 w-[4vw] h-[4vw] absolute md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <FaPhoneAlt className="h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[2vw] -ml-[4vw] lg:text-[1.2vw]  absolute top-6 text-white  font-sans font-[400]  ">
              +02 1234567890{" "}
            </h2>
          </div>
          <div className="w-[20vw] flex justify-end  border-b-[.1vw] relative ">
            <div className=" bg-red-400  lg:-ml-4 w-[4vw] h-[4vw] absolute md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <MdOutlineEmail className="h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[1vw] -mr-[2vw] lg:text-[1.2vw]  absolute top-6 text-white  font-sans font-[400] ">
              demo@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
