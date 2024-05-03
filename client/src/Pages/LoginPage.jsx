// Login.js
import React, { useState } from 'react';
import axiosClient from "../utils/axiosClient.js";
import FormSuccess from '../Components/FormSuccess.jsx';
import FormError from "../Components/FormError.jsx";
import { useNavigate } from "react-router-dom";
import { z } from 'zod';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const LoginSchema = z.object({
    userName: z.string().min(3).max(50),
    password: z.string().min(8),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const { error } = LoginSchema.safeParse({
        userName,
        password
      })
      if (error) setErrorMsg("Password must be greater than or equal to 8");

      setIsPending(true);
      const response = await axiosClient.post("/admin/login", {
        userName,
        password
      });
      setIsPending(false);
      console.log(response.data);
      if (response?.data?.message) setErrorMsg(response?.data?.message);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="email"
              name="username"
              id="username"
              className="input"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value
                )
              }}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className=""
            >
              {isPending ? <>Logging in..</> : <>Login</>}
            </button>
          </div>
          <div>
            {errorMsg ? <><FormError message={errorMsg} /></> : <></>}
            {successMsg ? <><FormSuccess message={successMsg} /></> : <></>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
