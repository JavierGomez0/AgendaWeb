import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/section/contactos/Contactos.js";
import { nuevoContacto } from "./components/section/contactos/NuevoContacto.js";
import { ToDoList } from "./components/section/todolist/ToDoList.js";
import { NuevoTodo } from "./components/section/todolist/NuevoTodo.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "account.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(Contactos());
    }
));

nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "check.svg",
    () => {
        container.innerHTML = "";
        container.appendChild(nuevoContacto());
    }
));

nav.appendChild(Button(
  "ToDoList",
  "todolist",
  "book.svg",
  () => {
    container.innerHTML = "";
    container.appendChild(ToDoList());
  }
));



nav.appendChild(Button(
  "Crear Tarea",
  "crear-tarea",
  "add.svg",
  () => {
    container.innerHTML = "";
    container.appendChild(NuevoTodo());
  }
));
let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(nuevoContacto());
//container.appendChild(NewContactForm());

