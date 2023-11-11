import { useCounter } from "../../../context/CounterProvider";

const Child = () => {

   const { count } = useCounter();

    return (
        <>
           <h1>Counter value: {count}</h1>
        </>
    )

}

export default Child;