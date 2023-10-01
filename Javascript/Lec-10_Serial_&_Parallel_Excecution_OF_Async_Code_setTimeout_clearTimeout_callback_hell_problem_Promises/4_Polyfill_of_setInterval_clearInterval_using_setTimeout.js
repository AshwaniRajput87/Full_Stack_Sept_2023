/**
 *  Polyfill of setInterval() using setTimeout()
 * 
 */

const myInterval = (cb, delay) => {
   const myfn = () => {
      cb();

      setTimeout(myfn, delay);
   }

   setTimeout(myfn, delay);
}

const cb = () => {
    console.log("my interval is being called");
}

myInterval(cb, 1000);

// can you write the polyfill of clearInetrval() -> myClearInterval(); -> HW


