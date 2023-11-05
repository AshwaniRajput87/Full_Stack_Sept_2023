import { useState } from "react";

const CreateTask = ({ getTask }) => {
    const [inputText, setInputText] = useState('');


    const setInputData = (event) => {
        setInputText(event.target.value);
        console.log(event.target.value);
    } 

    const addTask = () => {
        console.log(inputText);
        getTask(inputText);
        setInputText('');  // inputText = ''
    }

    return (
        <>
          <input 
            type="text"
            value={inputText}
            onChange={setInputData}
          />
          <button onClick={addTask}>Create Task</button>
        </>
    )
}

export default CreateTask;