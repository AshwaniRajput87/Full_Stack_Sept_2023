'use strict';
const obj = {
    name:"Priyanka",
 
    age:28,
 
    userDetails: function(){
      console.log(`user name ${this.name} and age ${this.age}`); // user name priyanka and age 28
    },
 
    print:function(){
     console.log(this); // whole object
    },
 
    obj2:{     // refer JS-class-2 recording -> native or host for this keyword (browser env and nodeJS env)      
     username: this.name // what is the value here username: ? -> it will contain empty string '' not priyanka
    // why this.name contains "" -> obj2 is defined within the obj object then this keyword does not refer to outer object(obj), it refers to global scope(this)
    }
 };

 // is name available in global scope this?
 
 console.log(obj);

 // how to fix the above problem
//  const obj1 = {
//   name:"Priyanka",

//   age:28,

//   userDetails: function(){
//     console.log(`user name ${this.name} and age ${this.age}`); // user name priyanka and age 28
//   },

//   print:function(){
//    console.log(this); // whole object
//   },

//   obj2:{}
// };



// obj1.obj2.username = obj1.name;
// console.log(obj1);

// obj1.obj2 = {
//   username: obj1.name
// }
// console.log(obj1);

