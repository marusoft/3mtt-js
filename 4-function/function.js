/**
 * Function is used for creating reusable piece of code
 */

/**
 * Function declaration
 */
function funcName() {
  // logic or function body
}

/**
 * Function expression
 */

let sayHello = function () {};

/**
 * Arrow Function
 */
let greetEveryone = () => {};

/**
 * Calling a function
 */
greetEveryone();

/**
 * Arguments and Parameters
 */
// const addTwoNumbers = (Parameter1, Parameter2, Parameter3) => {};
// addTwoNumbers(Argument1, Argument2, Argument3);

/**
 * Concise body function
 */
// let multiply = (a, b) => a * b;

/**
 * Omitting the parentheses
 */

// let welcome = (name) => {};

/**
 * Write a programe to say hello to a company employee
 */

const welcomeBack = (employeeName) => {
  return `Welcone ${employeeName} to the office`;
};
let greetings = welcomeBack("Kehinde");
console.log(greetings);

/**
 * Another example
 */

let welcomeNewTeachers = (t1, t2) => {
  // return "Welcome educator" + " " + t1 + " and educator" + " " + t2;
  return `Welcome educator ${t1} and educator ${t2}`;
};
console.log(welcomeNewTeachers("Kehinde", "Onyinye"));

/**
 * Write a function to compare two strings
 */

let compareStrings = function (str1, str2) {
  if (str1.length === str2.length) {
    console.log("The two strings are equal");
  } else {
    console.log("The two strings are not equal");
  }
};
compareStrings("shhsshhsfdwrwr", "shhsshhsfdwrwr");

/**
 * Write a program to capitalize a string
 */

let capitalizeString = (str) => {
  let capitalizedString = str.toUpperCase();
  console.log(capitalizedString);
  return capitalizedString[0];
};
console.log(capitalizeString("kehinde"));


/**
 * 
 */