const person = {
  name: "Bobby",
  age: 58,
  greeting() {
    console.log("Hi, I am " + this.name + ".");
  }
}

person.greeting();
