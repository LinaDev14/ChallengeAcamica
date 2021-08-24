import { tareas } from "./tareas.js"
import { mostrarInformacionTarea } from "./mostrar.js"
import { agregarTarea } from "./agregar.js"
import { modificarTarea } from "./modificar.js"
import { eliminarTarea } from "./eliminar.js"

//mostrar solo los id
const tareasId = tareas.map(function(p) {
    return p.id;
});
console.log(tareasId);

//mostrar id especifico
mostrarInformacionTarea(tareas, 3);

//agregar nueva tarea
agregarTarea();
console.log(tareas);

//modificar array
modificarTarea();

//Eliminar objeto del array
eliminarTarea();
//console.log(tareas);