import { sumar } from "./suma.js"
import { restar } from "./resta.js"
import { multiplicar as mult } from "./multiplicacion.js"
import { dividir as div } from "./division.js"
import { modulo as mod } from "./modulo.js"


alert('¿Que operación deseas realizar?');
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación 5: modulo");

//suma
if (operacion == 1) {
    let num1 = prompt('Primer número para sumar');
    let num2 = prompt('Segundo número para sumar');

    let resultado = sumar(num1, num2);
    alert(`el resultado de la suma es ${resultado} `);
}

//resta
if (operacion == 2) {
    let num1 = prompt('Primer número para restar');
    let num2 = prompt('Segundo número para restar');
    let resultado = restar(num1, num2);
    alert(`el resultado de la resta es ${resultado} `);
}

//division
if (operacion == 3) {
    let num1 = prompt('Primer número para dividir');
    let num2 = prompt('Segundo número para dividir');

    let resultado = div(num1, num2);
    alert(`el resultado de la división es ${resultado} `);
}

//multiplicacion
if (operacion == 4) {
    let num1 = prompt('Primer número para multiplicar');
    let num2 = prompt('Segundo número para multiplicar');
    let resultado = mult(num1, num2);
    alert(`el resultado de la multiplicación es ${resultado} `);
}

//modulo
if (operacion == 5) {
    let num1 = prompt('Primer número para division (residuo)');
    let num2 = prompt('Segundo número para division (residuo)');
    let resultado = mod(num1, num2);
    alert(`el resultado de la division (residuo) es ${resultado} `);
}




//validaciones
/*
console.log(sumar(2, 3));
console.log(sumar(2, 3, 6));
console.log(restar(20, 3));
console.log(restar(20, 3, 4));
console.log(mult(2, 5));
console.log(mult(2, 3, 4));
console.log(div(2, 0));
console.log(div(2));
console.log(div('2', 3));
console.log(div(2, 4, 5));
*/