 const axios = require("axios")

// axios.get("https://viacep.com.br/ws/0100100/json")
// .then(response => {
//     let dados = response.data
//     console.log(dados.estado)
//     console.log(dados.ddd)
// }).catch(err => {
//     console.log(err)
//     if(err.status == 400) {
//         console.log("Erro de requisição")
//     }else {
//         console.log("Erro")
//     }
// }).finally(f =>{
//     console.log("ACABOU")
// })

//ultilizando a fakestore API usar o axios para pesquisar o products/6
//Mostrar no console: o title e o price
//https://fakestoreapi.com/

axios.get("https://fakestoreapi.com/products/6")
.then(response => {
    let dados= response.data
    console.log(dados.title)
    console.log(dados.price)
})












