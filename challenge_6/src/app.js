import { personas } from "./personas.js"
import { mostrarNombres } from "./mostrar.js"
import { nombresMayuscula } from "./capitalizacion.js"
import { buscarPersonas } from "./buscar.js"
import { personasViewer, personasVIP } from "./filtrado.js"

/*
1. Mostrar los nombres de las personas en el archivo "personas.js" a través de la función que creaste en "mostrar.js"
*/
mostrarNombres();

/*
2. Crear un nuevo array con los nombres de las personas en "personas.js" en mayúsculas
*/

buscarPersonas(personas, 3);

console.log(nombresMayuscula());

/*
3. Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
*/

personasViewer();
/*
4. Crear un nuevo array con las personas pertenecientes al vip.
*/
personasVIP();