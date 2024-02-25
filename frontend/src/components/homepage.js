"use client";
import React, { useState } from "react";
import Table from "./table";
import Nav from "./navbar"
import Sidebar from'./sidebar';
import Mainpage from "./mainpage";


export default function Homepage() {
  

  return (
    <>
      <Mainpage />
      <div className="grid grid-cols-[auto,1fr]">
        <Sidebar className="h-screen" />
        <Table />
      </div>
    </>
  );
}
