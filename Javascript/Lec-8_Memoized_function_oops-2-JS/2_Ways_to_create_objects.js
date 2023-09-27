/***
 *   Ways to create objects in JS?
 *     1. Object literal: In JS, objects are non-primitive data types that 
 *          allows you to store multile collections of data.
 * 
 *       -> In Object literal -> a comma-separated list of key-value/name-value pairs inside of curly braces.
 *       -> Syntax:
 *              const object = {
 *                propertyName: propertyValue
 *              }
 *     2. Object.create(): create a new object and links the prototype of an existing object.
 *     3. Function Constructor
 *     4. class -> introduced in ES6
 */

const person = {
    name: 'Sandeep',
    lastName: undefined,
    address: {
        city: 'Banglore',
        country: 'India'
    },
    greetMsg: function() {
        console.log(`Hello ${this.name}`);
    }
}

console.log(person);
console.log(person.greetMsg());


// create object via Object.create()

const obj = Object.create(person);
console.log(obj);
obj.lastName = 'Kumar';
console.log(obj);

console.log(obj.address);
console.log(obj.greetMsg());

// how to iterate a simple object via for-in loop

const person1 = {
    name: 'Sandeep',
    lastName: 'Kumar',
    age: 30
}

for (const key in person1) {
    console.log(`${key}: ${person1[key]}`);
}

// how to iterate a simple object via Object.keys() and use for-of loop

// Object.keys(): retuns an array of an object's enumerable properties.

console.log(Object.keys(person1)); //['name', 'lastName', 'age']

const keys = Object.keys(person1); //['name', 'lastName', 'age']

for(const key of keys) {
    console.log(`${key}: ${person1[key]}`);
}



/***
 *  3. function constructor:
 *      -> In JS, function constructor is used to create an object.
 *      -> An instance of function constructor is created via new keyword.
 */

function Person(name, age) {

    this.name = name;
    this.age = age;

    this.greetMsg = function() {
        console.log(`Hello ${this.name} and my age is ${this.age}`);
    }
}

const ashwani = new Person("Ashwani Rajput", "35");
console.log(ashwani);
console.log(ashwani.greetMsg());

const umar = new Person("Umar Khan", "28");
console.log(umar);
console.log(umar.greetMsg());

/***
 *  4. class:
 *      -> In JS, class keyword is introduced in ES6 to create object
 */

class Person1 {
    constructor(name, age) {
       this.name = name;
       this.age = age; 
    }

    greetMsg() {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}

const abhijeet = new Person1("Abhijeet", 30);
console.log(abhijeet);
console.log(abhijeet.greetMsg());

