const obj = {
    name: "Pradeep K R",
    address: {
        city: "Banglore",
        country: "India"
    },
    greeMsg: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

let obj2 = Object.create(obj);
/**** Overridden the value of prop name****/
obj2.name = 'Ashwani';
obj2.lastName = 'Kumar'

console.log("1. ", obj2.name);
console.log("2. ", obj.lastName); 