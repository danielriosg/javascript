// restOperator.js
export const demonstrateRestOperator = () => {
  // Your rest operator examples here
  const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
};
