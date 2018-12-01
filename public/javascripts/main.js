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
            </tr>`}
        )
        document.querySelector("#filas").innerHTML = filas;
    });
}

tareas();

