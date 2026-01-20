import { getContactsFromStorage, saveContactsToStorage } from "./storage.js";
let nuevoContacto = () => {

  let section = document.createElement("form");
  section.className = "nuevoContacto-padre";

  const h3 = document.createElement("h3");
  h3.className = "nuevoContacto-titulo";
  h3.textContent = "Nuevo Contacto";

  const userName = document.createElement("input");
  userName.className = "name-input";
  userName.type = "text";
  userName.placeholder = "Ingresa el nombre";

  const telefono = document.createElement("input");
  telefono.className = "telefono-input";
  telefono.type = "text";
  telefono.placeholder = "Ingresa el telefono";

  const btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "Guardar";

  const btnCancel = document.createElement("button");
  btnCancel.type = "button";
  btnCancel.textContent = "Cancelar";

  section.appendChild(h3);
  section.appendChild(userName);
  section.appendChild(telefono);
  section.appendChild(btnSubmit);
  section.appendChild(btnCancel);

  section.addEventListener("submit", (e) => {
    e.preventDefault();

    let contacto = {
      nombre: userName.value,
      telefono: telefono.value,
    };

        const contactos = getContactsFromStorage();
    contactos.push(contacto);
    saveContactsToStorage(contactos);

    userName.value = "";
    telefono.value = "";

    console.log("Nuevo contacto:", contacto);
  });

  return section;
};

export { nuevoContacto };