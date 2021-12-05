import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";

const Task = () => {
const BASE_URL = process.env.REACT_APP_BASE_URL;
    const [task, setTask] = useState([]);
    useEffect(() => {
     taskshow()
    }, [])
    const taskshow = async () => {
        const result = await axios.get(`${BASE_URL}/gettask`);
       setTask(result.data);
        
    }
const del = async () => {
  try { const res = await axios.delete(`${BASE_URL}/delTask/:id`)
  console.log(res);
    
  } catch (error) {
    
  }
 
}

    return (
      <div>
        <h1>Tasks</h1>

        {task.map((e,i) => (
          <ul>
            <li>{e.name}<button onClick={del} key={i._id} >delete</button></li>
          {console.log(i)} </ul>
         
        ))}
      </div>
    );
}

export default Task
