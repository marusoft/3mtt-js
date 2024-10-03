/**
 * Arrays are collection of items, it is denoted by []
 * and each item in is separated with a comma.
 * Each item is at numbered called index.
 * Arrays are zero-based index
 */

let myGroceries = ["Vegatable", "Tomatoes", "Salad", "Cucumber"];

/**
 * How to acess an item in an array
 */

let getFourthItem = myGroceries[3];
console.log(getFourthItem); // Cucumber

/**
 * How to Modify/Update items in an array
 * arrayName[indexPosition] = newValue
 */
myGroceries[3] = "Orange";
console.log(myGroceries);

/**
 * Methods in an Array
 */

/**
 * .length
 * Gets or sets the length of the array.
 * This is a number one higher than the highest index in the array.
 */
let favoriteFood = ["Rice", "Beans", "Yam"];
let getFavFoodLength = favoriteFood.length;
console.log("getFavFoodLength ==>", getFavFoodLength);
/**
 * .push()
 * Appends new elements to the end of an array,
 * and returns the new length of the array.
 */

let addBanana = myGroceries.push("Banana");
console.log(addBanana); // 5
console.log(myGroceries);

/**
 * .pop()
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
let deleteLastItem = myGroceries.pop();
console.log(deleteLastItem);

/**
 * .sort()
 */

let myNumbers = [14, 6, 9, 10, 15, 1, 3, 5];
let sortNumber1 = myNumbers.sort();
let sortNumber2 = myNumbers.sort((a, b) => b - a);
console.log("sortNumber1 ==>", sortNumber1);
console.log("sortNumber2 ==>", sortNumber2);
/**
 * Learn more arrays method on MDN
 */

/**
 * Looping through an array
 */

let myFavPlaceToLive = ["Ogbomosho", "Umuahia", "Nkalagu", "Shiroro", "Oba"];
for (let i = 0; i < myFavPlaceToLive.length; i++) {
  console.log(
    `I would love to visit ${myFavPlaceToLive[i]} during the hammattan semmester`
  );
}

/**
 * Iterators
 * .forEach(), .map(), .reduce(), .filter(), .some(), .every()
 */

let favCountries = ["Canada", "Japan", "Nigeria", "Usa", "Qatar"];

let iterateFavCountry = favCountries.forEach((value) => {
  console.log(`I will like to stay temporarily ${value}`);
});
console.log(iterateFavCountry);

/**
 * .map()
 */
let someNum = [1, 2, 3, 4, 5, 6, 7];
let modifySomeNum = someNum.map((num) => {
  return num * 2;
});

console.log(modifySomeNum); // [ 2,  4,  6, 8, 10, 12, 14]

// .filter()

let students = [
  "Onyinye",
  "Abiola",
  "Iyanu",
  "Oyin",
  "Henry",
  "Chinenye",
  "Samuel",
];

let removeNameWithSixCharacters = students.filter(
  (student) => student.length === 6
);

console.log(removeNameWithSixCharacters);