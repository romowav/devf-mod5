// desestructuracion de objetos como parametors de funciones
function imprimirInfo({ nombre, edad }) {
  console.log(`nombre: ${nombre}, Edad: ${edad}`);
}
const persona = {
  nombre: "cinthya",
  edad: 19,
  ciudad: "CDMX",
};

imprimirInfo(persona);
