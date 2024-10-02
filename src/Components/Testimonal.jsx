import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
// import client_1 from "../assets/clien_1.jpg";
// import client_2 from "../assets/client_2.jpg";
import { LiaStarSolid } from "react-icons/lia";
import { testimoanl } from "../../src/data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Testimonal() {
  return (
    <>
      {/* {testimoanl.map((data)=>(console.log(data)))} */}
      <div className=" mb-[100px] md:mb-[8vw] mt-[8vw]">
        <h2 className=" md:text-[2vw] lg:text-[2vw] font-sans font-[700] pb-[20px] md:pb-[1.5vw] text-center uppercase mb-[10px] md:mb-[3vw]">
          What Our Clients Say
        </h2>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // when window width is below medium (md) breakpoint
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 2,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          className="w-[90%] md:w-[75vw] mx-auto"
        >
          <div className="flex gap-[20px] md:gap-[2vw]">
            {testimoanl.map((data, index) => (
              <SwiperSlide className="  border shadow-lg rounded-lg md:rounded-[1vw]">
                <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                      <img
                        src={data.img}
                        className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                      />
                      <div className="">
                        <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                          {data.heading}
                        </h2>
                        <div className="flex">
                          <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                          <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                          <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                          <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                          <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                  </div>
                  <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                    {data.para}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide className="  border shadow-lg rounded-lg md:rounded-[1vw]">
              <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                    <img
                      src={client_1}
                      className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                    />
                    <div className="">
                      <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                        Jorch morik
                      </h2>
                      <div className="flex">
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                </div>
                <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </SwiperSlide> */}

            {/* <SwiperSlide className="    border shadow-lg  rounded-lg md:rounded-[1vw]">
              <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                    <img
                      src={client_2}
                      className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                    />
                    <div className="">
                      <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                        Jorch morik
                      </h2>
                      <div className="flex">
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                </div>
                <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="    border shadow-lg  rounded-lg md:rounded-[1vw]">
              <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                    <img
                      src={client_1}
                      className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                    />
                    <div className="">
                      <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                        Jorch morik
                      </h2>
                      <div className="flex">
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                </div>
                <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="    border shadow-lg  rounded-lg md:rounded-[1vw]">
              <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                    <img
                      src={client_2}
                      className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                    />
                    <div className="">
                      <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                        Jorch morik
                      </h2>
                      <div className="flex">
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                </div>
                <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="    border shadow-lg  rounded-lg md:rounded-[1vw]">
              <div className="p-[1.5vw] h-[200px] md:h-[20vw] ">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-[20px] md:gap-x-[1vw]">
                    <img
                      src={client_1}
                      className="h-[40px] w-[40px] md:w-[5vw] md:h-[5vw] rounded-[50%]"
                    />
                    <div className="">
                      <h2 className="text-[15px] md:text-[1vw] font-[500] uppercase ">
                        Jorch morik
                      </h2>
                      <div className="flex">
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                        <LiaStarSolid className="text-[15px] md:text-[1.5vw] lg:text-[1vw] text-yellow-400" />
                      </div>
                    </div>
                  </div>
                  <BiSolidQuoteAltLeft className="text-[15px] md:text-[1.5vw] lg:text-[1vw] " />
                </div>
                <p className="text-[12px] mt-[20px] md:mt-[2vw] md:text-[1vw] font-[400] text-center mb-[20px] md:mb-[1vw]  px-[20px] md:px-[2vw]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
              </div>
            </SwiperSlide> */}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonal;
