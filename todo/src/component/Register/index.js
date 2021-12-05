import React from 'react'
import axios from "axios"
import cors from "cors"
import { useState, useEffect } from "react";



const Register = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [logemail, setLogemail] = useState("");
    const [logpassword, setLogpassword] = useState("");
    const [username, setUsername] = useState("");

    const register = async ()=>{
        const result = await axios.post(`${BASE_URL}/addusr`, {
          email:logemail,
          password:logpassword,
          username
        });
        

    }
    return (
      <div>
        <h1>Register</h1>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(e) => {
            setLogemail(e.target.value);
          }}
          type="email"
          placeholder="email"
        ></input>
        <input
          onChange={(e) => {
            setLogpassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        ></input>
        <button onClick={register}>register</button>
      </div>
    );
}

export default Register
