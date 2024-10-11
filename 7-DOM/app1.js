// console.log("We are learning THE DOM")
// console.dir(document)
// console.dir(document.title)
// console.dir(document.URL)
// console.dir(document.body.style.backgroundColor = "purple")

// How to access elements in the DOM
// document.getElementById();
let title = document.getElementById("lists-title");
console.log(title);
title.style.color = "white";
title.style.backgroundColor = "blue";
title.style.fontSize = "3rem";
title.style.padding = "10px 25px";
title.style.borderRadius = "8px";

// document.getElementsByClassName();

let lists = document.getElementsByClassName("lists");
console.log(lists);
for (let i = 0; i < lists.length; i++) {
  lists[i].style.backgroundColor = "#dddddd";
  lists[i].style.listStyleType = "none";
  lists[i].style.padding = "20px";
  lists[i].style.fontSize = "2rem";
  lists[i].style.paddingBottom = "20px";
}
let list = document.getElementsByClassName("list");
console.log(list);
console.log(list[0].textContent);
console.log(list[0].innerText);
console.log(list[0].innerHTML);
list[0].style.backgroundColor = "red";
list[1].style.backgroundColor = "orange";

// document.getElementsByTagName();
let form = document.getElementsByTagName("form");
console.log(form);

// document.querySelector();
let para = document.querySelector("#lists-title");
console.log(para);
const listItems = document.querySelector(".lists");
console.log(listItems);

// document.querySelectorAll();

let listItem = document.querySelectorAll(".list");
console.log(listItem);

// ==== JS EVENT ======

//1. click event

let button = document.getElementById("btn");
console.log(button);

const sayHello = (e) => {
  e.preventDefault();
  // console.log("hello btn");
  alert("Are you sure you submit your info");
};

button.addEventListener("click", sayHello);

// Toggle icon to show and hide

let passCode = document.getElementById("pass");
let eye = document.getElementById("eye");
let eyeSlash = document.getElementById("eye-slash");


const togglePassword = () => {
  if (passCode.type === "password") {
    passCode.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
  } else {
    passCode.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block";
  }
};

eye.addEventListener("click", togglePassword);
eyeSlash.addEventListener("click", togglePassword);
