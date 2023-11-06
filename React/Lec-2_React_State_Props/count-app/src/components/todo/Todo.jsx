import { useState } from "react";
import CreateTask from "../createTask";
import ListItems from "../listItems";

const Todo = () => {

    const [tasks, setTasks] = useState([]);

    const getTask = (currentTask) => {
      const newTasks = [...tasks];
      newTasks.push({
          id: Date.now(),
          task: currentTask
      });
      setTasks(newTasks);
    }

    const removeTask = (event) => {
      //  console.log(event.target.id);
      const remainingTasks = tasks.filter((task)=>{
          return task.id !== parseInt(event.target.id);
      });
      setTasks(remainingTasks);
    }

  return (
    <>
      <h1> Todo App</h1>
      <CreateTask getTask = {getTask}/>
      <ListItems taskList = {tasks} removeTask = { removeTask }/>
    </>
  )
}

export default Todo;
