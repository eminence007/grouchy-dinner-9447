import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import HomePage from "../Pages/HomePage"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"

import Dashboard from "./Dashboard/Dashboard"
import Diary from "./Diary";

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage />} />
    
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    <Sidebar>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diary" element={<Diary />} />
      </Sidebar>
      </Routes>
  )
   
  

}

export default AllRoutes





