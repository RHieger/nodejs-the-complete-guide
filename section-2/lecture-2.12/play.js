var name = "Bobby";

var age = 58;

var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " + userName +
    ", age is " + userAge +
    " and the user has hobbies."
  );
}

console.log(summarizeUser(name, age, hasHobbies));
