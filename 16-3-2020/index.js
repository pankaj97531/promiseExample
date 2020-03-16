let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);

let promise2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 2000);
});

// reject runs the second function in .then
promise2.then(
  result => console.log(result), // doesn't run
  error => console.log(error) // shows "Error: Whoops!" after 1 second
);

let promise3 = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 3000);
});

promise3.then(console.log);

new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 4000)
})
  .finally(() => console.log("Promise ready"))
  .then(result => console.log(result));