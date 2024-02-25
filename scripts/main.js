document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText, taskList);
      taskInput.value = "";
    }
  });

  function addTask(taskText, taskListElement) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskListElement.appendChild(taskItem);
  }
});
