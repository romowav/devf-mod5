// copiar de forma segura las propiedades de un objeto a otro 
let gato = { nombre: "shumi", edad: 1}

let gatoCopia = {...gato}

gatoCopia.nombre = "Goji"

console.log("Gato original", gato);
console.log("gato copia", gatoCopia);