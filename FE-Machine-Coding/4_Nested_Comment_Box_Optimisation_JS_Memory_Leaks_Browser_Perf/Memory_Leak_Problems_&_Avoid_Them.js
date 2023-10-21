/***
 *    Common JS memory leaks and how to avoid them:
 * 
 *    1. Global variables: 
 *   
 *        -> It may be pollutted (modified via function)
 * 
 *        -> Try to avoid using global variables or use under "use strict"
 * 
 *        -> use let and const instead of var.
 * 
 *     2. closures and scope:
 *      
 *        -> use proper scope and closures data clean up part
 * 
 *     3. Large objects: array of 1000 data at a time you are fetching
 * 
 *        -> Derefernce the large objects;
 *           const data = [
 *            {
 *              .........
 *              .......
 *             }
 *        ];
 *        data = null;
 * 
 *      4. Use mordern JS practices:
 *         -> use let and const instead of var.
 *         -> use arrow function expression
 *         -> use export and import ( creating modules-> reusable code) -> utils
 *         -> Use proper scoping -> use Classes (OOPS)and IIFE
 * 
 *            const PaymentModule = (()=>{ // FP
 * 
 *               
 *            })();
 *      5. Manage your timers and intervals
 *         const timerId = setInterval(()=> {
 *           // Do something
 *        }, 1000);
 * 
 *        // clear the interval, when it's no longer.
 *         //clearInterval(timerId);
 *      6. DOM API leak problem:
 * 
 *          const btn = document.getElementById('btn');
 *          btn.addEventListerner('click' ()=> {this.clickMethod()});
 * 
 *          To imporove DOM API leakage prablems:
 *           -> event.stopPropation(); -> avoid the event bubbling
 *           -> btn.removeEventListerner('click' ()=> {this.clickMethod()});
 * 
 *      7. Avoiding forgotten promises:
 *         
 *         const promise = someAsyncFunction(); // forgotten to use or consume the promises;
 *         new Promise((resolve, reject)=>{
 *              if(data) {
 *                  resolve(data);
 *              } else {
 *                  reject(error);
 *             }
 *          })
 *         promise.then(()=>{
 *           // result handling
 *           // const res = {...data};
 *               res = null;
 *         }).catch(()=>{
 *           // error handling
 *         });
 * 
 */

"use strict";

// var b = undefined;
let b=20;
console.log(b);

function fetchindData() {

    const data = fetchData(); // Data will fetching in this method via fetch API.

    data = null; // release the reference
}