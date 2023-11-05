/**
 *   What is state in React?
 *     -> A state is a built-in react object that is used to contain data about the component.
 *     -> A component's state can change over the time, 
 *        whenever the state is going to change then the component has to re-render.
 * 
 *     -> How to respond events in react and update the UI?
 *        - What is an event? -> Remember in DOM API-> just an action like clicking the button, enter the value in input field.

 *     -> What is hook in react?
          - a hook is function that allows you to use the state in a functional component.
          - useState() -> is a built-in hook that manages the state of a functional component.
                       -> useState doesn’t return just a variable, t returns an array, where the first element is the state variable 
                          and the second element is a function to update the value of the variable.
          - There are 2 kinds of hooks available in React:
            1. built-in hooks: useState(), useEffect(), useMemo(), useCallack() etc
            2. custom hooks -> useFetch() - user defined hooks can also be created via prefix "use"
 * 
 * 
 */

import { useState } from "react";
import './counter.css';

const Counter = ({ counter }) => {



    const [count, setCount] = useState(counter); // const count = 0;

    const handleIncrement = () =>{
        // setCount(count + 1);
        setCount((prevCount) => {
            const newCount = prevCount + 1;
            getData(newCount);
            return newCount;
        });
    }

    const handleDecrement = () =>{
        setCount(count - 1);
    }

    const getData = (count) => {
        console.log(count);
    }

    return (
        <>
          <button onClick={ handleIncrement }>+</button>
          <p>Counter Value: {count} </p>
          <button onClick={ handleDecrement }>-</button>
        </>
    )
}

export default Counter;