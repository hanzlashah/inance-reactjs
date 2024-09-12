import React from "react";
import Navigation from "../Components/Navigation";
import slider_img from "../assets/slider_img.png";
import s1 from "../../src/assets/s1.png";

function Hero() {
  return (
    <>
      <div className="bg-[#d1e3ff]   ">
        <Navigation />
        <div className="flex justify-around flex-col md:flex-row items-center px-[20px] md:px-[10vw] gap-y-4 gap-x-0 md:gap-x-[5vw] 
       mb-[30px] md:-mb-[5vw] lg:-mb-[6vw]">
          <div className="px-[0px] md:px-[1vw] w-[90%] md:w-[40vw] ">
            <h2 className="md:text-[2vw] lg:text-[2vw] text-[#0355cc] font-sans font-[700] pb-[20px] md:pb-[1.5vw]">
              Repair and <br />
              Maintenance <br />
              Services
            </h2>
            <p className="text-[13px] md:text-[1vw] pb-[20px] md:pb-[1.5vw] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              harumvoluptatem <br />
              adipisci. Quos molestiae saepe dicta nobis pariatur, tempora
              iusto,ad possimus soluta
              <br />
              hic praesentium mollitia consequatur beatae, aspernatur culpa.
            </p>
            <button className="py-[10px] md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-[#ff8a1d] bg-[#ff8a1d] border-transparent hover:border-[#ff8a1d] border text-[14px] md:text-[1vw]">
              Contact Us
            </button>
          </div>
          <div className=" w-[100%] md:w-[20vw] flex items-end">
            <img src={slider_img} className="h-[100%] md:h-[37.5vw]" />
          </div>
        </div>
      </div>
      {/* <div className="bg-red-400 ">
      <div className="bg-blue-400">
      asda
      </div>

    </div> */}
      <div className="mb-[100px] md:mb-[5vw] ">
        <div className="flex w-[100%] md:w-[70vw] md:flex-row  flex-col mx-auto gap-[20px] md:gap-[1vw] justify-center items-center">
      
          <div className="card w-[70%] h-[20%] hover:bg-[#ff8a1d] hover:text-[#ffff] text-[#555089]  p-[1vw] rounded-[10px] border md:w-[25vw] md:h-[15vw] bg-white flex flex-col gap-[20px] md:gap-[2vw] justify-center items-center shadow">
            <img src={s1} className="h-[50%] w-[50%] md:w-[8vw] md:h-[8vw]  text-[#555089]" />
            <h3 className="text-[15px] md:text-[1vw] font-[500]  uppercase">Repair</h3>
          </div> 
          <div className="card w-[70%] bg-[#ff8a1d] hover:text-[#ffff] text-[#555089] h-[20%] p-[1vw] rounded-[10px] border md:w-[25vw] md:h-[15vw]  flex flex-col gap-[20px] md:gap-[2vw] justify-center items-center shadow">
            <img src={s1} className="h-[50%] w-[50%] md:w-[8vw] md:h-[8vw]  " />
            <h3 className="text-[15px] md:text-[1vw] font-[500] uppercase">Repair</h3>
          </div>
          <div className="card w-[70%] h-[20%] p-[1vw] hover:text-[#ffff] text-[#555089] rounded-[10px] hover:bg-[#ff8a1d] border md:w-[25vw] md:h-[15vw] bg-white flex flex-col gap-[20px] md:gap-[2vw] justify-center items-center shadow">
            <img src={s1} className="h-[50%] w-[50%] md:w-[8vw] md:h-[8vw]  " />
            <h3 className="text-[15px] md:text-[1vw] font-[500] uppercase">Repair</h3>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Hero;
