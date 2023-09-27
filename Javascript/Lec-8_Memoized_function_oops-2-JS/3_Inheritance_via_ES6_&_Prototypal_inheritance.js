/**
 * How to inheritance in ES6 way?
 * 
 *    -> Using inheritance, you can define classes that inherit all the properties and methods of you parent class.
 *    -> it allows you to reusability of code or sharing of code.
 *    -> use extends. -> ES6
 */

class Person {
    constructor(name, age) {
       this.name = name;
       this.age = age; 
    }

    greetMsg() {
        console.log(`I am ${this.name} and my age is ${this.age}`);
    }
}

class SuperHuman extends Person {
    constructor(name, age) {
        super(name, age);
    }

    sayHi() {
        console.log(this.greetMsg());
    }
} 

const hemant = new SuperHuman("Hemant", 38);

console.log(hemant.greetMsg());

// How to acheive inheritance for constructor function or for object literal -> use ES5 way
// Do it in home and refer JS class-2 