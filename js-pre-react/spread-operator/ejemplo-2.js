// concatenar arreglos

// el spread operator tambien puede servir para combinar varios arreglos en uno solo

const arreglo1 = [1, 2, 3]
const arreglo2 = [4, 5, 6]

const arregloConcatenado = [...arreglo1, ...arreglo2]

// expected output: 1 arreglo 
console.log(arregloConcatenado);