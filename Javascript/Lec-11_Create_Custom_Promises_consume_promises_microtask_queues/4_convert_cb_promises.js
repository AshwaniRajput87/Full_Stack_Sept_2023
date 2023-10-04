/**
 * 
 * converting a cb to promise -> promisify
 * 
 */

const fs = require("fs");
const { resolve } = require("path");

const promiseReadFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {

            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

console.log("Before");

const promise = promiseReadFile("./f2.txt");

// console.log(promise);

// promise.then((data, error)=> {
//     console.log('' + data);
// }).catch((err)=>{
//     console.log(err);
// });

// promise.catch((error)=> {
//     // console.log('' + data);
//     console.log(error);
//     return 10;
// }).catch((error)=>{
//     // console.log(data);
//     console.log(error);
// });

promise.finally(()=> {
    // console.log('' + data);
    console.log("Finally 1");
    return 10;
}).finally((data)=>{
    console.log(data);
    console.log("Finally 2");
});

console.log("After");