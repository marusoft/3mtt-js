// How to access elements in the DOM
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();









// looping through children
//value
// textContent
// innerText
// innerHTML

// ==== Event ======

// first way of adding event

// let button = document
//   .getElementById("submit")
//   .addEventListener("click", function () {
//     console.log("Button click");
//   });

// Another way
// selecting the element
// let button = document.getElementById("submit");

// adding event

// function buttonClick() {
//   // console.log("Clicking button");
//   document.getElementById("title").textContent = "Header Title Changed";
//   document.querySelector(".form-container").style.backgroundColor = "#fafafa"
// }

// button.addEventListener("click", buttonClick);

// Exploring event

// function buttonClick(e) {
//   // console.log(e);
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // console.log(e.target.classList);
//   // let output = document.getElementById("output");
//   // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//   // event type
//   // console.log(e.type); // click event

//   // console.log("X", e.clientX); // get the position of the mouse on x axis from the window
//   // console.log("Y", e.clientY); // get the position of the mouse on y axis from the window
//   // console.log("X AT Actual element", e.offsetX); // get the position of the mouse on X axis from the actual elemnent
//   // console.log("Y AT Actual element", e.offsetY); // get the position of the mouse on Y axis from the actual elemnent

//   console.log("ALT KEY IS HOLD", e.altKey); // first click without holding the alt key
//   // then hold it and click
//   console.log("CTRL KEY IS HOLD", e.ctrlKey);
//   console.log("SHIFT KEY IS HOLD", e.shiftKey);
// }
// button.addEventListener("click", buttonClick);

// EVENT TYPE
// let button = document.getElementById("submit");
// button.addEventListener("click", runEvent); // click
// button.addEventListener("dblclick", runEvent); // double click
// button.addEventListener("mousedown", runEvent); // mousedown click
// button.addEventListener("mouseup", runEvent); // click and hold

let output = document.getElementById("output");

// let box = document.getElementById("box");

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);

// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

// get user value
const listInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");
const select = document.querySelector(".select");

// listInput.addEventListener("keydown", runEvent);
// listInput.addEventListener("keyup", runEvent);
// listInput.addEventListener("keypress", runEvent);

// listInput.addEventListener("focus", runEvent);
// listInput.addEventListener("blur", runEvent);

// listInput.addEventListener("cut", runEvent);
// listInput.addEventListener("paste", runEvent);

// input event
// listInput.addEventListener("input", runEvent);

// change event
// select.addEventListener("change", runEvent);

// submit event

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("Event Type: " + e.type);

  // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>';
  // rgb changing the first two parameter base on mouse position
  // box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40 )";
  // document.body.style.backgroundColor =
  //   "rgb(" + e.offsetX + ", " + e.offsetY + ", 40 )";

  // get user value
  // console.log(e.target.value);
  // document.getElementById("output").innerHTML =
  //   "<h3>" + e.target.value + "</h3>";
}