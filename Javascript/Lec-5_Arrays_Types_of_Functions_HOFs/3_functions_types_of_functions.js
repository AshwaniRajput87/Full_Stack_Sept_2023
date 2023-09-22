/***
 *   What is function?
 *     -> A function is block of code that accomplish a specific task.
 * 
 *     -> Let's say you need to write a program to create a rectangle and fill the colors. To solve this problem
 *        1. a function to draw the rectangle.
 *        2. a function to fill the color inside the rectangle. 
 * 
 *     -> Syntax
 *        function <function_name>(arg1, arg2, ...,argN){
 *           //code
 *        }
 *     -> How to write the function?
 *        // function definition
            function fn() {
                console.log('Hi i am fn');
            }

            // function calling
            fn();

        -> Types of function
            1. Normal function: a function with name and just call it.
                                function fn() {
                                    console.log('Hi i am fn');
                                }

                                // function calling
                                fn();
            2. Function Expression: when a function is assigned to a variable.
                 // Function Expression:
                    const fnEx = function(){
                        console.log('Hi i am fn expression');
                    }

                    fnEx(); 
                    
            IQ: What is the difference b/w normal function and function expression?
                -> hoisting is theer in case of normal function.
                -> But in case of function expression, hoisting won't there.

            3. Arrow function:
                -> it was introduced in ES6.
                -> a compact syntax of writing the function, one-liner function.

            4. IIFE (Immediately innvoked function expression)
                -> When a function is immediately executed after it is defined.
                -> you need to call the function explicilty.
                (
                    function() {
                        console.log('Hello Ashwani')
                    }
                )();

                usecases of IIFE:
                   1. Encapsulation
                   2. Data privacy
                   3. avoiding the variable hoisting
                   4. Module design pattern

            5. Recursive function:
                -> Functions that call themselves until the base condition is met.                   
 *        
 * 
 */


// function definition
function fn() {
    console.log('Hi i am fn');
}

function fn() {
    console.log('Hi i am fn');

    // you writing diffrent here
}

function fn() {
    console.log('Hi i am fn');
}

// function calling
fn();


// Function Expression:
const fnEx = function(){
    console.log('Hi i am fn expression');
}

fnEx();

// Arrow Function

const multiply = (a,b) => a*b;

// const multiply = (a,b) => {
//     return a*b;
// }

console.log(multiply(2,3));

(function() {
    console.log('Hello Ashwani')
})();

// Define Module design pattern via IIFE
const paymentModule = (function(){
    const PAN = 'AFGTRD489K'; // private variable

    const processingPANData = () => { // private method
        console.log(PAN);
    }

    const dataProcessed = () => {
        console.log('data processed');
    }

    const init = () => { // public method
        processingPANData();
    }

    return {
        init,
        dataProcessed
        // secondMethod,
    }
       
})();


// module.PAN;
// module.processingPANData();

paymentModule.init();
// module.dataProcessed();


// recursive function:

const fact = (n) => {
  if (n===0 || n===1) {
    return 1;
  }

  return n * fact(n-1);
}


console.log(fact(5)); // 5*4*3*2*1 = 120

// doubt session:
   // https://www.scaler.com/academy/mentee-dashboard/class/106777/assignment/problems/59557?navref=cl_tt_lst_sl
   

   let a = 'ashwani';
   let b = 2;