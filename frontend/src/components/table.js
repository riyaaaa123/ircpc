"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Row from "./table_row"
const Addrow=( index,name, title, background, status, submittedon, view_details)=>{
        const tbody = document.getElementById('patentTableBody');
      
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="flex items-center">
                  <div>
                      <div className="text-sm leading-5 text-gray-800">${id}</div>
                  </div>
              </div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div className="text-sm leading-5 text-blue-900">${name}</div>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">${title}</td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">${background}</td>
          <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
              <span className="relative text-xs">${status}</span>
          </span>
          </td>
          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">${submittedon}</td>
          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
              <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">${view_details}</button>
          </td>
        `;
        tbody.appendChild(newRow);
}
export default function Table() {
    const [patents, setPatents] = useState([]);
     useEffect(() => {
       const fetchPatents = async () => {
         try {
           const response = await axios.get(
             "http://localhost:5000/api/profiles/getpatents"
           );
            //  console.log(response.data);
           setPatents(response.data);
           
         } catch (error) {
           console.error("Error fetching patents:", error);
         }
       };
       fetchPatents();
     }, []);
  return (
    <>
      <div className="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 min-h-screen">
        
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Serial No
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Applicant Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Background
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Submitted on
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Details
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {patents.map((patent,index) => (
                <Row
                  key={patent._id}
                  serialNumber = {index+1}
                  name={patent.inventor.name}
                  title={patent.title}
                  background={patent.inventor.background}
                  status={patent.status}
                  submittedon={patent.dateofApplication}
                  view_details="View details"
                />
              ))}
            </tbody>
          </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
          </div>
        </div>
      </div>
    </>
  );
}
