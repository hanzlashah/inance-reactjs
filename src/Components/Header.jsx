import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMailMinus } from "react-icons/lu";

function Header() {
  return (
    <>
      <div className=" bg-black text-white flex-col md:flex-row flex gap-y-2 md:gay-y-[0vw] justify-between px-[1vw] py-[1vw] items-center">
        <p className="flex gap-x-[12px] md:gap-x-[1vw] lg:gap-x-[1vw] items-center font-sans">
          <FaPhoneAlt className="h-[15px] w-[15px] md:w-[2vw] md:h-[2vw] lg:w-[1vw] lg:h-[1vw] text-[#ff8a1d]" />
          <span className="text-[15px] md:text-[1.5vw] lg:text-[1vw] ">
            Call : +01 123455678990
          </span>
        </p>
        <p className="flex gap-x-[12px] md:gap-x-[1vw] lg:gap-x-[1vw] items-center font-sans">
          <LuMailMinus className="h-[15px] w-[15px] md:w-[2vw] md:h-[2vw] lg:w-[1vw] lg:h-[1vw] text-[#ff8a1d]" />

          <span className="text-[15px] md:text-[1.5vw] lg:text-[1vw]">
            Email : demo@gmail.com
          </span>
        </p>
      </div>
    </>
  );
}

export default Header;
