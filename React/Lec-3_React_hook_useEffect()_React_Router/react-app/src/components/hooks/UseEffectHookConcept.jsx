/***
 *  What is react dev tools?
 *     -> It's browser extention that helps the developers 
 *        to inspect, debug and understand the react app effectively.
 * 
    What is hook in react?
        - a hook is function that allows you to use the state in a functional component.
        - hools always use in functional components.
        - There are 2 kinds of hooks available in React:
            1. built-in hooks: useState(), useEffect(), useMemo(), useCallback() etc
            2. custom hooks -> useFetch() - user defined hooks can also be created via prefix "use"

        - useState():
            -> is a built-in hook that manages the state of a functional component.
            -> useState doesn’t return just a variable, t returns an array, where the first element is the state variable 
                that stores the value and the second element is a function to update the value of the variable.

        - useEffect():
            -> A built-in hook that is generally used for handling the side-effects in functional components.
            -> It helps you to sychronize the component with an external system such make API calls, third party library to call or to be used etc. 
            -> syntax:
                useEffect(callback, dependencyArray?);
                  -> callback is function where you can execute your logic.
                  -> dependencyArray(optional): an array dependencies. If you you provide value in these dependecies based on 
                     the state values and if the states are going to update 
                     then useEffect will run based dependencies you have been passing.
                  -> call useEffect at the top level of your functional components.

                  -> Eg:
                        1.  useEffect(()=>{
                             // you can execute your logic
                            }); -> useEffect will execute you logic with every re-rendering.

                            1. First usecase we should never use because it will expensive opeartion while executing our logic.

                        2. useEffect(()=>{
                              // you can execute your logic
                          }, []); -> useEffect will execute your logic only once

                        3. useEffect(()=>{
                            // you can execute your logic
                        }, [state-var1, statevar2, ...]);

                        4.useEffect(()=>{
                            // you can execute your logic and event listerners, setInterval, subcribing some events
                            
                            return () =>{
                                // all clean activities will be coming such use clearInterval, removeEventListerner, to unsubscribe events
                            }

                        }, [state-var1, statevar2, ...]);
            -> What is lifecycle of the component?

                 -> Lifecycle of a component is divided into 3 parts:
                     1. Mounting: 
                        -> Occurs when a functional component is intially created and inserted into the DOM.
                        -> component gets constructed and intial rendering takes place.
                        -> During Mounting Phase:
                           - Fn Componnet is executed.
                           - state and props are intialized.
                           - component returns JSX and rendered on the DOM.
                           - If an Effects are specified via useEffect() are also executed.
                        ->  useEffect(()=>{
                              // you can execute your logic
                            }, []); -> useEffect will execute your logic only once
                     2. Updating: 
                        -> re-renders due to changes in states or props
                        -> During Updating Phase:
                           - Changes in states or props triggers re-rendering.
                           - Component's function is called again.
                           - The updated JSX is rendered by reflecting the changes.
                           - If an Effect is specified via useEffect() that will run the logix after each update.
                           ->  useEffect(()=>{
                              // you can execute your logic
                            }, [dep1, dep2, ....]); -> useEffect will execute your logic on every state or props change
                     3. UnMounting:
                        -> Occurs when a functional component is removed from the DOM.
                        -> useEffect(()=>{
                            // you can execute your logic and event listerners, setInterval, subcribing some events
                            
                            return () =>{
                                // all clean activities will be coming such use clearInterval, removeEventListerner, to unsubscribe events
                            } -> When you do the cleanup activity in useEffect() via return a function or when you navigate from one page to another.

                        }, [state-var1, statevar2, ...]);

                

 * 
 * 
 * 
 */

import { useEffect, useState } from "react";

const UseEffectHookConcept = () => {

    const [count, setCount] = useState(0);

    const componentMounting = () => {
        console.log("component mounted");
    }

    useEffect(()=>{
      // here you put your logic
        componentMounting();

        return () => {
            console.log('component umounted')
        }
    }, []);

    useEffect(()=>{
        // here you put your logic
          console.log("Updating the component")
    }, [count, componentMounting]);

    const handleIncrement = () => {
        //setCount(prevCount => prevCount + 1);
        setCount(count +  1);
    }

    return (
        <>
           <p>Counter value: {count}</p>
           <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default UseEffectHookConcept;