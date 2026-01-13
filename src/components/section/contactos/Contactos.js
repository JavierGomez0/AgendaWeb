import { itemContacto } from "../../common/itemContacto/ItemContacto.js";
let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "Contactos";
    
    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);

    sectionContactos.appendChild(itemContacto("account.svg", "Javier Gomez", "12458796"));
        sectionContactos.appendChild(itemContacto("account.svg", "Alessandro zaca", "12458796"));


    return sectionContactos;
}

export {Contactos}

