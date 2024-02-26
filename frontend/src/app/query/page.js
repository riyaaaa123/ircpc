import React from "react";
import Query from "@/components/queries";
import Sidebar from "@/components/sidebar";

export default function signin(){
    return(
        <>
        <div className="flex justify-between	">
        <Sidebar/>
        <Query/>
      </div>
        </>
    )
}