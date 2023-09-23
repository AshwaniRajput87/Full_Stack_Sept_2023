/***
 *    What is HOF?
 *       -> In JS, you can return a function from another function -> Higher Order Function (HOF).
 *       -> There are 2 types HOF:
 *            1. Custom HOF
 *            2. Built-in HOF (native JS function like for array, we have map(), filter(), reduce());
 */

function fn(x) {
    console.log("I am a function that returns a function");

    return function inner() {
        console.log(x);
        console.log("Returned from fn");
    }
}

const rFn = fn(10);

rFn();

