let promise = new Promise(function (resolve, reject) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    let success = true; // You can change this to `false` to simulate failure
    if (success) {
      resolve("Operation successful!"); // Fulfilled
    } else {
      reject("Operation failed!"); // Rejected
    }
  }, 2000);
});

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let isRainy = false;
    if (isRainy) {
      resolve("Use umbrella");
    } else {
      reject("Stay at home");
    }
  }, 3000);
});
console.log(myPromise);