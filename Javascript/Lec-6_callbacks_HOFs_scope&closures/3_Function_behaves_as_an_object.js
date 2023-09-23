/****
 *   Function can behave as an object:
 * 
 *     -> We can add properties and methods to a function like an object.
 */

   function fn () {
    console.log("Hello i am fn");
   }

   fn.count = 0;
   fn.printCount = function() {
    console.log("Count value is ",this.count);

    return function inner() {
       return 5;
    }

   }

   
   fn();

   const rFn = fn.printCount();
//    console.log(fn.printCount().inner());
console.log(rFn());

// Imp IQ-> Amazon and Flipcart

 // computeAmount().lacs(2).lacs(5).value() -> HW

 /***
  *  How to store functions in an array?
  */

 const greet = (name) => {
    console.log(`Hello ${name}`);
 }

 const processedData = (x,y) => {
    console.log('Value of sum is -> ', x+y);
 }

 const fnList = [greet, processedData];

 console.log(fnList);

 fnList[0]("Ashwani");
 fnList[1](10, 20);