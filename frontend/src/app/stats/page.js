import React from "react";
import Stats from "@/components/statistic";
import Sidebar from "@/components/sidebar";

export default function signin(){
    return(
        <>
        <div className="flex">
        <Sidebar/>
        <Stats/>
      </div>
        </>
    )
}