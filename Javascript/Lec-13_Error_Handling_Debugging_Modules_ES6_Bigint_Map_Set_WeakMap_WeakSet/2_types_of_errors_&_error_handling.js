/***
 *  types Errors in JS:
 * 
 *    Built-in errors in JS:
 *     1. syntax error: means syntax violation of the code.
 * 
 *        eg: missing . on calling a function on object
 * 
 *     2. Runtime error: only get to know the error after executing the code and it may give error at that point in time.
 *        1. Reference Error: Occurs when an invalid refernce is made to an undelared variable, function, array or object.
 *        2. Type Error: Occurs when an operation is performed on a value of unexpected type.
 *        3. Range Error: oocurs when a numeric value is out of the allowable range.
 *        4. URI Error: when there is malformed charcters in the URI. 
 *           eg: /index%E.html 
 *        5. Internal Error: Very generic message and doesn't provide specofoc information about the error.
 *           Eg: via JS engine or JS interpreter. 
 *        6. Network Error: occurs when some failure is there over network while making request of that resource.
 *        7. DOM Exception: Occurs when there something doesn't exist in the DOM tree.
 */


// Example of Syntax error:

// le a = 10;

// let a = 20;

// {
//     var a = 30;
//     console.log(a);
// }


// Runtime error:
// consolelog("hello");


// console.log(a);
// let a;
// console.log("Before");

// let num = 10;

// console.log(num.toUpperCase());

// infinite recursion -> maximum call stack size exceeded
// function fn() {
//     fn();
// }

// fn();

// let a = [];

// a.length = 100**100;

// console.log(a.length);


console.log("Before");
try{
    let a = 10;
    console.log(a);
}catch(error) {
    console.log(error);
}
console.log("After")






