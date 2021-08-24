import { tareas } from "./tareas.js"
let nuevaTarea = 'Estudiar';
let id = 2;

export function modificarTarea() {
    tareas.map(function(tarea) {
        if (tarea.id === id) {
            tarea.titulo = nuevaTarea;
        }
        return tarea;
    });

    console.log(tareas);
}