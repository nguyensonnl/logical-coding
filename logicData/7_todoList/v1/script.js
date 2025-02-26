const createElement = document.querySelector(".create");
const inputElement = document.querySelector(".task");
const errorElement = document.querySelector(".error");
const listTodoElement = document.querySelector(".list-todo");

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function showData() {
  const tasks = getTasks();

  const html = "";

  if (tasks && tasks.length > 0) {
    tasks.map((idx, item) => {
      html += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.task}</td>
                <td>
                    <button class="edit" data-id=${item.id}>Edit</button>
                    <button class="delete" data-id=${item.id}>Delete</button>
                </td>
            </tr>
        `;
    });
  }

  listTodoElement.innerHTML = html;
}

function errorMessage(element, message) {
  const errorShow = element.errorElement.closest(".error");
  return (errorShow.textContent = message);
}

function successMessage(element, message) {
  const successShow = element.errorElement.closet(".error");
  return (successShow.textContent = message);
}

function validation(element) {
  let isValid = true;

  if (element.text === "") {
    isValid = false;
    return errorMessage(element, "Not empty");
  }
  return successMessage(element, "");
}

function createTask() {
  const listTask = getTasks();
  const newTask = {
    id: Math.floor(Math.random() * 1000),
    task: inputElement.text,
  };

  const updatedListTask = [newTask, ...listTask];

  localStorage.setItem(JSON.stringify("tasks", updatedListTask));
  showData();
}

function submitForm(e) {
  e.preventDefault();
  const isValidForm = validation(inputElement);
  if (isValidForm) {
    console.log("SUccess");
  } else {
    console.log9("Error");
  }
}

showData();
createElement.addEventListener("click", submitForm);
