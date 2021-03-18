class Tarea {
    constructor(idTarea, pTitulo, pPrioridad) {
        this.idTarea = idTarea;
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;

    }

    asignarId(pContador) {
        this.idTarea = 1 + pContador;
        pContador++
        return pContador;
    }
}
