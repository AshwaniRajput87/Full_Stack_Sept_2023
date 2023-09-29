/**
 *  What is synchronous code?
 *    -> the code that executes line by line or squentially.
 *    -> synchronous means blocking the code
 */


// console.log("Before");

// const fn = () => {
//     for(let i = 0; i<10000000000; i++);
//     console.log('I am fn');
// }

// fn();

// console.log("After");

/**
 * o/p:
 *  Before
 *  I am fn
 *  After
 */


/***
 * what is async code?
 *    -> a non-blocking code that means allows multiple tasks to run simultaneously 
 *       without waiting for each task to finish before moving on the next one.
 *    -> setTimeout() ->  built-in async function 
 */


console.log("Before");

const fn1 = () => {
    console.log('I am fn');
}

setTimeout(fn1, 3000);

console.log("After");

/**
 * o/p:
 *  Before
 *  After
 *  I am fn
 */


/****
 *  Programmer:
 * 
 *     C++ -> JAVA -> pointers were taken care of.
 *     JAVA -> JS -> there are no multi threads are taken care of.
 * 
 *     Inference: you cannot create asynchronous fns as a programmer -> Environment
 * 
 * 
 *     Environment: 
 *        Browser:
 *            provide web API
 *               - console - is not part of JS, part browser env.
 *               - window - not the part of JS
 *               - document - not part of JS
 *               - setTimeout - not part of JS
 *      NodeJS:
 *         - fs: nodeJS
 *         - HTTP: nodeJS
 *         - child_process: nodeJS
 *         - I/O: nodeJS
 * 
 * 
 *     Thumrule:
 *         - Environment -> provides you the features 
 *         - JS: provides the logic (means JS is just like an engine, 
 *              if you fit in aeroplane, it becomes aeroplane, if you fit engine in a bike that will become bike)
 * 
 *     If you learn JS:
 *          - You create web apps
 *          - You can write code for Backend
 *          - Mobile Apps - React native
 *          - Desktop Apps - using Electron JS
 */          