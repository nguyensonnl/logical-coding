const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const taskList = document.querySelector("#task-list");

function escapeHTML(html) {
  const div = document.createElement("div");
  div.innerText = html;
  return div.innerHTML;
}

taskList.addEventListener("click", handleTaskActions);
todoForm.addEventListener("submit", addTask);
renderTasks();
