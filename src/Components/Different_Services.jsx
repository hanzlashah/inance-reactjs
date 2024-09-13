import React from "react";
import s1 from "../../src/assets/s1.png";
import s2 from "../../src/assets/s2.png";
import s3 from "../../src/assets/s3.png";
function Different_Services() {
  return (
    <div className="mt-[100px] md:mt-[3vw] mb-10 w-[80vw] md:mb-[2vw] text-center mx-auto">
      <h2 className=" md:text-[2vw] lg:text-[2vw] text-[#0355cc] font-sans font-[700] pb-[20px] md:pb-[1.5vw] text-center uppercase mb-[10px] md:mb-[3vw]">
        Our Services
      </h2>
      <div className="flex gap-[2vw] mb-[20px] md:justify-center justify-start  md:mb-[1vw] flex-wrap">
        <div className="card w-[100%] h-[90%] hover:bg-[#ff8a1d] hover:text-[#ffff]   p-[3vw] rounded-[10px] border md:h-[20vw] md:w-[30vw] lg:w-[25vw] lg:h-[15vw] bg-white flex flex-col gap-[20px] md:gap-[1vw] justify-center items-center shadow">
          <img
            src={s1}
            className="h-[20%] w-[20%] md:w-[5vw] md:h-[5vw] mt-[10px] md:mt-[1vw] text-[#555089]"
          />
          <h3 className="text-[15px] md:text-[1vw] font-[500]  uppercase">
            Maintenance
          </h3>
          <p className="text-[12px] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw] uppercase">
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal
          </p>
        </div>
        <div className="card w-[100%] h-[90%] hover:bg-[#ff8a1d] hover:text-[#ffff]   p-[1.5vw] rounded-[10px] border md:h-[20vw] md:w-[30vw] lg:w-[25vw] lg:h-[15vw] bg-white flex flex-col gap-[20px] md:gap-[1vw] justify-center items-center shadow">
          <img
            src={s2}
            className="h-[20%] w-[20%] md:w-[5vw] md:h-[5vw] mt-[10px] md:mt-[1vw]  text-[#555089]"
          />
          <h3 className="text-[15px] md:text-[1vw] font-[500]  uppercase">
            Electrical
          </h3>
          <p className="text-[12px] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw] uppercase">
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal
          </p>
        </div>
        <div className="card w-[100%] h-[90%] hover:bg-[#ff8a1d] hover:text-[#ffff]   p-[1.5vw] rounded-[10px] border md:h-[20vw] md:w-[30vw] lg:w-[25vw] lg:h-[15vw] bg-white flex flex-col gap-[20px] md:gap-[1vw] justify-center items-center shadow">
          <img
            src={s3}
            className="h-[20%] w-[20%] md:w-[5vw] md:h-[5vw] mt-[10px] md:mt-[1vw] text-[#555089]"
          />
          <h3 className="text-[15px] md:text-[1vw] font-[500]  uppercase">
            Plumbing
          </h3>
          <p className="text-[12px] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw] uppercase">
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal
          </p>
        </div>
      </div>
      <button className="py-[10px]  md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-[#0355cc] bg-[#0355cc] border-transparent hover:border-[#0355cc] border text-[14px] md:text-[1vw]">
        View More
      </button>
    </div>
  );
}

export default Different_Services;
