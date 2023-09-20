/***
 *  Problem exist before using the shallow copy:
 *      -> When we copy an object to another object then 
 *         the original object is going to be modified.
 * 
 *  Shallow copy:
 *      -> Will create a new copy of top-level properties of an object but 
 *         it doesn't create the new copy of nested object's properties rather than
 *         it will keep the reference of the nested object's properties.
 * 
 *      -> Several ways of shallow copy an object:
 *         1.) Using spread operator ('...').
 *         2.) Using Object.assign();
 *         3.) Using Object.create();
 * 
 *      -> Sevral ways of shallow copy for an array:
 *         1.) Using spread operator {...}
 *         2.) built-in concat() method of an array
 *         3.) built-in method of array slice()
 * 
 * Deep copy:
 *      -> Creates an independent copy of an object or an array, including the nested objects or arrays.
 *      -> Modfifying the copied object and this won't impact the original object or nested object.
 * 
 *      -> Several ways to mplement the deep copy:
 *         1.) JSON.parse(JSON.stringify(object));
 *         2.) loadash -> _.cloneDeep() -> // https://onecompiler.com/nodejs/3zcs6wrdv
 * 
 */


// Shallow copy for an object


// const person = {
//     name: 'Ashwin',
//     age:32,
// }

//const person3 = {};


// const person2 = person;

// const person2 = {...person}; //-> using spread operator

// const person2 = Object.assign({}, person); 

// person2.name = 'Amit';

// const person3 = Object.create(person); 
// person3.name = 'Hemant';
// person3.age = 39;

// console.log(person2); //{name:'Hemant', age:32}

// console.log(person3); //{name:'Hemant', age:32}

// console.log(person); //{name:'Hemant', age:32} -> Call by reference

const person = {
    name: 'Ashwin',
    age:32,
    address: {
        streetNo: 'B-40',
        city: 'Delhi',
        country: 'India',
        // data: {
        //    x: 10,
        //    y: 20,
        // }
    }
}

const person2 = {...person};

person2.name = 'Abhijeet';
person2.address.city = 'Banglore';

console.log(person2);

console.log(person);


// Shallow copy for an array
const arr = [1,2,3];

// const arr1 = [...arr];

let arr1 = [];
arr1 = arr1.concat(arr);
for(let i=0; i<arr1.length; i++) {
    arr1[i]*=2;
}

console.log(arr1); // [2,4,6]
console.log(arr); // [1,2,3]

// Implement deep copy of nested object

const person1 = {
    name: 'Ashwin',
    age:32,
    address: {
        streetNo: 'B-40',
        city: 'Delhi',
        country: 'India'
    }
}

// const person3 = {...person1};

const nestedCopy = JSON.stringify(person1)

console.log(nestedCopy);

const parsedJson = JSON.parse(nestedCopy);

console.log(parsedJson);

const person3 = JSON.parse(JSON.stringify(person1));

person3.name = 'Abhijeet';
person3.address.city = 'Banglore';

console.log(person3);

console.log(person1);

