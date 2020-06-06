// Demonstrate Asynchronous Code (utilizes callback function):

const fetchData = callback => {
  setTimeout(() => {
    console.log("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

// Synchronous Code:

console.log("Hello!");

console.log("Hi!");
