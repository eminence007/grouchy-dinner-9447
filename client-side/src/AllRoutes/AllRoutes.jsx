import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

import Dashboard from "./Dashboard/Dashboard"
import Diary from "./Diary/Diary";
const AllRoutes = () => {
  return <div>
    <Sidebar>
        <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/diary" element={<Diary />} />
        </Routes>
      </Sidebar>
  </div>;
};

export default AllRoutes;
