import { tareas } from "./tareas.js"

export function agregarTarea() {
    const nuevaTarea = {
        titulo: 'asistir a clase',
        completada: false,
        fechaCreada: '24/08/2021',
        id: 5
    }

    let agregar = tareas.push(nuevaTarea);

    console.log(agregar);

}