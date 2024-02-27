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
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    taskListElement.appendChild(taskItem);
  }
});
