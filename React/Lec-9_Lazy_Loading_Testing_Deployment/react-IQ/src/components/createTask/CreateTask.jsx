import { useEffect, useRef, useState } from "react";

const CreateTask = ({ getTask }) => {
    // const [inputText, setInputText] = useState('');
    // usage of useRef

    const inputRef = useRef(null);

    useEffect(()=>{
      inputRef.current.focus();
    }, []);


    // const setInputData = (event) => {
    //   console.log(event.target.value);
    //   setInputText(event.target.value);
    // } 

    const addTask = () => {
      console.log(inputRef.current.value);
      if(inputRef.current.value) {
        getTask(inputRef.current.value);
        inputRef.current.value = '';
      }
      
      // setInputText('');  // inputText = ''
    }

    return (
        <>
          <input 
            type="text"
            // value={inputText}
            // onChange={setInputData}
            ref={inputRef}
          />
          <button onClick={addTask}>Create Task</button>
        </>
    )
}

export default CreateTask;