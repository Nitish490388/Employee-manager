import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full text-center mt-10">
      <h2 className="text-lg font-bold mb-20">Landing Page</h2>
      <button className="btn-primary" onClick={() => {
        navigate("/dashboard");
      }}>Go to DashBoard</button>
    </div>
  )
};

export default HomePage;
