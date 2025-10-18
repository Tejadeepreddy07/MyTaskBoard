
// import './App.css'
import Taskbar from './Taskbar'
import TaskProgessBar from './TaskProgessBar';
import { useEffect, useState } from "react";
import TaskList from './TaskList';
import Taskfilter from './Taskfilter';

function App() {
  const [tasks, settasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filtertasklist, setfiltertasklist] = useState(tasks);
  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    filtertask(currentFilter);
  }, [tasks]);

useEffect(() => {
    setfiltertasklist(tasks);
  }, []);
  const addnewtasks = (newtask) => {
    settasks([...tasks, newtask]);
    // tasks.map((t)=>{t.})
  }
  const completetask = (index) => {
    const updated = tasks.map((t, i) => {
      return i === index ? { ...t, complete: !t.complete } : t;
    });
    settasks(updated);
  }

  const deleteitem = (index) => {
    const updatetask = tasks.filter((_, i) => i !== index)
    settasks(updatetask);
  }

  const filtertask = (value) => {
    setCurrentFilter(value);
    setfiltertasklist(value === "All" ? tasks : tasks.filter((t) => t.tasklevel === value))
  }
  return (
    <>
      <header>
        <h1>MyTaskBoard</h1>
        {/* <p>my task</p> */}
      </header>

      <Taskbar addnewtasks={addnewtasks} />
      <Taskfilter tasks={tasks} filtertask={filtertask} />
      <TaskList tasks={filtertasklist} completetask={completetask} deleteitem={deleteitem} />
      <TaskProgessBar tasks={filtertasklist} />
      <div id="deletetaskall">
        {tasks.length > 0 ? (
          <button type='submit' onClick={() => {
            settasks([])
          }}>Delete All</button>) : (<></>)
        }
      </div>
    </>
  )
}

export default App
