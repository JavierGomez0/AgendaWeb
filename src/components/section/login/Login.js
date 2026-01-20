const login = () => {

    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = "Login";

    const user = document.createElement("input");
    user.type = "text";
    user.placeholder = "Usuario";

    const password = document.createElement("input");
    password.type = "password";
    password.placeholder = "Password";

    const button = document.createElement("button");
    button.textContent = "Iniciar Sesión";

    section.appendChild(h3);
    section.appendChild(user);
    section.appendChild(password);
    section.appendChild(button);

    return section;
};

export { login };
