export function mostrarInformacionTarea(tareas, id) {
    const mostrarId = tareas.filter(function(tarea) {
        return tarea.id === id;
    });

    console.log(mostrarId);
}