const person = {
  name: "Bobby",
  age: 58,
  greeting() {
    console.log("Hi, I am " + this.name + ".");
  }
}

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}
