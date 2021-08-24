/**
Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
 */

import { personas } from "./personas.js"

export function personasViewer() {
    const buscarViewer = personas.find(personas => personas.rol === 'viewer');
    console.log(buscarViewer);
}

/*
Crear un nuevo array con las personas pertenecientes al vip.
*/

export function personasVIP() {
    const VIP = personas.filter(personas => personas.seccion === 'vip');
    console.log(VIP);
}