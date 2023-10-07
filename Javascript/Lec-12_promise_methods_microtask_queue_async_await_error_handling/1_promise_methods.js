/**
 *  What is race condition? 
 *    -> A race condition occurs when 2 or more async opertions attempt to access 
 *       shared resources or modify the same data simultaneously, the final outcome will unpredictable.
 * 
 *    -> it can lead to unexpected behavior -> data corruption, errors or unexpected outcomes.
 * 
 *   How to solve the race condition?
 * 
 *     Approach:
 *       1. use promises
 *            -> all(), allSettled(), race()
 *       2. You can flag for the async operations make the network request basis on condition.
 * 
 *      all():
 *         -> Promise.all(): Takes an array of promises and 
 *            returns a new promise that fulfills when all input promises fullfilled.
 * 
 *         -> If all the promises are getting resolved then we get the array of data, else if any promise
 *            is getting failed then the resulting promise will reject also.
 * 
 *         -> if any in between promises are getting rejected then rest of promises are not getting executed.
 * 
 *      allSettled():
 *         ->  Takes an array of promises and returns a new promise that fulfills when all input promises have settled,
 *             regardless of fullfilled or rejection of the promises.
 *      all() vs allSettled()
 *         Promise.all(): Resolves if all the promises are fulfilled or rejects if any one promise rejects.
 *         Promise.allSettled(): Resolves when promise are settled(fulfilled or rejected) and returns  
 *                               an array with result of each promise, including the status of each promise.
 * 
 *      race(): 
 *        -> takes an array of promises and returns a new promise that settles with the result of the first promise to settle,
 *           whether its reolved or rejected
 * 
 *       -> Useful when you want to wait for the fatest promise to complete, regardless whether it fulfills or rejects 
 *   
 */


// const promise1 = Promise.resolve(10);
// //const promise2 = Promise.resolve("Hello Ashwani");
// const promise2 = Promise.reject(new Error("Promise 2 rejected"));
// const promise3 = Promise.resolve(true);

// Promise.all([promise1, promise2, promise3])
// .then((values)=> {
//     console.log(values); // [10, "Hello Ashwani", true]
// }).catch((error)=>{
//     console.log('Error,', error); // Error Promise 2 rejected
// });

// Promise.allSettled([promise1, promise2, promise3])
// .then((values)=> {
//     console.log(values); // [10, "Hello Ashwani", true]
// }).catch((error)=>{
//     console.log('Error,', error); // Error Promise 2 rejected
// });

const promise1 = new Promise((resolve)=>{
    setTimeout(resolve, 500, 'Result 1');
});

const promise2 = new Promise((resolve, reject)=> {
    setTimeout(reject, 500, new Error('Rejected 2'))
});

Promise.race([promise1, promise2]).then((res)=>{
    console.log(res);
}).catch((error)=> {
    console.log(error);
});

/***
 *   why promises are better than you callbacks?
 *     -> Promise can either  be resolved or rejected once in it's lifetime.
 *     -> callbacks of promises goes to a separate queue known as micro task queue 
 *         and it has higher priority than the normal callback queue.
 * 
 *   What is microtask queue?
 * 
 *     -> It's component of Javascript event loop.
 * 
 *     -> responsible for handling the promises 
 *        and these are those task that has highest priority than regular tasks.
 *   
 *     -> Example of microtask queue: Promise callbacks registered with then(()=>{}) or catch(()=>{})
 *   
 *    Priority of queues - tasks(normal synchronous code), callback queue, promises(microtask queue), UI Rendering(requestAnimationFrame())
 *        -> callback queue, microtask queue, request animation frame queue.
 * 
 *        -> synchronous code > Microtask queue ~= queueMicrotask(But on the placement of promise or queueMicrotask code) > callback queue ~= Request animation frame queue  
 *         
 *        -> requestAnimationFrame() queue: callbacks of requestAnimationFrame() will be executed here.
 */

console.log('A - Before, Synchronous task');

requestAnimationFrame(()=>{
    console.log('B - request animation frame queue');
});

setTimeout(()=> {
   console.log("C - callback queue")
}, 0);

Promise.resolve(10).then(()=>{
    console.log('E - microtask queue');
}).catch((error)=>{
   console.log('F - microtask queue') 
});

queueMicrotask(()=>{
    console.log("D - microtask queue")
});

console.log("G - After, Synchronous task");










