import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import '../Components/Sidebar/Sidebar.css';
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "./Dashboard"
import Diary from "./Diary";
const AllRoutes = () => {
  return  <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        </Routes>

};

export default AllRoutes;
