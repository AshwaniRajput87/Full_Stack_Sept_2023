/***
 *   What  is lexical scope?
 *       -> Lexical scope refers to the scope of a variable 
 *          which is determined by its position declared 
 *          in the source code during the code execution phase.
 *   
 *      -> A lexical scope allows a function scope 
 *          to access variables in the outer scope.
 * 
 *      -> Outer scope: Every function has the access of its own variables 
 *         as well as any variable declared in its outer scope.
 * 
 *      -> local scope variables get the highest priority over global scope.
 */

// Example:
  var x = 10; // outer scope

  function fn() {
    var x = 20; // local scope/ function scope
    console.log(x); // 20
  }

  fn();

  console.log(x);