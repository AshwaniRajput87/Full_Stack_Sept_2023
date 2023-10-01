/***
 *  Asynchronous Programming?
 *     -> A way to execute the tasks without waiting for them to finish before moving on to the next task.
 *     -> Allows you to perform multiple actions concurrently, making efficient usage of time and resources.
 * 
 *  Lets understand these terms:
 *   1. Synchronous
 *   2. Asynchronous
 *        -> Both terms are being used w.r.t code -> sync code and async code. 
 *   3. Serial 
 *   4. Parallel
 *        -> When we talk about tasks, they can either serial or parallel.
 * 
 *        Serial task: The tasks that are dependent. -> In other words, tasks that can be executed one after another.
 *        Paralle task: The tasks that are independent. -> in other words, tasks that can executed simultaneously or concurrently.
 * 
 *        Let's understand the synchronous code and asynchronous code via nodeJS.
 *          - fs -> File system and 
 *            it provides the sync and async methods to readt the content of a file
 * 
 */


//Synchronous code:
// fs.readFileSync() -> async method.
// const fs = require('fs');

// console.log("Before");

// const content = fs.readFileSync("./f1.txt");

// console.log("Content of the file: ", '' + content);

// console.log("After");

// Asynchronous code:
// const fs = require('fs');

// console.log("Before");

// const cb = (err, data) => {
//    console.log('' + data);
// }

// fs.readFile("./f1.txt", cb);

// console.log("After");

// Whenever we are writing async code -> callback fn is being used.


// PS: lets read the the content of 2 files via synchronous code

// const fs = require("fs");

// console.log("Before");

// const content1 = fs.readFileSync("./f1.txt");
// const content2 = fs.readFileSync("./f2.txt");

// console.log("Content of the file: ", content1 + content2);

// console.log("After");

// PS: lets read the the content of 2 files via asynchronous code
// fs.readFile() -> async method.
// const fs = require("fs");

// console.log("Before");

// fs.readFile('./f1.txt', (err, data) => { // way of achieving the serial task
//     const content1 = data;

//     fs.readFile('./f2.txt', (err, data)=> {
//         const content2 = data;
//         console.log("Content of the file: ", content1 + content2);
//     })
// })

// console.log("After");

// PS: write the async code to read the content of both the files but parallely

const fs = require("fs");

console.log("Before");

fs.readFile('./f1.txt', (err, data) => { // way of achieving the serial task
    console.log(''+ data);
});

fs.readFile('./f2.txt', (err, data)=> {
    console.log('' + data);
})

console.log("After");



