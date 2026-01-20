import { getTodosFromStorage, saveTodosToStorage } from "./storageTodo.js";

let NuevoTodo = () => {
  let section = document.createElement("form");
  section.className = "nuevoTodo-padre";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ingresa la tarea";

  const select = document.createElement("select");

  const normal = document.createElement("option");
  normal.value = "normal";
  normal.textContent = "Normal";

  const urgente = document.createElement("option");
  urgente.value = "urgente";
  urgente.textContent = "Urgente";

  select.appendChild(normal);
  select.appendChild(urgente);

  const btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Guardar";

  section.appendChild(input);
  section.appendChild(select);
  section.appendChild(btnSubmit);

  section.addEventListener("submit", (e) => {
    e.preventDefault();

    let tarea = {
      tarea: input.value,
      prioridad: select.value,
      completada: false
    };

    let todos = getTodosFromStorage();
    todos.push(tarea);
    saveTodosToStorage(todos);

    input.value = "";
  });

  return section;
};

export { NuevoTodo };
