/**
 *  setTimeout() and clearTimeout()
 *     -> it is built-in functions provided by browser not the part of JS.
 *     -> syntax:
 *          setTimeout(cb, delay, param1, param2, ...);
 *          returns you a timerId -> +ve interger
 * 
 *     -> syntax:
 *         clearTimeout(timerId);
 *         it stops the execution of the function specified in the setTimeout() call.
 */

console.log("Before");

const cb = (name, age) => {
    console.log(`Hello, My name is ${name} and my age is ${age}`);
    console.log('Settimeout has been called');
}

const timerId = setTimeout(cb, 3000, "Ashwani", 35);

clearTimeout(timerId);

console.log("After");

// try to execute the cb still after using clearTimeout() -> HW

// How to clear the multiple setTimeout ids.
/**
 *  1. will create an empty array timerId =[]
 *  2. will 3 cbs
 *  3. will 3 setTimeout with individual setTimeout and will into the timerIds.
 *  4. create a function clearAllTimeouts() -> run a for loop over the timerIds array -> clearTimeout(with id);
 *  5. const id = setTimeout(clearAllTimeouts, 2000);
 *   // id = undefined;
 */


