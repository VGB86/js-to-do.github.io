function pintarTareas(pListaTareas) {
    sectionTareas.innerHTML = '';
    mensajeError.innerHTML = '';

    if (pListaTareas.length == 0) {
        sectionTareas.innerHTML = '<h2>No hay tareas pendientes</h2>';

    } else {

        for (tarea of pListaTareas) {
            let articleTarea = document.createElement('article');
            articleTarea.id = `${tarea.idTarea}`;
            articleTarea.className = `${tarea.prioridad}`;
            let h2 = document.createElement('h2');
            let btnEliminar = document.createElement('a');
            btnEliminar.setAttribute('href', '#')
            btnEliminar.setAttribute('title', 'eliminar')

            let contenidoH2 = document.createTextNode(`${tarea.titulo}`);
            let contenidoEliminar = document.createTextNode('Eliminar');


            h2.appendChild(contenidoH2);
            btnEliminar.appendChild(contenidoEliminar);
            btnEliminar.addEventListener('click', eliminarTarea);
            articleTarea.appendChild(h2)
            articleTarea.appendChild(btnEliminar);

            sectionTareas.appendChild(articleTarea);
            sectionNotaAreas.appendChild(sectionTareas);
        }
    }
}

function almacenaTarea(pTarea) {
    listaTareas = listaTareas.concat(pTarea);
    console.log(listaTareas);
    pintarTareas(listaTareas);
    return listaTareas;
}

function filtrarDiagnostico(pPrioridad) {
    for (tareas of listaTareas) {
        if (tareas.prioridad == pPrioridad) {
            let listaFiltrada = listaTareas.filter(tarea => tarea.prioridad == pPrioridad);
            pintarTareas(listaFiltrada);
            return listaFiltrada;
        } else if (pPrioridad == "todas") {
            pintarTareas(listaTareas);
        } else if (tareas.prioridad != pPrioridad) {
            sectionTareas.innerHTML = '<h2>No hay tareas de tipo <strong>' + pPrioridad + ' </strong> pendientes</h2>';
        }
    }
}

function busqueda(pLista, pPalabra) {
    let listaFiltrada = pLista.filter(tarea => {
        return tarea.titulo.toLowerCase().includes(pPalabra.toLowerCase())
    })
    pintarTareas(listaFiltrada);
    return listaFiltrada;

}