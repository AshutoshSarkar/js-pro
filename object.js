//Creating Objects Using Object Literal

// let rectangle={
//     length:10,
//     breadth:5,
//     draw: function(){
//         console.log("this is a draw function");
//     }}

//Creating Objects Using Factory Function

// function createRectangle(len, bre) {
//   return {
//     length: len,
//     breadth: bre,
//     parameter: len + bre,
//   };
// }

// const rec1 = createRectangle(10, 5);

//Creating Objects Using Constructor Function

// function Rectangle(len, bre) {
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function () {
//     console.log("this is a drawing function");
//   };
// }

// const newRectangle= new Rectangle(10,5);

// Adding and Deleting properties in Rectangle object

// newRectangle.color="yellow";
// delete newRectangle.length;

// console.log(newRectangle);

//Leaning about reference types and primitive types and how they store values in memory

// let a=10;
// let b= a;
// a++;
// console.log(a);
// console.log(b);

// let a={value:10};
// let b= a;

// a.value++;

// console.log(a);
// console.log(b);

//passing object to function and learning how they behave
// let a ={value:10};

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a);

//For-In loop
// let rectangle = {
//   length: 10,
//   breadth: 5,
//   draw(){
//     console.log("drawing rectangle");
//   }
// };

// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

//For-Of Loop
// let rectangle = {
//    length: 10,
//    breadth: 5,
// };

// for(let key of Object.keys(rectangle)){
//     console.log(key,rectangle[key]);
// }

// if-else with objects
// if('length' in rectangle){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }

//object cloning basic method

// let src = {
//   name: "ashutosh",
//   age: 22,
// };

// let dest = {};

// for (let key in src) {
//   dest[key] = src[key];
// }
// console.log(dest);

//cloning objects using assign operator

// let src = {
//   name: "ashutosh",
//   age: 22,
// };

// let dest=Object.assign({},src);
// console.log(dest);

//cloning objects using spread operator

// let src = {
//   name: "Ashutosh",
//   age: 22,
// };

// let dest = { ...src };
// console.log(dest);
