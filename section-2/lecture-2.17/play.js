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

console.log(hobbies.map(hobby => "Hobby: " + hobby));
console.log(hobbies);
