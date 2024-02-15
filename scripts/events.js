// event.js
export const demonstrateEventHandling = () => {
  // Your event handling examples here
  const button = document.getElementById("myButton");

  const handleClick = () => {
    console.log("Button clicked!");
  };

  button.addEventListener("click", handleClick);
};
