// console.log("This is dom4 js file");

// setTimeout(function() {
//     console.log("third");
// },4000);

// console.log("first");
// console.log("second");

//promise in JavaScript
//fulfilled promise
// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside the promise");
//   }, 5000);
//   resolve("promise resolved");
// });

// console.log("pehla promise created");

//rejected promise
// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside the promise");
//   }, 5000);
//   reject(new Error("BHaisaab error pakdo"));
// });

// console.log("pehla promise created");

// let myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside the promise");
//   }, 5000);
//   //   resolve("promise resolved");
//   reject(new Error("BHaisaab error pakdo"));
// });

// myPromise.then(
//   (value) => {
//     console.log("The Value we Fetched is:" + " " + value);
//   },
//   (error) => {
//     console.log("recieved an error");
//   },
// );

// let p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("first promise");
//   }, 2000);
//   resolve("FIRST");
// });

// console.log(p1);

// let p3 = p1.then(() => {
//   let p2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("second promise");
//       resolve("SECOND");
//     }, 3000);
//   });
// });

//async await in javascript

// async function abcd(){
//   return "Hello World";
// }

// async function utility() {
//   let delhIWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("delhi weather is hot");
//     }, 5000);
//   });

//   let hyderabadWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hyderabad weather is cool");
//     }, 7000);
//   });

//   let dM = await delhIWeather;
//   let hM = await hyderabadWeather;

//   return [dM, hM];
// }

async function apiCall() {
  let content = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(function(response){
    return response.json();
  })
  .then
}

apiCall();
