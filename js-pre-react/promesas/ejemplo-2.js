let heladeriaAbierta = false

// formas de usar promesas
// 1.- crear las reglas de la promesa. nos puede tocar hacerlo o no
const traerHelado = new Promise((resolve, reject) => {
    // Logica de la promesa
    if(heladeriaAbierta) {
        resolve("ten tu helado")
    }else{
        reject("taba cerrado")
    }
})

// console.log(traerHelado);

// 2.- recibir promesas como respuesta
traerHelado.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.error(error);
})