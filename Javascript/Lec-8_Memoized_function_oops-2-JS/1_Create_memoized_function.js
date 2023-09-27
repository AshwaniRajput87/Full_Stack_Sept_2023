/****
 *   What is memoization?
 *      -> It's a technique used to optimize function calls 
 *         by caching the results of expensive computations based on input arguments.
 *      -> Memoized functions improve performance 
 *          when they are repeatedly called with the same arguments
 */


function calc(n) {
    let sum = 0;

    for(let i=0; i<n; i++) {
        sum+=i;
    }

    return sum;
}

console.time();
const res = calc(1000000);
console.log('results of expensive method, ', res);
console.timeEnd();


// create a memoized function
const memoize = (fn) => {
    let cache = {};

    return function(n) {
        if(cache[n] !== undefined){ // if result is present in cache, then will the cache result directly
           return cache[n];
        } else {
           const result =  fn(n);
           cache[n] = result;
           return result;
        }
    }
}

console.time();
const efficientCalcFn = memoize(calc);
const res1 = efficientCalcFn(1000);
console.log('results of memoized function, ', res1);
console.timeEnd();



