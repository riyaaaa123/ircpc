"use client";
import React,{useState} from 'react';
import Link from "next/link";
import axios from "axios";
import Login from "./login";

export default function Register(){
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");

    const handleRegister = async (event) => {
      event.preventDefault();
      try {
         setError("");
         if (!name || !email || !password) {
           setError("Please fill in all fields.");
           return;
         }
        const response = await axios.post(
          "http://localhost:5000/api/auth/createuser",
          {
            name,
            email,
            password,
          }
        );
        console.log(response.data);
        if (response.data.success) {
          console.log("User created successfully");
             window.location.href = "/"; 
        } else {
          setError("Email is already in use");
        } 
      } catch (error) {
        console.error(error.response.data);
         setError('Registration failed. Please try again.'); 
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
              className="text-white text-[2rem]  w-[27vw] border-gray-500 border p-2 rounded-md"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="text-center">Register here!</div>
              <form className="">
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green rounded-sm"
                  />
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">Email Id:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email "
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green rounded-sm"
                  />
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2 ">Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green rounded-sm"
                  />
                </div>
                <div className="justify-center flex bg-[#907656] mt-3 rounded-md">
                  <button
                    type="button"
                    onClick={handleRegister}
                    className="text-[1.3rem]  py-1.5  "
                  >
                    Register
                  </button>
                </div>
                <div className="text-[1.3rem] mt-3 ">
                  Already Have an Account&nbsp;&nbsp;
                  <Link href="/signin">
                    <div className="text-[#907656]">Login here!</div>
                  </Link>
                  To register through Channel-i :
                  <Link href="https://kunalshaw79.github.io/notification/home">
                    <div className="text-[#907656]"> Click here!</div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
