import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Login from "../assets/pages/Login/Login.jsx";
import Register from "../assets/pages/Register/Register.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;