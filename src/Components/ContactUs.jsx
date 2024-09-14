import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <>
      <div className="w-[90%] lg:w-[75vw] mx-auto mb-[100px] md:mb-[4vw]">
        <h2 className=" md:text-[2vw] lg:text-[2vw]  font-sans font-[700] pb-[20px] md:pb-[1.5vw] uppercase mb-[10px] md:mb-[3vw]">
          Contact Us
        </h2>
        <div className="lg:flex ">
          <div className="w-[100%] lg:w-[40vw]  px-[0vw] py-[1vw] mb-[50px] md:mb-[0vw]">
            <input
              type="text"
              className="w-[100%]  h-[50px] lg:w-[33vw] lg:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] lg:w-[33vw] lg:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[50px] lg:w-[33vw] lg:h-[2.5vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />
            <input
              type="text"
              className="w-[100%] h-[150px] lg:w-[33vw] lg:h-[9vw] p-[20px] md:p-[.5vw] shadow-lg rounded-[.5vw] border-none outline-none mb-[20px] md:mb-[1vw]  bg-transparent"
            />

            <button className="py-[10px] md:py-[.5vw] rounded-[10px] font-[500] uppercase md:rounded-[.5vw] px-[20px] md:px-[2vw] hover:bg-transparent text-[#ffffff] hover:text-blue-400 bg-blue-400 border-transparent hover:border-blue-400 border text-[14px] md:text-[1vw]">
              Send
            </button>
          </div>
          <div className=" lg:w-[45vw]">
            {/* // Important! Always set the container height explicitly */}
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
