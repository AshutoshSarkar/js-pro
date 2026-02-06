console.log("this is a dom file");

// different ways to access DOM elements
//getting or surfing the dom using getElementById
// console.log(document.getElementById('heading'));

//getting or surfing the dom using getElementsByClassName
// let elems = document.getElementsByClassName("para");
// console.log(elems);

// let elems= document.querySelectorAll(".para");
// console.log(elems);
//$0 is used to get the currently selected element in the inspect element of browser

//update existing content

// let elems = document.querySelector('#btn');
// console.log(elems);

// console.log(elems.innerHTML);

// elems.innerHTML = 'clicke me here';

// let funct = function (a) {
//   if (a > 0) {
//     console.log("a and b are positive numbers");
//   } else {
//     console.log("a and b are not negative numbers");
//   }
// };

// funct(-1);

//innerText--> used to get the text content of an element
//textContent--> used to get the text content of an element without considering the CSS styles

// video 47 mins

// let content= document.querySelector(".box-1");
// console.log(content);

// let element= document.createElement("h3");
// console.log(element);

// element.textContent="this is a created element";

// content.insertAdjacentElement('beforeend',element);

// element.classList.add("tempText");

// content.removeChild(element);

// let content = document.querySelector(".box-1");
// console.log(content);

// content.style.cssText = "color:blue; background-color:yellow; font-size:50px ";

// content.setAttribute("style", 'color:orange');

// content.setAttribute("id", "heading");

