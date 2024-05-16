import React, { useState, useEffect } from "react";
import axiosClient from "../utils/axiosClient";
import { Link, useNavigate } from "react-router-dom";
import { TbBrandComedyCentral } from "react-icons/tb";


const DashboardLayout = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/dashboard/get-admin");
        setName(response.data.data);
      } catch (error) {

        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately

  }, []); // Empty dependency array means this effect runs once after the component mounts

  const handleLogout = async () => {
    try {
      const response = await axiosClient.post("/admin/logout");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
      <span className=" cursor-pointer px-6 py-3 border border-black ">Logo</span>
      <ul className="flex items-center justify-evenly border border-black px-6 py-3 bg-blue-100">
        <li className="cursor-pointer"><Link to="/dashboard-home">Home</Link></li>
        <li className="cursor-pointer"><Link to="/employee-list">Employee List</Link></li>
        <li>{name}</li>
        <li className="cursor-pointer" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default DashboardLayout;
