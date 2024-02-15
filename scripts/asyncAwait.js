// asyncAwait.js
export const demonstrateAsyncAwait = async () => {
  // Your async/await examples here
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  };

  await fetchData();
};
