// console.log("functions file");

// function run() {
//   console.log("running");
// }

// run();

//some function can take input and output
// function sum(a,b){
//   console.log(arguments)
//   return a+b;
// }

// console.log(sum(2,4));

//dynamic function where we can pass any number of arguments

// function sumAny(){
//   let total=0;
//   for(let i=0;i<arguments.length;i++){
//     total=total+arguments[i];
//   }
//   return total;
// }

// console.log(sumAny(1,2,3,4,5));

//dynmaic function using rest operator
//rest operator should be at last position

// function sumAny(value, name, ...num){
//   console.log(num);
// }

// sumAny(1,2,3,4,5,6,7,8,9);

// function using default parameters
//Note: if we are making one parameter default then all the parameters after that should also be default
// function interst(p,r=10,y=10){
//   return (p*r*y)/100;

// }
// console.log(interst(1000));

//function with object parameters
// let obj = {
//   fname: "ashutosh",
//   lname: "sarkar",
// };

// function fullName(){
//   return `${obj.fname} ${obj.lname}`
// }

// console.log(fullName());

//getter and setter in functions

// let obj = {
//   fname: "ashutosh",
//   lname: "Sarkar",

//   get latest() {
//     return `${obj.fname} space ${obj.lname}`;
//   },
// };

// console.log(obj.latest);

//setter in functions
//  let obj = {
//   fname: "ashutosh",
//   lname: "Sarkar",

//   get latest() {
//     return `${obj.fname} space ${obj.lname}`;
//   },

//   set latest(value){
//     let parts=value.split(' ');
//     this.fname=parts[0];
//     this.lname=parts[1];

//   }
// };

// obj.latest="rahul sharma";
// console.log(obj.latest);

//try n catch in functions

// Scopes
// {
//  let a = 10;
// }
// console.log(a);

// {
//   var nameIS='ashutosh';
// }
// console.log(nameIS);

// var fn= function test(){
//   console.log("global variable testing"+nameIS);
// }

// fn();

//Reducing an array

// let arr=[1,2,3,4,5];

// let value=0;

// for(let i=0;i<arr.length;i++){
//    value=arr[i]+value;

// }
// console.log(value);

// let arr=[1,2,3,4,5];

// let total= arr.reduce((accumulator, currentValue) => accumulator+currentValue,0);

// console.log(total);

