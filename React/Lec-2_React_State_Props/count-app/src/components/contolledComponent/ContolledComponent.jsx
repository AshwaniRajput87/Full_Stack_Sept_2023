/****
 *   What is controlled component?
 * 
 *     -> If you are dealing with form elements in react, then controlled components come into picture
 *     -> The value of the form element is stored within component and state is going to be used.
 *  
 * 
 * 
 * 
 */

import { useState } from "react";

const ContolledComponent = () => {

    const [inputText, setInputText] = useState('');
    /**
     * const inputText = '';
     * const setInputText = (cb) => {
     *    cb();
     * }
     * 
     */

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    }

    return(
        <>
          <input 
            type="text"
            value={inputText}
            onChange={handleInputChange}
          />
          <p>Input value: {inputText}</p>
        </>
    )
}

export default ContolledComponent;