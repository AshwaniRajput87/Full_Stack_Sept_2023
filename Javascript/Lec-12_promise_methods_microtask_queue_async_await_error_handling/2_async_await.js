/***
 *   What is async/await?
 *      -> introduced in es8(2017)
 *      -> async/await are the keywords introduced.
 *      -> syntactic sugar of consuming the promises.
 *      -> provide a more concise and readable of way to write asinchronous code in JS.
 */

// const fs  = require('fs');

// console.log("Before");

// const promise = fs.promises.readFile('./f1.txt');

// promise.then((content)=>{
//    console.log('Content of the file : ', '' + content);
// }).catch((error)=> {
//      console.log(error);
// })

// console.log('After');

// async/await syntax

const fs  = require('fs');

console.log("Before");

const promise1 = fs.promises.readFile('./f2.txt');

// promise1.then((content)=>{
//    console.log('Content of the file : ', '' + content);
// }).catch((error)=> {
//      console.log(error);
// })

// const data = await promise1;
// console.log(data);

// consumption of promises via async/await

(async()=>{
    try{
       const data = await promise1;
       console.log('' + data);
    } catch(err) {
        console.log(err);
    } finally {
        console.log("File data has been read or not!");
    }
})();

console.log('After');



