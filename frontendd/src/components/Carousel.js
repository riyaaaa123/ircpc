"use client";
import { useState,useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel=({slides})=>{

   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
     setCurrentIndex((currentIndex + 1) % slides.length);
   };

    const prevSlide = () => {
     setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
   };

    useEffect(() => {
     const intervalId = setInterval(() => {
     nextSlide();
     },4000); 

    return () => {
       clearInterval(intervalId);
     };
   }, [currentIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative mt-2">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[72vh]"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 text-white  p-28 mt-14">
                <h1 className="text-3xl text-5xl font-bold w-[30vw]">
                  {slide.title}
                </h1>
                <p className="mt-3 text-[1.3vw] w-[30vw]">{slide.description}</p>
                <div
                  className=" mt-3.5 text-white  w-[9vw] rounded-lg h-[6vh] flex justify-center items-center"
                  style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
                >
                  <button className="text-white font-bold text-[1vw]">Learn more</button>
                  <ArrowForwardIcon className="ml-2 text-white w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Carousel