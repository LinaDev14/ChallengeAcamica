/** CICLO FOR **/
/*
1. Escribe un ciclo que muestre por consolas los números del 1 al 10.
*/
//aumento
let i = 0;

for (let i = 0; i < 10; i++) {
    console.log("for " + i);
}

console.log("***********************");

/*
2. Escribe un ciclo que muestre por consolas los números del 10 al 1.
*/
//dismincion

let j = 10

for (let j = 10; j > 0; j--) {
    console.log("for " + j);
}

console.log("************************");

/*
3. Escribe un ciclo que vaya desde 0 hasta 30 y, si el número de iteración es par, imprimir por consola “emparedado”.
*/

let numero = parseInt(prompt("Indica hasta que numero quieres ver: "));


if (numero == null || numero == '') {
    alert("Debes introducir un valor");
}

for (let i = 0; i < numero; i++) {
    if (i % 2 == 0) {
        console.log("emparedado " + i);
    } else {
        console.log(i);
    }
}

console.log("***********************");
/*
4. Crea la función repetir(n) la cual ejecute un ciclo que empezará siempre desde 0, pero que termina en n, mostrando por consola cada iteración.
*/

let l = 1;

function repetir(n) {
    for (let l = 1; l <= n; l++) {
        console.log(l);
    }
}

reperir(10);

console.log("***********************");


/*
5. Crea la función repetirMensaje(n, mensaje) la cual ejecuta un ciclo que empezará siempre desde 0, pero que termina en n, repitiendo por consola un mensaje especificado. 
*/

console.log("***********************");

function repetirMensaje(mensaje, n) {
    if (n >= 0) {
        return mensaje.repeat(n);
    } else {
        throw `El numero de repeticiones debe ser un valor positivo`;
    }
}

try {
    console.log(repetirMensaje("Debo aprender Javascript \n", 5));
} catch (error) {
    console.log(`Error: ${error}`);
}