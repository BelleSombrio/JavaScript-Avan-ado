let personagens = [
    {
        nome: "Shane",
        imagem: "Shane.png",
        aniversario: "Primavera 20",
        tipo: "Casável",
        presentes: "Cerveja, Enroladinho de pimenta, Pimenta quente e Pizza.",
        curiosidades: "",

    },
    {
        nome: "Gus",
        imagem: "",
        aniversario: "Verão 8",
        tipo: "Não casável",
        presentes: "Diamante, escargô, Taco de peixe, Laranja e Curry tropical.",
        curiosidades: "",
    },
    {
        nome: "Pam",
        imagem: "",
        aniversario: "Primavera 18",
        tipo: "Não casável",
        presentes: "Cerveja, Chírivia, Fruto do cacto, Hidromel, Inhames com cobertura, Pale Ale, Pina Colada, Sopa de chirívia.",
        curiosidades: "",
    },
    {
        nome: "Penny",
        imagem: "",
        aniversario: "Outono 2",
        tipo: "Casável",
        presentes: "Livros, Areinha, Bolinho de papoula, Diamante, Esmeralda, Melão, Papoula, Prato de raízes, Prato vermelho, Prato Tom Kha.",
        curiosidades: "",
    },
    {
        nome: "Sebastian",
        imagem: "",
        aniversario: "Inverno 10",
        tipo: "Casável",
        presentes: "Lágrima congelada, Obisidiana, Ovo de Sapo, Ovo nulo, Sashimi, Sopa de abóbora.",
        curiosidades: "",
    },
    {
        nome: "Robin",
        imagem: "",
        aniversario: "Outono 21",
        tipo: "Não casável",
        presentes: "espaguete, O segredo da floresta, Pessêgo e Queijo de Cabra",
        curiosidades: "",
    }
];

personagens.forEach(personagem => {
    let lista = document.querySelector(".lista-personagens");
    lista.innerHTML +- `
     <div class="personagem ${personagem.nome}">
            <div class="nome">
                <p>${personagem.nome}</p>
            </div>
            <div class="aniversario ${personagem.aniversario}">
                <p>${personagem.aniversario}</p>
            </div>
            <img src="${personagem.imagem}.png" alt="${personagem.nome}">
            <div class="info-wrapper">
                <div class="tipo">
                    <p>${personagem.tipo}</p>
                </div>
                <div class="presentes">
                    <p>${personagem.presentes}</p>
                </div>
                <div class="curiosidades">
                    <p>${personagem.curiosidades}</p>
                </div>
            </div>
        </div>
    `;
})

document.querySelectorAll('.personagem').forEach(personagem => {
    personagem.addEventListener('click', () => {
        personagem.classList.toggle('expandido');
    })
})