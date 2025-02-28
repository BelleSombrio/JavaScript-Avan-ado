let frutas = ["limão", "banana", "maracujá", "manga", "melancia", "melão", "bergamota", "laranja", "morango", "kiwi", "tomate", "lixia", "uva", "pêra", "maçã"]

// frutas.forEach(frutas => {
//     let h1NomeFrutas = document.createElement("h1");
//     h1NomeFrutas.innerHTML = frutas;
//     document.querySelector(".frutas").appendChild(h1NomeFrutas);
// })

// document.querySelector(".btn-frutas")
// .addEventListener("click",()=>{
//     let texto = document.querySelector(".nome-frutas").value
//     frutas.push(texto);
//     let h1NomeFrutas = document.createElement(h1)
//     h1NomeFrutas.innerHTML = texto


// })

function atualizarListaFrutas() {
    let ulFrutas = document.querySelector(".frutas")
    ulFrutas.innerHTML = ""

    frutas.forEach(fruta => {
        // let liFruta = document.createElement("li")
        // liFruta.innerHTML = fruta
        // ulFrutas.appendChild(liFruta)

        ulFrutas.innerHTML += `<li>${fruta}</li>`
    })
}
atualizarListaFrutas()

// 1- Adiciona evento "click" no botão
// 2- Pega o valor do input e salva em uma variável
// 3- Adicionar o valor da variavel denro da atualizarListaFrutas
// 4- Roda a função atualizarListaFrutas()
document.querySelector(".btn-frutas")
    .addEventListener("click", () => {
        let input = document.querySelector(".nome-fruta")
        frutas.push(input.value)
        atualizarListaFrutas()
    })



let filmes = ["Vingadores", "Homem-aranha", "Hulk", "Capitão América", "Homeme de Ferro", "Homem Formiga", "Viuva Negra"]

function atualizarListaFilmes() { 
    // seleciona a ul lista filmes e guarda o elemento HTMl dentro da variavel ul
    let ulFilmes = document.querySelector(".filmes") 
    // limpa a ulFilmes, para poder reescrever com o novo filme sem repetir tudo
    ulFilmes.innerHTML = ""
    
// o comando foreach percorre todos os itens da lista nesse caso todos os filmes da ulFilmes
// usamos ele aqui para adicionar uma nova tag li dentro do html ul para cada filme na lista ulfilmes
filmes.forEach(filmes => {
    ulFilmes.innerHTML += `<li>${filmes}</li>`
})
// está adicionando e somando as li/nome dos filmes 
}
// executamos a função 1 vez na hora o scrip roda o site 
atualizarListaFilmes()
// seleciona o html do botao btn-adicionar
// e ja adicionamos um evento de click nele 
// o evento executa a namless function 
// a função faz:
// 1) usa o querryselector para salvar na variavel input a tag input ".nome-filme" 
// obs cria uma instância da tag input na variavel 
// 2) usamos o listaFilmes.push() para adicionar um novo filme usando o valor do input (input.value)
// 3) Rodamos novamente a função atualizarListafilmes() para limpar o conteudo interno da ul e escrever novamente todos os filmes ali dentro.
// obs: temos que limpar a tag ul para nao ter itens duplicados dentro dela.
document.querySelector(".btn-filmes")
.addEventListener("click", () => {
    let input = document.querySelector(".nome-filmes")
    filmes.push(input.value)
    atualizarListaFilmes()

})


