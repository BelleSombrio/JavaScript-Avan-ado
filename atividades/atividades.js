let h1 = document.querySelector(".saudacao");
h1.innerText = "Ola mundo";

let input = document.querySelector(".valor");
input.value = "Digite algo aqui";

let lista = document.querySelector(".lista")
lista.style.backgroundColor = "pink"

let quadrado = document.querySelector(".quadrado-roxo")
quadrado.style.height = "100px"
quadrado.style.width = "100px"
quadrado.style.backgroundColor = "pink"



var novoli = document.createElement("li")
novoli.innerText = "Li dentro da ul";

var ul = document.querySelector(".ul")
ul.appendChild(novoli)

document.querySelector(".botao")
.addEventListener("click" ,() => { alert("oi")}) 



let cat = document.querySelector(".cat")
cat.addEventListener("mouseover" , () => {
    cat.innerText = "🐱"; 
})

let quadradobola = document.querySelector (".quadrado-bola")
quadradobola.style.height = "100px";
quadradobola.style.width = "100px"
quadradobola.style.backgroundColor = "blue"
quadradobola.addEventListener("dblclick", () => {
    quadradobola.style.borderRadius = "50%" 
})

let mouse = document.querySelector(".mouse")
mouse.style.height = "30px"
mouse.style.width = "90px"
mouse.addEventListener("mouseenter", () => {
    mouse.style.marginLeft = "100px"
})


let retangulo = document.querySelector(".retangulo")


retangulo.addEventListener("click", ()=>{
    
    retangulo.classList.toggle("retangulo-azul")
})

let nomes = ["Isabelle", "Ana", "Fernanda", "Barbara"]
console.log(nomes)
nomes.push("Jennifer")
nomes.pop("Jennifer")
nomes.shift("Isabelle")


let animais = ["Gato", "Cachorro","Galinha"]
animais.forEach(animal => {
    console.log(animal)
})

let musicas = ["Bohemian Rhapsody","Shape of You","Billie Jean","Hey Jude","Blinding Lights"]
musicas.forEach(musicas =>{
    let h2nomemusicas = document.createElement("h2")
    h2nomemusicas.innerHTML = musicas
    document.querySelector(".musicas").appendChild(h2nomemusicas)
})