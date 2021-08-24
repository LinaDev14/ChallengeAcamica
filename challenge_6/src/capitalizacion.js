/**
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array con los nombres de esas personas en mayúsculas.
 *
 * Revisa la documentación del método toUpperCase en
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */


import { personas } from "./personas.js"

export const nombresMayuscula = () => {
    const mayusculas = personas.map(function(M) {
        console.log({
            nombre: M.nombre.toLocaleUpperCase(),
            asistente: M.asistente,
            seccion: M.seccion,
            rol: M.rol,
            id: M.id
        });
    });

}