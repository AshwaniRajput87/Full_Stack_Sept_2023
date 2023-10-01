/***
 *  setInterval() and clearInterval():
 *    -> built-in functions provided by the browser, not the part of JS.
 *    
 *    -> setInterval(): repeatedly call the cb function at a specified interval.
 *    -> Syntax: setInterval(cb, delay, param1, param2,...) -> returns intervalId
 * 
 *    -> clearInterval(): stops the repeated function execution.
 *    -> Syntax: clearInterval(intervalId)
 */

console.log("Before");

const cb = () => {
    console.log("Set interval has been called");
}

const timerId = setInterval(cb, 1000);

const cancelInterval = () => {
    console.log("Cancelling the interval");
    clearInterval(timerId);
}

setTimeout(cancelInterval, 1000);


console.log("After");

// setTimeout always have the higher priority than the setInterval cb function, if the delay of 
// setTimeout is having less than the delay of setInterval.