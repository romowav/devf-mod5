// con base a un operador ternario, retornar si el numero es par o impar
function esPar(numero) {
    let restante = numero % 2
    return (restante == 0) ? "es Par" : "es impar"
}
console.log(esPar(7));