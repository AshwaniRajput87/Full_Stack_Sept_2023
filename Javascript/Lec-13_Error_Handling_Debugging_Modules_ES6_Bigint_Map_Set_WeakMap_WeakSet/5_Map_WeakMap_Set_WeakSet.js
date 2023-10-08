/**
 *  map(), filter(), reduce() -> arrays methods
 *   
 *   -> There are 4 distinct data structures used to store and manage collections of data.
 *      1. Map
 *      2. WeakMap
 *      3. Set
 *      4. WeakSet
 *   -> these Data structure introduced in ES6
 */

/***
 *  Map: 
 *    -> allows you to store key-value pairs.
 *    -> provides an order collection of elements where each elements are stored as key-value pair
 *    -> can be of any types including objects and primitives
 *    -> Map provides methods to manipulate and access the elements efficiently
 * 
 *       set(key, value)
 *       get(key)
 *       has(key)
 *       delete(key)
 *       clear()
 *       size()
 *       keys()
 *       value()
 *       
 *     WeakMap:
 *       -> Very similar to Map but few key differences:
 *       -> keys in WeakMap must use objects not primitives.
 *       -> exposes less methods as compared to Map methods.
 *          set(key, value)
 *          get(key)
 *          has(key)
 *          delete(key)
 * 
 *      NOTES:
 *        -> Map mantains strong references,whereas weakmap allows values to be garbage collected 
 *           when their keys are not longer in use.
 */


const myMap = new Map();

// const s1 = Symbol();
// myMap.set(s1, true);
myMap.set('isInstructor', true);
myMap.set("name", 'Ashwin');
myMap.set("name", 'Ashwin');
myMap.set('data', 30);

console.log(myMap);
console.log(myMap.get("name"));

for(let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Do and usage of WeakMap methods -> HW

/**
 *  Set:
 *    -> allows you to store unique values of any type.
 *    -> doesn't allow duplicate elements.
 *    -> maintains insertion order.
 *    -> provides built-in methods to add, delete and check existing elements
 *       
 *       add(value);
 *       has(value)
 *       delete(value)
 *       clear()
 *       size()
 * 
 *   WeakSet:
 *    -> Very similar to Set but few key differences:
 *    -> can store only objects not primitives.
 *    -> exposes less methods as compared to Map methods.
 *          add(value);
 *          has(value)
 *         delete(value)
 * 
 *      NOTES:
 *        -> Set mantains strong references,whereas WeakSet allows values to be garbage collected 
 *           when thier values are not longer in use. 
 */

let set = new Set();

set.add(1);
set.add('data');
set.add(true);

console.log([...set]);

set = null;

console.log(set.size);

let weakSet = new WeakSet();
let obj1 = { id: 1 };// must be an object no primitive values are allowed
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));   // Output: true
console.log(weakSet.has(obj2));   // Output: true

weakSet.delete(obj2);
console.log(weakSet.has(obj2));   // Output: false




