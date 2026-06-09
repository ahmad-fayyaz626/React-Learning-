// Now we have to learn about the Callback

// It is always a function
function fetchData(data, callback) {
  setTimeout(() => {
    console.log(data);
    if (callback) {
      callback(data);
    }
  }, 2000);
}

console.log("chand sy parda kijye");
// Callback Hell is created when we have multiple nested callbacks which makes the code hard to read and maintain.


 // this is callBack Hell
fetchData ("data1",()=>{
    fetchData("data2",()=>{
        fetchData("data3",()=>{
            fetchData("data4",()=>{
                    console.log("data4 is fetched successfully");
            })
        });
    });
})