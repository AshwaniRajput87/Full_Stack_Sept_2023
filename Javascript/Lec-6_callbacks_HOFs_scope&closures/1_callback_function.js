/***
 *   what is callback?
 *      -> In JS, you can pass a function as an arguments inside another function, 
 *         and invoked at later point in time. 
 */

function fn(cb) { // cb -> contains the reference of smaller function
    console.log('I am an outer function'); // I am an outer function
    const val = cb();  // I am a smaller fn  and val-> contain "hello"
    return val;
}

function smaller() {
    console.log('I am a smaller fn');
    return "hello";
}

const outerFn = fn(smaller);
console.log(outerFn); // hello
