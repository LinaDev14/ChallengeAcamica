alert("Conozca la interpretanción de decibeles del escandolo-tron: ");

const DECIBELES = parseInt(prompt("ingresa numero entero"));

if (DECIBELES >= 0 && DECIBELES <= 30) {
    console.log("Decibeles registrados: Susurro. El susurro se genera cuando la cantidad de decibeles es igual o menor a 30.");
} else if (DECIBELES >= 31 && DECIBELES <= 60) {
    console.log("Decibeles registrados: Normal. Se registra un sonido con decibeles normales cuando estos estan en un rango  mayor o igual a 60.");
} else if (DECIBELES > 61) {
    console.log("Decibeles registrados: ESCÁNDALO. Se registra decibeles mayores a 60, haz menos ruido!.");
} else {
    console.log("no se registra el nivel de decibeles ingresado, intente de nuevo");
}