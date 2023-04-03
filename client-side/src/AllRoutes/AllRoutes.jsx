import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Success from "../Pages/Success";
import { PrivateRoute } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/success/*"
          element={
            <PrivateRoute>
              <Success />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
