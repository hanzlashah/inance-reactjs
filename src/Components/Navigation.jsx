import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";


function Navigation() {
  return (
    <div className="py-[15px] md:py-[1vw] lg:py-[.5vw] mb-[2vw]">
      <ul className="flex justify-between px-[2vw] items-center font-sans font-[400]">
        <li className="text-[15px] md:text-[1.5vw] lg:text-[1vw]">
          <a href="#">Inance</a>
        </li>
        <div className="hidden lg:flex gap-x-[1vw] items-center ">
          <li className="text-[15px] md:text-[1.5vw] lg:text-[1vw]" >
            <a href="#">Home</a>
          </li>
          <li className="text-[15px] md:text-[1.5vw] lg:text-[1vw]">
            <a href="#">About</a>
          </li>
          <li className="text-[15px] md:text-[1.5vw] lg:text-[1vw]">
            <a href="#">Services</a>
          </li>
          <li className="text-[15px] md:text-[1.5vw] lg:text-[1vw]">
            <a href="#">Contact Us</a>
          </li>
        </div>
        <li className="block lg:hidden"><a href="#"><RxHamburgerMenu />
        </a></li>
      </ul>
    </div>
  );
}

export default Navigation;
