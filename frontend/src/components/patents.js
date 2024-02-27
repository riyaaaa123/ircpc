"use client";
import React, { useState } from "react";
import axios from "axios";
import Nav from "./navbar"
import Sidebar from'./sidebar'
import Mainpage from "./mainpage";
import { useRouter } from 'next/navigation';

const AddPatentForm = () => {
  const router = useRouter()
  const userdata = JSON.parse(localStorage.getItem('userdata'))
    const [formData, setFormData] = useState({
      email:userdata.contactInformation.instituteWebmailAddress,
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
   const handleCommitteeMemberChange = (e, index) => {
     const { name, value } = e.target;
     const updatedMembers = [...formData.committeeMembers];
     updatedMembers[index][name] = value;
     setFormData((prevData) => ({
       ...prevData,
       committeeMembers: updatedMembers,
     }));
   };

   const addCommitteeMember = () => {
     setFormData((prevData) => ({
       ...prevData,
       committeeMembers: [
         ...prevData.committeeMembers,
         { name: "", email: "", department: "" },
       ],
     }));
   };

   const removeCommitteeMember = (index) => {
     const updatedMembers = [...formData.committeeMembers];
     updatedMembers.splice(index, 1);
     setFormData((prevData) => ({
       ...prevData,
       committeeMembers: updatedMembers,
     }));
   };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:5000/api/profiles/addpatents", formData).then(alert('patent added succesfully '))
        router.push('/')
        console.log("Patent added successfully:", response.data);
        
      } catch (error) {
        console.error("Error adding patent:", error);
      }
    };


    return (
      <>
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
              <label className="text-[1.4rem] mt-2">Field of Invention:</label>
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
              <label className="text-[1.4rem] mt-2">Inventor background</label>
              <textarea
                name="inventorBackground"
                value={formData.inventor.background}
                onChange={handleInventorBackgroundChange}
                className="text-[1.2rem] h-[4vh] bg-transparent border
                    border-green"
              ></textarea>
              {formData.committeeMembers.map((member, index) => (
                <div key={index} className="flex-col flex">
                  <label className="text-[1.4rem] mt-2">
                    Committee Member Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleCommitteeMemberChange(e, index)}
                    placeholder="Name"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                  <label className="text-[1.4rem] mt-2">
                    Committee Member Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={member.email}
                    onChange={(e) => handleCommitteeMemberChange(e, index)}
                    placeholder="Email"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                  <label className="text-[1.4rem] mt-2">
                    Committee Member Department:
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={member.department}
                    onChange={(e) => handleCommitteeMemberChange(e, index)}
                    placeholder="Department"
                    className="text-[1.2rem] h-[4vh] bg-transparent border border-green"
                  />
                  <button
                    type="button"
                    onClick={() => removeCommitteeMember(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addCommitteeMember}>
                Add Committee Member
              </button>
              {/* Submit button */}
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
}
export default AddPatentForm;