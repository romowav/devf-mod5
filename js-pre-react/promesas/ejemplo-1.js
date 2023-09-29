// en javascript, representan un valor que puede estar disponible ahora, en el futuro o nunca. y se utilizan para manejar operaciones asincronas.

const promesa = new Promise(function (resolve, reject) {
    // las promesas contienen 2 metodos: 
    resolve()
    reject()
})

promesa.then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
    
})