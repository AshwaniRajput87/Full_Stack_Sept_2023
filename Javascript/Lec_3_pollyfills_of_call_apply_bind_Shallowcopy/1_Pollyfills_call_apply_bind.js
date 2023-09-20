/***
 *    What is polyfill?
 *       -> Polyfill is a code snippet or JS library that provide modern 
 *          functionality to the older browsers or environments that don't support those features natively.
 *    
 *    When to use polyfills?
 * 
 *       -> 1. Cross-browser compatibility -> To support older browsers or env.  
 *       -> 2. For any JS framework -> there must be support of writing the polyfills or 
 *                the framework must be compatible to the older browsers.  
 * 
 *    call(), apply() and bind() -> built-in functions in JS
 *     
 *    1. call() -> functionName.call(context, arg1, arg2, ...argN);
 *    2. apply() -> functionName.apply(context, [arg1, arg2, ...argN]);
 *    3. bind() -> const bindFn = functionName.bind(context, arg1, arg2, ...argN);
 *                 bindFn(args);
 */


// function showPersonDetails(city, country) {
//     console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
// }

const person1 = {
    firstName: 'Ashwani',
    lastName: 'Rajput'
}

const person2 = {
    firstName: 'Satish',
    lastName: 'Kumar'
}

// showPersonDetails.call(person1, "Delhi", "India");

// showPersonDetails.apply(person2, ["Banglore", "India"]);


const person = {
    firstName: 'Shambhu',
    lastName: 'Kumar',
    sayHello(city) {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} - ${city}`)
    }
}

// person.sayHello();

// const greetMsg = person.sayHello.bind(person);
// greetMsg("Delhi","India");

// const greetMsg1 = person.sayHello.bind(person1);
// greetMsg1();


/***
 *   polyfill of call(), apply() and bind()
 *   ================================
 */

Function.prototype.myCall = function(context, ...args) { // array of arguments i will be getting ["Delhi", "India"]
    const currentContext = context || globalThis;
                           //[context is your object that you passing in myCall()]
    currentContext.fn = this; // this holds the reference of function that you want to call (showPersonDetails)

    const result = currentContext.fn(...args);

    return result;
}

//showPersonDetails.myCall(person2, "Delhi", "India");


Function.prototype.myApply = function(context, args) { // array of arguments i will be getting ["Delhi", "India"]
    const currentContext = context || globalThis;
                           //[context is your object that you passing in myCall()]
    currentContext.fn = this; // this holds the reference of function that you want to call (showPersonDetails)

    const result = currentContext.fn(...args);

    return result;
}

//showPersonDetails.myApply(person, ["Banglore", "India"]);


Function.prototype.myBind = function(ctx, ...args) {// ctx -> person, args=[]
    // console.log(args);

    const callback = this;  // here this contains the ref of function that you are invoking with myBind

    return function (...innerArgs) { // innerArgs = ["Delhi", "India"]

        return callback.apply(ctx, args.concat(innerArgs));
       
    }

}

function showPersonDetails(city, country, greetMsg) {
    console.log(`${greetMsg}, ${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const greetMsg = person.sayHello.myBind(person1, "Delhi2", "India");
greetMsg("Delhi", "India");

const showData = showPersonDetails.myBind(person2, "Delhi", "India");
showData('Hi');
