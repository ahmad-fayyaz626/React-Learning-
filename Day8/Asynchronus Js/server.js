// Now we will learn about the promises and how
//to usse them
// Promise Syntax
/*
const p = new Promise((resolve, reject) => {
  // Do some work
  // If everything is fine then call resolve
  // If there's an error then call reject

//   resolve("Data fetched successfully");
    reject("Error fetching data");
});

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
*/
// Now we will see how to use promises in real life scenarios
/*
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data1 is not fetched successfully";
      reject(data);
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data2 is fetched jane man";
      reject(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return fetchData2();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// Promise is a better way to handle asynchronous operations and avoid callback hell.
// Now the final thing is async await which is a syntactic sugar over promises and makes the code look cleaner and easier to read.

const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchData() {
  try {
    const response = await fetch(URL);
    response.json().then((data) => {
      console.log(data);
    });
  } catch (err) {
    console.log("The Error is:", err);
  }
}

fetchData();
