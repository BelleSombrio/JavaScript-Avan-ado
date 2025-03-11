let pokemons = [
    {
        nome: "Bulbassauro",
        imagem: "imagens/001",
        tipo: "grama",
        altura: " Altura: 0,7 m",
        peso: "Peso: 6,9 kg",
        geracao: "Geração: 1",
        info: "Informações: Por algum tempo após o nascimento, ele usa os nutrientes contidos na semente em suas costas para crescer.",
        som: "audio-bulbassauro"
    },
    {
        nome: "Swampert",
        imagem: "imagens/260",
        tipo: "agua",
        altura: "Altura: 1,5 m ",
        peso: "Peso: 81,9 kg",
        geracao: "Geração: 3",
        info: "Informações: Seus braços são duros como pedra. Com um golpe, ele pode quebrar uma enorme pedra em pedaços.",
    },
    {
        nome: "Minccino",
        imagem: "imagens/572",
        tipo: "normal",
        altura: "Altura: 0,4 m",
        peso: "Peso: 5,8 kg",
        geracao: "Geração: 5",
        info: "Informações: Esses Pokémon gostam de coisas limpas e arrumadas. Eles estão sempre varrendo e tirando o pó de seu habitat, usando suas caudas como vassouras.",
    },
    {
        nome: "Diggersby",
        imagem: "imagens/660",
        tipo: "terrestre",
        altura: "Altura: 1,0 m",
        peso: "Peso: 42,4 kg",
        geracao: "Geração: 6",
        info: "Informações: Com potência igual a uma escavadeira, ele pode cavar em leitos rochosos densos. É uma grande ajuda durante a construção de túneis.",
    },
    {
        nome: "Phantump",
        imagem: "imagens/708",
        tipo: "fantasma",
        altura: "Altura: 0,4 m",
        peso: "Peso: 7,0 kg",
        geracao: "Geração: 6",
        info: "Informações: A lenda diz que suas folhas verdes podem curar qualquer doença. Quando arrancadas, no entanto, as folhas murcham instantaneamente.",
    },
    {
        nome: "Edelgoss",
        imagem: "imagens/830",
        tipo: "grama",
        altura: "Altura: 0,5 m",
        peso: "Peso: 2,5 kg",
        geracao: "Geração: 8",
        info: "Informações: As sementes presas à sua penugem de algodão são cheias de nutrientes. Ele as espalha no vento para que as plantas e outros Pokémon possam se beneficiar delas.",
    },

    {
        nome: "Moushold",
        imagem: "imagens/925",
        tipo: "normal",
        altura: "Altura: 0,3 m",
        peso: "Peso: 2,8 kg",
        geracao: "Geração: 9",
        info: "Informações: Os dois pequenos simplesmente apareceram um dia. O grupo pode ser uma família de Pokémon relacionados, mas ninguém sabe ao certo.",
    },
    {
        nome: "Iron Treads",
        imagem: "imagens/990",
        tipo: "metal",
        altura: "Altura: 0,9 m",
        peso: "Peso: 240,0 kg",
        geracao: "Geração: 9",
        info: "Informações: Este Pokémon se parece muito com uma arma científica que uma revista paranormal afirmou ter sido enviada a este planeta por alienígenas.",

    }
];

pokemons.forEach(pokemon => {
    let lista = document.querySelector(".lista-pokemon");
    lista.innerHTML += `
        <div class="pokemon ${pokemon.nome}">
           <div> <div class="nome">
                <p>${pokemon.nome}</p>
            </div>
            <div class="tipo ${pokemon.tipo}">
                <p>${pokemon.tipo}</p>
            </div>
            <img src="${pokemon.imagem}.png" alt="${pokemon.nome}">
            </div>
            <div class="info-wrapper">
                <div class="peso">
                    <p>${pokemon.peso}</p>
                </div>
                <div class="altura">
                    <p>${pokemon.altura}</p>
                </div>
                <div class="geracao">
                    <p>${pokemon.geracao}</p>
                </div>
                <div class="info">
                    <p>${pokemon.info}</p>
                </div>
            </div>
        </div>
    `;
    let audio= document.getElementById("audio-bulbassauro")
let botao = document.getElementById("tocar-audio")
botao.addEventListener("click", function() {
    audio.play()
})

});






document.querySelectorAll('.pokemon').forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        pokemon.classList.toggle('expandido');
    });
});