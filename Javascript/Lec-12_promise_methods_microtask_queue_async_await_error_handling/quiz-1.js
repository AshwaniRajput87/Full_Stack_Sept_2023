function resolveAfterNSeconds(delay, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, delay);
    });
}

(function () {
    let a = resolveAfterNSeconds(1000, 1); // a promise is getting returned -> 1 sec
    a.then(async function (x) {  // 1
        let y = await resolveAfterNSeconds(2000, 2) // 2 -> 2secs
        let z = await resolveAfterNSeconds(1000, 3) // 3 -> 1sec , at this point in time, how much seconds consumed -> 4secs 

        let p = resolveAfterNSeconds(2000, 4); // returned promise
        let q = resolveAfterNSeconds(1000, 5); // returned promise
                                               // max time is taken by the promises that will be taken - 2secs
                                // 4       // 5
        console.log(x + y + z + await p + await q);  // 1+2+3+4+5 = 15 --> 6secs
    })
})();

// IQ-> can in use await outside? -> No, you can't use await outside the function

  async function getData() {
    let data = 10;
    let a = await data;
    return a;
  }

  
  console.log(getData());