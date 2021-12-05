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


    return (
        <div>
            
{task.map((e)=>(


<ul>
<li>{e.name}</li>

</ul>
))}

        </div>
    )
}

export default Task
