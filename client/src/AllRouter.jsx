import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import Signup from "./Pages/Signup";

const Home = lazy(() => import("./Pages/HomePage"));
const Login = lazy(() => import("./Pages/LoginPage"));
const DashBoard = lazy(() => import("./Pages/Dashboard"));
const RestrictUser = lazy(() => import("./Components/RestrictUser"));

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
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AllRouter;
