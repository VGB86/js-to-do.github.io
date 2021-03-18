var sectionNotaAreas = document.querySelector('#notareas');
var sectionTareas = document.querySelector('#tareas');
var btnGuardaTarea = document.querySelector('#guardar');
var mensajeError = document.querySelector('#mensaje');
var tituloTarea = document.getElementById('tituloTarea');
var prioridad = document.querySelector('#prioridad');
var listaTareas = new Array();
var contadorIdTarea = 0;


btnGuardaTarea.addEventListener('click', recogerTarea)
btnGuardaTarea.addEventListener('keycode', recogerTarea)

function recogerTarea(event) {
    if (event.keyCode == 13 || event.type == "click") {
        event.preventDefault();
        let tTarea = tituloTarea.value;
        let nuevaPrioridad = prioridad.value;
        almacenaCookie(tTarea, nuevaPrioridad);

        if (tTarea == '' || nuevaPrioridad == '') {
            mensajeError.innerHTML = 'Debes completar todos los compos';
        } else {
            let tarea = new Tarea(contadorIdTarea, tTarea, nuevaPrioridad);
            tarea.asignarId(contadorIdTarea);
            contadorIdTarea++;
            almacenaTarea(tarea);
        }
        return contadorIdTarea;
    }
}


var prioridadSelect = document.getElementById('prioridadSelect')

prioridadSelect.addEventListener('change', filtraXprioridad)
function filtraXprioridad(event) {
    let findPrioridad = prioridadSelect.value;
    filtrarDiagnostico(findPrioridad)
}

function eliminarTarea(event) {
    let elementoId = event.target.offsetParent.id;
    for (tarea of listaTareas) {
        if (tarea.idTarea == elementoId) {
            let posicion = listaTareas.findIndex(tarea => tarea.idTarea == elementoId)
            listaTareas.splice(posicion, 1)
            console.log(listaTareas);
            pintarTareas(listaTareas);//removechild
        }
    }
}

var btnBuscar = document.querySelector('#search')

btnBuscar.addEventListener('input', buscarXletra)

function buscarXletra(event) {
    let palabra = event.target.value;
    busqueda(listaTareas, palabra);
}



