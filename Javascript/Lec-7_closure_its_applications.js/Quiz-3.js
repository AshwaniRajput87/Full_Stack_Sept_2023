function createCounter(init, delta) {
    function count() {
        init = init + delta;
        return init;
    }
    return count;
}
let c1 = createCounter(10, 5);  
let c2 = createCounter(5, 2);

console.log(c1());// 15
console.log(c2()); // 7
console.log(c1()); // 15 + 5 = 20
console.log(c2()); // 7 + 2  = 9