import React from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "../Components/DashboardLayout";

const Dashboard = () => {
  return (
    <div className="w-full h-[100vh] overflow-hidden border-2 flex flex-col border-black ">
      <div className="flex-none"><DashboardLayout /></div>
      <div className="border border-black flex-grow w-full overflow-y-scroll">

        <Outlet />

      </div>
    </div>
  );
};

export default Dashboard;
