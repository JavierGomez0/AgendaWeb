const login = () => {

    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = "iniciar sesión";

    const user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Contraseña";

    const button = document.createElement("button");
    button.textContent = "Siguiente ";

    button.addEventListener('click', function(){
        window.location.href = "./src/app.html"
    })

    section.appendChild(h3);
    section.appendChild(user);
    section.appendChild(password);
    section.appendChild(button);

    return section;
};

export { login };