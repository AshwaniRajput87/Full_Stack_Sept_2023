/**
 *  ES6 data types: 
 *     1)bigint: is a numeric data type and represents integers that are larger than the maximum safer integer.
 *     2)Symbol: is a primitive data type. represents a unique and immutable value.
 */

// Example of big int
const largerNumber = 12367463827643648648284782748248284829748217487n;

const result = largerNumber + 1n;

console.log(result);


// example of symbol
const mySymbol = Symbol();
const s1 = Symbol();

console.log(mySymbol);

const obj = {
  [s1]: 'This is a unique value',
  [s1]: 20
}

const obj1 = {
    [mySymbol]: 'Ashwin',
}

console.log(obj);

// console.log(obj[mySymbol]);
console.log(obj[s1]);
console.log(obj1[mySymbol]);
console.log(Object.keys(obj)); // [] - > return empty array which means symbols are not enumerable.

console.log(Object.keys(obj1));