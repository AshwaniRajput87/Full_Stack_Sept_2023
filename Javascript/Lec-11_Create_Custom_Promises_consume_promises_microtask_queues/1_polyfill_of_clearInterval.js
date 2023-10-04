/***
 *  Polyfill of clearInterval:
 */

// writing the polyfill of clearInterval using primitive value as boolean flag
// const myInterval = (cb, delay) => {
//     let flag = true;
//     const myFn = () =>{
//         cb();
//         setTimeout(myFn, delay);
//     }
//     setTimeout(myFn, delay);
//     return flag;
// }

// const clearMyInterval = (flag) => {
//     flag = false;
// }

// const cb = () => {
//     console.log('My interval started')
// }

// const flag = myInterval(cb, 1000);

// const clearCb = () => {
//     console.log("cancelled the cb");
//     clearMyInterval(flag);
// }

// setTimeout(clearCb, 2000);


// writing the polyfill of clearInterval using object
const myInterval = (cb, delay) => {
    let obj = {
        flag: true
    }
    const myFn = () =>{
        if(obj.flag === true) {
            cb();
            setTimeout(myFn, delay);
        } 
    }
    setTimeout(myFn, delay);
    return obj;
}

const clearMyInterval = (obj) => {  // obj -> flag :true > changes to false 
                                    // obj -> flag: false
    obj.flag = false;
}

const cb = () => {
    console.log('My interval started')
}

const obj = myInterval(cb, 3000);

const clearCb = () => {
    console.log("cancelled the cb");
    clearMyInterval(obj);
}

setTimeout(clearCb, 4000);




