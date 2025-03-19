let personagens = [
    {
        nome: "Shane",
        imagem: "Shane.png",
        aniversario: "Aniversário: 🌸Primavera 20",
        tipo: "Casável",
        presentes: "Presentes favoritos: 🍺Cerveja, 🌯Enroladinho de pimenta, 🌶️Pimenta quente e 🍕Pizza.",
        curiosidades: "Curiosidades: Shane é um aldeão da Vila Pelicanos que está quase sempre bravo e infeliz, e sofre de depressão e alcoolismo. Porém, sua atitude com o jogador começa a mudar caso este decida fazer amizade com ele. Ele trabalha no Mercado Joja quase todos os dias das 09:00 até as 17:00 a menos que o Centro Comunitário seja restaurado, e frequentemente passa a noite no Saloon Fruta Estrelar. Ele não trabalha aos fins de semana, exceto em dias de chuva, e pode ser visto com frequência no rancho.",
        familia: "Familía: Marnie(Tia), Jas(Afilhada) ",
        endereço: "Endereço: Rancho da Marnie",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Gus",
        imagem: "Gus.png",
        aniversario: "Aniversário: 🌞Verão 8",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 💎Diamante, 🐌escargô, 🫔Taco de peixe, 🍊Laranja e 🍛Curry tropical.",
        curiosidades: "Curiosidades: Gus é um aldeão que mora e trabalha no Salão na Vila Pelicanos. Ele é dono do estabelecimento. Durante o horário de funcionamento do Salão, o Gus pode ser encontrado servindo o bar. Enquanto trabalha, ele oferece uma variedade de comidas e receitas para venda. Das 10:00 ao meio-dia, o Gus pode frequentemente ser encontrado observando os itens no Armazém do Pierre, ou na despensa no Centro Comunitário. Ele também pode ser encontrado no Resort da Praia na Ilha Gengibre em dias aleatórios.",
        familia: "Familía: --",
        endereço: "Endereço: Saloon Fruta Estrela",
        clinica: "Visita a clínica: 🍁Outono 4 ",
    },
    {
        nome: "Pam",
        imagem: "Pam.png",
        aniversario: "Aniversário: 🌸Primavera 18",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🍺Cerveja, 🍑Chírivia, 🌵Fruto do cacto, 🍶Hidromel, 🌰Inhames com cobertura, 🥤Pale Ale, 🍸Pina Colada, 🍜Sopa de chirívia.",
        curiosidades: "Curiosidades: Pam é uma aldeã que mora no Trailer logo à oeste do rio na Vila Pelicanos. Ela era a motorista do ônibus da Vila Pelicanos antes dele quebrar. Uma vez que o serviço do ônibus seja restabelecido, a Pam administrará a Ponto de Ônibus ao leste da Fazenda nos dias em que não houver chuva. A maioria dos dias Pam pode ser encontrado em seu trailer até 12:00. Ela vai então caminhar até o Mercado Joja por algumas horas, deixando lá às 16:00 para caminhar para o salão. Pam é uma das mais leais clientes de Gus, ela passa todas as noites em seu estabelecimento.",
        familia: "Familía: Penny(Filha) ",
        endereço: "Endereço: Trailer ",
        clinica: "Visita a clínica: 🌸Primavera 25 ",
    },
    {
        nome: "Penny",
        imagem: "Penny.png",
        aniversario: "Aniversário:🍁 Outono 2",
        tipo: "Casável",
        presentes: "Presentes favoritos: 📖Livros, 🐡Areinha, 🍰Bolinho de papoula, 💎Diamante, ✳️Esmeralda, 🍈Melão, 🌷Papoula, Prato de raízes, Prato vermelho, Prato Tom Kha.",
        curiosidades: "Curiosidades: Penny mora com sua mãe, Pam, num pequeno trailer perto do rio. Enquanto Pam está fora bebendo no salão, Penny silenciosamente costuma fazer suas tarefas no quarto escuro e abafado que ela é forçada a chamar de lar. Ela é tímida e modesta, sem nenhuma outra grande ambição na vida a não ser se acomodar e criar uma família. Ela gosta de cozinhar (embora suas habilidades sejam questionáveis) e de ler livros da biblioteca local.",
        familia: "Familía: Pam(Mãe) ",
        endereço: "Endereço: Trailer ",
        clinica: "Visita a clínica: ❄️Inverno 4",
    },
    {
        nome: "Sebastian",
        imagem: "Sebastian.png",
        aniversario: "Aniversário: ❄️Inverno 10",
        tipo: "Casável",
        presentes: "Presentes favoritos: 💧Lágrima congelada, 🌑Obisidiana, 🥚Ovo de Sapo, 🥚Ovo nulo, 🍣Sashimi, 🍜Sopa de abóbora.",
        curiosidades: "Curiosidades: Sebastian é um rebelde solitário que mora no porão dos seus pais. Ele é o meio-irmão mais velho da Maru, e sente que sua irmã ganha toda a atenção e adoração, enquanto ele é largado para apodrecer na escuridão. Ele tende a ficar muito vidrado em jogos de computador, quadrinhos, e livros de ficção científica, e às vezes passa muito tempo atrás desses hobbies sozinho em seu quarto.",
        familia: "Familía: Robin(Mãe), Maru(Meia-Irmã), Demetrius(Padrasto)",
        endereço: "Endereço: Rua da Montnha,n 24 ",
        clinica: "Visita a clínica: 🌞Verão 4 ",
    },
    {
        nome: "Robin",
        imagem: "Robin.png",
        aniversario: "Aniversário: 🍁Outono 21",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🍝Espaguete, 📖O segredo da floresta, 🍑Pessêgo e 🧀Queijo de Cabra",
        curiosidades: "Curiosidades: Robin é um dos aldeões de Stardew Valley. Ela mora na Rua da Montanha, nº 24, na Montanha, com seu marido Demetrius, a filha Maru, e o filho Sebastian. Robin é a carpinteira local e tem sua própria Carpintaria, na sua casa, aberta das 09:00 às 17:00 todos os dias, exceto terça-feira e parte de sexta-feira (fecha mais cedo).",
        familia: "Familía: Demetrius(Marido), Maru(Filha), Sebastian(Filho) ",
        endereço: "Endereço: Rua da Montnha,n 24 ",
        clinica: "Visita a clínica: 🌞Verão 18",
    },
    {
        nome: "Alex",
        imagem: "Alex.png",
        aniversario: "Aniversário: 🌞Verão 13",
        tipo: "Casável",
        presentes: "Presentes favoritos: 🥘Café da manhã completo, 📖Jack seja ágil, Jack seja parrudo, 🍤Jantar de salmão",
        curiosidades: "Curiosidades: Alex ama esportes e passar o tempo na praia. Ele é um pouco arrogante e conta vantagem a todos que ele irá ser um atleta profissional. Seria sua arrogância apenas uma fachada para mascarar sua devastadora insegurança? Estaria ele usando seus sonhos com esportes para preencher o vazio deixado pelo desaparecimento de seus pais? Ou seria ele apenas um jovem tentando “parecer legal?”",
        familia: "Familía: George(Avô), Evelyn(Avó)",
        endereço: "Endereço: Estrada do rio, n 1 ",
        clinica: "Visita a clínica: 🌞Verão 16",
    },
    {
        nome: "George",
        imagem: "George.png",
        aniversario: "Aniversário: 🍁Outono 24",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🧄Alho-poró, 🍄‍🟫Cogumelo frito",
        curiosidades: "Curiosidades: George é casado com Evelyn e vive com o seu neto, Alex. Clara, a falecida mãe de Alex era sua filha. Ele é um aldeão que mora na Vila Pelicanos com uma personalidade tanto quanto rabugenta, porém desenvolvendo uma amizade ele se torna mais confortável com a presença do jogador.",
        familia: "Familía: Evelyn(Esposa), Alex(Neto) ",
        endereço: "Endereço: Estrada do rio, n 1",
        clinica: "Visita a clínica: 🍁🌸🌞❄️ Dia 23 de cada Estação ",
    },
    {
        nome: "Evelyn",
        imagem: "Evelyn.png",
        aniversario: "Aniversário: ❄️Inverno 20",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🫐Beterraba, 🎂Bolo de chocolate, 💎Diamante, 🌸Rosa-de-Fada, 🫘Passas, 🥣Recheio, 🌼Tulipa",
        curiosidades: "Curiosidades: Evelyn viveu em Pelican Town toda a sua vida. Sempre esperançosa e otimista, 'Vovó' passa seus dias cuidando dos jardins da cidade, assando os biscoitos que são sua assinatura, e relembrando o passado vibrante de Stardew Valley.”",
        familia: "Familía: George(Marido), Alex(Neto) ",
        endereço: "Endereço: Estrada do rio, n 1 ",
        clinica: "Visita a clínica: 🍁🌸🌞❄️ O 2º de cada estação e 23º de cada estação (com George) ",
    },
    {
        nome: "Haley",
        imagem: "Haley.png",
        aniversario: "Aniversário: 🌸Primavera 14",
        tipo: "Casável",
        presentes: "Presentes favoritos:🧁 Bolo rosa, 🥥Coco, 🌻Girassol, 🥙Salada de frutas",
        curiosidades: "Curiosidades: Ser rica e popular durante todo o ensino médio tornou Haley um pouco convencida e egoísta. Ela tem uma tendência de julgar as pessoas por razões superficiais. Mas é muito tarde para ela descobrir o verdadeiro significado da vida? Existe uma jovem mulher engraçada, mente aberta escondida embaixo de toda essa beleza?”",
        familia: "Familía: Emily(Irmã)",
        endereço: "Endereço: Rua do salgueiro, n 2",
        clinica: "Visita a clínica: ❄️Inverno 9",
    },
    {
        nome: "Emily",
        imagem: "Emily.png",
        aniversario: "Aniversário: 🌸Primavera 27 ",
        tipo: "Casável",
        presentes: "Presentes favoritos: 🔷Água-Marinha, 🟣Ametista, ✳️Esmeralda, 🍔Hambúrguer de Sobrevivência, 🟢Jade, 💭Lã, 🔺Rubi, 👚Tecido, 🔶Topázio, 🦜Ovo de Papagaio ",
        curiosidades: "Curiosidades:Emily é uma aldeã que mora na Vila Pelicanos. Sua casa fica ao sul da praça da cidade, ao lado da casa de Jodi, na Rua do Salgueiro, nº 2. Ela trabalha geralmente à tarde no Saloon Fruta Estrelar começando por volta das 4:00 PM. Emily ama fazer suas próprias roupas, mas pode ser difícil encontrar o tecido na cidade. Entre seus presentes favoritos estão justamente o tecido e a lã. ",
        familia: "Familía: Haley(Irmã)",
        endereço: "Endereço: Rua do salgueiro, n 2",
        clinica: "Visita a clínica: ❄️Inverno 11",
    },
    {
        nome: "Sam",
        imagem: "Sam.png",
        aniversario: "Aniversário: 🌞Verão 17",
        tipo: "Casável",
        presentes: "Presentes favoritos: 🌵Fruto do Cacto, 🔶Olho do Tigre, 🥖Pão de ácer, 🍕Pizza",
        curiosidades: "Curiosidades: Sam é um cara extrovertido e amigável que está repleto de energia jovem. Ele toca guitarra e bateria, e quer começar uma banda com Sebastian assim que eles tiverem musicas juntos. Entretanto, ele tem o hábito de começar várias coisas ao mesmo tempo e não terminá-las. Sam está um pouco estressado com a volta repentina de seu pai, que esteve fora por anos devido ao seu trabalho.",
        familia: "Familía: Jodi(Mãe), Kent(Pai), Vinceny(Irmão)",
        endereço: "Endereço: Rua do Slagueiro, n 1 ",
        clinica: "Visita a clínica: 🍁Outono 11 ",
    },
    {
        nome: "Jodi",
        imagem: "Jodi.png",
        aniversario: "Aniversário: 🍁Outono 11",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🐟Achigã Crocante, 🎂Bolo de Chocolate, 💎Diamante, 🐍Enguia Frita, 🥙Mexido de Legumes,🥞 Panquecas, 🍆Parmesão com Beringela, 🥧Torta de Ruibarbo",
        curiosidades: "Curiosidades: Jodi é casada com Kent e juntos eles têm dois filhos, Sam e Vincent. Jodi menciona que Caroline é sua melhor amiga e que conta tudo para ela. Elas também frequentam juntas as aulas de aeróbica nas terças, juntamente com algumas das outras mulheres da Vila Pelicanos.",
        familia: "Familía: Kent(Marido), Sam(Filho), Vincent(Filho) ",
        endereço: "Endereço: Rua do Slagueiro, n 1",
        clinica: "Visita a clínica: 🌸Primavera 11 (Com Vincent) e 🌸Primavera 18",
    },
    {
        nome: "Kent",
        imagem: "Kent.png",
        aniversario: "Aniversário: 🌸Primavera 4",
        tipo: "Não-casável",
        presentes: "Presentes favoritos:🌰 Avelãs Torradas, 🍛Risoto de Samambaia",
        curiosidades: "Curiosidades: Kent desenvolveu TEPT devido ao tempo em que serviu na guerra. Isto pode ser notado por sua reação ao som da pipoca estourando em seu evento de três corações, e sua aversão a campos abertos na Dança das Flores. Kent também pode explicar ao jogador em um diálogo que tem dificuldades para dormir, um sintoma de TEPT.",
        familia: "Familía: Jodi(Esposa), Vincent(Filho), Sam(Filho)",
        endereço: "Endereço: Rua do Slagueiro, n 1",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Vincent",
        imagem: "Vincent.png",
        aniversario: "Aniversário: 🌸Primavera 10",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🧁Bolo rosa, 🍬Doce de Oxicoco, 🧋Ginger Ale, 🐛Lesma,🥚 Ovo de Sapo, 🍇Uva",
        curiosidades: "Curiosidades: Vincent é um aldeão que vive na parte sul da Vila Pelicanos. Ele é um menininho, e muitas vezes pode ser encontrado com sua melhor amiga Jas. Ele admira seu irmão Sam e quer ser igual a ele quando crescer. Às terças, quartas e sextas, Vincent e Jas passam a tarde tendo aula com Penny no museu. Durante o Verão, Vincent frequentemente está na praia",
        familia: "Familía: Jodi(Mãe), Kent(Pai), Sam(Irmão) ",
        endereço: "Endereço: Rua do Slagueiro, n 1 ",
        clinica: "Visita a clínica: 🌸Primavera 11",
    },
    {
        nome: "Jas",
        imagem: "Jas.png",
        aniversario: "Aniversário: 🌞Verão 4",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🧁Bolo Rosa, 🪆Boneco Antigo, 🪆Boneco Estranho,🎁 Caixa de Fada, 🍮Pudim de ameixa, 🌺Rosa-de-Fada",
        curiosidades: "Curiosidades: Jas é uma aldeã que mora fora da Vila Pelicanos, mais precisamente, no Rancho da Marnie. Ela é uma menininha, e muitas vezes pode ser encontrada com seu melhor amigo Vincent.",
        familia: "Familía: MArnie(Tia), Shane(Padrinho)",
        endereço: "Endereço: Rancho da Marnie ",
        clinica: "Visita a clínica: ❄️Inverno 18",
    },
    {
        nome: "Marnie",
        imagem: "Marnie.png",
        aniversario: "Aniversário: 🍁Outono 18",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: 🥪Almoço de Fazendeiro,🧁 Bolo Rosa, 💎Diamante, 🥧Torta de Abóbora",
        curiosidades: "Curiosidades: Marnie comanda seu próprio negócio no Rancho da Marnie das 09:00 às 16:00 todos os dias, exceto segunda-feira e terça-feira, embora o edifício ainda esteja aberto nestes dias. Ela vende Animais e suprimentos de animais.",
        familia: "Familía: Shane(Sobrinho), Jas(Sobrinha)",
        endereço: "Endereço: Rancho da Marnie",
        clinica: "Visita a clínica:🍁 Outono 18 e ❄️Inverno 18(Com a Jas)",
    },
    {
        nome: "Elliott",
        imagem: "Elliott.png",
        aniversario: "Aniversário: 🍁Outono 5",
        tipo: "Casável",
        presentes: "Presentes favoritos: Bolinhos de Carangueijo, Lagosta, Pena de Pato, Romã, Sopa Tom Kha, Tinta de Lula",
        curiosidades: "Curiosidades: Elliott mora sozinho em uma cabana na praia. Ele é um escritor que sonha em, um dia, escrever um romance magnífico. Ele é sentimental e “romântico” com tendências a fazer poesias sobre flores. Quando ele pode pagar, gosta de uma bebida forte no Saloon Fruta Estrelar. Poderia um humilde fazendeiro como você ser a inspiração que Elliott procura? Só existe um jeito de descobrir…",
        familia: "Familía: --",
        endereço: "Endereço: Cabana do Elliott",
        clinica: "Visita a clínica: 🌞Verão 9",
    },
    {
        nome: "Abigail",
        imagem: "Abigail.png",
        aniversario: "Aniversário: 🍁Outono 13",
        tipo: "Casável",
        presentes: "Presentes favoritos: Abóbora, Ametista, Baiacu, Bolo de Chocolate, Compêdio de Monstros, Enguia Picante, Torta de Amoras, Pudim de Banana",
        curiosidades: "Curiosidades: Abigail mora na loja com seus pais. Às vezes discute com sua mãe que se preocupa com o 'estilo de vida alternativo' de Abigail. Sua mãe diz o seguinte: 'Eu gostaria que Abby se vestisse mais apropriadamente e parasse de tingir seu cabelo de azul. Ela tem uma maravilhosa cor de cabelo natural, assim como sua avó. Ah, e eu gostaria que ela encontrasse alguns interesses saudáveis, em vez deste absurdo oculto em que ela está. 'Você pode encontrar Abigail sozinha no cemitério, ou talvez em uma tempestade a procura de sapos.",
        familia: "Familía: Pierre(Pai), Caroline(Mãe)",
        endereço: "Endereço: Armazén do Pierre",
        clinica: "Visita a clínica: 🌸Primavera 4",
    },
    {
        nome: "Pierre",
        imagem: "Pierre.png",
        aniversario: "Aniversário: 🌸Primavera 26",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Catálago de preço, Lula Frita",
        curiosidades: "Curiosidades: Pierre pode ser encontrado gerenciando seu Armazém do Pierre todos os dias entre 9:00 e 17:00 (exceto quarta-feira quando a loja está fechada). Depois do trabalho todos os dias, ele sai do balcão da loja e se move em torno de sua casa. Na sexta-feira à noite, depois do trabalho, ele caminha para o Saloon Fruta Estrelar para socializar, desde que não esteja chovendo. Além da noite de sexta-feira, festivais e eventos, Pierre não anda fora de sua casa.",
        familia: "Familía: Esposa(Caroline), Abigail(Filha)",
        endereço: "Endereço: Armazén do Pierre",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Caroline",
        imagem: "Caroline.png",
        aniversario: "Aniversário: ❄️Inverno 7",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Chá Verde, Flor-Migança, Taco de Peixe",
        curiosidades: "Curiosidades: Caroline é casada com Pierre e eles vivem com sua filha Abigail no Armazém do Pierre. Jodi diz que Caroline é sua melhor amiga, e que ela pode contar qualquer coisa para ela. As duas também frequentam aulas de ginástica junto com outras mulheres da Vila Pelicano, como Marnie, Emily e Robin.",
        familia: "Familía: Pierre(Marido), Abigail(Filha)",
        endereço: "Endereço: Armazén do Pierre",
        clinica: "Visita a clínica: 🍁Outono 25",
    },
    {
        nome: "Harvey",
        imagem: "Harvey.png",
        aniversario: "Aniversário: ❄️Inverno 14",
        tipo: "Casável",
        presentes: "Presentes favoritos: Café, Óleo de frutas, Picles, Superprato, Vinho",
        curiosidades: "Curiosidades: Harvey é o médico da cidade. Ele é um pouco velho para um solteiro, mas tem um grande coração amável e uma posição respeitada na comunidade. Ele mora em um pequeno apartamento em cima da clínica, mas gasta grande parte do seu tempo trabalhando. Você consegue sentir uma tristeza nele, como se houvesse algo que ele não diz.",
        familia: "Familía: --",
        endereço: "Endereço: Cliníca do Harvey",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Maru",
        imagem: "Maru.png",
        aniversario: "Aniversário: 🌞Verão 10",
        tipo: "Casável",
        presentes: "Presentes favoritos: Barra de Irídio, Barra de ouro, Barra Radioativa, Conjunto de Pilhas, Couve-Flor, Couve-Flor com Queijo, Diamante, Dispositivo de Anão, Enroladinho de Pimenta, Morango, Refeição de Mineiro, Torta de Ruibarbo ",
        curiosidades: "Curiosidades: Criada por uma mãe carpinteira e o pai cientista, Maru adquiriu uma paixão por criar ferramentas desde jovem. Quando ela não está em seu quarto, brincando com máquinas e ferramentas, às vezes ela trabalha na clínica local. Amigável, extrovertida e ambiciosa, Maru seria um golpe de sorte para um humilde recém chegado como você… Você ganhará o coração dela, ou deixará ela escapar de você e desaparecer para sempre?",
        familia: "Familía: Robin(Mãe), Demetrius(Pai), Sebastian(Meio-Irmão)",
        endereço: "Endereço: Rua da Montanha, n 24",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Demetrius",
        imagem: "Demetrius.png",
        aniversario: "Aniversário: 🌞Verão 19 ",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Morango, Pote de Feijão, Pudim de arroz, Sorvete",
        curiosidades: "Curiosidades: Demetrius é um cientista que estuda a fauna local do vale. Muitas vezes ele pode ser encontrado trabalhando em seu laboratório ou ao ar livre fazendo anotações.",
        familia: "Familía: Esposa(Robin), Maru(Filha), Sebastian(Enteado)",
        endereço: "Endereço: Rua da Montanha, n 24",
        clinica: "Visita a clínica: 🌞Verão 25",
    },
    {
        nome: "Clint",
        imagem: "Clint.png",
        aniversario: "Aniversário: ❄️Inverno 26",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Água-marinha,  Ametista, Barra de irídio, Barra de ouro, Esmeralda, Jade, Molho de alcachofra, Omnigeodo, Risoto de samambaia, Rubi, Topázio ",
        curiosidades: "Curiosidades: Clint frequentemente visita o saloon para se socializar com Emily, por quem ele está apaixonado, mas ele fica muito nervoso para se aproximar dela. Em um dialogo com Gus ele indica suspeitar da paixão de Clint mas decidiu não lhe perguntar nada sobre isso.",
        familia: "Familía: --",
        endereço: "Endereço: Ferreiro",
        clinica: "Visita a clínica: ❄️Inverno 16",
    },
    {
        nome: "Feiticeiro",
        imagem: "Wizard.png",
        aniversario: "Aniversário: ❄️Inverno 17",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Cogumelo roxo, Essência Nula, Essência Solar, Livro de Misterios, Superpepino",
        curiosidades: "Curiosidades: O feiticeiro estuda o mundo do espírito de sua torre na floresta Cinzaseiva. Ele é fluente em muitas línguas elementares.O feiticeiro não sai da Torre do mago (exceto para festivais), e pode ser encontrado lá quando a torre é acessível (6:00 às 23:00 ou, qualquer Horário, se tiver a Chave da Vila)",
        familia: "Familía: --",
        endereço: "Endereço: Torre do Mago",
        clinica: "Visita a clínica: -- ",
    },
    {
        nome: "Krobus",
        imagem: "Krobus.png",
        aniversario: "Aniversário: ❄️Inverno 1",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Abóbora, Almiscar de Monstros, Barra de írridio, Compêndio de Monstros, Diamante, Maionese Nula, Ovo Nulo, Raiz-Forte",
        curiosidades: "Curiosidades:Krobus é o único monstro amigável que os jogadores vão encontrar. Ele é um Bruto das sombras que vive no esgoto, porque ele é muito sensível à luz do sol para sair durante o dia. Ele vende uma variedade de bens raros. Ele também está disponível como colega de quarto. ",
        familia: "Familía: --",
        endereço: "Endereço: Os Esgotos",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Leo",
        imagem: "Leo.png",
        aniversario: "Aniversário: 🌞Verão 26",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Manga, Ovo de Avestruz, Pena de pato, Poi",
        curiosidades: "Curiosidades: Leo é um menino que inicialmente vive na Ilha Gengibre. Seus pais se perderam no mar e ele considera os papagaios que habitam a ilha sua família. Inicialmente, ele é muito tímido para falar com o jogador, até que o jogador 'faça amizade' com os papagaios da ilha, dando-lhes Noz Dourada. Isso é feito dando 10 Nozes Douradas ao primeiro papagaio do lado de fora da tartaruga.",
        familia: "Familía: --",
        endereço: "Endereço: Ilha Gengibre, Cabana ",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Leah",
        imagem: "Leah.png",
        aniversario: "Aniversário: ❄️Inverno 23",
        tipo: "Casável",
        presentes: "Presentes favoritos: Bolinho de Papoula, Mexido de Legumes, Queijo de Cabra, Refogado, Salada, Trufa, Vinho",
        curiosidades: "Curiosidades: Leah vive sozinha em uma pequena cabana fora da vila. Ela ama passar o tempo fora de casa, coletando uma refeição selvagem ou simplesmente apreciando os presentes da estação. Ela é uma artista talentosa com um grande portfólio... ainda assim ela é muito nervosa para mostrá-lo para o público. Talvez você possa dar à ela um pequeno empurrãozinho, e fazer com que ela crie coragem?",
        familia: "Familía: --",
        endereço: "Endereço: Cabana da Leah",
        clinica: "Visita a clínica: 🌸Primavera 16",
    },
    {
        nome: "Sandy",
        imagem: "Sandy.png",
        aniversario: "Aniversário: 🍁Outono 15",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: Arroz Doce-de-Manga, Ervilha-de-Cheiro, Flor de Alçafrão, Narciso",
        curiosidades: "Curiosidades: ",
        familia: "Familía: --",
        endereço: "Endereço: Oásis",
        clinica: "Visita a clínica: --",
    },
    {
        nome: "Willy",
        imagem: "Willy.png",
        aniversario: "Aniversário: 🌞Verão 24",
        tipo: "Não-casável",
        presentes: "Presentes favoritos: A Arte dos Covos, Abóbora, Bagre, Barra de Írridio, Diamante, Esturjão, Hidromel, Joia do Mar, Pepino-do-Mar, Polvo",
        curiosidades: "Curiosidades: Na maioria dos dias, Willy acorda por volta das 6:10 da manhã e pesca na Praia por algumas horas antes de operar sua Peixaria entre 9:00-17:00. Muitas vezes fará mais pesca na Praia depois de fechar a loja até cerca de 22:00. Durante o inverno ele vai para o salão em vez da Praia depois do trabalho. A loja de Willy está fechada no sábado enquanto ele está pescando, a menos que chova, caso em que ele vai manter a loja aberta.",
        familia: "Familía: --",
        endereço: "Endereço: Peixaria",
        clinica: "Visita a clínica: 🌸Primavera 9 ",
    },
];

let itens = {
    pimenta: "",
    primavera: ""
}
itens.pimenta
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
                <div class="familia">
                <p>${personagem.familia}</p>
                </div>
                <div class="endereço">
                    <p>${personagem.endereço}</p>
                </div>
                <div class="clinica">
                    <p>${personagem.clinica}</p>
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