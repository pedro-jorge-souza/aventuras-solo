document.addEventListener('DOMContentLoaded', () => {

    // --- Estrutura de Dados da Aventura ---
    // IMPORTANTE: Substitua 'imagens/cenaX.jpg' pelo caminho real das suas imagens.
    const adventureData = {
        1: {
            image: 'imagens/cena1.jpg',
            text: 'Você está diante da imponente entrada da Cripta do Rei Sombrio. A porta de madeira escura, reforçada com faixas de ferro enferrujado, parece selada há séculos. Você pode sentir uma aura fria emanando das profundezas da cripta. Pequenos arbustos raquíticos crescem na base das paredes de pedra, e o silêncio é quase ensurdecedor, quebrado apenas pelo som distante do vento uivando nas montanhas. Você aperta a empunhadura de sua espada, sentindo o aço frio sob seus dedos enluvados.',
            choices: [
                { text: 'Forçar a porta principal.', destination: 2 },
                { text: 'Procurar por uma entrada alternativa.', destination: 18 }
            ]
        },
        2: {
            image: 'imagens/cena2.jpg',
            text: 'Você empurra com toda a sua força a porta maciça. Ela range terrivelmente, o som ecoando pelo vale silencioso, mas não cede. Você tenta novamente, concentrando toda a sua energia, mas a porta permanece imóvel. Parece estar trancada ou selada magicamente. Ao examinar a fechadura, você percebe que ela é antiga e complexa, sem nenhuma fenda visível para uma chave comum.',
            choices: [
                { text: 'Tentar arrombar a fechadura com sua espada.', destination: 4 },
                { text: 'Desistir e procurar outra entrada.', destination: 18 }
            ]
        },
        3: {
            image: 'imagens/cena3.jpg',
            text: 'Você avança cautelosamente pela passagem escura. O ar aqui é pesado e úmido, e um cheiro fraco de mofo paira no ar. Seus passos ecoam levemente nas paredes de pedra fria. De repente, você ouve um clique distinto sob seus pés. Uma grade de metal cai do teto, bloqueando o seu caminho de volta! Ao mesmo tempo, você percebe finas agulhas saindo das paredes laterais, bem na altura dos seus olhos.',
            choices: [
                { text: 'Abaixar-se rapidamente para evitar as agulhas.', destination: 22 },
                { text: 'Correr para frente antes que a grade feche.', destination: 39 }
            ]
        },
        4: {
            image: 'imagens/cena4.jpg',
            text: 'Você desembainha sua espada e a usa como alavanca contra a fechadura enferrujada. Com um rangido metálico, a lâmina escorrega e se prende, mas a fechadura não cede. Ao tentar forçar mais, a lâmina da sua espada estala e se parte perto do cabo. Agora você está sem sua arma principal e a porta permanece firmemente trancada.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Desarmado e sem poder entrar, sua missão falhou antes mesmo de começar.'
        },
        5: {
            image: 'imagens/cena5.jpg',
            text: 'Com cuidado, você examina a tapeçaria. As figuras bordadas parecem contar a história do Rei Sombrio e sua ascensão ao poder. Em um dos cantos inferiores, você nota um bordado diferente, uma pequena chave prateada escondida entre as dobras do tecido. Você a puxa com cuidado. Parece ser a chave de algum tipo de fechadura.',
            choices: [
                { text: 'Guardar a chave e continuar explorando.', destination: 13 },
                { text: 'Voltar para a porta trancada para testar a chave.', destination: 35 }
            ]
        },
        6: {
            image: 'imagens/cena6.jpg',
            text: 'A voz espectral ecoa pela câmara, fria como o túmulo. "Aquele que busca o poder do Rei Sombrio deve provar seu valor. Responda à minha charada ou sofra as consequências." Uma névoa densa começa a se formar ao seu redor, dificultando a visão. "Eu não tenho voz, mas sempre falo com você. Eu não tenho corpo, mas viajo o mundo todo. Quem sou eu?"',
            choices: [
                { text: 'Responder "Um livro"', destination: 28 },
                { text: 'Responder "O vento"', destination: 15 },
                { text: 'Responder "Uma sombra"', destination: 37 }
            ]
        },
        7: {
            image: 'imagens/cena7.jpg',
            text: 'O líquido viscoso que escorre das paredes queima sua pele no instante em que a atinge. Uma dor lancinante se espalha pelo seu braço. Você cambaleia para trás, mas o dano já foi feito. O veneno é potente e se espalha rapidamente pelas suas veias. Em poucos momentos, sua visão embaça e você cai no chão, sem forças.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você sucumbiu ao veneno da cripta.'
        },
        8: {
            image: 'imagens/cena8.jpg',
            text: 'Você decide seguir o caminho iluminado pela tocha. A passagem se alarga em uma pequena câmara. No centro, há um pedestal de pedra com um livro antigo aberto. As páginas parecem escritas em uma língua desconhecida, mas você sente uma energia estranha emanando dele.',
            choices: [
                { text: 'Se aproximar para examinar o livro.', destination: 24 },
                { text: 'Ignorar o livro e continuar pela passagem que sai da câmara.', destination: 16 }
            ]
        },
        9: {
            image: 'imagens/cena9.jpg',
            text: 'Você se lembra de ter visto um pequeno buraco na parede da câmara anterior. Pode ser uma passagem secreta ou talvez apenas um esconderijo. Você volta e procura cuidadosamente pela parede até encontrar a fenda novamente. Ela é estreita, mas parece possível passar rastejando.',
            choices: [
                { text: 'Tentar passar pelo buraco.', destination: 27 },
                { text: 'Desistir da ideia e explorar outra parte da câmara.', destination: 20 }
            ]
        },
        10: {
            image: 'imagens/cena10.jpg',
            text: 'Você tenta manter a calma e procura por padrões nas runas gravadas na porta. Algumas delas parecem se repetir em intervalos regulares. Você se lembra de ter visto um padrão semelhante em um dos pilares da entrada da cripta. Talvez a sequência em que as runas aparecem seja a chave. Você tenta replicar a sequência que lembrava do pilar, tocando nas runas na ordem correta. Com um clique suave, a porta range e se abre lentamente.',
            choices: [
                { text: 'Você atravessa a porta recém-aberta.', destination: 29 }
            ]
        },
        // ... E assim por diante para todas as 40 cenas ...
        // Vou adicionar algumas cenas chave e as finais para o exemplo funcionar.
        // Você precisará preencher o resto.

        11: {
            image: 'imagens/cena11.jpg',
            text: 'Você decide enfrentar a criatura. Empunhando sua espada remanescente com firmeza, você avança contra a sombra. Ela se move com uma velocidade surpreendente, e garras afiadas brilham na escuridão. Você tenta desviar de seus ataques e encontra uma abertura para golpear. Sua espada atinge a sombra, mas parece atravessá-la sem causar dano. A criatura ri com um som gutural e o ataca novamente. Sem sua arma principal, você não consegue se defender adequadamente. Uma garra afiada atinge seu peito.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi derrotado pela criatura das sombras.'
        },
        12: {
            image: 'imagens/cena12.jpg',
            text: 'Você grita a primeira resposta que lhe vem à mente: "O silêncio!". A voz espectral permanece em silêncio por um momento, e então ecoa novamente, agora com um tom diferente. "Correto. Você demonstrou sabedoria. Pode prosseguir." A névoa ao seu redor se dissipa, revelando uma passagem escura que se abre adiante.',
            choices: [
                { text: 'Você segue pela passagem.', destination: 29 }
            ]
        },
        13: {
            image: 'imagens/cena13.jpg',
            text: 'Você continua explorando a câmara. As paredes estão cobertas por tapeçarias antigas, desbotadas pelo tempo e pela umidade. A maior delas retrata uma batalha épica entre guerreiros de Eldoria e as forças sombrias do Rei Malkor. Em outro canto, você encontra um baú de madeira empoeirado.',
            choices: [
                { text: 'Abrir o baú.', destination: 30 },
                { text: 'Examinar as outras tapeçarias.', destination: 38 }
            ]
        },
        14: {
            image: 'imagens/cena14.jpg',
            text: 'Você tenta girar a manivela com cuidado. Ela range e cede um pouco, mas parece emperrada pela ferrugem. Você aplica mais força, e de repente, com um estalo seco, a manivela se quebra em suas mãos. Agora você não tem como operar a ponte levadiça e o abismo permanece intransponível.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você não conseguiu atravessar o abismo.'
        },
        15: {
            image: 'imagens/cena15.jpg',
            text: '"O vento?" A voz espectral zomba. "Resposta errada, mortal. Sinta a fria fúria dos espíritos aprisionados!" Uma rajada de vento gelado atravessa a câmara, e você sente como se inúmeras mãos frias o agarrassem. Uma dor excruciante percorre seu corpo, e suas forças se esvaem rapidamente.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você não conseguiu responder à charada e sucumbiu à maldição.'
        },
        16: {
            image: 'imagens/cena16.jpg',
            text: 'A passagem adiante se estreita e começa a descer abruptamente. O ar fica ainda mais frio e úmido. Você precisa acender sua tocha para enxergar no breu total. O som de gotejamento constante ecoa pelas paredes rochosas.',
            choices: [
                { text: 'Prosseguir cautelosamente pela passagem escura.', destination: 3 },
                { text: 'Voltar para a câmara anterior e examinar o livro mais de perto.', destination: 24 }
            ]
        },
        17: {
            image: 'imagens/cena17.jpg',
            text: 'Você se espreme pelo túnel estreito. A passagem é claustrofóbica e você sente a pedra fria raspando em suas roupas. Depois de alguns metros desconfortáveis, o túnel se alarga em uma pequena câmara. No centro, há um altar de pedra com uma adaga cerimonial feita de obsidiana. A lâmina parece estranhamente afiada, apesar da sua idade.',
            choices: [
                { text: 'Pegar a adaga de obsidiana (lembre-se que você a possui) e continuar explorando a câmara.', destination: 32 },
                { text: 'Ignorar a adaga e procurar por outras saídas.', destination: 26 }
            ]
        },
        18: {
            image: 'imagens/cena18.jpg',
            text: 'Você se afasta da porta principal e começa a circular a base da montanha, procurando por alguma fenda ou entrada escondida. O terreno é acidentado e coberto por pedras soltas e vegetação rasteira. Depois de um tempo, você avista uma abertura estreita na rocha, parcialmente escondida por uma trepadeira grossa. Parece ser uma entrada menor, talvez usada por criaturas ou para propósitos secretos.',
            choices: [
                { text: 'Remover a trepadeira e entrar pela abertura estreita.', destination: 36 },
                { text: 'Continuar procurando por uma entrada mais acessível.', destination: 25 }
            ]
        },
        19: {
            image: 'imagens/cena19.jpg',
            text: 'Você se move cuidadosamente pela sala escura, guiado apenas pela sua audição e pelo leve brilho que emana da fenda no teto. De repente, você ouve um rosnado baixo vindo das sombras à sua frente. Dois pares de olhos vermelhos brilham na escuridão. Parecem ser lobos sombrios, criaturas selvagens que servem ao Rei Sombrio.',
            choices: [
                { text: 'Tentar recuar silenciosamente para a passagem por onde veio.', destination: 34 },
                { text: 'Desembainhar sua espada quebrada e se preparar para lutar.', destination: 23 }
            ]
        },
        20: {
            image: 'imagens/cena20.jpg',
            text: 'Você decide ignorar a estranha estátua e continua explorando a câmara. As paredes estão cobertas por desenhos toscos, representando cenas de sacrifícios e rituais sombrios. No chão, você vê alguns ossos espalhados. Uma passagem escura se abre em um dos cantos da sala.',
            choices: [
                { text: 'Seguir pela passagem escura que sai da sala.', destination: 16 },
                { text: 'Examinar as paredes da câmara com mais cuidado em busca de segredos.', destination: 9 },
                { text: 'Mudar de ideia e decidir interagir com a estátua.', destination: 6 }
            ]
        },
        21: {
            image: 'imagens/cena21.jpg',
            text: 'Você chega à beira de um abismo escuro e largo. A única maneira de atravessar é uma ponte de corda e madeira que parece antiga e instável. Do outro lado, você pode ver uma passagem esculpida na rocha. Uma névoa fria sobe do abismo, e você não consegue ver o fundo. No seu lado da ravina, há uma manivela de ferro enferrujada presa a um mecanismo, provavelmente para recolher ou estabilizar a ponte.',
            choices: [
                { text: 'Tentar atravessar a ponte com cuidado.', destination: 34 },
                { text: 'Tentar usar a manivela para estabilizar a ponte.', destination: 14 }
            ]
        },
        22: {
            image: 'imagens/cena22.jpg',
            text: 'Você se joga no chão de pedra fria no último segundo. As agulhas passam zunindo por cima de você, errando por pouco. Elas se retraem de volta para as paredes com um clique suave. A grade de metal, no entanto, permanece fechada atrás de você, bloqueando seu retorno. Você se levanta, o coração batendo forte, e continua pela passagem escura à frente.',
            choices: [
                { text: 'Você avança pela passagem.', destination: 19 }
            ]
        },
        23: {
            image: 'imagens/cena23.jpg',
            text: 'Você enfrenta os lobos com o que resta de sua espada. As bestas atacam em uníssono, suas garras e presas rasgando o ar. Você consegue aparar o primeiro ataque, mas o segundo lobo o flanqueia, mordendo sua perna. A dor é aguda e o desequilibra. Sem uma arma adequada para se defender, você é rapidamente subjugado pela fúria das criaturas.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi morto pelos guardiões da cripta.'
        },
        24: {
            image: 'imagens/cena24.jpg',
            text: 'Você se aproxima do livro antigo no pedestal. As runas na página brilham com uma luz fraca e sobrenatural. Ao tocar o pergaminho, uma onda de conhecimento antigo inunda sua mente. Você vê imagens do Rei Sombrio forjando a Pedra do Sol e a inscrição de uma runa específica que serve como uma chave. LEMBRE-SE DA RUNA DA ESSÊNCIA. A visão é avassaladora e drena sua energia. Você se sente enfraquecido.',
            choices: [
                { text: 'Mesmo sentindo-se enfraquecido, mas com um novo conhecimento, seguir pela passagem que sai da câmara', destination: 16 },
                { text: 'Tentar absorver mais poder e tentar ler mais do livro.', destination: 31 }
            ]
        },
        25: {
            image: 'imagens/cena25.jpg',
            text: 'Você continua procurando ao redor da base da montanha, ignorando a fenda coberta de trepadeiras. Após vários minutos, você não encontra nada além de rocha sólida e arbustos espinhosos. A única entrada parece ser a porta principal ou a fenda que você viu antes.',
            choices: [
                { text: 'Voltar para tentar a porta principal.', destination: 2 },
                { text: 'Investigar a fenda coberta de trepadeiras.', destination: 36 }
            ]
        },
        26: {
            image: 'imagens/cena26.jpg',
            text: 'Você ignora a adaga e procura por outras saídas na pequena câmara. Em uma parede, você encontra tijolos soltos. Com um pouco de esforço, você os remove, revelando uma passagem estreita e empoeirada.',
            choices: [
                { text: 'Rastejar pela passagem recém-descoberta.', destination: 36 }
            ]
        },
        27: {
            image: 'imagens/cena27.jpg',
            text: 'Você se espreme pela passagem apertada. O ar é rarefeito e o cheiro de poeira e pedra antiga é forte. Depois do que parece uma eternidade, você emerge em uma câmara maior. No centro, uma estátua de um cavaleiro sombrio se ergue, com uma mão estendida como se pedisse algo. Em sua base, há uma inscrição quase ilegível.',
            choices: [
                { text: 'Aproximar-se para ler a inscrição na estátua.', destination: 6 },
                { text: 'Ignora a estátua e explora o resto da sala.', destination: 20 }
            ]
        },
        28: {
            image: 'imagens/cena28.jpg',
            text: '"Um livro?", a voz ecoa com desdém. "Sua mente é tão limitada quanto seu corpo mortal. A ignorância é uma sentença de morte nestas profundezas!" A névoa ao seu redor se adensa e se solidifica, prendendo você no lugar. Você não consegue se mover nem respirar enquanto a pressão esmaga a vida de seu corpo.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Sua resposta errada selou seu destino.'
        },
        29: {
            image: 'imagens/cena29.jpg',
            text: 'A passagem revelada após a charada desce em espiral para as profundezas da cripta. O ar se torna mais frio e você pode ouvir um leve zumbido, como se uma grande fonte de poder estivesse próxima. Você chega a uma grande câmara circular. No centro, sobre um pedestal de obsidiana negra, flutua a Pedra do Sol, pulsando com uma luz quente e dourada. No entanto, entre você e a pedra, uma figura imponente se materializa. É um Cavaleiro Espectral, com armadura negra e olhos que queimam com fogo frio.',
            choices: [
                { text: 'Enfrentar o Cavaleiro com a Adaga de Obsidiana (Requer Adaga de Obsidiana).', destination: 33 }, // Exemplo de escolha condicional
                { text: 'Atacar com sua espada comum.', destination: 11 }
            ]
        },
        30: {
            image: 'imagens/cena30.jpg',
            text: 'Você levanta a tampa pesada do baú de madeira. Dentro, sobre um veludo desbotado, repousa um escudo de aço polido, gravado com o símbolo de um sol nascente. Apesar de antigo, parece incrivelmente resistente. Lembre-se que você agora tem o Escudo do Sol Nascente.',
            choices: [
                { text: 'Satisfeito com sua descoberta, você continua a explorar a câmara, voltando sua atenção para as tapeçarias.', destination: 38 }
            ]
        },
        31: {
            image: 'imagens/cena31.jpg',
            text: 'Você não consegue resistir à atração do conhecimento proibido e continua a ler o livro antigo. As runas dançam diante de seus olhos, e mais visões invadem sua mente – segredos do cosmos, da vida e da morte. O poder é imenso, mas seu corpo mortal não consegue contê-lo. Seu nariz começa a sangrar, sua cabeça lateja com uma dor insuportável, e sua mente se estilhaça em mil pedaços.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi consumido pelo conhecimento que não deveria possuir.'
        },
        32: {
            image: 'imagens/cena32.jpg',
            text: 'Com a adaga de obsidiana em sua posse, você sente uma estranha conexão com a energia sombria do lugar. Você olha ao redor da pequena câmara. Não há outras saídas visíveis, apenas as paredes de pedra fria e o altar vazio onde a adaga repousava.',
            choices: [
                { text: 'Voltar pelo túnel estreito por onde veio.', destination: 36 }
            ]
        },
        33: {
            image: 'imagens/cena33.jpg',
            text: 'O Cavaleiro Espectral ergue sua espada fantasmagórica e avança. O ar ao redor dele crepita com energia necromântica. Você se prepara para o combate. Ele é imune a armas normais, mas a adaga de obsidiana que você carrega pulsa em sua mão, ressoando com a mesma energia sombria da criatura.',
            choices: [
                { text: 'Atacar o Cavaleiro Espectral com a Adaga de Obsidiana.', destination: 40 },
                { text: 'Tentar se defender com o Escudo do Sol Nascente.', destination: 37 }
            ]
        },
        34: {
            image: 'imagens/cena34.jpg',
            text: 'Você atravessa a ponte instável, um passo cuidadoso de cada vez. As tábuas de madeira rangem sob suas botas, e a ponte balança perigosamente sobre o abismo sem fundo. Você mantém o equilíbrio e, após momentos de pura tensão, alcança o outro lado em segurança. Você está em uma passagem que leva a uma grande porta de pedra coberta de runas brilhantes.',
            choices: [
                { text: 'Você lembra da Runa da Essência que viu no livro e arrisca decifrá-las.', destination: 10 },
                { text: 'Vou tentar forçar a porta fisicamente.', destination: 41 }
            ]
        },
        35: {
            image: 'imagens/cena35.jpg',
            text: 'Você chega a uma porta de ferro maciça, firmemente trancada. Uma pequena fechadura prateada se destaca contra o metal escuro.',
            choices: [
                { text: 'Estou com a chave prateada, insiro na fechadura. Ela gira com um clique suave e a porta se abre.', destination: 21 },
                { text: 'Não tenho a chave, a porta permanece como uma barreira intransponível. Vou procurar outro caminho.', destination: 13 }
            ]
        },
        36: {
            image: 'imagens/cena36.jpg',
            text: 'Você afasta a trepadeira e se espreme pela abertura estreita na rocha. O caminho é apertado e escuro. Após alguns metros, a passagem se divide. Um túnel continua reto para a frente, enquanto outro, ainda mais apertado, desce para a escuridão.',
            choices: [
                { text: 'Sigo reto pelo túnel.', destination: 17 },
                { text: 'Desço pelo túnel mais apertado.', destination: 27 }
            ]
        },
        37: {
            image: 'imagens/cena37.jpg',
            text: 'Você ergue o Escudo do Sol Nascente para se defender do ataque do Cavaleiro Espectral. A luz do escudo brilha intensamente, mas o poder da espada espectral é avassalador. A lâmina atravessa o metal como se não fosse nada e o atinge no peito. O frio da morte o envolve instantaneamente.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. O escudo não foi suficiente para deter o guardião final.'
        },
        38: {
            image: 'imagens/cena38.jpg',
            text: 'Você examina as outras tapeçarias com atenção. Uma delas mostra o Rei Sombrio de pé diante de uma porta rúnica. Em sua mão, ele segura um cajado, e a ordem das runas em seu cajado parece ser a chave para abrir a porta. Você memoriza a sequência. LEMBRE-SE, VOCÊ MEMORIZOU A SEQUÊNCIA DE RUNAS.',
            choices: [
                { text: 'Ainda não abri o baú na sala.', destination: 30 },
                { text: 'Vou examinar outras tapeçarias na sala.', destination: 5 },
                { text: 'Encontrei tudo de útil nesta sala, vou procurar uma saída. Encontrei uma porta de ferro.', destination: 35 }
            ]
        },
        39: {
            image: 'imagens/cena39.jpg',
            text: 'Você corre para frente, tentando passar pela grade antes que ela se feche completamente. Você é rápido, mas não o suficiente. A pesada grade de metal desce com uma força esmagadora, prendendo-o sob ela. O peso é imenso e você não consegue se libertar.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você foi esmagado pela armadilha.'
        },
        40: {
            image: 'imagens/cena40.jpg',
            text: 'Enquanto o Cavaleiro Espectral ataca, você se lança para frente, não com sua espada, mas com a adaga de obsidiana. A criatura, sendo de natureza mágica, não espera um ataque de uma arma igualmente encantada. A lâmina negra perfura sua armadura espectral, e o cavaleiro solta um grito agudo e sobrenatural. Ele se dissolve em uma nuvem de fumaça escura, deixando para trás apenas o silêncio. O caminho está livre. Você se aproxima do pedestal e pega a Pedra do Sol. Assim que suas mãos a tocam, uma onda de calor e luz percorre seu corpo, curando seu cansaço e dissipando toda a escuridão da câmara. Com o artefato em segurança, você refaz seus passos e sai da cripta. Lá fora, os primeiros raios de sol em meses rompem as nuvens, derretendo a neve amaldiçoada. Você salvou Eldoria.',
            isEnding: true,
            isVictory: true,
            endingText: 'Você venceu! Parabéns! Sua aventura foi um sucesso!'
        },
        41: {
            image: 'imagens/cena41.jpg',
            text: 'Você ignora as advertências mágicas e usa toda a sua força, batendo com o ombro e a empunhadura da espada contra a porta rúnica. No instante do impacto, as runas brilham em um vermelho vivo e hostil. Uma onda de choque de energia arcana pura é descarregada de volta em você, arremessando-o violentamente contra a parede de pedra oposta. O impacto é fatal.',
            isEnding: true,
            endingText: 'Sua aventura termina aqui. Você subestimou a magia da cripta.'
        }
        // PREENCHA AS OUTRAS CENAS AQUI...
    };

    // --- Elementos do DOM ---
    const introScreen = document.getElementById('intro-screen');
    const sceneContainer = document.getElementById('scene-container');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    
    const sceneImage = document.getElementById('scene-image');
    const sceneNumber = document.getElementById('scene-number');
    const sceneText = document.getElementById('scene-text');
    const sceneChoices = document.getElementById('scene-choices');

    const gameOverMessage = document.getElementById('game-over-message');
    const gameOverText = document.getElementById('game-over-text');

    // --- Lógica do Jogo ---
    function showScene(id) {
        const scene = adventureData[id];
        if (!scene) {
            console.error(`Cena com ID ${id} não encontrada!`);
            return;
        }

        // Atualiza conteúdo da cena
        sceneImage.src = scene.image;
        sceneNumber.textContent = `Entrada ${id}`;
        sceneText.textContent = scene.text;

        // Limpa escolhas anteriores
        sceneChoices.innerHTML = '';
        gameOverMessage.classList.add('hidden');
        sceneChoices.classList.remove('hidden');

        if (scene.isEnding) {
            // É um final
            sceneChoices.classList.add('hidden');
            gameOverText.textContent = scene.endingText;
            if (scene.isVictory) {
                gameOverText.style.color = '#78e08f'; // Verde para vitória
            } else {
                gameOverText.style.color = '#ff6b6b'; // Vermelho para derrota
            }
            gameOverMessage.classList.remove('hidden');
        } else {
            // Não é um final, cria botões de escolha
            scene.choices.forEach(choice => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.className = 'choice-button';
                button.onclick = () => showScene(choice.destination);
                sceneChoices.appendChild(button);
            });
        }
    }

    // --- Eventos ---
    startButton.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        sceneContainer.classList.remove('hidden');
        showScene(1);
    });

    restartButton.addEventListener('click', () => {
        // Para uma reinicialização completa, recarregamos a página.
        // Para uma versão mais complexa com inventário, seria necessário resetar o estado.
        window.location.reload();
    });
});