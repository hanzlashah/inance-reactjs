import React from "react";

function ContactUs() {
  return (
    <>
      <div className="w-[90%] md:w-[75vw] mx-auto mb-[100px] md:mb-[4vw]">
        <h2 className=" md:text-[2vw] lg:text-[2vw]  font-sans font-[700] pb-[20px] md:pb-[1.5vw] uppercase mb-[10px] md:mb-[3vw]">
        Contact Us
        </h2>
        <div className="md:flex ">
          <div className="md:w-[35vw]  px-[2vw] py-[1vw]">
            <input
              type="text"
              className="w-[100%]  h-[50px] md:w-[31vw] md:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] md:w-[31vw] md:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] md:w-[31vw] md:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] md:w-[31vw] md:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] md:w-[31vw] md:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <button className="py-[10px] md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-blue-400 bg-blue-400 border-transparent hover:border-blue-400 border text-[14px] md:text-[1vw]">
              Send
            </button>
          </div>
          <div>right</div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
