/***
 *  Application of closure:
 *     1. Infinite Currying function:
 *          ->  It's a technique in FP, that transforms the function of 
 *             multiple arguments into several functions of a single argument 
 *             in a sequence.
 * 
 *          -> Sum(1,2,3,4) -> sum(1)(2)(3)(4) -> Most Imp IQ
 * 
 */

// can you implement infinite currying
   //sum(1)(2)(3)();
   // sum(1)(2)(3)(4)(5)();

   const sum = function(a) { // a = 1
        return function(b) { // b ? undefined, if it is undefined then it won't execute lin no 19
            if(b) { // example-2 , i.e. line no 26 - b =2, 3, 4
                return sum(a+b); // 1+2 = 3 + 3 = 6 + 4 = 10
            }
            return a;
        }
   }
   console.log(sum(1)(0));  // 1
   console.log(sum(1)(2)(3)(4)());// 10

   console.log(sum(1)(2)(3)(4)(5)(6)());// 21


