import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </div>
  );
};

export default Dashboard;