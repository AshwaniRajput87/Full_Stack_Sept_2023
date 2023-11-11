import { useState, useContext } from 'react';
import CounterContext from "./CounterContext";

const CounterProvider = ({ children }) => {
    
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <CounterContext.Provider value={{count, handleIncrement, handleDecrement}}>
            {children}
        </CounterContext.Provider>
    )  
}

export const useCounter = () =>{
    return useContext(CounterContext);
}

export default CounterProvider;