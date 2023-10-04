/**
 *    what is the intuition behind to use promises?
 *      -> what were issues with the callback in async operations?
 *          1. callback hell problem -> due its nesting callback way of writing the code.
 *          2. Inversion of control -> (trust issue)
 *                 // cb based aync fun -> we send cb to third party library functions ->  async  fn call the cb multiple times.
 * 
 *       To solve these 2 above problems, promises came into the picture.
 * 
 *    What are promises in JS?
 *      -> Promises represents the outcome of aync operations in JS.
 *      -> It's an object that represents the eventual completion or failure of aynchronous operations
 *         and its resulting value.
 * 
 *         Object 
 *            1. value
 *                 1.1. umdefined (initial value)
 *                 1.2. value that was supposed to be here, basis on success or failure
 *            2. state 
 *                 2.1. pending (initial state)
 *                 2.2. fullfilled 
 *                         2.2.1 resolved (success case)
 *                         2.2.2 rejected (failure case)
 *       
 *     Why should you learn promise?
 *        -> Because it provides you a way to work with async operations/tasks 
 *           in a more structured and readable manner as comapred to traditional callbacks.
 * 
 *     When should use promises?
 *        ->  when there is delay to get the task completed or not.
 *        -> Async tasks: HTTP calls, reading files or any other operation 
 *                        that doesn't return the results immediately
 * 
 *     Promise API
 *       -> is it of JS ow Browser Environment?
 *           yes, it's a part of JS, was introduced in ES6.
 * 
 *       -> How to write your own promises?
 *     
 *            "Promise" constructor function.
 *   
 *               const promise = new Promise((resolve, reject)=> {
 *                  // async code 
 *               })
 * 
 *       -> How to consume promises?
 *             1. then(): Promise.then(scb, fcb);
 *                   scb(mandatory): success callback method ->  will be called when the promise is getting resolved
 *                   fcb(optional): failure callback method ->  will be called when the promise is rejected 
 *                 returns a new promise that is having the result of callbacks (scb, fcb)
 *             2. Promise.catch(fcb);
 *                   fcb: failure callback method ->  will be called when the promise is rejected
 *                returns a new promise that handle errors.
 *             3. Promise.finally(cb)
 *                   cb: callback method: will be executed whether your promise is getting resolved or rejected.
 * 
 *                    Finally() always invoked irrespective of promise is getting either resolved or rejected.
 *            
 *           
 */

const promise = new Promise((resolve, reject)=> {

    // simulation of the asynchronous operation via setTimeout
    // const {data, error} = fetch(url);
    setTimeout(()=> {
        //resolve("Success data");
        resolve(['banana, apple, pomegranate']);
        //reject(["Could not fetch the data", "Because of internal server"]);
    }, 2000);

});

console.log(promise);


const scb = (result) => {
   console.log(result);
}

const fcb = (error) => {
   console.log(error);
}

// promise.then(scb);

// promise.catch(fcb);

// promise.finally(()=> {
//     // closing the loader
//     console.log('Data has been processed now!');
// });

promise
   .then(scb)
   .catch(fcb)
   .finally(()=> {
    // closing the loader
    console.log('Data has been processed now!');
   });


   /***
    *   Promise.resolve(): param: any value(object, array, primitive values)) you pass
    *                      returns a promise that resolve with given value
    * 
    *   Promise.reject(): param: any value, the reason for the rejection
    *                     returns a promise that rejects with given reason.
    * 
    * 
    * 
    */

// Q-1:
   const promise1 = Promise.resolve(10);
//    const promise2 = Promise.reject(10);
   console.log(promise1);

   promise1.then((res)=>{
       console.log("Value of res,", res); // Value of res,10
   }).catch((err)=> {
      console.log('error is,', err);
   }).finally(()=> {
       console.log("Always invoked");
   });

// Q-2:

// const promise2 = Promise.reject("Data could not fetch!");
//    console.log(promise2);

//    promise2.catch((res)=>{
//        console.log("Value of res,", res); // Value of res,10
//    });

// const promise3 = Promise.reject(()=> {
//     console.log('Data value');
// });

// promise3.then((res)=> {
//    console.log(res);
// });

// promise3.catch((res)=> {
//     console.log(res);
//  })