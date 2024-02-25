"use client";
import React, { useState } from "react";
import Table from "./table";
import Nav from "./navbar"
import Sidebar from'./sidebar'


export default function Homepage() {
  const [add, setAdd] = useState("");
  return (
    <>
    <Nav></Nav>
      <div className="flex justify-between	">
        <Sidebar/>
        <Table />
      </div>
    </>
  );
}
