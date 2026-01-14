import { itemContacto } from "../../common/itemContacto/ItemContacto.js";
import { ContactList } from "./db.js";
let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "Contactos";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    ContactList.forEach((contact) => {
        sectionContactos.appendChild(itemContacto("add.svg",
            contact.nombre, contact.telefono));
    });


    return sectionContactos;
}

export {Contactos}

