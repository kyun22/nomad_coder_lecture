const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(typeof li.id);
  toDos = toDos.filter((todo) => String(todo.id) !== li.id);
  saveToDos();
  li.remove();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.setAttribute("id", newTodo.id);
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = {
    text: todoInput.value,
    id: Date.now(),
  };

  paintToDo(newTodo);
  toDos.push(newTodo);
  saveToDos();
  todoInput.value = "";
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  toDos = JSON.parse(savedToDos);
  toDos.forEach((todo) => paintToDo(todo));
}

todoForm.addEventListener("submit", handleToDoSubmit);
