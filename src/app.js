import { Button } from "./components/common/button/Button.js";
import { Contactos } from "./components/section/contactos/Contactos.js";
import { nuevoContacto } from "./components/section/contactos/NuevoContacto.js";
import { ToDoList } from "./components/section/todolist/ToDoList.js";
import { NuevoTodo } from "./components/section/nuevatarea/NuevoTodo.js";

let app = document.getElementById("app");
let nav = document.getElementById("nav");
let container = document.getElementById("container");

let viewContacts = () => {
    container.innerHTML = "";
    container.appendChild(Contactos());
};

let viewNewContact = () => {
    container.innerHTML = "";
    container.appendChild(nuevoContacto());
};

let viewToDoList = () => {
    container.innerHTML = "";
    container.appendChild(ToDoList());
};

let viewNuevoTodo = () => {
    container.innerHTML = "";
    container.appendChild(NuevoTodo());
};

nav.appendChild(Button("Agenda", "agenda", "account.svg", viewContacts));
nav.appendChild(Button("Crear contacto", "plus", "check.svg", viewNewContact));
nav.appendChild(Button("ToDoList", "todolist", "book.svg", viewToDoList));
nav.appendChild(Button("Crear Tarea", "crear-tarea", "add.svg", viewNuevoTodo));

container.innerHTML = "";
container.appendChild(nuevoContacto());

async function tareas() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await data.json();
        console.log(r);
    } catch (error) {
        console.error(error);
    }
}

tareas();

console.log("Completado");
