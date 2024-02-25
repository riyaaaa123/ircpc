"use client";
import React, { useState } from "react";
import axios from "axios";
import Nav from "./navbar"
import Sidebar from'./sidebar'
const AddPatentForm = () => {
    const [formData, setFormData] = useState({
      title: "",
      fieldOfInvention: "",
      detailedDescription: "",
      inventor: {
        name: "",
        background: "",
      },
      committeeMembers: [],
    });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
   const handleInventorBackgroundChange = (e) => {
     const { value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       inventor: {
         ...prevData.inventor,
         background: value,
       },
     }));
   };
    const handleInventorNameChange = (e) => {
      const { value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        inventor: {
          ...prevData.inventor,
          name: value,
        },
      }));
    };
   
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:5000/api/profiles/addpatents", formData);
        console.log("Patent added successfully:", response.data);
        window.location.href = "/"; 
      } catch (error) {
        console.error("Error adding patent:", error);
      }
    };


    return (
      <>
      <Nav></Nav>
      <div className="flex justify-start gap-5">
        <Sidebar/>
        <div
              className="text-black text-[2rem]  w-[60vw] border-white-500 border p-2 rounded-xl"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="text-center">Add patent here!</div>
              <form className="">
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">
                    Field of Invention:
                  </label>
                  <input
                    type="text"
                    name="fieldOfInvention"
                    value={formData.fieldOfInvention}
                    onChange={handleInputChange}
                    placeholder="Field of Innovation"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">
                    Detailed Description:
                  </label>
                  <textarea
                    name="detailedDescription"
                    value={formData.detailedDescription}
                    onChange={handleInputChange}
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  ></textarea>
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">Inventor Name:</label>
                  <input
                    type="text"
                    name="inventorName"
                    value={formData.inventor.name}
                    onChange={handleInventorNameChange}
                    placeholder="Name of inventor"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                </div>
                <div className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">
                    Inventor background
                  </label>
                  <textarea
                    name="inventorBackground"
                    value={formData.inventor.background}
                    onChange={handleInventorBackgroundChange}
                    className="text-[1.2rem] h-[4vh] bg-transparent border
                    border-green"
                  ></textarea>
                </div>

                <div className="justify-center flex bg-[#907656] mt-3 rounded-md">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-[1.3rem]  py-1.5  "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          
      </div>
      </>
    );
}
export default AddPatentForm;