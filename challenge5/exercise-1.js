let personas = [{
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

//implementar fn

let invitados = [];
const listaPersonas = personas.forEach((persona, index) => {
    if (persona.asistente === true) {
        persona.index = index;
        invitados.push(persona);
    }
});

console.log(invitados);

console.log();

let totalAsistentes = personas.filter(function(persona) {
    return persona.asistente === true;
});
console.log(totalAsistentes);


/*
function asistentes(listaPersonas) {
  let asistentes = 0;
  listaPersonas.forEach((persona) => {
    persona.asistente ? asistentes++ : null;
  });
  return asistentes;
}
let totalAsistentes = asistentes(personas);
console.log(totalAsistentes);


*/