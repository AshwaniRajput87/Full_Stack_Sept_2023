/**
 *   What is props drilling problem?
 * 
 *       -> It is situation where you pass the props down through the multiple levels of nested components.
 *       -> It leads you to code that's harder to manage and maintain.
 *       -> It causes a problem of re-rendering the components.
 *       -> To avoid the props drilling problem, couple of solutios you can implement
 *          1. React Context API.
 *          2. Redux (It's third library of state management)
 *          3. Custom hooks
 */

import { useState } from 'react';
import Child from './Child';
import './parent.css'

const Parent = () => {
    //const data = "Hello Tony";
    const [data, setData] = useState('Hello Umar');
    return (
        <>
           <Child data={data}/>
        </>
    )
}

export default Parent;