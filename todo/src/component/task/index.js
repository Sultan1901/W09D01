import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Task = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [task, setTask] = useState([]);
  useEffect(() => {
    taskshow()
    setNewtask();
  }, []);
  const taskshow = async () => {
    const result = await axios.get(`${BASE_URL}/gettask`);
    setTask(result.data);
  };
  const del = async () => {
    try {
      const res = await axios.delete(`${BASE_URL}/delTask/:id`);
      console.log(res);
    } catch (error) {}
  };
  const [newtask, setNewtask] = useState("");
  const addtask = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/createtask`, {
        name: newtask,
      });
    } catch (error) {}
  };

  return (
    <div>
      <h1>Tasks</h1>
      <input 
        onChange={(e) => {
          setNewtask(e.target.value);
          console.log(e);
    
        }}
        placeholder="add task"
       />{" "}
      <button onClick={addtask}></button>
      {task.map((e, i) => (
        <ul>
          <li>
            {e.name}
            <button onClick={del} key={e._id}>
              delete
            </button>
          </li>
          {console.log(i)}{" "}
        </ul>
      ))}
    </div>
  );
};

export default Task;
