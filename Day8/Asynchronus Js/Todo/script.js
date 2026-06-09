let Input = document.getElementById("inputTask");

const AddButton = document.getElementsByClassName("AddButton")[0];
let toDoContainer = document.getElementsByClassName("toDoContainer")[0];

function createTask(data) {
  let value = data.text;
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  let taskText = document.createElement("p");
  taskText.innerText = value;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("DeleteButton");

  let saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.classList.add("SaveButton");

  saveButton.style.display = "none";

  deleteButton.addEventListener("click", function () {
    deleteData(data.id);
  });

  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("EditButton");

  editButton.addEventListener("click", function () {
    taskText.contentEditable = true;
    taskText.focus();
    saveButton.style.display = "inline-block";
    editButton.style.display = "none";
  });

  saveButton.addEventListener("click", function () {
    taskText.contentEditable = false;
    saveButton.style.display = "none";
    editButton.style.display = "inline-block";
    // Here you would typically send an update request to the server to save the edited task
    editData(data.id, taskText.innerText);
  });

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.appendChild(deleteButton);
  buttons.appendChild(editButton);
  buttons.appendChild(saveButton);

  newTask.appendChild(taskText);
  newTask.appendChild(buttons);
  newTask.classList.add("todo");
  toDoContainer.appendChild(newTask);
}
AddButton.addEventListener("click", function () {
  createTask(Input.value);
  postData();
});
/*  GET */

const API = "https://6a27de454e1e783349a4854d.mockapi.io/api/v1/todos";

async function getData() {
  let response = await fetch(API);
  let data = await response.json();
  if (data) {
    toDoContainer.innerHTML = "";
  }
  data.forEach((item) => {
    createTask(item);
  });
}

getData();

{
  /* POST */
}
async function postData() {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: Input.value.trim(),
    }),
  });

  if (response.ok) {
    getData();
    Input.value = "";
  }
}

/*Delete */

async function deleteData(id) {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  console.log(response);
  if (response.ok) {
    getData();
  }
}

/* Edit */
async function editData(id, newText) {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: newText,
    }),
  });

  console.log(response);

  if (response.ok) {
    getData();
  }
}
