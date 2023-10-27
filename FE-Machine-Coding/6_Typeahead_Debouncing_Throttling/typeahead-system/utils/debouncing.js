/***
 *  What is debouncing?
 *     -> A technique used in web deevlopment to control the frequency of a function execution
 *        especially in the response of frequent events like typing in input fields, scrolling and window resizing.
 * 
 *     -> It ensures that a function is called ony once after a series of quick consecutive calls.
 *    
 *     -> Use cases:
 *         1. User Input (Auto Search Suggestions, form validation)
 *         2. window resize
 *         3. scroll events
 *         4. Other situations with frequently updating the expensive operations.
 */

export const debounce = (cb, delay) => {

    let timeoutId;

    return function(...args) { // [a,b,c] -> array of arguments
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
           cb.apply(this, args);
           timeoutId = null;
        }, delay);
    }
}