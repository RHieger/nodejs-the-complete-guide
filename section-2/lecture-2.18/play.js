const person = {
  name: "Bobby",
  age: 58,
  greet() {
    console.log("Hi, I am " + this.name + ".");
  }
};

person.greet();

const hobbies = ["Sports", "Cooking"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => "Hobby: " + hobby));

// Demonstrate that arrays are a reference type:

console.log(hobbies);

hobbies.push("Programming");

console.log(hobbies);