import { useDispatch, useSelector } from "react-redux";
import { CounterAction } from "../../redux/slices/CounterSlice";

const CounterWithRedux = () => {

    const count = useSelector((store)=> store.counter.value);
    
    const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(CounterAction.increment());
    }

    const handleDecrement = () => {
      dispatch(CounterAction.decrement());  
    }
    
    return (
        <>
            <h2>Counter with redux</h2>
            <button onClick={handleIncrement}>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}


export default CounterWithRedux;