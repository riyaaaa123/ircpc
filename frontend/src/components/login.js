"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email,
          password,
        });
        if (response.data.success) {
          console.log("wowiee");
        } else {
          setError("Invalid credentials");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        setError("Login failed. Please try again.");
      }
    };
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                />
              </div>
              <div className="justify-center flex bg-[#907656] mt-3 rounded-md">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="text-[1.3rem]  py-1.5  "
                >
                  Login
                </button>
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
