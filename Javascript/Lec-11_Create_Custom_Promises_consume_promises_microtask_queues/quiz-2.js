const promise1 = Promise.reject("Some error");

promise1.then(null, (err) => {
  console.log("90", err);
  return 10;
}).then((err) => {
    console.log("92", err);
}).then((err)=> {
    console.log("93", err)
});

// 90 Some error
// 92 10
// 93 undefined