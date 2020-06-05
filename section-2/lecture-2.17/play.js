const person = {
  name: "Bobby",
  age: 58,
  greeting() {
    console.log("Hi, I am " + this.name + ".");
  }
}

const hobbies = ["Sports", "Cooking"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map(hobby => "Hobby: " + hobby));

// console.log(hobbies);

// Prove that arrays are a reference type:

hobbies.push("Programming");

console.log(hobbies);
