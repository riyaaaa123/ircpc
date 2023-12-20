import React  from "react";
import Navbar from "@/components/Navbar";
import  Carousel from "@/components/Carousel";
import Data from "@/components/data";
import Entre from "@/components/Entre";
import Aboutus from "@/components/Aboutus";
import Partners from "@/components/Partners";
import News from "@/components/News";
import Footer from "@/components/Footer";

const slides = [
  {
    image: "./img/carousel1.png",
    title: "IIT Roorkee's Tech Excellence",
    description:
      "Our vibrant community excels in tech development. We offer financial assistance and mentorship to elevate Technology Readiness Levels (TRL).",
  },
  {
    image: "./img/carousel2.png",
    title: "IP & Tech Transfer",
    description:
      "IPRC manages IP assets, promotes creation, and facilitates commercialization through licensing and tech transfer.",
  },
  {
    image: "./img/carousel3.png",
    title: "R&D Partnership ",
    description:
      "At IIT Roorkee, we lead innovative projects, advancing core technologies at the nexus of science, tech, business, finance, and development.",
  },
  {
    image: "./img/carousel4.png",
    title: "Entrepreneurship & Innovation",
    description:
      "IPRC cultivates entrepreneurship and tech commercialization. We manage IIT Roorkee's incubator program, empowering future visionaries.",
  },
  {

  },
];
export default function Home() {
  return (
  <>
    <div className="bg-white text-black ">
      <Navbar />
      <Carousel slides={slides} />
      <Data/>
      <Aboutus/>
      <Entre/>
      <Partners/>
      <News/>
      <Footer/>
    </div>
  </>
  )
}
