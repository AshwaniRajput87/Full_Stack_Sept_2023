/**
 *  built-in HOF of an array:
 * 
 *    1. map()
 *    2. polyfill of map()
 *    3. filter()
 *    4. Polyfill of filter() - HW
 *    5. reduce()
 *    6. polyfill of reduce()
 *    7. sort()
 *    8. forEach() 
 */

/***
 *   1. map(): 
 *       -> Executes a callback function on each element of an array.
 *       -> The map will return a new array with new values.
 *       -> It will not modify your original array -> shallow copy;
 */

const arr = [1,2,3,4,5]; // 1. square(1) => 1 
                         // 2. square(2) => 2

const square = elem => elem * elem;
// console.log(square)
const cube = elem => elem * elem * elem;

const squareArr = arr.map(square);

console.log(squareArr);
console.log(arr);

const cubeArr = arr.map(cube);

console.log(cubeArr);
console.log(arr);


const cartItems = [
    {product: 'Laptop', price: 50000.0},
    {product: 'Mobile', price: 20000.0},
    {product: 'Tablet', price: 30000.0},
]

console.log(cartItems);

// const productNames = cartItems.map((item)=>{
//     return item.price;
// });

// console.log(productNames);

/**
 *   polyfill of map()
 * 
 */

Array.prototype.myMap = function(callbackFn) {
    let newArr = [];
   
    for(let i = 0 ; i<this.length; i++){
        let res = callbackFn(this[i]); // 'Laptop' ->  Mobile' -> 'Tablet'
        newArr.push(res);
    }
   return newArr;
}

const productNames = cartItems.myMap((item)=>{
    return item.product;
});

console.log(productNames);

/**
 *   filter()
 *      -> It calls a callback function in each element of an array.
 *      -> Each element's callback function must return a true or false value
 *      -> return new array basis callback function implementation
 */

 
// PS: filter the cart data whose price > 20000.0

 const filterData = cartItems.filter((item)=> {
      return item.price > 20000.0
 });

 console.log(filterData);

 // polyfill of filter() - HW


 /***
  *  reduce():
  *    -> Applies a function to an accumulator 
  *        and each element in an array to reduce to a single value.
  * 
  *    -> reduce(callbackFn)
  *       reduce(callbackFn, initialValue)
  */

//  const elems = [1,2,3,4,5];

//  const sum = (acc, elem) => {
//      return acc + elem;
//  }

//  const product = (acc, elem) => {
//       return acc * elem;
//  }

//  const sumVal = elems.reduce(sum);


// const sumVal = elems.reduce((acc, elem) => {
//     return acc + elem;
// }, 0);
//  console.log(sumVal);

//  const prodVal = elems.reduce(product);
//  console.log(prodVal);

 // apply reduce to return the total price of cartItems - HW
/****
 * 
 * polyfill of reduce()
 * 
 */


const elems = [1,2,3,4,5];

const sum = (acc, elem) => {
    return acc + elem;
}

const product = (acc, elem) => {
    return acc * elem;
}

// Intuition of writing the polifill of reduce
function reducer(arr, cb) {
//    let acc = 0;
   let acc = 1;
   for(i = 0; i<arr.length; i++) {
    acc = cb(acc, arr[i]);
   }
   return acc;
}

// const sumVal = reducer(elems, sum);

// console.log(sumVal);

// const prodVal = reducer(elems, product);

// console.log(prodVal);


// final version -> polyfill of reduce

Array.prototype.myReduce = function(cb, intialVal) { // 0
    let acc = intialVal !== undefined ? intialVal: this[0];
    let sidx = intialVal !== undefined ? 0 : 1;

    for(let i = sidx; i<this.length; i++) {
        acc = cb(acc, this[i]);
    }  

    return acc;
}

const sumVal = elems.myReduce(sum, 0);
console.log(sumVal);

const prodVal = elems.myReduce(product, 1);
console.log(prodVal);

const totalCartPrice = cartItems.myReduce((acc, item)=>{
      return acc + item.price;
}, 0)

console.log(totalCartPrice);


const arr1 = [1,2,3,[4,5],[6,[7,8]],9,10] ;

const flatArr = arr1.flat(2);

console.log(flatArr);

for(let i = 0; i<flatArr.length; i++) {
    console.log(flatArr[i]);
}

// const {data, ...rest} = flatArr;












 

