import { tareas } from "./tareas.js"
//let borrarTarea = [1, 2, 3, 4, 5];
let removerId = 2;

/*
const borrar = borrarTarea.filter( 
    tarea => tarea !== removerId
    )
*/

export function eliminarTarea() {
    const nuevoArray = tareas.filter(
        tarea => tarea.id !== removerId
    );

    console.log(nuevoArray);
}