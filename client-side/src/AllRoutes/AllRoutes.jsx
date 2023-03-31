import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import '../Components/Sidebar/Sidebar.css';
import Dashboard from "./Dashboard"
import Diary from "./Diary";
const AllRoutes = () => {
  return <div>
    <Sidebar>
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diary" element={<Diary />} />
        </Routes>
      </Sidebar>
  </div>;
};

export default AllRoutes;
