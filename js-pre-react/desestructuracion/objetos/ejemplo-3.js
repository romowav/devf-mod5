// Valores por defecto
const persona = {
  nombre: "cinthya",
  edad: undefined,
  ciudad: "CDMX",
};
// Desestructuracion con valores por defecto
let { edad = 30 } = persona;

console.log(edad);
