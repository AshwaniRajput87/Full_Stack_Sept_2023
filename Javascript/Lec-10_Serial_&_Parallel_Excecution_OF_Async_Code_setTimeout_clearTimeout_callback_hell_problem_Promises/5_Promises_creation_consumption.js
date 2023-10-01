/***
 *  Promises -> refers to notes.
 * 
 *   consumption of promises:
 *      promise.then(): -> to get the success value.
 *      promise.catch(): -> to get the error value.
 */

const fs = require("fs");

console.log("Before");

const promise = fs.promises.readFile('./f1.txt');

// promise.then((data)=> {
//     console.log("File data,", "" + data);
// });

// promise.catch((error)=> {
//     console.log("Error,", error);
// });

promise.then((data)=> {
    console.log("File data,", "" + data);
}).catch((error)=> {
    console.log("Error,", error);
});

// console.log(promise);

console.log("After")




// doubt session:

const timerId = setTimeout(()=> {
    console.log("Invoking this cb method")
}, 2000);

const fn = (timerId) => {
    // for data editing you need a id
    // timerId is used for clearTimeout()/clearInterval() methods
}