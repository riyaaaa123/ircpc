"use client";
import { useState, useEffect } from "react";

const Data = ()=>{
return (
  <>
    <div className="bg-white w-full mt-10 flex justify-center">
      <div
        className="h-[92vh] w-[90vw]"
        style={{ backgroundColor: "rgb(243,243,243)" }}
      >
        <div className="flex flex-wrap gap-36 p-16">
          <div className="w-[18vw] h-[36vh] ml-auto ">
            <div className="h-[28vh] w-[18vw] flex flex-col justify-center items-center bg-white rounded-t-lg border border-solid border-gray-300">
              <img src="./img/data1.png" className=" w-20 h-20" />
              <h4 className="text-[rgba(140,140,140,1)] mt-4 text-md">
                Patents Filed
              </h4>
              <h1 className="text-[rgba(53, 76, 85, 0.8)] mt-2 font-bold text-3xl">
                2000
              </h1>
            </div>
            <div
              className="h-[8vh] rounded-b-lg"
              style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
            ></div>
          </div>
          <div className="w-[18vw] h-[36vh]  ">
            <div className="h-[28vh] w-[18vw] flex flex-col justify-center items-center bg-white rounded-t-lg border border-solid border-gray-300">
              <img src="./img/data2.png" className="w-20 h-20" />
              <h4 className="text-[rgba(140,140,140,1)] mt-4 text-md">
                Technology Transfer
              </h4>
              <h1 className="text-[rgba(53, 76, 85, 0.8)] mt-2 font-bold text-3xl">
                599
              </h1>
            </div>
            <div
              className="h-[8vh] rounded-b-lg"
              style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
            ></div>
          </div>
          <div className="w-[18vw] h-[36vh] mr-auto ">
            <div className="h-[28vh] w-[18vw] flex flex-col justify-center items-center bg-white rounded-t-lg border border-solid border-gray-300">
              <img src="./img/data3.png" className="w-20 h-20" />
              <h4 className="text-[rgba(140,140,140,1)] mt-4 text-md">
                Design Registration
              </h4>
              <h1 className="text-[rgba(53, 76, 85, 0.8)] mt-2 font-bold text-3xl">
                399
              </h1>
            </div>
            <div
              className="h-[8vh] rounded-b-lg"
              style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
            ></div>
          </div>

          <div className="w-[18vw] h-[36vh] mt-[-4rem] ml-auto ">
            <div className="h-[28vh] w-[18vw] flex flex-col justify-center items-center bg-white border border-solid border-gray-300 rounded-t-lg">
              <img src="./img/data4.png" className="w-20 h-20" />
              <h4 className="text-[rgba(140,140,140,1)] mt-4 text-md">
                Patents Granted
              </h4>
              <h1 className="text-[rgba(53, 76, 85, 0.8)] mt-2 font-bold text-3xl">
                200
              </h1>
            </div>
            <div
              className="h-[8vh] rounded-b-lg"
              style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
            ></div>
          </div>
          <div className="w-[18vw] h-[36vh] mt-[-4rem] mr-auto">
            <div className="h-[28vh] w-[18vw] flex flex-col justify-center items-center bg-white rounded-t-lg border border-solid border-gray-300">
              <img src="./img/data3.png" className="w-20 h-20" />
              <h4 className="text-[rgba(140,140,140,1)] mt-4 text-md">
                Design Registration
              </h4>
              <h1 className="text-[rgba(53, 76, 85, 0.8)] mt-2 font-bold text-3xl">
                399
              </h1>
            </div>
            <div
              className="h-[8vh] rounded-b-lg"
              style={{ backgroundColor: "rgba(1, 130, 254, 1)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
export default Data;