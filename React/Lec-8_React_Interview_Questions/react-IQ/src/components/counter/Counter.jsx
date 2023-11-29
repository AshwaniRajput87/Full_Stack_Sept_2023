import { useState } from 'react';
import './counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
       setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    return (
        <div className='container counter-wrapper'>
            <h2>Counter Example with functional Component</h2>
            <button className="btn" onClick={handleIncrement}>+</button>
            <p>count: {count}</p>
            <button className="btn" onClick={handleDecrement}>-</button>
        </div>
    )
}


export default Counter;