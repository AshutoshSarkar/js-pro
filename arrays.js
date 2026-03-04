// console.log("this is array file");

//creating basic array;
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

//Insertion in array

//interstion in array from the end

// numbers.push(9, 10);
// console.log(numbers);

//Insertion in an array from the beginning
// numbers.unshift(8,9);
// console.log(numbers);
//Insertion in an array from anywhere in the array
// numbers.splice(4,0,'a');
// console.log(numbers);

//searching in an array

// console.log(numbers.indexOf('a'));

// console.log(numbers.includes('a'));

//searching in an array of objects

// let courses=[
//     {userId:1, userName:'harshit'},
//     {userId:2, userName:'mohit'},
//     {userId:3, userName:'nitish'},
// ];

// let result=courses.find(courses=> courses.userName==='nitish');

// console.log(result);

//deletion in an array from the end
// let numbers=[1,2,3,4,5];
// let result= numbers.pop();
// console.log(numbers);

//deletion in an array from the beginning
// let result=numbers.shift();
// console.log(numbers);

//deletion in an array from anywhere in the array
// let result = numbers.splice(2,3);
// console.log(numbers);

// emotying an array
// 
// let numbers=[1,2,3,4,5];
// let numbers2=numbers;

//emptying an array method 1
// numbers.length=0;

// console.log(numbers);
// console.log(numbers2);

// console.log(numbers[0]);

//emptying an array method 2
// numbers.splice(0,numbers.length);

//emptying an array method 3 Using loops
// while(numbers.length>0){
//     numbers2.pop();
// }
// console.log(numbers);
// console.log(numbers2);

//combining and slicing arrays
// let first=[1,2,3];
// let second=[4,5,6];

//combining two arrays
// const result=first.concat(second);
// console.log(result);

//slicing an array
// const slice=result.slice(2,5);
// console.log(slice);

// let numbers=[10,20,30,40,50,60];

//copying an array using slice method
// let copy=numbers.slice();
// console.log(copy);

// let numbers=[10,20,30,40,50,60];

// let sliced= numbers.slice(2);
// console.log(sliced);

//iterating an array

//for-of loop
// let numbers=[10,20,30,40,50,60];

// for(let values of numbers){
//     console.log(values);
// }

//for-each loop
// let numbers = [10, 20, 30, 40, 50];

// numbers.forEach(number=> console.log(number));

//joining the array elements

// let numbers=[10,20,30,40,50];
// let joined=numbers.join('/');
// console.log(joined);

//splitting the array elements

// let message= 'this is my first message';

// let parts=message.split(' ');

// console.log(parts);

//Sorting an array

// let numbers=[3,4,1,5,2];

// numbers.sort();

// console.log(numbers);

//Reversing an array
// numbers.reverse();
// console.log(numbers);

//filtering an array

// let numbers = [-1, -3, -5, 0, 2, 4, 6, 8];

// let filtered = numbers.filter((value)=> value>=0);

// console.log(filtered);

//mapping an array
// let arr1 = [1, 3, 5, 7];
// let arr2 = ["rollNo", "studentNo", "itemNo", "idNo"];

// let items = arr2.map(function (key, value) {
//   return { [key] : arr1[value] };
// });

// console.log(items);

// let items = arr1.map(function (value) {
//   return "itemNo." + value;
// });

// console.log(items);
// console.log(typeof items);

//some logic building practice
// let arr = [1, 2, 3, 4, 5];

// function checkValueInArray(arr,value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       return "your wanted value found at index:"+ " " + i;
//     }
//   }
//   return "not found";
// }

// console.log(checkValueInArray(arr,1));

//find function in array
// let arr = [1, 2, 3, 4, 5];

// let result=arr.find(value=> value===1);
// console.log(result);