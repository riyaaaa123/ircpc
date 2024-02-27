
import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Navbar=()=>{

return (
  <>
    <div className="bg-white bg bg-cover">
      <div className="flex flex-wrap justify-between">
        <div className="ml-10 mt-3 flex gap-3">
          <img src="/img/mail.png" className="w-7 h-7" />
          <h6 className="mt-1 text-[rgba(140,140,140,1)]">
            <span className="font-bold">Email us at : </span>
            <span>adii@iitr.ac.in </span>
          </h6>
        </div>
        <div className="mr-10 mt-3 flex gap-8">
          <img src="/img/fb.png" className="w-9 h-9" />
          <img src="/img/linkedin.png" className="w-9 h-9" />
          <img src="/img/insta.png" className="w-9 h-9" />
          <h1 className="text-[rgba(140,140,140,1)] mt-0.5 text-2xl">|</h1>
          <div className="mt-1.5 flex">
            <img src="/img/Phone.png" className="w-6 h-6 " />
            <h6 className="text-[rgba(140,140,140,1)] ml-3">123-4567890</h6>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="flex justify-between">
        <div className="mt-3 ml-9">
          <img src="./img/logo.png" className="w-[17vw] h-12" />
        </div>
        <div className="mt-5 flex mr-10 gap-9">
          <div className="text-black hover:text-[rgba(0, 135, 255, 1)]  hover:underline">
            Home
          </div>
          <div className="text-black">About us</div>
          <div className="text-black">Policies</div>
          <div className="text-black">Programmes</div>
          <div className="text-black">Technologies Basket</div>
          <div className="text-black">Startup Weekly Digest</div>
          <div className="text-black">IP Compendum</div>
          <div className="text-black">Contact Us</div>
          <div
            className="mt-[-0.4rem] text-white  px-3 rounded-md h-[4vh] flex justify-center items-center"
            style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
          >
            <a href="http://localhost:8080/signin">
            <button className="text-white">IPRC Portal</button></a>
            <ArrowForwardIcon className="ml-2 text-white w-4" />
          </div>
        </div>
      </div>
    </div>
  </>
);
}
   

export default Navbar;