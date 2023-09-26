/***
 *   What is closure?
 *     -> It's javascript lexical scoping technique 
 *        used to preserve variables from a 
 *        function's outer scope to its inner scope.
 * 
 *     -> In lexical scoping, the scope of variable is 
 *       defined by its position in the source code.
 * 
 * 
 *     -> closure: inner fn forms the closure over outer function's variable and it's variable 
 *                 are preserved/present even if we remove outer fn from the call stack.
 *     -> When does the closure form? -> when inner function is hoisted, it forms closure over outer variable.
 */