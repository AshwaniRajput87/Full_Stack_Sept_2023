
const fs = require('fs');
console.log('Before');

const promise = fs.promises.readFile('./f1.txt');

console.log('Loading the content...');
promise
.then((data)=>{ // This handles your resolved by promises 
   console.log("Data inside in the file: " +  data);
   return fs.promises.readFile('./f2.txt');
}).then((data)=> {
     console.log('Data inside f2 file:' + data);
    return fs.promises.readFile('./f3.txt');
}).then((data)=>{
        console.log('Data inside f3 file:' + data);
}).catch((err)=> { // This handles your rejected by promises
  console.log(err);
}).finally(()=>{
    console.log('content loaded successfully.'); 
})

console.log('After');


// you task is to convert these promises consumption via async/await

const fn  = async() => {
   
}

fn();