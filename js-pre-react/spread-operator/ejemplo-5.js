// clonar objeto y modificar propiedades

const persona = { nombre: "pablo", edad: 27 }
const personaMod = { ...persona, edad: 30 }

console.log(persona);
console.log(personaMod);