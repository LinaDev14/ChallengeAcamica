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


const rolPersonas = personas.filter(function(roles) {
    return roles.rol === "speaker"
});

console.log(rolPersonas);