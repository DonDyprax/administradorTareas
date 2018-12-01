function tareas() {
    fetch("/api/memes/", {method: 'GET'})
    .then(res => res.json())
    .then(data => {
        let filas = "";
        console.log(data);
        data.forEach(element => {
            filas = filas + `<tr>
                <td>${element._id}</td>
                <td>${element.origen}</td>
                <td>${element.idioma}</td>
                <td>${element.anio}</td>
                <td>
                    <a href="/api/memes/${element._id}" class="update"> Actualizar </a>
                    <a href="/api/memes/${element._id}" class="delete"> Eliminar </a>
                </td>
            </tr>`
        });
        document.querySelector("#filas").innerHTML = filas;
    });
}

tareas();

