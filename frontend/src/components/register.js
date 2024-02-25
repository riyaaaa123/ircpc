"use client";
import React,{useState} from 'react';
import Link from "next/link";
import axios from "axios";
import './style.css'

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
    <section className='myclass'>

<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />



<div class="w-full lg:w-4/12 px-4 mx-auto pt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
    <div class="rounded-t mb-0 px-6 py-6">
      <div class="text-center mb-3">
        <h6 class="text-blueGray-500 text-sm font-bold">
          Sign in with
        </h6>
      </div>
      <div class="btn-wrapper text-center">
        <button class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
          <img alt="..." class="w-5 mr-1" src="https://channeli.in/branding/site/logo.svg" />Channel-i</button>

      </div>
      <hr class="mt-6 border-b-1 border-blueGray-300" />
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <div class="text-blueGray-400 text-center mb-3 font-bold">
        <small>Or sign in with credentials</small>
      </div>
      <form>
      <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Name</label><input value={name} type="name" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Email</label><input value={email} type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="relative w-full mb-3">
          <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Password</label><input value={password} type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="text-center mt-6">
          <button onClick={handleRegister} class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Sign In </button>
        </div>
        <div class="text-center mb-3">
        <h6 class="text-blueGray-500 text-sm font-bold">
          Already Registered<Link href="/signin">
            <div className="text-[#907656]">Login here!</div>
          </Link>
        </h6>
      </div>
      </form>
    </div>
  </div>
</div>
</section>
      </>
    );
}
