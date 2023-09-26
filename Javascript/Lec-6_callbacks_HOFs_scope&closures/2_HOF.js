/***
 *    What is HOF?
 *      -> HOF is a function that meets one or both of the following criteria:
           1. It takes one or more functions as arguments.
           2. It returns a function as its result.
 *       -> There are 2 types HOF:
 *            1. Custom HOF
 *            2. Built-in HOF (native JS function like for array, we have map(), filter(), reduce());
 */

//Example-1:
function fn(x) {
    console.log("I am a function that returns a function");

    return function inner() {
        console.log(x);
        console.log("Returned from fn");
    }
}

const rFn = fn(10);

rFn();

//Example-2:
// HOF Takes a function as an argument
const applyOperation = (operation, x, y) => {
  return operation(x, y);
}

// Function add can be passed as an argument
const  add = (x, y)  => {
  return x + y;
}

// Function multiply can be passed as an argument
const multiply = (x, y) => {
  return x * y;
}

// Using applyOperation with different operations
console.log(applyOperation(add, 5, 3)); //8
console.log(applyOperation(multiply, 10, 4)); //40


