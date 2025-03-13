let personagens = [
    {
        nome: "Shane",
        imagem: "Shane.png",
        aniversario: "Aniversário: Primavera 20",
        tipo: "Casável",
        presentes: "Presentes favoritos: Cerveja, Enroladinho de pimenta, Pimenta quente e Pizza.",
        curiosidades: "Curiosidades: Shane é um aldeão da Vila Pelicanos que está quase sempre bravo e infeliz, e sofre de depressão e alcoolismo. Porém, sua atitude com o jogador começa a mudar caso este decida fazer amizade com ele. Ele trabalha no Mercado Joja quase todos os dias das 09:00 até as 17:00 a menos que o Centro Comunitário seja restaurado, e frequentemente passa a noite no Saloon Fruta Estrelar. Ele não trabalha aos fins de semana, exceto em dias de chuva, e pode ser visto com frequência no rancho.",

    },
    {
        nome: "Gus",
        imagem: "Gus.png",
        aniversario: "Aniversário: Verão 8",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Diamante, escargô, Taco de peixe, Laranja e Curry tropical.",
        curiosidades: "Curiosidades: Gus é um aldeão que mora e trabalha no Salão na Vila Pelicanos. Ele é dono do estabelecimento. Durante o horário de funcionamento do Salão, o Gus pode ser encontrado servindo o bar. Enquanto trabalha, ele oferece uma variedade de comidas e receitas para venda. Das 10:00 ao meio-dia, o Gus pode frequentemente ser encontrado observando os itens no Armazém do Pierre, ou na despensa no Centro Comunitário. Ele também pode ser encontrado no Resort da Praia na Ilha Gengibre em dias aleatórios.",
    },
    {
        nome: "Pam",
        imagem: "Pam.png",
        aniversario: "Aniversário: Primavera 18",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Cerveja, Chírivia, Fruto do cacto, Hidromel, Inhames com cobertura, Pale Ale, Pina Colada, Sopa de chirívia.",
        curiosidades: "Curiosidades: Pam é uma aldeã que mora no Trailer logo à oeste do rio na Vila Pelicanos. Ela era a motorista do ônibus da Vila Pelicanos antes dele quebrar. Uma vez que o serviço do ônibus seja restabelecido, a Pam administrará a Ponto de Ônibus ao leste da Fazenda nos dias em que não houver chuva. A maioria dos dias Pam pode ser encontrado em seu trailer até 12:00. Ela vai então caminhar até o Mercado Joja por algumas horas, deixando lá às 16:00 para caminhar para o salão. Pam é uma das mais leais clientes de Gus, ela passa todas as noites em seu estabelecimento.",
    },
    {
        nome: "Penny",
        imagem: "Penny.png",
        aniversario: "Aniversário: Outono 2",
        tipo: "Casável",
        presentes: "Presentes favoritos: Livros, Areinha, Bolinho de papoula, Diamante, Esmeralda, Melão, Papoula, Prato de raízes, Prato vermelho, Prato Tom Kha.",
        curiosidades: "Curiosidades: Penny mora com sua mãe, Pam, num pequeno trailer perto do rio. Enquanto Pam está fora bebendo no salão, Penny silenciosamente costuma fazer suas tarefas no quarto escuro e abafado que ela é forçada a chamar de lar. Ela é tímida e modesta, sem nenhuma outra grande ambição na vida a não ser se acomodar e criar uma família. Ela gosta de cozinhar (embora suas habilidades sejam questionáveis) e de ler livros da biblioteca local.",
    },
    {
        nome: "Sebastian",
        imagem: "Sebastian.png",
        aniversario: "Aniversário: Inverno 10",
        tipo: "Casável",
        presentes: "Presentes favoritos: Lágrima congelada, Obisidiana, Ovo de Sapo, Ovo nulo, Sashimi, Sopa de abóbora.",
        curiosidades: "Curiosidades: Sebastian é um rebelde solitário que mora no porão dos seus pais. Ele é o meio-irmão mais velho da Maru, e sente que sua irmã ganha toda a atenção e adoração, enquanto ele é largado para apodrecer na escuridão. Ele tende a ficar muito vidrado em jogos de computador, quadrinhos, e livros de ficção científica, e às vezes passa muito tempo atrás desses hobbies sozinho em seu quarto.",
    },
    {
        nome: "Robin",
        imagem: "Robin.png",
        aniversario: "Aniversário: Outono 21",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Espaguete, O segredo da floresta, Pessêgo e Queijo de Cabra",
        curiosidades: "Curiosidades: Robin é um dos aldeões de Stardew Valley. Ela mora na Rua da Montanha, nº 24, na Montanha, com seu marido Demetrius, a filha Maru, e o filho Sebastian. Robin é a carpinteira local e tem sua própria Carpintaria, na sua casa, aberta das 09:00 às 17:00 todos os dias, exceto terça-feira e parte de sexta-feira (fecha mais cedo).",
    }
];

personagens.forEach(personagem => {
    let lista = document.querySelector(".lista-personagens");
    lista.innerHTML += `
     <div class="personagem ${personagem.nome}">
          <div>  <div class="nome">
                <p>${personagem.nome}</p>
            </div>
            <div class="tipo ${personagem.tipo}">
                <p>${personagem.tipo}</p>
            </div>
            <img src="imagem/${personagem.imagem}" alt="${personagem.nome}">
            </div>
            <div class="info-wrapper"> 
            <div class="info-escondido">
                <div class="aniversario">
                    <p>${personagem.aniversario}</p>
                </div>
                <div class="presentes">
                    <p>${personagem.presentes}</p>
                </div>
                <div class="curiosidades">
                    <p>${personagem.curiosidades}</p>
                </div>
                 </div>
            </div>
        </div>
    `;
});

document.querySelectorAll('.personagem').forEach(personagem => {
    personagem.addEventListener('click', () => {
        personagem.classList.toggle('expandido');
    });
});