import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-blue-950 h-[550px] md:h-[40vw] py-[2vw]">
        <h2 className=" md:text-[2vw] lg:text-[2vw] mt-[20px] md:mt-[0vw] text-white text-center font-sans font-[700] pb-[20px] md:pb-[1.5vw] uppercase mb-[10px] md:mb-[3vw]">
          Get In Touch
        </h2>

        <div className=" md:flex bg-orange-400 justify-between w-[90%] md:w-[60vw] mx-auto">
          <div className="w-[100%] bg-pink-400 md:w-[20vw]  border-b-0 md:border-b-[.1vw] relative ">
            <div className=" bg-red-400  lg:-ml-4  h-[30px] w-[30px]  md:w-[4vw] md:h-[4vw] absolute top-[20px] md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <IoLocationSharp className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[50px] md:mt-[2vw] md:-ml-[4vw] lg:text-[1.2vw]  absolute top-6 text-white  font-sans font-[400]  ">
              Lorem Ipsum is simply dummy text
            </h2>
          </div>
          <div className="w-[100%] md:w-[20vw] flex justify-start md:justify-center border-b-0  md:border-b-[.1vw] relative ">
            <div className=" bg-red-400  h-[30px] w-[30px] lg:-ml-4 md:w-[4vw] top-[110px] md:h-[4vw] absolute md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <FaPhoneAlt className="h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[2vw] md:-ml-[4vw] lg:text-[1.2vw]  absolute top-36  md:top-6 text-white  font-sans font-[400]  ">
              +02 1234567890{" "}
            </h2>
          </div>
          <div className="w-[100%] md:w-[20vw] flex justify-start  md:justify-end border-b-0  md:border-b-[.1vw] relative ">
            <div className=" bg-red-400  lg:-ml-4 h-[30px] w-[30px] md:w-[4vw] md:h-[4vw] absolute top-[200px] md:-top-[2vw] lg:-top-[2vw] rounded-full flex items-center justify-center">
              <MdOutlineEmail className="h-[15px] w-[15px]     md:w-[2vw] md:h-[2vw] lg:w-[2vw] lg:h-[2vw] text-white " />
            </div>
            <h2 className=" md:text-[1.2vw] mt-[1vw] md:-mr-[2vw] lg:text-[1.2vw]  absolute top-60 md:top-6 text-white  font-sans font-[400] ">
              demo@gmail.com 
            </h2>
          </div>
        </div>

        <div className=" w-[100%] h-auto mt-[300px] md:mt-[0vw] md:h-[10vw] ">
          <h2 className=" md:text-[2vw]  mt-[8vw] mb-[5vw] text-center lg:text-[2vw]  text-white  font-sans font-[600] capitalize  ">
            Follow Us
          </h2>
          <div className="flex w-[100px] justify-between md:w-[8vw] gap-[.5vw] mx-auto mb-[3vw] bg-white border">
            <RiFacebookFill className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] text-blue-800 " />
            <FaTwitter className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] text-blue-800 " />
            <FaYoutube className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] text-blue-800  " />
            <FaInstagram className=" h-[15px] w-[15px]    md:w-[2vw] md:h-[2vw] lg:w-[1.5vw] lg:h-[1.5vw] text-blue-800 " />
          </div>
          <hr className="w-[70vw] mx-auto" />
          <p className=" md:text-[1vw]  mt-[6vw] mb-[60px] md:mb-[6vw] text-center lg:text-[1vw]  text-white  font-sans font-[400] capitalize  ">
            © 2024 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
