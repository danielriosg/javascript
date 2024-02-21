// Import modules
import { demonstrateArrowFunctions } from "./arrowFunctions.js";
import { demonstrateAsyncAwait } from "./asyncAwait.js";
import { demonstrateDestructuring } from "./destructuring.js";
import { demonstratePromises } from "./promises.js";
import { demonstrateRestOperator } from "./restOperator.js";
import { demonstrateEvents } from "./events.js"; // Added event handling

// Call functions to demonstrate features
demonstrateArrowFunctions();
demonstrateAsyncAwait();
demonstrateDestructuring();
demonstratePromises();
demonstrateRestOperator();
demonstrateEvents();

// Task manager
document.addEventListener("DOMContentLoaded", () => {
 

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = ""; // Clear the input after adding the task
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
  }
});
