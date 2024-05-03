import React, { useState } from "react";
import axiosClient from "../utils/axiosClient";

const Signup = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axiosClient.post("/admin/signup", {
      name,
      userName,
      email,
      password
    });

    console.log(response.data);
  }

  return <form onSubmit={handleSubmit}>
    <input className="input" type="email" placeholder="userName" onChange={(e) => {
      setUserName(e.target.value);
    }} />

    <input className="input" type="email" placeholder="email" onChange={(e) => {
      setEmail(e.target.value);
    }} />

    <input className="input" type="text" placeholder="name" onChange={(e) => {
      setName(e.target.value);
    }} />

    <input className="input" type="password" placeholder="Password" onChange={(e) => {
      setPassword(e.target.value);
    }} />

    <button className="border border-blue-600" type="submit">signup</button>
  </form>;
};

export default Signup;
