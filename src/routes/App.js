import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import Login from "../pages/login";
import RegisterUser from "../pages/register-user";
import RegisterCompany from "../pages/register-company";
import Forgot from "../pages/forgot";

const App = () => {
  return (
    <BrowserRouter>
      {/* AUTHENTICATION PAGES */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-company" element={<RegisterCompany />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
