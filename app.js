let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo");
    let nombreAmigo = nuevoAmigo.value.trim(); // Elimina espacios en blanco al inicio y final

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
    } else {
        amigos.push(nombreAmigo);
        nuevoAmigo.value = ''; // Limpia el campo de entrada
        nuevoAmigo.focus(); // Mantiene el foco en el campo de entrada
        imprimirAmigos();
    }
}

function imprimirAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de volver a imprimir

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // Crear el icono para eliminar
        let deleteIcon = document.createElement("span");
        deleteIcon.textContent = "✖"; // Ícono x
        deleteIcon.className = "delete-icon"; // Clase para estilos
        deleteIcon.onclick = () => eliminarAmigo(i); // Asignar funcion para eliminar

        // Agregar el icono de eliminacion al elemento de la lista
        item.appendChild(deleteIcon);

        // Agregar el elemento de la lista al contenedor
        listaAmigos.appendChild(item);
    }
}

function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo del array
    imprimirAmigos(); // Actualiza la lista en la pantalla
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Limpia la lista de amigos después del sorteo
    amigos = [];
    imprimirAmigos();
}

function reiniciarSorteo() {
    amigos = []; // Reinicia el array de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista en la pantalla
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado del sorteo
}