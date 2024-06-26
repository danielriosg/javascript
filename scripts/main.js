document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((taskText) => {
    addTask(taskText, taskList);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      addTask(taskText, taskList);
      taskInput.value = "";
    }
  });

  function addTask(taskText, taskListElement) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;

    const prioritySelect = document.createElement("select");
    prioritySelect.classList.add("priority-select");

    const lowOption = document.createElement("option");
    lowOption.value = "low";
    lowOption.textContent = "Low";

    const mediumOption = document.createElement("option");
    mediumOption.value = "medium";
    mediumOption.textContent = "Medium";

    const highOption = document.createElement("option");
    highOption.value = "high";
    highOption.textContent = "High";

    prioritySelect.appendChild(lowOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(highOption);

    prioritySelect.addEventListener("change", (e) => {
      taskItem.classList.remove("low", "medium", "high");
      taskItem.classList.add(e.target.value);
      taskItem.dataset.priority = e.target.value; // Set the dataset attribute
      localStorage.setItem(`task-${taskText}`, e.target.value);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      const index = tasks.indexOf(taskText);
      if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      taskItem.remove();
      localStorage.removeItem(`task-${taskText}`); // Remove the stored priority when the task is deleted
    });

    taskItem.appendChild(prioritySelect);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    taskListElement.appendChild(taskItem);

    const storedPriority = localStorage.getItem(`task-${taskText}`);
    if (storedPriority) {
      prioritySelect.value = storedPriority;
      taskItem.classList.add(storedPriority);
      taskItem.dataset.priority = storedPriority; // Ensure dataset priority is set
    } else {
      taskItem.classList.add(prioritySelect.value);
      taskItem.dataset.priority = prioritySelect.value; // Ensure dataset priority is set
    }
  }
});
