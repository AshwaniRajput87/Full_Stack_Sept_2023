const fs = require('fs');
const promise = Promise.resolve(10);

promise.then((data) => {
    console.log("92", data);   // 92 10
}).then((firstThenVal) =>{
    console.log("113", firstThenVal); // 113 undefined
    return 100;
}).then((secondThenVal) => {
    console.log("116", secondThenVal); //  116 100
    return fs.promises.readFile("./f1.txt") // return error -> if file doesn't exist, 
}).then((thirdThen, error) => { // What is the ouput if f1.txt file exists?
    console.log("120 " + thirdThen); // 120 This is my f1 file.
});

