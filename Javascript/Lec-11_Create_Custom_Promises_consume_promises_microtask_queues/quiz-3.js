const promise = Promise.reject("Some error");

promise.then((err) => {
  console.log("90", err);
}).catch((err) => {
  console.log("92", err);
}); 

// 92 Some error