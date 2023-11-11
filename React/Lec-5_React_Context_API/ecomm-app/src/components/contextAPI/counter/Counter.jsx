/****
 *    What is context API?
 *       -> It's way to share the data among nested components without the need to pass props 
 *          manually through each level of component tree (nesting of components).
 *       -> Use cases: 
 *            1.themes, 
 *            2. user authentication
 *            3. settings etc
 *    How to implement the context API?
 *       Step-1: Create the context 
 *           import { createContext } from 'react';
 * 
 *           const CounterContext = createContext();
 * 
 *           export default CounterContext;
 *       Step-2: Need to create a provider this provider wraps the 
 *               whole appilcation for passing the data to the particlular components.
 * 
 *               you need created Context and useContext()
 * 
 *            Refer: CounterProvider.jsx file 
 *       Step-3: Consume the context
 *             custom to consume the context, but we need use useContext(ContextName);
 * 
 *     What are the benefits you get from context?
 *       1. Global data sharing, you can share data across the components.
 *       2. Simpler state management, It manages the state without complex setup.
 *       3. Flexibility to update any component.
 *       4. It provides you single source of truth.
 *       5. Avoiding the re-rendering which improves performance of react app.
 *       6. Clean code you can write via Context API. 
 * 
 */

import { useCounter } from "../../../context/CounterProvider";

const Counter = () => {
   
    const { handleIncrement } = useCounter();
    console.log('Counter');

    return (
        <>
          <button style={{fontSize: '24px'}} onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default Counter;

