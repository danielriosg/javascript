// promises.js
export const demonstratePromises = () => {
  // Your promises examples here
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous data fetching
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 2000);
    });
  };

  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
