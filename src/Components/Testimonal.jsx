import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Testimonal() {
  return (
    <>
      <div className="flex mb-[3vw]">
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
              slidesPerView: 1,
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
          <div className="flex gap-[2vw]">
            <SwiperSlide className="bg-red-400 shadow  border">
              <div className="h-[200px] md:h-[20vw] bg-pink-400">Slide 1</div>
            </SwiperSlide>
            <SwiperSlide className="bg-red-400 w-[40vw] h-[40vw] border">
              <div className="w-[40vw] h-[20vw] ">Slide 2</div>
            </SwiperSlide>

            <SwiperSlide className="bg-red-400 w-[40vw] h-[40vw] border">
              <div className="w-[40vw] h-[20vw] ">Slide 3</div>
            </SwiperSlide>
            <SwiperSlide className="bg-red-400 w-[40vw] h-[40vw] border">
              <div className="w-[40vw] h-[20vw] ">Slide 4</div>
            </SwiperSlide>
            <SwiperSlide className="bg-red-400 w-[40vw] h-[40vw] border">
              <div className="w-[40vw] h-[20vw] ">Slide 5</div>
            </SwiperSlide>
          </div>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>       */}
        </Swiper>
      </div>
    </>
  );
}

export default Testimonal;
