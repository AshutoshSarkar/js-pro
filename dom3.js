console.log("This is dom3 js file");



// console.log("abcd");
// let element= document.getElementById("mainTitle");
// element.addEventListener("click", function(){
//     console.log("1234");
// }); // if there is a callback funtion in the call stack then it will execute the remaining code and then it will execute the callback function
// function print() {
//   console.log("This is print function");
// }
// print();
// console.log("xyz");

// 1.08 hrs video timing



console.log("Hello world");

// setTimeout(function() {
//     console.log("This is setTimeout function");
// }, 2000); // this will execute after 2 seconds

console.log("This is the end of the code");

//async function example
async function fetchData() {
    return "Data fetched";
}

fetchData().then(function(data) {
    console.log(data);
}); // this will execute after the fetchData function is executed

console.log("This is the end of the code");