/**
 * Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado
 */


export function buscarPersonas(personas, id) {
    const buscar = personas.filter(function(persona) {
        return persona.id === id;
    });

    console.log(buscar);
}