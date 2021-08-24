const personas = [
    { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
    { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
    { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
    { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
    { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
    { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
    { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
    { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
    { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
    { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
    { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
    { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 }
];

// Utiliza .filter para crear un nuevo array de objetos con las personas, cuyo nombre sea mayor a 4 letras

const result = personas.filter(function(letra) {
    return letra.first.length > 4;
});

console.log(result);

//salto de linea en consola
console.log();


//Utiliza .filter para crear un nuevo array con las personas asistentes, es decir, que tengan la propiedad “asistente” dentro de su objeto, y que esta sea igual a “true”.

let personas1 = [{
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker"
    },
    {
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Cintia",
        seccion: "platino",
        rol: "viewer"
    },
    {
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer"
    },
    {
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker"
    }
];

console.log();
console.log();

const asistencia = personas1.filter(function(asistenciaPersona) {
    return asistenciaPersona.asistente === true;
});
console.log(asistencia);