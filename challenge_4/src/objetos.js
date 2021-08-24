//console.log("Funciona");


// 1. Crea un objeto que tenga propiedades de una persona. Como mínimo el nombre, y la edad. Crea una propiedad dentro de este objeto cuyo valor sea una función anónima que determine si la persona es mayor de edad o no. Considera la mayoría de edad como un valor mayor o igual a 18. Esta función no debe retornar nada, solo mostrar por consola el mensaje respectivo. Por ejemplo:


const PERSONA = {
    nombre: "Lina",
    apellidos: "Guerrero López",
    edad: 22,
    pasatiempos: ["programar", "Dormir", "Cocinar"],
    contacto: {
        email: "linaMaría@gmail.com",
        twitter: "@LinaDev",
        movil: 3213036782
    },
    mayorDeEdad: function() {
        let edad = this.edad;
        if (edad >= 18) {
            console.log("Lina es mayor de edad");
        } else {
            console.log("Lina no es mayor de edad");
        }
    }
}

console.log(PERSONA.nombre);
console.log(PERSONA.apellidos);
console.log(PERSONA.pasatiempos);
console.log(PERSONA.edad);
//acceder a una posicion en especifico
console.log(PERSONA.pasatiempos[2]);
//acceder a un objeto dentro de objetos
console.log(PERSONA.contacto.email);
console.log(PERSONA.contacto.movil);
PERSONA.mayorDeEdad();


//2. Partiendo de este sandbox completa la función “disponible” la cual indica si el producto está disponible o no. Un producto no está disponible cuando el valor de “cantidad” es menor o igual a cero. Mostrar los mensajes correspondientes para cada caso. Sobre el mismo sandbox, modifica la propiedad “cantidad” para que tenga un valor de cero, y vuelve a invocar la función “disponible”.


let producto = {
    id: "AAFC29",
    nombre: "producto",
    cantidad: 20,
    disponible: function() {
        let cantidad = this.cantidad;
        if (cantidad > 0) {
            console.log("El producto esta disponible!");
        } else {
            console.log("El producto no esta disponible :(");
        }
    }
};

producto.disponible();

// 3. Declara un array de objetos. Diseña cada objeto considerando que cada uno debe representar una tarea dentro del Taskineitor. Tienes la libertad de crear las propiedades que consideres, como título o nombre de la tarea, el estado en el que se encuentra, (completada/no completada), entre otras. Trae tu array de tareas para la próxima clase. 

const TAREAS = [{
        id: 1,
        tarea: 'ordenar documentos del pc',
        duracionHr: 9,
        tipoArchivos: 'proyectos',
        estado: false
    },

    {
        id: 2,
        tarea: 'comprar proteina',
        precio: 180,
        nombreProteina: 'proscience Legacy',
        estado: true
    },

    {
        id: 3,
        tarea: 'Estudiar Typescript',
        duracionHr: 16,
        tema: 'Compilador Typescript, Grunt y Gulp.',
        estado: false
    },

    {
        id: 4,
        tarea: 'Estudiar JS',
        duracionHr: 16,
        tema: 'Consumir una API',
        estado: false
    },

    {
        id: 5,
        tarea: 'Estudiar REACT',
        duracionHr: 94,
        tema: 'import and export modules',
        estado: false
    },

    {
        id: 6,
        tarea: 'completar curso FIREBASE',
        duracionHr: 45,
        tema: 'Compilador Typescript, Grunt y Gulp.',
        estado: false
    },

    {
        id: 7,
        tarea: 'pagar mensualidad gym',
        precio: 100,
        ciudad: 'calarcá',
        estado: true
    },

    {
        id: 8,
        tarea: 'planear regalos',
        celebracion: 'amor y amistad',
        amigoSecreto: 'Mateo',
        estado: false
    },

    {
        id: 9,
        tarea: 'comprar maquillaje faltante',
        precioAprox: 200,
        tienda: 'LuluCosmetics',
        estado: false
    }
]

//metodos para recorrer los arrays

//meotodo find()

let metodo1 = TAREAS.find(TAREAS => TAREAS.tarea == "comprar proteina");
console.log(metodo1);

let ejem1 = TAREAS.find(TAREAS => TAREAS.id == 4);
console.log(ejem1);

//meotodo some() --> comprobar

let meotodo2 = TAREAS.some(TAREAS => TAREAS.id === 10);
console.log(meotodo2);

// metodo include()

console.log(TAREAS.includes('maquillaje'));