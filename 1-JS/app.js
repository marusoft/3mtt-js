// ==== Comment =====
// Single line comment
/**
 * Multi-line comment or js
 */

// ==== Data types =====

//1. STRING
// Any character with single or double quotation mark
"kehinde";
"122133131313332";
console.log("I am super excited to start learning JavaScript programming");

//2. Number
console.log(122212212);
console.log(666656);
console.log(9.6788);
console.log(1 / 7);

//3.  Boolean
// true or false
console.log(true);
console.log(false);

// 4. Null: empty value
// 5. Undefined: a container without value yet
// 6. Symbol
// 7. Object: a collection of key-value pair separated with commaa

console.log("==== VARIABLE =======");
// ====== VARIABLES =======
// let keyword
// const keyword

// Example 1
let myName = "Jon Doe";
console.log(myName);
let myNumber = 123456;
console.log(myNumber);

let myTraining = "3mtt";
console.log(myTraining);

let MySchoolName = "Unilag";

const pi = 3.142;
// pi = 23344 // TypeError: Assignment to constant variable.
console.log(pi);

let myLanguage = "JavaScript";
myLanguage = "Python";
console.log(myLanguage);

console.log("===== OPERATORS ========");

/**
 * Arithmetics Operator
 * +, -, /, *, %
 */

console.log(2 + 4); // 6
console.log(2 - 4); // -2
console.log(4 / 2); // 2
console.log(2 * 4); // 8
console.log(10 % 3); // 1

console.log("===== INCREMENTAL/DECREMENTAL OPERATORS======");
/**
 * Incremental and Decremental Operator
 */

let myOrangeBasket = 10;
myOrangeBasket++;
console.log("myOrangeBasket ==>", myOrangeBasket);

let myBox = 30;
myBox--;
console.log("myBox ===>", myBox);

let s = 45;
s = s + 4;
console.log(s);

let t = 22;
t = t - 3;
console.log(t);

console.log("====== LOGICAL OPERATOR=======");
/**
 * AND operator &&
 * OR operator  ||
 * Negation/Not  !
 */

let num1 = true;
let num2 = true;
let num3 = false;
console.log(num1 && num2); // true

console.log(num1 || num3); // true

let isLearning = true;

console.log(!isLearning); // false


console.log("===== COMPARISON OPERATOR=======")
/**
 * = Assignment operator
 * == Equality operator
 * === Strict Equality operator
 */

let value = 100 // Assigning value

let firstValue = 22
let secondValue = 33
console.log(firstValue == secondValue) // false

// example on stric equality operator
let firstNum = 55
let secondNum = "55"
console.log(firstNum === secondNum) // false