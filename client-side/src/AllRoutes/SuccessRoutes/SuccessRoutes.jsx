import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Graph from "../../Pages/dashboard";
import Diary from "../Diary";

const SuccessRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Graph />} />
        <Route path="/dashboard" element={<Graph />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default SuccessRoutes;
