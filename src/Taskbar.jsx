// import A

import { useState } from "react";

function Taskbar(props){

    const [task,settask]=useState("");
    const [level,setlevel]=useState("Medium");
    const [typeofwork,settypeofwork]=useState("General");

    const addTask=(e)=>{
        e.preventDefault()

        if(task.trim()){
            props.addnewtasks({
                text:task+" (type: "+typeofwork+", level: "+level+")",
                tasklevel:level,
                tasktype:typeofwork,
                complete:false,

            })
            // console.log(task)
            settask("");
            setlevel("Medium");
            settypeofwork("General");

        }
    };
    return(
        <form id="taskform" onSubmit={addTask}>
            <div id="barinput">
                <input type="text" placeholder="Enter the task" value={task} onChange={e=>(settask(e.target.value))}/>
                <span><button type="submit" disabled={!task.trim()}>
  Add Task
</button>
</span>
            </div>
            <div id="barselect">
                <select name="level" value={level} onChange={e=>setlevel(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <select name="typeofwork" value={typeofwork} onChange={e=>settypeofwork(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>

            </div>
        </form>
    )
}

export default Taskbar;