const person = {
  name: "Bobby",
  age: 58,
  greet() {
    console.log("Hi, I am " + this.name + ".");
  }
};

// Demonstrate Destructuring:

const printName = ({ name }) => {
  console.log(name);
};  // pulls name property from person

printName(person);

// This syntax pulls 2 properties from person

const { name, age } = person;

console.log(name, age);

// person.greet();

// // Spread Operator Used to Copy Object:

// const copiedPerson = { ...person };

// console.log(copiedPerson);

// Demonstrate Array Destructuring:

const hobbies = ["Sports", "Cooking"];

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //   console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => "Hobby: " + hobby));

// // Demonstrate that arrays are a reference type:

// // console.log(hobbies);

// // hobbies.push("Programming");

// // console.log(hobbies);

// // Maintain Immutability for Arrays:

// //Method 1:
// // const copiedArray = hobbies.slice();

// // console.log(copiedArray);

// // Method 2:
// // const copiedArray = [hobbies];  // returns array of arrays

// // NOTE: Does not really accomplish goal of creating a copy
// // of array. Rather, it copies the pointer to the original
// // array.

// // console.log(copiedArray);

// // Method 3: Using the Spread Operator

// // returns new array with copy of all elements in hobbies
// const copiedArray = [...hobbies];

// console.log(copiedArray);

// // Demonstrate Rest Operator:

// const toArray = (...elements) => {
//   return elements;
// };

// // NOTE: The Rest Operator is used as an argument within a function.
// // Rather than extracting elements from and creating a copy of an
// // object or array, the Rest Operator takes an indeterminate number
// // of arguments to construct an object or array.

// console.log(toArray(1, 2, 3, 4));
