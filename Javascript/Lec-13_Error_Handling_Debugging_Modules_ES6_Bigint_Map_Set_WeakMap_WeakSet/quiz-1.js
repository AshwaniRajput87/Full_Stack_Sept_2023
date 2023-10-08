'use strict';

// console.log("Before");
// try {
//     setTimeout(() => {
//         console.log("set timeout is executed");
//         console.log(a);
//     }, 1000);
// } catch (err) {
//     console.log(" message: ", err.message);
//     console.log("name of error: ", err.name);
// } finally{
//     console.log("always be exceuted");
// }
// console.log("After try catch");

// before  always be excuted  after try catch set timeout is executed a is not defined as error

console.log("Before");
setTimeout(() => {
    try {
        console.log("set timeout is executed");
        console.log(a);
    } catch (err) {
        console.log(" message: ", err.message);
        console.log("name of error: ", err.name);
    } finally{
        console.log("always be exceuted");
    }
}, 1000);
console.log("After try catch");