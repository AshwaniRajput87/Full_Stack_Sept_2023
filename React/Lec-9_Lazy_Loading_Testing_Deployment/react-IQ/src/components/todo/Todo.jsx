import { useCallback, useState, lazy, Suspense } from "react";

const CreateTask = lazy(()=> import('../createTask'));
const ListItems = lazy(()=> import('../listItems'));

// import CreateTask from "../createTask";
// import ListItems from "../listItems";

const Todo = () => {

    const [tasks, setTasks] = useState([]);
    const [showComponent, setShowComponent] = useState(false);

    const getTask = (currentTask) => {
      const newTasks = [...tasks];
      newTasks.push({
          id: Date.now(),
          task: currentTask
      });
      setTasks(newTasks);
      setShowComponent(true);
    }

    const removeTask = useCallback((id) => {
      const remainingTasks = tasks.filter((task)=>{
        return task.id !== parseInt(id);
      });
      setTasks(remainingTasks)
    }, [tasks])

  return (
    <>
      <h1> Todo App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateTask getTask = {getTask}/>
        {
           showComponent && <ListItems taskList = {tasks} removeTask = { removeTask }/>
        }
      </Suspense>
    </>
  )
}

export default Todo;
