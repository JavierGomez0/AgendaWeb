import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/section/contactos/Contactos.js";
import { nuevoContacto } from "./components/section/contactos/NuevoContacto.js";


let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "account.svg",
));

nav.appendChild(Button(
    "Crear contacto",
    "plus",
    "check.svg",
));

nav.appendChild(Button("ToDoList", "todolist","book.svg"));
nav.appendChild(Button("Crear Tarea", "crear tarea","add.svg"));

let container = document.getElementById("container");

container.innerHTML = "";
container.appendChild(nuevoContacto());
//container.appendChild(NewContactForm());

