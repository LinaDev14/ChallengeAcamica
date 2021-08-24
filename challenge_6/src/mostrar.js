/**
 * Crea una función que reciba una lista de personas y muestre
 * por consolas sus nombres.
 */

import { personas } from "./personas.js"


export const mostrarNombres = () => {
    personas.forEach((persona) => {
        console.log(persona.nombre);
    });
}