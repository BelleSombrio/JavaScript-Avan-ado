let btn = document.querySelector("button");

let mostrarOi = () => {
    console.log("oi")
}

btn.addEventListener("click", mostrarOi);


let h1 = document.querySelector("h1");


document.addEventListener("keypress",(e)=>{
    if (e.key == "f") {
   document.querySelector("h1").classList.toggle("fundo-branco");
    }
})

document.addEventListener("keydown", (e) =>{
    if(e.key == "ArrowUp") {
        document.querySelector(".quadrado").classList.toggle("pra-cima");
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key == " ") {
        document.querySelector(".bola").classList.toggle("bounce-top");
    }
})

document.addEventListener("keydown", (e) => {
    if(e.key == "Escape") {
        document.querySelector(".bola2").classList.toggle("slide-out-blurred-top");
    }
})
