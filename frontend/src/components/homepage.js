"use client";
import React, { useState } from "react";
import Table from "./table";
import Nav from "./navbar"
import Sidebar from'./sidebar';
import axios from "axios";
import Mainpage from "./mainpage";


export default function Homepage() {
  async function fetch_user_data() {
    // initializing some important constant
    // using the reference of documentation of omniport
    console.log('fetching data')
    const client_id = "Tm3HosWalwv6u2659Z2NNJVrix9dzlakb24ITtvV";
    const client_secret = "FkEK5CHn68xv0sBolyS14oUTJsbHPL0Jsowi8TJU895tPj05gC16cr1pIHF6ycDOPbwYOqCokmda7wX5osYfEGn4zVrcV8563pecjggHE7b1rARQG4jbbuiKEzF6s9zu";
    const authorization_code = window.location.search.split("&")[0].replace("?code=", "");
    console.log(authorization_code) 
    const grant_type = "authorization_code";
    const redirect_uri = "http://localhost:8080/";

    // const data = `client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&redirect_uri=${redirect_uri}&code=${authorization_code}`;
    // const retrieve_token_uri = "https://channeli.in/open_auth/token/";

    try {
        // POST request to retrieve access token
        // const tokenResponse = await axios.post(retrieve_token_uri, data, {
        //     headers: {
        //         'Content-Type': 'application'
        //     }
        // });
        const data =
        "client_id=" +
        client_id +
        "&client_secret=" +
        client_secret +
        "&grant_type=" +
        grant_type +
        "&redirect_uri=" +
        redirect_uri +
        "&code=" +
        authorization_code;
      const retrieve_token_uri = "https://channeli.in/open_auth/token/";
      //method-post-of-const-data-to-url-https://channeli.in/open_auth/token/
      const http = new XMLHttpRequest();
      http.open("POST", retrieve_token_uri);
      http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      http.send(data);
      console.log(http.responseText)
        // const access_token = tokenResponse.data.access_token;
        // get_data(access_token)
    } catch (error) {
        console.error('Error:', error);
    }
}
async function get_data(access_token) {
  
        // GET request to retrieve user data
        const retrieve_data_uri = "https://channeli.in/open_auth/get_user_data/";
        const userDataResponse = await axios.get(retrieve_data_uri, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });

        // Parsing and logging user data
        console.log(userDataResponse.data);
        const parsed_user_data = userDataResponse.data;
        const profile_data_string =
            "Enrolment Number: " + parsed_user_data.username + "<br/>" +
            "Name: " + parsed_user_data.person.fullName + "<br/>" +
            "Current Year: " + parsed_user_data.student.currentYear + "<br/>" +
            "Institute Email: " + parsed_user_data.contactInformation.instituteWebmailAddress + "<br/>";
        console.log(profile_data_string);
}
// fetch_user_data
  return (
    <>
    {/* <Mainpage/> */}
    <button onClick={fetch_user_data}>fetch</button>
      <div className="flex justify-between	">
        <Sidebar/>
        <Table />
      </div>
    </>
  );
}
