"use client";
import React, { useState } from "react";

export default function Login() {
  return (
    <>
      <div
        className="min-h-screen width-[100vw] bg-cover"
        style={{ backgroundImage: "url('img/bg.png')" }}
      >
        <div className="h-[100vh] justify-center items-center flex">
          <div
            className="text-white text-[2rem]  w-[27vw] border-gray-500 border p-2 rounded-xl"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div className="text-center">Login here!</div>
            <form className="">
              <div className="flex-col flex">
                <label className="text-[1.4rem] mt-2">Email Id:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email "
                  className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                />
              </div>
              <div className="flex-col flex">
                <label className="text-[1.4rem] mt-2">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                />
              </div>
              <div className="text-[1.4rem] mt-4">
               Don't Have an Account&nbsp;
                <a href="" className="text-[#907656]">
                  Register here!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
