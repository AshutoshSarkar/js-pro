console.log("This is dom2 file");

// function eventlog() {
//   heading.style.filter = "blur(5px)";
// }

// let heading = document.querySelector("h1");
// document.addEventListener("mouseover", eventlog);
// document.removeEventListener("click", eventlog);

// console.log(5==='5')

// const eventLog = document.querySelector("#mainTitle");

// there are three phases of a event listener life cycle
// 1. Capturing phase
// 2. At Target phase
// 3. Bubbling phase
//getting how many events are there in the event log when i add a event listener to it
// eventLog.addEventListener("click", function (event) {
//   console.log(event);
// });

//prevent default behavior
// const content = document.querySelectorAll("a");

// const thirdLink = content[2];

// thirdLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("you removed the default behaviour of the link");
// });

// let myDiv = document.createElement("div");

// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "I am Para" + i;

//   myPara.addEventListener("click", function (event) {
//     console.log("I have clicked on the para");
//   });

//   myDiv.appendChild(myPara);
// }

// document.body.appendChild(myDiv);

//optimization of the above code using event delegation

// let myDiv = document.createElement("div");

// function eventStatus(event) {
//   console.log("WE have clicked on:" +" "+ event.target.textContent);
// }

// myDiv.addEventListener("click", eventStatus);

// for (let i = 1; i <= 100; i++) {
//   let myPara = document.createElement("p");
//   myPara.textContent = "I am Para" + i;

//   myDiv.appendChild(myPara);
// }

// document.body.appendChild(myDiv);

//we optimized the multi function problem due to which we saved lot of memory
// we have optimized the event listener problem in which we saved memory
//we have optimized the code such that we have saved the individuality so that our code is now para centric not div centric.
