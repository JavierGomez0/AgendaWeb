import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/section/contactos/Contactos.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda","agenda", "account.svg"));
nav.appendChild(Button("+", "plus", "check.svg"));
nav.appendChild(Button("ToDoList", "todolist","book.svg"));
nav.appendChild(Button("Crear Tarea", "crear tarea","add.svg"));

let container = document.getElementById("container");
container.appendChild(Contactos());

