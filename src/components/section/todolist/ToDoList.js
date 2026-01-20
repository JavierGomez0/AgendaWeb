import { getTodosFromStorage, saveTodosToStorage } from "./storageTodo.js";

let ToDoList = () => {
  let section = document.createElement("section");
  section.className = "ToDoList";

  let h2 = document.createElement("h2");
  h2.textContent = "ToDo List";
  section.appendChild(h2);

  let todos = getTodosFromStorage();

todos.forEach((todo, index) => {

  const div = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completada;

  const p = document.createElement("p");
  p.textContent = todo.tarea;

  if (todo.prioridad === "urgente") {
    p.classList.add("urgente");
  }

  if (todo.completada) {
    p.classList.add("completada");
  }

  checkbox.addEventListener("change", () => {
    todo.completada = checkbox.checked;
    saveTodosToStorage(todos);
    p.classList.toggle("completada", checkbox.checked);
  });

  const prioridad = document.createElement("span");
  prioridad.className = `priority ${todo.prioridad}`;
  prioridad.textContent =
    todo.prioridad === "urgente" ? "Urgente" : "Normal";

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "🗑️";

  btnDelete.addEventListener("click", () => {
    todos.splice(index, 1);
    saveTodosToStorage(todos);
    section.replaceWith(ToDoList());
  });

  div.appendChild(checkbox);
  div.appendChild(p);
  div.appendChild(prioridad);
  div.appendChild(btnDelete);

  section.appendChild(div);
});



  return section;
};

export { ToDoList };
