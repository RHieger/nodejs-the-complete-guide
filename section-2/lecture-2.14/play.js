const name = "Bobby";

var age = 58;

const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " + userName +
    ", age is " + userAge +
    " and the user has hobbies."
  );
}

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(addRandom());

console.log(summarizeUser(name, age, hasHobbies));
