// retrieve the element
let button = document.getElementById("btn");

// submit function
const submitData = (e) => {
  console.log("user inputs has been submitted successfully");
};

// adding event
button.addEventListener("click", submitData);
