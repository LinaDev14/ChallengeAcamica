//console.log("funciona");

let edadBianca = 30;
let edadPedro = 19;
let edadJose = 45;
let edadJulio = 40;
let edadFany = 33;
let edadMaria = 24;

// 1. ¿Es Bianca mayor que María?

/*
console.log("¿Es Bianca mayor que María?");

function temporizador() {

    temporizador = setTimeout(function() {
        if (edadBianca > edadMaria) {
            console.log("Bianca es mayor que maria");
        } else if (edadBianca < edadMaria) {
            console.log("Maria es mayor que Bianca");
        } else {
            console.log("Ambas tienen la misma edad");
        }
    }, 2000);
}

temporizador();
*/

/*
// 2. ¿Es Pedro mayor que Bianca?

console.log("¿Es Pedro mayor que Bianca?");

function temporizador() {

    temporizador = setTimeout(function() {
        if (edadPedro > edadBianca) {
            console.log("Pedro es mayor que Bianca");
        } else if (edadPedro < edadBianca) {
            console.log("Bianca es mayor que Pedro");
        } else {
            console.log("Ambos tienen la misma edad");
        }
    }, 2000);
}
temporizador();

*/

// 3. ¿Es Julio mayor que Fany?

/*
console.log("¿Es Julio mayor que Fany?");

if (edadJulio > edadFany) {
    console.log("Julio es mayor que Fany");
} else if (edadJulio < edadFany) {
    console.log("Julio es menor que Fany");
} else {
    console.log("Ambos tienen la misma edad");
}
*/

/*

// 4. ¿Es Jose mayor que Pedro?

console.log("¿Es Jose mayor que Pedro?");

if (edadJose > edadPedro) {
    console.log("Jose es mayor que pedro");
} else if (edadJose < edadPedro) {
    console.log("Jose es menor que pedro");
} else {
    console.log("Ambos tienen la misma edad");
}

*/


// 5. ¿Cuanto es la sumatoria de las edades de Julio, Jose y Pedro?

/*
console.log("¿Cuanto es la sumatoria de las edades de Julio, Jose y Pedro?");

let sumaEdades = parseInt((edadPedro) + (edadJulio) + (edadJose));

console.log(`Sumando las edades de Julio,Jose y Pedro tenemos un total de ${sumaEdades} años de edad.`);

*/


// 6. ¿Cuanto es la sumatoria de las edades de Bianca, Fany y Maria?

/*
console.log("¿Cuanto es la sumatoria de las edades de Bianca, Fany y Maria?");

let totalEdades = parseInt((edadBianca) + (edadFany) + (edadMaria));

console.log(`Sumando las edades de Bianca, Fany y Maria tenemos un total de ${totalEdades} años de edad.`);
*/


// 7. ¿La sumatoria de las edades de Julio y Jose es mayor que la de Fany y Maria?

/*
console.log("¿La sumatoria de las edades de Julio y Jose es mayor que la de Fany y Maria?")

let sumaChicos = parseInt((edadJulio) + (edadJose));
let sumaChicas = parseInt((edadFany) + (edadMaria));

if (sumaChicos > sumaChicas) {
    console.log("La suma de edades de Julio y Jose, es mayor a la sumatoria de edades de Fany y Maria.");
} else if (sumaChicos < sumaChicas) {
    console.log("La suma de edades de Julio y Jose, es menor a la sumatoria de edades de Fany y Maria.");
} else {
    console.log("La sumatoria de edades es igua en ambos casos.");
}
*/

// 8.¿La sumatoria de las edades de Fany y Bianca es menor que la de Jose y Pedro?

/*
console.log("¿La sumatoria de las edades de Fany y Bianca es menor que la de Jose y Pedro?");

let sumaChicos = parseInt((edadJose) + (edadPedro));
console.log(sumaChicos);
let sumaChicas = parseInt((edadFany) + (edadBianca));
console.log(sumaChicas);

if (sumaChicos > sumaChicas) {
    console.log("La suma de edades de Fany y Bianca es mayor a la sumatoria de edades de Jose y Pedro.");
} else if (sumaChicos < sumaChicas) {
    console.log("La suma de edades de Fany y Bianca es menor a la sumatoria de edades de Jose y Pedro.");
} else {
    console.log("La sumatoria de edades es igua en ambos casos.");
}
*/

// 10. ¿La edad de Pedro, menos la edad Bianca, es mayor o igual que la edad de Jose, menos la edad de Fany?

/*
console.log("¿La edad de Pedro, menos la edad Bianca, es mayor o igual que la edad de Jose, menos la edad de Fany?");

let comparacion1 = parseInt((edadPedro) - (edadBianca - edadBianca));
let comparacion2 = parseInt((edadJose) - (edadFany));

if (comparacion1 >= comparacion2) {
    console.log("la edad de pedro menos la edad de Biana, es mayor que la diferencia de edades entre Jose y Fany.");
} else if (comparacion1 <= comparacion2) {
    console.log("la edad de pedro menos la edad de Biana, es menor que la diferencia de edades entre Jose y Fany.");
} else {
    console.log("la diferencia de edades en ambos casos tienen el mismo valor.");
}
*/

// 11. ¿La edad de Maria, multiplicada por la edad Julio, es menor o igual que la edad de Maria, dividad por la edad de Bianca?


let mult = parseInt((edadMaria) * (edadJulio));
//console.log(mult);
let div = parseInt((edadMaria) / (edadBianca)); //igual a 0.833333
//console.log(div);

/*
console.log(`la multiplicacion de edad entre Maria y Julio es igual a ${mult}`);
console.log(`la division entre las edades de Maria y Bianca es igual a ${div.toFixed(3)}`);
*/

if (mult > div) {
    console.log("la multiplicacion de edades es mayor");
} else if (mult < div) {
    console.log("la multiplicacion de edades es menor");
} else {
    console.log("Ambas operaciones tienen el mismo resultado");
}