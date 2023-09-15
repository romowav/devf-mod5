// Destructuracion anidada de objetos
const persona = {
  nombre: "cinthya",
  edad: undefined,
  ciudad: "CDMX",
  direccion: {
    calle: "vertiz 1476",
    colonia: "portales",
  },
};

// Desestructuracion anidada

const {
  nombre,
  direccion: { calle, colonia },
} = persona;

console.log(calle, colonia);
