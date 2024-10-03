/**
 * CONTROL FLOW
 * if keyword
 * else keyword
 * else if key word
 * switch keyword
 * ternary syntax
 */

// 1. Example

let isRainy = true;
if (isRainy) {
  console.log("I need to get an umbrella");
}

// 2
let isEnjoyingLearningJs = true;
if (isEnjoyingLearningJs) {
  console.log("I am now a software engineer");
}

// ELSE KEYWORD

let isRegistered = true;
let isAdmin = true;
let isTeacher = false;
let isParent = true;

// 1
if (isRegistered && isAdmin) {
  console.log("You can give students permission on the platform.");
} else {
  console.log("You can only listen to lectures or see chats");
}

// 2

if (!isRegistered && isAdmin) {
  console.log("You can give students permission on the platform.");
} else {
  console.log("You can only listen to lectures or see chats");
}

// ELSE IF Keyword

// 1.
if (!isAdmin && isParent) {
  console.log("You can receive the report sheet of your child");
} else if (!isTeacher && !isRegistered) {
  console.log("You cannot receive the report sheet of your child");
} else {
  console.log("Show your ID");
}

console.log("==========  SWITCH Statement ==========");
/**
 * switch
 */

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

// 1
let randomNumbers = Math.random() * 7;
let convertedRandomNumbers = Math.floor(randomNumbers) + 1;
console.log("randomNumbers ==>", randomNumbers);
console.log("convertedRandomNumbers ==>", convertedRandomNumbers); // numbers 1 to 7

switch (convertedRandomNumbers) {
  case 1:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 2:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 3:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 4:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 5:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 6:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;
  case 7:
    console.log(`${convertedRandomNumbers} the curent random number`);
    break;

  default:
    console.log("No random number matches the cases");
    break;
}

// Ternary syntax

// condition ? "do something" : "do another thing";

// 1. iilustration

let myName = "John";

myName.length > 6
  ? console.log("This is not my name")
  : console.log("This is my name length");

// 2.
let favoriteLanguage = "JavaScript";
let favoriteFramework = "React";

favoriteLanguage.length % 2 === 0
  ? console.log("Zero is the real result")
  : console.log("Zero is not the result");
