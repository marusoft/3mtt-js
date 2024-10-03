/**
 * {}, key-pairs or known as property of an object
 */

const myProfile = {
  name: "John Doe",
  age: 44,
  isAdmin: true,
  hobby: ["eating", "sleeping", "watching movies"],
  "course level": "300L",
};

/**
 * How to access property of an object
 * Dot Notation
 * Bracket Notation
 */

let getName = myProfile.name;
console.log(getName);
let getMySecondHobby = myProfile.hobby[1];
console.log(getMySecondHobby);

let getCourseLevel = myProfile["course level"];
console.log(getCourseLevel);

// Asychronous js : Promise
// pending, fulfilled, rejected
let endpoint = "example.com";

let getUsers = async () => {
  let response = await fetch(endpoint);
  let data = await response.json();
  console.log(data)[
    ({
      id: 1,
      name: "abiola",
      age: 52,
      isadmin,
    },
    {
      id: 2,
      name: "abiola",
      age: 52,
      isadmin,
    },
    {
      id: 3,
      name: "abiola",
      age: 52,
      isadmin,
    })
  ];
};
