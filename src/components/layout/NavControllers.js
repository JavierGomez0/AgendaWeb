import { Contactos } from "../section/contactos/Contactos.js";
import { nuevoContacto } from "../section/contactos/NuevoContacto.js";

let container = document.getElementById("container");

let viewContacts = function () {
  container.innerHTML = "";
  container.appendChild(Contactos());
};

let viewNewContact = function () {
  container.innerHTML = "";
  container.appendChild(nuevoContacto());
};

export { viewContacts, viewNewContact };