import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import cors from "cors";
// import Login from "./component/Login"
import Register from "./component/Register";
import Login from "./component/Login";


import {BrowserRouter as Route , Routes , Link} from "react-router-dom"

function App() {
  

  return (
    <div>

      <Register />
      <Login />

    </div>
  );
}

export default App;
