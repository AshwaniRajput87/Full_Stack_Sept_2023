import { useDispatch, useSelector } from "react-redux";
import { counterWithInputAction } from '../../redux/slices/CounterInputSlice'

const CounterWithInputRedux = () => {

    const counterObj = useSelector((store) => store.counterInput);
    console.log(counterObj);
    const count = counterObj.value;
    const delta = counterObj.delta;

    const dispatch = useDispatch();

    const handleDecrement = () => {
     dispatch(counterWithInputAction.decrement());
    }

    const handleIncrement = () => {
        dispatch(counterWithInputAction.increment());
    }

    const handleUpdateStep = (event) =>{
        const val = Number(event.target.value);
        console.log(val);

        dispatch(counterWithInputAction.updateDelta(val))
    }

    return(

        <>
            <h2>Counter with input redux</h2>
            <button onClick={handleIncrement}>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement}>-</button>
            <div className="input-wrapper">
                <input 
                    type="text"
                    value={delta}
                    onChange={handleUpdateStep}
                />
            </div>
        </>
    )
}

export default CounterWithInputRedux;