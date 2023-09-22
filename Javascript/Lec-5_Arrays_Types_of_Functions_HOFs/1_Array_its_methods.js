/***
 *   What is an array in JS?
 *     -> An array is a built-in object in JS which is 
 *         used to store multiple values in a single variable.
 * 
 *     -> Each value is called an element and access via an index.
 * 
 *     -> How to create an array in JS?
 *        -> const arr = [];
 *        -> typeof arr -> 'object'
 *        -> to add dynamic elements in array, use the built-in methods of an array.
 *        -> to access the arr element, you need an index.
 *     -> How to add the methods in your Array object?
 *        -> Array.protype.sum = function() {
 *              // custom logic
 *          }
 * 
 *     -> most used methods of an array.
 *         1. push() -> add one or more elements at the end of an array.
 *         2. pop() -> remove last elements from an array.
 *         3. unshift() -> add one or more elements at the beginning of an array.
 *         4. shift() -> removes first element from the array.
 *         5. concat() -> combines 2 or more arrays and retuns a new array -> shallow copy of an array it will return.
 *         6. join() -> joins all the elments of an array into a string.
 *         7. toString() -> converts an array to a string.
 *         8. slice() -> Extracts a portion of an array into a new array, without modifting the original array.
 *                       array.slice(start, end); -> return the shallow copy of an array.
 *                       it accespts the -ve index as well -> slice(-3)
 *                            0,1,2,3,4
 *                           [1,2,3,4,5]
 *                          -5,-4,-3,-2,-1
 *         9. splice() -> adding, removing and replacing the elements from an array. 
 *                        but it doesn't create the shallow copy of returned array;
 *                        it doesn't accept the -ve index;
 * 
 *         10. indexOf() -> returns first index of a specified element inside an arary;
 *         11. lastIndexof() -> returns last index of a specified element inside an array;
 *         12. includes() -> retun a boolean value basis on the specified element available in an array or not;
 *         13. reverse() -> reverese an array.
 *         14. isArray() -> to whether it's an array or not.
 */

const arr = [1,2,3,4,5];

Array.prototype.sum = function() {

    let sum = 0;

    for(let i =0 ; i<this.length; i++) {
        sum+=this[i];
    }
    console.log(sum);
    return sum;
}

arr.sum();


