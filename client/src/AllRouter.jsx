import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import Signup from "./Pages/Signup";

const Home = lazy(() => import("./Pages/HomePage"));
const Login = lazy(() => import("./Pages/LoginPage"));
const DashBoard = lazy(() => import("./Pages/Dashboard"));
const RestrictUser = lazy(() => import("./Components/RestrictUser"));
const DashboardHome = lazy(() => import("./Pages/DashboardHome"));
const EmployeeList = lazy(() => import("./Pages/EmployeeList"));
const CreateEmployee = lazy(() => import("./Pages/CreateEmployee"));

function LazyLoader() {
  return (
    <div className="h-[calc(100dvh-60px)] w-full flex justify-center items-center">
      <Loader />
    </div>
  );
}

const AllRouter = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<RestrictUser />}>
          <Route element={<DashBoard />}>
            <Route path="/dashboard-home" element={<DashboardHome />} />
            <Route path="/employee-list" element={<EmployeeList />} />
            <Route path="/createEmployee" element={<CreateEmployee />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AllRouter;
