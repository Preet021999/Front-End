import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.Jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Employeemaster from "./components/Menu/Employeemaster.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="employee-master" element={<Employeemaster />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;