// Demonstrate Asynchronous Code (utilizes callback function):

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData().then((text) => {
    console.log(text);
    return fetchData();
  })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

// Synchronous Code:

console.log("Hello!");

console.log("Hi!");
