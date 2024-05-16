import React, { useEffect } from "react";
import axiosClient from "../utils/axiosClient.js"

const DashboardHome = () => {

  return (
    <>
      <div className="bg-yellow-300 p-2 ">
        Dashboard
      </div>
      <div className="h-full w-full flex items-center justify-center">
        Welcome to dashboard
      </div>
    </>
  );
};

export default DashboardHome;
