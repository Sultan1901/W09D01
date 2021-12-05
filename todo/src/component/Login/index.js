import React from "react";
import axios from "axios";
import cors from "cors";
import { useState, useEffect } from "react";


const Login = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      console.log(result.data.token);
    }
  return (
    <div>
      <>
        <h1>Login</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="your email"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="your password"
        ></input>
        <button onClick={login}>Login</button>
      </>
    </div>
  );
};

export default Login;
